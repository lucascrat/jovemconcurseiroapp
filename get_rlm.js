const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  await client.connect();
  const res = await client.query(`
    SELECT st.name as sub_name, s.level 
    FROM "SubTopic" st 
    JOIN "Topic" t ON st."topicId" = t.id 
    JOIN "Subject" s ON t."subjectId" = s.id 
    WHERE s.name LIKE '%Lógico%' OR s.name LIKE '%Matemática%'
  `);
  console.log(res.rows);
  await client.end();
}
main();
