const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const prfSubjects = [
  {
    name: "Física (PRF)",
    level: "Superior",
    description: "Física aplicada à perícia de acidentes de trânsito, cinemática e dinâmica.",
    topics: [
      {
        title: "Cinemática do Escalar",
        content: "Estudo do movimento sem considerar as causas. Velocidade média, aceleração e funções horárias.",
        subTopics: [
          {
            name: "Velocidade Média e Instantânea",
            content: "Definição de VM como Delta S / Delta T. Cálculo de velocidade em diferentes trechos de um acidente.",
            theory: "A velocidade média é a razão entre o deslocamento total e o intervalo de tempo transcorrido. No contexto da PRF, é essencial para determinar se um veículo estava acima do limite permitido em um trecho monitorado. A velocidade instantânea é o limite da velocidade média quando o intervalo de tempo tende a zero. Unidades: m/s (SI) e km/h (multiplicar m/s por 3,6)."
          },
          {
            name: "Movimento Uniforme (MU)",
            content: "Velocidade constante e aceleração zero. S = S0 + V*t.",
            theory: "No MU, o móvel percorre distâncias iguais em intervalos de tempo iguais. A função horária da posição é linear. Importante para análise de fluxos constantes e cálculos de tempo de chegada."
          }
        ]
      },
      {
        title: "Dinâmica e Newton",
        content: "Leis de Newton e forças aplicadas ao movimento em vias.",
        subTopics: [
          {
            name: "As Três Leis de Newton",
            content: "Inércia, F=ma e Ação/Reação.",
            theory: "1ª Lei (Inércia): Um objeto em repouso tende a permanecer em repouso. 2ª Lei (Princípio Fundamental): A força resultante é o produto da massa pela aceleração. 3ª Lei (Ação e Reação): Para toda ação há uma reação de mesma intensidade e direção, mas sentido oposto."
          },
          {
            name: "Força de Atrito e Frenagem",
            content: "Atrito estático e cinético. Distância de frenagem.",
            theory: "O atrito é a força que se opõe ao movimento. Fat = μ * N. Em acidentes, o cálculo da marca de frenagem no asfalto (pneus travados -> atrito cinético) permite estimar a velocidade inicial do veículo antes do impacto."
          }
        ]
      }
    ]
  },
  {
    name: "Geopolítica Brasileira (PRF)",
    level: "Superior",
    description: "Estudo das dinâmicas espaciais, fronteiras, matriz energética e transportes no Brasil.",
    topics: [
      {
        title: "Fronteiras e Soberania",
        content: "A malha de fronteiras brasileira e o papel da PRF na segurança nacional.",
        subTopics: [
          {
            name: "Fronteiras Terrestres",
            content: "Extensão e desafios das fronteiras com os países da América do Sul.",
            theory: "O Brasil possui mais de 15.000 km de fronteira terrestre. A PRF atua no policiamento de rodovias que cruzam essas áreas, combatendo o tráfico de drogas, armas e contrabando. A faixa de fronteira possui 150 km de largura."
          }
        ]
      },
      {
        title: "Matriz de Transportes",
        content: "O predomínio do modal rodoviário no Brasil e suas consequências.",
        subTopics: [
          {
            name: "Rodoviarismo no Brasil",
            content: "História e expansão das rodovias federais (BRs).",
            theory: "A partir da década de 1950, o Brasil priorizou o transporte rodoviário (Plano de Metas de Juscelino Kubitschek). Isso gerou uma dependência econômica das rodovias e a necessidade de uma força policial especializada: a PRF."
          }
        ]
      }
    ]
  }
];

async function main() {
  try {
    await client.connect();
    console.log("Adding PRF specific subjects...");

    for (const sub of prfSubjects) {
      const subId = crypto.randomBytes(16).toString('hex');
      await client.query('INSERT INTO "Subject" (id, name, level, description) VALUES ($1, $2, $3, $4)', [subId, sub.name, sub.level, sub.description]);
      console.log(`Subject added: ${sub.name}`);

      for (const top of sub.topics) {
        const topId = crypto.randomBytes(16).toString('hex');
        await client.query('INSERT INTO "Topic" (id, "subjectId", title, content, "order") VALUES ($1, $2, $3, $4, $5)', [topId, subId, top.title, top.content, 0]);
        
        for (const st of top.subTopics) {
          const stId = crypto.randomBytes(16).toString('hex');
          await client.query('INSERT INTO "SubTopic" (id, "topicId", name, content) VALUES ($1, $2, $3, $4)', [stId, topId, st.name, st.theory]);
        }
      }
    }
    console.log("PRF subjects and theory added successfully.");
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
