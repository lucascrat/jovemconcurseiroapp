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
  // 8. Inquérito Policial (98a5cd7495b56976a00e9fafc550b042)
  {
    topicId: "98a5cd7495b56976a00e9fafc550b042",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "O Inquérito Policial possui natureza estritamente administrativa, pré-processual, dispensável e marcado pela inquisitorialidade fática, onde não se exige o Contraditório Pleno imediato. (Julgue o item)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Perfeito. O Inquérito não é o processo na Justiça (onde há a Ampla Defesa forte). É uma fase INQUISITIVA na delegacia para juntar provas. O delegado o comanda de forma administrativa, e a denúncia pode até ser feita sem ele (dispensabilidade) se o Promotor já tiver todas as provas."
  },
  {
    topicId: "98a5cd7495b56976a00e9fafc550b042",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Se a Autoridade Policial (Delegado) presidir um Inquérito Policial e, de repente, perceber que os fatos não apontam materialidade para que um crime tivesse existido. Ele, usando sua discricionariedade técnica, pode imediatamente ARQUIVAR tal procedimento por conta própria na delegacia:",
    options: JSON.stringify(["Correto, desde que notifique o juiz cível.", "Correto, pois preside os flagrantes e inquéritos.", "Incorreto. Apenas as Corregedorias mandam arquivar Inquéritos de Políciais Civis.", "Incorreto. É terminantemente VEDADO à Autoridade Policial arquivar Autos do inquérito.", "Correto pelo princípio Inquisidor Pleno."]),
    correctAnswer: "Incorreto. É terminantemente VEDADO à Autoridade Policial arquivar Autos do inquérito.",
    explanation: "Art. 17 do CPP: O Delegado começa mas NÃO TERMINA MATANDO o processo! Ele APURA TUDO e MANDA pro Juiz/Promotor. Apenas instâncias competentes superiores do Judiciário com pareceres do Ministério Público determinam os Arquivamentos em definitivo."
  },
  {
    topicId: "98a5cd7495b56976a00e9fafc550b042",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "O prazo base e principal da regra para o término de Inquéritos de crimes da justiça comum estaduais sob presos PREVENTIVOS/FLAGRANTES que lá descansam recolhidos na Cadeia, é:",
    options: JSON.stringify(["30 dias, podendo ser prorrogado indefinidamente", "10 Dias.", "15 dias pela Lei 8112.", "90 Dias improrrogáveis em absoluto.", "1 ano pra investigações complexas civis."]),
    correctAnswer: "10 Dias.",
    percentageCorrect: 45,
    explanation: "Na via da Polícia Civil normal (excluídas Leis Especiais de Drogas e PF), se o cara tá PRESO na gaiola: 10 DIAS é a corrida. Se ele tá SOLTO perambulando, o Inquérito tem frouxidão e margens para 30 DIAS até ser relatado aos palácios da vara criminal."
  },
  {
    topicId: "98a5cd7495b56976a00e9fafc550b042",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "O IP (Inquérito Policial), na perspectiva da discricionariedade delegada, confere à vítima o direito de exigir no balcão da delegacia a feitura de qualquer e todas Oitivas ou Diligências requeridas, estando a Polícia OBRIOGADA formalmente acatá-las para não ferir defesa.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "O Ofendido (Vítima) até PODE requerer! Mas a Lei diz que cabe a Autoridade Policial DEFERIR (Apoiar e seguir) AQUILO OU NÃO. Ele não é capacho de requisições civis de ofendidos, ele avalia se a prova pedida por A tem utilidade ou se é perca de tempo."
  },
  {
    topicId: "98a5cd7495b56976a00e9fafc550b042",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "A incomunicabilidade do preso, antes mantida duras por até 3 dias sob canetada judicial no calor do inquérito velho, caiu e hoje, com o advento de estatutos civis, Não é aplicável sob moldes nenhuns no Inquérito rotineiro penal.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Certo. CF diz que ninguém é incomunicável aos familiares e aos Advogados. Os institutos velhos do código de que se poderia amordaçar contato externo caiu de em inconstitucionalidade e sumula pregos nos tribunais modernos. O Pobre na Tranca tem que ligar pra Mãe ou Pro defensor!"
  },

  // 9. Sintaxe Avançada de Vírgula (2cb3a207af5a13e2c7139925d129eff3)
  {
    topicId: "2cb3a207af5a13e2c7139925d129eff3",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "A retirada da vírgula em 'As prefeituras, que arrecadaram, farão obras' muda a frase unicamente pro lado de um ERRO GRAMATICAL de concordância sintética (Certo / Errado)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "A retirada da virgula não causa Erro gramatical nenhum (Ela passa de Adjetiva Explicativa para Restritiva perfeitamente Correta na sintaxe). Porém, ela causa ALTERAÇÃO NO SENTIDO GERAL (Em vez de TODAs prefeituras arrecadarem, passará a indicar que SOMENTE o Grupinho isolado que recolheu o dindin fará a obra, restringindo)."
  },
  {
    topicId: "2cb3a207af5a13e2c7139925d129eff3",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "A ordem direta sagrada da oração penal e cível é o fluxo de (Sujeito -> Verbo -> Complemento - Adjuntos). A vírgula só poderá picotar essa artéria direta ininterrupta S.V.C. :",
    options: JSON.stringify(["Sempre que respirarmos por estar longa demais e cansar aos dentes.", "Nunca, nem mesmo quando invadirem nela adjuntos temporais compridos das matas.", "Só e apenas se um termo INTROMETIDO (Intercalado, Sujeito deslocado ou Vocativo extrínseco) espinchar entre o Verbo e o Sujeito.", "O Verbo pode estar virgulado do Sujeito se este for Comunitário.", "Apenas nas orações que exijem vírgula antes da Conjunções 'E'."]),
    correctAnswer: "Só e apenas se um termo INTROMETIDO (Intercalado, Sujeito deslocado ou Vocativo extrínseco) espinchar entre o Verbo e o Sujeito.",
    explanation: "É o mandamento número 1! Vírgulas não separam sujeito do seu verbo JAMAIS! Só aceitam abrires se de repentes espetarem uma 'Oração Fofoqueira Interferente, como por ex, ou um Advérbio no Mëio'."
  },
  {
    topicId: "2cb3a207af5a13e2c7139925d129eff3",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Observe: 'João chegou em casa e jantou farto!' / 'João Chegou em casa, e Maria jantou fora!' | Na segunda usa-se a vírgula antes da Letra E por motivo que:",
    options: JSON.stringify(["As bancões paulistas criaram a exceção do E adversativo.", "Os sujeitos do ato jantador eram diferentes entre a primeira frase (João) e da segunda (Maria) tornando A Lógica do e ambígua nos verbos.", "Orações Fartas exigem conjugar plural nos aditivos do 'E'.", "Silepses de graus temporais.", "João é um vocativos."]),
    correctAnswer: "Os sujeitos do ato jantador eram diferentes entre a primeira frase (João) e da segunda (Maria) tornando A Lógica do e ambígua nos verbos.",
    explanation: "Regra básica que FCC adora! Perto da Letra 'E' não rolam virgula (Ele já aditiva). Mas a lei das orações pede: Se uma banda toca Rock e A Outra Pop (São Dois Sujeitos diferentes), BOTA A virgulinha pra cérebro notar a quebra e apartar os cantadores!"
  },
  {
    topicId: "2cb3a207af5a13e2c7139925d129eff3",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "'Os Senadores de Brasília, ontem à noite perto do farol, votaram O aumento de pauta.' - O termo ilhado nas vírgulas cumpre qual essenciamento dentro da ordem SVCA?",
    options: JSON.stringify(["Nenhuma", "Complemento Falsificável.", "É um Adjunto Adverbiais Extensos de (Tempo / Lugar) DESLOCADA para os entremeios do Sujeito e Dos verbos, exigindo os portões fechados à vírgulas.", "É o objeto Direto de Votar.", "Aposto Restringente."]),
    correctAnswer: "É um Adjunto Adverbiais Extensos de (Tempo / Lugar) DESLOCADA para os entremeios do Sujeito e Dos verbos, exigindo os portões fechados à vírgulas.",
    explanation: "Os Advérbios de Tempo ou Logradouro devem morrar lá nas últimas palavras finais da Frase. Se você tirar eles de lá e encostar onde não deviam (Deslocou eles), Eles Devem usar Obreamente a camisinha vírgular Dupla isolando."
  },
  {
    topicId: "2cb3a207af5a13e2c7139925d129eff3",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Vocativo é o chamamento interativo ('Ei policial!', 'Meu caro amigo!'). Gramaticalmente o Vocativos não integram a grade central da sintaxe, por isso eles DEVEM vir imaculadamente isolado de Vírgulas onde estiver locado na frase (Início / Meio).",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Certo! O vocativo não é parceiro de ninguém, ele é extraclassificado na sintaxe. Entrou? OBRREGA virgula: 'João, traca a janela.' 'Tranca a janela, João.'."
  },

  // 10. Orçamento Público AFO (a4f7ddbd7f5776c54cee2ae055398f07)
  {
    topicId: "a4f7ddbd7f5776c54cee2ae055398f07",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "O Plano Plurianual (PPA) orienta as peças estratégicas macros do Chefão Executivo durando exatos 4 Anos em ciclos redondos, cujos vencimentos de leis se dão no exato término da saída e abandono do cargo de presidente pra que o próximo pegue o cofre vazio e monte o seu zero no primeiro aninho em Janeiro. (Julgue!)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Pegadinha Absurda das Decanas (e a que mais reprova). A duração do PPA não casa com a cadeira do Governador! O Governador monta no ano 1, A lei só entra vigor no ANO 2 de Governador dele, E DURA ATÉ O FIM DO ANO 1 do próximo prefeito/Governador adversário!!! Pra evitar q obra gigante pare só pq entrou gente de esquerda/direita nova."
  },
  {
    topicId: "a4f7ddbd7f5776c54cee2ae055398f07",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Qual das Leis age exatamente como A BÚSSOLA ORÇAMENTÁRIA. Estipulando meta tática daquele exercício de curto prazo, regulamentando mudanças em fardos de funcionários do tesouros, mexendo nas portarias da tributações para abrir passagens dos limites da LOA?",
    options: JSON.stringify(["A LOA (Lei Orgánica Orçamento)", "Os Decretos Singulares Supremos", "A LDO (Leio Diretrizes De Orçamento).", "O PPA", "A CF 88 no artg Base."]),
    correctAnswer: "A LDO (Leio Diretrizes De Orçamento).",
    explanation: "Sempre que pedir Dicas de 'Ajustar leis do Servido', 'Mudar metas Táticas TENDENTES ao limite da outra' e a Função Bússola Orientadora: = LEI DAS DIRETRIZES!"
  },
  {
    topicId: "a4f7ddbd7f5776c54cee2ae055398f07",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Princípio Cânone das orçamentistas da Nacionalidades: 'Todas AS rubricas contábeis de Despesas pagas ou de Dinheiro recebido à união (Rendas das fazendas ou taxas) deverão figurarem expostas e sem maquiagem numa UNICA E GLOBAL Lei base no dia primeiro do ano pro congresso chancelar.'",
    options: JSON.stringify(["Unidade.", "Anualidade", "Regionalismo Universal", "Exclusivas.", "Universalidade e Unidade Total"]),
    correctAnswer: "Universalidade e Unidade Total",
    explanation: "Se a prova cita 'Todas rendas e Furtarem caixas' = Remete a Universalidades do Cofre. E colocar os pacotes TODOS dentro de 'Uma unica Peça Anual' remete à Unidade da Peça!"
  },
  {
    topicId: "a4f7ddbd7f5776c54cee2ae055398f07",
    banca: "CESGRANRIO",
    type: "MULTIPLE_CHOICE",
    statement: "O Preâmbulo das arrecadăões do Brasil estipulou as pautas de receitas vinculantes a saúde em rubrica cravata. Se um imposto for arrecado (IRPF ou ICMS), pode o governo Estadual destinas os montantes amarrando diretamente aquele fundo pra bancar os sálarios de medicos recem paridos pelo edital ?",
    options: JSON.stringify(["Pode, pelo imposto focado em Saude Unica.", "Não pode, porque Furtou os Princípos de 'NÃO VINCULAÇÃO/AFEÇÃO da Receitas Vinda de Imposturões'.", "Pode por que a rubrica saude é De Teto Universal Extrapolado.", "Pode somene se as LDO prever o ICMS atrelado a saude em 102%", "Não por que fere O PPA Anual."]),
    correctAnswer: "Não pode, porque Furtou os Princípos de 'NÃO VINCULAÇÃO/AFEÇÃO da Receitas Vinda de Imposturões'.",
    explanation: "Um dos pilares das taxas Federais (Exercicio 4 CF): Você Não pode afixar no contracheque fiscal o Destino Da Arrecadacao do IMPOSTO. (O Dinhero cai na cumbuca Geral - Tesouro sem carimbo). O Imposto não é Taxa pra servir com Contraprestacionar os doadores. Exceções são raríssimas para fundapens / Fpe de Saude e Cidades minimas da base."
  },
  {
    topicId: "a4f7ddbd7f5776c54cee2ae055398f07",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "A LOA - Lei de Orçamento, possui Caráter Estritamente Autorizativa. Ainda que nela esteja estampado que o Chefe municipal tenha X Verbas pra Construir as 3 Pontes; Isso NÃO OBRIGA FORÇOSAMENTE que ele as gaste executando a obro. É uma ferramenta autorizando ele a gastá-las apenas SE os fluxos no mês deixares na calçada.  ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "O Brasil NÃO ADOTA amplamente o Orçamento Impositivo radical total nas obras bases discricionárias do gestor! LOA Estima receber, Fixa O Límite (Autoridade de teto de gasto) pra obras. Mas o governante pode contingenciar por secas os dinhero. Exceção do autorizador só cabe nas (Emendadas impositivas do Parlamentares federais). "
  },

  // 11. Decreto 1.171/94 (4d75ab42c5f8f9e40c94d748f465ddee)
  {
    topicId: "4d75ab42c5f8f9e40c94d748f465ddee",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Segundo as Regrinhas da Comissao Ética e disciplina do Decreto 1.171 Federal. Uma comissão De Ética formada em cada órgão do poder Executivo Nacional, municiada de seus inquéritos paralelos terá podérios de Aplicarem demissões a bem do serviso publicos contra os mal-intencionádos emprestados e assalariados comissionais.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "INADMISSELVEL E FATAL MENTIRA DE PROVA! O DECRETO DA ETICA (Comissão ético) É MANSO DE FÉ! O ÚNICO podério das penas que a comissão ética do orgao poide dar na folha do sujeito punido é O DE 'CENSURA'. Suspensão e demissão é O PAD Disciplinares DA 8112 quem julga em outros foros."
  },
  {
    topicId: "4d75ab42c5f8f9e40c94d748f465ddee",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Marque A Pena Máxima do regime éticol do Dec 1171 contra as transgressioens morais de terceirzados e estatutados Federais na máquina administrativa :",
    options: JSON.stringify(["Multas de 5 avos retidas dos sálrios.", "Advertências Oráis sem registro de folha averbatorias.", "Censura (Registrada e Carimbadas à tinta no prontuário histórico dos individuo nas pastas funcionais).", "Desligamento e Exoneradas Comissionais sumarias.", "Suspençoes Acautelatórias Remuneradas curtas."]),
    correctAnswer: "Censura (Registrada e Carimbadas à tinta no prontuário histórico dos individuo nas pastas funcionais).",
    explanation: "Lembre-se: Comissão de Éfica aplica CENSURA."
  },
  {
    topicId: "4d75ab42c5f8f9e40c94d748f465ddee",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "De acordo as pautas deontológicas do serviço Civil da Uniao (Decreto da Éticanças) - A dignidade, os decoros e O zelo, não se restringe apenas no interior da repartições fiscais, Estão embutidas nas rotinas na rua ou vida Cível das folgas o servidor, vez q as posturam lá foras refletem na confiança Estatal .",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Sim! Se o cara fora do expediente se embebedadas e bate com viatura federal no posto e cai pelado em TV - A Função PÚBILCA VAI PROCESSÁ-LO! A moralidade do Servidor não tira pijama sexta-feira de noite . O que ele faz Fora espelhe as Confianças Públicos. "
  },
  {
    topicId: "4d75ab42c5f8f9e40c94d748f465ddee",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Entre as penalidades descritas as premissas deontológicas - Fazer as pessoas Aguardarem longas Filas propositalmentes por descasos ou lerdezações ao tomar cafezinho demitidos, CAUSA mais de penas Ética. Ela pode CAUSAREM inclusive Danos Materiasis as contas Púiblicas ou crimes perantes aos Direitos do Cidadäõ Contribuinte dos imposo?",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Fazer o povo esperar no banco mofando de desprêzo ao trabaho não gera 'Brincadeiras'. A lei de Ética decreta que descaso de filas MATA danos da tesouraria do Estadon e Pode Configurar Danos Patrimoneis Graves à confinaças, acarrentando ressarcimentos à maquina por culpa."
  },
  {
    topicId: "4d75ab42c5f8f9e40c94d748f465ddee",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "O Secreto de Justiça do balcão! O Decreto diz expressos. A regrinha Mãe das portarias Estatais sobre as documentabilidades do Brasil e A PUBLICIDADE plenas ao zé publicos. QUAL o Unico caso das excessoes Que Obriga a mantermos SIGILOS Trancados  e impedindo as fotos da imprensa num FATO DOS ORgÃo?",
    options: JSON.stringify(["As Compras de Computadores a cima do limites Licitações", "Viagens Gastas Por Politicos na Suíças de Fériás.", "No Amparo das SEGURANÇA PLENA NACIONAL/Estado e Ameaças da Sociedada Enredado nos casos Estritos de Leis e Das Vidas de Intimidades inviolaveis.", "Nos contratos em terceirizados Falsas.", "Sobre Listagem de Nomes q passaram Nos Concursos."]),
    correctAnswer: "No Amparo das SEGURANÇA PLENA NACIONAL/Estado e Ameaças da Sociedada Enredado nos casos Estritos de Leis e Das Vidas de Intimidades inviolaveis.",
    explanation: "Nada Nas trevas se aprova exceto as investigações e Sigilo De Segurança do País ou de Direitos Íntimos privados das pessoas envoltas!"
  },

  // 12. Nuvem e Colaboração (de4afbc0ab433e1cff177744f104629a)
  {
    topicId: "de4afbc0ab433e1cff177744f104629a",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "No ambiente Cloud de serviços, o provedor Amazon AWS está oferecendo acesso via pacotes a Máquinas Virtuais cruas e Servidores desnudos de banco de dados e Bibliotecas, para que sua equipe instale o sistema Operacionais a dedo puro. Tal Modelo das Nuvems Correspondes as Modalidade de IaaS (Infra as a services)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Certo. Infraestrutura (IaaS) é o modelo bruto e inicial (HD, Processador RAM jogada no teu colo via web). Você tem controle máximo Mas requer complexidade gigante pra setar Windows.  Se você quiser a plataforma pronta (PAAS). Se quer só Usar de app Pronto (SaaS Netflix)"
  },
  {
    topicId: "de4afbc0ab433e1cff177744f104629a",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Assinale qual dos Aplicativamentos não reflete na puréza O Modelos Finais de Interações de um S.A.A.S. (Software ao Serviços):",
    options: JSON.stringify(["O Google Suites Workspace (Gdocs Online).", "Office 365 e Excel online Nos browser.", "Sistemas De Atendimentos CRM Salesforce Online logávels.", "Plataformas de Amazon Ec2 - Onde eu devo programar meu proprio ambiente.", "O App das Plataforma Mettflix Filmes."]),
    correctAnswer: "Plataformas de Amazon Ec2 - Onde eu devo programar meu proprio ambiente.",
    explanation: "O Amazon Ec2 (e Elastic Compute) te entrega Infraestrrura e Ambiente pra vc criar. Ele Não tem a interface e programa mastigado no potinho para a vovó acessar sem codificar. Ec2 = IAAS."
  },
  {
    topicId: "de4afbc0ab433e1cff177744f104629a",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Num Cénario Computaçonal do Google Drive, Onedrive e Dropboxes, existe uma mecânica chamada de SINCRONISMOS de Redes, O que consiste basicamente:",
    options: JSON.stringify(["Baixamentos de MP3 pra piratarias Locais em PDFS", "A Atualizações instantâniada refletiadas ao momento nas edições, onde se Eu exclui uma foto Nas nuves, O Software APAGA Tambem Das minhas pastinhas locadas C: Discos (Espelhamentos em tempos exato mutuais).", "Criar HD Virtuais na memórias rams para rodagens 3d de pesados.", "As nuvens Ficam travadas sem Acessos offlines por eternos enquanto Não logar senhas na maericas", "Um anti virus q passa nas fotos ao subir e encriptas as rams."]),
    correctAnswer: "A Atualizações instantâniada refletiadas ao momento nas edições, onde se Eu exclui uma foto Nas nuves, O Software APAGA Tambem Das minhas pastinhas locadas C: Discos (Espelhamentos em tempos exato mutuais).",
    explanation: "Sincronização Cloud é o espelhamento bi-direcional. (Edito pelo Iphone, quando abrir O windows ja ta la mudado e com As Virgulas exatas deletadas tb!). Tudo que apaga num local replica nos d+ aparelhos com a mesma conta conectadas."
  },
  {
    topicId: "de4afbc0ab433e1cff177744f104629a",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Sobre Colaboração Hibridas as edicoes Simúltâneas. Nos pacotes Google Docs e Microsoft Cloud a equipe formada por 4 Cidadãos não podem sob nenhum meios, alterar As planilhetas EXCEL ao Mésmíssimo estantes com quatro cursores nas folhas digitando. (Devidos aos Crashings das linhas).",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "O Príncípio mágico e Rei e Dourado das ferramentas Cloud Modernas De equipes É JUSTAMENTES a colaboração simultânea (Time-Real). 40 Pessoas alterando Planilhas Excel com Cursores azuis, Roxos e verdes piscando nas tabelas e construindo o bgl sem salvar arquvido .1 .2 .3 ! "
  },
  {
    topicId: "de4afbc0ab433e1cff177744f104629a",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "O One Drive do pacote Empresarias no office corporativo - Permite o Compartilhamentos Por links onde Tu define Exatamentes níveis de controle pra Pessoa que rebeu O linke (Link de Acesso Lendo apenas / Links de Permissao Coméntarista / Links de Editores Total das pastas).",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Todas plataformaa Cloud pikas permitem granulalar restrições. Vc Nunca solta link solto com permissao total na net. Vc diz: 'O link serve só pra Viewr'.. "
  },

  // 13. Crimes Contra a Adm Pública (afe8c20ab36694d096f965498fb662a5)
  {
    topicId: "afe8c20ab36694d096f965498fb662a5",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "O indivíduo funcionário público que, mediante as regalias de chaves nas estatais do seu órgão, abre gavetão do armazém e Furta bens da Autarquia na calada sem ter posses ou confianças nas mesas de custódiamentos estritas de valores mas se valendo daquelas faciciladdaes. Comete As esferas delitiosas dos Peculatos Furto(§ 1º)! ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "O Funcionario não era nem a Caixa do dinheiro nem a Segurança dele e não recebia a custodia das coisas Licitamentes! Contudo, seu Farda e Crachá Ajudou ele burlar catracasas entrar na parte tranca de armazém e cometer A Subtrações dolosamente. (Furto facilitado pelo cargos do Peculatoes! "
  },
  {
    topicId: "afe8c20ab36694d096f965498fb662a5",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Um fiscal sanitário, bate-papo de Boteco, exige para sí do Dono do bar um engradado de loiras cervejas por semana para não abrir as devassas de vistorias nas cozinhas irregulares do recinto! Tal Crime (Núcleo 'Exigir') caracteriza-se como:",
    options: JSON.stringify(["Coações Irresistiveis Morais", "Furturizações de Influxias", "Concussões.", "Desvios Passivos Em Corrupçao nas gavetas.", "Prevaricaçõess Por Amizadas."]),
    correctAnswer: "Concussões.",
    explanation: "A Corrupção passiva você Solicita / Recebe. Quando a prova mandar a Palavra do Terror e de grosseria 'EXIGIU' -> VOCÊ CLICA em CONCUSSÃO e corre pro Gabarito."
  },
  {
    topicId: "afe8c20ab36694d096f965498fb662a5",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "João é chefe de setor da Secretárias. Ao vê Gabriel, sub-técnico do departamento (Seu Afilhado nos batismos parocquias), subtraindo pendrives carissimos e cometendo falhas de horarios e faltas pesadas no mês. João tem as dó e pena de ferrár a via do Garoto - Sentimentalmentes, O Chefe Oculta e encapaça as faltas E não enviam PAD Pro Rh relatar as desídias do apadrinhados! Joao Cometeual Crime?",
    options: JSON.stringify(["O Chefe responde por Prevaricadores conjuntas solidários", "João Está imune pela Parentescencs e colaterais.", "Crime do Peculato De Desvios de funções do Chefia.", "Não agiu contra ninguéms a força", "O Chefes Amoleceu! E Crime puro do Cód Penal Título De Condescendência nas Criminosa "]),
    correctAnswer: "O Chefes Amoleceu! E Crime puro do Cód Penal Título De Condescendência nas Criminosa ",
    explanation: "Chefe 'Mole', de 'Piedadezinhas das Indulgencias e da DÓ' dos abaixo e Não PUNE O CULPADO ABAIXO: Responde por CONDESCENDÊNCIA CRIMINOSA. É A Omissões Frouxas dos chefes!"
  },
  {
    topicId: "afe8c20ab36694d096f965498fb662a5",
    banca: "CESGRANRIO",
    type: "MULTIPLE_CHOICE",
    statement: "Nas tipificações das Prevaricações Penais - O crime baseia-se num único tripé motor base propulsório para a Falha na Atuações Pùblicas dos Atos do dia:",
    options: JSON.stringify(["Dinheiros propinas de Extorcoes de Mafias brancas", "Omissões ou atrasos do Servidor PARA fins exatos das satisfaçãoes em Interesse Ou dos Sentimentos pessoais próprios do Coraçòes", "Um Crime pautado nas Subitações por Culpas fáceis sem dolo.", "Apenas Furtar Carimbos da Uniao.", "Peculinar os usos da Maquinas Da xeroca com energia pra lucrar empresas terceiriza" ]),
    correctAnswer: "Omissões ou atrasos do Servidor PARA fins exatos das satisfaçãoes em Interesse Ou dos Sentimentos pessoais próprios do Coraçòes",
    explanation: "Prevaricação NÃOO TEM MOTIVAÇÃO DINHEIROS E PECUNIAS DE CORRUPO. A motivações É Satisfazere OS MEUS 'GOSTOS', Meus Ódias Cívis ou Meus Sentimentalismo por um amigo meu pra liberar ou prender aleatoriamente sem leis. (Liberar amigo da multa CNH)."
  },
  {
    topicId: "afe8c20ab36694d096f965498fb662a5",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "No Peculato Culposo (art 312 § 2) Cujo servidor dormiu portas Abertas facilitando larápio faturarem 10 computadores; A LEI PERDOA e decreta as famosas extinções das penalidadess da prisão ao Descuidadoso SE E BEM SOMENTES SE, Ele Consertar Os Erros RESSARCINDO em dinerios todos Danos Causados DO Próprio bolso PREVIAMENTE À data do Transitos em Julgamentos finais Condenatórios.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Sim! Peculato Culposo se o cara ressarcir o Estado ANTES da sentença Inrrecorrível... A Punição/Pena some por mágica (Extinção Punibilidade). Se ele resssarcir DEPOIS Da senteça transitada: Não apaga a prisão, só diminui as condena pela Metadet (1/2)."
  },

  // 14. Remédios Constitucionais (e9810751cbbd584816eeb73ac82f9216)
  {
    topicId: "e9810751cbbd584816eeb73ac82f9216",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "O Habeas Corpus, assim como as ações e garantias plenas da Habeas Data civil, só podem ser emitidos legalmente se a Pessoa contratou As assinaturas de UM ADVOGADO COM OAB na frente dos magistrados julgadores civeis. (Certo/Errado)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Pegadinhas. O HABEAS DATA e os Mandado De Seguração, Mandados de injeções (Criam Necessidades Estritas De Advogados). MAS, o Santíssimo HABEAS CORPUS, protetor da Vida e Locomoção corporal Pode Ser escrito EM papel Padeiro Pelo PRÓPRIO Cidadão debaixo da Prisão enviando a Juiz , NÃO PRECISA OAB! "
  },
  {
    topicId: "e9810751cbbd584816eeb73ac82f9216",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Para proteger direito líquido e certos as informações não acobertadas do sigílo governamental do habeas corpus e amparos - Contra atas absurdas dos prefeitos, se utiliza qual Mandato as liminares de curas e correções estritas e celeres nas cortes?",
    options: JSON.stringify(["Ação civil popular dos massos.", "Mandado de Injunções.", "Mandato Civi.", "Mandado de Segurança (MS).", "Habeas Dados e Dados Pessoais de correcao."]),
    correctAnswer: "Mandado de Segurança (MS).",
    explanation: "Direito Liquído e Certos violados na calada por orgãos Públicos, usa se a pancada rápida do Mandado de Seguração. "
  },
  {
    topicId: "e9810751cbbd584816eeb73ac82f9216",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "O Cidadão deseja e precisa urgentemente que As repartições das receitas e dos SUS corrija O Sobrenome errado Da mãe dele nos Arquivamentos públicos da secretaria e banco de informais para assumir Cagos e Beneficios, entretanto o Chefao da agencia barrou ele, recusando as retificacoes Públias gratuitas pra ferrá lo. Qual remedio O Cara Põe na justiça amanhãs?",
    options: JSON.stringify(["Habeas Corpus pra Prisão do Chefes", "Açao Pópulares contra Prefeito", "As Garantias Constiticionais de Mandados de Injunções Diretos pra criam lei do nome novo", "Apenas a Polícia resolvem e acusam falsides ideológicas deles contra a mãe Dele.", "Habeas Data (HD)."]),
    correctAnswer: "Habeas Data (HD).",
    explanation: "O Habeas Dados! Não serve só prra VOCÊ VER seus dados Nas cadernetas secretas da abins, Sirve Principalmente Para CONSERTAR (Retificar) merdas nas Inscrições relativas à VOCÊ na Pessoa Do Impetrante nas mãos do estato."
  },
  {
    topicId: "e9810751cbbd584816eeb73ac82f9216",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Qual quer cidadão de bem civil munido dos plenos direitos polítiquitos nas zonas eleitorais, É As legitimas partes das impetraçoes da famosissma AÇÃO POPULAR na comarca! Que visam a invalidação e suspensões civeis aos lesivos e danos contras A Moralidades dos Orgaos Publoicos, ou Contra A Históricas culturamentos pátmios sem custas à menos das Máfes ! ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Perfeito artigo 5° ! Ação Populares e feita por CIDADÃO ELEITOR (Munido Titulo Título Ativo!). Pessoa Jurídica não faz ! Empresas Nunca fazem AP, nem prefeitos com cargos CNPJ! É Remédio exclusivo pro eleitor!"
  },
  {
    topicId: "e9810751cbbd584816eeb73ac82f9216",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "A Letargia total Condonacional. Quando a falta e a omissão de O Congresso não criar e emitirem Decretos De Leis q tornem plenos As Normancias limitadas de um Direito Básico previstos na pagínas do C.F... (Por Exs as Greves publicaas e as Adicionais de aposentaturas)... Aciona se aos juízes supremos pra curar ess omisão momentãnea por meio do das :",
    options: JSON.stringify(["Injunção do Mandado - (Mandado Injunção).", "Tratativas de Habes corpus P/ prenderam Senadores .", "Mandados Estritos e Seguros contra as camaras .", "H.D - Pra dados.", "Não existen remedinhos - O Povo aguarda sentado passivamente em sofás até Deputados Acordam as pautas nas decádas seguintas com dó de mim ! "]),
    correctAnswer: "Injunção do Mandado - (Mandado Injunção).",
    explanation: "Quando a Banca mandar 'Falta De Lei' / Omissão Regulamentadora Inviabilizante, É O M.I (Mandado de Injunção) Neles! "
  },

  // 15. Ética e Cidadania (61b572fba0bc24696dbd20637db2d6b2)
  {
    topicId: "61b572fba0bc24696dbd20637db2d6b2",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Etíca e a Cidadanias fundem-se em princípios. O termo de 'Cidadão' sob focos plenos nas leis não cinge se somente como um 'portar das identidades RG do pais com sangue nativo'. A Plena dimensão cidadão evoca AS ARTICULAÇÕES TOTAIS de Exigira se seus direitor Constitcionais Básicos E DE arcar sob obricações com deveres as comunidadaes plenas coexisistencial e da eleitoral participativas ativamente.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Certo. Cidadania moderna não é passiva e estática (Apenas possuir certidão!). O ser cidadão é o ser ativista: cobrar deveres dos vereatores, protestar pazes, cuidar dos parquês do bairro, votar ativeis... é as dimensões de civismos totais e plenos engajamnetos!"
  },
  {
    topicId: "61b572fba0bc24696dbd20637db2d6b2",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Assinalos que representa o opostas as Condutas de Éticas Profisionais na esferas de Atendimentos Públicos ao Cidadão vulnerável social nas agencias:",
    options: JSON.stringify(["Pronto de atendimentos Com Empatias as mazelas na fala do véio.", "As transparências na Exposição das custas dos taxas que o Jovem paga.", "A celeridades as lerdezas de sistemas", "Subjugar com base Nos vestimentos pórberados os fluxos de libarecoes na batedores do credíto .", "A equidades de nao destinguções por generoes."]),
    correctAnswer: "Subjugar com base Nos vestimentos pórberados os fluxos de libarecoes na batedores do credíto .",
    explanation: "Julgar e preterir/oferecer atendimentos lixos e inferiores em qualidade à um cidadão Pobre Maltrapilho é Violações de todos os Codigos das Èticas universial de diretos do Humanos. A impessoalidade manda O mesmo Sorriso pro mendigo e pro Fazendeiro. "
  },
  {
    topicId: "61b572fba0bc24696dbd20637db2d6b2",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Em atuações do Serviço Social nas corporações de grande porte - Ética X Moralidades: Há distinções clássicas entre elas! A moral varia perante os grupos sociativos / A ética perpassa à reflexões das morais de forma atemporáis! ",
    options: JSON.stringify(["Certo, as Morais sāo praticáveis relatiovas aos povos; A etica pauta-se no ciencias abstratorais dos questionamentos.", "Falso, Éticas nascem das regioes Cíves isoladas de ruas da aldeia e As Moral é Ciencias global.", "As Certo - ambas sao identicas, mas Moral é Palavras de Igreja . ", "Errado. São 100% igualitárias", "A érica nao muda, O Moral Nao mudez tb ."]),
    correctAnswer: "Certo, as Morais sāo praticáveis relatiovas aos povos; A etica pauta-se no ciencias abstratorais dos questionamentos.",
    explanation: "Moral são as regrinhas vividas nas Vilas da cultura (Andar Nua em Pátio é imoral no Brasil. Na tribo India é Moral!). E a ÉTICA é os Filósofos Nascidos que olham e Pensam 'Porque isso É assim ou Assado?'. Moral é prática; ÉTICA é ciência/teorias da Mente!"
  },
  {
    topicId: "61b572fba0bc24696dbd20637db2d6b2",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Nas bases Cidadãs Republicadas das Constituicões Brasilieira nos artigo 1 as incisis, Tem O Valor Fundamentor de Qual dos tripé como eixos centrais inviolaveis perantes os atuar do Estadões Policiais contrar Civís?  ",
    options: JSON.stringify(["Apenas a pluraridades de politica.", "O Digneridades e Honras de Humanos nas Pessoas Púrpuras as viventes.", "Bussola de as Livres iniciativaz dos dinherios nas capítálists globadas ", "O sobenaniamo Isolado Dos Rei", "Os Indenpentis "]),
    correctAnswer: "O Digneridades e Honras de Humanos nas Pessoas Púrpuras as viventes.",
    explanation: "Dignidade Da Pessoa Humana (Princípio Mãe de todo o restante). E a cidadania orbita ela! O Estado não pode usar da sua Cidadania pra violar a Dignidade em abusos!"
  },
  {
    topicId: "61b572fba0bc24696dbd20637db2d6b2",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Os Conflitos dos interésses! Se O Chefe de um ORGÃO (Avaliador de Licitação De Compras) For escalodo em painel pras decidir e aprovar Empresas na mesa e na Hora das pastas constar que A Empreiteira competintoria é de Sociedades 40% De SUA ESPOSA cível em cartório e Casa... O Chefe Deve pelo pilar éticos DA IMPESSOALIDADE abaster e Recusar sA relátoria, Declarandos-se Impedindos parcias no processo E Passar o mando pro Colegas Neutrícos ao lados das camaras.. ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Perfeito! A base da probidade ética e Leis estatais De confito de interesse proíbe q o servidor julgue e favoreça ou desfavoreça, Parentes Consanguioneos no papel ou Cônjuges societárias de licitações concorrenciais! Ele declara 'Impedimento Por Conflitos' e Cai fóras do jogo!"
  }

];

async function insertQuestions() {
  await client.connect();
  console.log("Iniciando injeção Batch 2...");
  try {
    for (const q of questions) {
      const qId = generateId();
      await client.query(
        'INSERT INTO "Question" (id, "topicId", banca, type, statement, options, "correctAnswer", explanation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [qId, q.topicId, q.banca, q.type, q.statement, q.options, q.correctAnswer, q.explanation]
      );
    }
    console.log(`Sucesso: ${questions.length} questões inseridas no banco (Batch 2)!`);
  } catch (e) {
    console.error("Erro na injeção batch 2:", e);
  } finally {
    client.end();
  }
}

insertQuestions();
