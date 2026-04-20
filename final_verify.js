const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const targetTitles = [
  'Direitos Humanos e DUDH',
  'SUS e Saúde Pública (Lei 8080)',
  'Redação Oficial e Discursiva',
  'Crase e Regência Fatal',
  'Juros Compostos e Tabela SAC',
  'Lei Maria da Penha (11.340)',
  'CTB (Leis de Trânsito)',
  'Agentes Públicos e Estatutos',
  'Direito Civil na Administração',
  'Poder Legislativo'
];

async function main() {
  try {
    await client.connect();
    
    console.log("Final Verification - Questions Count per Topic:");

    for (const title of targetTitles) {
      const topicRes = await client.query('SELECT id FROM "Topic" WHERE title = $1', [title]);
      if (topicRes.rows.length === 0) {
        console.log(`- ${title}: TOPIC NOT FOUND`);
        continue;
      }
      const topicId = topicRes.rows[0].id;
      const qCount = await client.query('SELECT count(*) FROM "Question" WHERE "topicId" = $1', [topicId]);
      
      const stCount = await client.query('SELECT count(*) FROM "SubTopic" WHERE "topicId" = $1', [topicId]);
      const stSample = await client.query('SELECT name, length(content) as len FROM "SubTopic" WHERE "topicId" = $1 LIMIT 1', [topicId]);

      console.log(`- ${title}:`);
      console.log(`  * Questions: ${qCount.rows[0].count}`);
      console.log(`  * SubTopics: ${stCount.rows[0].count}`);
      if (stSample.rows[0]) {
        console.log(`  * Theory Length (Sample: ${stSample.rows[0].name}): ${stSample.rows[0].len} chars`);
      }
    }

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
