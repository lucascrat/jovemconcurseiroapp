const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const prfExamsData = {
  "2014": [
    {
      "Topic": "Manuais de Procedimentos Operacionais",
      "Statement": "Com vistas a garantir segurança e transparência à ação de fiscalização rotineira de trânsito, em hipótese alguma será admitida a realização de procedimento de fiscalização por apenas um policial.",
      "CorrectAnswer": "Errado",
      "Explanation": "Embora a fiscalização em dupla seja a regra geral, os manuais admitem situações excepcionais em que pode ser realizada por apenas um policial."
    },
    {
      "Topic": "Manuais de Procedimentos Operacionais",
      "Statement": "No atendimento a local de acidente em período noturno em que uma das faixas de rolamento estiver bloqueada, a viatura policial deve ser posicionada sobre a faixa interrompida, perpendicularmente ao eixo da rodovia e com as luzes de sinalização acionadas.",
      "CorrectAnswer": "Errado",
      "Explanation": "O posicionamento perpendicular é inadequado e perigoso; a norma sugere posicionamento que proteja a equipe e direcione o fluxo."
    },
    {
      "Topic": "Atividade Policial Ostensiva",
      "Statement": "O policiamento rodoviário federal é comumente executado de forma velada, não ostensiva, visando a surpreender infratores e garantir a eficácia da repressão a crimes transfronteiriços.",
      "CorrectAnswer": "Errado",
      "Explanation": "A PRF é uma polícia ostensiva por definição constitucional."
    },
    {
      "Topic": "Escalas e Jornada",
      "Statement": "As escalas de serviço visam ao cumprimento de jornada de trabalho estabelecida conforme a demanda e a necessidade do serviço, dividindo-se em ordinária, especial e extraordinária.",
      "CorrectAnswer": "Certo",
      "Explanation": "Reflete a estrutura organizacional da PRF para emprego de meios em diferentes demandas."
    },
    {
      "Topic": "Rondas Terrestres",
      "Statement": "Conforme norma procedimental para as rondas terrestres, a viatura poderá utilizar o acostamento, mas não poderá exceder 70% da velocidade máxima permitida para a via.",
      "CorrectAnswer": "Certo",
      "Explanation": "Normas de segurança para ronda especificam limites para permitir observação adequada."
    }
  ],
  "2015": [
    {
      "Topic": "Acidentes de Trânsito",
      "Statement": "Na classificação dos acidentes de trânsito, o tipo de colisão ocorrida entre dois veículos em movimento é denominado tecnicamente como colisão com objeto móvel.",
      "CorrectAnswer": "Errado",
      "Explanation": "Classifica-se como colisão ou abalroamento entre veículos; objeto móvel refere-se a outros elementos."
    },
    {
      "Topic": "Procedimentos em Acidentes",
      "Statement": "Ao despachar uma equipe para local de acidente com óbito, o receptor da ocorrência deve obrigatoriamente comunicar o fato à Polícia Judiciária.",
      "CorrectAnswer": "Certo",
      "Explanation": "Óbitos em acidentes exigem inquérito policial e perícia técnica."
    },
    {
      "Topic": "Definição de Tráfego",
      "Statement": "Na definição técnica de tráfego, inclui-se o movimento de deslocamento de animais isolados ou em grupo sobre as vias terrestres.",
      "CorrectAnswer": "Certo",
      "Explanation": "O tráfego compreende pessoas, veículos e animais circulando nas vias."
    },
    {
      "Topic": "Legislação de Trânsito",
      "Statement": "No decorrer de ações de fiscalização de trânsito, as ordens emanadas por gestos prevalecem sobre as regras de circulação e sobre as normas definidas por outros sinais de trânsito.",
      "CorrectAnswer": "Certo",
      "Explanation": "Art. 89 do CTB estabelece a hierarquia da sinalização."
    }
  ]
};

async function main() {
  try {
    await client.connect();
    console.log("Ingesting PRF questions...");

    // Create a special Subject for PRF Exams if not exists
    let prfSubId;
    const subCheck = await client.query('SELECT id FROM "Subject" WHERE name = \'Simulados PRF (Histórico)\'');
    if (subCheck.rows.length > 0) {
      prfSubId = subCheck.rows[0].id;
    } else {
      prfSubId = crypto.randomBytes(16).toString('hex');
      await client.query('INSERT INTO "Subject" (id, name, level, description) VALUES ($1, $2, $3, $4)', 
        [prfSubId, 'Simulados PRF (Histórico)', 'Superior', 'Questões oficiais extraídas de provas anteriores da PRF (2013-2015).']);
    }

    for (const [year, questions] of Object.entries(prfExamsData)) {
      for (const q of questions) {
        // Find or create Topic
        let topicId;
        const topicCheck = await client.query('SELECT id FROM "Topic" WHERE title = $1 AND "subjectId" = $2', [q.Topic, prfSubId]);
        if (topicCheck.rows.length > 0) {
          topicId = topicCheck.rows[0].id;
        } else {
          topicId = crypto.randomBytes(16).toString('hex');
          await client.query('INSERT INTO "Topic" (id, "subjectId", title, content, "order") VALUES ($1, $2, $3, $4, $5)', 
            [topicId, prfSubId, q.Topic, `Questões sobre ${q.Topic} aplicadas no concurso PRF.`, 0]);
        }

        const qId = crypto.randomBytes(16).toString('hex');
        await client.query(`
          INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation, concurso, ano)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        `, [
          qId, 
          topicId, 
          'Cebraspe', 
          q.Statement, 
          JSON.stringify({ a: 'Certo', b: 'Errado' }), 
          q.CorrectAnswer === 'Certo' ? 'a' : 'b', 
          'multiple-choice', 
          q.Explanation, 
          'PRF', 
          parseInt(year)
        ]);
      }
    }

    console.log("PRF questions ingested successfully.");
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
