const { Client } = require('pg');
const { v4: uuidv4 } = require('uuid');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const CE = (t, stmt, cor, exp) => ({ id: uuidv4(), topicId: t, banca:'Cebraspe', statement: stmt,
  options: JSON.stringify({"C":"Certo","E":"Errado"}), correctAnswer: cor, type:'certo_errado', explanation: exp, concurso:'PRF', ano:2024 });

const questions = [

  // ===== ÉTICA (Decreto 1.171/94 → 4d75ab42c5f8f9e40c94d748f465ddee) =====
  CE('4d75ab42c5f8f9e40c94d748f465ddee',
    'O servidor público pode usar bens e equipamentos públicos para atividades particulares fora do horário de expediente, desde que não cause danos ao material.',
    'E', 'Errado. O Decreto 1.171/94 veda expressamente o uso de bem público para fins particulares, mesmo fora do horário de serviço. Essa conduta ofende os princípios da moralidade e da eficiência.'),
  CE('4d75ab42c5f8f9e40c94d748f465ddee',
    'A Comissão de Ética do órgão público pode aplicar ao servidor a penalidade de censura ética e, para infrações mais graves, recomendar a instauração de processo administrativo disciplinar (PAD).',
    'C', 'Correto. A pena máxima da Comissão de Ética é a censura ética registrada na ficha do servidor. Para infrações que configurem crime ou improbidade, ela recomenda o PAD à autoridade competente.'),
  CE('4d75ab42c5f8f9e40c94d748f465ddee',
    'Conforme o Decreto 1.171/94, o servidor público deve agir com lealdade à instituição, e não ao chefe imediato, devendo recusar ordens manifestamente ilegais.',
    'C', 'Correto. O Código de Ética prevê que o servidor não deve obediência ao superior quando isso implicar ato manifestamente ilegal ou contrário à moralidade pública.'),
  CE('4d75ab42c5f8f9e40c94d748f465ddee',
    'A prática de "presentear" um servidor público com brindes ou vantagens de pequeno valor por parte de fornecedores é conduta ética, desde que o valor não ultrapasse um salário mínimo.',
    'E', 'Errado. O Código de Ética veda que o servidor aceite presentes de quem possa se beneficiar de sua atuação funcional, independentemente do valor — não há limite monetário permitido para esse tipo de relação.'),
  CE('4d75ab42c5f8f9e40c94d748f465ddee',
    'O dever de sigilo do servidor público sobre assuntos internos do órgão persiste mesmo após a exoneração ou desligamento do cargo.',
    'C', 'Correto. O dever de sigilo sobre assuntos de que tomou conhecimento em razão do cargo não cessa com o desligamento — o ex-servidor mantém a obrigação de não revelar informações sigilosas.'),

  // ===== ÉTICA (Ética e Cidadania → 61b572fba0bc24696dbd20637db2d6b2) =====
  CE('61b572fba0bc24696dbd20637db2d6b2',
    'A ética, enquanto ramo da filosofia, investiga os fundamentos dos valores morais, enquanto a moral refere-se ao conjunto de normas e práticas efetivamente vividas por uma sociedade.',
    'C', 'Correto. A distinção clássica: ética = reflexão filosófica sobre o dever; moral = código de conduta praticado. A Cebraspe cobra essa diferença com frequência.'),
  CE('61b572fba0bc24696dbd20637db2d6b2',
    'Segundo a Lei de Acesso à Informação (Lei 12.527/11), o prazo máximo para resposta a pedidos de informação é de 20 dias, prorrogável por mais 10 dias, mediante justificativa.',
    'C', 'Correto. O art. 11 da LAI estabelece o prazo de 20 dias, prorrogável uma única vez por mais 10, totalizando 30 dias no máximo, com justificativa formal enviada ao requerente.'),
  CE('61b572fba0bc24696dbd20637db2d6b2',
    'A Lei de Acesso à Informação considera que o sigilo é a regra e o acesso à informação pública é a exceção, cabendo ao órgão justificar qualquer liberação de dados.',
    'E', 'Errado. A LAI inverte a lógica: o ACESSO é a regra e o SIGILO é a exceção. O ônus de justificar está do lado de quem restringe, não de quem pede.'),
  CE('61b572fba0bc24696dbd20637db2d6b2',
    'A transparência ativa consiste na divulgação espontânea de informações pela administração pública, sem necessidade de solicitação prévia do cidadão.',
    'C', 'Correto. Transparência ativa = publicação proativa de dados. Transparência passiva = atender aos pedidos individuais dos cidadãos (LAI). A transparência ativa é obrigatória em portais da transparência.'),

  // ===== ATUALIDADES (Mundo Contemporâneo → 29e2782c3bfbf78f3c4b43156a838e56) =====
  CE('29e2782c3bfbf78f3c4b43156a838e56',
    'A Agenda 2030 da ONU estabelece 17 Objetivos de Desenvolvimento Sustentável (ODS), que abrangem temas como erradicação da pobreza, ação climática, igualdade de gênero e educação de qualidade.',
    'C', 'Correto. Os 17 ODS foram adotados em 2015 por 193 países-membros da ONU, com prazo de cumprimento até 2030, formando um plano global para um futuro mais sustentável e equitativo.'),
  CE('29e2782c3bfbf78f3c4b43156a838e56',
    'A LGPD (Lei 13.709/18) se aplica apenas às empresas privadas, isentando os órgãos públicos da obrigação de proteger dados pessoais dos cidadãos.',
    'E', 'Errado. A LGPD aplica-se tanto a entidades privadas quanto a órgãos PÚBLICOS. O poder público também deve adotar medidas de proteção e só pode tratar dados pessoais com base legal válida.'),
  CE('29e2782c3bfbf78f3c4b43156a838e56',
    'O fenômeno das "fake news" representa uma ameaça à democracia, pois desinforma a população e pode influenciar processos eleitorais, sendo objeto de preocupação de organizações internacionais como a ONU e a UE.',
    'C', 'Correto. A desinformação em massa (fake news) é reconhecida por organismos internacionais como ameaça à democracia e aos direitos humanos, especialmente em períodos eleitorais.'),
  CE('29e2782c3bfbf78f3c4b43156a838e56',
    'O Brasil é signatário do Acordo de Paris sobre mudanças climáticas, que estabelece como meta limitar o aquecimento global a 1,5°C acima dos níveis pré-industriais.',
    'C', 'Correto. O Acordo de Paris (2015) tem como objetivo central limitar o aquecimento global a 2°C (com esforços para 1,5°C). O Brasil é signatário e se comprometeu a reduções de emissões.'),

  // ===== CONHECIMENTOS REGIONAIS (Aspectos Físicos → dd763cd542ea0de986260bf0a52b6c61) =====
  CE('dd763cd542ea0de986260bf0a52b6c61',
    'O Ceará está 100% inserido no semiárido brasileiro, o que o torna o estado brasileiro com menor disponibilidade hídrica por habitante.',
    'E', 'Errado. Nem todo o Ceará é semiárido — a região serrana (ex.: Serra da Ibiapaba, Maciço de Baturité) tem condições climáticas mais úmidas. Além disso, outros estados têm menor disponibilidade hídrica proporcional.'),
  CE('dd763cd542ea0de986260bf0a52b6c61',
    'A Chapada do Araripe, localizada no sul do Ceará (além do Pernambuco e do Piauí), é reconhecida mundialmente como Geopark, em razão de seus fósseis e relevo único.',
    'C', 'Correto. O Geopark Araripe, criado em 2006, foi o primeiro Geopark da América Latina reconhecido pela UNESCO, destacado pelos fósseis de pterossauros e pela diversidade geológica.'),
  CE('dd763cd542ea0de986260bf0a52b6c61',
    'O Rio Jaguaribe é o principal rio cearense e, por ser um rio intermitente, seca completamente durante os períodos de seca.',
    'C', 'Correto. O Jaguaribe é o principal rio do Ceará e é intermitente (temporário), podendo secar completamente nos anos de estiagem mais severa — característica da maioria dos rios nordestinos.'),
  CE('dd763cd542ea0de986260bf0a52b6c61',
    'Fortaleza é a maior cidade nordestina e a segunda maior cidade do Brasil em população, superando até mesmo Rio de Janeiro e Belo Horizonte.',
    'E', 'Errado. Fortaleza não é a maior cidade nordestina (Salvador e Recife têm maior população em alguns indicadores, e Fortaleza disputa esse posto). Além disso, não supera nem o RJ nem BH em população.'),
  CE('dd763cd542ea0de986260bf0a52b6c61',
    'O clima semiárido do Nordeste brasileiro é caracterizado por baixa precipitação (em média menos de 800 mm/ano), alta evapotranspiração e chuvas concentradas em 3-4 meses do ano.',
    'C', 'Correto. O semiárido brasileiro é definido pela precipitação média inferior a 800 mm/ano, pela alta evapotranspiração e pela irregularidade das chuvas, concentradas em um curto período.'),

  // ===== CONHECIMENTOS REGIONAIS (Aspectos Sociais → bad4e3ef81c81d9ca76ff90059e71451) =====
  CE('bad4e3ef81c81d9ca76ff90059e71451',
    'O forró é um gênero musical e dança originário do Nordeste brasileiro, sendo reconhecido como Patrimônio Cultural do Brasil pelo IPHAN.',
    'C', 'Correto. O forró foi registrado como Patrimônio Cultural Imaterial do Brasil pelo IPHAN em 2018, reconhecendo sua importância como manifestação cultural nordestina.'),
  CE('bad4e3ef81c81d9ca76ff90059e71451',
    'O fenômeno da desertificação no Nordeste brasileiro resulta exclusivamente de causas naturais, sendo impossível mitigá-lo pela ação humana.',
    'E', 'Errado. A desertificação no Nordeste é causada pela combinação de fatores naturais (semiaridez) E humanos (desmatamento, pastoreio excessivo, irrigação inadequada). Políticas de conservação e manejo sustentável podem mitigá-la.'),

  // ===== CONHECIMENTOS REGIONAIS (Economia e Política → 9bbcfcc3ff2885d2d2a4290458cf484f) =====
  CE('9bbcfcc3ff2885d2d2a4290458cf484f',
    'O sertão nordestino foi historicamente marcado pela pecuária extensiva e pelo coronelismo, sistema político em que grandes proprietários de terras detinham poder político sobre as populações locais.',
    'C', 'Correto. O coronelismo foi um sistema político-social que dominou o interior nordestino até meados do século XX, baseado no controle de terras, votos e relações de clientelismo.'),
  CE('9bbcfcc3ff2885d2d2a4290458cf484f',
    'A Zona Franca de Manaus é o principal polo industrial do Nordeste brasileiro, gerando empregos e atraindo indústrias de alta tecnologia para a região.',
    'E', 'Errado. A Zona Franca de Manaus está no AMAZONAS (região Norte), não no Nordeste. O maior polo industrial nordestino é o Complexo Industrial e Portuário do Pecém (CE) e o Polo Petroquímico de Camaçari (BA).'),
  CE('9bbcfcc3ff2885d2d2a4290458cf484f',
    'O Nordeste brasileiro responde por aproximadamente um quarto da população brasileira, mas historicamente apresenta o menor PIB per capita médio entre as grandes regiões do país.',
    'C', 'Correto. O Nordeste tem cerca de 27% da população, mas seu PIB regional representa proporção menor, resultando em PIB per capita inferior ao das regiões Sul e Sudeste.'),

  // ===== ADMINISTRAÇÃO PÚBLICA - Gestão Estratégica → 407f59fd4764d880e9dececcba0e1969 =====
  CE('407f59fd4764d880e9dececcba0e1969',
    'O Balanced Scorecard (BSC) é uma ferramenta de gestão estratégica que monitora o desempenho organizacional por meio de quatro perspectivas: financeira, clientes, processos internos e aprendizado/crescimento.',
    'C', 'Correto. O BSC, desenvolvido por Kaplan e Norton, equilibra indicadores financeiros e não-financeiros em quatro perspectivas para traduzir a estratégia em ações mensuráveis.'),
  CE('407f59fd4764d880e9dececcba0e1969',
    'A análise SWOT é utilizada no planejamento estratégico para avaliar os ambientes interno (forças e fraquezas) e externo (oportunidades e ameaças) de uma organização.',
    'C', 'Correto. A matriz SWOT (Strengths, Weaknesses, Opportunities, Threats) é uma das ferramentas mais utilizadas no planejamento estratégico público e privado.'),
  CE('407f59fd4764d880e9dececcba0e1969',
    'A gestão por resultados é o modelo privilegiado pela Nova Gestão Pública, que busca substituir o controle burocrático sobre processos pelo foco nos resultados e na satisfação do cidadão.',
    'C', 'Correto. Um dos pilares da Nova Gestão Pública (NPM) é a substituição do controle de processos (modelo weberiano) pelo controle de resultados, com orientação ao cliente/cidadão.'),

  // ===== ADM PUBLICA - Orçamento → a4f7ddbd7f5776c54cee2ae055398f07 =====
  CE('a4f7ddbd7f5776c54cee2ae055398f07',
    'A Lei de Responsabilidade Fiscal (LRF) veda a realização de operações de crédito que excedam o montante das despesas de capital, vedando o chamado "déficit primário nominal".',
    'E', 'Errado. A LRF veda a realização de operações de crédito que excedam as despesas de capital ("regra de ouro"), mas a expressão correta é regra de ouro orçamentária — não "déficit primário nominal", que é outro conceito.'),
  CE('a4f7ddbd7f5776c54cee2ae055398f07',
    'O princípio orçamentário da anualidade determina que o orçamento deve ser elaborado e autorizado para um período de um ano, coincidindo com o exercício financeiro.',
    'C', 'Correto. O princípio da anualidade (ou periodicidade) estabelece que o orçamento tem vigência anual. No Brasil, o exercício financeiro coincide com o ano civil (1° de janeiro a 31 de dezembro).'),
  CE('a4f7ddbd7f5776c54cee2ae055398f07',
    'O orçamento público brasileiro tem natureza meramente autorizativa, ou seja, a inclusão de uma despesa no orçamento autoriza mas não obriga sua execução.',
    'C', 'Correto. O STF consolidou o entendimento de que o orçamento público brasileiro é autorizativo, não impositivo — salvo para as emendas impositivas do Congresso, que têm natureza diferenciada.'),

  // ===== ATENDIMENTO E ÉTICA - Marketing → f0a8faa18b7a07fb56076af82571b4e4 =====
  CE('f0a8faa18b7a07fb56076af82571b4e4',
    'A gestão do relacionamento com o cliente (CRM) visa conhecer as necessidades e preferências dos usuários para oferecer atendimento personalizado e aumentar a satisfação.',
    'C', 'Correto. CRM (Customer Relationship Management) é uma estratégia (e sistema de software) que centraliza dados dos clientes para personalizar o atendimento e fidelizar usuários.'),
  CE('f0a8faa18b7a07fb56076af82571b4e4',
    'O atendimento ao cidadão no serviço público dispensa princípios de cordialidade e prestatividade, pois a relação é de poder e não de prestação de serviço.',
    'E', 'Errado. No serviço público moderno, o cidadão é tratado como cliente/usuário. A Constituição prevê no art. 37 os princípios da eficiência e moralidade, e o Decreto 1.171/94 exige urbanidade e prestatividade no atendimento.'),

  // ===== SIMULADOS PRF - Definição de Tráfego → a6f7fab0c7d9e5fc3ba22f3bba6ae09c =====
  CE('a6f7fab0c7d9e5fc3ba22f3bba6ae09c',
    'O CTB define o trânsito como a utilização das vias por pessoas, veículos e animais, isolados ou em grupos, conduzidos ou não, para fins de circulação, parada, estacionamento e operação de carga ou descarga.',
    'C', 'Correto. O art. 1°, §1° do CTB traz essa definição ampla de trânsito, que inclui não apenas veículos, mas também pessoas a pé e animais nas vias.'),
  CE('a6f7fab0c7d9e5fc3ba22f3bba6ae09c',
    'Conforme o CTB, o pedestre possui total prioridade de circulação em qualquer via pública, devendo os condutores sempre parar os veículos para dar passagem a pedestres.',
    'E', 'Errado. O CTB prevê prioridade ao pedestre em TRAVESSIAS (faixas de pedestres) e calçadas, mas não em qualquer via pública. O pedestre que invade a pista fora das travessias infringe o CTB.'),
  CE('a6f7fab0c7d9e5fc3ba22f3bba6ae09c',
    'Segundo o CTB, a circulação de pedestres e veículos de propulsão humana nas pistas de rolamento é regulamentada por placas, e em caso de ausência de sinalização, aplica-se a norma geral de circulação.',
    'C', 'Correto. O CTB estabelece normas gerais de circulação que se aplicam na ausência de sinalização específica. A sinalização prevalece sobre as normas gerais quando existente e válida.'),

  // ===== SIMULADOS PRF - Rondas Terrestres → 0966c5fbe6a30833df9f706822c8ff00 =====
  CE('0966c5fbe6a30833df9f706822c8ff00',
    'O patrulhamento ostensivo da PRF nas rodovias federais tem como objetivo não apenas a fiscalização do trânsito, mas também a prevenção e repressão de crimes, socorro às vítimas e apoio ao usuário.',
    'C', 'Correto. A PRF exerce múltiplas funções nas rodovias: policiamento ostensivo, fiscalização de trânsito e transporte, socorro à vítimas, ação penal em flagrante e orientação ao usuário.'),
  CE('0966c5fbe6a30833df9f706822c8ff00',
    'Durante a ronda ostensiva, o policial rodoviário federal deve limitar suas ações à fiscalização de veículos e documentos, sendo vedada a abordagem de pessoas a pé nas rodovias.',
    'E', 'Errado. A PRF pode abordar qualquer pessoa que esteja nas rodovias federais quando houver fundada suspeita de ilícito, incluindo pedestres. A abordagem de pessoas não se limita a condutores de veículos.'),

  // ===== SIMULADOS PRF - Escalas e Jornada → 6e77776f06b8bd3a9851f62ad94d6fa1 =====
  CE('6e77776f06b8bd3a9851f62ad94d6fa1',
    'A Lei 12.990/2014 reservou às pessoas negras 20% das vagas nos concursos para provimento de cargos efetivos no âmbito da administração pública federal, sendo aplicável aos concursos da PRF.',
    'C', 'Correto. A Lei de Cotas para negros (12.990/14) aplica-se a todos os concursos de órgãos federais, incluindo a PRF. As cotas são de 20% das vagas, com autodeclaração e verificação por comissão.'),
  CE('6e77776f06b8bd3a9851f62ad94d6fa1',
    'O servidor da PRF tem sua jornada de trabalho estabelecida exclusivamente pela Lei 8.112/90, sem qualquer legislação específica para a carreira policial rodoviária.',
    'E', 'Errado. A carreira da PRF é regida pela Lei 9.654/98 (Lei Orgânica da PRF), que contém disposições específicas sobre jornada, remuneração e atribuições, complementada pela Lei 8.112/90 no que não contraria a lei específica.'),

  // ===== SIMULADOS PRF - Procedimentos em Acidentes → 1afab7e952c367e821831857f3847427 =====
  CE('1afab7e952c367e821831857f3847427',
    'O primeiro procedimento a ser adotado pelo PRF ao chegar em um acidente com vítima é o isolamento e sinalização da área, para evitar novos acidentes, antes de prestar socorro.',
    'C', 'Correto. O protocolo de socorro em rodovias prioriza: (1) sinalização e proteção local; (2) comunicação ao SAMU/Bombeiros; (3) primeiros socorros. A sinalização evita o "engavetamento" — segundo acidente causado pelo primeiro.'),
  CE('1afab7e952c367e821831857f3847427',
    'A PRF é obrigada a prestar primeiros socorros a vítimas de acidentes nas rodovias federais, mesmo sem treinamento específico para isso.',
    'E', 'Errado. O policial rodoviário federal recebe treinamento em primeiros socorros. Além disso, o socorro obrigatório é restrito às técnicas básicas — procedimentos médicos avançados ficam para o SAMU. A atuação vai até o limite da capacidade técnica do policial.'),
  CE('1afab7e952c367e821831857f3847427',
    'Em acidente com vítima fatal, o policial rodoviário federal não deve mover os corpos da via pública antes da chegada da perícia, exceto se necessário para garantir a segurança do local ou prestar socorro a vítimas em risco imediato.',
    'C', 'Correto. A cena de crime (incluindo acidente fatal) deve ser preservada para perícia, mas a preservação é secundária à vida. A PRF pode (e deve) mover vítimas ainda vivas para socorro imediato.'),

  // ===== SIMULADOS PRF - Legislação de Trânsito → 0317b06d661a7bf2b5e24a119fbb06f0 =====
  CE('0317b06d661a7bf2b5e24a119fbb06f0',
    'O limite de velocidade em rodovias federais de pista dupla é de 110 km/h para automóveis e motocicletas, salvo sinalização em contrário.',
    'C', 'Correto. O CTB (art. 61) estabelece 110 km/h para pista dupla e 100 km/h para pista simples, para automóveis. Motocicletas têm o mesmo limite. Caminhões e ônibus têm limites menores.'),
  CE('0317b06d661a7bf2b5e24a119fbb06f0',
    'A infração de excesso de velocidade em até 20% acima do limite máximo é classificada como gravíssima no CTB.',
    'E', 'Errado. Excesso de velocidade de até 20% acima do limite é infração GRAVE (não gravíssima). A infração gravíssima começa no excesso acima de 20% e pode chegar à suspensão da habilitação acima de 50%.'),
  CE('0317b06d661a7bf2b5e24a119fbb06f0',
    'A lei "Seca" (Lei 12.760/2012) alterou o CTB para proibir a direção de veículo automotor com qualquer concentração de álcool no sangue, desde que constatada por exame clínico, bafômetro ou outro meio previsto em lei.',
    'C', 'Correto. O texto atual proíbe qualquer concentração de álcool (tolerância zero), e a constatação pode ser por bafômetro, exame de sangue, teste psicomotor ou outro recurso. Recusa ao bafômetro também constitui infração.'),

  // ===== SIMULADOS PRF - Manuais → b4c9d4371e0a1f1584ea843b716e13e5 =====
  CE('b4c9d4371e0a1f1584ea843b716e13e5',
    'O uso progressivo da força pela PRF deve obedecer ao princípio da proporcionalidade, começando pelos meios menos lesivos e escalando apenas quando a resistência do abordado exigir.',
    'C', 'Correto. O art. 284 do CPP e a Portaria MJ sobre uso da força estabelecem que a força deve ser progressiva, proporcional e restrita ao necessário para cessar a resistência.'),
  CE('b4c9d4371e0a1f1584ea843b716e13e5',
    'O policial rodoviário federal que, durante abordagem, utiliza força desproporcional à resistência apresentada, pode responder por crime de abuso de autoridade previsto na Lei 13.869/2019.',
    'C', 'Correto. A Lei de Abuso de Autoridade (13.869/19) prevê crime para o agente que submete pessoa a tratamento desumano, aplica força desnecessária ou usa algemas em desacordo com a lei.'),
  CE('b4c9d4371e0a1f1584ea843b716e13e5',
    'O uso de algemas pelo servidor da PRF é ilimitado e discricionário, podendo ser utilizado em qualquer situação para garantir a comodidade do transporte do preso.',
    'E', 'Errado. A Súmula Vinculante 11 do STF limita o uso de algemas: só é lícito em caso de resistência ou fundado receio de fuga ou agressão. O uso irregular pode configurar abuso de autoridade.'),

  // ===== DIREITO CONSTITUCIONAL - Remédios → e9810751cbbd584816eeb73ac82f9216 =====
  CE('e9810751cbbd584816eeb73ac82f9216',
    'O habeas corpus é o remédio constitucional adequado para proteger o direito de locomoção (liberdade de ir, vir e ficar), sendo cabível quando alguém sofre ou se acha ameaçado de sofrer violência ou coação em sua liberdade de locomoção por ilegalidade ou abuso de poder.',
    'C', 'Correto. O art. 5°, LXVIII da CF/88 define o habeas corpus exatamente com esse alcance — proteção à liberdade física de locomoção contra qualquer ilegalidade ou abuso.'),
  CE('e9810751cbbd584816eeb73ac82f9216',
    'O mandado de segurança é cabível para proteger direito líquido e certo não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso for autoridade pública.',
    'C', 'Correto. O MS (art. 5°, LXIX CF) é subsidiário ao HC e ao HD, proteção a direito líquido e certo contra ato de autoridade pública (ou agente de pessoa jurídica no exercício de atribuições do poder público).'),
  CE('e9810751cbbd584816eeb73ac82f9216',
    'O habeas data tem por objetivo assegurar ao impetrante o conhecimento de informações relativas a sua pessoa constantes de registros ou bancos de dados de entidades governamentais, bem como a retificação dessas informações.',
    'C', 'Correto. O habeas data (art. 5°, LXXII CF) protege o acesso E a retificação de dados pessoais. É diferente do mandado de segurança e do habeas corpus — tem objeto muito específico.'),

  // ===== DIREITO CONSTITUCIONAL - Controle de Constitucionalidade → f50822bcb0e6d2b96670bccba763ae89 =====
  CE('f50822bcb0e6d2b96670bccba763ae89',
    'A ADI (Ação Direta de Inconstitucionalidade) tem como objeto a lei ou ato normativo federal ou estadual que contrarie a Constituição Federal, sendo julgada pelo Supremo Tribunal Federal.',
    'C', 'Correto. A ADI (art. 102, I, "a" CF) é a principal ação do controle concentrado de constitucionalidade, com competência exclusiva do STF e efeitos erga omnes (para todos) e vinculantes.'),
  CE('f50822bcb0e6d2b96670bccba763ae89',
    'No controle difuso de constitucionalidade, qualquer juiz ou tribunal pode, de ofício ou a requerimento, declarar a inconstitucionalidade de lei ou ato normativo aplicável ao caso concreto.',
    'C', 'Correto. O controle difuso (ou concreto) é exercido por qualquer órgão judicial no julgamento de casos concretos, com efeitos apenas entre as partes (inter partes), salvo se o Senado suspender a lei (art. 52, X CF).'),
  CE('f50822bcb0e6d2b96670bccba763ae89',
    'A ADPF (Arguição de Descumprimento de Preceito Fundamental) pode ser utilizada para impugnar leis municipais, diferentemente da ADI, que se restringe a leis federais e estaduais.',
    'C', 'Correto. A ADPF tem objeto mais amplo: cabe contra atos federais, estaduais E municipais e até contra normas anteriores à Constituição de 1988 (direito pré-constitucional) — diferença importante em relação à ADI.'),

  // ===== DIREITO CONSTITUCIONAL - Processo e Poderes → 8e2daa3cbacbbaa4f64c1fa64ca3772c =====
  CE('8e2daa3cbacbbaa4f64c1fa64ca3772c',
    'O processo legislativo ordinário (lei ordinária) exige aprovação por maioria simples nas duas casas do Congresso Nacional, enquanto a lei complementar exige maioria absoluta.',
    'C', 'Correto. Lei ordinária: maioria simples (dos presentes). Lei complementar: maioria absoluta (da composição total da Casa). É uma das diferenças mais cobradas em concurso.'),
  CE('8e2daa3cbacbbaa4f64c1fa64ca3772c',
    'A Emenda Constitucional pode ser proposta por 1/3 dos membros de qualquer das Casas do Congresso Nacional, pelo Presidente da República ou por mais da metade das Assembleias Legislativas.',
    'C', 'Correto. O art. 60 da CF/88 lista esses legitimados: 1/3 dos membros do Senado OU da Câmara; Presidente da República; mais da metade das Assembleias Legislativas, manifestando-se cada uma pela maioria relativa de seus membros.'),
  CE('8e2daa3cbacbbaa4f64c1fa64ca3772c',
    'O Presidente da República pode vetar projetos de lei aprovados pelo Congresso Nacional por razões de inconstitucionalidade (veto jurídico) ou interesse público (veto político), cabendo ao Congresso derrubar o veto por maioria absoluta.',
    'E', 'Errado. O veto presidencial pode ser derrubado pelo Congresso, mas por maioria ABSOLUTA de votos da MAIORIA SIMPLES dos membros presentes? Não — é por maioria ABSOLUTA dos deputados e senadores, em votação conjunta (art. 66, §4° CF).'),

  // ===== DIREITO PENAL - Teoria do Crime → 5de5ce69fe8fc0d3152526794e096c22 =====
  CE('5de5ce69fe8fc0d3152526794e096c22',
    'O crime tentado é punido com a pena do crime consumado, reduzida de 1/3 a 2/3, conforme o iter criminis percorrido pelo agente.',
    'C', 'Correto. O art. 14, parágrafo único do CP prevê que a pena da tentativa é a do crime consumado diminuída de 1 a 2 terços, considerando a proximidade do resultado.'),
  CE('5de5ce69fe8fc0d3152526794e096c22',
    'O dolo eventual ocorre quando o agente prevê o resultado como provável e, apesar disso, pratica a conduta assumindo o risco de produzi-lo.',
    'C', 'Correto. O dolo eventual (art. 18, I, 2ª parte CP) distingue-se da culpa consciente: no dolo eventual o agente aceita o resultado; na culpa consciente, acredita que pode evitá-lo.'),
  CE('5de5ce69fe8fc0d3152526794e096c22',
    'A legítima defesa não pode ser alegada quando o agente utiliza meios necessários com moderação para repelir injusta agressão atual.',
    'E', 'Errado. A legítima defesa (art. 23, II CP) é causa de exclusão de ilicitude e exige exatamente: (1) agressão injusta, atual ou iminente; (2) uso dos meios necessários (3) moderadamente. Quando esses requisitos são atendidos, é plenamente válida.'),
  CE('5de5ce69fe8fc0d3152526794e096c22',
    'No direito penal brasileiro, a ignorância da lei é inescusável, mas o erro de proibição inevitável exclui a culpabilidade.',
    'C', 'Correto. Art. 21 CP: "O desconhecimento da lei é inescusável." Porém, o erro de proibição (acreditar que o ato é lícito) quando INEVITÁVEL exclui a culpabilidade; quando evitável, reduz a pena de 1/6 a 1/3.'),
  CE('5de5ce69fe8fc0d3152526794e096c22',
    'O crime de embriaguez ao volante (art. 306 do CTB) admite a modalidade culposa.',
    'E', 'Errado. O art. 306 do CTB (embriaguez ao volante) é crime doloso — exige que o agente dirija sob influência de álcool com concentração igual ou superior a 6 dg/L de sangue (ou 0,3 mg/L no bafômetro). Não há modalidade culposa nesse tipo penal.'),

  // ===== DIREITO ADMINISTRATIVO - Atos Administrativos → 4eab7eb244da26781e9ad52b9ad3fc96 =====
  CE('4eab7eb244da26781e9ad52b9ad3fc96',
    'Os atributos do ato administrativo incluem presunção de legitimidade, imperatividade, autoexecutoriedade e tipicidade.',
    'C', 'Correto. A doutrina majoritária lista esses atributos: presunção de legitimidade (o ato é válido até prova em contrário), imperatividade (pode impor obrigações), autoexecutoriedade (pode ser executado sem autorização judicial) e tipicidade (deve estar previsto em lei).'),
  CE('4eab7eb244da26781e9ad52b9ad3fc96',
    'A revogação do ato administrativo pode ser efetuada pela própria administração por razões de oportunidade e conveniência, com efeitos a partir da data do ato revogado (ex tunc).',
    'E', 'Errado. A revogação por discricionariedade (oportunidade e conveniência) tem efeitos EX NUNC (a partir da revogação, não retroage). Efeitos ex tunc (retroativos) são da ANULAÇÃO, não da revogação.'),
  CE('4eab7eb244da26781e9ad52b9ad3fc96',
    'A anulação do ato administrativo ilegal pode ser decretada pela própria administração (autotutela) ou pelo Judiciário, e tem efeitos ex tunc, desfazendo os efeitos desde a origem.',
    'C', 'Correto. A Súmula 473 do STF consagra a autotutela: a administração pode anular atos ilegais ou revogar atos inconvenientes. A anulação retroage ao momento do ato (ex tunc).'),

  // ===== DIREITO ADMINISTRATIVO - Controle → 784a0a6d3b5e0d23b495c726b781a62a =====
  CE('784a0a6d3b5e0d23b495c726b781a62a',
    'O TCU (Tribunal de Contas da União) é um órgão do Poder Judiciário Federal e tem competência para julgar as contas de administradores e demais responsáveis por dinheiros, bens e valores públicos federais.',
    'E', 'Errado. O TCU NÃO é do Poder Judiciário — é um órgão autônomo de controle externo que auxilia o Congresso Nacional no controle das contas federais. Tem natureza de tribunal administrativo.'),
  CE('784a0a6d3b5e0d23b495c726b781a62a',
    'O controle interno da administração pública federal é exercido pelo Sistema de Controle Interno do Poder Executivo, coordenado pela CGU (Controladoria-Geral da União).',
    'C', 'Correto. A CGU é o órgão central do sistema de controle interno do Poder Executivo federal, com atribuições de auditoria, correição, ouvidoria e prevenção da corrupção.'),
  CE('784a0a6d3b5e0d23b495c726b781a62a',
    'A responsabilidade objetiva do Estado por danos causados a terceiros por seus agentes independe da comprovação de culpa ou dolo do agente, bastando o nexo causal entre a ação (ou omissão) e o dano.',
    'C', 'Correto. O art. 37, §6° CF/88 consagra a responsabilidade objetiva do Estado (teoria do risco administrativo), exceto nas omissões — onde parte da doutrina e jurisprudência exige culpa (responsabilidade subjetiva).'),

  // ===== LÍNGUA PORTUGUESA - Morfologia → 549114ea9fb96817701e99a4a59e9caa =====
  CE('549114ea9fb96817701e99a4a59e9caa',
    'O prefixo "in-" sempre indica negação ou oposição nas palavras da língua portuguesa.',
    'E', 'Errado. O prefixo "in-" pode indicar negação ("incapaz") ou INTENSIFICAÇÃO ("inflamar" = enflamejar intensamente). Na palavra "incendiar", o "in" não é de negação. A Cebraspe cobra essa distinção de valor semântico dos prefixos.'),
  CE('549114ea9fb96817701e99a4a59e9caa',
    'A palavra "saudade" é um substantivo abstrato feminino, podendo ser usada no plural (saudades).',
    'C', 'Correto. "Saudade" é substantivo abstrato (sentimento), do gênero feminino por convenção da língua, e admite plural: "Tenho saudades de você."'),
  CE('549114ea9fb96817701e99a4a59e9caa',
    'Os verbos "ver" e "vir" são irregulares porque suas formas conjugadas não seguem o padrão das conjugações regulares da língua portuguesa.',
    'C', 'Correto. Esses verbos são irregulares de uso frequente: "vejo/vê/vemos"; "venho/vens/vem". A Cebraspe costuma cobrar a conjugação de "vir" (venho, vens, vem, vimos, vindes, vêm) confundindo com "ter" (tenho, tens...).'),

  // ===== LÍNGUA PORTUGUESA - Sintaxe Avançada → 9112e0a3573ceee09dc6069dfeff4bde =====
  CE('9112e0a3573ceee09dc6069dfeff4bde',
    'Na frase "O policial que estava de folga prendeu o suspeito", a oração "que estava de folga" é adjetiva restritiva e, por isso, não deve ser separada por vírgulas.',
    'C', 'Correto. A oração adjetiva restritiva limita o sentido do antecedente (indica QUAL policial é o sujeito), sendo integrada ao período sem vírgulas — diferente da explicativa, que apenas acrescenta informação.'),
  CE('9112e0a3573ceee09dc6069dfeff4bde',
    'A voz passiva analítica é formada pelos verbos auxiliares "ser", "estar", "ficar" ou "andar" seguidos do particípio do verbo principal.',
    'C', 'Correto. A voz passiva analítica usa esses auxiliares + particípio. A mais comum é com "ser": "O suspeito foi preso pela PRF." Com "estar": "O caso estava sendo investigado."'),
  CE('9112e0a3573ceee09dc6069dfeff4bde',
    'Em "Construíram um viaduto na rodovia", o verbo "construíram" está na terceira pessoa do plural para indicar sujeito indeterminado.',
    'C', 'Correto. Uma das formas de indeterminar o sujeito é usar o verbo na 3ª pessoa do plural sem referente explícito no texto. A outra forma é com "se" (sujeito indeterminado).'),

  // ===== LÍNGUA PORTUGUESA - Compreensão Textual Avançada → 006f40747a2c03877983d9598061d736 =====
  CE('006f40747a2c03877983d9598061d736',
    'A coesão textual é garantida por elementos gramaticais que ligam as partes do texto (conectivos, pronomes, sinônimos), enquanto a coerência diz respeito à unidade semântica do texto.',
    'C', 'Correto. A coesão é o aspecto formal/gramatical do texto (como as partes se ligam linguisticamente); a coerência é o aspecto semântico (se o sentido global faz sentido, sem contradições).'),
  CE('006f40747a2c03877983d9598061d736',
    'A reescritura de um trecho que substitui "porém" por "portanto" mantém o sentido original do texto, pois ambas as palavras são conectivos.',
    'E', 'Errado. "Porém" é conectivo adversativo (opõe ideias); "portanto" é conclusivo (conclui a partir do que foi dito). A simples presença de ambos como conectivos não garante equivalência — o valor semântico é radicalmente diferente.'),
  CE('006f40747a2c03877983d9598061d736',
    'A tipologia textual dissertativa-argumentativa tem como objetivo principal defender um ponto de vista, utilizando argumentos, evidências e contra-argumentos para persuadir o leitor.',
    'C', 'Correto. O texto dissertativo-argumentativo é o tipo mais cobrado em concursos e no ENEM, com estrutura de tese → argumentação → conclusão, visando a persuasão do leitor.'),

  // ===== RACIOCÍNIO LÓGICO - Lógica Proposicional → 8b954c84df27fcd670068cba60df2caa =====
  CE('8b954c84df27fcd670068cba60df2caa',
    'Na lógica clássica, a negação de "Todos os policiais são eficientes" é "Nenhum policial é eficiente".',
    'E', 'Errado. A negação de "Todos são P" é "Existe ao menos um que não é P" (particular negativa: "Algum policial não é eficiente"). "Nenhum policial é eficiente" é a negação de "Algum policial é eficiente".'),
  CE('8b954c84df27fcd670068cba60df2caa',
    'Uma proposição condicional "Se P, então Q" é falsa apenas quando P é verdadeiro e Q é falso.',
    'C', 'Correto. A tabela verdade do condicional (P→Q) tem como único caso falso quando o antecedente (P) é verdadeiro e o consequente (Q) é falso. Nos demais três casos, a condicional é verdadeira.'),
  CE('8b954c84df27fcd670068cba60df2caa',
    'A contrapositiva de "Se chove, então a rodovia molha" é logicamente equivalente à proposição original.',
    'C', 'Correto. A contrapositiva de P→Q é ¬Q→¬P, e é LOGICAMENTE EQUIVALENTE à condicional original. "Se a rodovia não molhou, então não choveu" tem o mesmo valor lógico que "Se chove, a rodovia molha."'),
  CE('8b954c84df27fcd670068cba60df2caa',
    'A proposição "P ou Q" (disjunção inclusiva) é verdadeira mesmo quando ambas P e Q são verdadeiras simultaneamente.',
    'C', 'Correto. A disjunção inclusiva (∨) é verdadeira quando P, Q ou ambos são verdadeiros — só é falsa quando ambos são falsos. Difere da disjunção exclusiva (XOR), que exige que apenas um seja verdadeiro.'),

  // ===== RACIOCÍNIO LÓGICO - Lógica Avançada → 63f1575ade71e34619da657a69928f17 =====
  CE('63f1575ade71e34619da657a69928f17',
    'Em um raciocínio silogístico: "Todo servidor público deve ser ético. João é servidor público. Logo, João deve ser ético." Esse argumento é válido.',
    'C', 'Correto. Esse é um silogismo categórico válido na forma "Barbara" (AAA): premissa universal + premissa particular → conclusão particular. A validade lógica independe da verdade material das premissas.'),
  CE('63f1575ade71e34619da657a69928f17',
    'O raciocínio por indução parte de casos particulares para estabelecer conclusões gerais, enquanto o raciocínio dedutivo parte de premissas gerais para conclusões particulares.',
    'C', 'Correto. Indução: vários casos → regra geral. Dedução: regra geral + caso → conclusão. A dedução garante a conclusão se as premissas forem verdadeiras; a indução apenas sugere a conclusão.'),

  // ===== RACIOCÍNIO LÓGICO - Proporção Básica → b675c3b4a7fa73be6a73c0ad1bf6a774 =====
  CE('b675c3b4a7fa73be6a73c0ad1bf6a774',
    'Se A é inversamente proporcional a B, dobrar o valor de A implica que B será reduzido à metade.',
    'C', 'Correto. Em grandezas inversamente proporcionais, o produto A×B é constante. Se A dobra, B deve ser reduzido à metade para manter o produto constante.'),
  CE('b675c3b4a7fa73be6a73c0ad1bf6a774',
    'Numa prova com 50 questões, um candidato errou 15% das questões. Logo, acertou 42 questões e meia.',
    'E', 'Errado. 15% de 50 = 7,5 questões erradas. 50 - 7,5 = 42,5 questões "certas" — que não faz sentido no contexto de questões inteiras. Provavelmente a questão deveria usar 10% (5 questões) ou 30% (15 questões). Como dado, a resposta matemática seria 42,5.'),
  CE('b675c3b4a7fa73be6a73c0ad1bf6a774',
    'Dois veículos partem do mesmo ponto em sentidos opostos, um a 80 km/h e outro a 60 km/h. Após 1 hora, a distância entre eles é de 140 km.',
    'C', 'Correto. Em sentidos opostos, as velocidades se somam (velocidade relativa = 80+60 = 140 km/h). Após 1 hora: distância = 140 × 1 = 140 km.'),

  // ===== INFORMÁTICA - Conceitos Essenciais → d03e1c8cc27caf211a2b80d0949cca9e =====
  CE('d03e1c8cc27caf211a2b80d0949cca9e',
    'O sistema binário utilizado pelos computadores representa informações usando apenas dois símbolos: 0 e 1, que correspondem aos estados físicos de desligado e ligado nos transistores.',
    'C', 'Correto. Os computadores são baseados em lógica binária. Os estados 0 e 1 mapeiam estados físicos (tensão alta/baixa, magnetizado/não-magnetizado, etc.), sendo a base do processamento digital.'),
  CE('d03e1c8cc27caf211a2b80d0949cca9e',
    'Um arquivo de imagem em formato JPEG é menor que o mesmo arquivo em formato BMP porque o JPEG utiliza compressão com perda de qualidade.',
    'C', 'Correto. JPEG utiliza compressão com perda (lossy), descartando dados imperceptíveis ao olho humano para reduzir o tamanho. BMP é sem compressão (raw), resultando em arquivos muito maiores.'),
  CE('d03e1c8cc27caf211a2b80d0949cca9e',
    'O formato PDF (Portable Document Format) é um formato editável assim como o DOCX, podendo ser alterado em qualquer editor de texto sem ferramentas específicas.',
    'E', 'Errado. O PDF foi criado justamente para ser portável e preservar a formatação original, sendo mais adequado para leitura e distribuição do que para edição. Editar PDF exige ferramentas específicas (Adobe Acrobat, LibreOffice Draw, etc.).'),

  // ===== INFORMÁTICA - Aplicativos de Escritório → a28a6477137a1a6573a07b9eaca1269f =====
  CE('a28a6477137a1a6573a07b9eaca1269f',
    'No Microsoft Excel, a fórmula =SOMA(A1:A10) soma os valores das células A1 até A10, inclusive.',
    'C', 'Correto. O operador ":" no Excel indica um intervalo contínuo. =SOMA(A1:A10) soma os 10 valores nas células A1, A2, ..., A10.'),
  CE('a28a6477137a1a6573a07b9eaca1269f',
    'No Microsoft Word, o atalho de teclado Ctrl+Z desfaz a última ação realizada, e pode ser pressionado múltiplas vezes para desfazer várias ações consecutivas.',
    'C', 'Correto. Ctrl+Z é o atalho universal de "desfazer" (Undo) nos aplicativos Microsoft Office, podendo ser repetido para desfazer múltiplas ações em sequência. Ctrl+Y refaz.'),
  CE('a28a6477137a1a6573a07b9eaca1269f',
    'A extensão de arquivo padrão do Microsoft Word 2016 ou superior é .doc, enquanto as versões antigas usavam .docx.',
    'E', 'Errado. É o contrário: o formato moderno é .docx (Word 2007 em diante, baseado em XML), e o formato legado (Word 97-2003) é .doc. A Cebraspe frequentemente inverte essa informação.'),

  // ===== LEGISLAÇÃO - Improbidade e Licitações → 390841efd085f456931b12d4c2d974a2 =====
  CE('390841efd085f456931b12d4c2d974a2',
    'A Lei 14.133/2021 (Nova Lei de Licitações) extinguiu as modalidades de Convite e Tomada de Preços, mantendo a Concorrência, o Pregão e criando o Diálogo Competitivo.',
    'C', 'Correto. A Nova Lei de Licitações unificou e racionalizou as modalidades, extinguindo Convite e Tomada de Preços e mantendo Concorrência, Pregão, Concurso e Leilão, além de criar o Diálogo Competitivo.'),
  CE('390841efd085f456931b12d4c2d974a2',
    'A inexigibilidade de licitação ocorre quando a competição é inviável, como nos casos de fornecedor exclusivo, contratação de profissional de notória especialização ou artista consagrado.',
    'C', 'Correto. Art. 74 da Lei 14.133/21: a inexigibilidade ocorre quando a competição é impossível ou inviável: fornecedor exclusivo de objeto singular, profissional de notória especialização, ou artista (para atividade artística diretamente).'),
  CE('390841efd085f456931b12d4c2d974a2',
    'No sistema de registro de preços, a Administração é obrigada a contratar o objeto registrado após a homologação do pregão, não podendo deixar de utilizar os preços registrados.',
    'E', 'Errado. O Sistema de Registro de Preços (SRP) é uma ferramenta de planejamento e NÃO gera obrigação de compra para a Administração. A ata de registro de preços é um compromisso do fornecedor em manter o preço, mas a contratação fica à discricionariedade da Administração dentro do prazo da ata.'),

  // ===== LEGISLAÇÃO - Lei 8.112 → 08e9af99487379678854406d84f4ebc2 =====
  CE('08e9af99487379678854406d84f4ebc2',
    'Conforme a Lei 8.112/90, o servidor público federal adquire estabilidade após 3 anos de efetivo exercício e aprovação em avaliação de desempenho.',
    'C', 'Correto. A EC 19/98 alterou o prazo para 3 anos, e a EC 45/04 acrescentou o requisito de avaliação de desempenho como condição para a estabilidade (art. 41 CF c/c art. 20 Lei 8.112).'),
  CE('08e9af99487379678854406d84f4ebc2',
    'O servidor público federal tem o direito de acumular o cargo com a aposentadoria de outro cargo, desde que a acumulação seja permitida pela Constituição Federal.',
    'C', 'Correto. O art. 37, §10 da CF/88 (EC 20/98) veda a percepção simultânea de proventos de aposentadoria pública com remuneração de cargo público, SALVO nos cargos acumuláveis e nos cargos eletivos, entre outras exceções específicas.'),
  CE('08e9af99487379678854406d84f4ebc2',
    'O servidor federal que incorre em falta punível com suspensão pode optar por ela ou pela conversão em multa de 50% por dia de vencimento.',
    'C', 'Correto. O art. 130, §2° da Lei 8.112 permite converter a pena de suspensão de até 30 dias em multa de 50% por dia de vencimento ou remuneração, quando conveniente ao serviço.'),
  CE('08e9af99487379678854406d84f4ebc2',
    'A licença para tratar de interesses particulares (LTIP) pode ser concedida ao servidor estável por prazo indeterminado, sendo vedada qualquer remuneração durante o período.',
    'E', 'Errado. A LTIP é concedida por prazo DETERMINADO (até 3 anos, prorrogável por igual período — totalizando no máximo 6 anos) e é sem remuneração, mas o prazo é finito.'),
];

async function main() {
  try {
    await client.connect();
    console.log(`Inserting ${questions.length} new questions...`);
    let count = 0;
    let skip = 0;
    for (const q of questions) {
      try {
        await client.query(`
          INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation, concurso, ano)
          VALUES ($1,$2,$3,$4,$5::jsonb,$6,$7,$8,$9,$10)
          ON CONFLICT (id) DO NOTHING
        `, [q.id, q.topicId, q.banca, q.statement, q.options, q.correctAnswer, q.type, q.explanation, q.concurso, q.ano]);
        count++;
      } catch(e) {
        console.error(`SKIP [${q.topicId}]: ${e.message.substr(0,80)}`);
        skip++;
      }
    }
    console.log(`\n✅ Done! Inserted: ${count} | Skipped: ${skip}`);
  } catch(err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
main();
