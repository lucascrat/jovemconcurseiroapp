const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}

async function main() {
  try {
    await client.connect();
    console.log("Iniciando atualização do Lote 02...");
    await client.query('BEGIN');

    // --- Submatéria 6: Artigo 5º da CF em Linhas Gerais ---
    const id6 = '1dab0038320d11c5102a4793a5c39867';
    const theory6 = `
# Artigo 5º da CF: Direitos e Deveres Individuais e Coletivos

O Artigo 5º é a base da proteção do cidadão brasileiro. Ele garante que "todos são iguais perante a lei, sem distinção de qualquer natureza".

## 1. Direito à Vida
Não é apenas o direito de continuar vivo, mas o direito a uma vida digna. A CF proíbe a pena de morte, salvo em caso de guerra declarada.

## 2. Igualdade Perante a Lei (Isonomia)
Homens e mulheres são iguais em direitos e obrigações. A lei não deve discriminar brasileiros de estrangeiros residentes.

## 3. Liberdade de Expressão
É livre a manifestação do pensamento, sendo vedado o anonimato. Ninguém pode ser privado de direitos por motivo de crença religiosa ou convicção filosófica.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory6, id6]);
    
    // Questões (Simuladas)
    const questions6 = [
      { id: generateId(), topicId: 'df991c79b48abbb03a90544fdbd12e19', banca: 'Cebraspe', statement: 'Segundo o Art. 5º da CF/88, é correto afirmar que a manifestação do pensamento é livre, permitindo-se o anonimato em casos de denúncia.', options: { A: 'Certo', B: 'Errado' }, correctAnswer: 'B', type: 'Certo/Errado', explanation: 'O Art. 5º vedada expressamente o anonimato.' }
    ];
    for(const q of questions6) {
      await client.query('INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [q.id, q.topicId, q.banca, q.statement, JSON.stringify(q.options), q.correctAnswer, q.type, q.explanation]);
    }

    // --- Submatéria 7: Deveres e Proibições Básicas ---
    const id7 = 'dab059acd918c179858604b4f8a083da';
    const theory7 = `
# Deveres e Proibições do Servidor Público

Os estatutos definem como o servidor deve se portar para manter a integridade da administração.

## 1. Responsabilidades
O servidor responde civil, penal e administrativamente pelo exercício irregular de suas atribuições.

## 2. Assiduidade e Pontualidade
Dever básico de comparecer ao trabalho no horário e cumprir a jornada. Faltas injustificadas levam a descontos e sanções.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory7, id7]);

    // --- Submatéria 8: Geografia do Ceará ---
    const id8 = '397ab6bf3bda5b5b5955f81488eca9a5';
    const theory8 = `
# Geografia do Ceará

## 1. Clima (Semiárido)
O Ceará está quase totalmente inserido no Polígono das Secas. O clima predominante é o semiárido, com chuvas escassas e irregulares.

## 2. Relevo e Bacias Hidrográficas
Destacam-se as Chapadas (como a do Araripe e Ibiapaba) e a Depressão Sertaneja. O Rio Jaguaribe é o mais importante, conhecido como "o maior rio seco do mundo".

## 3. Distribuição Populacional
Grande concentração na Região Metropolitana de Fortaleza (RMF). O interior vem crescendo com polos regionais (Juazeiro do Norte, Sobral).
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory8, id8]);

    // --- Submatéria 9: História e Cultura do Ceará ---
    const id9 = '5ab5e49c027f5d4bc3ff4af46fea5e50';
    const theory9 = `
# História e Cultura do Ceará

## 1. Colonização e Formação
Iniciou-se tarde em comparação a outros estados devido à resistência indígena e dificuldade geográfica. A criação de gado foi o motor econômico inicial.

## 2. Abolição da Escravatura
O Ceará foi a primeira província brasileira a libertar os escravos (1884), quatro anos antes da Lei Áurea. Recebeu o apelido de "Terra da Luz" dado por José do Patrocínio.

## 3. Festas Típicas e Culinária
Destaque para o Reisado, Bumba meu Boi e festas juninas. Na culinária, o Baião de Dois e o Carne de Sol são ícones.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory9, id9]);

    // --- Submatéria 10: Concordância Verbal e Nominal ---
    const id10 = '2e044933950e947b94a13391ebe8e17b';
    const theory10 = `
# Concordância Verbal e Nominal (Nível Médio)

A concordância é a harmonia entre as palavras da frase.

## 1. Regra Geral Verbal
O verbo deve concordar com o sujeito em número (singular/plural) e pessoa (1ª, 2ª, 3ª).
- **Ex:** "Eles **estudam** muito".

## 2. Casos Especiais (Haver e Fazer)
- **Haver** (sentido de existir): Fica sempre no singular. (Houve muitos aprovados).
- **Fazer** (tempo decorrido): Fica sempre no singular. (Faz dez anos que estudo).

## 3. Concordância Nominal Básica
O adjetivo concorda com o substantivo. (Meninos dedicados).
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory10, id10]);

    await client.query('COMMIT');
    console.log("Lote 02 concluído com sucesso!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na atualização do Lote 02:", err);
  } finally {
    await client.end();
  }
}

main();
