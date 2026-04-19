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
    console.log("Iniciando atualização do Lote 03...");
    await client.query('BEGIN');

    // --- Submatéria 11: Microsoft Word ---
    const id11 = 'ce1ff6fa0d32822562e710fb3260a7c8';
    const theory11 = `
# Microsoft Word: Fundamentos para Concursos

O Word é o processador de textos mais cobrado em provas. Foco na "Faixa de Opções" e atalhos.

## 1. Formatação Geral
Pense na estrutura: Fonte, Parágrafo e Estilo. A guia "Página Inicial" contém as ferramentas mais usadas, como negrito, alinhamento e recuo.

## 2. Atalhos Úteis e Faixa de Opções
- **Ctrl + B:** Salvar.
- **Ctrl + N:** Negrito.
- **Ctrl + S:** Sublinhado.
- **Ctrl + K:** Inserir Hiperlink.
A Faixa de Opções (Ribbon) é dividida em Guias (Arquivo, Página Inicial, Inserir, Layout, etc.).

## 3. Impressão e Estilos
A visualização de impressão e a configuração de margens ficam na guia "Layout". Estilos permitem manter a padronização do documento (Título 1, Título 2, etc.).
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory11, id11]);

    // --- Submatéria 12: Microsoft Excel ---
    const id12 = '7dcc26afb684db1e20e896bf952a0765';
    const theory12 = `
# Microsoft Excel: Fórmulas e Gráficos

O Excel é a planilha eletrônica. Lembre-se: toda fórmula começa com o sinal de igual (=).

## 1. Fórmulas Básicas
- **=SOMA(A1:A5):** Soma os valores do intervalo.
- **=MÉDIA(A1:A5):** Calcula a média aritmética.
- **=SE(A1>=7; "Aprovado"; "Reprovado"):** Função lógica para tomada de decisão.

## 2. Gráficos
Representam dados visualmente. Os tipos mais comuns são: Coluna, Barra, Pizza e Linha.

## 3. Formatação Condicional
Altera a aparência das células com base em critérios (ex: destacar em vermelho valores negativos).
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory12, id12]);

    // --- Submatéria 13: Conceitos de Segurança ---
    const id13 = 'bfebc86a12e928ba144c6dbebeb6817a';
    const theory13 = `
# Segurança da Informação

## 1. Malwares (Programas Maliciosos)
- **Vírus:** Precisa ser "executado" por um humano.
- **Worm (Verme):** Auto-replicante, foca em redes.
- **Trojan (Cavalo de Troia):** Programa que parece legítimo, mas esconde código malicioso.

## 2. Phishing e Golpes
Técnicas de engenharia social para roubar dados (e-mails falsos de bancos, etc.).

## 3. Ferramentas de Defesa
- **Backup:** Cópia de segurança para evitar perda de dados.
- **Antivírus:** Identifica e remove malwares conhecidos.
- **Firewall:** "Parede de fogo" que controla o que entra e sai da rede.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory13, id13]);

    // --- Submatéria 14: Princípios Constitucionais (LIMPE) ---
    const id14 = '5098aace183a1a4ee3d9057e0bb8062a';
    const theory14 = `
# Princípios da Administração Pública

## 1. Princípios Explícitos (LIMPE - Art. 37 da CF)
- **L**egalidade: O administrador só faz o que a lei permite.
- **I**mpessoalidade: Sem favorecimentos ou perseguições.
- **M**oralidade: Ética e honestidade.
- **P**ublicidade: Transparência dos atos.
- **E**ficiência: Melhores resultados com menos recursos.

## 2. Princípios Implícitos
- **Razoabilidade e Proporcionalidade:** Atuar dentro do bom senso e equilíbrio.
- **Supremacia do Interesse Público:** O interesse da sociedade prevalece sobre o individual.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory14, id14]);

    // --- Submatéria 15: Organização Administrativa ---
    const id15 = 'ab0078bb1d07819c3aff6dba2af0c440';
    const theory15 = `
# Organização da Administração

## 1. Administração Direta
Composta pelos órgãos dos entes federativos (União, Estados, DF e Municípios).

## 2. Administração Indireta
Entidades com personalidade jurídica própria:
- **Autarquias:** Criadas por lei para serviço público (ex: INSS).
- **Fundações Públicas:** Atividades sociais.
- **Empresas Públicas e Sociedades de Economia Mista:** Atividades econômicas.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory15, id15]);

    await client.query('COMMIT');
    console.log("Lote 03 concluído com sucesso!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na atualização do Lote 03:", err);
  } finally {
    await client.end();
  }
}

main();
