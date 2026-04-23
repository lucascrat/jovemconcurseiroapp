const { Pool } = require('pg');
const pool = new Pool({ 
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    await pool.query('ALTER TABLE "Question" ADD COLUMN IF NOT EXISTS "textBase" TEXT DEFAULT \'\'');
    console.log('Column textBase added successfully!');
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}
run();
