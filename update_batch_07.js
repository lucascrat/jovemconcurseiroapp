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
    console.log("Iniciando atualização do Lote 07...");
    await client.query('BEGIN');

    // --- Submatéria 31: Jurisprudência: Lei 8.112 ---
    const id31 = '72d6fa6b00f31c5a85b782b7a164bc62';
    const theory31 = `
# Jurisprudência sobre a Lei 8.112/90

O entendimento dos tribunais superiores (STF e STJ) é essencial para provas de nível superior.

## 1. Precedentes do STF
O STF decidiu que o servidor público não tem direito adquirido a regime jurídico, podendo a administração alterar a composição da remuneração, desde que não haja redução do valor nominal total.

## 2. Acumulação de Cargos
A regra é a não acumulação. As exceções constitucionais (2 de professor, 1 de professor + 1 técnico/científico, 2 de saúde) exigem **compatibilidade de horários**. O teto remuneratório aplica-se a cada cargo isoladamente em caso de acumulação lícita.

## 3. Processo Administrativo Disciplinar (PAD)
A Súmula Vinculante nº 5 do STF estabelece que a falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory31, id31]);

    // --- Submatéria 32: Orações Subordinadas e Coordenadas ---
    const id32 = '75013355ec2324f679f96ab3b4f09b87';
    const theory32 = `
# Sintaxe Avançada: Orações

As orações dividem-se pela relação de dependência ou independência entre elas.

## 1. Orações Coordenadas
São independentes sintaticamente.
- **Sindéticas:** Possuem conjunção (Aditivas, Adversativas, Alternativas, Conclusivas, Explicativas).
- **Assindéticas:** Sem conjunção, separadas por vírgula.

## 2. Orações Subordinadas
Exercem função sintática em relação à oração principal.
- **Substantivas:** Equivalem a um substantivo (Subjetiva, Objetiva Direta, etc.).
- **Adjetivas:** Introduzidas por pronome relativo (Restritivas ou Explicativas - com vírgula).
- **Adverbiais:** Equivalem a um advérbio (Causais, Concessivas, Condicionais, etc.).

## 3. Pontuação
A vírgula é obrigatória antes de conjunções adversativas e em orações adjetivas explicativas.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory32, id32]);

    // --- Submatéria 33: Dinâmicas Rurais e Urbanas (Ceará) ---
    const id33 = '7bb1eb80eb005945540a7a924326618a';
    const theory33 = `
# Dinâmicas Socioespaciais no Ceará

## 1. O Crescimento das Cidades Médias
Fenômeno de interiorização do desenvolvimento. Cidades como Sobral, Juazeiro do Norte e Quixadá tornaram-se polos de serviços e educação, reduzindo a pressão migratória sobre Fortaleza.

## 2. Agroindústria
A modernização do campo, especialmente na Chapada do Apodi e Vale do Jaguaribe, foca na fruticultura de exportação (melão, manga).

## 3. Problemática da Seca Avançada
A convivência com o semiárido envolve tecnologias como cisternas de placa e a integração de bacias, visando a segurança hídrica para o consumo humano e produção.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory33, id33]);

    // --- Submatéria 34: Conceito e Elementos [Atos Administrativos] ---
    const id34 = '7ebbd7ed8a6ee37e53752186802a8f41';
    const theory34 = `
# Atos Administrativos: Fundamentos

Ato administrativo é a manifestação de vontade do Estado para criar, modificar ou extinguir direitos.

## 1. Elementos (Requisitos) - COM-FI-FOR-M-OB
- **Competência:** Quem pode praticar o ato?
- **Finalidade:** Interesse público.
- **Forma:** Geralmente escrita.
- **Motivo:** Razão de fato e de direito.
- **Objeto:** O efeito jurídico imediato.

## 2. Atributos (PAI)
- **Presunção de Legitimidade:** O ato nasce como se fosse legal.
- **Autoexecutoriedade:** A administração executa sem ordem judicial (exceções existem).
- **Imperatividade:** Impõe obrigação a terceiros independente de concordância.

## 3. Anulação vs Revogação
- **Anulação:** Ato ilegal (efeito Ex Tunc - retroage).
- **Revogação:** Ato legal, mas inconveniente ou inoportuno (efeito Ex Nunc - não retroage).
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory34, id34]);

    // --- Submatéria 35: Reescritura de Frases ---
    const id35 = '856963e5b6c29d0e23670561b062f138';
    const theory35 = `
# Reescritura de Frases (FGV/Cebraspe)

Conteúdo recorrente que exige atenção à gramática e ao sentido.

## 1. Manutenção do Sentido Original
Ao trocar palavras por sinônimos ou alterar a ordem da frase, o significado principal deve ser preservado. Cuidado com mudanças de "quase todos" para "todos".

## 2. Adequação Gramatical
A nova frase deve respeitar as regras de concordância, regência e pontuação. A troca de uma voz ativa por passiva exige ajuste no verbo ("O governo aprovou a lei" -> "A lei foi aprovada pelo governo").

## 3. Tempos Verbais Relativos
Mantenha a correlação verbal para que a sequência lógica temporal não seja perdida na reescrita.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory35, id35]);

    await client.query('COMMIT');
    console.log("Lote 07 concluído com sucesso!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na atualização do Lote 07:", err);
  } finally {
    await client.end();
  }
}

main();
