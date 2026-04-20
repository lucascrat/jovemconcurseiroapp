const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    
    console.log("Checking for malformed options in Question table...");
    const res = await client.query('SELECT id, options, "topicId" FROM "Question"');
    
    let badCount = 0;
    res.rows.forEach(row => {
      // options should be an object (Map), not an array, string, or null
      if (typeof row.options !== 'object' || row.options === null || Array.isArray(row.options)) {
        console.log(`Bad Question ID: ${row.id} - Topic ID: ${row.topicId}`);
        console.log(`Type: ${typeof row.options} - Is Array: ${Array.isArray(row.options)}`);
        console.log(`Value: ${JSON.stringify(row.options)}`);
        badCount++;
      }
    });
    
    if (badCount === 0) {
      console.log("No malformed options found in Question table.");
    } else {
      console.log(`Found ${badCount} malformed questions.`);
    }

    // Also check SubTopic for importanciaBanca and blocosSugeridos
    console.log("\nChecking for malformed fields in SubTopic table...");
    const stRes = await client.query('SELECT id, "importanciaBanca", "blocosSugeridos" FROM "SubTopic"');
    let badStCount = 0;
    stRes.rows.forEach(row => {
      if (row.importanciaBanca && (typeof row.importanciaBanca !== 'object' || Array.isArray(row.importanciaBanca))) {
         console.log(`Bad SubTopic ID: ${row.id} - importanciaBanca is ${typeof row.importanciaBanca}`);
         badStCount++;
      }
      if (row.blocosSugeridos && !Array.isArray(row.blocosSugeridos)) {
         console.log(`Bad SubTopic ID: ${row.id} - blocosSugeridos is ${typeof row.blocosSugeridos}`);
         badStCount++;
      }
    });

    if (badStCount === 0) {
        console.log("No malformed fields found in SubTopic table.");
    } else {
        console.log(`Found ${badStCount} malformed subtopics.`);
    }

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
