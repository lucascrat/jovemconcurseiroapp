const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const upgrades = [

  // ===== DIREITO PENAL =====
  {
    id: '5de5ce69fe8fc0d3152526794e096c22', // Teoria do Crime (topicId, não subtopicId — vamos pegar o subtopic correto)
    // Vou usar os subtópicos corretos abaixo
  },
];

async function main() {
  await client.connect();
  // Buscar IDs dos subtópicos de Penal, Administrativo e Informática
  const res = await client.query(`
    SELECT st.id, st.name, t.title as topic, s.name as subject
    FROM "SubTopic" st
    JOIN "Topic" t ON t.id = st."topicId"
    JOIN "Subject" s ON s.id = t."subjectId"
    WHERE s.name IN ('Direito Penal', 'Direito Processual Penal', 'Direito Administrativo', 'Informática')
    ORDER BY s.name, t.title, st.name
  `);
  console.log(JSON.stringify(res.rows, null, 2));
  await client.end();
}
main();
