const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    console.log("Adding concurso and ano columns to Question table...");
    await client.query('ALTER TABLE "Question" ADD COLUMN IF NOT EXISTS concurso TEXT');
    await client.query('ALTER TABLE "Question" ADD COLUMN IF NOT EXISTS ano INTEGER');
    console.log("Migration successful.");
  } catch (err) {
    console.error("Migration failed:", err);
  } finally {
    await client.end();
  }
}

main();
