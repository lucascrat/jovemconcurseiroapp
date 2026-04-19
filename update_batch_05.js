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
    console.log("Iniciando atualização do Lote 05...");
    await client.query('BEGIN');

    // --- Submatéria 21: Sistemas de Medidas ---
    const id21 = '301a706b458d122f12077ce449a59217';
    const theory21 = `
# Sistemas de Medidas

O domínio das unidades de medida é fundamental para resolver problemas do cotidiano e de provas de nível fundamental.

## 1. Comprimento (Metro)
A unidade base é o metro (m). Lembre-se das conversões:
- 1 km = 1000 m
- 1 m = 100 cm
- 1 cm = 10 mm

## 2. Massa (Grama)
A unidade base é o grama (g). Muito usado em concursos:
- 1 kg = 1000 g
- 1 t (tonelada) = 1000 kg

## 3. Tempo (Horas e Minutos)
Diferente do sistema decimal, o tempo usa base 60.
- 1 hora = 60 minutos
- 1 minuto = 60 segundos
- 1 dia = 24 horas
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory21, id21]);

    // --- Submatéria 22: Sistemas de Controle (Constitucional - Superior) ---
    const id22 = '33fd990e1c25cb7e3c2f28fd05b1294f';
    const theory22 = `
# Controle de Constitucionalidade

O sistema brasileiro é híbrido, combinando modelos de diferentes origens.

## 1. Controle Difuso vs Concentrado
- **Difuso (Aberto):** Realizado por qualquer juiz ou tribunal em um caso concreto (efeito inter partes).
- **Concentrado (Reservado):** Realizado apenas pelo STF em abstrato (efeito erga omnes).

## 2. Ações Constitucionais
- **ADI:** Ação Direta de Inconstitucionalidade.
- **ADC:** Ação Declaratória de Constitucionalidade.
- **ADPF:** Arguição de Descumprimento de Preceito Fundamental.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory22, id22]);

    // --- Submatéria 23: Responsabilidade Civil do Estado ---
    const id23 = '3a8286b494b0fb8a9a2da354090faf8c';
    const theory23 = `
# Responsabilidade Civil do Estado

O Estado responde pelos danos que seus agentes causarem a terceiros.

## 1. Teoria do Risco Administrativo
A responsabilidade é **objetiva**, ou seja, não precisa provar culpa ou dolo do agente, apenas o nexo causal entre a ação e o dano.

## 2. Ação de Regresso
O Estado, após indenizar a vítima, pode cobrar o valor do agente, mas apenas se houver **culpa ou dolo** deste (responsabilidade subjetiva do agente).

## 3. Excludentes de Responsabilidade
Casos em que o Estado não paga: Culpa exclusiva da vítima, Caso fortuito ou força maior.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory23, id23]);

    // --- Submatéria 24: Navegação na Internet ---
    const id24 = '3df23c3616531c551edb135c5685c219';
    const theory24 = `
# Navegação na Internet e Ferramentas

## 1. Navegadores (Browsers)
Softwares como Google Chrome e Microsoft Edge permitem visualizar páginas web.
- **Cookies:** Pequenos arquivos que guardam preferências do usuário.
- **Cache:** Armazena partes de sites para carregamento mais rápido.

## 2. Uso de E-mail
Protocolos fundamentais:
- **SMTP:** Envio de mensagens.
- **POP3/IMAP:** Recebimento de mensagens.

## 3. Pesquisas Básicas
Uso de aspas (" ") para termos exatos e sinal de menos (-) para excluir palavras da busca.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory24, id24]);

    // --- Submatéria 25: Tipologia e Gênero Textual ---
    const id25 = '503e33f2397875f96f245eb1e8a0cf81';
    const theory25 = `
# Tipologia e Gênero Textual

## 1. Narração, Descrição e Dissertação
- **Narrativo:** Conta um fato/história com personagens e tempo.
- **Descritivo:** Retrata características de algo ou alguém (estático).
- **Dissertativo:** Expõe ideias. Pode ser Informativo ou Argumentativo (quando tenta convencer).

## 2. Argumentação e Falácias
A argumentação exige lógica e provas. Falácias são argumentos que parecem verdadeiros, mas são logicamente inválidos.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory25, id25]);

    await client.query('COMMIT');
    console.log("Lote 05 concluído com sucesso!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na atualização do Lote 05:", err);
  } finally {
    await client.end();
  }
}

main();
