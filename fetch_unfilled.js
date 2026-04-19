const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    const res = await client.query(`
      SELECT s.id, s.name, s."topicId", s."blocosSugeridos", t.title as materia 
      FROM "SubTopic" s 
      JOIN "Topic" t ON s."topicId" = t.id 
      WHERE s.content IS NULL OR s.content = ''
      ORDER BY s.id
      LIMIT 5
    `);
    console.log(JSON.stringify(res.rows, null, 2));
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
