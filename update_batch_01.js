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
    console.log("Iniciando atualização do Lote 01...");
    await client.query('BEGIN');

    // --- Submatéria 1: Interpretação de Textos Simples ---
    const id1 = '477c22cb72ee3c438957c96abbfce5f6';
    const theory1 = `
# Interpretação de Textos Simples

Interpretar um texto é ir além da leitura; é compreender as ideias do autor e as intenções por trás das palavras.

## 1. Leitura e Significado
A primeira leitura deve ser global para entender o assunto. Na segunda leitura, identifique o significado de palavras desconhecidas pelo contexto. Lembre-se: ler é decodificar, interpretar é entender o sentido.

## 2. Ideia Principal e Secundária
Todo texto tem um "coração" (ideia principal). As ideias secundárias servem para dar suporte, detalhar ou exemplificar esse núcleo. 
- **Dica:** Tente resumir o parágrafo em uma única frase.

## 3. Dedução Básica
Muitas vezes, a informação não está escrita (explícita), mas pode ser deduzida (implícita). 
- **Exemplo:** "João saiu com o guarda-chuva." -> Podemos deduzir que está chovendo ou há previsão de chuva.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory1, id1]);
    
    const questions1 = [
      { id: generateId(), topicId: '813e9365f9084f8ac4d23c4745bae763', banca: 'FGV', statement: 'Ao ler a frase "O desemprego é o grande fantasma do século XXI", o autor quer dizer que:', options: { A: 'Existem fantasmas reais no século.', B: 'O desemprego é algo que assusta e preocupa a sociedade.', C: 'O desemprego deixou de existir.', D: 'As pessoas estão morrendo de medo.' }, correctAnswer: 'B', type: 'Múltipla Escolha', explanation: 'A palavra "fantasma" é usada em sentido figurado para representar algo que causa medo ou preocupação constante.' },
      { id: generateId(), topicId: '813e9365f9084f8ac4d23c4745bae763', banca: 'Vunesp', statement: 'Para uma boa compreensão de texto, a primeira leitura deve ser:', options: { A: 'Rápida e apenas para encontrar números.', B: 'Global, para entender o assunto principal.', C: 'Focada apenas no último parágrafo.', D: 'Ignorada.' }, correctAnswer: 'B', type: 'Múltipla Escolha', explanation: 'A primeira leitura serve para o contato inicial e entendimento do tema geral do texto.' }
    ];
    for(const q of questions1) {
      await client.query('INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [q.id, q.topicId, q.banca, q.statement, JSON.stringify(q.options), q.correctAnswer, q.type, q.explanation]);
    }

    // --- Submatéria 2: Ortografia Oficial ---
    const id2 = '95127b28dfca6ad62306b1e94a527d4d';
    const theory2 = `
# Ortografia Oficial

A ortografia estuda a forma correta de escrever as palavras com base em normas gramaticais.

## 1. Uso das Letras (S, Z, X, CH)
- **S e Z:** Palavras derivadas de outras com S, mantêm o S (Casa -> Casinha). Sufixos "esa" e "isa" que indicam origem ou título usam S (Portuguesa, Poetisa).
- **X e CH:** Usa-se X após ditongos (Caixa, Peixe) e após a sílaba inicial "en" (Enxada), com exceções como Enchente (de Cheio).

## 2. Uso do Porquê
- **Porque:** Causa ou explicação (Estudo porque quero passar).
- **Por que:** Início de perguntas ou substituível por "pelo qual" (Por que você não estudou?).
- **Porquê:** Substantivo, precedido de artigo (Não sei o porquê da dúvida).
- **Por quê:** Final de frase, seguido de pontuação.

## 3. Acentuação Básica
- **Oxítonas:** Acentuam-se as terminadas em A, E, O, EM, ENS.
- **Monossílabos Tônicos:** Acentuam-se os terminados em A, E, O.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory2, id2]);

    // ... (Vou continuar o script com os outros 3 subtemas para completar o lote 01)
    
    // --- Submatéria 3: Substantivo e Adjetivo ---
    const id3 = '0730abb952848ec637a1214fdf0272a0';
    const theory3 = `
# Substantivo e Adjetivo

## 1. Substantivo (O Nome)
É a palavra que dá nome aos seres, objetos, sentimentos e lugares.
- **Comuns vs Próprios:** cachorro vs Totó.
- **Concretos vs Abstratos:** mesa vs amor.

## 2. Adjetivo (A Característica)
Palavra que caracteriza o substantivo, dando-lhe qualidade, estado ou modo de ser.
- **Exemplo:** "Menina **inteligente**".

## 3. Flexões
Ambos flexionam em gênero (Masculino/Feminino) e número (Singular/Plural). O adjetivo deve concordar com o substantivo.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory3, id3]);

    // --- Submatéria 4: Verbos e Tempos Verbais ---
    const id4 = '3a8c0c377ece7cefdd41dcea308d50a1';
    const theory4 = `
# Verbos e Tempos Verbais

O verbo indica ação, estado ou fenômeno da natureza.

## 1. Tempos Fundamentais
- **Presente:** Ação que ocorre no momento da fala.
- **Pretérito (Passado):** Ação que já ocorreu. Pode ser Perfeito (concluído) ou Imperfeito (hábito ou inacabado).
- **Futuro:** Ação que ainda ocorrerá.

## 2. Modos Verbais
- **Indicativo:** Certeza.
- **Subjuntivo:** Dúvida, desejo ou hipótese.
- **Imperativo:** Ordem ou pedido.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory4, id4]);

    // --- Submatéria 5: Adição, Subtração, Multiplicação e Divisão ---
    const id5 = '4f906e522b24d1cce12de8e599e4ac9d';
    const theory5 = `
# Operações Fundamentais

## 1. Adição e Subtração
- **Adição:** Somar, agrupar, totalizar.
- **Subtração:** Retirar, comparar, saber a diferença. Cuidado com o "empréstimo" na conta de menos.

## 2. Multiplicação
- É uma soma de parcelas iguais. Ex: 3 x 4 = 4+4+4.
- **Dica:** Decore a tabuada, ela é a base para cálculos rápidos.

## 3. Divisão
- Repartir em partes iguais. 
- **Termos:** Dividendo ÷ Divisor = Quociente e Resto.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory5, id5]);

    await client.query('COMMIT');
    console.log("Lote 01 concluído com sucesso!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na atualização:", err);
  } finally {
    await client.end();
  }
}

main();
