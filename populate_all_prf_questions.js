const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const questionsData = [
  // PRF 2013 - Língua Portuguesa
  {
    concurso: 'PRF', ano: 2013, banca: 'Cebraspe',
    topic: 'Língua Portuguesa',
    statement: 'No texto "Maravilha", a forma verbal “podem” (R.8) está empregada no sentido de têm autorização.',
    correct: 'b', // Errado (sentido de possibilidade/capacidade técnica)
    explanation: 'O contexto indica capacidade técnica dos cientistas de realizar a construção, não uma permissão formal.'
  },
  {
    concurso: 'PRF', ano: 2013, banca: 'Cebraspe',
    topic: 'Língua Portuguesa',
    statement: 'A oração introduzida por “porque” (R.10) expressa a razão de as bombas serem sujas.',
    correct: 'a', // Certo
    explanation: 'O conectivo "porque" introduz uma oração subordinada adverbial causal.'
  },
  // PRF 2013 - Matemática
  {
    concurso: 'PRF', ano: 2013, banca: 'Cebraspe',
    topic: 'Raciocínio Lógico e Matemática',
    statement: 'Considerando que uma equipe de 30 operários construa uma estrada de 10 km em 30 dias. Se, no início do quinto dia, 2 operários abandonarem a equipe e não forem substituídos, essa perda ocasionará atraso de 10 dias no prazo de conclusão.',
    correct: 'b', // Errado
    explanation: 'O cálculo da regra de três composta mostra um atraso menor que 10 dias (aproximadamente 2 dias).'
  },
  // PRF 2013 - Física
  {
    concurso: 'PRF', ano: 2013, banca: 'Cebraspe',
    topic: 'Física (PRF)',
    statement: 'Quando o freio for acionado, para que o veículo pare, a sua energia cinética e o trabalho da força de atrito, em módulo, deverão ser iguais.',
    correct: 'a', // Certo
    explanation: 'Pelo Teorema da Energia Cinética, o trabalho da força resultante (atrito) é igual à variação da energia cinética.'
  },
  // PRF 2014 - Atividade Policial
  {
    concurso: 'PRF', ano: 2014, banca: 'Cebraspe',
    topic: 'Simulados PRF (Histórico)',
    statement: 'Com vistas a garantir segurança e transparência à ação de fiscalização rotineira de trânsito, em hipótese alguma será admitida a realização de procedimento de fiscalização por apenas um policial.',
    correct: 'b', // Errado
    explanation: 'Manuais da PRF admitem fiscalização individual em situações excepcionais de serviço.'
  },
  {
    concurso: 'PRF', ano: 2014, banca: 'Cebraspe',
    topic: 'Simulados PRF (Histórico)',
    statement: 'No atendimento a local de acidente em período noturno em que uma das faixas de rolamento estiver bloqueada, a viatura policial deve ser posicionada sobre a faixa interrompida, perpendicularmente ao eixo da rodovia.',
    correct: 'b', // Errado
    explanation: 'O posicionamento perpendicular é perigoso; a viatura deve ser posicionada de forma a canalizar o fluxo e proteger a equipe.'
  },
  // PRF 2015 - Administração/Direito
  {
    concurso: 'PRF', ano: 2015, banca: 'Cebraspe',
    topic: 'Simulados PRF (Histórico)',
    statement: 'O policiamento especializado executa atividades que necessitam de procedimentos, técnicas, materiais e equipamentos específicos, bem como de pessoal especializado.',
    correct: 'a', // Certo
    explanation: 'Definição correta de policiamento especializado conforme doutrina de segurança pública.'
  },
  {
    concurso: 'PRF', ano: 2015, banca: 'Cebraspe',
    topic: 'Simulados PRF (Histórico)',
    statement: 'No caso de recusa, por parte de condutor, a assinar o auto de infração, o agente autuador deverá consignar esse fato no campo destinado a observações e proceder à recolha da assinatura de duas testemunhas.',
    correct: 'b', // Errado
    explanation: 'O CTB não exige a assinatura de testemunhas para a validade do auto de infração em caso de recusa do condutor.'
  }
];

async function main() {
  try {
    await client.connect();
    console.log("Starting PRF Question Ingestion...");

    for (const q of questionsData) {
      // Find Topic ID (by title and agency if possible, or just title in the historical subject)
      let topicId;
      const tRes = await client.query('SELECT id FROM "Topic" WHERE title = $1', [q.topic]);
      
      if (tRes.rows.length > 0) {
        topicId = tRes.rows[0].id;
      } else {
        // Fallback to a Generic PRF module if topic not found
        const fallbackRes = await client.query('SELECT id FROM "Topic" WHERE title = \'Simulados PRF (Histórico)\'');
        topicId = fallbackRes.rows[0]?.id;
      }

      if (!topicId) {
          console.log(`Skipping question: Topic ${q.topic} not found and no fallback.`);
          continue;
      }

      const id = crypto.randomBytes(16).toString('hex');
      await client.query(`
        INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation, concurso, ano)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      `, [
        id, topicId, q.banca, q.statement, 
        JSON.stringify({ a: 'Certo', b: 'Errado' }), 
        q.correct, 'multiple-choice', q.explanation, q.concurso, q.ano
      ]);
      console.log(`Inserted: [${q.concurso} ${q.ano}] ${q.topic}`);
    }

    console.log("Ingestion complete.");
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
