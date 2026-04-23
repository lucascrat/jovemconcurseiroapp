const { Client } = require('pg');

const config = {
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
};

async function main() {
  const client = new Client(config);
  await client.connect();
  console.log("Amostrando 50 questões para busca de erros ortográficos...");
  
  try {
    const res = await client.query('SELECT id, statement, explanation FROM "Question" ORDER BY random() LIMIT 50');
    console.log(JSON.stringify(res.rows, null, 2));
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
