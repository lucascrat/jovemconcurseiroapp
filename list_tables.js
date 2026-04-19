const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});
async function main() {
  await client.connect();
  const tables = await client.query("SELECT tablename FROM pg_tables WHERE schemaname='public'");
  console.log('Tables:', tables.rows.map(r => r.tablename));
  await client.end();
}
main();
