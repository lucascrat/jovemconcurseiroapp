const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    const res = await client.query(`
      SELECT s.id, s.name, t.title as materia 
      FROM "SubTopic" s 
      JOIN "Topic" t ON s."topicId" = t.id 
      ORDER BY s.id
    `);
    console.log("Total unique subtopics:", res.rowCount);
    // Print first 20 to see the order
    console.log(JSON.stringify(res.rows.slice(0, 20), null, 2));
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
