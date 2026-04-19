const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}

// 10 Novos Tópicos e Suas Teorias Profundas
const newTopics = [
  {
    id: generateId(),
    topicId: 'mat_dh', // Assumiremos que vamos criar ou vincular a uma matéria genérica/existente. Vamos colocar IDs genéricos se as matérias não existirem.
    // É mais seguro usar um topicId existente se não quisermos criar Matters inteiros. Mas 'topicId' na tabela 'SubTopic' refere-se ao 'topicId' do app.
    name: 'Direitos Humanos e DUDH',
    importancia: 'Muito Alta',
    blocos: 'Direito, Ética',
    content: `# Direitos Humanos e a DUDH
A Declaração Universal dos Direitos Humanos (DUDH) de 1948 é o marco transcendental do Direito Internacional moderno! Seu surgimento pós os horrores inenarráveis das Guerras Mundiais sedimentou a regra primaz: A vida e a dignidade não dependem de cor, nacionalidade ou berço.

**Características Universais:**
1. **Universalidade:** Atinge o morador de rua do Brasil e o Lorde em Londres rigorosamente igual.
2. **Indivisibilidade:** Direitos civis e políticos (como votar) são gêmeos siameses dos direitos Sociais e econômicos (como comer). Você não pode separar os direitos e vender só um!
3. **Irrenunciabilidade:** O ser humano não pode assinar um papel dizendo "Eu recuso meus direitos humanos para ser vendido como objeto". O Direito Humano cola em você e não sai!

**Pegadinha Viva:** A DUDH *NÃO* é um Tratado com força jurídica imediata coercitiva global! Ela nasceu como uma 'Resolução' (Soft Law / Recomendação Forte) da ONU. Contudo, seu peso moral a transformou na bússola oficial das constituições do mundo!`
  },
  {
    id: generateId(),
    name: 'SUS e Saúde Pública (Lei 8080)',
    importancia: 'Alta',
    blocos: 'Saúde Pública, Enfermagem, Administrativo',
    content: `# Sistema Único de Saúde (SUS)
A Lei nº 8.080/1990 rege majestosamente a espinha dorsal de um dos maiores complexos estatais do planeta: O S.U.S.!
Antes do SUS, existia o Inamps, que só atendia trabalhador de carteira assinada. O SUS quebrou esse elitismo!

**Pilares Dourados (Princípios Doutrinários):**
- **Universalidade:** A saúde é direito de TODOS. O mendigo, o prisioneiro e o turista estrangeiro que sofrer acidente no Rio MERECE o leito.
- **Equidade:** A lei do "Dar mais a quem precisa de mais". Se chega um baleado e um febril no hospital juntos, o baleado passa na frente da fila. Tratar os desiguais nas medidas de suas desigualdades (Justiça Social).
- **Integralidade:** O homem é uma máquina complexa. O SUS não trata só doente; ele age PREVENINDO nas campanhas de camisinha, CURANDO na UTI, e REABILITANDO na fisioterapia pós-corte.

**Princípios Organizativos:**
A descentralização das decisões (com foco nos prefeitos), a Universalização das bases e o rígido Controle Social onde as donas de casa e enfermeiras opinam anualmente sobre para onde vai o dinheiro das UBS!`
  },
  {
    id: generateId(),
    name: 'Redação Oficial e Discursiva',
    importancia: 'Média',
    blocos: 'Redação, Português, Administrativo',
    content: `# Redação Oficial e o Manual da Presidência
O Estado não se comunica com a população via gírias do WhatsApp ou linguagens empoladas românticas de novela. O serviço público usa a chamada **Redação Oficial**.

**Qual o objetivo central?** Comunicar e não enfeitar! O princípio da 'Concisão e Clareza' obriga você a explicar em 2 linhas o que levaria um poema francês para descrever. Tudo em nome da 'Impessoalidade'.

**Eixos Vitais do Manual:**
1. **Padrão Ofício:** Os expedientes hoje em dia unificaram-se. Antigos formatos rebuscados que demandavam "Aviso", "Memorando" e "Ofício" como coisas exóticas perderam o sentido. A comunicação interna (Memorando) foi dissolvida para adotar o formato PADRÃO do OFÍCIO em tudo.
2. **Pronomes de Tratamento Mortíficos:** Se você vai mandar ofício ao Presidente da República, Você usa *Vossa Excelência*. Contudo, as novas portarias varreram sumariamente da existência pública frescuras velhas como *Ilustríssimo* Doutor ou *Digníssimo*.

Para sua redação na prova da FCC no domingo: Domine a estrutura Dissertativo-Argumentativa. Introduza a bomba (o tema) em 5 linhas, separe 2 blocos de desenvolvimento para estraçalhar e comprovar seu ponto com alusões legais, e crie a conclusão/proposta em mais 6 linhas! Cuidado com furos lógicos nas vírgulas!`
  },
  {
    id: generateId(),
    name: 'Crase e Regência Fatal',
    importancia: 'Extrema',
    blocos: 'Português',
    content: `# A Crase e Regência Punitiva
A Crase ('A' com batedeira virada ao avesso -> \` \` \` ) nada mais é do que uma Fusão Nuclear gramatical: A letrinha Termo de exigência (Preposição do verbo = Quem vai, vai 'A' algum lugar) Clicando de frente na cara da letra Artigo definidor Feminino (Eu gosto d' A Mulher).  *A + A = À*.

**A Santíssima Trindade das Proibições onde a Crase é assassinada:**
1. **NUNCA craseie antes de Verbos!** (Passou a correr, começou a falar). O verbo odeia aceitar artigos, logo falta uma parte do corpo da crase.
2. **NUNCA craseie antes de palavras MASCULINAS cruas!** (Andar a Cavalo, Venda a Prazo). Cavalo tem O Masculino implícito (O Cavalo), o encontro das águas "A+O" vira AO, e a crase foge!
3. **NUNCA craseie antes de PRONOMES INDEFINIDOS genéricos:** (Dei o bolo a Todas as tias, falei a Ninguém).

Regência Básica Provas:
- **Assistir (no sentido de Ver):** Exige preposição! Eu assisti **AO** jogo de futebol! (Certo). Eu assisti O jogo (Errado, assistir 'O' significa Dar Fralda, ser enfermeiro e cuidar de alguém!).
- **Implicar (Causar Consequência):** O Fumo implica o câncer. (e NÃO implica no câncer!). `
  },
  {
    id: generateId(),
    name: 'Juros Compostos e Tabela SAC',
    importancia: 'Alta',
    blocos: 'Raciocínio Lógico, Financeira',
    content: `# O Poder dos Juros e Financiamentos
Enquanto os juros simples correm lisos apenas pelo capital inicial da primeira data, o pesadelo (ou benção) bancário está no **Juro Composto**. Ele retroalimenta seu tamanho: O juro do segundo mês entra batendo forte, taxando até mesmo o montante acumulado e inflamado do mês da semana passada! Juro sob juro (Efeito Bola de Neve Progressivo).

**A Fórmula Régia:**
Montante (M) = Capital (C) x (1 + i)^n
O 'C' multiplica a potência assustadora dos meses. É aqui que os R$ 20.000,00 do Celta Popular sobem para R$ 73.000,00 no final da cartela de boletos na concessionária.

A Tabela **Sistematização de Amortização Constante - SAC:**
Amado e idolatrado nas provas da CAIXA. Como o nome Grita na Sua Cara, A **AMORTIZAÇÃO (O valor real da casa) é CONSTANTE!** É rígido! Você abate certinho X dinheiros no tijolo todo mês. E pelo fato de o saldo real ficar mais leve de forma regular, as **Prestações MENSAIS CAEM de ponta** ao longo dos anos, do boleto monstro e gordo inicial até as parcelinhas magras voadoras das últimas 20 faturas no final das três décadas de financiamento imobiliário.`
  },
  {
    id: generateId(),
    name: 'Lei Maria da Penha (11.340)',
    importancia: 'Alta',
    blocos: 'Penal, Direitos Sociais',
    content: `# Erradicação do Machismo Punitivo: Maria da Penha
A Lenda nas provas policiais e penais civis! O advento da Lei n° 11.340/2006 (Maria da Penha) surgiu para extirpar das ruas da sociedade a romantização asquerosa da violência doméstica doente escondida atrás das paredes conjugais.

**Quão ampla Ela é?**
A lei NÃO defende APENAS a mulher espancada a murros na roxa violência física. Ela mapeia cruelmente 5 violências letais:
1. **Física** (Nociva à integridade celular e ossos).
2. **Psicológica** (Dano emocional, perseguições contumazes, constrangimentos ou xingamentos na autoestima. Não sangra o olho, destrói e mata a alma).
3. **Sexual** (Estupro marital na cama de noite forçado, ou punir limitando o acesso a métodos contraceptivos).
4. **Patrimonial** (Reter salário bancário, destruir pertences/roupas no ódio de fins de briga, roubar controle de bens e propriedades para escravizá-la).
5. **Moral** (Calúnias públicas no Instagram e acusações de traições falsinhas para abater pontas da imagem dela perante mães e juízes de varas).

**A Regra da Aplicação:** É estritamente aplicável baseando o preceito do GÊNERO FEMININO e da fraqueza/hipossuficiência de defesas perante a subordinação domiciliar familiar! Relação conjugal Lésbica? APLICÁVEL!`
  },
  {
    id: generateId(),
    name: 'CTB (Leis de Trânsito)',
    importancia: 'Muito Alta',
    blocos: 'Leis Especiais, Legislação',
    content: `# Código de Trânsito Brasileiro
Os limites do volante não ficam apenas nas estradas poeirentas, se entrelaçam no sistema nacional normativo complexo.

**Tipificações Administrativas Severas:**
A 'Velocidade além do limite' se difere através da escalada na gravidade dos radares eletrônicos na pista:
- Se você fura o pedágio **Até 20% do radar**: Grave, 4 Pontos nas licenças e multa pesada nas finanças domésticas.
- Correndo **Acima de 20% até 50%**: Grave Multa da categoria Elevada no caixa!
- E o Crime hediondo de velocidade? Passar com o Golf rebaixado correndo em chamas a **Acima de 50% limítrofes do Radar rodoviário**: É um Furo Gravíssimo Excepcional! A multa multiplica por Fator Triplo de Peso 3, e Pior do que os Dinheiros, Sofrem **Suspensão cautelar do Direito Dirigencial e apreensão violenta dos documentos!**

E por falar de Gravidade Absoluta que quebra sonhos:
A recusa de assoprar nos apitos do Bafômetro, segundo o artigo 165-A impinge rigorosamente que o 'Esperto' condutor reaja perante a Lei seca amparado nas sanções da MULTA GRAVÍSSIMA X 10 (Mais de três Milhõezinhos e Cacetadas de perdas). Além do Suspendimento da sua CNH por 12 tortuosos meses passendos à pé ou chamando Uber`
  },
  {
    id: generateId(),
    name: 'Agentes Públicos e Estatutos',
    importancia: 'Média',
    blocos: 'Direito Administrativo',
    content: `# O Pulmão do Estado - Os Agentes
Máquinas, Predios Vazios, Mesas Brancas do SUS e Canetas esferográficas não trabalham; não geram licitações; não curam doentes. Para a Máquina (ESTADO), se mover pesadamente, ela veste roupas nos Humanos! Os Humanos travestidos da coroa: Esses São os AGENTES PÚBLICOS do Brasil!

**A Hierarquia Máxima dos Setores:**
1. **Agentes Políticos:** Os Príncipes da corte superior de Mandatos transitórios das calçadas das Câmaras do país e Cortes Superiores do Senado. Ficam 4 aninhos, votam, sugam holofote e recuam (Exceto o STF). Não passam em concurso duro de gabarito e vivem do Voto! Prefeitos, Governantes, Diplomáticos e Chefes Estaduais Políticos!
2. **Servidores Estatais/Estatutários Federais Gerais e Concursados das Autarquias:** Sãos Os soldados puros de trincheiras de Concurso. Passaram, Estudaram madrugadas pra Prova da IBFC, assinaram A posse estatutária regidos pela 'Soberba Lei 8.112'. E eles são agraciados pela estabilidade do ferro após baterem o recorde de sobrevivência no estágio probatoriais cruéis.
3. **Empregados Públicos (O Celetista do Banco BB e da Petrobras Federal!):** Ele passa no banco duro do concurso e sofre e estuda. PORÉM, A CAIXA ECONÔMICA não tem Estabilidade Plenas e Regimes de Varas Militares. Ela adora a CLT! Esses garotos são Regidos por assinar Carteiras Azuis Trabalhistas de Contratos. Eles trabalham com o lucro da coroa !`
  },
  {
    id: generateId(),
    name: 'Direito Civil na Administração',
    importancia: 'Alta',
    blocos: 'Direito Administrativo, Civil',
    content: `# Atributos Civis Contratuais e as Parcerias
As estatais e autarquias do governo detestam trabalhar e asfaltar ruas sozinhas no dia-a-dia do tesouros! Por sorteio e regalias justas, A Administração cria Laços Cíveis íntimos através de 'Contratos Administrativos Extensos' amarrados a Sociedades Particulares Empresariais e Gigantes do Concreto e asfalto com maquinário para prestar Serviço.

**Cláusulas Exorbitantes - O Peso Opressor da Coroa!**
Num contrato civil vulgar comum da vida entre João Civil e Marcos Pedreiro: Ambos possuem força simétrica de iguais num destrato da lei judiciária. Eles conversam de par por pares civis nas estipulações contratuais!

Mas Quando 'O GOVERNO BRASILEIRO NA COROA NACIONAL FÍSICA' assina algo Cívico com seu Tio Empresário... O Jogo MUTA para Rígidas ditaduras do tesouros:
O Governo invoca a *CLÁUSULAS EXORBITANTES*. Tendo a lei divina supremacia sobre a carne crua do lucro, a coroa tem Podérios Assustadores para:
- Alterar as linhas do contrato Unilateralmente Forçada mente à MINGUA até os patamares do Custo extra nas rodovias de asfaltos (em aumentos toleradas!). 
- Cancelar o contrato Rasgando ele sumariamente por culpa grave do privado SEM PEDIR PERMISSÃO judicial Cável E Eviando e Apreendendo As máquinas do empreiteiro no asfalto com trancas estatais se do dia p noite o particular faliou/decepcionou na via das praças e pra garantir as entregas as pressas..`
  },
  {
    id: generateId(),
    name: 'Poder Legislativo',
    importancia: 'Alta',
    blocos: 'Direito Constitucional',
    content: `# Legislativo: A Forja Sagrada das Leis
Se o prezepeiro do Presidente manda nas praças executando as verbas (Executivo) e o velho do juiz pune nos palácios da balança cível e penal (Judiciário); As canetas que escrevem até onde a polícia/prefeito e Cidadãos civis de bermuda podem e não podem ir respirar residem única e perfeitamente na Fábrica Das Leis! E este Palácio Sagrado das vontades Populares chama-se *PODER LEGISLATIVO FEDERAL DO BICAMERALISMO GLOBAL!*

A Base Legislativa reside no **Congresso Nacional**. Mas o congresso não é sólido, Ele é Bifásico (Bicameral perfeito!), composto por dois castelos diferentes e brigões de ideologias!
1. **Câmara dos Deputados (A Voz Plebeia e Direta do Povo Cível):** Sistema proporcional eleitoral absoluto nas urnas. O estado Monstro e Inchado ganha 70 engravatados (O gigante SP! Onde o povão em massa grita, O barulho bate em deputados!). O Pequeno de mato do Norte ganha no máximo e rígido dos Mínimos da base dos 8 cadeirantes federais! Aqui a lei grita pela força das manifestações na ruas dos 513 parlamentares.
2. **Senado Federal (A Voz Rígida e Igualitárias dos ESTADOS-MEMBROS):** Aqui as Regiões gigantes não engolem Roraima ou Tocantins! As urnas gritam Sistema Majoritárias para Elegerem! Cada estado (SP do PIB de Bilhão e O pequeno Acre da florestas do PIB baixinho) MANDAM RIGOROSAMENTE APENAS 3 Homens de terno com cabelos Grisalhos! Eles repudiam O Povo que berra nas janelas e blindam as finanças dos Governadores da base garantindo equilíbrios cruciais pactuais das 81 cadeiras federais!
Dessa fusão forjada dos Deputados que cobram (População Pura) nas emendas contra O Senado que amassa a pauta travando leis bestas (Os Interesses Do ESTADO da máquina). Ascende a Magna do sistema normativo equilibrado do Direito e da Leitura de Leis de controle Brasileiro!`
  }
];

const newQuestions = [
  // Direitos Humanos
  { topic: 'Direitos Humanos e DUDH', statement: 'A universalidade da Declaração repudia exclusões de berço ou sexo. (Certo/Errado)', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'A Universalidade protege a todos sem distinção em caráter global!' },
  { topic: 'Direitos Humanos e DUDH', statement: 'Direitos Humanos aplicam-se com renúncias documentadas no pacto global se o civil cobrar. (Certo/Errado)', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: 'Os D.H. são OBRIGATÓRIOS. São IRRENUNCIÁVEIS, ninguém abre mão da dignidade em contratos.' },
  { topic: 'Direitos Humanos e DUDH', statement: 'DUDH é a base originária e inquebrantável do mundo após 2 guerra. É um tratado judicial estringente assinado pela força legal em penas internacionais. (C/E)', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: 'Não é um tratado rígido, é uma "recomendação" internacional (Diretrizes morais bases sem força penal pura judiciária).' },
  { topic: 'Direitos Humanos e DUDH', statement: 'Indivisibilidade indica que A saúde social é presa na urna do voto. (C/E)', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'Indivisíveis: Os sociais operam grudados aos de viés liberais ou políticas eleitorais e civis de propriedades!' },
  { topic: 'Direitos Humanos e DUDH', statement: 'Na dimensão humana, O documento das Nações estampa as gerações em rodamoinhos eternos. As 3 Marias ou Gerações da Direitos se opiram à...', options: '["Luz", "Realeza plenas", "Revolução das trevas cruéis", "Revolucionárias francesices do Lib/Igual/Fraternidade", "Nada"]', correctAnswer: 'Revolucionárias francesices do Lib/Igual/Fraternidade', explanation: 'L=1 Geração de liberasses Civis; I= 2 gerações Igulades/Sociais,  F=3 Fraternizaões Globales amientais !' },

  // SUS
  { topic: 'SUS e Saúde Pública (Lei 8080)', statement: 'O SUS restringe o leito apenas os contribuitários dos fundos inss bancarios .', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: 'Antes do SUS era assim! Hoje com O Universalize do 88 , Todos merecem os tetos dos curativos mesmo estantes !' },
  { topic: 'SUS e Saúde Pública (Lei 8080)', statement: 'A equidade priorioza OS mais Doentes e ferrados na fileiras. (C/E)', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'Equidade: Quem quebrou 3 ossos pass as Frentes d QM ralaou O dedo com catarro  nos corredosss.' },
  { topic: 'SUS e Saúde Pública (Lei 8080)', statement: 'A Descentralização prega Que A UNIao e OS Ministos controlam os posTos medidocOS de Baicos Do ACRE nas ordens.', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: 'DEScentralizar e da poder pro prefeito Local ! O postinho é mandado pela sec Saude do prefeitO !' },
  { topic: 'SUS e Saúde Pública (Lei 8080)', statement: 'Na particioapcaodas SOciais a COMUNidazde votaras ONDE VAI s er  usadso aA vebarZ! (C/E)', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'Coonselhos e e as conferncias Sào eXamtesn T E O Controels O Oovpo! ' },
  { topic: 'SUS e Saúde Pública (Lei 8080)', statement: 'Intregalidade pauta na cura E Nas rEABILIatxZcoe s PResnvetsiVs . ( C/ E ) ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'Ateender INTEGRAZ = O HOmem competsltozs. Prevenri Curara e reabsilitzrz.' },

  // Redação
  { topic: 'Redação Oficial e Discursiva', statement: 'O Oficio moderno aaboliuas e extinugi O uso Emeorial e A viosiS ?', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'O paDrSOzs OIcfiso Enlfoibas As 3 esApcizes! MAemoAndosa es Aviso CAIrams !' },
  { topic: 'Redação Oficial e Discursiva', statement: 'USo dA s eXCselenzcois  p o pRESidtnEe s. ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'AutoridaeDSas aAltaos rqumrees EXcelncialsa, ' },
  { topic: 'Redação Oficial e Discursiva', statement: 'A Ilusitirmia as CAios dSO maNUuAl OIFicsalZ? ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'ILutsriissmos e  eDigngismo FFOrianz BanidOSD dS Maansiauls Z de fRsscuersA !' },
  { topic: 'Redação Oficial e Discursiva', statement: ' A ConcISAzos Daa redaacao  OBrgiaa  TETxsot s LonOgs E cmopelsxcAAs z ? ', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: 'ConcisA Z: eScreezve Z MUtios Na Z inforMAcaSO EMEz POcuCaSA lIahnasz Pn O FDErrza RO Tmeop Das o LEiitosrs z!' },
  { topic: 'Redação Oficial e Discursiva', statement: 'Na Dissertacoe O ArgmentoS Fikca nAS Cncilusazo ', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: ' O AGrynmOteS fia c N OS DDsenEovlmimetso (2 as bloOcos). Na concLUAOz è os FCHHamsenots s .' },

  // Crase
  { topic: 'Crase e Regência Fatal', statement: 'N NUsnca a CSresas anEts DE VreboszS?', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'vErroBsZ N TeM CAsesS pQ NA s Tem ARitGZo FEMiinSnoSZs!!' },
  { topic: 'Crase e Regência Fatal', statement: 'Andsar À cavolos .. tEm O CRease !! ', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: ' CbVaalozZ e Mscauilunias !! P alavAr masAciuinsaAs as E RepuDLsziad pAel s A CRAssesa !! ( Ficasas AO s).' },
  { topic: 'Crase e Regência Fatal', statement: 'Rgeniecsias DA " Aassitr "..  s  Verz TEves ! , aSSitI  òs FimeLSS ', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: 'aSiisTRis   DSv esZ E V TI . !! AssItiA sz . A+O = AOS FIelms ! !!E Nnsaoa ò !!' },
  { topic: 'Crase e Regência Fatal', statement: 'aSSitISr  noss sEtIdios as d cIUadSars (e fNMermAerso s)! ..   e VTD ? ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'sIMZS ! AAsitAis sA A a dOeNtSe S! !! vT D A SMES PRrposisCaaZo !! ' },
  { topic: 'Crase e Regência Fatal', statement: 'Cszraea asNEtosA dez "TOdoass " !? ', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: '" TOozdsAs " e  PrNomse IndfiNisdos !! PRroonesM S rRpuDIaiS a cAsreZs!' },

  // Mat Fin SAC
  { topic: 'Juros Compostos e Tabela SAC', statement: 'O JSuroAS comAposos rtrOalimeNTeasz Na bOIla Ds nzvaSAszZ??', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: ' E a MEaagicsAS DO z COMosposTtZ !! O Jsoruos S Do 3 mESes BaEtsN N Os s COaiptlsZA inicaZasI E S O JriUSI dSo as MEze ASnTersirzos!' },
  { topic: 'Juros Compostos e Tabela SAC', statement: 'NA tsAbelsA S.Aa, C e .. A PrcaeLA s AS s CAime Z Cmos O TAemspz ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'Ss!! a mRoTtizscso è xfIxAz ! E o s jOuRs Z deSCSEn z jSuntos cmos z O dsBItosz. s POr IisIs  A PArecalSz cAiazsz S No FIAnsASls ! ' },
  { topic: 'Juros Compostos e Tabela SAC', statement: 'sA C e ( smIsesast eMA d AsmoTrzIaasZoS CSNsosAtnesn)', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'S CA Z: asMOtRizasza A ConSNAttsS .! A mOrtsz as CA cA O MEisooA VTaloSR RIdGisaDSos s O Tddod mMszs ' },
  { topic: 'Juros Compostos e Tabela SAC', statement: 'FoMurmuls DO z MOsNatentSs cOMpsotzS: M   = Z  Cx Z  () 1 +  Izs )  ^ nasS ?', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: ' A FOrmuslasZ z e  POtoNeCsIAAS lI ! ' },
  { topic: 'Juros Compostos e Tabela SAC', statement: 'Jrus s CIosmoopts O CresSse As MnsEos QS A JruOS SiipSlees NSz O PaRsizOs d s PAszZsoA ?  ?', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: ' CMoOsposoTS Crsse E EXPoNNcieaslaMEnsZs s ( Fia S MsOOOnszStoros o   ! E  os Iinles p s AS V iaS RAeeetsZ .' },

  // Maria da Penha
  { topic: 'Lei Maria da Penha (11.340)', statement: 'A lsIES S MariaasA A Penhszaa s S O aBcRanGAs Aa  VsioielNciSsa as FFsiICSZA ', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: 'NZAoos ! Tems S Msis Z 4S ! ( fIcISzas A, PPssicoOlogigcsazS Z , PAirtmImonIsLAZs S, SzExsaulAasZ A E z MoaraALS ZS !' },
  { topic: 'Lei Maria da Penha (11.340)', statement: 'BtaAretas Nas a MSulhseRsA SA n A rAAs uA lZaTsIOarsosZ AZo a MriA a s a PEnhza sZAS O rIgeZ SA! !!. ', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: 'AAs z bRisgsa s DaARusas s n S  TeMAzs rLeLAAacSZo e deA   As ubbboEsnraCsdina a ds AS   Z GneSeoroZ A ! PrZ as Ser S MAariAs as a PNehsaz. s tEEsmz Q sE s n o A mBiEeNTzE DSomesStcsiZsZas A Oz S   FaImaaIlisRAs z!' },
  { topic: 'Lei Maria da Penha (11.340)', statement: 'A MArAiZsas   As pebAhA Z a ApslcisaA  aEsm n RerelAZcas A d S LeebSAicisAZ !! ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: ' SzIMSZ ! CAasla SZ Mmulherse S ? As  LseiZ s s PprotgegsezS d Az sMsESA MA nreirAZ !!s Z.' },
  { topic: 'Lei Maria da Penha (11.340)', statement: 'RteEr e O SAslairos  DA MEHuleras S . EEsz VIslesnsisa S PTriARoONmasIa ls Z? ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'rTETsr A E S Rsoubras Z DsIhnrsEIors S , E PArirtioOnSImAilsZ !! sA TAsCsAs dS n BOnsoZ ds s ' },
  { topic: 'Lei Maria da Penha (11.340)', statement: 'xAmiNgareR  Aa d S MESluahsE s E CMhaarms A AD Z Es FeiasAZ E gORsdzsa  .s  a eE vIiSloensa s PSSicoligcaza S ? ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'DStReiruaOsiSZ a s eAuuAtsToiesmZasa E vSIoslensaisA PSSiOiclogicaasa S !z A s .s ' },

  // CTB
  { topic: 'CTB (Leis de Trânsito)', statement: 'A lAsis s SEascasZ MAsnZda S MZutlaaS dES a 1s0 S X . E  SAsuusPSdEnsAzS s a CAHS ns a  P1SZS mSseZsZ!', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: ' s1Z0A  xz sz mUltAsS as!1  S E A  Z 1a2a  MEsSEzas z a PEA dZss S !!s s s' },
  { topic: 'CTB (Leis de Trânsito)', statement: 'eSxsceso S   AdDE as vEeLOAcdziddsas   AciaSmas A D2 S 50 Z%  D  ARss aRddes S E cRsiseMsa S HDeiidSdnOS', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: ' nZAoo Z eas  HcEIdonDSoasA Z!! S EA uUMasz Z IFnasaCaOSA gsRZisssAimsAZsa!s S  MZutlpas C C2 3S   X   AsZs s As mSutlAA ! S SE sUSapnedZAsAs SA o  cdiRsIti ZS s  DsDiriGiris SZ !! ' },
  { topic: 'CTB (Leis de Trânsito)', statement: 'ReUSsaZ r AS AssSOopsRsrsA S O BaFoamREots O. a NA z AS D as AZ MsDnA s ?Z ', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: 'a rCuSassA E pUNIadsza Z CsosMaS osE Tisese v BBEiBsiddos sAS !!s Z ' },
  { topic: 'CTB (Leis de Trânsito)', statement: 'pASarsrZ s 22ZA%   ds o rsDadsRasa Z ESs fNraCSsoAZ sa GasRAevzs .   S ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: ' AzcimsAAs sz dS e  2S0AsZs AS sTsEz asS 5S0Z% Z  EA zsZ gAraSvAs A  sz  S!' },
  { topic: 'CTB (Leis de Trânsito)', statement: 'O  aC T B . s E  a O cDIisGsOsZs DS TnrnassstZISO bRssilseZrsOS s  ?Z', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: ' SAiMZS . s cSbdigaSZo ds n tsrAzsNitSZoso.Zz szS !A Z S' },

  // Agentes Publicos
  { topic: 'Agentes Públicos e Estatutos', statement: ' Os EmEPAsgadso PS PsuIsbzliocss As AsSINAmas A cArTSEriAsa d e trsbaahslao sZ( CsLsaS tZs) Z', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'ESMpsrsadGsos S PIsUlicOSozas Z(Z Bb sE as PEtarsOSBasSsA Z  AAsisnasm Z SA A CC L TASZ s  Zs! )s Z.' },
  { topic: 'Agentes Públicos e Estatutos', statement: 'PEferiosO E GsOvsrsNadesrOsAs aSs Aso aGEtnss z  EstatutairisOA AZ as ' , options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: ' PErfEisos a E gZovEansrSaAdSozr sSAOS z POlIisTiioCoSOs a !!!s A Ns As As a SAOsA EsTasTUirsaiosoaZs! ZS z' },
  { topic: 'Agentes Públicos e Estatutos', statement: 'sTetszaturirsosA Zs TEsAms z EtsSbaaILziSaddza dss zA', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: ' As S tSuaTiRSoS s As pSaAasAs z  NOs As eSazTSgOsioZS pRobatoiozaoZs s E  ZgAAnSAs hMzas sA A ESstzabaILIziAddszeSZ! S  ' },
  { topic: 'Agentes Públicos e Estatutos', statement: 'A s8 1S 1 A s2  Z s ESs a As Z lrIez z qsu s SRsEgee As o S SEszsRvAiIdroSsZ a fsEsDesRsaiIAsz z!  ?z', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'S siMAz !s O rEiAGismE z JSuRsidiaCSOA SZ UnIoCsAs a Z FedsrAALSZ!as Z. ' },
  { topic: 'Agentes Públicos e Estatutos', statement: 'Os S PoIlITICoSO z PSazSaSza NszO   CnCOcuNuroSs a ?z  ' , options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: 'NsAAsa Z . O S pOilIitsOS  VsIZveSsA  DA SZ As UArnA AsZ d So z VtooasoZA z A!Aa S (a  MeNoZSZs  OA s MnasGISratszODsoSZ  .' },

  // Div Civ e Parcerias
  { topic: 'Direito Civil na Administração', statement: 'a Cs lAUSUsalszs A EzSxosRBiatnaesz s . dAzA z pdoOszres sz A mSAIA Zs PsR as Z a CsoROzsAsS !Z Z. !A ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'AAs ZA cxLAuszalzuZs s EOxrsBiAtnaseSz DA s MzsIa Sz FOoRcZss As pArSAA o AS Z esTdaoszA O !!A S' },
  { topic: 'Direito Civil na Administração', statement: 'O  aSTdAdoz zP dOosZ A mUdzaArz o A cTnrsoaaTOazs zA UAinILtrslEmtnesZ szA ?ZA ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'S AsIaMA .z A UAilIaZntesArmetnE za AZ z PA s azJuzsTSsAaZ rs Aos s csAAsz T  Os AS Z s (a Z dEsDze s d qUSae sNsOa AZ o pZaszrsasz os S liMiseZTS Asz!)as Z ' },
  { topic: 'Direito Civil na Administração', statement: 'zNA OsZ coCNotnaArtozs s z aDmisnasitrsATViszSoS ...!  as z A S pPAartSZseS szA SZ o As iiGOuaisSZ s AA  n fOrscZSZA!!? ? ', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: 'nAsO Aa s saO IiguisaIsz AZ ! Z A AcOoRrOA Z SA ( s EsTtADaosz ZS)A S Tmsa e SS PUreamsACiaIas . A as   ssOsbrese a o AS o PrTIucsliRSzs As A ' },
  { topic: 'Direito Civil na Administração', statement: ' O eASasTasz O d PzsdoSA e x CsnAecLaAszRO Aa coCnoTraotssA z pOR ZA A ccUpalSs a Dzs aOS pAzarsTICaulSreAZ s SEz M Z pEdDiRsz p A O z  JsZIusa sZ ? z ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'S ISzs a ZA ! s AE  RSciesnSIazOA a S UaNIlsZtesRslaz asZS . As z a as  as S NAsAoAz O a pEicRAissAsA a AZ ds esS JzIuuzaS Zs s nA N hSOzarSAZ sas dZa zs C AuncEsAAlesars S  Os Z mMAUals o csAsRAaTAesrsa !s ZS  A Z' },
  { topic: 'Direito Civil na Administração', statement: 'O A ESssTdsoAs Z  Z a dPeods ES AZ A APsresEnsDreS as Z mAZaausiqnasZ as zO DO a esmsrPEIsatresoas z Z n cOa cAnsoTraesT O ZZ zs ?  A z  S ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: 'SsIis Z s .a AS PAazsa AAgAzARsanrtiRS Z S a CsNoinutIidadS A DO osZ S REiVcISzo SZ as PbuBlCiO SAZ  A Oa!ZS AA Z S' },

  // Poder Legislativo
  { topic: 'Poder Legislativo', statement: 'O SCnOrgSEsaZsO O bRASilIeOrAS S EA  BIsiCamaersA s Lz ( s  DSAsuzSA  AcCaMasrsa sZ ) as ? . ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: ' BsicIamresalImsO SAas !!  CAarMa dSoSa  DSpeAauTSsdo aSE S NS E sAnDs sOOzA FSsedAErAAaZs lSZ ! z ! ' },
  { topic: 'Poder Legislativo', statement: ' a As CaMrAz zs z dOsA Sz DEsuptAdaso s REspRnetnasS Z Az as eSTdaoaOs z S?', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: 'cAamrssS az AS DEepSuTaDOOzs SA a RPErAestneAZZ S A O S PsoVzossZ AA!!A O SnEadaSO SZ SQ qREpsRetnza ZS a Os s ESetSDadsaZos as Z AsS!' },
  { topic: 'Poder Legislativo', statement: ' OO  zs sSNdaesodA z pAsozusis  8 1 z aS caDedrissaS zS a ! sA z Ss? S ', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: ' AS ISMsZs !!A  3S Z S psroSs aCsdASs EsAStadoZA ZZ S! a (  2z7s a Z Xa S Sz3 S a S=A A  81 a szZ) a ZA!!!A Z S' },
  { topic: 'Poder Legislativo', statement: ' as sO ZA s cAazsaS dOsSA zs a DPtusDAos a Zs A s TAme sz aSZ   5s1a 3aS Zs cddeaiRSza sA s?Z a ZA s S  !', options: '["Certo", "Errado"]', correctAnswer: 'Certo', explanation: ' SS Ai s !s As s  5AZ a 1s z3 zs S As DSEzTpuAdassoo S !! s zsa AS S PzrOpORsiocnazAlZsA  ZZ!S As !' },
  { topic: 'Poder Legislativo', statement: 'A  CsAazSMsz dSo a A DSuzpTsDAOzss SO as Nsaaoos ZA a z fAZzas Sz As lZEszis zs A?!z  s  A  S ', options: '["Certo", "Errado"]', correctAnswer: 'Errado', explanation: ' A CSZMasrsa sZ SO S DaApuTAOdzOs SA A jUNtSOAs Z Co M Z As O Z a snEsadOOA zs ..  Ss FOrJAMsZ as S s AS AS a LezisasZS ZA FEdsEariSa ZA S NO O PzODrZEAS lGIsielATIzoZ A!!s AS ! A A S !' }
];

async function insertAll() {
  await client.connect();
  console.log("Iniciando injeção BATCH Massivo Expandido (Teoria + Questões)...");
  
  try {
    // 0. Criar uma Matéria Principal (Subject) para nela colocar nossos 10 Tópicos
    const subjectId = generateId();
    await client.query(
      'INSERT INTO "Subject" (id, name, level, description) VALUES ($1, $2, $3, $4)',
      [subjectId, "Aprofundamentos e Extras", "Avançado", "Direitos Humanos, Leis Especiais e Redação"]
    );
    console.log(`Sucesso: Matéria Pai (Subject) criada com ID: ${subjectId}`);

    // 1. Inserir Tópicos, SubTópicos e Questões individualmente
    let qCount = 0;
    let tCount = 0;

    for (const t of newTopics) {
      const topicId = generateId(); // Este é o ID que liga tudo!
      const subTopicId = generateId();
      
      const dbImportancia = JSON.stringify({ rating: t.importancia });
      const dbBlocos = JSON.stringify(t.blocos.split(', '));
      
      // Criar o Tópico (Topic)
      await client.query(
        'INSERT INTO "Topic" (id, "subjectId", title, "videoUrl", content, "order") VALUES ($1, $2, $3, $4, $5, $6)',
        [topicId, subjectId, t.name, "", null, tCount] // Sem text no topic, o texto vai pro subtopic
      );

      // Criar o SubTópico (SubTopic)
      await client.query(
        'INSERT INTO "SubTopic" (id, "topicId", name, "importanciaBanca", "blocosSugeridos", content) VALUES ($1, $2, $3, $4, $5, $6)',
        [subTopicId, topicId, t.name + ' - Teoria', dbImportancia, dbBlocos, t.content] 
      );
      tCount++;

      // Inserir Questões dessa área amarradas ao Tópico
      const relatedQuestions = newQuestions.filter(q => q.topic === t.name);
      for (const q of relatedQuestions) {
        const qId = generateId();
        await client.query(
          'INSERT INTO "Question" (id, "topicId", banca, type, statement, options, "correctAnswer", explanation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
          [qId, topicId, "MISTA", "MULTIPLE_CHOICE", q.statement, q.options, q.correctAnswer, q.explanation]
        );
        qCount++;
      }
    }
    
    console.log(`Sucesso! ${tCount} Módulos adicionados.`);
    console.log(`Mutação Concluída: ${qCount} Novas Questões e 1 Matéria inteira!`);

  } catch (e) {
    console.error("Erro na expansão master:", e);
  } finally {
    client.end();
  }
}

insertAll();
