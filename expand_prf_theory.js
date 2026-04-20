const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const physicsExpansions = [
  {
    topicTitle: "Trabalho e Energia",
    content: "Conceitos de trabalho, energia cinética e potencial. Conservação de energia.",
    subTopics: [
      {
        name: "Trabalho de uma Força",
        content: "W = F * d * cos(theta). Aplicação em desaceleração de veículos.",
        theory: "Trabalho é a medida da energia transferida por uma força. Em frenagens, o trabalho da força de atrito é negativo, pois retira energia cinética do veículo até que ele pare. W_fat = fat * d."
      },
      {
        name: "Teorema da Energia Cinética",
        content: "Ec = (1/2) * m * v^2. O trabalho total é igual à variação da energia cinética.",
        theory: "Fundamental para estimar a velocidade de impacto. Se conhecemos a deformação do veículo (trabalho de deformação) e a velocidade final (zero), podemos estimar a velocidade inicial."
      }
    ]
  },
  {
    topicTitle: "Trabalho e Energia",
    content: "Colisões e Quantidade de Movimento.",
    subTopics: [
      {
        name: "Quantidade de Movimento (p = m*v)",
        content: "Momento linear e sua conservação em sistemas isolados.",
        theory: "Em uma colisão entre dois veículos, a quantidade de movimento total do sistema se conserva. Isso permite aos peritos da PRF calcular as velocidades vetoriais antes do impacto a partir das posições finais de repouso."
      },
      {
        name: "Tipos de Colisões",
        content: "Elásticas, inelásticas e perfeitamente inelásticas.",
        theory: "Na maioria dos acidentes rodoviários, as colisões são inelásticas (há grande deformação e perda de energia na forma de calor e som). O coeficiente de restituição mede essa 'elasticidade'."
      }
    ]
  }
];

const geopoliticalExpansions = [
  {
    topicTitle: "Urbanização e População",
    content: "O crescimento das cidades brasileiras e a infraestrutura de transporte.",
    subTopics: [
      {
        name: "Hierarquia Urbana",
        content: "Metrópoles, capitais regionais e centros locais.",
        theory: "O fluxo de veículos nas BRs é diretamente influenciado pela hierarquia urbana. Grandes metrópoles como São Paulo e Rio de Janeiro polarizam os maiores fluxos de carga do país."
      }
    ]
  },
  {
    topicTitle: "Matriz Energética",
    content: "Fontes de energia no Brasil e o transporte de combustíveis.",
    subTopics: [
      {
        name: "Petróleo e Biocombustíveis",
        content: "A dependência do diesel e o potencial do etanol/biodiesel.",
        theory: "O Brasil possui uma matriz de transporte altamente dependente do petróleo (diesel). A PRF atua na fiscalização do transporte de produtos perigosos (combustíveis), garantindo a segurança das vias."
      }
    ]
  }
];

async function main() {
  try {
    await client.connect();
    console.log("Expanding PRF theory...");

    // Find Subject IDs
    const physRes = await client.query('SELECT id FROM "Subject" WHERE name = \'Física (PRF)\'');
    const geoRes = await client.query('SELECT id FROM "Subject" WHERE name = \'Geopolítica Brasileira (PRF)\'');

    if (physRes.rows.length > 0) {
      const sId = physRes.rows[0].id;
      for (const t of physicsExpansions) {
        const tId = crypto.randomBytes(16).toString('hex');
        await client.query('INSERT INTO "Topic" (id, "subjectId", title, content, "order") VALUES ($1, $2, $3, $4, $5)', [tId, sId, t.topicTitle, t.content, 99]);
        for (const st of t.subTopics) {
           const stId = crypto.randomBytes(16).toString('hex');
           await client.query('INSERT INTO "SubTopic" (id, "topicId", name, content) VALUES ($1, $2, $3, $4)', [stId, tId, st.name, st.theory]);
        }
      }
    }

    if (geoRes.rows.length > 0) {
      const sId = geoRes.rows[0].id;
      for (const t of geopoliticalExpansions) {
        const tId = crypto.randomBytes(16).toString('hex');
        await client.query('INSERT INTO "Topic" (id, "subjectId", title, content, "order") VALUES ($1, $2, $3, $4, $5)', [tId, sId, t.topicTitle, t.content, 99]);
        for (const st of t.subTopics) {
           const stId = crypto.randomBytes(16).toString('hex');
           await client.query('INSERT INTO "SubTopic" (id, "topicId", name, content) VALUES ($1, $2, $3, $4)', [stId, tId, st.name, st.theory]);
        }
      }
    }

    console.log("Expansion complete.");
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
