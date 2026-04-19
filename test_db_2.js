const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function test() {
  try {
    await client.connect();
    const stRes = await client.query('SELECT s.id, s.name, s."topicId", t.title FROM "SubTopic" s JOIN "Topic" t ON s."topicId" = t.id limit 10');
    console.log("SubTopics:", stRes.rows);
  } catch(e) {
    console.error(e);
  } finally {
    client.end();
  }
}
test();
