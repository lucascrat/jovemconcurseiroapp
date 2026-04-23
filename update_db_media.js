const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    console.log('Adicionando novas colunas de mídia...');

    // Adiciona audioUrl e mindMapUrl para a tabela Topic
    await client.query(`ALTER TABLE "Topic" ADD COLUMN IF NOT EXISTS "audioUrl" TEXT;`);
    await client.query(`ALTER TABLE "Topic" ADD COLUMN IF NOT EXISTS "mindMapUrl" TEXT;`);
    
    // Adiciona videoUrl, audioUrl e mindMapUrl para a tabela SubTopic para flexibilidade
    await client.query(`ALTER TABLE "SubTopic" ADD COLUMN IF NOT EXISTS "videoUrl" TEXT;`);
    await client.query(`ALTER TABLE "SubTopic" ADD COLUMN IF NOT EXISTS "audioUrl" TEXT;`);
    await client.query(`ALTER TABLE "SubTopic" ADD COLUMN IF NOT EXISTS "mindMapUrl" TEXT;`);

    console.log('Banco de dados atualizado com sucesso!');
  } catch (err) {
    console.error('Erro:', err);
  } finally {
    await client.end();
  }
}

main();
