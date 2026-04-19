const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function test() {
  try {
    await client.connect();
    // find topic id for Sílabas
    const tRes = await client.query('SELECT * FROM "Topic" WHERE title = $1', ['Sílabas']);
    console.log("Topic:", tRes.rows);
    if (tRes.rows.length > 0) {
      const topicId = tRes.rows[0].id;
      console.log("Topic ID:", topicId);
      const stRes = await client.query('SELECT * FROM "SubTopic" WHERE "topicId" = $1', [topicId]);
      console.log("Subtopics found:", stRes.rows.length);
      console.log("SubTopics:", stRes.rows);
    }
  } catch(e) {
    console.error(e);
  } finally {
    client.end();
  }
}
test();
