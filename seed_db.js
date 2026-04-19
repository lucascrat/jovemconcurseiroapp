const { Client } = require('pg');
const fs = require('fs');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}

async function main() {
  try {
    await client.connect();
    console.log("Connected to database.");

    const rawData = fs.readFileSync('conteudo_concursos.json', 'utf8');
    const jsonData = JSON.parse(rawData);

    await client.query('BEGIN');

    // Create a new table to hold sub-topics representing 'Micro-Aulas' / sub-materias since the original schema 
    // only had Subject (Disciplina) -> Topic (Materia). The prompt asks for Disciplinas -> Materias -> Submatérias.
    // We will map:
    // Subject -> Disciplina
    // Topic -> Materia
    // SubTopic (New Table) -> Submatéria
    
    await client.query(`
      CREATE TABLE IF NOT EXISTS "SubTopic" (
        id TEXT PRIMARY KEY,
        "topicId" TEXT REFERENCES "Topic"(id) ON DELETE CASCADE,
        name TEXT NOT NULL,
        "importanciaBanca" JSONB,
        "blocosSugeridos" JSONB,
        content TEXT
      );
    `);

    for (const item of jsonData.conteudo) {
      // 1. Insert Subject
      const subjectId = generateId();
      await client.query(
        'INSERT INTO "Subject" (id, name, level, description) VALUES ($1, $2, $3, $4)',
        [subjectId, item.disciplina, item.nivel, '']
      );

      // 2. Insert Topics (Materias)
      let topicOrder = 1;
      for (const materia of item.materias) {
        const topicId = generateId();
        await client.query(
          'INSERT INTO "Topic" (id, "subjectId", title, "videoUrl", content, "order") VALUES ($1, $2, $3, $4, $5, $6)',
          [topicId, subjectId, materia.titulo_materia, '', '', topicOrder++]
        );

        // 3. Insert SubTopics (Submaterias)
        for (const submateria of materia.submaterias) {
           const subTopicId = generateId();
           await client.query(
             'INSERT INTO "SubTopic" (id, "topicId", name, "importanciaBanca", "blocosSugeridos", content) VALUES ($1, $2, $3, $4, $5, $6)',
             [subTopicId, topicId, submateria.nome, JSON.stringify(submateria.importancia_banca || {}), JSON.stringify(submateria.blocos_sugeridos || []), '']
           );
        }
      }
    }

    await client.query('COMMIT');
    console.log("Database seeded successfully with the new structure!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Error seeding database:", err);
  } finally {
    await client.end();
  }
}

main();
