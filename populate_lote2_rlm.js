const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const data = [
  // RLM (FUNDAMENTAL)
  {
    subj: 'Raciocínio Lógico e Matemática', level: 'Fundamental', sub: 'Adição, Subtração, Multiplicação e Divisão',
    content: `
# Operações Fundamentais da Matemática

O alicerce não apenas para provas de Ensino Fundamental, mas para não "tropeçar" nas contas complexas de Ensino Médio. As bancas amam jogar com prioridades!

## 1. A Regra de Ouro (A Hierarquia do P.E.M.D.A.S)
Quando uma questão joga uma expressão enorme na prova, ela testa se você sabe QUEM resolver primeiro. Decore a ordem de ataque:
1.  **P**arênteses () / Colchetes [] / Chaves {}
2.  **E**xpoentes e Raízes
3.  **M**ultiplicação ou **D**ivisão (A primeira que surgir da Esquerda para a Direita)
4.  **A**dição ou **S**ubtração (A primeira da Esquerda para a Direita)

> Pegadinha Clássica de Prova: *Quanto é 2 + 2 x 2?* Muita gente erra fazendo 2+2=4 x 2=8. **ERRADO!** Pela ordem, a Multiplicação exige ser resolvida antes. Logo: 2 + (2x2) -> 2 + 4 = **6**.

## 2. Jogo de Sinais (Fundamento Intocável)
Na Multiplicação e na Divisão:
*   Amigos da mesma tribo (Sinais iguais) se dão bem: **(+) com (+) = +**  e  **(-) com (-) = +** 
*   Inimigos de tribos cruzadas (Sinais Diferentes) geram saldo negativo: **(+) com (-) = -** e **(-) com (+) = -**

Na Adição e Subtração de dívidas:
*   Subtrai os valores e **Mantém o sinal do MAIOR número absolto!** Ex: -15 + 10 = O 15 é maior e é negativo, logo saldo = -5.
    `
  },
  {
    subj: 'Raciocínio Lógico e Matemática', level: 'Fundamental', sub: 'Sistemas de Medidas',
    content: `
# Unidades e Sistemas de Medida

As bancas amam testar se o aluno sabe fazer as conversões famosas "da escadinha", pois geralmente juntam isso com probleminha de pintar a área de um terreno e requer transformar as contas.

## 1. A Escadinha do Comprimento (Metro)
Memorize o mantra da conversão: Sempre que descer o patamar (Da unidade maior para a menor), você multiplica por 10 (Adiciona 1 zero). Sempre que subir o patamar (da menorzica para a gigante), Divide.
> km -> hm -> dam -> **m (METRO)** -> dm -> cm -> mm.
*Exemplo:* Converter 5 km em metros? Pula de km (hm, dam, m) = 3 casas. -> Multiplica por 10 três vezes = **5.000 metros!**

## 2. Escadinha das Áreas (Superfície - "Quadrados")
Atenção! Quando se calcula "Área", significa medidas "ao quadrado" (Ex: m²). O Pulo do gato é: **Na escadinha da Área, cada pulo vale DUAS CASAS de zero (Multiplica ou divide por 100!).**
*Exemplo:* Transformar 2 m² em cm²? Desce 2 degraus (m->dm->cm), MAS como é área (²), cada degrau joga dois zeros! Então os 2 pulos viram 4 Zeros. Resulta em **20.000 cm²**.

## 3. O Famoso Litro e Decímetro!
Sabe aquelas questões onde tem o desenho de um aquário e pede "Quantos Litros cabem de água ali dentro"?
Decore: O número em Metros deve virar primeiro dm³! 
**Por quê?** Porque O ESTUDANTIOSO DA MATEMÁTICA descobriu que O volume de **1 dm³** encaixa Perfeita e Magicamente **exato 1 LITRO** (1 dm³ = 1L).
    `
  },
  {
    subj: 'Raciocínio Lógico e Matemática', level: 'Fundamental', sub: 'Porcentagem Simples',
    content: `
# Porcentagem e Juros Simples

O assunto mais cobrado em todos os níveis, em Bancões, Correios, ou Polícias Administrativas.

## 1. Traduzindo do Matematiquês 
Muitas pessoas travam em questões com a palavra "DE". Entenda de uma vez por todas: A Palavra "DE" / "DO" / "DA" no universo dos cálculos **SEMPRE significa sinal de Multiplicação ( x )**. E O Simbolo (%) signfica literalmente **"Cortar por 100."**
*   Ex 1: Calcular "20% DE 150".
*   Mentalize: (20 / 100) x 150.
*   Corte um zero do 20 com um do 100. Depois corte O Zero do 150 com O zero que sobrou do 100.
*   Sobra 2 x 15 = **30!**

## 2. A Fórmula Mágica do Juros Simples: O Juros é "SITI!"
O Juro que rendeu sobre juros simples obedece à equação que salva tempo na prova:
**J = C . i . t**  (O Juros "Site").
*   J = Juros (A Grana extra que o banco vai cobrar a mais)
*   C = Capital (Sua Dívida Inicial).
*   i = Taxa (Ex: se ele quer 5% a.m = Use 5/100!).
*   t = Tempo (Se a taxa for mensal, o tempo TEEEE QUE estar em meses!!!! Alerta máximo de armadilha!)
    `
  },
  // RLM (MÉDIO)
  {
    subj: 'Raciocínio Lógico e Matemática', level: 'Médio', sub: 'Estruturas Lógicas',
    content: `
# O Alicerce: Tabela Verdade e Operadores

Quem reprova em Concursos no Módulo de RLM muitas vezes é porque tenta interpretar as frases apelando para o português. Em "Lógica Matemática", **apague tudo que você sabe de gramática**. As palavras perdem seu sentido semântico e se tornam meros parafusos matemáticos (V ou F)!

## Os 5 Conectivos de Ferro
O "p" e o "q" simbolizam as metades de uma oração e são conectadas!

1.  **A Conjunção "E" (^):** O chatão Exigente! 
    A frase só será testificada como VERDADEIRA (V) se e apenas se **ambos (Todos!)** os lados provarem ser verdadeiros. Se um só falhar, zera toda a máquina (Falso).
2.  **A Disjunção "OU" (v):**  A Mãezona Paz e Amor!
    Só basta ter Um lado contendo pingos de Verdade para validar a máquina como V! Só dará falso quando O ABSOLUTAMENTE TUDO for falso, sem remédio.
3.  **A Condicional "SE... ENTÃO" (->):**  A Matadora de Vidas de Corcursos!
    A Condicional só mente num único universo cabalístico: "A mentira nasceu quando uma verdade pariu uma falsidade" - O famigerado cenário Falso de V -> F . É o macete "Vera Fischer = Falsa". Nunca esqueça que *Verdade antecedendo falsidade na setinha* MENTE. O resto tudo é verdade.
4.  **A Bicondicional "SE, E SOMENTE SE" (<->):** A Balança de Duas Faces do Equilíbrio. 
    Se você quer ela V, Ambos os Lados Devem Ter o Mesmíssimo peso na Moeda! (Se forem Iguais (VV ou FF) = Verdade!!! / Se forem distintos - V e F - Falso).
5.  **A Disjunção Exclusiva "OU... OU" (_v_):** O Opósto Cuspido e Fiel da Bicondicional. 
    Esses só toleram ser Verdadeiros Se Escolhido Diferentes! - Você Casa ou Compra Bicicleta? Se Compra os 2 (VV) da pau e vira FALSO!  (Diferentes = V / Iguais = F).
    `
  },
  {
    subj: 'Raciocínio Lógico e Matemática', level: 'Médio', sub: 'Regra de Três e Probabilidade',
    content: `
# A Salvadora: Regra de Três e Conceito Probabilístico Clássico

## 1. A Base: Regra de Três Simples
Serve para descobrir um 4º valor desconhecido usando de suporte 3 parceiros expostos no problema.

*   **Identifique as Grandezas Indiretas e Diretas.** O Erro de ouro ocorre aqui: O cara monta a cruz de contas e quer multplicar! Calma.
*   PERGUNTE PRA SETA! Se aumentar o Tempo (+), a gasolina de consumo subirá (+) ou Descerá (-)? Subirá ! Grandezas DIRETAMENTE PROPORCIONAIS. Multiplica Cruzado. 
*   E O Famoso cenário "Se 5 Torneiras (+ Torneiras) enche em x horas, se eu botar uma única torneira a pressão não diminuirá e vai ficar MAIS LENTO (-)?" Sim. Inversamente proporcional! Quando é inversamente, **VOCÊ NÃO CRUZA!** Você Multiplica Reto e Paralelamente um pelo parceiro da frente da seta na equação!!!

## 2. A Probabilidade Inicial - O Pescador de Pedaços
Existe o universo dos cálculos e estatísticos nas federais, porem para editais médios, dominar a teoria clássica te fará resolver 70% das probas.
A probabilidade pura nada mais é que A Formulinha Mágica da Esperança:
**P = (Ação Desejada / Espaço Mapeável Total).**    Vulgo: "*O QUE EU QUERO*" Deleitado em Fração contra "*TUDO AQUILO QUE TENHO DE FATOS E OPÇÕES POSSÍVEIS*".
*Exemplo prático:* Qual chance de eu tirar uma bala vermelha do aquário sendo que nele só moram (5 azuis / 1 vermelha e 4 Amarelas)?
O TODO (Espaço Amostral) = 10 Balas.
O MEU DESEJO (Evento Desejado) = Achar 1 da cor vermelha. 
Equação montada e respondida na hora = 1/10 !   Transforma fração ao dividir 1 pra dez ou adicionando para 100. Vira 10% de Proba.
    `
  },
  {
    subj: 'Raciocínio Lógico e Matemática', level: 'Médio', sub: 'Operações com Conjuntos',
    content: `
# A Teoria dos Conjuntos

Aqui as respostas perpassam por saber lidar simbolos.

## 1. Simbologia e Leitura Primordial
- O Simbolo com "u" maiúsculão ( U ) -> Determina uma Ação de "União" (A U B). Junta o galinheiro inteiro do Pátio A mais os pintos do B no mesmo balde. Todos!
- A Ferradura do Inverso de "u" -> Determina "A INTERSECÇÃO". É a palavra chave "E!". Você caça os pontinhos comuns - só serve o que mora NO A e NO B simultaneamente ao momento sem migrarem. (Ex "Aquele pinto branco morador do canil - se achar o inter").
- A Letra (A - B) (Ação de Diferenciar). "Quero o A e quero B SUMINDO DE PERTO". Retira todos que estão participando no B inclusive se estiver enraizado no terreno contíguo misto! Corta o círculo! 
    `
  },
  {
    subj: 'Raciocínio Lógico e Matemática', level: 'Médio', sub: 'Diagramas de Venn',
    content: `
# Desenhando Bolhas (Os Diagramas de Venn)

As piores e melhores questões do IBFC e CESPE baseiam-se em não fazeres a matemática por fora, mas sim construí-la dentro dos "círculos entrelaçados".
"Em uma sala 30 leem e 20 correm, sendo que 10 não curtem esportes nenhum de fora."
Qual O Rito da Prova?

## Sempre Inicie de Trás Pra FRENTE das Circunstâncias (Do Meio pro Eixo final)! 
1.  Bote um quadrado global - O Retângulo universal (Nº Total De Entrevistados de Todo Mundo do Universo ou da Sala do problema). 
2.  Bote os círculos e ache "A MEIÚCA" - A interseção tripla ou dupla cravada no centro que diz "Tantos cidadãos fizeram Tudo junto!". Você Bota O Número Célula Madre ali E NUNCA PODE ESQUECER O PASSO A SEGUIR! 
3.  Quando For expandindo pros lados do contêiner Subtraia Das Pontas o seu núcleo mestre e os outros adjacentes! O Totalizador da borda na entrevista não desconta, e se você não fizer essa simples extração tu reprova fácil. As bancas chamam de "Principio Inclusão-Exclusão Subtrativos". 
    `
  },
  // RLM (SUPERIOR)
  {
    subj: 'Raciocínio Lógico e Matemática', level: 'Superior', sub: 'Lógica de Argumentação',
    content: `
# Silogismos, Validade e Provas Lógicas (Superior)

A lógica argumentativa verifica se a passagem das PREMISSAS para as CONCLUSÕES foi realizada preservando a pureza conectiva de maneira válida. Não julgue o conteúdo com verões semânticos mundanos. Julgues as formas! 

## 1. Um Argumento não é Verdadeiro nem falso: Ele é VÁLIDO (ou Inválido). 
As sentenças de premissas são V/F. O esqueleto final (A argumentação toda do cenário) É VALIDADO.
*   Ex:"Todo Pássaro é Roxo. Eu Sou um Pássaro. Portanto, eu Sou Roxo."
*   Isso não tem "verdade de fato existencial", contudo, formalmente e puramente da base, SE fosse verdade a primeira e SE fosse a segunda... A CONCLUSÂO está **Validada e Lógica**. (O Esqueleto está blindado do chamado Modus Ponens perfeito!).   

## 2. Tabelas Universais ("Todo", "Algum", "Nenhum") O Quadrado Operador Clássicos de Oposições! 
*   **TODO:** A Morte do "Todo" (negação lógicas cabal de "Todos os Homens mentem"). As Bancas colocam que o inverso negativo cabal será dizer que nenhum Mente. ISSO É ERRADO LÓGICAMENTE! 
*   Se "Todos os X estão errados e MENTEM" e você achar O JOÃO NA RUA que seja um HOMEM X E ELE NÃO ESTÁ MENTINDO  - Você já DERROTOU e NEGOU "Todos Mentes"! 
*   A Negaão da palavra "TODO" Mestre é apenas o "PELO MENOS UM PINGO" O (Existe Pelo menus um! / Algum A Não é B!).

*   A Negação de "Algum X é Y" - Aí sim, O Contraponto mestre de negações será "Nenhum X é!". A Lógica Categórica não deixa rastro e a Decoreba do Quadrado mata a Prova no concurso alto!    
    `
  },
  {
    subj: 'Raciocínio Lógico e Matemática', level: 'Superior', sub: 'Probabilidade Complexa',
    content: `
# Aprofundando Teorias da Probabilidade - Cenários Restritos 

## A Lei da Multiplicação em Encontros Sequenciais: (O Probleminha do "E") 
"Lançado 2 moedas e um dado. Qual A Probabilidade do 1 cair cara e O Dado Cima 5?"
Quando você tem Evento L igados pelas Condicionais Sincronas Independetes (E!), o conectivos impõe Multiplicações em série dos P de ambos os Eventos fracionários!  
(P1 da Cara é 1/2) E O (P2 Do Dado Acertar na cabeça O numero 5 é de 1 na frente de 6 ou seja: 1/6). Multiplica as Frações do Cenário Independente Lógicas = 1/2 x 1/6 =  **Chance Final de 1/12 !**   

## As Probabilidades do "OU" (A Lei dos Eventos Suministrados) e Mútuos de união de Áreas
A Letra Ou Impõe SOMANÇAS Matemáticas (SOMA P1 + P2). Puxando pra formula Completa (Se P1 não exclui os outros dos Eventos das bolas juntas): Total (P1OuP2) = Proba de 1 + Proba de 2 - (Probabilidades de intersetados!).  
    `
  },
  {
    subj: 'Raciocínio Lógico e Matemática', level: 'Superior', sub: 'Combinatória e Permutação',
    content: `
# PFC, Arranjo, Permutação e Combinação

Não existe uma prova de Polícia ou Banco nível superior moderna que não tenhas Análises Combinatórias robustas. Muitas fórmulas existem, mas o importante é descobrir QUEM usar quando a prova jogar o caso!

## A Decisão Crucial na Hora da Prova (Arranjo vs Combinações)
**Pegadinha Básica:** Quantos grupos eu faço se aglomerar essas frutas juntas com x cadeiras e poltronas livres de carros? Em duplas ou quintetos sem importares posições? O estudante se enrola e pensa por PFC ou usa Fórmulas soltas. Aja no questionar principal com A Natureza (Ordens Valem?):

1.  *Montei um comitê do Bairro da Esquina e Selecionei: João e Maria de voluntários. Se Eu chamar nas escrituras de "Comites da Maria e o do João", A ORDEM MUDA A SITUAÇÃO NOVA no jogo? NÃO! É a MESMA equipe pra recolher o lixo da rua.* 
**SITUAÇÃO COM ORDEM IRRILEVANTE = USAR A FORMULAS / MÉTODOS C -> A COMBINAÇÕES.**

2.  *Comitei uma votação em Presidente da sala do prêmio e a Vice no colégio. Mudei as opções da caneta - Maria Presidente e Joao Vice mudariam a balança contra Joao Sendo Presidadante pra Maria vice? Sim Mudou O Lema e Posicionação (Eles Ganharam prêmios inversos e dinheiros inversos de salarios no Cargo!)* 
**SITUAÇÃO COM ORDEM RELEVANTE (Muda e cria Cenários distindos!) = USAR MÉTODOS FATORIAIS DIRETOS OU FÓRMULAS VASCULANTES DO (A) -> ARRANJO.**

### Permutações Anagramáticas de Carreira (P = N!) e Suas Repetições
Permutação Linear P(N)=N!  É A Trocas e Movimentos embaralhados da galera no sofá em série se sentando pra fotogafias de turmas - 3 Policiais no Batalhão no sofá sentados pra fotos? 3 Tracinhos. E vão virar ( 3 x 2 x 1 ) Mudos ! 
No dia que surgir os Letreiros E Anagramas De "CASA"  As letrinhas (A) (A) duplas se misturarem você não consegue de longe distinguir o A virgem inicial ou secundários! Permutações com Letras em repetições obrigam tuas multiplicações lineares CORTAREM OS FATORES DUPLOS e triplos POR **DIVISAR N! PELO REPETIDUAL p1! x p2! ...** e Limpar suas poluições lógicas!  A Letra C A S A - Teria 4 Fatoriais lineares = 24 Combinatórdas Livres.... Como Tem a Farsante Da Letra A Repetente 2 vezes... P(4) / 2 Fases (A) =  Você Tem agora só de 12 Anagramas limpos reais !
    `
  }
];

async function run() {
  try {
    await client.connect();
    console.log("Starting massive update for Lote 2 Part 2 (RLM)...");
    
    for (const item of data) {
      const q = `
        UPDATE "SubTopic" st
        SET content = $1
        FROM "Topic" t, "Subject" s
        WHERE st."topicId" = t.id AND t."subjectId" = s.id
          AND st.name = $2 AND s.name = $3 AND s.level = $4
      `;
      const res = await client.query(q, [item.content.trim(), item.sub, item.subj, item.level]);
      console.log(`Updated ${item.sub} (${item.level}): ${res.rowCount} rows`);
    }
    console.log("Batch Lote 2 Part 2 complete!");
  } catch(e) {
    console.error(e);
  } finally {
    client.end();
  }
}

run();
