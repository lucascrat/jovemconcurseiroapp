const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

// API Routes
app.get('/api/subjects', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, level, description FROM "Subject"');
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
      'SELECT id, "subjectId", title, "videoUrl", content, "order" FROM "Topic" WHERE "subjectId" = $1 ORDER BY "order"',
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
      'SELECT id, "topicId", name, "importanciaBanca", "blocosSugeridos", content FROM "SubTopic" WHERE "topicId" = $1',
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
      'SELECT id, "topicId", banca, statement, options, "correctAnswer", type, explanation FROM "Question" WHERE "topicId" = $1',
      [topicId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Serve Flutter Web Build
app.use(express.static(path.join(__dirname, 'foco_concurso_app/build/web')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'foco_concurso_app/build/web/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
