const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    
    const subjectRes = await client.query('SELECT id, name, level FROM "Subject" ORDER BY level, name');
    const topicRes = await client.query('SELECT id, title, "subjectId" FROM "Topic"');
    const subTopicRes = await client.query('SELECT id, name, "topicId" FROM "SubTopic"');

    const subjects = subjectRes.rows;
    const topics = topicRes.rows;
    const subTopics = subTopicRes.rows;

    console.log("Current Database Content Audit by Level:\n");

    const levels = ['Fundamental', 'Médio', 'Superior'];
    
    for (const lvl of levels) {
      console.log(`--- LEVEL: ${lvl} ---`);
      const levelSubjects = subjects.filter(s => s.level === lvl);
      
      for (const s of levelSubjects) {
          console.log(`SUBJECT: ${s.name}`);
          const sTopics = topics.filter(t => t.subjectId === s.id);
          for (const t of sTopics) {
              console.log(`  Topic: ${t.title}`);
              const tSubTopics = subTopics.filter(st => st.topicId === t.id);
              for (const st of tSubTopics) {
                  console.log(`    - ${st.name}`);
              }
          }
      }
      console.log("");
    }

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
