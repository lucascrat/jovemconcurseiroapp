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
    console.log("Iniciando atualização do Lote 04...");
    await client.query('BEGIN');

    // --- Submatéria 16: Noções de Licitações (Lei 14.133/21) ---
    const id16 = '04084975bde99f170a5883758c88305c';
    const theory16 = `
# Noções de Licitações (Lei 14.133/2021)

A Nova Lei de Licitações substitui as antigas leis e traz modernidade ao processo de compras públicas.

## 1. Princípios Licitatórios
Além dos princípios da administração (LIMPE), a lei foca na Seleção da Proposta mais vantajosa, Desenvolvimento Nacional Sustentável e Eficácia.

## 2. Modalidades Básicas
A Nova Lei extinguiu a Tomada de Preços e o Convite. As modalidades agora são:
- **Pregão:** Para bens e serviços comuns.
- **Concorrência:** Para bens e serviços especiais e grandes obras.
- **Concurso:** Trabalho técnico ou artístico.
- **Leilão:** Venda de bens.
- **Diálogo Competitivo:** Modalidade nova para soluções complexas.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory16, id16]);

    // --- Submatéria 17: Estruturas Lógicas ---
    const id17 = '084a7c196c7cb3affd64833eb3f3b487';
    const theory17 = `
# Estruturas Lógicas e Tabela Verdade

RLM foca na validade dos argumentos através de conectivos lógicos.

## 1. Conectivos Lógicos
- **E (∧):** Conjunção. Só é verdade se ambos forem verdade.
- **Ou (∨):** Disjunção. É verdade se pelo menos um for verdade.
- **Se... então (→):** Condicional. Só é falso se o primeiro for verdade e o segundo for falso (V → F = F).
- **Se e somente se (↔):** Bicondicional. Só é verdade se ambos forem iguais (V↔V ou F↔F).

## 2. Negação e Equivalência
Negar um "E" gera um "OU" (Lei de De Morgan). A equivalência mais comum do "P → Q" é "~Q → ~P" (Contrapositiva) ou "~P ∨ Q".
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory17, id17]);

    // --- Submatéria 18: Geografia do Nordeste e Ceará ---
    const id18 = '189c29bac0505d63a0643a26bf5fb423';
    const theory18 = `
# Economia e Geografia Regional

## 1. Regiões Metropolitanas
Foco na RMF (Fortaleza), que concentra a maior parte do PIB e da população do estado.

## 2. Transposição do Rio São Francisco
Projeto vital para o abastecimento do Ceará (Eixo Norte), trazendo água para o Cinturão das Águas.

## 3. Semiárido e Caatinga
A Caatinga é o único bioma exclusivamente brasileiro. Adaptações à seca (xerofitismo) e solos rasos são características marcantes.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory18, id18]);

    // --- Submatéria 19: Conjunções ---
    const id19 = '27dec939eb1f008dd8be2e3d026059e5';
    const theory19 = `
# Conjunções: Conectivos da Língua Portuguesa

Palavras que ligam orações estabelecendo relações de sentido.

## 1. Coordenativas
Ligam orações independentes.
- **Aditivas:** e, nem.
- **Adversativas:** mas, porém, contudo.
- **Explicativas:** porque, pois.

## 2. Subordinativas
Ligam orações dependentes.
- **Causais:** visto que, ja que.
- **Concessivas:** embora, apesar de.
- **Condicionais:** se, caso.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory19, id19]);

    // --- Submatéria 20: Probabilidade Complexa (Superior) ---
    const id20 = '2a9f0350c80a9a53d9dfa1b35daeff26';
    const theory20 = `
# Probabilidade Condicional e Eventos

Foco em problemas que exigem filtragem do espaço amostral.

## 1. Probabilidade Condicional
Calcula a chance de um evento A ocorrer, dado que B já ocorreu. P(A|B) = P(A ∩ B) / P(B).

## 2. Eventos Independentes
Dois eventos são independentes se a ocorrência de um não afeta o outro. P(A ∩ B) = P(A) * P(B).
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory20, id20]);

    await client.query('COMMIT');
    console.log("Lote 04 concluído com sucesso!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na atualização do Lote 04:", err);
  } finally {
    await client.end();
  }
}

main();
