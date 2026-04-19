const { Client } = require('pg');
const { v4: uuidv4 } = require('uuid');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

// Helper for Certo/Errado questions
const CE = (topicId, stmt, correct, explanation, banca='Cebraspe', concurso='PRF', ano=2024) => ({
  id: uuidv4(), topicId, banca, statement: stmt,
  options: JSON.stringify({"C":"Certo","E":"Errado"}),
  correctAnswer: correct, type: 'certo_errado', explanation, concurso, ano
});

// Helper for multiple choice (A-E)
const MC = (topicId, stmt, opts, correct, explanation, banca='Cebraspe', concurso='PRF', ano=2024) => ({
  id: uuidv4(), topicId, banca, statement: stmt,
  options: JSON.stringify(opts),
  correctAnswer: correct, type: 'multipla_escolha', explanation, concurso, ano
});

const questions = [

  // ===================== FÍSICA PRF — Trabalho e Energia =====================
  // topicId: 7a53349c29e4464ec1189d0036db2ccc
  CE('7a53349c29e4464ec1189d0036db2ccc',
    'A energia cinética de um veículo é diretamente proporcional ao quadrado de sua velocidade. Assim, dobrar a velocidade de um veículo quadruplica a distância mínima de frenagem, mantidos constantes o coeficiente de atrito e a massa do veículo.',
    'C', 'Correto. Ec = ½mv². Dobrando v, Ec aumenta 4×. Pela equação d = v²/(2μg), a distância também quadruplica.'),
  CE('7a53349c29e4464ec1189d0036db2ccc',
    'O trabalho realizado pela força normal sobre um veículo em movimento horizontal é positivo, pois essa força sustenta o peso do veículo.',
    'E', 'Errado. A força normal é perpendicular ao deslocamento. Assim, o ângulo θ = 90°, e W = F × d × cos(90°) = 0. O trabalho da normal é nulo.'),
  CE('7a53349c29e4464ec1189d0036db2ccc',
    'Em uma colisão perfeitamente inelástica entre dois veículos, a quantidade de movimento total do sistema é conservada, embora parte da energia cinética seja convertida em energia de deformação.',
    'C', 'Correto. A conservação do momento linear (p = mv) se aplica em qualquer colisão (sistema isolado), mas a energia cinética se perde em deformação, calor e som nas colisões inelásticas.'),
  CE('7a53349c29e4464ec1189d0036db2ccc',
    'O teorema trabalho-energia afirma que o trabalho total realizado sobre um corpo é igual à variação de sua energia potencial.',
    'E', 'Errado. O teorema trabalho-energia afirma que o trabalho total é igual à variação da ENERGIA CINÉTICA (ΔEc), não da energia potencial.'),
  CE('7a53349c29e4464ec1189d0036db2ccc',
    'Em uma descida longa sem freios, toda a energia potencial gravitacional de um veículo se converte em energia cinética, independentemente do atrito com o solo e a resistência do ar.',
    'E', 'Errado. Na prática, parte da energia potencial é convertida em calor pelo atrito e pela resistência do ar. A energia cinética final é menor que a energia potencial inicial.'),

  // topicId: 415f5f90fc83d4f4216ebdd9cfa5217e (Trabalho e Energia duplicado)
  CE('415f5f90fc83d4f4216ebdd9cfa5217e',
    'O airbag salva vidas em colisões porque aumenta o tempo de impacto, reduzindo a força média sobre o ocupante, mantendo constante a variação da quantidade de movimento.',
    'C', 'Correto. Pelo impulso J = F × Δt = Δp, se Δp é constante e Δt aumenta (airbag estica a parada), a força F diminui proporcionalmente.'),
  CE('415f5f90fc83d4f4216ebdd9cfa5217e',
    'A potência de um motor é definida como o trabalho realizado por unidade de distância percorrida.',
    'E', 'Errado. Potência é trabalho por unidade de TEMPO (P = W/t), não de distância. A unidade é o Watt (J/s).'),
  CE('415f5f90fc83d4f4216ebdd9cfa5217e',
    'Um veículo de 2000 kg a 72 km/h possui energia cinética de 400.000 J.',
    'C', 'Correto. 72 km/h = 20 m/s. Ec = ½ × 2000 × 20² = ½ × 2000 × 400 = 400.000 J.'),
  CE('415f5f90fc83d4f4216ebdd9cfa5217e',
    'Durante a frenagem, os freios de tambor transformam energia cinética em energia elétrica, que é armazenada na bateria do veículo.',
    'E', 'Errado. Os freios convencionais (tambor e disco) transformam energia cinética em CALOR por atrito, que é dissipado no ambiente. Apenas os sistemas de frenagem regenerativa (veículos elétricos/híbridos) convertem em energia elétrica.'),

  // ===================== GEOPOLÍTICA BRASILEIRA =====================
  // Fronteiras e Soberania: c6837108e31fcfc2cb41e4f58a0c8099
  CE('c6837108e31fcfc2cb41e4f58a0c8099',
    'O Brasil faz fronteira terrestre com todos os países da América do Sul, com exceção do Chile e do Equador.',
    'C', 'Correto. O Brasil tem 10 países limítrofes: Venezuela, Guiana, Suriname, Guiana Francesa, Colômbia, Peru, Bolívia, Paraguai, Argentina e Uruguai. Chile e Equador são os únicos sul-americanos sem fronteira com o Brasil.'),
  CE('c6837108e31fcfc2cb41e4f58a0c8099',
    'A faixa de fronteira, definida pela Lei 6.634/79, corresponde a uma extensão de 200 km da linha divisória em direção ao interior do território nacional.',
    'E', 'Errado. A faixa de fronteira é de 150 km (não 200 km), e é considerada área indispensável à segurança nacional, com restrições à propriedade estrangeira.'),
  CE('c6837108e31fcfc2cb41e4f58a0c8099',
    'A atuação da PRF nas rodovias federais que cortam a faixa de fronteira contribui para o combate ao tráfico transnacional de drogas e armas.',
    'C', 'Correto. As rodovias federais na faixa de fronteira são rotas estratégicas para o tráfico ilícito. A PRF opera em parceria com a Polícia Federal e o Exército nessas áreas.'),
  CE('c6837108e31fcfc2cb41e4f58a0c8099',
    'O Brasil possui a maior fronteira terrestre com a Bolívia entre todos os países sul-americanos vizinhos.',
    'C', 'Correto. A fronteira Brasil-Bolívia tem aproximadamente 3.423 km, sendo a maior fronteira terrestre do Brasil, seguida pela fronteira com o Peru (cerca de 2.995 km).'),

  // Matriz de Transportes: d1e5747149738ab676688a4a38d91f35
  CE('d1e5747149738ab676688a4a38d91f35',
    'O modal rodoviário responde por aproximadamente 65% do transporte de cargas no Brasil, evidenciando uma dependência excessiva em relação aos demais modais.',
    'C', 'Correto. O Brasil tem uma dependência histórica do modal rodoviário, resultado das políticas desenvolvimentistas da década de 1950 (Plano de Metas de JK).'),
  CE('d1e5747149738ab676688a4a38d91f35',
    'A ANTT (Agência Nacional de Transportes Terrestres) é responsável pela construção e manutenção das rodovias federais não concedidas.',
    'E', 'Errado. A construção e manutenção de rodovias federais não concedidas é responsabilidade do DNIT (Departamento Nacional de Infraestrutura de Transportes). A ANTT regula e fiscaliza as rodovias concedidas e o transporte terrestre.'),
  CE('d1e5747149738ab676688a4a38d91f35',
    'As rodovias federais com numeração ímpar no Brasil têm predominantemente orientação longitudinal (norte-sul), enquanto as de numeração par têm orientação transversal (leste-oeste).',
    'C', 'Correto. Essa é a lógica do sistema de numeração das BRs: ímpares = longitudinais (N-S), pares = transversais (L-O), e as que terminam em 5 são diagonais.'),
  CE('d1e5747149738ab676688a4a38d91f35',
    'A PRF tem competência para fiscalizar apenas as rodovias federais concedidas à iniciativa privada, ficando as demais sob responsabilidade do DNIT.',
    'E', 'Errado. A PRF tem competência para fiscalizar e policial TODAS as rodovias federais, sejam concedidas ou não. A concessão altera apenas a gestão da infraestrutura, não a competência de fiscalização de trânsito.'),

  // Matriz Energética: 63edbdf9cb8b61f9abb5af68657a0716
  CE('63edbdf9cb8b61f9abb5af68657a0716',
    'A mistura de biodiesel ao diesel é obrigatória no Brasil, e o percentual mínimo é definido por lei, sendo atualmente superior a 10%.',
    'C', 'Correto. O Brasil possui uma política mandatória de mistura de biodiesel ao diesel. O percentual atual supera 10% (chegou a 14% em 2024), e é estabelecido pelo governo federal.'),
  CE('63edbdf9cb8b61f9abb5af68657a0716',
    'O pré-sal brasileiro, descoberto em 2006, é explorado exclusivamente pela Petrobras, empresa 100% estatal.',
    'E', 'Errado. O pré-sal pode ser explorado por outras empresas além da Petrobras. Além disso, a Petrobras é uma empresa de ECONOMIA MISTA (não 100% estatal), pois seus papéis são negociados em bolsa e há acionistas privados.'),
  CE('63edbdf9cb8b61f9abb5af68657a0716',
    'A adulteração de combustível em posto de abastecimento constitui crime ambiental e pode ser fiscalizado pela PRF durante inspeções em veículos de transporte de derivados de petróleo.',
    'C', 'Correto. A adulteração de combustível é crime previsto na Lei 9.847/99 e pode enquadrar-se em crime ambiental. A PRF fiscaliza o transporte de produtos perigosos, incluindo combustíveis.'),

  // Urbanização e População: bc7cc075d8929e09eec2010d81be9ccc
  CE('bc7cc075d8929e09eec2010d81be9ccc',
    'O Brasil é considerado um país predominantemente urbano, com mais de 85% da população vivendo em áreas urbanas.',
    'C', 'Correto. O processo de urbanização acelerado entre 1950-1980 inverteu a situação: o Brasil passou de predominantemente rural para urbano. Atualmente, mais de 85% da população vive em cidades.'),
  CE('bc7cc075d8929e09eec2010d81be9ccc',
    'A hierarquia urbana brasileira classifica São Paulo, Rio de Janeiro e Brasília como metrópoles nacionais de acordo com o estudo REGIC do IBGE.',
    'C', 'Correto. O REGIC (Regiões de Influência das Cidades) do IBGE classifica essas três cidades no topo da hierarquia urbana, como metrópoles de maior influência.'),
  CE('bc7cc075d8929e09eec2010d81be9ccc',
    'O crescimento das metrópoles brasileiras reduziu o fluxo de veículos nas rodovias federais periféricas às grandes cidades.',
    'E', 'Errado. Ocorreu o contrário: o crescimento das metrópoles aumentou o fluxo de veículos nas rodovias de acesso, contribuindo para maior incidência de acidentes nas BRs próximas às grandes cidades.'),

  // ===================== INFORMÁTICA — Banco de Dados e Redes =====================
  // Banco de Dados: dd09f6d199c650d08b954da44b43a3a5 (topicId: 48afd1edfb920e43f57303a59bf47602)
  CE('48afd1edfb920e43f57303a59bf47602',
    'Um SGBD (Sistema de Gerenciamento de Banco de Dados) é responsável por organizar, armazenar e recuperar dados, garantindo integridade, segurança e controle de concorrência.',
    'C', 'Correto. O SGBD é o software intermediário entre o usuário/aplicação e os dados físicos, provendo todas essas funções essenciais.'),
  CE('48afd1edfb920e43f57303a59bf47602',
    'Em um modelo relacional, a chave primária (Primary Key) pode conter valores nulos para identificar registros que ainda não foram completamente preenchidos.',
    'E', 'Errado. Por definição, a chave primária NÃO pode conter valores nulos (NOT NULL). Sua função é identificar unicamente cada registro, o que exige que o valor seja sempre definido.'),
  CE('48afd1edfb920e43f57303a59bf47602',
    'O conceito de Big Data é caracterizado pelos 5 Vs: Volume, Velocidade, Variedade, Veracidade e Valor.',
    'C', 'Correto. Os 5 Vs do Big Data são: Volume (grande quantidade), Velocidade (geração e processamento rápidos), Variedade (diferentes formatos), Veracidade (confiabilidade) e Valor (utilidade dos dados).'),
  CE('48afd1edfb920e43f57303a59bf47602',
    'A linguagem SQL é exclusiva de bancos de dados relacionais e não pode ser utilizada em bancos NoSQL.',
    'E', 'Errado. Alguns bancos NoSQL suportam dialetos de SQL ou linguagens similares. Além disso, existem bancos NewSQL que combinam características relacionais e escala horizontal. A afirmação de exclusividade é incorreta.'),
  CE('48afd1edfb920e43f57303a59bf47602',
    'A normalização de dados em banco de dados relacionais tem o objetivo de eliminar redundâncias e inconsistências, organizando os dados em formas normais (1FN, 2FN, 3FN).',
    'C', 'Correto. A normalização é um processo formal que organiza os dados para reduzir redundância e dependências problemáticas, sendo as 3 primeiras formas normais as mais utilizadas em concursos.'),

  // Nuvem e Colaboração: de4afbc0ab433e1cff177744f104629a
  CE('de4afbc0ab433e1cff177744f104629a',
    'No modelo IaaS (Infrastructure as a Service) de computação em nuvem, o provedor gerencia apenas a infraestrutura física, e o cliente é responsável pelo sistema operacional, runtime e aplicação.',
    'C', 'Correto. No IaaS, o provedor fornece processamento, armazenamento e rede. O cliente controla o SO, middleware, runtime e aplicações instaladas.'),
  CE('de4afbc0ab433e1cff177744f104629a',
    'O Gmail e o Google Drive são exemplos de serviços do tipo PaaS (Platform as a Service).',
    'E', 'Errado. Gmail e Google Drive são exemplos de SaaS (Software as a Service), pois o usuário apenas utiliza a aplicação sem gerenciar infraestrutura ou plataforma de desenvolvimento.'),
  CE('de4afbc0ab433e1cff177744f104629a',
    'A computação em nuvem pública permite que múltiplas organizações compartilhem a mesma infraestrutura física do provedor, o que pode gerar preocupações com privacidade e vazamento de dados.',
    'C', 'Correto. Na nuvem pública, recursos são compartilhados em multi-tenant. Embora isolados logicamente, a arquitetura compartilhada pode suscitar preocupações de segurança e conformidade.'),
  CE('de4afbc0ab433e1cff177744f104629a',
    'O backup de dados offline, desconectado da rede, é considerada a medida mais eficaz de proteção contra ataques de ransomware.',
    'C', 'Correto. Como o ransomware criptografa dados acessíveis pela rede, backups offline (air-gapped) são imunes ao ataque e permitem a recuperação sem pagar resgate.'),
  CE('de4afbc0ab433e1cff177744f104629a',
    'Uma rede VPN (Virtual Private Network) garante completo anonimato ao usuário, tornando impossível a identificação de sua identidade por qualquer órgão de segurança pública.',
    'E', 'Errado. VPNs protegem a comunicação com criptografia e ocultam o IP real, mas não garantem anonimato absoluto. Provedores de VPN podem ser compelidos judicialmente a revelar logs de acesso.'),

  // ===================== LEGISLAÇÃO — Aprofundamento e Estatutos =====================
  // Aprofundamento de Normas: aa4249803f62a5b51b4ece1341d0247a
  CE('aa4249803f62a5b51b4ece1341d0247a',
    'Segundo a Súmula Vinculante 13 do STF, a nomeação de cônjuge para cargo em comissão na administração pública direta configura nepotismo vedado, ainda que o cargo seja de livre nomeação.',
    'C', 'Correto. A SV 13 proíbe o nepotismo, inclusive para cargos de livre nomeação (ad nutum), abrangendo cônjuge e parentes até 3º grau por consanguinidade ou afinidade.'),
  CE('aa4249803f62a5b51b4ece1341d0247a',
    'O servidor público estável goza de vitaliciedade, não podendo perder seu cargo em nenhuma hipótese após a aquisição da estabilidade.',
    'E', 'Errado. Estabilidade ≠ vitaliciedade. O servidor estável pode perder o cargo por: (1) sentença judicial transitada em julgado; (2) processo administrativo disciplinar; (3) avaliação periódica insatisfatória; (4) excesso de gasto com pessoal (art. 169 CF).'),
  CE('aa4249803f62a5b51b4ece1341d0247a',
    'A Lei de Improbidade Administrativa, com a redação dada pela Lei 14.230/2021, passou a exigir dolo específico em todos os atos de improbidade, extinguindo a modalidade culposa.',
    'C', 'Correto. A reforma de 2021 foi uma mudança fundamental: só há improbidade com dolo (intenção). Os atos meramente culposos (negligência, imprudência, imperícia) não configuram mais improbidade.'),
  CE('aa4249803f62a5b51b4ece1341d0247a',
    'Após a Lei 14.230/2021, qualquer cidadão pode ajuizar ação de improbidade administrativa para combater atos lesivos ao erário.',
    'E', 'Errado. Após a reforma, a legitimidade ativa para ajuizar ação de improbidade é EXCLUSIVA do Ministério Público. Antes, o ente público lesado também podia. O cidadão pode usar ação popular, que é diferente.'),
  CE('aa4249803f62a5b51b4ece1341d0247a',
    'O teto remuneratório constitucional para os servidores do Poder Executivo Federal é o subsídio dos Ministros do STF.',
    'C', 'Correto. O art. 37, XI, da CF/88 estabelece como teto remuneratório o subsídio dos Ministros do STF para todos os poderes da União, Estados e Municípios, com algumas diferenciações.'),

  // Noções de Estatutos: e1505ba830556815ab08a36279ff06a0
  CE('e1505ba830556815ab08a36279ff06a0',
    'Conforme a Lei 8.112/90, o servidor nomeado para cargo efetivo tem 30 dias para tomar posse, contados da publicação do ato de nomeação.',
    'C', 'Correto. O art. 13, §1° da Lei 8.112/90 determina que o prazo para tomar posse é de 30 dias da publicação da nomeação. Após isso, tem mais 15 dias para entrar em exercício.'),
  CE('e1505ba830556815ab08a36279ff06a0',
    'A acumulação de dois cargos públicos efetivos é vedada pela Constituição Federal em qualquer hipótese, independentemente da compatibilidade de horários.',
    'E', 'Errado. A CF/88 (art. 37, XVI) prevê exceções: (a) dois cargos de professor; (b) um cargo de professor + um técnico ou científico; (c) dois cargos de profissional de saúde regulamentados — sempre com compatibilidade de horários.'),
  CE('e1505ba830556815ab08a36279ff06a0',
    'O servidor público federal em estágio probatório adquire estabilidade após 3 anos de efetivo exercício no cargo.',
    'C', 'Correto. A EC 19/98 alterou o prazo de 2 para 3 anos de efetivo exercício para aquisição da estabilidade, devendo o servidor também ser aprovado em avaliação de desempenho.'),
  CE('e1505ba830556815ab08a36279ff06a0',
    'A remoção e a redistribuição são formas de provimento de cargo público previstas na Lei 8.112/90.',
    'E', 'Errado. Remoção e redistribuição são formas de MOVIMENTAÇÃO de servidores, não de provimento. As formas de provimento são: nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução.'),
  CE('e1505ba830556815ab08a36279ff06a0',
    'O servidor federal pode ser punido com demissão por abandono de cargo, configurado pela ausência injustificada por mais de 30 dias consecutivos.',
    'C', 'Correto. O art. 138 da Lei 8.112/90 define abandono de cargo como a ausência intencional do servidor por mais de 30 dias consecutivos, punível com demissão após processo administrativo disciplinar.'),

  // ===================== DIREITO PENAL — Crimes Contra a Adm. Pública =====================
  // afe8c20ab36694d096f965498fb662a5
  CE('afe8c20ab36694d096f965498fb662a5',
    'O crime de corrupção passiva é cometido pelo funcionário público que solicita ou recebe vantagem indevida para si ou para terceiro, em razão do cargo.',
    'C', 'Correto. O art. 317 do CP define corrupção passiva: o sujeito ativo é o funcionário público que solicita ou recebe vantagem indevida.'),
  CE('afe8c20ab36694d096f965498fb662a5',
    'O peculato-desvio ocorre quando o funcionário público se apropria de dinheiro ou bem público que estava sob sua guarda em razão do cargo, aplicando-o em proveito próprio.',
    'E', 'Errado. O peculato-desvio (art. 312, §1°) ocorre quando o servidor desvia em proveito de TERCEIRO. Quando é em proveito PRÓPRIO, é peculato-apropriação (art. 312, caput).'),
  CE('afe8c20ab36694d096f965498fb662a5',
    'A concussão é o crime praticado pelo funcionário público que exige vantagem indevida, em razão do cargo, diferenciando-se da corrupção passiva justamente pelo verbo "exigir" em vez de "solicitar".',
    'C', 'Correto. A concussão (art. 316) é a exigência coercitiva de vantagem. A corrupção passiva (art. 317) abrange solicitar, receber ou aceitar promessa. A diferença está na intensidade da pressão exercida.'),
  CE('afe8c20ab36694d096f965498fb662a5',
    'O crime de prevaricação exige dolo específico: o servidor deve retardar ou deixar de praticar ato de ofício visando satisfazer interesse pessoal.',
    'C', 'Correto. A prevaricação (art. 319) exige que o servidor aja (retardando, omitindo ou praticando ato contrário à lei) para satisfazer INTERESSE OU SENTIMENTO PESSOAL — esse elemento subjetivo especial do tipo é essencial.'),
  CE('afe8c20ab36694d096f965498fb662a5',
    'O policial rodoviário federal que recebe dinheiro de motorista para não registrar infração de trânsito pratica o crime de corrupção ativa.',
    'E', 'Errado. O policial que RECEBE a vantagem é o funcionário público — ele pratica CORRUPÇÃO PASSIVA. O motorista que OFERECE ou PROMETE a vantagem pratica corrupção ATIVA (art. 333 do CP).'),

  // ===================== DIREITO PROCESSUAL PENAL — Inquérito Policial =====================
  // 98a5cd7495b56976a00e9fafc550b042
  CE('98a5cd7495b56976a00e9fafc550b042',
    'O inquérito policial é um procedimento administrativo, de natureza inquisitória, sigiloso e presidido pela autoridade policial (delegado de polícia).',
    'C', 'Correto. O IP é administrativo (não jurisdicional), inquisitório (sem contraditório pleno), pode ser sigiloso, e é presidido pelo delegado de polícia.'),
  CE('98a5cd7495b56976a00e9fafc550b042',
    'O Ministério Público pode oferecer denúncia criminal diretamente, sem aguardar a conclusão do inquérito policial, desde que disponha de provas suficientes de autoria e materialidade.',
    'C', 'Correto. O IP é dispensável. Se o MP já possuir elementos suficientes (ex.: flagrante com auto circunstanciado), pode oferecer denúncia direto, independentemente de IP concluído.'),
  CE('98a5cd7495b56976a00e9fafc550b042',
    'O delegado de polícia pode determinar o arquivamento do inquérito policial quando convencer-se da ausência de elementos que justifiquem a continuidade das investigações.',
    'E', 'Errado. O arquivamento do IP é uma decisão do JUIZ, a requerimento do MP. O delegado não tem competência para arquivar — apenas relata e envia ao MP. Se o delegado achar que deve arquivar, encaminha ao MP, que decide se pede arquivamento ao juiz.'),
  CE('98a5cd7495b56976a00e9fafc550b042',
    'A prisão em flagrante, por si só, já instaura automaticamente o inquérito policial, dispensando portaria de instauração pelo delegado.',
    'C', 'Correto. O auto de prisão em flagrante (APF) tem o efeito de instaurar o IP automaticamente. Nos demais casos (notícia-crime, representação), o IP se instaura por portaria do delegado.'),
  CE('98a5cd7495b56976a00e9fafc550b042',
    'O advogado do investigado tem direito de acompanhar o cliente durante a oitiva no inquérito policial, podendo interferir livremente nas perguntas formuladas pelo delegado.',
    'E', 'Errado. O advogado tem direito de ACOMPANHAR o cliente na oitiva (Estatuto da OAB, art. 7°, XXI), mas NÃO pode interferir nas perguntas. Sua atuação é de observador, podendo anotar e orientar o cliente antes e depois da oitiva.'),

  // ===================== LÍNGUA PORTUGUESA — Classes de Palavras =====================
  // c95813348a4331dfa932d3bb78676146
  CE('c95813348a4331dfa932d3bb78676146',
    'Na frase "O audacioso policial agiu com coragem exemplar", os termos "audacioso" e "exemplar" são ambos adjetivos que caracterizam substantivos.',
    'C', 'Correto. "Audacioso" caracteriza "policial" (substantivo) e "exemplar" caracteriza "coragem" (substantivo). Ambos são adjetivos — um anteposto e outro posposto ao substantivo.'),
  CE('c95813348a4331dfa932d3bb78676146',
    'A palavra "amor" é um substantivo concreto, pois representa um sentimento real vivenciado pelas pessoas.',
    'E', 'Errado. "Amor" é substantivo ABSTRATO, pois não tem existência independente — só existe em relação a seres que o experimentam. É a existência dependente que define o abstrato.'),
  CE('c95813348a4331dfa932d3bb78676146',
    'Em "O carro cruzou rapidamente a esquina", a palavra "rapidamente" é um advérbio de modo que modifica o verbo "cruzou".',
    'C', 'Correto. Os advérbios de modo respondem à pergunta "como?". "Rapidamente" modifica o verbo "cruzou" indicando a maneira como a ação foi executada.'),
  CE('c95813348a4331dfa932d3bb78676146',
    'Substantivos coletivos referem-se a um grupo de seres da mesma espécie por meio de uma palavra no singular. "Frota", nesse sentido, é o coletivo de veículos.',
    'C', 'Correto. "Frota" é o coletivo de navios, embarcações ou veículos. Outros exemplos: "cardume" (peixes), "rebanho" (gado), "alcateia" (lobos).'),
  CE('c95813348a4331dfa932d3bb78676146',
    'A palavra "policial" na frase "O policial abordou o suspeito" exerce função de adjetivo.',
    'E', 'Errado. Nessa frase, "policial" é o núcleo do sujeito, exercendo função de SUBSTANTIVO. A mesma palavra pode ser adjetivo em contextos como "postura policial", mas na frase dada é o ser que pratica a ação.'),
  CE('c95813348a4331dfa932d3bb78676146',
    'Em "Não me apresse; farei tudo devagar", a palavra "devagar" é um advérbio de tempo.',
    'E', 'Errado. "Devagar" é advérbio de MODO, indicando a maneira de fazer. Advérbio de tempo responde "quando" (ex.: ontem, logo, já).'),

  // ===================== MATEMÁTICA — Operações Fundamentais =====================
  // 07bf6da5a8947fecce1af3859dc987e7
  CE('07bf6da5a8947fecce1af3859dc987e7',
    'O resultado de 2⁴ × 2³ é igual a 2¹².',
    'E', 'Errado. Na multiplicação de potências de mesma base, SOMAM-SE os expoentes: 2⁴ × 2³ = 2⁴⁺³ = 2⁷ = 128. Multiplicar os expoentes (2⁴×³ = 2¹²) seria a regra para potência de potência: (2⁴)³.'),
  CE('07bf6da5a8947fecce1af3859dc987e7',
    'O número 357 é divisível por 3, uma vez que a soma de seus algarismos (3+5+7=15) é divisível por 3.',
    'C', 'Correto. A regra de divisibilidade por 3: o número é divisível por 3 se a soma de seus algarismos for divisível por 3. 3+5+7=15, e 15÷3=5. Logo, 357 é divisível por 3.'),
  CE('07bf6da5a8947fecce1af3859dc987e7',
    'Uma turma de 30 candidatos tem as seguintes notas na simulação: 15 acertaram mais de 70% e 18 erraram mais de 40%. Nesse caso, é possível que nenhum candidato tenha acertado mais de 70% E errado mais de 40% simultaneamente.',
    'E', 'Errado. Pelo princípio da inclusão-exclusão: n(A∪B) = n(A)+n(B)-n(A∩B). Se A∪B ≤ 30 (total), então 15+18-n(A∩B) ≤ 30, logo n(A∩B) ≥ 3. Portanto, ao menos 3 candidatos atendem às duas condições.'),
  CE('07bf6da5a8947fecce1af3859dc987e7',
    'Se um produto custa R$ 80 e sofre um aumento de 25%, seu novo preço será R$ 100.',
    'C', 'Correto. 25% de R$ 80 = R$ 20. Novo preço = R$ 80 + R$ 20 = R$ 100. Ou diretamente: R$ 80 × 1,25 = R$ 100.'),
  CE('07bf6da5a8947fecce1af3859dc987e7',
    'O MDC (Máximo Divisor Comum) de 12 e 18 é 6.',
    'C', 'Correto. Divisores de 12: 1,2,3,4,6,12. Divisores de 18: 1,2,3,6,9,18. O maior divisor comum é 6. Ou pelo método da decomposição: 12=2²×3; 18=2×3². MDC = 2¹×3¹ = 6.'),

  // ===================== DIREITO ADMINISTRATIVO — Noções do Serviço Público =====================
  // 8eb8c1af6848f89aaae89ee450185087
  CE('8eb8c1af6848f89aaae89ee450185087',
    'Os serviços públicos essenciais, como fornecimento de água, gás e energia elétrica, podem ser delegados à iniciativa privada mediante concessão ou permissão, mas permanecem sob titularidade do Estado.',
    'C', 'Correto. O Estado pode delegar a prestação de serviços públicos, mas a titularidade (responsabilidade última) permanece sempre com o poder público.'),
  CE('8eb8c1af6848f89aaae89ee450185087',
    'As empresas públicas e as sociedades de economia mista integram a administração pública indireta e se submetem integralmente ao regime jurídico de direito público.',
    'E', 'Errado. Empresas públicas e SEMs integram a administração indireta, mas se submetem predominantemente ao regime de DIREITO PRIVADO (são entidades com personalidade jurídica de direito privado), embora com algumas derrogações de direito público.'),
  CE('8eb8c1af6848f89aaae89ee450185087',
    'As autarquias federais são criadas por lei específica e possuem personalidade jurídica de direito público, autonomia administrativa e patrimônio próprio.',
    'C', 'Correto. As autarquias são criadas por lei, têm PJ de direito público, autonomia administrativa e financeira. São exemplos: INSS, ANATEL, IBAMA, PRF (atenção: a PRF é órgão, não autarquia).'),
  CE('8eb8c1af6848f89aaae89ee450185087',
    'O concessionário de serviço público não responde objetivamente pelos danos causados aos usuários do serviço, pois é pessoa jurídica de direito privado.',
    'E', 'Errado. Conforme o §6° do art. 37 da CF/88, as pessoas jurídicas de direito PRIVADO prestadoras de serviços PÚBLICOS também respondem objetivamente pelos danos causados aos usuários — e até a terceiros conforme entendimento do STF.'),

  // ===================== DIREITO CONSTITUCIONAL — Organização do Estado =====================
  // ec5f3f8e0f5b23c63edbfff4bb4c263c
  CE('ec5f3f8e0f5b23c63edbfff4bb4c263c',
    'A Constituição Federal de 1988 adota modelo de Estado Federal, em que a União, os Estados, o DF e os Municípios são entes federativos dotados de autonomia política, administrativa e financeira.',
    'C', 'Correto. O Brasil é uma República Federativa composta pela União, 26 estados, o DF e 5.570 municípios, todos dotados de autonomia (não soberania, que é exclusiva do Estado Federal como um todo).'),
  CE('ec5f3f8e0f5b23c63edbfff4bb4c263c',
    'Compete privativamente à União legislar sobre direito civil, penal, processual, eleitoral e do trabalho.',
    'C', 'Correto. O art. 22 da CF/88 elenca as competências legislativas PRIVATIVAS da União, que incluem exatamente esses ramos do direito, entre outros.'),
  CE('ec5f3f8e0f5b23c63edbfff4bb4c263c',
    'Os Estados-membros têm competência concorrente com a União para legislar sobre direito penal.',
    'E', 'Errado. Direito penal é competência PRIVATIVA da União (art. 22, I, CF). A competência concorrente (art. 24) abrange matérias como direito tributário, financeiro, penitenciário, econômico e urbanístico, entre outros — mas não direito penal.'),
  CE('ec5f3f8e0f5b23c63edbfff4bb4c263c',
    'A intervenção federal nos Estados só pode ser decretada pelo Presidente da República após autorização prévia do Congresso Nacional.',
    'E', 'Errado. Em algumas hipóteses a intervenção federal DISPENSA autorização prévia do Congresso — que apenas aprecia a posteriori (no prazo de 24 horas). Nas hipóteses de descumprimento de ordem judicial, não há participação do Congresso.'),
  CE('ec5f3f8e0f5b23c63edbfff4bb4c263c',
    'O Distrito Federal não pode ser dividido em Municípios, conforme disposição expressa da Constituição Federal.',
    'C', 'Correto. O art. 32 da CF/88 proíbe expressamente que o DF seja dividido em municípios. O DF acumula as competências estaduais e municipais em seu território.'),

  // ===================== ÉTICA — Decreto 1.171/94 =====================
  // 50882ecd4d33aad05c544a2f63600c81
  CE('50882ecd4d33aad05c544a2f63600c81',
    'O servidor público que presenciar ato atentatório à moralidade pública tem o dever de denunciá-lo à repartição superior, podendo fazê-lo de forma anônima.',
    'C', 'Correto. O Decreto 1.171/94 prevê o dever de denúncia de irregularidades. No âmbito federal, a Lei 13.869/19 e os canais como CGU permitem denúncia anônima.'),
  CE('50882ecd4d33aad05c544a2f63600c81',
    'O servidor público pode usar bens, equipamentos e serviços públicos para atividades particulares fora do horário de expediente, desde que não prejudique o serviço.',
    'E', 'Errado. O uso de bens públicos para fins particulares é expressamente vedado, independentemente do horário. Constitui improbidade e violação ética mesmo fora do expediente.'),
  CE('50882ecd4d33aad05c544a2f63600c81',
    'A Comissão de Ética do órgão público pode aplicar ao servidor a penalidade de censura ética ou recomendar a instauração de processo administrativo disciplinar para infrações mais graves.',
    'C', 'Correto. A pena máxima da Comissão de Ética é a censura ética. Para infrações que configurem crime ou improbidade, ela recomenda o PAD à autoridade competente.'),
  CE('50882ecd4d33aad05c544a2f63600c81',
    'O exercício de atividade político-partidária fora do horário de trabalho pelo servidor público é absolutamente vedado pelo Decreto 1.171/94.',
    'E', 'Errado. A vedação é para usar o cargo, recursos públicos ou aliciar subordinados para atividades político-partidárias. A atividade político-partidária pessoal fora do horário, sem uso do cargo, é permitida.'),

  // ===================== ATUALIDADES — Mundo Contemporâneo =====================
  // 29e2782c3bfbf78f3c4b43156a838e56
  CE('29e2782c3bfbf78f3c4b43156a838e56',
    'A Inteligência Artificial generativa (como ChatGPT e Gemini) é uma tecnologia que cria conteúdo novo baseado em padrões aprendidos durante o treinamento, podendo gerar texto, imagem e áudio.',
    'C', 'Correto. A IA generativa é um campo recente que usa modelos de linguagem de grande escala (LLMs) e redes neurais para gerar conteúdo original a partir de prompts do usuário.'),
  CE('29e2782c3bfbf78f3c4b43156a838e56',
    'O aquecimento global é causado exclusivamente pela atividade humana, sendo consenso científico absoluto que causas naturais não têm nenhuma influência sobre o clima.',
    'E', 'Errado. O consenso científico é que a atividade humana é a principal causa do aquecimento global atual, mas as causas naturais (variações solares, vulcanismo) também influenciam. A afirmação de "exclusivamente" é incorreta.'),
  CE('29e2782c3bfbf78f3c4b43156a838e56',
    'A Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018) regula o tratamento de dados pessoais por pessoas naturais e jurídicas, públicas e privadas, com o objetivo de proteger os direitos fundamentais de liberdade e privacidade.',
    'C', 'Correto. A LGPD é abrangente e se aplica a qualquer operação de tratamento de dados pessoais realizada no Brasil ou que afete brasileiros, por entidades públicas ou privadas.'),

  // ===================== DIREITO PROCESSUAL PENAL / Processo e Poderes =====================
  // 0f2efd5ae6433a0d27315cf61da81ec7
  CE('0f2efd5ae6433a0d27315cf61da81ec7',
    'A progressividade da tributação é um princípio constitucional que permite ao Estado cobrar maiores alíquotas de tributos de quem tem maior capacidade contributiva.',
    'C', 'Correto. O princípio da progressividade decorre da capacidade contributiva (art. 145, §1° CF). É aplicado no IR, IPTU e ITR, entre outros, onde alíquotas crescem conforme a base de cálculo aumenta.'),
  CE('0f2efd5ae6433a0d27315cf61da81ec7',
    'A ordem social brasileira tem como base o primado do trabalho e como objetivo o bem-estar e a justiça sociais, conforme previsto na Constituição Federal.',
    'C', 'Correto. O art. 193 da CF/88 estabelece exatamente isso: "A ordem social tem como base o primado do trabalho, e como objetivo o bem-estar e a justiça sociais."'),
  CE('0f2efd5ae6433a0d27315cf61da81ec7',
    'O orçamento público brasileiro é composto pelo PPA, a LDO e a LOA, sendo a LOA a que autoriza a realização das despesas para o exercício financeiro.',
    'C', 'Correto. O PPA (4 anos) traça as diretrizes de longo prazo; a LDO (anual) estabelece metas e prioridades; a LOA (anual) autoriza especificamente as receitas e despesas para o exercício.'),

  // ===================== CONHECIMENTOS REGIONAIS — Aspectos Físicos =====================
  // dd763cd542ea0de986260bf0a52b6c61
  CE('dd763cd542ea0de986260bf0a52b6c61',
    'O Nordeste brasileiro é caracterizado pela semiaridez no semiárido, que abrange parte de todos os estados nordestinos, além do norte de Minas Gerais.',
    'C', 'Correto. O semiárido brasileiro inclui partes de todos os 9 estados nordestinos e o norte de Minas Gerais, totalizando mais de 1,1 milhão de km² e cerca de 28 milhões de habitantes.'),
  CE('dd763cd542ea0de986260bf0a52b6c61',
    'O Rio São Francisco, considerado o "rio da integração nacional", nasce em Minas Gerais e deságua no Oceano Atlântico, percorrendo estados do Nordeste.',
    'C', 'Correto. O Rio São Francisco nasce na Serra da Canastra (MG), percorre Bahia, Pernambuco, Alagoas e Sergipe, desaguando no Atlântico na divisa entre AL e SE. É fundamental para o semiárido.'),
  CE('dd763cd542ea0de986260bf0a52b6c61',
    'A Caatinga é o único bioma exclusivamente brasileiro e se encontra predominantemente nas regiões Sul e Sudeste do país.',
    'E', 'Errado. A Caatinga é exclusivamente brasileira, mas está localizada no NORDESTE e parte do norte de Minas Gerais. As regiões Sul e Sudeste têm Mata Atlântica, Pampas e Cerrado.'),

  // ===================== ADMINISTRAÇÃO PÚBLICA — Orçamento =====================
  // a4f7ddbd7f5776c54cee2ae055398f07
  CE('a4f7ddbd7f5776c54cee2ae055398f07',
    'O Plano Plurianual (PPA) estabelece de forma regionalizada as diretrizes, objetivos e metas da administração pública federal para um período de 4 anos.',
    'C', 'Correto. O PPA (art. 165, §1° CF) é o instrumento de planejamento de médio prazo do governo, com duração de 4 anos (começa no 2° ano de mandato presidencial e termina no 1° do mandato seguinte).'),
  CE('a4f7ddbd7f5776c54cee2ae055398f07',
    'A Lei de Responsabilidade Fiscal (LRF) proíbe a concessão ou ampliação de incentivo ou benefício de natureza tributária da qual decorra renúncia de receita nos últimos doze meses do mandato.',
    'C', 'Correto. A LRF (Lei Complementar 101/2000) proíbe renúncia de receita nos últimos 180 dias do mandato do titular do Executivo, como medida de responsabilidade fiscal na transição de governo.'),
  CE('a4f7ddbd7f5776c54cee2ae055398f07',
    'O princípio da universalidade orçamentária determina que todas as receitas e despesas devem constar do orçamento, vedada a existência de fundos paralelos ao orçamento público.',
    'C', 'Correto. O princípio da universalidade é um dos princípios orçamentários clássicos: o orçamento deve conter toda a receita e toda a despesa do Estado, evitando "orçamentos paralelos" ou "caixas dois".'),

  // ===================== SIMULADOS PRF — Acidentes e Trânsito =====================
  // 8d6fe2e2749a724822295576e2b429ed
  CE('8d6fe2e2749a724822295576e2b429ed',
    'Conforme o CTB, considera-se acidente de trânsito todo evento ocorrido na via pública, compreendendo vias terrestres abertas à circulação, que resulte em dano a pessoas ou bens.',
    'C', 'Correto. O CTB define acidente de trânsito de forma ampla, incluindo qualquer evento danoso ocorrido em via pública terrestre aberta à circulação.'),
  CE('8d6fe2e2749a724822295576e2b429ed',
    'Na análise de acidentes de trânsito, os fatores concorrentes são classificados em três grupos: fator humano, fator veículo e fator via/ambiente, sendo o fator humano responsável pela maioria dos acidentes.',
    'C', 'Correto. Estudos da engenharia de tráfego e do Denatran indicam que o fator humano (excesso de velocidade, embriaguez, distração, fadiga) é responsável por mais de 85% dos acidentes.'),
  CE('8d6fe2e2749a724822295576e2b429ed',
    'A PRF lavra o Boletim de Ocorrência de Acidente de Trânsito (BOAT) apenas quando há vítima fatal, sendo os acidentes com feridos graves registrados diretamente pelo SAMU.',
    'E', 'Errado. A PRF registra o BOAT em todos os tipos de acidentes ocorridos em rodovias federais que envolvam vítimas (fatais, feridos graves ou leves) e também acidentes com apenas danos materiais.'),
  CE('8d6fe2e2749a724822295576e2b429ed',
    'A ingestão de álcool afeta principalmente os reflexos e a coordenação motora do condutor, aumentando o tempo de reação e reduzindo sua capacidade de perceber riscos.',
    'C', 'Correto. O álcool é um depressor do SNC que afeta o julgamento, os reflexos e a coordenação, aumentando o tempo de reação e diminuindo a capacidade de avaliar distâncias e velocidades.'),

  // ===================== LEGISLAÇÃO PRF — Atividade Policial =====================
  // 4f5be407433ccc9bc18c823bcd778d51
  CE('4f5be407433ccc9bc18c823bcd778d51',
    'A PRF tem competência para fiscalizar e regular o trânsito e o transporte nas rodovias e estradas federais, podendo ainda realizar atividades de patrulhamento ostensivo.',
    'C', 'Correto. A Lei 9.503/97 (CTB) e a Lei 9.654/98 (Carreira da PRF) estabelecem essas atribuições. A PRF é polícia ostensiva de trânsito nas rodovias federais.'),
  CE('4f5be407433ccc9bc18c823bcd778d51',
    'O policial rodoviário federal, ao realizar abordagem de veículo, pode determinar a busca pessoal no motorista sem a existência de fundada suspeita, apenas como medida preventiva de rotina.',
    'E', 'Errado. A busca pessoal exige FUNDADA SUSPEITA (art. 244 do CPP) de que a pessoa esteja em posse de arma proibida ou objeto relacionado a crime. Sem essa justificativa, a busca pessoal é ilegal.'),
  CE('4f5be407433ccc9bc18c823bcd778d51',
    'A PRF, no exercício de suas funções, pode prender em flagrante qualquer pessoa que esteja cometendo crime, mesmo fora das rodovias federais, pois o dever de prender em flagrante é universal a qualquer policial.',
    'C', 'Correto. O art. 301 do CPP determina que qualquer do POVO pode prender em flagrante e as AUTORIDADES POLICIAIS têm o dever de fazê-lo. A competência territorial de uma polícia não limita o dever de prender em flagrante.'),
];

async function main() {
  try {
    await client.connect();
    console.log(`Inserting ${questions.length} new questions...`);
    let count = 0;
    for (const q of questions) {
      await client.query(`
        INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation, concurso, ano)
        VALUES ($1,$2,$3,$4,$5::jsonb,$6,$7,$8,$9,$10)
        ON CONFLICT (id) DO NOTHING
      `, [q.id, q.topicId, q.banca, q.statement, q.options, q.correctAnswer, q.type, q.explanation, q.concurso, q.ano]);
      count++;
    }
    console.log(`\n✅ Done! ${count} questions inserted.`);
  } catch(err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
main();
