const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});
async function main() {
  await client.connect();

  // Check Question table columns
  const cols = await client.query(`
    SELECT column_name, data_type 
    FROM information_schema.columns 
    WHERE table_name = 'Question' 
    ORDER BY ordinal_position
  `);
  console.log('Question cols:', cols.rows.map(r => `${r.column_name}(${r.data_type})`));

  // Count by subject
  const counts = await client.query(`
    SELECT s.name as subject, COUNT(q.id) as total
    FROM "Question" q
    JOIN "Topic" t ON t.id = q."topicId"
    JOIN "Subject" s ON s.id = t."subjectId"
    GROUP BY s.name
    ORDER BY total DESC
  `);
  console.log('\nQuestões por matéria:');
  counts.rows.forEach(r => console.log(`  ${r.total.toString().padStart(4)} | ${r.subject}`));

  const total = await client.query('SELECT COUNT(*) FROM "Question"');
  console.log(`\nTotal: ${total.rows[0].count} questões`);

  // Least-covered topics
  const topics = await client.query(`
    SELECT t.id, t.title, s.name as subject, COUNT(q.id) as qtd
    FROM "Topic" t
    JOIN "Subject" s ON s.id = t."subjectId"
    LEFT JOIN "Question" q ON q."topicId" = t.id
    GROUP BY t.id, t.title, s.name
    ORDER BY qtd ASC, s.name
    LIMIT 40
  `);
  console.log('\n40 tópicos com menos questões:');
  topics.rows.forEach(r => console.log(`  ${r.qtd.toString().padStart(3)} | ${r.subject} → ${r.title} [${r.id}]`));

  await client.end();
}
main();
