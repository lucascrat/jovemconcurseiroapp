const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    await client.connect();
    const subjects = await client.query('SELECT count(*) FROM "Subject"');
    const topics = await client.query('SELECT count(*) FROM "Topic"');
    const subtopics = await client.query('SELECT count(*) FROM "SubTopic"');
    
    console.log(`Subjects: ${subjects.rows[0].count}`);
    console.log(`Topics: ${topics.rows[0].count}`);
    console.log(`SubTopics: ${subtopics.rows[0].count}`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
run();
