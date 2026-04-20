const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    
    console.log("Listing all tables...");
    const tablesRes = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
    console.log("Tables:", tablesRes.rows.map(r => r.table_name));

    for (const table of tablesRes.rows) {
      console.log(`\nColumns for ${table.table_name}:`);
      const colsRes = await client.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = '${table.table_name}'`);
      console.table(colsRes.rows);
    }

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
