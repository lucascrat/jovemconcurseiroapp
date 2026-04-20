const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  await client.connect();
  const res = await client.query(`
    SELECT sj.name as subject, t.title as topic, s.name as subtopic, s.id as subtopic_id, t.id as topic_id
    FROM "Topic" t
    LEFT JOIN "SubTopic" s ON s."topicId" = t.id 
    JOIN "Subject" sj ON t."subjectId" = sj.id 
    WHERE sj.name LIKE '%Conhecimentos Regionais%' 
       OR sj.name = 'Direito Administrativo'
       OR sj.name = 'Direito Constitucional'
       OR sj.name = 'Direito Penal'
       OR sj.name = 'Simulados PRF (Histórico)'
    ORDER BY sj.name, t.title
  `);
  console.log(JSON.stringify(res.rows, null, 2));
  await client.end();
}
main();
