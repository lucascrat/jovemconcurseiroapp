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
    console.log("Iniciando atualização do Lote 09...");
    await client.query('BEGIN');

    // --- Submatéria 41: Processo Legislativo ---
    const id41 = 'b3c0fc4c03cbb9555f5d685425b2cbaa';
    const theory41 = `
# Processo Legislativo

O conjunto de atos realizados pelos órgãos legislativos para a elaboração das leis.

## 1. Emendas Constitucionais (EC)
A proposta de emenda deve ser aprovada em **dois turnos**, em cada casa do Congresso (Câmara e Senado), por **3/5 dos votos** (60%).

## 2. Leis Complementares e Ordinárias
- **Lei Complementar:** Exige maioria absoluta (primeiro número inteiro acima da metade dos membros).
- **Lei Ordinária:** Exige maioria simples (maioria dos presentes, desde que presente a maioria absoluta).

## 3. Medidas Provisórias (MP)
Editadas pelo Presidente em caso de relevância e urgência. Têm força de lei, mas precisam ser aprovadas pelo Congresso em até 60 dias (prorrogáveis por mais 60).
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory41, id41]);

    // --- Submatéria 42: Poder Legislativo ---
    const id42 = 'c13b016bbd81ea84f150239b6586a837';
    const theory42 = `
# Poder Legislativo

Exerclido pelo Congresso Nacional, que se compõe da Câmara dos Deputados e do Senado Federal.

## 1. Câmara e Senado
- **Câmara dos Deputados:** Representantes do povo (sistema proporcional).
- **Senado Federal:** Representantes dos Estados e do DF (sistema majoritário).

## 2. Comissões Parlamentares de Inquérito (CPI)
Têm poderes de investigação próprios das autoridades judiciais. Podem ouvir testemunhas e quebrar sigilos, mas **não podem** decretar prisão (salvo flagrante) nem julgar.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory42, id42]);

    // --- Submatéria 43: Regra de Três e Probabilidade ---
    const id43 = 'c6d06733197dd3c8bd55d40806f766bd';
    const theory43 = `
# Regra de Três e Introdução à Probabilidade

## 1. Regra de Três Simples
Relaciona quatro valores, dos quais conhecemos três.
- **Direta:** Se uma aumenta, a outra aumenta. (Multiplica em cruz).
- **Inversa:** Se uma aumenta, a outra diminui. (Multiplica em linha).

## 2. Conceito de Probabilidade
Probabilidade = Casos Favoráveis / Casos Possíveis.
Sempre um valor entre 0 (0%) e 1 (100%).
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory43, id43]);

    // --- Submatéria 44: Lei de Improbidade Administrativa ---
    const id44 = 'c8d84a30b11b5637d33f7e64db9b4ad9';
    const theory44 = `
# Lei de Improbidade Administrativa (Lei 8.429/92)

Pune atos que ferem a moralidade e o patrimônio público.

## 1. Atos de Improbidade
- **Enriquecimento Ilícito:** Ganhar vantagem indevida.
- **Prejuízo ao Erário:** Causar perda financeira ao Estado.
- **Atentar contra os Princípios:** Ferir a legalidade, moralidade, etc. (Exige dolo específico).

## 2. Sanções
Incluem a perda dos bens, perda da função pública, suspensão dos direitos políticos e multa civil.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory44, id44]);

    // --- Submatéria 45: Remédios Constitucionais ---
    const id45 = 'd12df35ada478f9ebf34cd8381018cb8';
    const theory45 = `
# Remédios Constitucionais

Garantias para proteger os direitos quando violados ou ameaçados.

## 1. Habeas Corpus
Protege a **liberdade de locomoção** (ir e vir). É gratuito e não precisa de advogado.

## 2. Mandado de Segurança
Protege **direito líquido e certo**, não amparado por HC ou HD.

## 3. Habeas Data
Garante o acesso ou retificação de **informações pessoais** constantes de registros governamentais. Gratuito.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory45, id45]);

    await client.query('COMMIT');
    console.log("Lote 09 concluído com sucesso!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na atualização do Lote 09:", err);
  } finally {
    await client.end();
  }
}

main();
