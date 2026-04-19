const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    await client.connect();
    const subjects = await client.query('SELECT id, name, level FROM "Subject"');
    const topics = await client.query('SELECT id, title, "subjectId" FROM "Topic"');
    const subtopics = await client.query('SELECT id, name, "topicId" FROM "SubTopic"');
    
    console.log(JSON.stringify({
      subjects: subjects.rows,
      topics: topics.rows,
      subtopics: subtopics.rows
    }, null, 2));
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
run();
