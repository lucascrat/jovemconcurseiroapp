const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  await client.connect();
  const res = await client.query('SELECT id, name, length(content) as content_length FROM "SubTopic" ORDER BY length(content) ASC LIMIT 20');
  console.log(JSON.stringify(res.rows, null, 2));
  await client.end();
}
main();
