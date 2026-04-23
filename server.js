require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { v4: uuidv4 } = require('uuid');
const gemini = require('./gemini_service');

const app = express();
const port = process.env.PORT || 80;

// Admin Credentials
const ADMIN_USER = "Holanda";
const ADMIN_PASS = "01Deus02@";

app.use(cors());
app.use(express.json());

// Login Route
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    res.json({ success: true, token: 'admin-secret-token' });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

// Middleware for Admin Auth
const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader === 'admin-secret-token') {
    next();
  } else {
    res.status(403).json({ error: 'Não autorizado' });
  }
};

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

// Configure R2 / S3 Client
const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const upload = multer({ storage: multer.memoryStorage() });

// ==========================================
// ADMIN UPLOAD ROUTE
// ==========================================
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileExtension = req.file.originalname.split('.').pop();
    const fileName = `${uuidv4()}.${fileExtension}`;
    const bucketName = process.env.R2_BUCKET_NAME;

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    });

    await s3Client.send(command);

    const publicUrl = `${process.env.R2_PUBLIC_DOMAIN}/${fileName}`;
    res.json({ url: publicUrl });
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ error: 'Failed to upload file to R2' });
  }
});

// ==========================================
// READ ROUTES (PUBLIC)
// ==========================================
app.get('/api/subjects', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, level, description FROM "Subject" ORDER BY name');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/topics/:subjectId', async (req, res) => {
  try {
    const { subjectId } = req.params;
    const result = await pool.query(
      'SELECT id, "subjectId", title, "videoUrl", content, "order", "audioUrl", "mindMapUrl" FROM "Topic" WHERE "subjectId" = $1 ORDER BY "order"',
      [subjectId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/subtopics/:topicId', async (req, res) => {
  try {
    const { topicId } = req.params;
    const result = await pool.query(
      'SELECT id, "topicId", name, "importanciaBanca", "blocosSugeridos", content, "videoUrl", "audioUrl", "mindMapUrl" FROM "SubTopic" WHERE "topicId" = $1 ORDER BY name',
      [topicId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/questions/:topicId', async (req, res) => {
  try {
    const { topicId } = req.params;
    const result = await pool.query(
      'SELECT id, "topicId", banca, statement, options, "correctAnswer", type, explanation, concurso, ano FROM "Question" WHERE "topicId" = $1',
      [topicId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// ==========================================
// ADMIN EXAM BOARD & GEMINI AI ROUTES
// ==========================================

// --- Exam Boards ---
app.get('/api/admin/boards', adminAuth, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "ExamBoard" ORDER BY name');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/api/admin/boards', adminAuth, async (req, res) => {
  try {
    const { id, name, difficulty, style, analysis, logoUrl } = req.body;
    await pool.query(
      'INSERT INTO "ExamBoard" (id, name, difficulty, style, analysis, "logoUrl") VALUES ($1, $2, $3, $4, $5, $6)',
      [id, name, difficulty, style, analysis, logoUrl]
    );
    res.json({ id, name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.put('/api/admin/boards/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, difficulty, style, analysis, logoUrl } = req.body;
    await pool.query(
      'UPDATE "ExamBoard" SET name = $1, difficulty = $2, style = $3, analysis = $4, "logoUrl" = $5 WHERE id = $6',
      [name, difficulty, style, analysis, logoUrl, id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// --- Gemini Extraction ---
app.post('/api/admin/extract-questions', adminAuth, upload.single('file'), async (req, res) => {
  try {
    const { banca } = req.body;
    const file = req.file;
    
    if (!file) return res.status(400).json({ error: 'No file uploaded' });
    
    const questions = await gemini.extractQuestions(
      file.buffer, 
      file.mimetype, 
      banca || 'Desconhecida'
    );
    
    res.json({ 
      extractedCount: questions.length,
      questions 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI processing error: ' + err.message });
  }
});

app.post('/api/admin/analyze-board', adminAuth, async (req, res) => {
  try {
    const { questions, boardName, boardId } = req.body;
    const analysis = await gemini.analyzeBoardStyle(questions, boardName);
    
    if (boardId) {
      await pool.query('UPDATE "ExamBoard" SET analysis = $1 WHERE id = $2', [analysis, boardId]);
    }
    
    res.json({ analysis });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Analysis error' });
  }
});

// ==========================================
// ADMIN CRUD ROUTES
// ==========================================

// --- Subjects ---
app.get('/api/admin/subjects', adminAuth, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Subject" ORDER BY name');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/api/admin/subjects', adminAuth, async (req, res) => {
  try {
    const { name, level, description } = req.body;
    const id = uuidv4().replace(/-/g, '');
    await pool.query(
      'INSERT INTO "Subject" (id, name, level, description) VALUES ($1, $2, $3, $4)',
      [id, name, level, description]
    );
    res.json({ id, name, level, description });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.put('/api/admin/subjects/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, level, description } = req.body;
    await pool.query(
      'UPDATE "Subject" SET name = $1, level = $2, description = $3 WHERE id = $4',
      [name, level, description, id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.delete('/api/admin/subjects/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM "Subject" WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// --- Topics ---
app.get('/api/admin/topics', adminAuth, async (req, res) => {
  try {
    const { subjectId } = req.query;
    let query = 'SELECT t.*, s.name as "subjectName" FROM "Topic" t JOIN "Subject" s ON t."subjectId" = s.id';
    const params = [];
    if (subjectId) {
      query += ' WHERE t."subjectId" = $1';
      params.push(subjectId);
    }
    query += ' ORDER BY s.name, t."order"';
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/api/admin/topics', adminAuth, async (req, res) => {
  try {
    const { subjectId, title, videoUrl, content, order, audioUrl, mindMapUrl } = req.body;
    const id = uuidv4().replace(/-/g, '');
    await pool.query(
      'INSERT INTO "Topic" (id, "subjectId", title, "videoUrl", content, "order", "audioUrl", "mindMapUrl") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
      [id, subjectId, title, videoUrl || '', content || '', order || 0, audioUrl || null, mindMapUrl || null]
    );
    res.json({ id, subjectId, title });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.put('/api/admin/topics/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, videoUrl, content, order, audioUrl, mindMapUrl } = req.body;
    await pool.query(
      'UPDATE "Topic" SET title = $1, "videoUrl" = $2, content = $3, "order" = $4, "audioUrl" = $5, "mindMapUrl" = $6 WHERE id = $7',
      [title, videoUrl || '', content || '', order || 0, audioUrl || null, mindMapUrl || null, id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.delete('/api/admin/topics/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM "Topic" WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// --- SubTopics ---
app.get('/api/admin/subtopics', adminAuth, async (req, res) => {
  try {
    const { topicId } = req.query;
    let query = 'SELECT st.*, t.title as "topicTitle" FROM "SubTopic" st JOIN "Topic" t ON st."topicId" = t.id';
    const params = [];
    if (topicId) {
      query += ' WHERE st."topicId" = $1';
      params.push(topicId);
    }
    query += ' ORDER BY t.title, st.name';
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/api/admin/subtopics', adminAuth, async (req, res) => {
  try {
    const { topicId, name, content, videoUrl, audioUrl, mindMapUrl } = req.body;
    const id = uuidv4().replace(/-/g, '');
    // ImportanciaBanca e BlocosSugeridos as empty defaults for now
    await pool.query(
      'INSERT INTO "SubTopic" (id, "topicId", name, "importanciaBanca", "blocosSugeridos", content, "videoUrl", "audioUrl", "mindMapUrl") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
      [id, topicId, name, '{}', '[]', content || '', videoUrl || null, audioUrl || null, mindMapUrl || null]
    );
    res.json({ id, topicId, name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.put('/api/admin/subtopics/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, content, videoUrl, audioUrl, mindMapUrl } = req.body;
    await pool.query(
      'UPDATE "SubTopic" SET name = $1, content = $2, "videoUrl" = $3, "audioUrl" = $4, "mindMapUrl" = $5 WHERE id = $6',
      [name, content || '', videoUrl || null, audioUrl || null, mindMapUrl || null, id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.delete('/api/admin/subtopics/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM "SubTopic" WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// --- Questions ---
app.get('/api/admin/questions', adminAuth, async (req, res) => {
  try {
    const { topicId } = req.query;
    let query = 'SELECT q.*, t.title as "topicTitle" FROM "Question" q JOIN "Topic" t ON q."topicId" = t.id';
    const params = [];
    if (topicId) {
      query += ' WHERE q."topicId" = $1';
      params.push(topicId);
    }
    query += ' ORDER BY t.title, q.id LIMIT 100'; // Limit to avoid massive payload
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/api/admin/questions', adminAuth, async (req, res) => {
  try {
    const { topicId, banca, statement, options, correctAnswer, type, explanation, concurso, ano } = req.body;
    const id = uuidv4().replace(/-/g, '');
    await pool.query(
      'INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation, concurso, ano) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
      [id, topicId, banca, statement, JSON.stringify(options), correctAnswer, type, explanation, concurso, ano]
    );
    res.json({ id, topicId, statement });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.put('/api/admin/questions/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { banca, statement, options, correctAnswer, type, explanation, concurso, ano } = req.body;
    await pool.query(
      'UPDATE "Question" SET banca = $1, statement = $2, options = $3, "correctAnswer" = $4, type = $5, explanation = $6, concurso = $7, ano = $8 WHERE id = $9',
      [banca, statement, JSON.stringify(options), correctAnswer, type, explanation, concurso, ano, id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.delete('/api/admin/questions/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM "Question" WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});


// Serve Admin Panel Static Files
const adminDist = path.join(__dirname, 'foco_admin/dist');

app.use('/admin', (req, res, next) => {
    console.log(`Admin Request: ${req.url}`);
    next();
}, express.static(adminDist));

app.all('/admin*', (req, res) => {
    console.log(`Admin Fallback: ${req.url}`);
    res.sendFile(path.join(adminDist, 'index.html'));
});

// Serve Flutter Web Build
const flutterDist = path.join(__dirname, 'foco_concurso_app/build/web');
app.use(express.static(flutterDist));

app.get('*', (req, res) => {
    res.sendFile(path.join(flutterDist, 'index.html'));
});

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
