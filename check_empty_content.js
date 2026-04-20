const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    const res = await client.query('SELECT id, name, content FROM "SubTopic" ORDER BY name');
    
    console.log("Subtopics with NO content:");
    const empty = res.rows.filter(r => !r.content || r.content.trim() === '');
    empty.forEach(r => {
      console.log(` - ID: ${r.id} | Title: ${r.title}`);
    });
    
    console.log(`\nTotal empty: ${empty.length} out of ${res.rows.length}`);

    console.log("\nSubtopics WITH content:");
    const filled = res.rows.filter(r => r.content && r.content.trim() !== '');
    filled.forEach(r => {
        // console.log(` - ID: ${r.id} | Title: ${r.title}`);
    });
    console.log(`Total filled: ${filled.length}`);

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
