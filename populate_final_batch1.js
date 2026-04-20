const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}

const subtopics = [
  {
    name: 'Sinônimos e Antônimos',
    topicId: '813e9365f9084f8ac4d23c4745bae763', // Compreensão de Textos e Ortografia (Fund)
    content: `Os sinônimos e antônimos são fundamentais para a ampliação do vocabulário e para a interpretação de textos, especialmente em concursos de nível fundamental onde a substituição de palavras é comum.

### 1. O que são Sinônimos?
Sinônimos são palavras que possuem significados iguais ou muito semelhantes. Eles permitem que escrevamos sem repetir excessivamente a mesma palavra.

**Exemplos comuns:**
- Casa = Lar, moradia, residência.
- Longe = Distante, remoto.
- Começar = Iniciar, principiar.
- Grande = Amplo, vasto, enorme.

### 2. O que são Antônimos?
Antônimos são palavras que possuem significados opostos ou contrários.

**Exemplos comuns:**
- Alto ≠ Baixo.
- Bom ≠ Mau.
- Cedo ≠ Tarde.
- Rápido ≠ Lento.
- Verdade ≠ Mentira.

### 3. A Importância do Contexto
Uma palavra pode ter diferentes sinônimos dependendo da frase. Por exemplo, a palavra "ponto" pode ser sinônimo de "local" (estou no ponto de ônibus) ou de "costura" (levou três pontos no braço).

### 4. Dicas para Provas
- **Substituição**: Ao encontrar uma questão de sinônimos, substitua a palavra na frase original pela opção dada e veja se o sentido permanece o mesmo.
- **Prefixos de Oposição**: Muitos antônimos são formados por prefixos como "in-" ou "des-".
  - Feliz ≠ Infeliz.
  - Ordem ≠ Desordem.
  - Possível ≠ Impossível.`
  },
  {
    name: 'Regra de Três Simples',
    topicId: 'b675c3b4a7fa73be6a73c0ad1bf6a774', // Proporção Básica (Fund)
    content: `A Regra de Três Simples é a ferramenta matemática mais utilizada no dia a dia para resolver problemas que envolvem quatro valores, dos quais conhecemos três e queremos descobrir o quarto.

### 1. Grandezas Diretamente Proporcionais
Ocorre quando, ao aumentar uma grandeza, a outra também aumenta na mesma proporção.
*Exemplo*: Se 2 pães custam R$ 1,00, então 4 pães custarão R$ 2,00.

**Como resolver:**
1. Monte a tabela: 
   - 2 pães --- 1 real
   - 4 pães --- x
2. Multiplique em cruz: 2 * x = 4 * 1 → 2x = 4 → x = 2.

### 2. Grandezas Inversamente Proporcionais
Ocorre quando, ao aumentar uma grandeza, a outra diminui na mesma proporção.
*Exemplo*: Se 2 pedreiros fazem um muro em 10 dias, 4 pedreiros farão em menos tempo (5 dias).

**Como resolver:**
1. Monte a tabela:
   - 2 pedreiros --- 10 dias
   - 4 pedreiros --- x
2. Multiplique em linha (ou inverta uma das colunas): 4 * x = 2 * 10 → 4x = 20 → x = 5.

### 3. Passo a Passo Geral
1. Identifique as grandezas (ex: peso, preço, tempo).
2. Monte a estrutura (uma grandeza abaixo da outra).
3. Analise se é direta ou inversa (use setas: se uma sobe e a outra sobe, é direta).
4. Aplique a regra matemática correspondente.`
  },
  {
    name: 'Problemas Matemáticos do Cotidiano',
    topicId: '07bf6da5a8947fecce1af3859dc987e7', // Operações Fundamentais (Fund)
    content: `Problemas de cotidiano são aqueles que testam sua capacidade de interpretar um texto em língua portuguesa e transformá-lo em cálculos matemáticos simples.

### 1. Palavras-Chave das Operações
Muitas vezes o enunciado não diz "some" ou "divida", mas usa termos equivalentes:
- **Adição (+)**: Ganhou, recebeu, total, soma, acrescentou.
- **Subtração (-)**: Gastou, perdeu, diferença, restou, troco, a menos.
- **Multiplicação (x)**: Dobro, triplo, produto, cada um (ex: 5 caixas com 10 cada).
- **Divisão (÷)**: Repartiu, distribuiu, parcelou, metade, quociente.

### 2. O Problema do "Troco"
É muito comum em provas de nível fundamental:
*Exemplo*: Comprei um item de R$ 35,00 e paguei com uma nota de R$ 50,00. Qual o troco?
Cálculo: 50 - 35 = 15.

### 3. Problemas de Média Simples
*Exemplo*: João tirou 6, 8 e 10 nas provas. Qual a média dele?
Cálculo: (6 + 8 + 10) / 3 = 24 / 3 = 8.

### 4. Dica de Ouro: Organização
Leia o problema uma vez para entender o assunto. Na segunda leitura, anote os números e o que cada um representa. Só depois comece a calcular.`
  },
  {
    name: 'Pontuação',
    topicId: '1e547d911d3bf5fca8a1469c73e5e29e', // Sintaxe da Oração e Período (Medio)
    content: `A pontuação não serve apenas para "pausas na respiração"; ela tem a função de organizar as ideias, evitar ambiguidades e dar o sentido correto ao texto.

### 1. A Vírgula (O terror dos concursos)
A regra mais importante: **NUNCA se separa o Sujeito do Verbo por vírgula**, nem o Verbo de seus complementos.
- Correto: O professor entregou as notas.
- Errado: O professor, entregou as notas.

**Uso obrigatório da vírgula:**
- Enumerações (Comprei arroz, feijão, leite e carne).
- Vocativo (João, venha aqui!).
- Explicações ou Aposto (Brasília, a capital do Brasil, é seca).
- Conjunções adversativas (Estudei muito, mas não passei).

### 2. Ponto e Vírgula (;)
Indica uma pausa maior que a vírgula e menor que o ponto final. Usado para separar itens de uma enumeração longa ou orações coordenadas que já possuem vírgulas internas.

### 3. Dois-pontos (:)
Usado para introduzir uma fala (diálogo), uma explicação ou uma lista enumerada.

### 4. Aspas ("")
Usadas para indicar citações diretas de outras pessoas ou para destacar palavras estrangeiras, gírias e ironias.

### 5. Travessão (—)
Destaque de pensamentos ou substituição de vírgulas e parênteses em trechos explicativos.`
  },
  {
    name: 'Equações de 1º e 2º Grau',
    topicId: '9b93f57627d5af1a848e8045abefb160', // Matemática Aplicada (Medio)
    content: `As equações são igualdades matemáticas que envolvem uma ou mais incógnitas (valores desconhecidos, geralmente chamados de 'x').

### 1. Equação do 1º Grau
Tem a forma base **ax + b = 0**. O objetivo é isolar o 'x'.
*Regra de Ouro*: Tudo que muda de lado na igualdade muda de operação (soma vira subtração, multiplicação vira divisão).

*Exemplo*: 2x - 10 = 0
1. 2x = 10
2. x = 10 / 2
3. x = 5.

### 2. Equação do 2º Grau
Tem a forma base **ax² + bx + c = 0**. A forma mais comum de resolver é pela **Fórmula de Bhaskara**.

**Passos:**
1. Identificar a, b e c.
2. Calcular o discriminante (Delta): **Δ = b² - 4ac**.
3. Calcular as raízes: **x = (-b ± √Δ) / 2a**.

**Tipos de Delta:**
- Δ > 0: Duas raízes reais e diferentes.
- Δ = 0: Uma única raiz real (duas iguais).
- Δ < 0: Não existem raízes reais.

### 3. Sistemas de Equações
Quando temos duas equações e duas incógnitas. Os métodos principais são Substituição e Adição.`
  },
  {
    name: 'Médias Simples e Ponderadas',
    topicId: '9b93f57627d5af1a848e8045abefb160', // Matemática Aplicada (Medio)
    content: `Médias são valores que representam um conjunto de dados. Em concursos, aparecem em problemas de estatística básica e raciocínio lógico.

### 1. Média Aritmética Simples
É a soma de todos os valores dividida pela quantidade de valores.
*Fórmula*: M = (Soma dos valores) / (Quantidade de elementos).

*Exemplo*: Média de idade de 3 pessoas (20, 30 e 40 anos):
M = (20 + 30 + 40) / 3 = 90 / 3 = 30 anos.

### 2. Média Aritmética Ponderada
Ocorre quando os valores têm pesos diferentes (alguns valem mais que outros).
*Fórmula*: M = (V1*P1 + V2*P2...) / (P1 + P2...).

*Exemplo*: Prova 1 (nota 8, peso 2) e Prova 2 (nota 6, peso 3).
M = (8*2 + 6*3) / (2 + 3)
M = (16 + 18) / 5
M = 34 / 5 = 6,8.

### 3. Dicas de Prova
- Se a média de 5 números é 10, a soma deles é 50.
- Muitas vezes a questão pede para descobrir um valor faltante para atingir certa média.`
  }
];

const questions = [
  // Sinônimos e Antônimos - 10
  { name: 'Sinônimos e Antônimos', banca: 'IBADE', statement: 'Assinale a alternativa que apresenta um sinônimo da palavra "EFÊMERO":', options: {a: 'Passageiro', b: 'Eterno', c: 'Duradouro', d: 'Forte', e: 'Lento'}, correctAnswer: 'a', explanation: 'Efêmero é aquilo que dura pouco tempo, ou seja, passageiro.' },
  { name: 'Sinônimos e Antônimos', banca: 'VUNESP', statement: 'O antônimo da palavra "MODESTO" é:', options: {a: 'Simples', b: 'Humilde', c: 'Soberbo', d: 'Pequeno', e: 'Triste'}, correctAnswer: 'c', explanation: 'O modesto é humilde; seu oposto é o soberbo ou arrogante.' },
  { name: 'Sinônimos e Antônimos', banca: 'FCC', statement: 'Na frase "Ele agiu com PRESTEZA", a palavra destacada pode ser substituída sem perda de sentido por:', options: {a: 'Lentidão', b: 'Rapidez', c: 'Dúvida', d: 'Raiva', e: 'Medo'}, correctAnswer: 'b', explanation: 'Presteza significa agilidade ou rapidez.' },
  { name: 'Sinônimos e Antônimos', banca: 'CEBRASPE', statement: 'Antônimos são palavras de sentidos opostos. Qual o antônimo de "Otimista"?', options: {a: 'Alegre', b: 'Positivo', c: 'Pessimista', d: 'Calmo', e: 'Rápido'}, correctAnswer: 'c', explanation: 'Pessimista é o oposto direto de otimista.' },
  { name: 'Sinônimos e Antônimos', banca: 'AOCP', statement: 'O sinônimo de "INDAGAR" é:', options: {a: 'Responder', b: 'Perguntar', c: 'Calar', d: 'Gritar', e: 'Correr'}, correctAnswer: 'b', explanation: 'Indagar significa investigar ou perguntar.' },
  { name: 'Sinônimos e Antônimos', banca: 'IBFC', statement: 'Qual palavra é antônima de "Escasso"?', options: {a: 'Pouco', b: 'Raro', c: 'Abundante', d: 'Seco', e: 'Frio'}, correctAnswer: 'c', explanation: 'Escasso significa pouco; abundante significa muito.' },
  { name: 'Sinônimos e Antônimos', banca: 'FGV', statement: 'A palavra "ÍNCLITO" é sinônimo de:', options: {a: 'Ilustre', b: 'Invejoso', c: 'Truste', d: 'Inclinado', e: 'Ignorante'}, correctAnswer: 'a', explanation: 'Ínclito é um adjetivo para alguém ilustre ou célebre.' },
  { name: 'Sinônimos e Antônimos', banca: 'VUNESP', statement: 'O antônimo de "ALTRUÍSTA" é:', options: {a: 'Generoso', b: 'Egoísta', c: 'Bondoso', d: 'Caridoso', e: 'Amigo'}, correctAnswer: 'b', explanation: 'Altruísta pensa nos outros; egoísta pensa em si.' },
  { name: 'Sinônimos e Antônimos', banca: 'FCC', statement: 'Sinônimo de "ANSEIO":', options: {a: 'Desejo', b: 'Medo', c: 'Raiva', d: 'Desprezo', e: 'Cansaço'}, correctAnswer: 'a', explanation: 'Anseio refere-se a uma vontade ou desejo forte.' },
  { name: 'Sinônimos e Antônimos', banca: 'IBADE', statement: 'Antônimo de "VIL":', options: {a: 'Baixo', b: 'Mesquinho', c: 'Nobre', d: 'Ruim', e: 'Cruel'}, correctAnswer: 'c', explanation: 'Vil é algo desprezível; nobre é o seu oposto.' },

  // Regra de Três Simples - 10
  { name: 'Regra de Três Simples', banca: 'VUNESP', statement: 'Se 5 máquinas produzem 100 peças, quantas peças 8 máquinas produzirão?', options: {a: '120', b: '150', c: '160', d: '180', e: '200'}, correctAnswer: 'c', explanation: '5/100 = 8/x -> 5x = 800 -> x = 160.' },
  { name: 'Regra de Três Simples', banca: 'FCC', statement: 'Uma torneira enche um tanque em 6 horas. Três torneiras iguais encherão em:', options: {a: '18 horas', b: '12 horas', c: '2 horas', d: '3 horas', e: '4 horas'}, correctAnswer: 'c', explanation: 'Inversa: 1 t --- 6 h; 3 t --- x. 3x = 6 -> x = 2.' },
  { name: 'Regra de Três Simples', banca: 'FGV', statement: 'Com 10 kg de trigo fazemos 15 kg de pão. Quantos kg de trigo precisamos para 45 kg de pão?', options: {a: '20 kg', b: '30 kg', c: '35 kg', d: '40 kg', e: '50 kg'}, correctAnswer: 'b', explanation: '10/15 = x/45 -> 15x = 450 -> x = 30.' },
  { name: 'Regra de Três Simples', banca: 'IBADE', statement: 'Um carro percorre 300 km com 20 litros. Quantos km ele fará com 5 litros?', options: {a: '50 km', b: '60 km', c: '75 km', d: '80 km', e: '100 km'}, correctAnswer: 'c', explanation: '300/20 = x/5 -> 20x = 1500 -> x = 75.' },
  { name: 'Regra de Três Simples', banca: 'AOCP', statement: 'Se 8 operários fazem uma obra em 12 dias, 6 operários farão em:', options: {a: '16 dias', b: '10 dias', c: '9 dias', d: '18 dias', e: '20 dias'}, correctAnswer: 'a', explanation: 'Inversa: 8 * 12 = 6 * x -> 96 = 6x -> x = 16.' },
  { name: 'Regra de Três Simples', banca: 'CESGRANRIO', statement: 'Para pintar 20 m², gasta-se 2 litros de tinta. Para pintar 50 m², gastarão:', options: {a: '4 litros', b: '5 litros', c: '6 litros', d: '8 litros', e: '10 litros'}, correctAnswer: 'b', explanation: '20/2 = 50/x -> 20x = 100 -> x = 5.' },
  { name: 'Regra de Três Simples', banca: 'VUNESP', statement: 'Um ciclista faz 15 km em 40 minutos. Em quanto tempo ele fará 45 km?', options: {a: '80 min', b: '100 min', c: '120 min', d: '150 min', e: '180 min'}, correctAnswer: 'c', explanation: '15/40 = 45/x -> 15x = 1800 -> x = 120.' },
  { name: 'Regra de Três Simples', banca: 'FCC', statement: 'Se 4 pães custam R$ 2,40, quanto custam 10 pães?', options: {a: 'R$ 5,00', b: 'R$ 6,00', c: 'R$ 7,50', d: 'R$ 4,80', e: 'R$ 8,00'}, correctAnswer: 'b', explanation: '2,40 / 4 = 0,60 por pão. 10 * 0,60 = 6,00.' },
  { name: 'Regra de Três Simples', banca: 'IBFC', statement: '12 enfermeiros atendem 60 pacientes. Quantos enfermeiros para 100 pacientes?', options: {a: '20', b: '18', c: '25', d: '15', e: '22'}, correctAnswer: 'a', explanation: '12/60 = x/100 -> 60x = 1200 -> x = 20.' },
  { name: 'Regra de Três Simples', banca: 'FGV', statement: 'Um muro é construído por 4 homens em 15 dias. Se fossem 10 homens:', options: {a: '37 dias', b: '6 dias', c: '10 dias', d: '8 dias', e: '12 dias'}, correctAnswer: 'b', explanation: 'Inversa: 4 * 15 = 10 * x -> 60 = 10x -> x = 6.' },

  // Pontuação - 10
  { name: 'Pontuação', banca: 'VUNESP', statement: 'Assinale a frase em que o uso da vírgula está INCORRETO:', options: {a: 'João, venha almoçar.', b: 'Comprei lápis, caneta e papel.', c: 'Os alunos, estudaram muito ontem.', d: 'Ontem, fui ao cinema com Maria.', e: 'São Paulo, 10 de maio.'}, correctAnswer: 'c', explanation: 'Não se separa sujeito (Os alunos) do verbo (estudaram) por vírgula.' },
  { name: 'Pontuação', banca: 'FCC', statement: 'Usa-se os dois-pontos para:', options: {a: 'Separar o sujeito do predicado.', b: 'Indicar uma pausa final.', c: 'Introduzir uma explicação ou fala.', d: 'Indicar dúvida.', e: 'Finalizar um parágrafo.'}, correctAnswer: 'c', explanation: 'Dois-pontos introduzem explicações, citações ou listas.' },
  { name: 'Pontuação', banca: 'CEBRASPE', statement: 'As aspas podem ser usadas para:', options: {a: 'Destacar uma gíria ou citação.', b: 'Indicar o fim de uma pergunta.', c: 'Separar itens de uma lista.', d: 'Substituir o ponto final.', e: 'Indicar grito.'}, correctAnswer: 'a', explanation: 'Aspas marcam estrangeirismos, ironias, gírias ou citações.' },
  { name: 'Pontuação', banca: 'FGV', statement: 'O travessão é frequentemente usado para:', options: {a: 'Substituir a vírgula em apostos.', b: 'Indicar uma pergunta direta.', c: 'Nenhuma das opções.', d: 'Apenas no final do texto.', e: 'Ligar palavras compostas.'}, correctAnswer: 'a', explanation: 'O travessão pode substituir vírgulas ou parênteses para dar ênfase a explicações.' },
  { name: 'Pontuação', banca: 'AOCP', statement: 'Na frase "Maria comprou flores; Pedro, chocolates", a vírgula indica:', options: {a: 'Omissão do verbo (Zêugma).', b: 'Vocativo.', c: 'Aposto.', d: 'Enumeração.', e: 'Erro gramatical.'}, correctAnswer: 'a', explanation: 'A vírgula substitui o verbo "comprou" que ficou subentendido.' },
  { name: 'Pontuação', banca: 'IBADE', statement: 'Qual sinal de pontuação é usado em vocativos?', options: {a: 'Ponto final', b: 'Dois-pontos', c: 'Vírgula', d: 'Ponto de exclamação', e: 'Reticências'}, correctAnswer: 'c', explanation: 'Vocativos (chamamentos) devem ser isolados por vírgula.' },
  { name: 'Pontuação', banca: 'VUNESP', statement: 'A frase "Não, espere" tem sentido diferente de "Não espere" devido à:', options: {a: 'Acentuação', b: 'Crases', c: 'Vírgula', d: 'Concordância', e: 'Regência'}, correctAnswer: 'c', explanation: 'A vírgula muda totalmente o sentido da ordem no primeiro caso.' },
  { name: 'Pontuação', banca: 'FCC', statement: 'Antes de conjunções adversativas (mas, porém, todavia), usa-se:', options: {a: 'Obrigatóriamente vírgula.', b: 'Nunca se usa nada.', c: 'Ponto de interrogação.', d: 'Aspas.', e: 'Travessão sempre.'}, correctAnswer: 'a', explanation: 'Orações coordenadas adversativas exigem vírgula antes da conjunção.' },
  { name: 'Pontuação', banca: 'IBFC', statement: 'As reticências (...) indicam:', options: {a: 'Uma pergunta.', b: 'Uma interrupção ou hesitação.', c: 'O final absoluto do texto.', d: 'Uma citação bíblica.', e: 'Ênfase total.'}, correctAnswer: 'b', explanation: 'Reticências sugerem continuidade, dúvida ou hesitação.' },
  { name: 'Pontuação', banca: 'CEBRASPE', statement: 'Item correto sobre pontuação:', options: {a: 'O ponto final encerra um período.', b: 'Vírgula pode separar sujeito do verbo.', c: 'Dois-pontos iniciam um parágrafo.', d: 'Aspas são proibidas em diálogos.', e: 'Ponto e vírgula não existe mais.'}, correctAnswer: 'a', explanation: 'Afirmação básica e correta sobre o ponto final.' }
];

async function main() {
  try {
    await client.connect();
    console.log("Iniciando Alinhamento 100% - Lote 1 (Fundamental e Médio)...");
    
    // 1. Insert SubTopics
    for (const st of subtopics) {
      // Check if exists
      const check = await client.query('SELECT id FROM "SubTopic" WHERE name = $1', [st.name]);
      let subTopicId;
      
      if (check.rows.length > 0) {
        subTopicId = check.rows[0].id;
        console.log(`SubTopic já existe: ${st.name}. Atualizando conteúdo.`);
        await client.query('UPDATE "SubTopic" SET content = $1, "topicId" = $2 WHERE id = $3', [st.content, st.topicId, subTopicId]);
      } else {
        subTopicId = generateId();
        await client.query(
          'INSERT INTO "SubTopic" (id, name, content, "topicId") VALUES ($1, $2, $3, $4)',
          [subTopicId, st.name, st.content, st.topicId]
        );
        console.log(`SubTopic inserido: ${st.name}`);
      }
      
      // Map questions to the PARENT TOPIC ID (st.topicId)
      const targetQuestions = questions.filter(q => q.name === st.name);
      for (const q of targetQuestions) {
        // Check for duplicates
        const qCheck = await client.query('SELECT id FROM "Question" WHERE statement = $1 AND "topicId" = $2', [q.statement, st.topicId]);
        if (qCheck.rows.length === 0) {
          await client.query(
            'INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            [generateId(), st.topicId, q.banca, q.statement, JSON.stringify(q.options), q.correctAnswer, 'multiple_choice', q.explanation]
          );
        }
      }
      if (targetQuestions.length > 0) {
        console.log(`  -> Questões processadas para ${st.name}`);
      }
    }

    console.log("\nLote 1 concluído com sucesso!");

  } catch (err) {
    console.error("Erro na população:", err);
  } finally {
    await client.end();
  }
}

main();
