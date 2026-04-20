const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});
async function main() {
  await client.connect();
  const res = await client.query(`
    SELECT st.id, st.name, t.title as topic, s.name as subject, LENGTH(st.content) as len
    FROM "SubTopic" st
    JOIN "Topic" t ON t.id = st."topicId"
    JOIN "Subject" s ON s.id = t."subjectId"
    WHERE s.name IN (
      'Direito Constitucional','Aprofundamentos e Extras',
      'Física (PRF)','Geopolítica Brasileira (PRF)',
      'Legislação Geral','Direito Administrativo'
    )
    ORDER BY s.name, t.title, st.name
  `);
  console.log(JSON.stringify(res.rows, null, 2));
  await client.end();
}
main();
