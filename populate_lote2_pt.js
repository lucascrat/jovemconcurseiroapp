const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const data = [
  // LÍNGUA PORTUGUESA (FUNDAMENTAL)
  {
    subj: 'Língua Portuguesa', level: 'Fundamental', sub: 'Ortografia Oficial',
    content: `
# Ortografia Oficial: Escrevendo Corretamente

As questões de ortografia oficial exigem do estudante a leitura frequente. Bancas adoram palavras que as pessoas falam errado no dia a dia.

## 1. Regras de S e Z
*   **Com S:** Palavras que derivam de primitivas com S (Ex: Casa -> Casinha; Análise -> Analisar). Sufixos femininos que indicam origem/título (Português -> Portuguesa; Profeta -> Profetisa).
*   **Com Z:** Palavras que derivam de adjetivos, criando substantivos abstratos (Ex: Belo -> Beleza; Rígido -> Rigidez).

## 2. Uso do X e CH
A regra de ouro do X tem 3 pilares principais:
1.  Escreve-se com X após um ditongo (encontro de duas vogais na mesma sílaba). Ex: C**ai**xa, F**ou**x, P**ei**xe. **EXCEÇÃO CLÁSSICA:** Recauchutar e Guache.
2.  Após a sílaba inicial "ME". Ex: Mexer, Mexilhão. **EXCEÇÃO:** Mecha (de cabelo).
3.  Após a sílaba "EN". Ex: Enxada, Enxugar, Enxurrada. **EXCEÇÃO MATADORA DE PROVAS:** Quando a palavra base vem de outra com CH! (Ex: Cheio -> Enchente; Charco -> Encharcar).

## 3. O Famoso "Porquê"
*   **Por que:** (Separado, sem acento) = Início de interrogativas ("Por que chora?") ou quando pode ser trocado por "pelo qual" ("Os caminhos por que passei").
*   **Porque:** (Junto, sem acento) = Explicação/Causa. Equivale a "pois". ("Choro porque estou triste").
*   **Por quê:** (Separado, com acento) = Apenas no ÚLTIMO termo da frase (antes de ?, ! ou .). ("Você não comeu por quê?").
*   **Porquê:** (Junto, com acento) = Substantivado! Tem peso de o "motivo". SEMPRE acompanhado de determinante (Um, O). ("Não entendi O porquê de tanta confusão").

## 4. Onde x Aonde e Mal x Mau
*   **Onde:** Lugar estático ("Onde você mora?").
*   **Aonde:** Lugar em movimento, pede preposição "a" ("Aonde você vai?").
*   **Mal:** Oposto de BEM (Ex: "Fui mal na prova" / "Fui bem na prova").
*   **Mau:** Oposto de BOM (Ex: "Ele é um homem mau" / "Ele é um homem bom").
    `
  },
  {
    subj: 'Língua Portuguesa', level: 'Fundamental', sub: 'Interpretação de Textos Simples',
    content: `
# Interpretação e Compreensão de Texto

Parece a mesma coisa, mas nos comandos das provas, há uma diferença brutal entre COMPREENDER e INTERPRETAR!

## 1. Compreensão de Texto (Estar Dentro do Texto)
Na compreensão, a banca quer que você ache uma informação que está FISICAMENTE escrita no texto (EXPLÍCITO). 
*O comando da questão será:* "Segundo o autor...", "O texto informa que...", "Na linha 14, consta que...".
*Como resolver:* Volte e cace a palavra. Não pense além do que a barreira do papel permite.

## 2. Interpretação de Texto (Estar Além do Texto)
Na interpretação, a banca exige que você chegue a uma conclusão lógica (dedução) a partir do que leu (IMPLÍCITO).
*O comando da questão será:* "Depreende-se do texto...", "Infere-se que...", "Conclui-se que...".
*Como resolver:* Aqui você lê a mente do autor. Ex: O texto diz "João saiu com capa e galochas". Você "infere" que estava chovendo, mesmo sem a palavra "chuva" estar ali escrita!

## 3. Dicas de Ouro de Leitura
*   **Técnica do Escaneamento:** Leia primeiro o ENUNCIADO da questão ANTES do texto. Assim você lê o texto como um caçador buscando algo, e não apenas como um turista passeando pelas linhas perdendo tempo.
*   **Cuidado com as "Palavras Absolutas":** Em alternativas de interpretação, fuja de termos como "Sempre", "Nunca", "Jamais", "Exclusivamente". Geralmente, trazem falsidade à opção, pois raros são os contextos 100% absolutos.
    `
  },
  {
    subj: 'Língua Portuguesa', level: 'Fundamental', sub: 'Verbos e Tempos Verbais',
    content: `
# Tempos e Modos Verbais

Verbo é a palavra que exprime ação (correr), estado (ser/estar) ou fenômeno da natureza (chover).

## 1. Os Três Modos Verbais (A intenção da fala!)
*   **Indicativo:** Expressa a CERTEZA. Fatos concretos (passados, presentes ou futuros prováveis). "Eu *estudo* todo dia."
*   **Subjuntivo:** Expressa a DÚVIDA, a hipótese, a possibilidade, incerteza. "Talvez eu *estude*." "Se eu *corresse*..."
*   **Imperativo:** Expressa ORDEM, pedido, conselho. " *Feche* a porta!"

## 2. Tempos Básicos Fundamentais (No Indicativo)
*   **Presente:** Ação atual. "Ando de bicicleta."
*   **Pretérito (Passado):** É cobrado ferozmente pelas bancas em suas ramificações:
    *   **Pretérito Perfeito:** Ação passada TOTALMENTE CONCLUÍDA. (Ex: "Eu *cantei* ontem").
    *   **Pretérito Imperfeito:** Ação ocorrida no passado, mas que não foi acabada, ou era um hábito. Macete: costumam terminar em "-VA" ou "-IA". (Ex: "Eu *cantava* muito", "Eu *vendia* doces").
    *   **Pretérito Mais-Que-Perfeito:** Aquele cara chato! Ação no passado que ocorreu ANTES de outra ação que também está no passado. (Ex: "Quando chegamos na festa, ele já *cantara*"). Geralmente substituído na fala popular por "já tinha cantado".
*   **Futuro:** Pós-momento da fala.
    *   **Futuro do Presente:** Vai acontecer. "Eu *cantarei* amanhã."
    *   **Futuro do Pretérito:** Algo que aconteceria (condicionado). "Eu *cantaria* se tivesse chance."
    `
  },
  {
    subj: 'Língua Portuguesa', level: 'Fundamental', sub: 'Substantivo e Adjetivo',
    content: `
# Morfologia Inicial: Nomes e Características

Na oração, as palavras jogam em times diferentes. O capitão da maioria dos times é o Substantivo, e o Adjetivo é o seu "maquiador".

## 1. O Substantivo
Tudo que tem nome no universo é substantivo! Eles dão nome aos seres.
*   **Comum x Próprio:** "cachorro" / "Totó". "país" / "Brasil".
*   **Concreto x Abstrato:** Pegadinha clássica. Concreto não é "aquilo que pego". Concreto é tudo que *tem existência própria independente da gente* (Ex: Mesa, Deus, Fada, Bruxa - todos têm forma na imaginação independente de quem pensa). Abstrato é aquele que precisa de outro ser para existir: Sentimentos, qualidades, ações (Ex: Amor (só existe se alguém amar), Beleza, A corrida).
*   **Primitivo x Derivado:** Pedra -> Pedreira.
*   **Coletivos:** Conjuntos (Ex: Matilha, Constelação, Cardume).

## 2. O Adjetivo
Palavra variável que "gruda" no Substantivo, caracterizando-o por meio de qualidade, defeito ou estado.
*   Ex: *Carro* (Subst.) **rápido** (Adjetivo).
*   **Locução Adjetiva:** Duas ou mais palavras servindo como Adjetivo (Geralmente Preposição + Substantivo). 
    *Ex:* Amor **de mãe** (Amor **materno**). O "de mãe" é a Locução.
*   **A Mudança de Posição:** A banca FCC adora essa! Mudar o adjetivo de lado altera o SENTIDO? Às vezes sim!
    *   "Um grande homem" (Homem notável) DIFERENTE de "Um homem grande" (Alto).
    `
  },
  // LÍNGUA PORTUGUESA (MÉDIO)
  {
    subj: 'Língua Portuguesa', level: 'Médio', sub: 'Concordância Verbal e Nominal',
    content: `
# Concordância (Verbal e Nominal)

## 1. Concordância Nominal
Regra Geral: O artigo, o adjetivo e o pronome concordam em Gênero (Masc/Fem) e Número (Sing/Plu) com o Substantivo. 
*   Ex: "Aquel**as** formos**as** cas**as** amarel**as**."
*   **Palavras Especiais (Pegadinhas):**
    *   **Caro/Barato:** Varia quando é adjetivo, e NÃO varia (fica masculino singular) quando for Advérbio de preço! 
        - "As camisas estão *caras*" (Adjetivos, ok!)
        - "Os sapatos custaram *caro*" (Advérbio: modo como custou! Invariável!).
    *   **Anexo / Incluso:** Eles variam concodando com a palavra ao invés do email! ("Seguem *anexas* AS DUAS fotos").
    *   *Alerta:* A palavra **"Menos"** não varia NUNCA. Não existe "Menas asneiras" (O correto é *Menos* asneiras).

## 2. Concordância Verbal
Regra de Ouro Máxima: **O VERBO CONCORDA COM O NÚCLEO DO SUJEITO!** Se o sujeito está no plural, verbo no plural. É a principal regra violada no coloquial brasileiro.
*   **Sujeito Coletivo:** (A multidão, A manada) -> O verbo fica no SINGULAR ("A multidão *acompanhou* o cantor"). Mas se ele for especificado ("A multidão DE FÃS"), o verbo aceita as DUAS formas: pode ficar no singular concordando com "multidão", ou plural concordando com "fãs"!
*   **Silepse (Concordância Ideológica):** Você concorda não com o que está escrito, e sim com a "ideia" mental. "Os brasileiros, *somos* apaixonados por café". (A gramática pede 'Os BR.. *são*', mas o falante incluiu a si mesmo ideologicamente dizendo 'somos').
*   **O Verbo Haver:** Matador de candidatos! O verbo HAVER no sentido de existir/evento/tempo É IMPESSOAL! Ou seja, **ELE NÃO VAI PARA O PLURAL, FICA NO SINGULAR!** (Ex: "**Há** 50 vagas abertas", "Não o vejo **há** meses".) Se colocar "Haverão vagas", está reprovado! Contudo, o verbo "Existir" é normal e TEM PLURAL! ("**Existem** 50 vagas.")
    `
  },
  {
    subj: 'Língua Portuguesa', level: 'Médio', sub: 'Regência Verbal e Nominal',
    content: `
# Regência: O Pede-Pede das Palavras

A Regência estuda se um Verbo (Regência Verbal) ou um Nome (Regência Nominal) é fominha por PREPOSIÇÃO (de, a, por, com, em). 

## 1. Regência Verbal Temida
No dia a dia nós assassinamos os verbos. A FGV e CESPE adoram trazer orações coloquiais pra te induzir ao erro. Veja os Top 4 mais cobrados:
*   **Verbo ASSISTIR:** 
    *   No sentido de VER/PRESENCIAR, ele exige "A". Você não assiste "O" filme, você **assiste AO filme**.
    *   No sentido de AJUDAR, não pede nada. O médico **assistiu O doente** (Ajudou o doente).
*   **Verbo PREFERIR:**
    *   Não permite intensidades! É inaceitável dizer "Prefiro MIL VEZES MAIS carne do que peixe".
    *   O correto (ele exige o 'a'): "Prefiro carne **A** peixe."
*   **Verbo ASPIRAR:**
    *   Sentido de Respirar (Não pede nada): "Aspirou O gás."
    *   Sentido de Desejar/Almejar (Pede 'a'): "Aspirou **AO** cargo público."
*   **Verbo OBEDECER:**
    *   Sempre exige preposição. "Obedecemos **ÀS** regras", "Obedeço **AOS** meus pais."

## 2. Regência Nominal Simples
Os nomes funcionam de maneira mais estática, exigindo sempre a preposçãozinha chave antes do complemento nominal.
*   Apto **A / PARA**
*   Medo **DE**
*   Acostumado **A / COM**
*   Simpatia **POR**
*   Moro **EM** (diferente de ir. Quem Vai, vai A; Quem Mora, mora EM).
    `
  },
  {
    subj: 'Língua Portuguesa', level: 'Médio', sub: 'Conjunções',
    content: `
# Tabela Mágica das Conjunções

A Conjunção é o conector (A cola do texto!). Sem elas a oração ficaria uma salada de frases ilhadas. O edital de nível médio/superior não quer que você as decore, quer que você APLIQUE E SAIBA O SENTIDO DE CADA UMA (Valor Semântico).

## 1. Conjunções Coordenadas (Aquelas que dão independência)
Ligam orações que farão sentido se lidas isoladamente. 
*   **Aditivas (Soma):** e, mas também, como também, não só. ("Correu **e** pulou").
*   **Adversativas (Oposição - SUPER CAI NA PROVA):** mas, porém, contudo, todavia, entretanto, no entanto. ("Estudou, **porém** não fez a prova").
*   **Alternativas (Escolha):** ou... ou, ora... ora. ("**Ou** estuda, **ou** trabalha").
*   **Conclusivas (Conclusão):** logo, portanto, por isso. ("Choveu demais, **portanto**, os rios encheram").
*   **Explicativas (Justificativa no final):** pois, porque (geralmente vindo após ordens). ("Feche a porta **porque** está frio").

## 2. Conjunções Subordinativas (Aquelas dependentes)
As que mais derrubam a leitura de candidatos:
*   **Causais (Causa/Motivo que rolou PRIMEIRO):** já que, visto que, como. ("**Como** choveu (motivo primeiro), a rua alagou (resultado)").
*   **Concessivas (UMA OPOSIÇÃO QUE NÃO VENCE!):** embora, ainda que, se bem que, conquanto. ("**Embora** chovesse forte, não alagou a rua"). Note a diferença para a adversativa - a adversativa o lado negativo vence! A Concessiva não tira sua força.
*   **Condicionais (Hipótese de se...):** se, caso, desde que. 
*   **Consecutivas (Resultado posterior):** tanto que, de modo que... ("Gritou tanto, **que** ficou sem voz").

> **A Pegadinha Suprema do "Contudo" e do "Conquanto"**: Bancas vão fazer de tudo para você trocar um pelo outro, mas não têm nada a ver! "Contudo" é Oposição firme (Mas!). Já "Conquanto" é Concessão Manca (Embora!).
    `
  },
  {
    subj: 'Língua Portuguesa', level: 'Médio', sub: 'Pronomes',
    content: `
# O Universo dos Pronomes e a Colocação Pronominal

Os pronomes substituem um nome ou acompanham-no para tirar aquela repetição horrível de palavras em um texto coeso.

## 1. Retomadas no Texto Sagaz
As bancas adoram fazer você voltar 3 linhas para achar QUEM o pronome referenciou (Isso se chama Fator Anafórico/Catafórico).
*   **Anafórico (Volta / Para trás):** "Comprei o livro. Eu **o** li." ['o' retoma livro]. Usa-se *Esse / Essa / Nisso* para retomar termos que já passaram.
*   **Catafórico (Pra frente):** O pronome apresenta algo que você AINDA não leu. "O meu desejo é **este**: A sua paz". Usa-se o *Este/Esta/Isto* para apontar o futuro na frase.

## 2. Colocação Pronominal (Onde coloco o 'ME', 'NOS', 'SE')
Em PT-BR nós colocamos pronome no início da frase informalmente ("Me dá água"), mas Vossa Majestade, A Gramática, ABOMINA isso. Existem 3 posições e a guerra das regrinhas de atração:

1.  **Próclise** (Pronome ANTES do verbo): "Não *se* preocupe." (É o mais forte no Brasil graças as partículas atrativas).
2.  **Mesóclise** (Pronome NO MEIO do verbo): Rara. Usa-se apenas com verbos no futuro e sem palavras atrativas. "Entregar-te-ei os papéis."
3.  **Ênclise** (Pronome DEPOIS do verbo): Obrigatório em verbos nos inícios da oração e onde NÃO haja palavras atrativas. "Diga-*me* a verdade."

### A Magia das Palavras Atrativas (Elas OBRIGAM A PRÓCLISE!)
Decorar isso te salva 3 questões em prova:
Se houver antes do verbo alguma Palavra Negativa (Não, Nunca, Jamais), Advérbio (Aqui, sempre), Pronome Relativo/Indefinido (Que, Quem, Alguém)... Elas funcionam como um **ÍMÃ**, puxando o Pronome para ANTES do verbo.
Ex: O "Não" é um super Ímã! "Não machuque-**se**" está gramaticalmente trágico! O correto pela regra magnética das atrativas: "Não **se** machuque."
    `
  },
  {
    subj: 'Língua Portuguesa', level: 'Médio', sub: 'Sintaxe Avançada de Vírgula',
    content: `
# Sintaxe Avançada: O Domínio Absoluto da Vírgula

A vírgula não é "uma pauzinha pra respirar", essa é a mentira que aprendemos na infância. A vírgula obedece a regras lógicas e **MATEMÁTICAS** de Sintaxe!

## A Estrutura Base do Português: "SVC"
A frase original brasileira nasce na ordem direta, inviolável a marcação: 
**Sujeto (S) -> Verbo (V) -> Complemento (C).**
Em hipótese alguma se pode inserir uma vírgula única separando os termos imediatos do SVC. A pior das rasuras de Prova seria separar na lâmina o Sujeito de seu Verbo ("*O gato de botas, lutou na espada*" - Erradíssimo!).

Então ONDE ENTRA A VÍRGULA? Para marcar intromissões ou deslocamentos:

### 1. Elementos Deslocados (Adjuntos Adverbiais)
Normalmente, advérbios de Tempo ou Lugar (Ontem; Em São Paulo) ficam no fim da oração. Se a gente **"puxa" eles pro início, a vírgula serve pro leitor perceber a manobra!**
Ex: "Fui ao centro na segunda". = SVCO (Direto) /  "Na segunda, fui ao centro". = Vírgula marcou que o termo estava deslocado na Ordem natural.

### 2. A Inclusão Subiteira (Expressões Intercalares)
Deu vontade no autor espetar um pensamento no meio da SVC... Vírgula isolando-o dentro de duas muralhas.
Ex: "Os deputados, **com muita raiva**, cancelaram as pautas".

### 3. Vocativo ("Ei Você!")
Vocativo não faz parte do SVC da frase (É extra-sintático)! Trata do chamamento. 
Ex: "**Gabriel**, você viu a reportagem?" (Sempre exigirá a isolar com virgula!).

### 4. O Efeito do (E) ! A FGV é tarada por ele!
Coloca-se a virgula perto da conjunção Coordenada 'E' ??? A regra das séries iniciais diz que não. A do concurso Diz QUE SIM, se tiver **Dois sujeitos diferentes praticando as ações separadas**.
Exemplo: "João estudou, **e** Maria foi na praia". 
A Vírgula ali é estritamente permitida para facilitar as mentes: Um carpinteiro na banda e outro na orquestra; Sujeitos da separação requerem a pontuação do 'e'.
    `
  },
  {
    subj: 'Língua Portuguesa', level: 'Médio', sub: 'Crase: Casos Proibitivos',
    content: `
# Crase: O Fenômeno de Duas Forças ('A' preposição + 'A' Artigo F)

A Crase (acento grave \` \`) não é um acento de tônica, é uma LIXEIRA de vogais. O 'a' (preposição de "vou A...") chocou com o 'a' feminino ("...A praia"). Elas em vez de "aa" se mataram formando " à ".

Para gabaritar esse ponto em Concurso as bancas nunca pedem onde 'tem a crase'. Eles colocam absurdos para você saber ONDE NUNCA deve colocar Crase! Se tu dominar os **Casos Proibitivos da Morte da Crase**, eliminarás da cara as incorretas nas alternativas.

## Nunca use Crase em:
1.  **Antes de Palavras Masculinas** = Não há 'as', é 'o'. Ex: Comprou a prazo / Foi a cavalo / Andou a pé.  (Esqueça a crase aqui, matador!)
2.  **Antes de Verbos (Em Qualquer tempo!)** = Verbo não tem artigo "A" feminino (Não se diz 'A cantar'). Ex: Passou a correr / Está a esperar / Começou a chorar.
3.  **Entre Plural e Singular Cego! (O 'A' no Singular perante Palavra no Plural)**. 
    Lema da FCC "O 'a' solitário na prova pluralizada, jamais será craseado". Ex: Deu bolo **a** meninas. (Meninas repousa livre). Note a sutileza: Se a Banca colocasse **às** meninas estaria ok pois revelou a presença do Artigo com preposição. 
4.  **Após Preposições** (Exceto 'Até'). Se eu usei o 'Para' -> "Fui Para a Bahia".
5.  **Expressões Repetidas com a Palavra "A" de conexão:** Cara a Cara / Dia a Dia / Gota a Gota / Boca a Boca. JAMAIS terá acento grave!
    `
  },
  // LÍNGUA PORTUGUESA (SUPERIOR)
  {
    subj: 'Língua Portuguesa', level: 'Superior', sub: 'Tipologia e Gênero Textual',
    content: `
# Nível Superior: Os Tipos Textuais x Os Gêneros

No Cebraspe, FCC e FGV as introduções pautam em reconhecer a essência profunda do formato texturizado cobrado. Qual o propósito das letras nas páginas?

## 1. Tipologia (O Molde / DNA)
São as "Formas/Esqueletos". É o jeito mental que nós arquitetamos a língua nas bases. Nós detemos poucas tipologias básicas natas: 
*   **Narrativo:** Ação no tempo com eixo de avanço. Personagens, Clímax, Enredos.  
*   **Descritivo:** Tira uma 'Foto' Mental pro leitor; cheia rechedos com dezenas de substantivos aditivados em pausas de ações estáticas ou perfis. Vender imóveis nas placas com "Sala espaçosa e ampla" é tipologia de fotos! 
*   **Dissertativo:** Transmissão das Ideias focadas e debates! Pode ser expostivos e meramente explicativos, **OU**, a que as bancas pedem de Redações de Tribunal - A Argumentação. Você joga Fatos/Idéas Persuasivas a convencer!  (Uma Tese -> Usadas provas e referências). 
*   **Injutivo (Instrucional):** É a ordem ou prescrição. Verbo recheado de IMPERATIVOS "abra, beba, clique, leia atentamente a bula antes das administrações!". Ele empurra pra fazer algo!

## 2. Gêneros Textuais (A Execução Final nas Ruas)
Elas formam Infinitos cenários práticos cotidianos dos moldes aéreos teóricos:
Se uso a tipologia (Instruir) = Criei o Gênero prático "Receita De Bolo" ou Gênero "Manual da TV".
Se uso a Narrativa  = Criei o Gênero Clássico do "Romance" "Séries" "Contos de Fada" "Piada".

**A Pegadinha das Bancas FGV "Misturas Hibridas":** Todo gênero que repousa as folhas diárias tem uma mistura maciça das tipologias. O Romance "Iracema" do Alencar Narrava a Ação dela na mata (Narrativa), entretanto a mesma folha pausa 5 minutos onde expõe descrições das florestas belas verdes (Descrição). A Banca questionará que o leitor defina qual A tipologia PREDOMINANTE! Ele deve enquadrar os núcleos que não o abandonam em vez do enquadramentos secos.
    `
  },
  {
    subj: 'Língua Portuguesa', level: 'Superior', sub: 'Estilística e Semântica',
    content: `
# Nível Superior: Dominando Significados e Metáforas e Antiguidades

Nas esferas de alto nível o jogo vira interpretacional e não mais estrutural.  Ele brinca com as Figuras da "Beleza" discursiva, os artifícios das fofocas linguistica (a Semântica das Figuras De linguagem).

## A Grande Família de Pensamento!
*   **A Forca do Paradoxo x Antítese**
    *   *Antítese:* Confronta as palavras de campos opostos porém logicamente razoáveis: ("A **vida** e a **Morte** são vizinhas").
    *   *Paradoxos:* Extrapola o caos Lógico do absurdo / Uma impossibilidade real!  ("Nasce o Fogo Gelado",  Luíz Vaz - "É ferida das dores que Não se sentem").

*   **A "Mãe" : Metáfora (Símbolos)** Trata das equivalências indiretas de atributos e adivinhações dos autores ao tirarem as palavras explicativas e do "como", as fundindo ao novo modelo.
    Ex. "Meu vizinho corre *como* Trovoadas". = (Isso foi apenas Comparação com Conexão). 
    Ex. "Meu Vizinho É A TROVOADA" = O autor quebrou o conector "como" para causar Efeitos do delírio! A pessoa ganhou um Atributos alocados na Natureza. 

## Figuras Relacionais Semânticas 
*   **O Eufemismos Suaves:** Reducto de Dores em Notícias, amenizando a palavra feia ou a desgraça de chokes. Ex. Em vez de “Papai Morreu na Várzea”; (O Autor reescreve suavemente "Seu genitor foi passar uma breve moradia no céu eternizado"). As redações policiais do MP amam perguntarem das mitigações em Oitiva! (Roubou o Celta do vizinho -> Troca na fala por: “apropriaram do patrimônio móvel"). 
*   **A Ironização Ácida:** Usa-se falar as belezas e positividades para causar as exatas pancadas de ridicularização e ofenderes do que as frases doem! (Falando pra estúpido sem classe) -> "O sr se comportou na gala tão inteligentemente igualzinho em comportamento asnas do pasto!". A fala de rebaixamento opõe os seus sentidos!  
    `
  }
];

async function run() {
  try {
    await client.connect();
    console.log("Starting massive update for Lote 2 (Português)...");
    
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
    console.log("Batch Lote 2 - Português completo!");
  } catch(e) {
    console.error(e);
  } finally {
    client.end();
  }
}

run();
