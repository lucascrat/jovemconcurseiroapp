const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const questionsData = [
  // PRF 2014
  {
    topicId: 'b4c9d4371e0a1f1584ea843b716e13e5', // Manuais de Procedimentos
    statement: 'Com vistas a garantir segurança e transparência à ação de fiscalização rotineira de trânsito, em hipótese alguma será admitida a realização de procedimento de fiscalização por apenas um policial.',
    options: { a: 'Certo', b: 'Errado' },
    correctAnswer: 'b',
    explanation: 'Errado. Embora a regra seja o trabalho em dupla, os manuais admitem a fiscalização individual em situações excepcionais de serviço.',
    ano: 2014
  },
  {
    topicId: 'b4c9d4371e0a1f1584ea843b716e13e5',
    statement: 'No atendimento a local de acidente em período noturno em que uma das faixas de rolamento estiver bloqueada, a viatura policial deve ser posicionada sobre a faixa interrompida, perpendicularmente ao eixo da rodovia.',
    options: { a: 'Certo', b: 'Errado' },
    correctAnswer: 'b',
    explanation: 'Errado. O posicionamento deve ser diagonal ou longitudinal para canalizar o fluxo e proteger a equipe; o posicionamento perpendicular é inadequado e perigoso.',
    ano: 2014
  },
  {
    topicId: '0317b06d661a7bf2b5e24a119fbb06f0', // Legislação de Trânsito
    statement: 'O CETRAN e o CONTRANDIFE são órgãos de abrangência estadual, com funções normativas, consultivas e de coordenação em relação aos órgãos estaduais de trânsito.',
    options: { a: 'Certo', b: 'Errado' },
    correctAnswer: 'a',
    explanation: 'Certo. Conforme o CTB, os Conselhos Estaduais de Trânsito (CETRAN) e o Conselho de Trânsito do Distrito Federal (CONTRANDIFE) possuem essas atribuições no âmbito de seus estados/DF.',
    ano: 2014
  },
  // PRF 2015
  {
    topicId: '4f5be407433ccc9bc18c823bcd778d51', // Atividade Policial Ostensiva
    statement: 'O policiamento especializado executa atividades que necessitam de procedimentos, técnicas, materiais e equipamentos específicos, bem como de pessoal especializado com treinamento adequado.',
    options: { a: 'Certo', b: 'Errado' },
    correctAnswer: 'a',
    explanation: 'Certo. É a definição clássica de policiamento especializado na doutrina da PRF.',
    ano: 2015
  },
  {
    topicId: '0317b06d661a7bf2b5e24a119fbb06f0', // Legislação de Trânsito
    statement: 'Sendo a infração de trânsito de responsabilidade do condutor do veículo, se este não for identificado no momento da autuação, aplica-se o prazo de quinze dias, a contar da data do cometimento da infração, para apresentação do condutor infrator.',
    options: { a: 'Certo', b: 'Errado' },
    correctAnswer: 'a',
    explanation: 'Certo. Conforme o Art. 257 do CTB, o proprietário tem 15 dias para identificar o condutor infrator se este não foi identificado no ato.',
    ano: 2015
  }
];

async function main() {
  try {
    await client.connect();
    console.log("Ingesting Batch 02 (PRF 2014 & 2015)...");

    for (const q of questionsData) {
      const id = crypto.randomBytes(16).toString('hex');
      await client.query(`
        INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation, concurso, ano)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      `, [
        id, q.topicId, 'Cebraspe', q.statement, JSON.stringify(q.options), 
        q.correctAnswer, 'multiple-choice', q.explanation, 'PRF', q.ano
      ]);
      console.log(`Inserted PRF ${q.ano} question into topic ${q.topicId}`);
    }

    console.log("Batch 02 complete.");
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
