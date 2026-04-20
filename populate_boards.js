const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const boards = [
  {
    id: 'cebraspe',
    name: 'Cebraspe (CESPE)',
    difficulty: 'Altíssimo',
    style: 'Certo ou Errado',
    lawFocus: 'Jurisprudência (STF/STJ) e Doutrina',
    mainFeature: 'Fator de Correção: Uma errada anula uma certa.',
    description: 'Banca estratégica que pune o chute. Foca em interpretação de texto e gramática aplicada. É a banca mais temida do país.',
    tips: 'Treine não marcar questões em dúvida total. Saiba gerenciar riscos.'
  },
  {
    id: 'fgv',
    name: 'FGV (Fundação Getúlio Vargas)',
    difficulty: 'Alto',
    style: 'Múltipla Escolha (A-E)',
    lawFocus: 'Casos Práticos e Situações Narradas',
    mainFeature: 'O Português mais difícil do Brasil.',
    description: 'Foco em lógica e intenção do autor. Prefere narrar uma situação real para aplicar o Direito em vez de perguntar a lei seca.',
    tips: 'Prepare-se para questões subjetivas de Português e Exatas criativas.'
  },
  {
    id: 'fcc',
    name: 'FCC (Fundação Carlos Chagas)',
    difficulty: 'Médio/Alto',
    style: 'Múltipla Escolha (A-E)',
    lawFocus: 'Literalidade da Lei (Lei Seca)',
    mainFeature: 'Prova de velocidade e organização.',
    description: 'Evoluiu do "copia e cola" para incluir doutrina em níveis altos. Gramática clássica (vozes, concordância, crase).',
    tips: 'Treine a velocidade. Questões são diretas mas o tempo é curto.'
  },
  {
    id: 'vunesp',
    name: 'Vunesp',
    difficulty: 'Médio',
    style: 'Múltipla Escolha (A-E)',
    lawFocus: 'Lei Seca Pura',
    mainFeature: 'Objetividade e Previsibilidade.',
    description: 'Banca "queridinha" de SP. Se decorou o artigo, você acerta. Textos de portais de notícias e gramática clara.',
    tips: 'Atenção especial à Matemática, que costuma ser o diferencial.'
  },
  {
    id: 'idecan_aocp',
    name: 'IDECAN / Instituto AOCP',
    difficulty: 'Médio',
    style: 'Múltipla Escolha',
    lawFocus: 'Lei Seca + Enunciados Extensos',
    mainFeature: 'Questões Polêmicas e Longas.',
    description: 'Mistura o estilo FCC com enunciados mais cansativos. Crescendo em concursos estaduais e prefeituras.',
    tips: 'Conheça as "maldades" específicas dessas bancas em provas anteriores.'
  }
];

async function main() {
  try {
    await client.connect();
    console.log("Populating ExamBoard table...");
    
    for (const board of boards) {
      await client.query(`
        INSERT INTO "ExamBoard" (id, name, difficulty, style, lawFocus, mainFeature, description, tips)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          difficulty = EXCLUDED.difficulty,
          style = EXCLUDED.style,
          lawFocus = EXCLUDED.lawFocus,
          mainFeature = EXCLUDED.mainFeature,
          description = EXCLUDED.description,
          tips = EXCLUDED.tips
      `, [board.id, board.name, board.difficulty, board.style, board.lawFocus, board.mainFeature, board.description, board.tips]);
      console.log(`Board ${board.name} processed.`);
    }
    
    console.log("Population complete.");

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
