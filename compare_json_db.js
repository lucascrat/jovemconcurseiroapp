const fs = require('fs');
const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    const jsonStr = fs.readFileSync('conteudo_concursos.json', 'utf8');
    const json = JSON.parse(jsonStr);
    
    await client.connect();
    const dbSubTopics = await client.query('SELECT name FROM "SubTopic"');
    const dbSubTopicNames = new Set(dbSubTopics.rows.map(r => r.name));

    console.log("Checking subtopics from JSON...");
    let missingCount = 0;
    json.conteudo.forEach(disciplina => {
      disciplina.materias.forEach(materia => {
        materia.submaterias.forEach(sub => {
          if (!dbSubTopicNames.has(sub.nome)) {
            console.log(`❌ Missing: ${sub.nome} (${disciplina.disciplina} - ${disciplina.nivel})`);
            missingCount++;
          }
        });
      });
    });

    if (missingCount === 0) {
      console.log("✅ All subtopics from JSON are in the DB.");
    } else {
      console.log(`Total missing: ${missingCount}`);
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
run();
