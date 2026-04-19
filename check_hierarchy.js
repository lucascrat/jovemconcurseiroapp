const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    await client.connect();
    const subjects = await client.query('SELECT * FROM "Subject"');
    const topics = await client.query('SELECT * FROM "Topic"');
    const subtopics = await client.query('SELECT * FROM "SubTopic"');

    console.log(`Subjects: ${subjects.rows.length}`);
    subjects.rows.forEach(s => {
      console.log(`[Subject] ${s.name} (${s.level}) - ID: ${s.id}`);
      const subjectTopics = topics.rows.filter(t => t.subjectId === s.id);
      console.log(`  Topics: ${subjectTopics.length}`);
      subjectTopics.forEach(t => {
        console.log(`  [Topic] ${t.title} - ID: ${t.id}`);
        const topicSubTopics = subtopics.rows.filter(st => st.topicId === t.id);
        console.log(`    SubTopics: ${topicSubTopics.length}`);
        topicSubTopics.forEach(st => {
          console.log(`    - ${st.name}`);
        });
      });
    });
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
run();
