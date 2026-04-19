const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    const res = await client.query('SELECT name, length(content) as content_length FROM "SubTopic" ORDER BY content_length ASC LIMIT 5');
    console.log("Shortest contents:", res.rows);
    const avg = await client.query('SELECT AVG(length(content)) FROM "SubTopic"');
    console.log('Average length:', avg.rows[0].avg);
  } catch(e) {
    console.error(e);
  } finally {
    client.end();
  }
}

main();
