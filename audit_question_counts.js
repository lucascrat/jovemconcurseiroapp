const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});
async function main() {
  await client.connect();
  const res = await client.query(`
    SELECT t.title, COUNT(q.id) as total 
    FROM "Topic" t
    LEFT JOIN "Question" q ON q."topicId" = t.id
    GROUP BY t.title
    HAVING COUNT(q.id) > 0
    ORDER BY total DESC
  `);
  console.table(res.rows);
  await client.end();
}
main();
