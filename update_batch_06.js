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
    console.log("Iniciando atualização do Lote 06...");
    await client.query('BEGIN');

    // --- Submatéria 26: Regime Disciplinar (Lei 8.112) ---
    const id26 = '56926868161edc9857228847c78e5331';
    const theory26 = `
# Regime Disciplinar (Lei 8.112/90)

O regime disciplinar trata dos deveres, proibições e penalidades aplicadas aos servidores públicos federais.

## 1. Deveres e Proibições
- **Deveres:** Exercer com zelo as atribuições, ser leal às instituições, observar normas legais.
- **Proibições:** Ausentar-se do serviço sem autorização, retirar documento da repartição, valer-se do cargo para lograr proveito pessoal.

## 2. Penalidades Disciplinares
As penas são aplicadas conforme a gravidade da infração:
- **Advertência:** Por escrito, para infrações leves.
- **Suspensão:** Até 90 dias.
- **Demissão:** Para faltas graves (improbidade, abandono de cargo, corrupção).
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory26, id26]);

    // --- Submatéria 27: Políticas Públicas Sociais (Ceará) ---
    const id27 = '5a1b763e6fab4a2f1bfebe252dd98b3a';
    const theory27 = `
# Políticas Públicas no Ceará

O Ceará tem se destacado nacionalmente em indicadores sociais, especialmente na educação.

## 1. Educação no Ceará (Modelos de Sucesso)
O regime de colaboração entre Estado e Municípios (PAIC) elevou o Ceará ao topo do IDEB. Cidades como Sobral são referências internacionais.

## 2. Combate à Desigualdade Social
Programas de transferência de renda estaduais e investimentos em infraestrutura hídrica visam reduzir o impacto da seca na economia familiar do sertanejo.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory27, id27]);

    // --- Submatéria 28: Lei 14.133/21 Completa (Superior) ---
    const id28 = '5e2b9f050b3eda355fe93cb7ed549b27';
    const theory28 = `
# Aprofundamento em Licitações e Contratos

## 1. Inexigibilidade e Dispensa
- **Inexigibilidade:** Inviabilidade de competição (ex: fornecedor exclusivo, artista consagrado).
- **Dispensa:** A competição é possível, mas a lei desobriga a licitação (ex: baixo valor, emergência).

## 2. Contratos Administrativos
Regidos pelo direito público, permitem as "Cláusulas Exorbitantes" (alteração unilateral, rescisão unilateral pelo Estado).

## 3. Infrações e Sanções Licitatórias
Sanções previstas: Advertência, Multa, Impedimento de licitar e Declaração de Inidoneidade.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory28, id28]);

    // --- Submatéria 29: Controle da Administração ---
    const id29 = '5eda9c00b875b6a4c8774a552779933a';
    const theory29 = `
# Controle da Administração Pública

## 1. Controle Interno e Externo
- **Interno:** Exercido pela própria estrutura (ex: Corregedorias).
- **Externo:** Exercido pelo Legislativo com auxílio do Tribunal de Contas (TCE/TCU).

## 2. Tribunais de Contas
Órgãos técnicos que garantem a fiscalização contábil, financeira e orçamentária. Não julgam pessoas, mas sim as "contas".

## 3. Recursos Administrativos
Direito do cidadão/servidor de contestar decisões na própria via administrativa.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory29, id29]);

    // --- Submatéria 30: Atividades Econômicas do Ceará ---
    const id30 = '6de13df200ed0017e52fa02cd742e61c';
    const theory30 = `
# Economia do Ceará: Novos Eixos

## 1. Turismo e Serviços
Principal motor do PIB cearense, focado no litoral e eventos em Fortaleza.

## 2. Indústria de Energias Renováveis
O Ceará é protagonista em Energia Eólica e está se tornando o "Hub do Hidrogênio Verde" no Porto do Pecém.

## 3. Agronegócio e Seca
Produção de frutas no Vale do Jaguaribe utilizando irrigação moderna, superando os desafios climáticos.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory30, id30]);

    await client.query('COMMIT');
    console.log("Lote 06 concluído com sucesso!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na atualização do Lote 06:", err);
  } finally {
    await client.end();
  }
}

main();
