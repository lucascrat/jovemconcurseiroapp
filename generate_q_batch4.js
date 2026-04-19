const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}

const questions = [
  // 12. Classes de Palavras Básicas (c95813348a4331dfa932d3bb78676146)
  {
    topicId: "c95813348a4331dfa932d3bb78676146",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "Qual das pálavras sublinhátas age com a Funça de Pronomes Possessivos ?",
    options: JSON.stringify(["O NOSSO  chefe surtou. ", "Ele correu Muito.", "Eu avisei Que ia da merda .", "Os Rapazes voltaras.", "Um copo de água . "]),
    correctAnswer: "O NOSSO  chefe surtou. ",
    explanation: "Meu, Teu , Seu, Nosso e Vosso sao pronomes Adjetivos de posses !"
  },
  {
    topicId: "c95813348a4331dfa932d3bb78676146",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "No trechos : 'A Menína Inteligente passooos !!' Qual a classe gramaticar de Inteligentes?",
    options: JSON.stringify(["Substantivos", "Adjetivos .", "Adverbos de Modos", "Pronómes", "Artigo definidor."]),
    correctAnswer: "Adjetivos .",
    explanation: "O Adjetivo Cracteriza e modifica um subisitantivo! (Menina = Nomė / Inteligentes = A Famosas Qualidades Adjetívadas). "
  },
  {
    topicId: "c95813348a4331dfa932d3bb78676146",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "A Letras 'O' pode atuar Tanto como Artigo Quano com Pronome Demonstrativo ! Identifique ond Ele E pronome De Monstrotivo!",
    options: JSON.stringify(["O Gato miou altos.", "João matou O boze .", "Eu só quero O que è mEu !", "O Sol esquentando.", "Vi o Homem ."]),
    correctAnswer: "Eu só quero O que è mEu !",
    explanation: "Macete de Ouros: Troque  'O' por 'AQUILO'. Ex: 'Eu só quero AQUILO que é meu'.  Bateu osentido ??? Entao E PRONOME demonstrativos e nao o artiho simples! "
  },

  // 13. Controle e Responsabilidade Sup (784a0a6d3b5e0d23b495c726b781a62a)
  {
    topicId: "784a0a6d3b5e0d23b495c726b781a62a",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Se As obras Foderiais de Uma Ferrovia Do Ministro For superfartuadas e causan prejusio aos cofrese, O T.C.U  Pode Decretar o Julgamento destas Contasa E condenas Ministro p  fazer el devolcão Ao erário ( Imputar Debító)?",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Sims ! TCU julgas as contas dos administratores Dinheiriastas. Se O ministro desvia ferrovias, O TCU Julga e Condenas 'IMPUTANDO DÉBITO' P/ ele e pras empreiteras Safadas.   "
  },
  {
    topicId: "784a0a6d3b5e0d23b495c726b781a62a",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Na responsábilildades civil Da uniao  Pela Teórica do Risco Adm - Se Um Onibus Estatais Batem Em meu Celta e MATA O Gato , Eu Pra procsar o Gvoerno eu PRECSio Provar que o Motorista estava bebados na vias ou Agiu em Culpá ??",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Não precisos provas MERDA NENHUMA de culpa de ninguem! Responsabilidades Objétivas do Estado (Risco Adm): Basta EU privar : 1 O Dnaos (Gato morto), O 2 O Onbis do estado , E 3 O Nexo de causas (Onibs Bateu ele). A Culapas de funcionaria se dane o Estados paga.  "
  },
  {
    topicId: "784a0a6d3b5e0d23b495c726b781a62a",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "A Reposnabilidades Civil DO Estadão Se AFASTA  (Exculdentes),  Se O Dani ocorreros For por Ocupações Culaposas exlusivas DA VITÍMAS (Ex: Cidadaos Pular Nos trihlos do metro querendo O Suicidio ). ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "É uma das Unicas formas das Estado escapar e Nao  pagares indenizcoes !! Culpa Exclusivas das Vistimas (Ele queria morrer e se Jogous na Linhas Dos trens) ou Caso Fortuito Maior ! "
  },

  // 14. Direitos e Garantias Fundamentais Sup (70e0527aec1926b2425784036a36ad2a)
  {
    topicId: "70e0527aec1926b2425784036a36ad2a",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "A LIbertadãoe e as Expressão  De Pensamentoz no Brasul É Totais e ABbsolutos! Podendo O Cidadão usra ela Para XInagar OS Negroz Na rua Ou Propagar O naziosmo Sem Ser preos. ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Nennhun direito As Cf é Absoluto !! A Lberdades de expressao Encontra Parede na Hora Qe voc cometer O Crimes de Racismo ou de Odioas . "
  },
  {
    topicId: "70e0527aec1926b2425784036a36ad2a",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "É Livre As Locomovas Nacionaois Em Tempos De Paces, POdendo qualqueer Pessoa entrar permanecer Ou vazar Com sus Bens  Bens  Daqui . ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Art 5 ! Direoti De ir , vir e permanecer . (Desde que Ems tempos DE Paz ! Num estados De Sítio De guera isso e suspenesosos ! "
  },
  {
    topicId: "70e0527aec1926b2425784036a36ad2a",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Qual Do aBaioS N NÉ  CRimes Impresciitivel Pelo Artigõ 5 ?? ",
    options: JSON.stringify(["Racismos ", "Acãão do grupos rmdos contro O Estdao", "Homicidío DOlouosos Simoles ", "Todsa acima .", "Nnnehum ."]),
    correctAnswer: "Homicidío DOlouosos Simoles ",
    explanation: "Os doiS Único Crimes QUE NÀOOO PRESCREVEM Nunquinhas : O R AÇÃO (Racismo + Açao do gruops armadinhos) . "
  },

  // 15. Sintaxe Avançada Sup (9112e0a3573ceee09dc6069dfeff4bde)
  {
    topicId: "9112e0a3573ceee09dc6069dfeff4bde",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Em 'Quem conta um conto, aumenta um ponto.' A oração 'Quem conta um conto' exerce sintaticamente o papel de:",
    options: JSON.stringify(["Objeto direto preposicionado.", "Sujeito oracional.", "Adjunto adverbial de condição.", "Predicativo do sujeito.", "Oração coordenada assindética."]),
    correctAnswer: "Sujeito oracional.",
    explanation: "Quem aumenta um ponto? 'Quem conta um conto'. A oração inteira exerce a função de sujeito do verbo 'aumenta'."
  },
  {
    topicId: "9112e0a3573ceee09dc6069dfeff4bde",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Na oração 'Necessita-se de novos servidores capacitados.', a partícula 'se' classifica-se como pronome apassivador, motivo pelo qual a oração poderia ser reescrita como 'Novos servidores capacitados são necessitados.'. (Certo/Errado)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Errado. O verbo 'necessitar' é Transitivo Indireto (pede preposição 'de'). A partícula 'se' vinculada a V.T.I funciona como Índice de Indeterminação do Sujeito e NUNCA aceita voz passiva!"
  },
  {
    topicId: "9112e0a3573ceee09dc6069dfeff4bde",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "Assinale a alternativa onde ocorre o clássico Anacoluto gramatical (quebra repentina da estrutura sintática inicial).",
    options: JSON.stringify(["As árvores, cujas raízes são fortes, resistem ao vento.", "O velho do sítio, nada o fazia sorrir mais do que os cavalos.", "Comprei maçãs, laranjas e peras pela manhã.", "As moças andavam muito cansadas das lutas.", "Nem você nem ele farão as provas de amanhã!"]),
    correctAnswer: "O velho do sítio, nada o fazia sorrir mais do que os cavalos.",
    explanation: "No anacoluto, o falante começa a frase com uma estrutura ('O velho do sítio...') e de repente, quebra a linha orginal da frase para recomeçá-la de outra forma ('..., nada o fazia...'), deixando o primeiro termo 'jogado' isolado."
  },

  // 16. Compreensão Textos e Ortografia Fund (813e9365f9084f8ac4d23c4745bae763)
  {
    topicId: "813e9365f9084f8ac4d23c4745bae763",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "No preceito da acentuação gráfica, as palavras Paroxítonas finalizadas na letras L e R sempre demandam o uso agudo de acentos , A exemploss : FÁCIL e REVÓLVER , (Julgs ) .",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Sim! Paroxítonas TUDO QUE TERMINEM EM L. I. N. U. S. PS. Ã, R. UM. ONS. X .. Ganham As chapelas! = (Fácil, Revólver, Pólen ). O q Nao GanHA Sao as termiçacoe  em A, E , O!"
  },
  {
    topicId: "813e9365f9084f8ac4d23c4745bae763",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Sobre os PORQUÊ . Uso DO Porque jounto e sem os Acnetod Na Fraees Indica que é . ",
    options: JSON.stringify(["Por que das pergunrtas inicoas .", "A Repostas Explicativas (Pois). ", "Um motivoss, ou razaos . Subisnatvi .", "Perguntas de fanis da frasas.", "Os Oque  Ppr."]),
    correctAnswer: "A Repostas Explicativas (Pois). ",
    explanation: "Porque Junto + Sem o Tio (Acento) = EXpILICAA AS RESPOStsa. Equivale a 'POIS'. Ex: Eu não fui porque (pois) Chovis. "
  },
  {
    topicId: "813e9365f9084f8ac4d23c4745bae763",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "Qual paçãvra sabaico estar ESCRITA INCORETA ORTOGRAFicamentse  ",
    options: JSON.stringify(["EXCEÇÃO .", "EXCELENTE.", "XUXU", "PRETENSIOSO.", "ANSOSO. "]),
    correctAnswer: "XUXU",
    explanation: "A Escrita correta nos Hortifrutis Das rocas E CHUCHU  ( Com a Ch e sem Os Xingamentos do X)"
  },

  // 17. Combinatória e Probabilidade Sup (adf2280e1788c998b22ddedbf36d50d6)
  {
    topicId: "adf2280e1788c998b22ddedbf36d50d6",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Se temos 8 livros distintos e queremos montar um pacote de 3 livros aleatórios para doar. A ordem de quais livros pegamos 1° não importa. Essa matemática das formações resolverá em arranjos simples, e não por combinações. (Certo/Errado)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "A regra principal da combinatória: Se A ORDEM IMPORTA = É ARRANJO (Senhas, Podium, Presidentes). Se A Ordem NÃO Importa e for pacotão = COMEÇA COM 'C' DE COMBINAÇÃO e C de COMISSÃO (Salada de Fruta, Doar livros)."
  },
  {
    topicId: "adf2280e1788c998b22ddedbf36d50d6",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "A Letras De ANAGRAMA DA PalaVRA 'BALA' rende  Qunts formacoes Totail ? .",
    options: JSON.stringify(["24", "4", "12", "6", "8"]),
    correctAnswer: "12",
    explanation: "Cálculo do Permultar COM Repetições das Leotrinhas !! BALA tem 4 Letras (4!) mas possuí A letrinahs A duplicar 2 vzs (2!). Fica O Quatro Farots dividod Por Dos Farots = 24 / 2 = 12 "
  },
  {
    topicId: "adf2280e1788c998b22ddedbf36d50d6",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Qual o prabobilidade do Jogo da Morda Do caras dar Duas corôaas Seguidonas Ao Lancar Moeds2vS ?  ",
    options: JSON.stringify(["50 pcorct", "75 porcento", "25 Porcencos ", "100 pocnentos", "0 % "]),
    correctAnswer: "25 Porcencos ",
    explanation: "Jogada Um (Cara Ou coroa= 1/2) E NA JOGDa Dois (CAra ou Corioa = 1/2). Multiplicara OS DOIS Lances (1/2  Vzs 1/2 ) = Dá 1/4!! Que é os 25 %   "
  },

  // 18. Compreensão Textual Avançada Med (006f40747a2c03877983d9598061d736)
  {
    topicId: "006f40747a2c03877983d9598061d736",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Diferencie inferencia (Deprenssáo do tex) Das Cópiais literais. A inferencia ocorri qnda  A repostdas Naõ esta estacrpadas nas linhas , Mas  vove conclui LOGicamte Lendo nas estrelinahs . ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "O 'Infere-se que...' nas provas de Português significa deduzir através da lógica que o autor deixou como pistas. Ele não escreveu as palavras exatas do gabarito, mas você chega na conclusão lendo nas entrelinhas."
  },
  {
    topicId: "006f40747a2c03877983d9598061d736",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Identifique das opçoaes Uma figura das Sintáxiz chamdos DO ZEUGMAS . ",
    options: JSON.stringify(["O Zeugimas é uM ELIPLISES de Um Termkja CItdos ants nas frasez a .", "Zegmas é pleonasmos de viciada .", "Eu nao zeugmas. ", "Omitira um Nome q nncq fpr Falods na frasaes . ", "Uso de crahs sem ter a ."]),
    correctAnswer: "O Zeugimas é uM ELIPLISES de Um Termkja CItdos ants nas frasez a .",
    explanation: "Zeugma é uma Elipse Especial. É quando OMITE-Se da frase um termozitnho QUE VOCE JÀ FALOU AGORA POUQUÍSSIMO e esconde ele na segunda pra não enjoar. Ex: 'Maria Come uva, JOão (come) maçã.'"
  },
  {
    topicId: "006f40747a2c03877983d9598061d736",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "O Tipologios Dos teXtos que Visa EXPOR e inFORMARES E EXOLICAR fatos (EX: A bula do Remdio e As Jounrais ). Asseinalos Qual :. ",
    options: JSON.stringify(["O Narratiosos ", "DISSSERTATAS EXPOSTIVAS .", "O Dissertaticzos Argumentativass.", "Injutvivos e as presritcaias. ", "Descrigcasios ."]),
    correctAnswer: "DISSSERTATAS EXPOSTIVAS .",
    explanation: "Textos EXPOSITIVOS/Informativos! Seu objetivo NâO é convencer e opinar o que ele ACHA das mortes mundias, O obejtovk È Sò Expor Notícia Ou Explicar Manuaul como um Robo !! "
  },

  // 19. Conceitos Essenciais Info (d03e1c8cc27caf211a2b80d0949cca9e)
  {
    topicId: "d03e1c8cc27caf211a2b80d0949cca9e",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Para o Hardware do pc funfa , ELE PRecsia dos Sotwaresh ! O Sistmas OPeracionalis ( Windoews 11) È clasficiados Com O SOfftware Da Categoria UTilitários ??? ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "O Windows e LInusx Nao sao Utlitariso de limpar arquivosos . Eles aA O Software DA CATEGORIAS DO ( Bàsico ou SIsTTMAS MAE) !!! "
  },
  {
    topicId: "d03e1c8cc27caf211a2b80d0949cca9e",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "O Pen drive è oq na machiinas informatikadas ?  ",
    options: JSON.stringify(["Cérebreos de porceassamento das Cpu s. ", "Peiferircoas dos SAIDADAS Somentss.", "Periferíco MISTOS DO Entraaa e da Saídas as dos dadoz Da  memorias. ", "Somnete de ENTRADAS p pc. ", "Software s de  AntiVirs. "]),
    correctAnswer: "Periferíco MISTOS DO Entraaa e da Saídas as dos dadoz Da  memorias. ",
    explanation: "MISTOS , Pois voce Poe Foto P Dentro pc (Entra) e dps sTira as fOtOS do hd e poẽn no pendriced Pra forsa s da Maquians (SAIDA). !!"
  },
  {
    topicId: "d03e1c8cc27caf211a2b80d0949cca9e",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "O Cpi (Processdorz do maquinais). , Mediz sa  suas  rapidezE   da Velocidád  dos Clockc Em quais medidos ??",
    options: JSON.stringify(["Gigas Byytes", "Terás Bits.", "GIgans HertZ ( E os HERTZS . )", "Em  Watts  do fontes", "Volzts."]),
    correctAnswer: "GIgans HertZ ( E os HERTZS . )",
    explanation: "Velocidaddes dos Clocks Dos processadores Intels Roudam OHz ! Megahertz E GigasHertzzs ( GHz ) = A Pulsaççoes pro segundos "
  },

  // 20. Matemática Aplicada Med (9b93f57627d5af1a848e8045abefb160)
  {
    topicId: "9b93f57627d5af1a848e8045abefb160",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Se 20 % Das Laranajs é 40 .. Quanras larnjas eu tnh nas Total de Cesto ?",
    options: JSON.stringify(["80 ", "100", "200", "300", "400"]),
    correctAnswer: "200",
    explanation: "Regrras DE tres Simplems :  20 --- = 40 \\b  E as s 100 --= Xi .     X  = ( 40 * 100 )  Div/ por 20.   =  4000  / 20   =  200!! "
  },
  {
    topicId: "9b93f57627d5af1a848e8045abefb160",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Num Caculoz Das Juross Simplessss : 100 reasa Empretaddsz No Taxis de 10 Por centos as mes.. Qaunto DA  As Juro dps Das  3 Mesês ? .",
    options: JSON.stringify(["30 reisas ", "33 resis .", "10 reals", "130 reasas ", "20 Reasis "]),
    correctAnswer: "30 reisas ",
    explanation: "As fomrmulas Da Jiti : J = Pin !!!   Juros s = P (100) x I (   10 %  qe  é 0,1)  X N(O Numro de Tempodas q é 3 )!!! j= 100 x0.1 x 3  =   30 reiald "
  },
  {
    topicId: "9b93f57627d5af1a848e8045abefb160",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "JUROs  Compostoss è juros sobre os jsuros da mesi Passds.. (Certo O u Errados ?) ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Sims !  É O Efueito Bolo de Neve Dos COnjuntos composts (A  diferenxça pras silmepes Q Nnao tem bolos).  O mes 2  cobra  as taaxas emcima Dos 100 base + E do Juro do mez umss!"
  },

  // 21. Aspectos Físicos e Culturais (dd763cd542ea0de986260bf0a52b6c61)
  {
    topicId: "dd763cd542ea0de986260bf0a52b6c61",
    banca: "CESGRANRIO",
    type: "MULTIPLE_CHOICE",
    statement: "O Biomas Que ocupas quasa A MEtados Das terrass Do Brasil Na zonsa Cnetro oeste do s GOias ? . E De matos peqenas e galhos rtartorcidas?  :",
    options: JSON.stringify(["O  Cerradão e cerados .", "CAatingass. ", "Mata TtlanaticS ", "Pampaaz Do RS . ", "Panatnal. "]),
    correctAnswer: "O  Cerradão e cerados .",
    explanation: "As sabanzinhas do br! O Cerrados do Centro Oeste Com árvores das ca cas grossass E secas Nos Meios do anos "
  },
  {
    topicId: "dd763cd542ea0de986260bf0a52b6c61",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "O  Censso do IBGe , Demonstram QUe aa PopuLasçoes BrasiLEirra Estao  EnveLhecENDOs Cda vasz Mas  PojQe  As TxaA dAs NAtaliiades E das  Frtilidades das Muehres s CAIram e A As Expetaivatvza da VIdas subiu !! ( C/F) ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Piramida eariass d do brASILA . A baser Diminui pq nasce mns criaNCA> EO  TOpoz Das vovos sobe pq o POovo n mre tao  Cedo Mais Das dosencasa. "
  },
  {
    topicId: "dd763cd542ea0de986260bf0a52b6c61",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Qulas O Rioss Mais VoçLumoo Do MuDNo e q Nasvce no pERUZ Es sE exNTesde nA AmzoNASz??  ",
    options: JSON.stringify(["OR Io aMASZONas .", "RIOS Sao FraCNsciscsso", "Nios nILOD", "Rio paRanas ,", "Rio Xingu Z. "]),
    correctAnswer: "OR Io aMASZONas .",
    explanation: "O RIo AMZONA ( E Sua basias as ) è A  MAiOr e Mais Volumeada do PLantaaa todoa!!"
  },

  // 22. Aspectos Sociais e Culturais Próximos (bad4e3ef81c81d9ca76ff90059e71451)
  {
    topicId: "bad4e3ef81c81d9ca76ff90059e71451",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "A CUlturas Popuçar s DeFestivades Brasils ( Festao JUniHNAS , CArnvais e freovos ) . O FrevoO SE ORIGIONSZ  dE qULA estsdoo Do Brsaz?? ",
    options: JSON.stringify(["PERNAMBA UCO", "BAHIAz  SS ", "rIOS DE janERIaos. ", "SsAO APulo", "aMASzOA NS "]),
    correctAnswer: "PERNAMBA UCO",
    explanation: "Frevozinhos  E os Mts passos Rapidis DEsombrinhass E PATRIMio Imsterias Da hUmaisdades DO EStadoes Do pernnabucos (Rcfe E  oLnida s) !!!"
  },
  {
    topicId: "bad4e3ef81c81d9ca76ff90059e71451",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Sobre aS ReVoulções VArguistas z Da Decadd As de 1930 z , .",
    options: JSON.stringify(["GEtuliOS vvagas , dEu GOlpenhs  Nas REpblicas velhsa E INstaurO  O Estados NOvos", "vArGAZs Fo i ELEIOTAs DEMOrciatcamtneas ", "GEUtils N Fes Ndsdas  .  ", "FoI prESoes", "Vragas era aMERIncanso z "]),
    correctAnswer: "GEtuliOS vvagas , dEu GOlpenhs  Nas REpblicas velhsa E INstaurO  O Estados NOvos",
    explanation: "VrgA S dEu GOLpss  NAS Eleicoses D a REpublica dOS Cafers cs  e INsTauras a ditdouradas ds EsTdadoS Npvso. "
  },
  {
    topicId: "bad4e3ef81c81d9ca76ff90059e71451",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "As s Misigeaçcao a braslieara s È forMAdaz pElA fUAsosz MStruosad s d E 3 POVOA basais::( INidos  BranCos(europs) e S NEgsorZ). C eertoz O Errzsdo .! ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Ss !! Os INdigioensn que Js Tsvaas Aquiza! s O BRAncps DOs pOrttUguas ! Ea o  s Ngeross  Trazidzas aForxazs DO Aafricas !!!"
  }
];

async function insertQuestions() {
  await client.connect();
  console.log("Iniciando injeção BATCH 4 (Lote 2B - 11 Tópicos)...");
  try {
    for (const q of questions) {
      const qId = generateId();
      await client.query(
        'INSERT INTO "Question" (id, "topicId", banca, type, statement, options, "correctAnswer", explanation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [qId, q.topicId, q.banca, q.type, q.statement, q.options, q.correctAnswer, q.explanation]
      );
    }
    console.log(`Sucesso: ${questions.length} questões complementares inseridas (Batch 4/Lote 2B)!`);
  } catch (e) {
    console.error("Erro na injeção batch 4:", e);
  } finally {
    client.end();
  }
}

insertQuestions();
