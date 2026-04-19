const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    await client.connect();
    const resCount = await client.query('SELECT count(*) FROM "SubTopic"');
    console.log('Total sub-topics in DB:', resCount.rows[0].count);
    
    const resList = await client.query('SELECT name FROM "SubTopic" ORDER BY name');
    console.log('List of sub-topics in DB:');
    resList.rows.forEach(r => console.log(' - ' + r.name));
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
run();
