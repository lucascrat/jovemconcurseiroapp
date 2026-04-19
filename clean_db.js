const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function clean() {
  try {
    await client.connect();
    
    // Find all topics that do not have any subtopics
    const res = await client.query(`
      SELECT DISTINCT "subjectId" 
      FROM "Topic" t
      LEFT JOIN "SubTopic" s ON t.id = s."topicId"
      WHERE s.id IS NULL
    `);
    
    const badSubjectIds = res.rows.map(r => r.subjectId);
    console.log("Subjects to delete:", badSubjectIds.length);
    
    if (badSubjectIds.length > 0) {
      await client.query('BEGIN');
      
      for (const sId of badSubjectIds) {
        // Delete topics (Subtopics are already null for these)
        await client.query('DELETE FROM "Topic" WHERE "subjectId" = $1', [sId]);
        // Delete subject
        await client.query('DELETE FROM "Subject" WHERE id = $1', [sId]);
      }
      
      await client.query('COMMIT');
      console.log("Mock data cleaned up successfully!");
    } else {
      console.log("No mock data found.");
    }
    
  } catch(e) {
    await client.query('ROLLBACK');
    console.error(e);
  } finally {
    client.end();
  }
}
clean();
