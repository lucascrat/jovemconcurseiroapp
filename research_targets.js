const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const targets = [
  'DUDH', 'SUS', 'Redação', 'Crase', 'Juros', 'Maria da Penha', 'CTB', 'Agentes Públicos', 'Direito Civil', 'Legislativo'
];

async function main() {
  try {
    await client.connect();
    const res = await client.query('SELECT id, name, content FROM "SubTopic"');
    const all = res.rows;

    const results = [];
    for (const t of targets) {
        const matches = all.filter(st => st.name.toLowerCase().includes(t.toLowerCase()));
        results.push({ target: t, matches: matches.map(m => ({ id: m.id, name: m.name, content_length: m.content ? m.content.length : 0, snippet: m.content ? m.content.substring(0, 100) : null })) });
    }

    console.log(JSON.stringify(results, null, 2));

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
