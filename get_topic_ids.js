const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});
async function main() {
  await client.connect();
  // Map subject names to their actual topic IDs from the database
  const res = await client.query(`
    SELECT t.id, t.title, s.name as subject
    FROM "Topic" t JOIN "Subject" s ON s.id = t."subjectId"
    WHERE s.name IN ('Ética no Serviço Público','Atualidades','Conhecimentos Regionais (Foco em Ceará/Nordeste)','Administração Pública','Atendimento e Ética','Simulados PRF (Histórico)','Direito Constitucional','Direito Administrativo','Língua Portuguesa','Raciocínio Lógico e Matemática','Direito Penal','Direito Processual Penal','Informática','Legislação Geral')
    ORDER BY s.name, t.title
  `);
  res.rows.forEach(r => console.log(`[${r.subject}] "${r.title}" → ${r.id}`));
  await client.end();
}
main();
