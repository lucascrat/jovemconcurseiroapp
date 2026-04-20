const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const mappings = [
    // LÍNGUA PORTUGUESA
    { name: 'Língua Portuguesa', match: 'Interpretacao de Textos|Sintaxe|Morfologia|Ortografia', level: 'Fundamental' }, // Default for simple ones
    { name: 'Língua Portuguesa', match: 'Sintaxe da Oração|Médio', level: 'Médio' },
    { name: 'Língua Portuguesa', match: 'Avançada|Superior', level: 'Superior' },
    
    // MATEMÁTICA / RLM
    { name: 'Raciocínio Lógico e Matemática', match: 'Operacoes Fundamentais|Fundamental', level: 'Fundamental' },
    { name: 'Raciocínio Lógico e Matemática', match: 'Médio|Logica Proposicional', level: 'Médio' },
    { name: 'Raciocínio Lógico e Matemática', match: 'Superior|Avancada', level: 'Superior' },
    
    // DIREITO ADMINISTRATIVO
    { name: 'Direito Administrativo', match: 'Fundamental', level: 'Fundamental' },
    { name: 'Direito Administrativo', match: 'Médio', level: 'Médio' },
    { name: 'Direito Administrativo', match: 'Superior|Licitações|Modelos', level: 'Superior' },

    // INFORMÁTICA
    { name: 'Informática', match: 'Conceitos Essenciais', level: 'Fundamental' },
    { name: 'Informática', match: 'Médio', level: 'Médio' },
    { name: 'Informática', match: 'Superior', level: 'Superior' }
];

async function main() {
  try {
    await client.connect();
    console.log("Iniciando Refatoração de Níveis (Subjects)...");

    // Get all subjects
    const res = await client.query('SELECT id, name FROM "Subject"');
    
    for (const s of res.rows) {
        // Simple logic to assign level based on previous knowledge of IDs or manual keywords
        // For this specific DB, I'll update the subjects that have specific name/level indicators
        
        // I'll update subjects to match the user's roadmap levels
        // For the sake of this task, I will mark the subjects that contain specific topics accordingly.
        
        // I will find which subject has what level in the provider if possible.
        // Actually, I'll just ensure the 3-level structure is clean.
    }

    // Manual Updates based on previous research:
    
    // Subjects that were Level: Fundamental
    await client.query("UPDATE \"Subject\" SET level = 'Fundamental' WHERE name IN ('Conhecimentos Regionais', 'Ética no Serviço Público')");
    
    // Subjects that should be Medio
    await client.query("UPDATE \"Subject\" SET level = 'Médio' WHERE id IN ('06c0204a9b05882e980df0ab30fa08a3', '6d2a59eb8ee61ed0d585f821e2083eaf', '5c10f42175b2673661762a9294cca5a0', 'd983a303549a7fd977bfab3f781c3f2c', '9a0a368be5e3a2ae35b5e4f1e8b5442e', '7c0ee734281fd5d717e8531952989d3e', 'a3968be8b8e06eaed9ca965d3ba124f5', 'f7f78210c7136bfcecb64226b6df3074', '17938d3b6584b63069b1a1d5cd37c5a8')");
    
    // Subjects that should be Superior
    await client.query("UPDATE \"Subject\" SET level = 'Superior' WHERE id IN ('0ccd0ce051250a51e4d4187fd2f18c42', '034d9a3df4dcc213655eb7fec7d20712', '1b19114e9225842d2b06e70347be409d', '6b2d48e2e246cda721660daa8469821f', 'd54c298444d55a2eea7e55507ab2d37c', '09aa647d4b9070149521bc66cbb5be02', '5d3458a0f289d1484454f1fff4b7320b', 'ebe3faeb2b32f6b9744ed988c00d443c', '23fbde66e6dfda3a5583fb97fdfcb96f')");

    // Special case for 'Aprofundamentos e Extras' which contains the Lote 11 (mostly superior/mix)
    await client.query("UPDATE \"Subject\" SET level = 'Superior' WHERE name = 'Aprofundamentos e Extras'");

    console.log("Refatoração concluída.");

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
