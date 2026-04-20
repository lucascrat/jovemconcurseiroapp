const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const subtopicIds = [
  '40d02654b9a55ecdbaff15a5e83398b0', // DUDH
  '5ac65722ba1f2a8eb4a7f8477e130e3e', // SUS
  '7b2fbbd440dd080eaab781fb6d0ff1dc', // Redação
  '5f9c0ac1592041a77be63a26bda6daf6', // Crase
  '90ffcb2495eb4ad944468870f5b625dc'  // Juros
];

async function main() {
  try {
    await client.connect();
    const res = await client.query('SELECT id, "topicId", name FROM "SubTopic" WHERE id = ANY($1)', [subtopicIds]);
    console.log(JSON.stringify(res.rows, null, 2));

    const topicIds = res.rows.map(r => r.topicId);
    const topics = await client.query('SELECT id, title FROM "Topic" WHERE id = ANY($1)', [topicIds]);
    console.log("\nParent Topics:");
    console.log(JSON.stringify(topics.rows, null, 2));

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
