const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    const tables = ['Subject', 'Topic', 'SubTopic', 'Question'];
    for (const table of tables) {
      const res = await client.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = '${table}'`);
      console.log(`Table ${table} schema:`, res.rows);
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
