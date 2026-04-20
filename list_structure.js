const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    const res = await client.query('SELECT id, title FROM "Topic" ORDER BY title');
    console.log("Existing Topics:");
    res.rows.forEach(r => {
      console.log(` - ID: ${r.id} | Title: ${r.title}`);
    });

    const res2 = await client.query('SELECT id, name FROM "Subject" ORDER BY name');
    console.log("\nExisting Subjects:");
    res2.rows.forEach(r => {
      console.log(` - ID: ${r.id} | Name: ${r.name}`);
    });

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
