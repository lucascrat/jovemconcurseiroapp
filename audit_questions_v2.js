const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});
async function main() {
  await client.connect();
  const res = await client.query(`
    SELECT s.name as subject, COUNT(q.id) as total
    FROM "QuizQuestion" q
    JOIN "Topic" t ON t.id = q."topicId"
    JOIN "Subject" s ON s.id = t."subjectId"
    GROUP BY s.name
    ORDER BY total DESC
  `);
  console.log('=== Questões por matéria ===');
  res.rows.forEach(r => console.log(`${r.total.toString().padStart(4)} | ${r.subject}`));
  
  const total = await client.query('SELECT COUNT(*) FROM "QuizQuestion"');
  console.log(`\nTotal geral: ${total.rows[0].count} questões`);

  const topics = await client.query(`
    SELECT t.id, t.title, s.name as subject, COUNT(q.id) as qtd
    FROM "Topic" t
    JOIN "Subject" s ON s.id = t."subjectId"
    LEFT JOIN "QuizQuestion" q ON q."topicId" = t.id
    GROUP BY t.id, t.title, s.name
    ORDER BY s.name, qtd ASC
    LIMIT 40
  `);
  console.log('\n=== 40 tópicos com menos questões ===');
  topics.rows.forEach(r => console.log(`${r.qtd.toString().padStart(3)} | ${r.subject} → ${r.title} [${r.id}]`));
  await client.end();
}
main();
