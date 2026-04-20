const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const targetTopics = [
  'DUDH', 'SUS', 'Redação', 'Crase', 'Juros', 'Maria da Penha', 'CTB', 'Agentes Públicos', 'Direito Civil', 'Legislativo'
];

async function main() {
  try {
    await client.connect();
    
    // Get SubTopics that match targets
    const res = await client.query('SELECT id, name FROM "SubTopic"');
    const allSubTopics = res.rows;

    console.log("Checking questions for target topics:");

    for (const target of targetTopics) {
      const matches = allSubTopics.filter(st => st.name.toLowerCase().includes(target.toLowerCase()));
      if (matches.length === 0) {
        console.log(`- ${target}: NO SUBTOPICS FOUND`);
        continue;
      }

      for (const match of matches) {
        // Question table has topicId. In this schema, SubTopic ID is used as topicId in Question table?
        // Let's check Question table's topicId references.
        // Actually, usually it's SubTopic ID.
        const qCount = await client.query('SELECT count(*) FROM "Question" WHERE "topicId" = $1', [match.id]);
        console.log(`- ${target} (SubTopic: ${match.name}): ${qCount.rows[0].count} questions`);
      }
    }

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
