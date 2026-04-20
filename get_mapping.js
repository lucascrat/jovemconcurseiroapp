const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    
    const query = `
      SELECT t.id as topic_id, t.title as topic_title, s.id as subject_id, s.name as subject_name, s.level 
      FROM "Topic" t 
      JOIN "Subject" s ON t."subjectId" = s.id
      ORDER BY s.level, s.name, t.title
    `;
    
    const res = await client.query(query);
    console.log(JSON.stringify(res.rows, null, 2));

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
