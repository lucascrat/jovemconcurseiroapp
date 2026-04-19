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
    console.log("Iniciando atualização do Lote 08...");
    await client.query('BEGIN');

    // --- Submatéria 36: Jurisprudência: Lei de Improbidade ---
    const id36 = '866546663421738fbf702d925fa95d1e';
    const theory36 = `
# Lei de Improbidade Administrativa (Jurisprudência)

Com a reforma da Lei 8.429/92 pela Lei 14.230/2021, o STF firmou entendimentos cruciais.

## 1. Dolo nas Ações de Improbidade
O STF (ARE 1.124.931 - Tema 1199) decidiu que a nova lei, que exige **dolo específico** para todos os atos de improbidade, retroage para beneficiar o réu em casos ainda não transitados em julgado. A improbidade culposa deixou de existir.

## 2. Prescrição Intercorrente
A nova lei estabelece prazos de prescrição dentro do processo. O STF decidiu que esses novos prazos de prescrição intercorrente não retroagem, aplicando-se apenas a partir da vigência da nova lei.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory36, id36]);

    // --- Submatéria 37: Porcentagem Simples ---
    const id37 = 'a185a7a85d53df406954109d999c992d';
    const theory37 = `
# Porcentagem e Proporcionalidade

A porcentagem é uma razão com denominador 100.

## 1. Cálculo de Descontos e Acréscimos
- **Desconto de 10%:** Multiplique por 0,90.
- **Acréscimo de 10%:** Multiplique por 1,10.

## 2. Proporcionalidade Direta
Se uma grandeza aumenta e a outra aumenta na mesma razão, elas são diretamente proporcionais. Ex: Mais horas de trabalho = Mais salário.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory37, id37]);

    // --- Submatéria 38: Lógica de Argumentação ---
    const id38 = 'a846a71f283a9b2cc832198da14a7424';
    const theory38 = `
# Lógica de Argumentação

Um argumento é válido quando a verdade das premissas garante a verdade da conclusão.

## 1. Silogismos
Raciocínio dedutivo composto por duas premissas e uma conclusão. 
Ex: "Todo homem é mortal. Sócrates é homem. Logo, Sócrates é mortal."

## 2. Diagramas Lógicos
Uso de círculos (Conjuntos) para visualizar proposições como "Todo A é B", "Algum A é B" ou "Nenhum A é B". Útil para testar a validade do argumento.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory38, id38]);

    // --- Submatéria 39: Provimento e Vacância (Lei 8.112) ---
    const id39 = 'ae6995a8e0872adf59b7396b206fae43';
    const theory39 = `
# Provimento e Vacância

Como entrar e sair do serviço público federal.

## 1. Formas de Provimento (PANRRRA)
- **Promoção**
- **Aproveitamento**
- **Nomeação** (única forma originária)
- **Readaptação**
- **Reversão** (vovô voltando)
- **Reintegração** (inocente voltando)
- **Recondução**

## 2. Posse e Exercício
- **Posse:** 30 dias após nomeação. É o compromisso de desempenho.
- **Exercício:** 15 dias após a posse. É o efetivo desempenho das funções.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory39, id39]);

    // --- Submatéria 40: Direitos Políticos ---
    const id40 = 'b22e9bb64f164cfcbf0c0fe6ac5eba16';
    const theory40 = `
# Direitos Políticos (Art. 14 a 16 da CF)

Garantem a participação do cidadão no governo através do voto e da elegibilidade.

## 1. Sufrágio Universal
Voto direto, secreto, com valor igual para todos.
- **Obrigatório:** Brasileiros entre 18 e 70 anos.
- **Facultativo:** Analfabetos, maiores de 70 e jovens entre 16 e 18 anos.

## 2. Inelegibilidade
Fatos que impedem de ser votado. 
- **Inelegibilidade Reflexa:** Parentes do Chefe do Executivo no respectivo território.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory40, id40]);

    await client.query('COMMIT');
    console.log("Lote 08 concluído com sucesso!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na atualização do Lote 08:", err);
  } finally {
    await client.end();
  }
}

main();
