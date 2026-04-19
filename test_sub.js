const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function test() {
  try {
    await client.connect();
    const res = await client.query('SELECT * FROM "SubTopic" LIMIT 2');
    console.log(res.rows);
  } catch(e) {
    console.error(e);
  } finally {
    client.end();
  }
}
test();
