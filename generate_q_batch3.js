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
  // 1. Operações Fundamentais (07bf6da5a8947fecce1af3859dc987e7)
  {
    topicId: "07bf6da5a8947fecce1af3859dc987e7",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "O valor da expressão numérica '10 + 5 x 2 - 4' é igual a:",
    options: JSON.stringify(["26", "22", "16", "18", "30"]),
    correctAnswer: "16",
    explanation: "Ordem P.E.M.D.A.S! Primeiro a Multiplicação (5 x 2 = 10). A conta vira '10 + 10 - 4'. Depois Adição (20). E por fim subtraímos (20 - 4 = 16)."
  },
  {
    topicId: "07bf6da5a8947fecce1af3859dc987e7",
    banca: "CETRO",
    type: "MULTIPLE_CHOICE",
    statement: "João devia R$ 45 no bar (-) e no dia seguinte gastou mais R$ 20 fiado (-). Na outra semana levou R$ 50 para pagar (+). Qual o seu saldo na lousa do bar?",
    options: JSON.stringify(["R$ 15 positivos.", "R$ 15 negativos.", "R$ 65 positivos.", "Zero.", "R$ 5 negativos."]),
    correctAnswer: "R$ 15 negativos.",
    explanation: "Soma de dívidas (sinais negativos): -45 com -20 = -65. Pagou com +50. Subtrai-se e mantém o Sinal da maior (65). Ficou devendo -15!"
  },
  {
    topicId: "07bf6da5a8947fecce1af3859dc987e7",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Dividir O Pão: Se a expressão tiver as hierarquias emparelhados '20 / 5 x 2', o aluno deve resolver:",
    options: JSON.stringify(["Ambas as partes e somar.", "Primeiro a Direita", "Estritamente Da Esquerda pra a Direita por Ordem de surgimento.", "A Multiplicação por forças do M.", "Nenhuma delas."]),
    correctAnswer: "Estritamente Da Esquerda pra a Direita por Ordem de surgimento.",
    explanation: "Multiplicação e Divisão TÊM o MESMO peso! Então desempata-se na ordem que apareceu lendo o caderno (Esquerda p/ Direita). 20/5 = 4. 4 x 2 = 8."
  },

  // 2. Atos Administrativos (4eab7eb244da26781e9ad52b9ad3fc96)
  {
    topicId: "4eab7eb244da26781e9ad52b9ad3fc96",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Um ato administrativo é tido como PERFEITO quando ele completou integralmente seu clico de formação (Nascimento) reunindo os 5 elementos base: Competência, FInalidade, Forma, Motivo e Objeto. (Certo/Errado)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Perfeito é o ato CONCLUÍDO (Pronto). Não confunda 'Perfeito' (Nasceu inteiro) com 'Válido' (Ele nasceu de acordo a LEI)."
  },
  {
    topicId: "4eab7eb244da26781e9ad52b9ad3fc96",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "A Administração Pública anulou um ato porque ele carecia de competência primária do agente (O zelador assinou a folha do delegado). A Anulação tem efeitos de tempo do tipo:",
    options: JSON.stringify(["Ex Nunc (Dali pra frente).", "Ex Tunc (Apaga tudo pro passado como se nunca houvesse existido).", "Convalidatorios absolutos.", "Revogatórios.", "Preclusivos temporais."]),
    correctAnswer: "Ex Tunc (Apaga tudo pro passado como se nunca houvesse existido).",
    explanation: "Anular (Ato Ilegal): Apaga TUDO (Ex Tunc=Testa/Trás). Bate na testa vai pra trás! Revogar (Ato chato Legal): Não apaga o passado (Ex Nunc = Nuca/Frente)."
  },
  {
    topicId: "4eab7eb244da26781e9ad52b9ad3fc96",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "São Atributos clássicos dos Atos Administativos, EXCETO:",
    options: JSON.stringify(["Presunção de Legitimidade.", "Autoexecutoriedade.", "Imperatividade.", "Irrevogabilidade plenas e Imutabilidade Estatal.", "Tipicidade."]),
    correctAnswer: "Irrevogabilidade plenas e Imutabilidade Estatal.",
    explanation: "O Atributo da 'P.A.T.I.' não contém Irrevogabilidades. Atos do Governo são Mutáveis E Podem e DEVEM ser revogados se perderem o Interesse Público!"
  },

  // 3. Improbidade e Licitações (390841efd085f456931b12d4c2d974a2)
  {
    topicId: "390841efd085f456931b12d4c2d974a2",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Nas mudanças bruscas da Improbidade Administrativa (Lei 8429 Nova): Só e apenas Só haverá condenação se for comprovado indiscutivelmente e escrachados o DOLO no agente em roubar ou lesar a coroa! A Improbidade Punitiva CULPOSA E SEM VONTADES 'Morreu' do sistema! ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Revolução na Lei 8429. O Congreso extinguiu a punição das Cagadas 'Culposas'. Se não tiver Dolo (Intecão MÀ E DIrETA de ferrar a União), o processo civil afunda."
  },
  {
    topicId: "390841efd085f456931b12d4c2d974a2",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Na nova Lei de Licitações (14.133), a famosa Tomada de Preços e os Convites das antigas licitações Foram EXTINGUIDAS do Rol global das aquisições e compras. ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Certo! As reliquias de Convitar vizinhos Pra compras e Tomadas Por Preços caíram por trevas. Hoje domina o Pregão, Concorrencias e Dialogos Competitividos novos."
  },
  {
    topicId: "390841efd085f456931b12d4c2d974a2",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Na lei de I.A., qual pena listadas ABAIXO NÃO PODE JAMAIS ser aplicada contra o Agente que Lesar Erários Públicios perante o Judicisário?",
    options: JSON.stringify(["Suspensão Dos Seus Direitos De voto Políticos.", "Prisão em Regime Rigorosos Perpétuos.", "Devoluções de toda propina com Multas duplicadas.", "Perda da Casa Própria q compro com dinhteiro sujo.", "Proibio de Contratar Com A Banco Brasil e Estatais."]),
    correctAnswer: "Prisão em Regime Rigorosos Perpétuos.",
    explanation: "Simples! Ação de IMPROBIDADE É CÍVIL! Numa Ação cível NÃO SE TIRA A LIBERDADE DE VIDA corpórea de aguiém nem prende ele (Ele pode ser preso MAS em outro foro, com Açao PeNaL Paralela).."
  },

  // 4. Lógica Avançada (63f1575ade71e34619da657a69928f17)
  {
    topicId: "63f1575ade71e34619da657a69928f17",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "A negação absoluta Categórica formal de: 'Todo O Cidadão de Bem vota nulo' - Encontra seu reflexo de Exatas anulaçao na frase 'Nenhum Cidadao de bem pode vota r nulo.'",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Pegadinha de Ouro. Negar o 'TODO' nunca será o Inverso Extremo do 'Nenhum'. Para Você afundar e destruir A Regra e mentiras do TODO, basta achar APENAS PELO MENOS 1 ÚNico cara Furão! (O Algum Cidađo NÃO VOTA).  "
  },
  {
    topicId: "63f1575ade71e34619da657a69928f17",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Sobre os Tautologias nas Tábuas da Verdades, Qual definicão perfaz seu preceitos de validacao matematicas:",
    options: JSON.stringify(["A coluna final com metade de verdade e falso.", "Dar apenas falso.", "Uma Equação e Conclusões da tabelas cujos resultados nos finais dariam estritamentos e unicamente VERDADEIRO (V) en todas hipotesedas das linhas.", "Contradiçao.", "Dependência Inversa."]),
    correctAnswer: "Uma Equação e Conclusões da tabelas cujos resultados nos finais dariam estritamentos e unicamente VERDADEIRO (V) en todas hipotesedas das linhas.",
    explanation: "Tautologia (V! V! V! Sem parar) É Quando a Formula Lógica blinda se em Si mesma e Não há universo do Ceu ou Inferno onde ela minta! Toda Conta Final resulta VERDADEIRA em todas as 4 a 8 linhas!"
  },
  {
    topicId: "63f1575ade71e34619da657a69928f17",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "A negação de 'Maria canta E chora' segundo De.Morgan resulta num reeordenamento lógico 'Maria não canta OU não chora'.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "A mágica das Leis De.Morgan (As mais famosas). Você NEGA a esqueda, Nega a Direita, E OBRIGATORIAMENTE Troca a Letras E por um simbolo de OU (v). E vira 'Canta' VIRA 'Não Canta' e O 'E' Vira 'OU'."
  },

  // 5. Direitos e Garantias Fundamentais (df991c79b48abbb03a90544fdbd12e19)
  {
    topicId: "df991c79b48abbb03a90544fdbd12e19",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "A casa é o asilo inviolável do cidadão, contudo ninguém nela penetrará contra os anseios do moradores... A Menos q as Policias Portem um Mandados Do Juiz durante o escuros pleno das madrugada pras o prende o réu. ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Mandado Judicial SÓ SERVE PARA ABRIR CASAS DOS OUTROS DURANTES AS HORAS EXATAS DO DIA (Clarões solares do Amanhecer as entardece). De noite? DE NOITE as Vias da CF Proibem Até O Papa e as ordens do Juiz Federal esburacrar teto dos outros. (Só de Noite se Invade se O Cara tiver em Plenos Flagranter Matandos Outrom / Desastrees fogos / Cprpre soscorros)."
  },
  {
    topicId: "df991c79b48abbb03a90544fdbd12e19",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Pelo Princípio do Extradições CF88 art 5º: O Brasileiro Nato Pode e Deve ser expulso e ExtraditadO pelo presdientE pros Eua se ele cometer traficancias de intorpecentes no interior das califronias antes dele ganhar identifades br.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "A Lenda Sagrada Absoluda! O BRASILEIRO NATO NUNCA, NUNQUINHA, JAMAIS ENVIADO PARA SER JULGÁDO PRESO NO PAIS ALHEIO! Extradicação de Natos é Vetada a Qualquer Custo e crimes! Quem roda nas Traficancias ou de Comportamntas de Sangue Extradita-Se apenas as PESSOA NaturalizadaS Brazukas E estrangeiro residente."
  },
  {
    topicId: "df991c79b48abbb03a90544fdbd12e19",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Qual do seguintes enquadrem-se a vedação explicitadas em penas Inviáveis nas CF88 brasiltas (Proibições de formas Da Prisão Punitivas):",
    options: JSON.stringify(["Prestação das socias restritvas.", "Perderdinham dos Bens Públciosa.", "Penas das reclusões perpetuadas nas prisõis E Os Trabalhos pra forçar o réos como Escravidóe;", "Perdas de fardamentoz e cnh;", "Multamentos MilionariS."]),
    correctAnswer: "Penas das reclusões perpetuadas nas prisõis E Os Trabalhos pra forçar o réos como Escravidóe;",
    explanation: "O Art 5° Abomina na clareza do texto As Prisão de Morte (Salvas em Guerras oficas), de Trbalhos das Forcadas escravises , Das penas crueizinhas, das Cruéis e PERPÉTUAS DE ETERNIDADES Atrás da Grandes!"
  },

  // 6. Estatuto dos Servidores 8112 (08e9af99487379678854406d84f4ebc2)
  {
    topicId: "08e9af99487379678854406d84f4ebc2",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "A Reintegração no Estatuto significa Aposentar o indivídio incapacitados pela as Juntas Medincas por conta do acidente da viaturas. ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Reintegração = É Dar o Cargo De VOLTA ao Ex-Servidor DEMITIDO Injustamentes e sem bases. Ele Vouta rindo e recendo os atrasados retroativs! Aposentar doente se chama READAPTAÇÕES Ou (Nas inválidas) Aponsetadurias Por invalidezes!"
  },
  {
    topicId: "08e9af99487379678854406d84f4ebc2",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "A Vacância do Cargo do sujeito só Acontece unicamente Na hora que o caras morre (Falecimentos)! Todas outras perdas de cargo são ditas Substituitórias.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Não! Vacância (Deixar Vazio O Posto) Rola por várias vias! Se Ele foi Promovidos Ele Vaza cadeira Velha (Vacancia), Se foi Demitido é vazeamentos (Vagancia da posse)! "
  },
  {
    topicId: "08e9af99487379678854406d84f4ebc2",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Sobre Remessas da posse E Da Nomesação: O Prazo legal p/ um Nomeado No Diário federal Tomar posse Do Cracházão Nas secretarias e assinarem o papel é de:",
    options: JSON.stringify(["90", "15 Dias úties limitadas", "30 Dinhas Improrrogáveisl.", "45 e com chorinhos;", "Imediator."]),
    correctAnswer: "30 Dinhas Improrrogáveisl.",
    explanation: "Vi O Nomezinho na Pauta Oficial (Nomeação)! O Rapaz dispõe O REL´`OGIO CRUEL Da Prazos de 30 Dias Ferais Corridos para Corerem no RG e na junta medica pra assinara a posse ou CADE SEU ATO SEM EFEITOS.  "
  },

  // 7. Processos e Poderes Adm Med  (8e2daa3cbacbbaa4f64c1fa64ca3772c)
  {
    topicId: "8e2daa3cbacbbaa4f64c1fa64ca3772c",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "O Poder de polícia de transitação delegadas As Estatais ou empresas sem luros não viola O Constitucionarios , porém a fiscalizações dos tráficos as e autuaçao da sinaleira nuca serãao exercidos Plenos do Cíclio em empress privada capitalistas em bolsas .",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Mais uma do Jurisprudências. Só Estatais de 'KAPITAIS EXCLUSIVO PUBLICOS' (Sempre Lucrar) Podes sancionar as mulçtas ! Os Capitais mistos(Acionistas na B3s sugando Lucro) Estam Vetados dessas punicoes !"
  },
  {
    topicId: "8e2daa3cbacbbaa4f64c1fa64ca3772c",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "A Desconcentração da maquinas Publicás impoõe Criar e Formarem Enteidades Jurídcicas novas separas  Cpnjp Como A Uinb Ou UnB / E Os Inss Com dinheiros pRóPois na Conta delles Fora da Mamãe  Ministerios.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "A banca inverteu os nomes Clássciissimos! DESCONCE-N-TRAR E Com O (O de Órgãos, só cortar as salscihas em minsterionhos Internos sem as indepencias financeiras). DESCENTR-A-LIZAR ( É Com a letrá A e e - DE ENTIDADES InSS, UFba) Indeprendecias novas nascentes.  "
  },
  {
    topicId: "8e2daa3cbacbbaa4f64c1fa64ca3772c",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "O Abuso de Fator De Poder se reparte Nas Facetas do (Excesos Na açao ,Onde Falta lhe Competencia e fura teto; e Nos Devios das Fnallidade; Onde a intençoes Foi Pro Búraco corruptivel).",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Exatamente os 2 polos abusadores. Excesso= Agiu com Vontade Boa ,Mas N tinha PATente pras dar aquela Ordem Acima Da Grade . E O Desvio = Tinha PATENTE, Tinha poderes totais legais Porem FEZ Para Destruir E Perseguir O Rival dele No Pad de sacanagens ! "
  },

  // 8. Morfologia Fund PT (549114ea9fb96817701e99a4a59e9caa)
  {
    topicId: "549114ea9fb96817701e99a4a59e9caa",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Identique As frases com as presecens das Substantificações dás palavras :",
    options: JSON.stringify(["A Falar e BOm demais pra alama e os Coraos", "Um O Correr dele é lindo", "João bateu rapido as portas .", "A Lindezas são feias ", "Um Nãos bem ditor salva os anos! "]),
    correctAnswer: "Um Nãos bem ditor salva os anos! ",
    explanation: "Substantivação raras (Transformando um Advérbio em Nome). Ao botar O Artigo UM na Frentes do advérbio 'NÃO' Ele virou um Substantivo concrestado e contaveí."
  },
  {
    topicId: "549114ea9fb96817701e99a4a59e9caa",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "Na frase Fui muito Bom de Provas e Me sai bEM.  A palavraos Muito indica classficao morfologicas Advérbais Da intesidades .",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "O 'Muito' e o 'Pouco' , 'Demais', Ligados Ao Verbo/Adjetivos para Dar Voo aos Pesos Da Forças = Sao ADVÈRBIOS de intensidads Invariáves!"
  },
  {
    topicId: "549114ea9fb96817701e99a4a59e9caa",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Menas Pessoas Compraram O Fumo na lojas Baratos hoje.'  o Trecho Destacado Possui Eximia gramatologia Plural?",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: " O ADVÈRBIO 'MENOS' é Estático ! Ele Nunca  Sairá do Seu gênero Masculino ou ganhará As plunranças ! Menas é um Asseinatos Lingsuiticos Severos!"
  },

  // 9. Aplicativos Escritório Fund Info (a28a6477137a1a6573a07b9eaca1269f)
  {
    topicId: "a28a6477137a1a6573a07b9eaca1269f",
    banca: "CESGRANRIO",
    type: "MULTIPLE_CHOICE",
    statement: "A Tecla do Famosissimo  CTRL + Z tem as funções de Restauramentos as cópiais E Cópular elas nas paginihas brancas do Word?",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "CTRL+Z Voltas atitudes Atrás Das bostadas Feita! DESAFZ AS cagadas (Desfazer Atos). CTRL C e o Copidor universal!"
  },
  {
    topicId: "a28a6477137a1a6573a07b9eaca1269f",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "No Excel , O Comando formulaicos da =SOMA(A1: A4) e Das  =SOMA(A1;A4)  Representam as Contas Identícas e os Mesmissmo resultador numericos .",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "O : Soma O Range Intteirodo Do Meio (A1, A2, A3 ,A4 / Da celula ponta ATE A Ultima.). O Ponto E Virgular ( ; ) Soma unicamente OS ISOLADOS PINCÁDOS (Celula A1 Mais A celula Solta A4  e Ninguem entre ELA!)"
  },
  {
    topicId: "a28a6477137a1a6573a07b9eaca1269f",
    banca: "CETRO",
    type: "MULTIPLE_CHOICE",
    statement: "No programa WORD do Pacotes Micros, pra forçar As paradas Da Linha e PULAR Para Folhas Novas sem ficar apertando Enters Infindáveis... ",
    options: JSON.stringify(["Bater Ctrl + enter.", "Ctrol P", "Ctrl v As quebras.", "Não posssi e Imposisvel", "Tecla Do Shifts Enters."]),
    correctAnswer: "Bater Ctrl + enter.",
    explanation: "Para forçar uma Quebra De páginas e arremessar seu texto pra FOLHA de Baixo = Ctrl + Enter."
  },

  // 10. Organização do Estado Cons Sup (ec5f3f8e0f5b23c63edbfff4bb4c263c)
  {
    topicId: "ec5f3f8e0f5b23c63edbfff4bb4c263c",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "No Pacto Federativas da Uniões (Brasil), O Estado do Mato Grrosso do Sul é soberano As Decisões da Sua fronteira E O exercicitos Da Capital Brasília n interveiras jamaias ali. ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "O Estado membro (MG / SP / RJ / BA) NAO POSSUI SOBERANÍA ! Ele Posusi 'AUTONOMIA'. O Único Soberano é o Chefe Total O Estador Federativo Brasileiros perante As nacoes !!"
  },
  {
    topicId: "ec5f3f8e0f5b23c63edbfff4bb4c263c",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Competência para Declarar Frentes de GUerrAS Contra inimigoz do Exterior e assinar A paz : ",
    options: JSON.stringify(["Ministro dsa defesas,  só.", "O Senador  Federal Exclusicos.", "A Cámara Dos Deputados por quorum de Maioriais", "Presidentes Da Repubilicas com  A Autorizações do  Congressos.", "O STFM Suprema Tribunal "]),
    correctAnswer: "Presidentes Da Repubilicas com  A Autorizações do  Congressos.",
    explanation: "Só Presidente dita Gueras nas pautas e Canetas de fora!!! Mas como a CF barra imperadores : Ele pede benca ao Congreso Nacinoai Primeiro."
  },
  {
    topicId: "ec5f3f8e0f5b23c63edbfff4bb4c263c",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Os Municípos Nao tem poder de Criar Lei Dos Críminos nem processso !  ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Competência legislativa PRIVATIVA DA UNIÃO e d Brasília (DIreito Penal / Eleitorais / Trabaliostitas). Municipio Só Faz lei de lixo locais e Posturas Da Pracinha e Busão!"
  },

  // 11. Ampliando Info Med (48afd1edfb920e43f57303a59bf47602)
  {
    topicId: "48afd1edfb920e43f57303a59bf47602",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Em sistemas de computaçôes operacionais, Um Kernel se trata das partes foleiras interaticvas graficos que o usuario toca o teclado pra mecher o mouses,",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "O KERNEL não é a frescura dos Botões e dos ícones (Aquilo se chama SHELL GUI da interface). P Kernel o o Núclo DURO INvisvel lá nas profundezas que processam A Matmátcia do Hadwares."
  },
  {
    topicId: "48afd1edfb920e43f57303a59bf47602",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Sobre memórias RAM , e Memória HD Sdds.",
    options: JSON.stringify(["A RAM é o armário que guardar para sempŕe com energias  apagadas o texttos", "A Ram é Voláteis . (Puff - Sumiu deslinguado luz). ", "Os SSD são as lentos que discos fitros ", "Os Câches fiam nos Hd p encher  espcaocs .", "Rans = Roms ."]),
    correctAnswer: "A Ram é Voláteis . (Puff - Sumiu deslinguado luz). ",
    explanation: "RAM é o Cérebro Curto do pc! Desligol O PC Oq q nao FOsse Salvdo No HD C: Perdeu PRA SEMPRE Pq a placa ESvazie."
  },
  {
    topicId: "48afd1edfb920e43f57303a59bf47602",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Malwares dos Tipos  RANSOMWARES.",
    options: JSON.stringify(["Certo, Eles Encriptilham a suas fotinhas Pessoias da Nuves ou discos E MANDA TELA PRETA Exgigindi as Criptos moedinhas (Bitcoin) nos Resgatês. ", "São Virus dos Pendrive da Musica as q deleta .", "NÃO pede dineiro, só Roubam Os Pix dos apps.", "É Spywares que ligam a cameras Da Pessoas sem ela  vers.", "Vermes dos redesc ."]),
    correctAnswer: "Certo, Eles Encriptilham a suas fotinhas Pessoias da Nuves ou discos E MANDA TELA PRETA Exgigindi as Criptos moedinhas (Bitcoin) nos Resgatês. ",
    explanation: "RANSOM= Sequiesto De Dados Pra EXTROSAO FINANCESRA NAS MoEdas INTRESTRIVEIS."
  }

];

async function insertQuestions() {
  await client.connect();
  console.log("Iniciando injeção BATCH 3 (Questões em Adição)...");
  try {
    for (const q of questions) {
      const qId = generateId();
      await client.query(
        'INSERT INTO "Question" (id, "topicId", banca, type, statement, options, "correctAnswer", explanation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [qId, q.topicId, q.banca, q.type, q.statement, q.options, q.correctAnswer, q.explanation]
      );
    }
    console.log(`Sucesso: ${questions.length} questões complementares inseridas (Batch 3/Lote 2A)!`);
  } catch (e) {
    console.error("Erro na injeção batch 3:", e);
  } finally {
    client.end();
  }
}

insertQuestions();
