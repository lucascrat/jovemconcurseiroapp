const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const prf2013Questions = [
  // PORTUGUES (1-7)
  {
    topicId: '813e9365f9084f8ac4d23c4745bae763', // Compreensão de Textos
    statement: 'No texto de Ferreira Gullar, a forma verbal “podem” (R.8) está empregada no sentido de têm autorização.',
    options: { a: 'Certo', b: 'Errado' },
    correctAnswer: 'b',
    explanation: 'Errado. No contexto, "podem" refere-se à possibilidade ou capacidade técnica dos cientistas de realizar a construção, e não a uma permissão ou autorização formal.',
    ano: 2013
  },
  {
    topicId: '813e9365f9084f8ac4d23c4745bae763',
    statement: 'A oração introduzida por “porque” (R.10) expressa a razão de as bombas serem sujas.',
    options: { a: 'Certo', b: 'Errado' },
    correctAnswer: 'a',
    explanation: 'Certo. O conectivo "porque" introduz uma oração subordinada adverbial causal, explicando a causa/razão de as bombas serem classificadas como sujas.',
    ano: 2013
  },
  {
    topicId: '813e9365f9084f8ac4d23c4745bae763',
    statement: 'Mantendo-se a correção gramatical e a coerência do texto, a conjunção “e”, em “e não por deficiência da ciência” (R.2-3), poderia ser substituída por mas.',
    options: { a: 'Certo', b: 'Errado' },
    correctAnswer: 'a',
    explanation: 'Certo. A conjunção "e" tem valor adversativo no contexto, podendo ser substituída por "mas" sem prejuízo gramatical ou de sentido.',
    ano: 2013
  },
  // MATEMATICA (16-17)
  {
    topicId: '07bf6da5a8947fecce1af3859dc987e7', // Operações Fundamentais
    statement: 'Considerando que uma equipe de 30 operários construa uma estrada de 10 km em 30 dias. Se a tarefa estiver sendo realizada pela equipe inicial e, no início do quinto dia, 2 operários abandonarem a equipe, então essa perda ocasionará atraso de 10 dias no prazo de conclusão.',
    options: { a: 'Certo', b: 'Errado' },
    correctAnswer: 'b',
    explanation: 'Errado. O cálculo da regra de três composta mostra que o atraso seria de aproximadamente 2 dias, e não 10.',
    ano: 2013
  },
  // FÍSICA (115-116)
  {
    topicId: '84db243411bba88b589da2f34691853e', // Cinemática
    statement: 'Quando o freio for acionado, para que o veículo pare, a sua energia cinética e o trabalho da força de atrito, em módulo, deverão ser iguais.',
    options: { a: 'Certo', b: 'Errado' },
    correctAnswer: 'a',
    explanation: 'Certo. De acordo com o Teorema da Energia Cinética, o trabalho realizado pela força resultante (fata de atrito) é igual à variação da energia cinética.',
    ano: 2013
  },
  {
    topicId: '84db243411bba88b589da2f34691853e',
    statement: 'Antes de iniciar o processo de frenagem, a energia mecânica do veículo (m=1000kg, v=72km/h) era igual a 200.000 J.',
    options: { a: 'Certo', b: 'Errado' },
    correctAnswer: 'a',
    explanation: 'Certo. v = 72 km/h = 20 km/s. Ec = 1/2 * m * v² = 0.5 * 1000 * 400 = 200.000 J.',
    ano: 2013
  },
  // DIREITO ADMINISTRATIVO (35-36)
  {
    topicId: '4eab7eb244da26781e9ad52b9ad3fc96', // Atos Administrativos
    statement: 'O Distrito Federal (DF) é ente federativo autônomo, pois possui capacidade de auto-organização, autogoverno e autoadministração, sendo vedado subdividi-lo em municípios.',
    options: { a: 'Certo', b: 'Errado' },
    correctAnswer: 'a',
    explanation: 'Certo. É a característica da autonomia parcial do DF conforme a CF/88.',
    ano: 2013
  }
];

async function main() {
  try {
    await client.connect();
    console.log("Ingesting Batch 01 (PRF 2013)...");

    for (const q of prf2013Questions) {
      const id = crypto.randomBytes(16).toString('hex');
      await client.query(`
        INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation, concurso, ano)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      `, [
        id, q.topicId, 'Cebraspe', q.statement, JSON.stringify(q.options), 
        q.correctAnswer, 'multiple-choice', q.explanation, 'PRF', q.ano
      ]);
      console.log(`Inserted PRF 2013 question into topic ${q.topicId}`);
    }

    console.log("Batch 01 complete.");
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
