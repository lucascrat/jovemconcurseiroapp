const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    
    console.log("Listing all current subjects and topics...");
    const res = await client.query(`
      SELECT s.name as subject, t.title as topic 
      FROM "Subject" s 
      JOIN "Topic" t ON s.id = t."subjectId"
      ORDER BY s.name, t.title
    `);
    
    console.log(JSON.stringify(res.rows, null, 2));

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
