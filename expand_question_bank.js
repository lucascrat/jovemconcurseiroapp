const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

// Topic ID mapping from list_topics_for_mapping.js
const TOPICS = {
  COMPREENSAO_TEXTOS: '813e9365f9084f8ac4d23c4745bae763',
  COMPREENSAO_AVANCADA: '006f40747a2c03877983d9598061d736',
  SINTAXE_AVANCADA: '9112e0a3573ceee09dc6069dfeff4bde',
  SINTAXE_VIRGULA: '2cb3a207af5a13e2c7139925d129eff3',
  MORFOLOGIA: '549114ea9fb96817701e99a4a59e9caa',
  CLASSES_PALAVRAS: 'c95813348a4331dfa932d3bb78676146',
  SINTAXE_ORACAO: '1e547d911d3bf5fca8a1469c73e5e29e',
  ESTILISTCA_SEMANTICA: '20f951fa99573c5988a085492e002a4b',
  OPERACOES: '07bf6da5a8947fecce1af3859dc987e7',
  PROPORCAO: 'b675c3b4a7fa73be6a73c0ad1bf6a774',
  LOGICA_PROPOSICIONAL: '8b954c84df27fcd670068cba60df2caa',
  LOGICA_AVANCADA: '63f1575ade71e34619da657a69928f17',
  CONJUNTOS_LOGICA: '7860d847e4f9eee6d258b31f8410eb50',
  MAT_APLICADA: '9b93f57627d5af1a848e8045abefb160',
  COMBINATORIA: 'adf2280e1788c998b22ddedbf36d50d6',
  DIREITOS_GARANTIAS: 'df991c79b48abbb03a90544fdbd12e19',
  ORGANIZACAO_ESTADO: 'ec5f3f8e0f5b23c63edbfff4bb4c263c',
  REMEDIOS: 'e9810751cbbd584816eeb73ac82f9216',
  PROCESSO_PODERES: '8e2daa3cbacbbaa4f64c1fa64ca3772c',
  CONTROLE_CONSTITUCIONALIDADE: 'f50822bcb0e6d2b96670bccba763ae89',
  PRINCIPIOS_ORGANIZACAO: 'd1cd947605d78d49de18c760aa17fb91',
  ATOS_ADM: '4eab7eb244da26781e9ad52b9ad3fc96',
  PODERES_ADM: '07ea835890bea9bbaef28f62aa427e67',
  CONTROLE_RESP: '784a0a6d3b5e0d23b495c726b781a62a',
  LICITACOES: '815e957556c01ef25fc20709b7a82658',
  TEORIA_CRIME: '5de5ce69fe8fc0d3152526794e096c22',
  CRIMES_ADM: 'afe8c20ab36694d096f965498fb662a5',
  INQUERITO: '98a5cd7495b56976a00e9fafc550b042',
  ETICA_CIDADANIA: '61b572fba0bc24696dbd20637db2d6b2',
  DECRETO_1171: '4d75ab42c5f8f9e40c94d748f465ddee',
  ESTATUTO_8112: '08e9af99487379678854406d84f4ebc2',
  IMPROBIDADE: '390841efd085f456931b12d4c2d974a2',
  CONCEITOS_TI: 'd03e1c8cc27caf211a2b80d0949cca9e',
  SEGURANCA_INFO: '35c29f5efc8808355c46191ebbf65ccb',
  APLICATIVOS: 'a28a6477137a1a6573a07b9eaca1269f',
  CINEMATICA: '84db243411bba88b589da2f34691853e',
  DINAMICA_NEWTON: '481ed8e71e3eeddce171c4081e415f10',
  LEGISLACAO_TRANSITO: '0317b06d661a7bf2b5e24a119fbb06f0',
  ACIDENTES_TRANSITO: '8d6fe2e2749a724822295576e2b429ed',
  DIREITOS_HUMANOS: '0ded5a4e61734ac61fcf49c04b8f16d4',
  CTB: '97c2e48a226cc8657f57bb96934b6b86',
};

const newQuestions = [

  // ==================== LÍNGUA PORTUGUESA ====================
  {
    t: TOPICS.COMPREENSAO_AVANCADA, b: 'Cebraspe',
    s: 'Em relação ao uso dos princípios de coesão textual, afirma-se: o pronome "se" pode ser considerado um mecanismo de coesão por substituição pronominal.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. O pronome "se" atua como índice de indeterminação do sujeito ou pronome reflexivo/apassivador, funcionando em alguns contextos como mecanismo de coesão referencial por substituição.'
  },
  {
    t: TOPICS.SINTAXE_AVANCADA, b: 'FGV',
    s: 'Em "O candidato que estudou foi aprovado", a oração "que estudou" é classificada como subordinada adjetiva restritiva.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. A oração "que estudou" restringe, limita o referente "candidato", sendo portanto adjetiva restritiva (sem vírgula).'
  },
  {
    t: TOPICS.MORFOLOGIA, b: 'Cebraspe',
    s: 'A palavra "inutilmente" é formada pelo processo de derivação sufixal, sendo o sufixo "-mente" responsável por transformar o adjetivo em advérbio.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. "Inutilmente" = inútil (adjetivo) + "-mente" (sufixo adverbial). O processo é a derivação sufixal.'
  },
  {
    t: TOPICS.SINTAXE_VIRGULA, b: 'FGV',
    s: 'O uso da vírgula é obrigatório para separar o adjunto adverbial que vem deslocado para antes do verbo ou no meio da oração.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. Quando o adjunto adverbial é deslocado de sua posição natural (após o verbo), geralmente pede vírgula para indicar o deslocamento.'
  },
  {
    t: TOPICS.ESTILISTCA_SEMANTICA, b: 'Cebraspe',
    s: 'A figura de linguagem presente em "Minha alma é uma orquestra oculta" é a comparação.',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. Trata-se de uma METÁFORA (identificação direta), e não comparação. A comparação usaria "como" ou "tal qual".'
  },
  {
    t: TOPICS.COMPREENSAO_TEXTOS, b: 'Cebraspe',
    s: 'A crase é obrigatória na frase: "Refiro-me à cidade de São Paulo".',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. "à cidade" = preposição "a" (exigida por "referir-se a") + artigo "a" (que acompanha "cidade"). A crase é obrigatória.'
  },
  {
    t: TOPICS.SINTAXE_ORACAO, b: 'FCC',
    s: 'Em "Embora chovesse, o jogo continuou", a oração sublinhada tem valor semântico concessivo.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. "Embora" é conjunção coordenativa de valor concessivo. A chuva não impediu o jogo — há uma concessão à expectativa.'
  },

  // ==================== RACIOCÍNIO LÓGICO E MATEMÁTICA ====================
  {
    t: TOPICS.LOGICA_PROPOSICIONAL, b: 'Cebraspe',
    s: 'A proposição "Se chove, então a rua está molhada" é falsa apenas quando a rua está molhada e não chove.',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. O condicional (P→Q) é FALSO apenas quando o antecedente (P) é verdadeiro e o consequente (Q) é falso. Ou seja, quando chove (V) e a rua NÃO está molhada (F).'
  },
  {
    t: TOPICS.LOGICA_AVANCADA, b: 'Cebraspe',
    s: 'Dadas as premissas "Todo policial é honesto" e "João é policial", conclui-se que "João é honesto". Esse raciocínio é válido.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. Trata-se de um silogismo válido (modus ponens categórico). A conclusão decorre necessariamente das premissas.'
  },
  {
    t: TOPICS.PROPORCAO, b: 'Cebraspe',
    s: 'Uma equipe de 4 pedreiros constrói um muro em 6 dias. Trabalhando 8 horas por dia, em quantos dias 3 pedreiros construiriam o mesmo muro trabalhando 8 horas por dia? Resposta: 8 dias.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. 4 × 6 = 24 homens×dia. 24 ÷ 3 = 8 dias. Proporção inversa entre nº de pedreiros e nº de dias.'
  },
  {
    t: TOPICS.MAT_APLICADA, b: 'FGV',
    s: 'Uma mercadoria foi vendida por R$ 360,00 com lucro de 20% sobre o custo. O custo da mercadoria era R$ 300,00.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. Custo × 1,20 = 360. Custo = 360 / 1,20 = 300. Correto.'
  },
  {
    t: TOPICS.COMBINATORIA, b: 'Cebraspe',
    s: 'O número de anagramas da palavra "AMOR" é igual a 24.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. "AMOR" tem 4 letras distintas. Anagramas = 4! = 4 × 3 × 2 × 1 = 24.'
  },
  {
    t: TOPICS.CONJUNTOS_LOGICA, b: 'Cebraspe',
    s: 'Em lógica, a negação de "Todos os alunos passaram" é "Nenhum aluno passou".',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. A negação de "Todos os A são B" é "Existe pelo menos um A que não é B" (ou seja: "Algum aluno não passou").'
  },

  // ==================== DIREITO CONSTITUCIONAL ====================
  {
    t: TOPICS.DIREITOS_GARANTIAS, b: 'Cebraspe',
    s: 'A CF/88 estabelece que ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. Art. 5º, LXI da CF/88. É uma das garantias fundamentais de liberdade — a inviolabilidade do direito à liberdade de locomoção.'
  },
  {
    t: TOPICS.DIREITOS_GARANTIAS, b: 'Cebraspe',
    s: 'Segundo a CF/88, a propriedade intelectual é um direito exclusivo do autor com caráter absoluto, não estando sujeita a limitações.',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. Nenhum direito fundamental é absoluto, incluindo a propriedade intelectual. Existem limitações legais como o prazo de proteção e o uso para fins educacionais.'
  },
  {
    t: TOPICS.ORGANIZACAO_ESTADO, b: 'FCC',
    s: 'A República Federativa do Brasil é formada pela união indissolúvel dos Estados, Municípios e Distrito Federal, sendo vedada qualquer forma de intervenção federal nos Municípios.',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. O art. 34 da CF/88 prevê hipóteses de intervenção federal nos Estados e no DF. A CF/88 não prevê intervenção federal direta nos municípios, exceto nos municípios localizados em Território Federal.'
  },
  {
    t: TOPICS.REMEDIOS, b: 'Cebraspe',
    s: 'O mandado de segurança pode ser impetrado por pessoa física ou jurídica para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. Art. 5º, LXIX da CF/88. O MS protege direito líquido e certo ameaçado por ato ilegal ou abuso de poder, quando não cabível HC ou HD.'
  },
  {
    t: TOPICS.CONTROLE_CONSTITUCIONALIDADE, b: 'Cebraspe',
    s: 'A Ação Direta de Inconstitucionalidade (ADI) pode ser proposta por qualquer cidadão brasileiro que se sinta prejudicado por lei ou ato normativo federal ou estadual.',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. A legitimidade para propor ADI é restrita aos legitimados do art. 103 da CF/88 (Presidente, Mesa do Congresso, PGR, partidos, etc.). Cidadãos comuns não possuem legitimidade.'
  },

  // ==================== DIREITO ADMINISTRATIVO ====================
  {
    t: TOPICS.ATOS_ADM, b: 'Cebraspe',
    s: 'A revogação de ato administrativo produz efeitos ex tunc, ou seja, retroage à data da prática do ato.',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. A REVOGAÇÃO produz efeitos EX NUNC (a partir de agora), sem retroatividade. Quem produz efeitos ex tunc é a ANULAÇÃO, pois o ato era ilegal desde a origem.'
  },
  {
    t: TOPICS.PODERES_ADM, b: 'Cebraspe',
    s: 'O poder hierárquico autoriza a administração pública a expedir ordens gerais e abstratas, sendo, por isso, fonte de produção normativa primária.',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. O poder NORMATIVO/REGULAMENTAR é responsável por expedir normas gerais e abstratas. O poder HIERÁRQUICO diz respeito à relação de subordinação entre órgãos e agentes internos.'
  },
  {
    t: TOPICS.CONTROLE_RESP, b: 'FCC',
    s: 'A responsabilidade civil do Estado é objetiva na modalidade risco administrativo, dispensando a vítima de provar a culpa do agente público.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. Art. 37, §6º da CF/88. Basta à vítima comprovar o dano e o nexo causal entre o dano e a ação do agente público para que o Estado responda objetivamente.'
  },
  {
    t: TOPICS.LICITACOES, b: 'Cebraspe',
    s: 'A licitação na modalidade pregão é utilizada exclusivamente para a aquisição de bens e serviços comuns, cujos padrões de desempenho e qualidade possam ser objetivamente definidos.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. Conforme a Lei do Pregão (Lei 10.520/02), o pregão é a modalidade licitatória para bens e serviços comuns, definidos no edital com especificações usuais de mercado.'
  },
  {
    t: TOPICS.PRINCIPIOS_ORGANIZACAO, b: 'Cebraspe',
    s: 'O princípio da impessoalidade determina que a administração pública trate todos os administrados sem distinções que não estejam previstas em lei.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. O princípio da impessoalidade é um dos pilares do art. 37 da CF/88 (LIMPE), exigindo isonomia no tratamento dos administrados.'
  },

  // ==================== DIREITO PENAL ====================
  {
    t: TOPICS.TEORIA_CRIME, b: 'Cebraspe',
    s: 'O dolo eventual e a culpa consciente diferem porque, no dolo eventual, o agente assume o risco de produzir o resultado, ao passo que na culpa consciente ele acredita que o resultado não vai ocorrer.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. É a distinção clássica entre dolo eventual (consciência + assunção do risco) e culpa consciente (consciência + crença de que evitará o resultado).'
  },
  {
    t: TOPICS.TEORIA_CRIME, b: 'FGV',
    s: 'A legitima defesa e o estado de necessidade são causas de exclusão da culpabilidade, e não da antijuridicidade.',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. Legítima defesa e estado de necessidade são causas de EXCLUSÃO DA ANTIJURIDICIDADE (ilicitude), também chamadas de excludentes de ilicitude ou causas justificantes.'
  },
  {
    t: TOPICS.CRIMES_ADM, b: 'Cebraspe',
    s: 'O crime de concussão (art. 316 do CP) ocorre quando o funcionário público exige, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, vantagem indevida.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. O art. 316 do Código Penal define concussão como "exigir" vantagem indevida. Difere da corrupção passiva (art. 317), na qual o funcionário "solicita ou recebe" vantagem.'
  },
  {
    t: TOPICS.INQUERITO, b: 'Cebraspe',
    s: 'O inquérito policial é um procedimento administrativo, inquisitório e sigiloso, destinado a apurar a autoria e materialidade de infração penal.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. O IP tem caráter administrativo (não jurisdicional), inquisitório (inexiste contraditório pleno) e pode ser decretado seu sigilo pela autoridade policial.'
  },

  // ==================== ÉTICA ====================
  {
    t: TOPICS.ETICA_CIDADANIA, b: 'Cebraspe',
    s: 'O Decreto 1.171/94 estabelece que os agentes públicos devem agir com lealdade às instituições constitucionais e às leis, mesmo quando isso possa ser contrário a interesses pessoais.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. O Código de Ética dos Servidores Públicos Federais (Decreto 1.171/94) impõe lealdade às instituições e à lei acima dos interesses pessoais.'
  },
  {
    t: TOPICS.DECRETO_1171, b: 'Cebraspe',
    s: 'Segundo o Decreto 1.171/94, é vedado ao servidor público utilizar pessoal ou recursos materiais da repartição em serviços ou atividades particulares.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. Essa vedação está expressa no Decreto 1.171/94 como conduta vedada ao servidor, por caracterizar uso de bem público em benefício privado.'
  },

  // ==================== LEGISLAÇÃO DO SERVIDOR ====================
  {
    t: TOPICS.ESTATUTO_8112, b: 'Cebraspe',
    s: 'Conforme a Lei 8.112/90, considera-se estável o servidor nomeado para cargo de provimento efetivo após 3 (três) anos de efetivo exercício.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. Após a EC 19/98, o prazo para aquisição de estabilidade foi ampliado de 2 para 3 anos de efetivo exercício (art. 41 da CF e art. 21 da Lei 8.112/90).'
  },
  {
    t: TOPICS.ESTATUTO_8112, b: 'FCC',
    s: 'De acordo com a Lei 8.112/90, a remoção é modalidade de provimento de cargo público.',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. A REMOÇÃO é um deslocamento do servidor dentro do mesmo quadro, sem mudança de cargo. As modalidades de PROVIMENTO são: nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução.'
  },
  {
    t: TOPICS.IMPROBIDADE, b: 'Cebraspe',
    s: 'A Lei 8.429/92 (Lei de Improbidade Administrativa) exige comprovação de dolo para configurar os atos que causam lesão ao erário.',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. Após a reforma promovida pela Lei 14.230/21, TODOS os atos de improbidade administrativa passaram a exigir dolo específico. Antes da reforma, os atos do art. 10 (lesão ao erário) admitiam culpa.'
  },

  // ==================== INFORMÁTICA ====================
  {
    t: TOPICS.SEGURANCA_INFO, b: 'Cebraspe',
    s: 'Um ataque de phishing é caracterizado pelo envio de mensagens fraudulentas para enganar o usuário e obter informações confidenciais, como senhas e dados bancários.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. O phishing (pescaria) é uma técnica de engenharia social que usa e-mails, SMS ou sites falsos para enganar vítimas e roubar credenciais.'
  },
  {
    t: TOPICS.SEGURANCA_INFO, b: 'Cebraspe',
    s: 'O protocolo HTTPS garante a autenticidade, integridade e confidencialidade dos dados trafegados entre o navegador e o servidor.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. O HTTPS usa criptografia TLS/SSL, garantindo confidencialidade (C), integridade (I) e autenticidade (A) — os três pilares da segurança da informação.'
  },
  {
    t: TOPICS.APLICATIVOS, b: 'FCC',
    s: 'No Microsoft Word, o atalho CTRL+Z desfaz a última ação realizada no documento.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. CTRL+Z é o atalho universal para "Desfazer" nas suítes de escritório modernas, incluindo o Microsoft Word e o LibreOffice Writer.'
  },
  {
    t: TOPICS.CONCEITOS_TI, b: 'Cebraspe',
    s: 'A computação em nuvem (cloud computing) permite o acesso remoto a recursos computacionais como servidores, armazenamento e aplicativos pela internet, com pagamento conforme o uso.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. Essa é a definição precisa de cloud computing conforme o NIST: acesso remoto, sob demanda, a um conjunto de recursos computacionais configuráveis.'
  },

  // ==================== FÍSICA (PRF) ====================
  {
    t: TOPICS.CINEMATICA, b: 'Cebraspe',
    s: 'Um veículo percorre 120 km em 1,5 hora. Sua velocidade média é de 80 km/h.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. VM = ΔS / Δt = 120 / 1,5 = 80 km/h.'
  },
  {
    t: TOPICS.CINEMATICA, b: 'Cebraspe',
    s: 'Em um movimento uniformemente retardado, a aceleração escalar tem o mesmo sinal da velocidade escalar.',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. No MU**R**etardado, a aceleração tem sinal CONTRÁRIO ao da velocidade — é justamente isso que freia o movimento.'
  },
  {
    t: TOPICS.DINAMICA_NEWTON, b: 'Cebraspe',
    s: 'A força de atrito estático é sempre maior que a força de atrito cinético entre as mesmas superfícies.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. O coeficiente de atrito estático (μe) é maior que o coeficiente de atrito cinético (μc) para o mesmo par de materiais.'
  },

  // ==================== LEGISLAÇÃO DE TRÂNSITO ====================
  {
    t: TOPICS.CTB, b: 'Cebraspe',
    s: 'Conforme o CTB, a CNH de categoria "B" habilita o condutor a operar veículos de passeio com até 8 lugares, com lotação de até 3.500 kg de massa total.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. A categoria B habilita para automóveis, camionetes e utilitários com até 3.500 kg PBT e capacidade para até 8 passageiros (art. 143 do CTB).'
  },
  {
    t: TOPICS.CTB, b: 'Cebraspe',
    s: 'O condutor que se negar a realizar o teste do bafômetro não pode ser autuado por infração ao CTB, pois ninguém é obrigado a produzir prova contra si mesmo.',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. A recusa ao teste é uma infração autônoma (art. 165-A do CTB), com as mesmas penalidades da embriaguez (multa gravíssima, suspensão e retenção do veículo). O STJ pacificou entendimento de que a recusa é infração independente.'
  },
  {
    t: TOPICS.LEGISLACAO_TRANSITO, b: 'Cebraspe',
    s: 'O DENATRAN (atual SENATRAN) é o órgão máximo executivo de trânsito da União, responsável por coordenar o Sistema Nacional de Trânsito.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. Conforme o art. 19 do CTB, o órgão máximo executivo do SNT é a Secretaria Nacional de Trânsito (SENATRAN), com função normativa, executiva, de planejamento e de coordenação.'
  },
  {
    t: TOPICS.ACIDENTES_TRANSITO, b: 'Cebraspe',
    s: 'A velocidade é a principal causa isolada de mortes em acidentes de trânsito no Brasil, sendo a causa de cerca de 40% dos óbitos em rodovias federais.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. Dados da PRF e do Observatório Nacional de Segurança Viária apontam o excesso de velocidade como o principal fator de risco em rodovias federais.'
  },

  // ==================== DIREITOS HUMANOS ====================
  {
    t: TOPICS.DIREITOS_HUMANOS, b: 'Cebraspe',
    s: 'A Declaração Universal dos Direitos Humanos (DUDH) de 1948 é um tratado internacional vinculante, que obriga juridicamente todos os Estados membros da ONU.',
    o: {a:'Certo', b:'Errado'}, c: 'b',
    e: 'Errado. A DUDH de 1948 é uma DECLARAÇÃO, não um tratado vinculante — trata-se de uma resolução da ONU com valor moral e político, mas sem força jurídica coercitiva direta.'
  },
  {
    t: TOPICS.DIREITOS_HUMANOS, b: 'Cebraspe',
    s: 'Segundo a DUDH, todo ser humano tem o direito de, em plena igualdade, ser ouvido publicamente e com equidade por um tribunal independente e imparcial.',
    o: {a:'Certo', b:'Errado'}, c: 'a',
    e: 'Certo. Art. 10 da DUDH: "Todo ser humano tem o direito em plena igualdade de ser ouvido publicamente e com justo julgamento por um tribunal independente e imparcial..."'
  },
];

async function main() {
  try {
    await client.connect();
    console.log(`Ingesting ${newQuestions.length} new questions...`);

    let count = 0;
    for (const q of newQuestions) {
      const id = crypto.randomBytes(16).toString('hex');
      await client.query(`
        INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `, [id, q.t, q.b, q.s, JSON.stringify(q.o), q.c, 'multiple-choice', q.e]);
      count++;
    }

    console.log(`Done! ${count} questions inserted.`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
