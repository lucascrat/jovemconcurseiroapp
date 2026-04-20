const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const keys = ['a', 'b', 'c', 'd', 'e'];

async function main() {
  try {
    await client.connect();
    
    console.log("Identifying questions with malformed options (Arrays)...");
    const res = await client.query('SELECT id, options FROM "Question"');
    
    let fixCount = 0;
    for (const row of res.rows) {
      if (Array.isArray(row.options)) {
        const optionArray = row.options;
        const optionMap = {};
        
        optionArray.forEach((val, idx) => {
          if (idx < keys.length) {
            optionMap[keys[idx]] = val;
          }
        });
        
        console.log(`Fixing Question ${row.id}: Array -> Map`);
        await client.query('UPDATE "Question" SET options = $1 WHERE id = $2', [JSON.stringify(optionMap), row.id]);
        fixCount++;
      }
    }
    
    console.log(`\nSuccessfully fixed ${fixCount} questions.`);

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
