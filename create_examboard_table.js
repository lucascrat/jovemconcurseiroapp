const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    
    console.log("Creating ExamBoard table...");
    await client.query(`
      CREATE TABLE IF NOT EXISTS "ExamBoard" (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        difficulty TEXT,
        style TEXT,
        lawFocus TEXT,
        mainFeature TEXT,
        description TEXT,
        tips TEXT
      )
    `);
    
    console.log("Table created successfully.");

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
