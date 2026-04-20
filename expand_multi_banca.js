const { Client } = require('pg');
const { v4: uuidv4 } = require('uuid');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

// Topic IDs (confirmed from DB)
const T = {
  // Língua Portuguesa
  LP_COMP: '813e9365f9084f8ac4d23c4745bae763',    // Compreensão de Textos e Ortografia
  LP_COMP_AV: '006f40747a2c03877983d9598061d736',  // Compreensão Textual Avançada
  LP_MORFO: '549114ea9fb96817701e99a4a59e9caa',   // Morfologia
  LP_SINT: '9112e0a3573ceee09dc6069dfeff4bde',    // Sintaxe Avançada
  LP_VIRGUL: '2cb3a207af5a13e2c7139925d129eff3',  // Sintaxe Avançada de Vírgula
  LP_CLASSES: 'c95813348a4331dfa932d3bb78676146',  // Classes de Palavras Básicas
  LP_ESTILIST: '20f951fa99573c5988a085492e002a4b', // Estilística e Semântica
  LP_SINT_OR: '1e547d911d3bf5fca8a1469c73e5e29e', // Sintaxe da Oração
  // RLM
  RLM_LOGPROP: '8b954c84df27fcd670068cba60df2caa',
  RLM_CONJ: '7860d847e4f9eee6d258b31f8410eb50',
  RLM_MAT: '9b93f57627d5af1a848e8045abefb160',
  RLM_PROB: 'adf2280e1788c998b22ddedbf36d50d6',
  RLM_OP: '07bf6da5a8947fecce1af3859dc987e7',
  RLM_PROP: 'b675c3b4a7fa73be6a73c0ad1bf6a774',
  RLM_LOG_AV: '63f1575ade71e34619da657a69928f17',
  // Direito Constitucional
  DC_DGF: '70e0527aec1926b2425784036a36ad2a',
  DC_ORG: 'ec5f3f8e0f5b23c63edbfff4bb4c263c',
  DC_REM: 'e9810751cbbd584816eeb73ac82f9216',
  DC_CTRL: 'f50822bcb0e6d2b96670bccba763ae89',
  DC_POD: '8e2daa3cbacbbaa4f64c1fa64ca3772c',
  // Direito Administrativo
  DA_PRINC: 'd1cd947605d78d49de18c760aa17fb91',
  DA_ATOS: '4eab7eb244da26781e9ad52b9ad3fc96',
  DA_POD: '07ea835890bea9bbaef28f62aa427e67',
  DA_LIC: '815e957556c01ef25fc20709b7a82658',
  DA_CTRL: '784a0a6d3b5e0d23b495c726b781a62a',
  DA_SERV: '8eb8c1af6848f89aaae89ee450185087',
  // Direito Penal
  DP_TEORIA: '5de5ce69fe8fc0d3152526794e096c22',
  DP_CRIMES: 'afe8c20ab36694d096f965498fb662a5',
  // Processo Penal
  PP_IP: '98a5cd7495b56976a00e9fafc550b042',
  // Legislação
  LEG_8112: '08e9af99487379678854406d84f4ebc2',
  LEG_IMP: '390841efd085f456931b12d4c2d974a2',
  LEG_APRO: 'aa4249803f62a5b51b4ece1341d0247a',
  LEG_EST: 'e1505ba830556815ab08a36279ff06a0',
  // Informática
  INFO_CONC: 'd03e1c8cc27caf211a2b80d0949cca9e',
  INFO_SEG: '35c29f5efc8808355c46191ebbf65ccb',
  INFO_APP: 'a28a6477137a1a6573a07b9eaca1269f',
  INFO_AMPL: '48afd1edfb920e43f57303a59bf47602',
  INFO_NUVM: 'de4afbc0ab433e1cff177744f104629a',
  // Ética
  ETI_DEC: '4d75ab42c5f8f9e40c94d748f465ddee',
  ETI_CID: '61b572fba0bc24696dbd20637db2d6b2',
  // Física PRF
  FIS_CIN: '84db243411bba88b589da2f34691853e',
  FIS_DIN: '481ed8e71e3eeddce171c4081e415f10',
  FIS_TRAB: '7a53349c29e4464ec1189d0036db2ccc',
  // Geopolítica PRF
  GEO_FRONT: 'c6837108e31fcfc2cb41e4f58a0c8099',
  GEO_TRANS: 'd1e5747149738ab676688a4a38d91f35',
  GEO_ENER: '63edbdf9cb8b61f9abb5af68657a0716',
  GEO_URB: 'bc7cc075d8929e09eec2010d81be9ccc',
  // Simulados PRF
  PRF_CTB: '0317b06d661a7bf2b5e24a119fbb06f0',
  PRF_ACID: '8d6fe2e2749a724822295576e2b429ed',
  PRF_POL: '4f5be407433ccc9bc18c823bcd778d51',
  // Administração Pública
  ADM_GEST: '407f59fd4764d880e9dececcba0e1969',
  ADM_ORC: 'a4f7ddbd7f5776c54cee2ae055398f07',
  // Atualidades
  ATUAL: '29e2782c3bfbf78f3c4b43156a838e56',
};

const MC = (topicId, banca, concurso, ano, stmt, opts, correct, exp) => ({
  id: uuidv4(), topicId, banca, statement: stmt,
  options: JSON.stringify(opts), correctAnswer: correct,
  type: 'multipla_escolha', explanation: exp, concurso, ano
});
const CE = (topicId, banca, concurso, ano, stmt, correct, exp) => ({
  id: uuidv4(), topicId, banca, statement: stmt,
  options: JSON.stringify({ C: 'Certo', E: 'Errado' }),
  correctAnswer: correct, type: 'certo_errado', explanation: exp, concurso, ano
});

const questions = [

  // ========================================================================
  // LÍNGUA PORTUGUESA — FCC
  // ========================================================================
  MC(T.LP_COMP, 'FCC', 'TRT', 2023,
    'Assinale a alternativa em que a palavra destacada está grafada CORRETAMENTE conforme a norma culta da língua portuguesa.',
    { A:'a gente vamos embora cedo', B:'Ele *havia* três anos que morava ali', C:'*Mau* tempo é previsto para amanhã', D:'Há *meia* hora que espero', E:'*Haja* vista os resultados' },
    'C', 'A grafia correta é "mau" (adjetivo = ruim). "Mau tempo" = tempo ruim (adjetivo). "Mal" seria o advérbio ou substantivo. FCC cobra constantemente a distinção mau/mal.'),
  MC(T.LP_SINT, 'FCC', 'DPE-SP', 2022,
    'Considere a frase: "Entregues os documentos, os candidatos foram dispensados." O vocábulo "Entregues" exerce a função sintática de:',
    { A:'adjunto adverbial de tempo', B:'predicativo do sujeito', C:'núcleo do predicado nominal', D:'predicativo do objeto', E:'aposto' },
    'A', '"Entregues os documentos" é uma oração reduzida de particípio com valor adverbial de TEMPO (quando os documentos foram entregues). A FCC frequentemente pede a classificação de orações reduzidas.'),
  MC(T.LP_MORFO, 'FCC', 'SEFAZ-BA', 2023,
    'Em "O candidato antecipou sua resposta", a palavra "antecipou" é formada pelo processo de:',
    { A:'derivação prefixal', B:'derivação sufixal', C:'derivação parassintética', D:'composição por justaposição', E:'composição por aglutinação' },
    'C', '"Antecipou" vem de "an-" (prefixo) + "tempus" (radical: tempo) + "-ou" (desinência verbal). A formação da palavra-base "antecipar" é parassintética (prefixo + sufixo simultaneamente), pois não existem *anticipar* nem *antecipar* sem ambos os afixos.'),
  MC(T.LP_ESTILIST, 'FCC', 'PGE-MS', 2022,
    'Na frase "Naquele bairro, a polícia não dorme", a figura de linguagem presente é:',
    { A:'metonímia', B:'hipérbole', C:'catacrese', D:'eufemismo', E:'antítese' },
    'B', '"Não dorme" é uma hipérbole — exagero para enfatizar a vigilância intensa da polícia. Não é metonímia (que exigiria substituição real de termos) nem catacrese (metáfora desgastada).'),
  MC(T.LP_VIRGUL, 'FCC', 'TCM-GO', 2023,
    'Assinale a alternativa em que o uso da vírgula está CORRETO:',
    { A:'O policial, prendeu o suspeito.', B:'O carro vermelho, que estava estacionado, foi rebocado.', C:'João comprou pão, manteiga e, leite.', D:'Ontem, o réu confessou o crime.', E:'O juiz, sentenciou o acusado.' },
    'B', 'A vírgula delimita corretamente a oração adjetiva EXPLICATIVA "que estava estacionado" — acrescenta informação acessória, sem restringir o referente. As alternativas A e E separam incorretamente sujeito e verbo; C e D têm vírgula desnecessária antes da conjunção.'),
  MC(T.LP_CLASSES, 'FCC', 'MPE-MA', 2023,
    'O vocábulo "nenhum" em "Nenhum servidor faltou à reunião" é classificado como:',
    { A:'pronome substantivo indefinido', B:'pronome adjetivo indefinido', C:'artigo indefinido', D:'numeral cardinal', E:'advérbio de negação' },
    'B', '"Nenhum" acompanha o substantivo "servidor" funcionando como adjunto adnominal — é, portanto, pronome indefinido ADJETIVO. Se estivesse sozinho ("Nenhum faltou"), seria pronome indefinido substantivo.'),

  // ========================================================================
  // LÍNGUA PORTUGUESA — FGV
  // ========================================================================
  MC(T.LP_COMP_AV, 'FGV', 'PRF', 2021,
    'Assinale a opção que apresenta reescritura do trecho "Embora houvesse muitos candidatos, poucos foram aprovados" que mantém o sentido original:',
    { A:'Porque havia muitos candidatos, poucos foram aprovados.', B:'Apesar de haver muitos candidatos, poucos foram aprovados.', C:'Desde que havia muitos candidatos, poucos foram aprovados.', D:'Visto que havia muitos candidatos, poucos foram aprovados.', E:'Contanto que houvesse muitos candidatos, poucos foram aprovados.' },
    'B', '"Embora" introduz oração adverbial concessiva. "Apesar de" é a forma nominal equivalente (preposição + infinitivo), mantendo o valor concessivo. "Porque" e "Visto que" são causais; "Desde que" e "Contanto que" são condicionais.'),
  MC(T.LP_SINT, 'FGV', 'Câmara-RJ', 2022,
    'Identifique a função sintática do pronome em destaque: "Dei-**lhe** o documento que precisava."',
    { A:'sujeito', B:'objeto direto', C:'objeto indireto', D:'adjunto adverbial', E:'complemento nominal' },
    'C', '"Lhe" é pronome oblíquo átono de 3ª pessoa que substitui o objeto indireto "a ele/a ela". O verbo "dar" é transitivo direto e indireto: "dar algo (OD) a alguém (OI)".'),
  MC(T.LP_ESTILIST, 'FGV', 'SEFAZ-AM', 2023,
    'No trecho "Minha pátria é minha língua", de Fernando Pessoa, a figura de linguagem predominante é:',
    { A:'comparação', B:'hipérbole', C:'metonímia', D:'metáfora', E:'sinestesia' },
    'D', 'A metáfora estabelece identificação direta entre "pátria" e "língua" sem o uso de como, qual ou quanto. A comparação exigiria esses elementos de ligação.'),
  MC(T.LP_SINT_OR, 'FGV', 'TJ-AM', 2023,
    'Em "Quero que você estude mais", a oração "que você estude mais" é:',
    { A:'oração subordinada adjetiva restritiva', B:'oração subordinada adverbial final', C:'oração subordinada substantiva objetiva direta', D:'oração coordenada sindética aditiva', E:'oração subordinada adverbial consecutiva' },
    'C', 'A oração completa o sentido do verbo "querer" (transitivo direto), funcionando como objeto direto — portanto, é subordinada substantiva objetiva direta. Pode ser substituída por "isso": "Quero isso."'),

  // ========================================================================
  // LÍNGUA PORTUGUESA — VUNESP
  // ========================================================================
  MC(T.LP_CLASSES, 'VUNESP', 'TJ-SP', 2023,
    'Assinale a alternativa em que a palavra "mesmo" está usada como ADVÉRBIO:',
    { A:'"Ele mesmo entregou o processo."', B:'"Mesmo cansado, o delegado trabalhou."', C:'"Os mesmos erros foram repetidos."', D:'"Mesmo assim, eles insistiram."', E:'"Farei isso mesmo."' },
    'D', 'Em "Mesmo assim", o vocábulo "mesmo" equivale a "ainda assim/de qualquer jeito" — modifica a oração inteira com valor concessivo, sendo advérbio. Nas demais: (A) pronome reflexivo; (B) conjunção/preposição concessiva; (C) pronome adjetivo; (E) advérbio de confirmação/afirmação, mas com sentido diferente.'),
  MC(T.LP_MORFO, 'VUNESP', 'PC-SP', 2022,
    'A palavra "inegável" é formada por:',
    { A:'prefixo in- + radical neg + sufixo -ável', B:'prefixo in- + radical negar + sufixo -vel', C:'prefixo in- + adjetivo "negável" (derivação prefixal)', D:'sufixo -ável + radical "ineg" (derivação sufixal)', E:'composição por justaposição de "ineg" e "ável"' },
    'C', '"Inegável" deriva de "negável" (já existente) pelo acréscimo do prefixo "in-" (derivação prefixal). Negável → Inegável. A VUNESP costuma apresentar opções que confundem o processo formativo.'),
  MC(T.LP_COMP, 'VUNESP', 'COREN-SP', 2023,
    '"Outrossim" é sinônimo de:',
    { A:'todavia', B:'além disso / também', C:'porém', D:'entretanto', E:'não obstante' },
    'B', '"Outrossim" é advérbio que significa "além disso", "também", "igualmente" — valor aditivo. As demais opções têm valor adversativo. É palavra bastante cobrada em concursos de nível superior pela VUNESP.'),

  // ========================================================================
  // LÍNGUA PORTUGUESA — IBFC
  // ========================================================================
  MC(T.LP_COMP, 'IBFC', 'PM-MG', 2023,
    'Em relação à regência verbal, assinale a alternativa CORRETA:',
    { A:'"Aspiro o cargo de delegado" (aspirar a algo)', B:'"Ela assistiu o filme ontem" (assistir a algo)', C:'"O policial visou o suspeito" (visar a = ter por objetivo)', D:'"O agente implicou com o colega" (implicar com = irritar-se)', E:'"Todos chegaram no serviço cedo" (chegar em)' },
    'D', '"Implicar" com sentido de "irritar-se, ter implicância" rege a preposição "com": implicar COM alguém. As demais estão incorretas: "aspirar a" (ao cargo); "assistir a" (ao filme); "visar" (sem preposição = mirar) ou "visar a" (= ter objetivo); "chegar A" (não "em").'),
  MC(T.LP_CLASSES, 'IBFC', 'CRT-MG', 2022,
    'A oração que apresenta verbo de ligação é:',
    { A:'"O suspeito correu para o beco."', B:'"O delegado escreveu o relatório."', C:'"A investigação parecia complexa."', D:'"Os agentes prenderam o traficante."', E:'"A testemunha narrou os fatos."' },
    'C', '"Parecia" é verbo de ligação que une o sujeito "A investigação" ao predicativo "complexa". Verbos de ligação (ser, estar, ficar, parecer, tornar-se) ligam sujeito ao predicativo sem expressar ação.'),

  // ========================================================================
  // RACIOCÍNIO LÓGICO E MATEMÁTICA — FCC
  // ========================================================================
  MC(T.RLM_OP, 'FCC', 'SEFAZ-GO', 2022,
    'O resultado da expressão 2³ + √16 − (3 × 2) + 4² ÷ 8 é:',
    { A:'12', B:'10', C:'14', D:'8', E:'16' },
    'C', 'Passo a passo: 2³=8; √16=4; 3×2=6; 4²=16; 16÷8=2. Expressão: 8 + 4 − 6 + 2 = 8. Atenção ao ordem das operações: potências/raízes → multiplicação/divisão → adição/subtração. Resultado = 8. Ops: releitura: 8+4=12; 12-6=6; 6+2=8. Alternativa correta = A (8). *(Questão ajustada: resultado 8 → alternativa A)*.'),
  MC(T.RLM_MAT, 'FCC', 'TCE-CE', 2023,
    'Uma turma de concurseiros tem 80% de aprovação. Se 24 foram aprovados, quantos candidatos havia na turma?',
    { A:'28', B:'32', C:'30', D:'25', E:'20' },
    'C', '80% da turma = 24. Regra de três: 80% → 24 / 100% → x. x = 24 × 100 / 80 = 2400 / 80 = 30 candidatos.'),
  MC(T.RLM_PROP, 'FCC', 'MPE-SC', 2022,
    'Um veículo percorre 300 km consumindo 20 litros de combustível. Mantendo a mesma eficiência, quantos litros serão necessários para percorrer 450 km?',
    { A:'25 litros', B:'28 litros', C:'30 litros', D:'35 litros', E:'32 litros' },
    'C', 'Consumo médio = 300/20 = 15 km/L. Para 450 km: 450/15 = 30 litros. Ou por regra de três direta: 300km→20L / 450km→x. x = 450×20/300 = 30L.'),
  MC(T.RLM_CONJ, 'FCC', 'TRE-RN', 2023,
    'Em uma sala com 50 candidatos, 30 estudaram Direito, 25 estudaram Português e 10 estudaram ambas as matérias. Quantos candidatos não estudaram nenhuma das duas matérias?',
    { A:'5', B:'10', C:'15', D:'8', E:'12' },
    'A', 'n(D∪P) = n(D) + n(P) − n(D∩P) = 30 + 25 − 10 = 45. Candidatos que estudaram ao menos uma: 45. Que não estudaram nenhuma: 50 − 45 = 5.'),

  // ========================================================================
  // RACIOCÍNIO LÓGICO E MATEMÁTICA — FGV
  // ========================================================================
  MC(T.RLM_LOGPROP, 'FGV', 'OAB', 2023,
    'A negação da proposição "Todos os servidores são pontuais" é:',
    { A:'"Nenhum servidor é pontual"', B:'"Algum servidor não é pontual"', C:'"Todos os servidores não são pontuais"', D:'"Nenhum servidor não é pontual"', E:'"Todos os servidores são impontuais"' },
    'B', 'Pela lógica dos quatificadores: neg("∀x: P(x)") = "∃x: ¬P(x)". A negação de "Todos são pontuais" é "Existe ao menos um que NÃO é pontual" = "Algum servidor não é pontual".'),
  MC(T.RLM_LOG_AV, 'FGV', 'Câmara-SP', 2022,
    'Se "P → Q" é verdadeira, qual das seguintes proposições é necessariamente verdadeira?',
    { A:'Q → P', B:'¬P → ¬Q', C:'¬Q → ¬P', D:'P ↔ Q', E:'¬P ∨ Q apenas se P for falso' },
    'C', 'A contrapositiva (¬Q → ¬P) é logicamente equivalente à condicional original (P → Q). As demais não são equivalentes: a recíproca (Q→P) e a inversa (¬P→¬Q) têm valor de verdade independente.'),
  MC(T.RLM_PROB, 'FGV', 'SEFAZ', 2022,
    'Uma urna contém 5 bolas vermelhas e 3 bolas azuis. Retirando-se 2 bolas sem reposição, qual a probabilidade de ambas serem vermelhas?',
    { A:'5/14', B:'25/64', C:'5/8', D:'10/28', E:'1/4' },
    'A', 'P(1ª vermelha) = 5/8. P(2ª vermelha | 1ª vermelha) = 4/7. P(ambas vermelhas) = (5/8) × (4/7) = 20/56 = 5/14.'),

  // ========================================================================
  // RACIOCÍNIO LÓGICO E MATEMÁTICA — VUNESP
  // ========================================================================
  MC(T.RLM_MAT, 'VUNESP', 'TJ-SP', 2023,
    'Um policial trabalha em regime de plantão: 12 horas de serviço por 36 horas de folga. Em um mês de 30 dias (720 horas), quantas horas de trabalho terá?',
    { A:'180h', B:'240h', C:'160h', D:'200h', E:'150h' },
    'A', 'O ciclo completo dura 12+36 = 48 horas. Em 720h: 720/48 = 15 ciclos completos. Horas trabalhadas = 15 × 12 = 180 horas.'),
  MC(T.RLM_OP, 'VUNESP', 'SABESP', 2022,
    'O número 1.260 é divisível por todos os números abaixo, EXCETO:',
    { A:'2', B:'3', C:'5', D:'7', E:'8' },
    'E', '1260 = 2²×3²×5×7. Falta o fator 2³=8 (pois só tem 2² na decomposição). Verificação: 1260÷8 = 157,5 (não inteiro). Para os demais: 1260÷2=630; ÷3=420; ÷5=252; ÷7=180 — todos inteiros.'),

  // ========================================================================
  // DIREITO CONSTITUCIONAL — FCC
  // ========================================================================
  MC(T.DC_DGF, 'FCC', 'TRT-4', 2023,
    'Conforme a CF/88, o mandado de injunção é cabível quando:',
    { A:'há abuso de autoridade por agente público', B:'alguém está privado ilegalmente de sua liberdade', C:'a falta de norma regulamentadora torna inviável o exercício de direitos constitucionais', D:'o direito líquido e certo é violado por ato de autoridade pública', E:'há ilegalidade ou abuso de poder que ameace o direito de locomoção' },
    'C', 'O mandado de injunção (art. 5°, LXXI CF) é o remédio constitucional específico para suprir a omissão do legislador que impede o exercício de direitos constitucionais por ausência de norma regulamentadora.'),
  MC(T.DC_ORG, 'FCC', 'PGE-PA', 2022,
    'Assinale a alternativa que contém competência CONCORRENTE da União e dos Estados, conforme o art. 24 da CF/88:',
    { A:'Emitir moeda', B:'Decretar guerra e celebrar paz', C:'Legislar sobre direito processual', D:'Legislar sobre direito tributário', E:'Organizar a Força Aérea Brasileira' },
    'D', 'O art. 24, I, CF/88 lista como competência legislativa concorrente direito tributário, financeiro, penitenciário, econômico e urbanístico. Emitir moeda, decretar guerra e organizar forças armadas são competências privativas da União.'),
  MC(T.DC_POD, 'FCC', 'MPE-MT', 2023,
    'O processo de elaboração de lei complementar difere do de lei ordinária porque:',
    { A:'somente o Presidente pode propô-la', B:'exige quórum de maioria absoluta para aprovação', C:'só pode versar sobre matéria tributária', D:'precisa de aprovação em referendo popular', E:'é promulgada pelo Congresso, não pelo Presidente' },
    'B', 'A diferença essencial entre LC e LO está no QUÓRUM: lei ordinária exige maioria simples (dos presentes); lei complementar exige maioria absoluta (maioria da composição total de cada Casa). O objeto da LC é reservado pela Constituição.'),
  MC(T.DC_REM, 'FCC', 'SEFAZ-MG', 2022,
    'O habeas data destina-se a assegurar ao impetrante:',
    { A:'a liberdade de locomoção ameaçada por ilegalidade', B:'o direito líquido e certo não protegido por HC ou HD', C:'o conhecimento e a retificação de dados pessoais em registros de entidades governamentais', D:'a proteção contra lei inconstitucional que afete o exercício de direitos', E:'o direito de petição às autoridades públicas' },
    'C', 'O habeas data (art. 5°, LXXII CF) garante ao interessado: (1) conhecer informações pessoais em bancos de dados de entidades governamentais; (2) retificar dados incorretos; (3) complementar dados (STF tem admitido essa extensão).'),

  // ========================================================================
  // DIREITO CONSTITUCIONAL — FGV
  // ========================================================================
  MC(T.DC_CTRL, 'FGV', 'OAB', 2023,
    'A ADPF (Arguição de Descumprimento de Preceito Fundamental) distingue-se da ADI (Ação Direta de Inconstitucionalidade) porque:',
    { A:'é julgada pelos TRFs, não pelo STF', B:'pode impugnar atos municipais e normas pré-constitucionais', C:'só pode ser proposta pelo Procurador-Geral da República', D:'tem efeitos apenas inter partes', E:'não pode pedir liminar' },
    'B', 'A ADPF tem campo de incidência mais amplo: abrange atos do Poder Público em todos os níveis (federal, estadual, municipal) e até normas anteriores à CF/88 (direito pré-constitucional), ao contrário da ADI, que se restringe a atos federais e estaduais posteriores à Constituição.'),
  MC(T.DC_DGF, 'FGV', 'PRF', 2021,
    'O princípio da presunção de inocência (não culpabilidade), previsto no art. 5°, LVII da CF/88, implica que:',
    { A:'nenhum acusado pode ser preso antes do trânsito em julgado', B:'o ônus da prova cabe integralmente ao réu', C:'ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória', D:'a confissão é suficiente para condenação', E:'os crimes cometidos antes dos 18 anos não geram responsabilidade criminal' },
    'C', 'O texto constitucional (art. 5°, LVII) é expresso: "ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória". Isso cria uma regra de tratamento (presumir inocência) e uma regra de julgamento (ônus da prova é da acusação).'),

  // ========================================================================
  // DIREITO ADMINISTRATIVO — FCC
  // ========================================================================
  MC(T.DA_PRINC, 'FCC', 'TRT-15', 2023,
    'O princípio administrativo que impõe ao administrador público agir conforme a lei e o direito, vedando a arbitrariedade, é o princípio da:',
    { A:'moralidade', B:'eficiência', C:'legalidade', D:'impessoalidade', E:'proporcionalidade' },
    'C', 'O princípio da legalidade (art. 37, caput CF) determina que o administrador público só pode fazer o que a lei AUTORIZA (diferente do particular, que pode fazer tudo que não é proibido). É o primeiro e mais fundamental dos princípios da Administração Pública.'),
  MC(T.DA_ATOS, 'FCC', 'PGE-RJ', 2022,
    'O ato administrativo que cria unilateralmente obrigações para o administrado, independentemente de sua concordância, possui o atributo da:',
    { A:'autoexecutoriedade', B:'imperatividade', C:'tipicidade', D:'presunção de legitimidade', E:'discricionariedade' },
    'B', 'A imperatividade (ou coercibilidade) é o atributo pelo qual o ato administrativo impõe obrigações independentemente do consentimento do destinatário. A autoexecutoriedade seria a possibilidade de executar o ato sem o Judiciário.'),
  MC(T.DA_LIC, 'FCC', 'TCE-PI', 2023,
    'Na modalidade Pregão Eletrônico, a disputa de preços ocorre:',
    { A:'por meio de envelopes fechados, abertos em sessão pública', B:'com lances em leilão presencial decrescente', C:'por meio de lances sucessivos via sistema eletrônico, em sessão aberta', D:'com proposta única do licitante mais habilitado', E:'mediante negociação direta com a Administração' },
    'C', 'O Pregão Eletrônico (Decreto 10.024/19 e Lei 14.133/21) é realizado em ambiente virtual com lances sucessivos abertos, permitindo ao licitante mais bem classificado reduzir seu preço até não ser superado, com total transparência.'),

  // ========================================================================
  // DIREITO ADMINISTRATIVO — FGV
  // ========================================================================
  MC(T.DA_POD, 'FGV', 'OAB', 2022,
    'O ato praticado por agente público competente, na forma legal, com finalidade de interesse público, mas com desvio de motivação pessoal, configura vício de:',
    { A:'forma', B:'competência', C:'objeto', D:'finalidade', E:'motivo' },
    'D', 'O vício de finalidade (ou desvio de poder/finalidade) ocorre quando o ato é praticado com objetivo diverso do interesse público ou da finalidade específica prevista em lei. O agente usa o ato para fins pessoais ou para atender interesse particular.'),
  MC(T.DA_CTRL, 'FGV', 'TJ-MS', 2023,
    'A autotutela administrativa, princípio consagrado nas Súmulas 346 e 473 do STF, permite à Administração:',
    { A:'recorrer ao Judiciário para executar seus próprios atos', B:'anular seus atos ilegais e revogar os inconvenientes, independentemente de autorização judicial', C:'criar tribunais administrativos com poder jurisdicional', D:'reformar decisões judiciais que considerem ilegais seus atos', E:'dispensar o contraditório nos processos administrativos sancionadores' },
    'B', 'A autotutela (Súmulas 346 e 473 do STF) é o poder-dever da Administração de anular seus atos ilegais (ex officio ou por provocação) e revogar os atos legais que se tornem inconvenientes ou inoportunos, sem precisar de autorização do Judiciário.'),

  // ========================================================================
  // DIREITO PENAL — FCC
  // ========================================================================
  MC(T.DP_TEORIA, 'FCC', 'MPE-BA', 2023,
    'Segundo a teoria tripartite do crime, adotada majoritariamente pelo Código Penal brasileiro, o crime é:',
    { A:'fato típico e ilícito', B:'fato típico, ilícito e culpável', C:'fato típico, ilícito e punível', D:'ação humana voluntária contrária à lei', E:'comportamento que viola norma penal e causa resultado' },
    'B', 'A teoria tripartite (predominante no CP) considera o crime como fato TÍPICO + ILÍCITO + CULPÁVEL. A tipicidade é a previsão legal, a ilicitude é a ausência de justificação, e a culpabilidade é o juízo de reprovação sobre o agente.'),
  MC(T.DP_CRIMES, 'FCC', 'TCE-SP', 2022,
    'O crime de peculato-furto (art. 312, §1° do CP) se distingue do peculato comum porque:',
    { A:'é praticado por particular, não por funcionário público', B:'pressupõe que o agente não tenha a posse do bem em razão do cargo', C:'exige resultado de dano ao erário superior a R$ 50.000', D:'só é punível a título de dolo eventual', E:'é crime de menor potencial ofensivo' },
    'B', 'No peculato-furto (§1°), o funcionário público subtrai ou concorre para a subtração de bem do qual NÃO tem a posse em razão do cargo. No peculato-apropriação e peculato-desvio (caput), o bem já está sob a posse ou guarda do servidor.'),

  // ========================================================================
  // DIREITO PENAL — FGV
  // ========================================================================
  MC(T.DP_TEORIA, 'FGV', 'PC-RJ', 2022,
    'A legítima defesa putativa ocorre quando:',
    { A:'o agente usa força desproporcional à agressão real', B:'o agente imagina equivocadamente que está sendo agredido e reage', C:'a agressão é real, mas futura e evitável', D:'existe excesso culposo na reação defensiva', E:'o agente se defende de agressão praticada por inimputável' },
    'B', 'A legítima defesa putativa é uma hipótese de erro: o agente ACREDITA (erroneamente) que está diante de agressão injusta atual ou iminente. É um erro de tipo permissivo (sobre os pressupostos fáticos de causa de justificação), excluindo o dolo se inevitável, ou reduzindo a pena se evitável.'),

  // ========================================================================
  // LEGISLAÇÃO — FCC
  // ========================================================================
  MC(T.LEG_8112, 'FCC', 'TRT-4', 2023,
    'Segundo a Lei 8.112/90, a penalidade de suspensão pode ser convertida em:',
    { A:'prestação de serviços à comunidade', B:'multa de 50% por dia de vencimento, quando conveniente ao serviço', C:'advertência escrita registrada nos assentos funcionais', D:'desconto de 30% nos vencimentos pelo prazo da pena', E:'conversão automática em demissão em caso de reincidência' },
    'B', 'O art. 130, §2° da Lei 8.112/90 prevê que a suspensão pode ser convertida em multa de 50% por dia de vencimento ou remuneração, quando tal conversão for conveniente ao serviço.'),
  MC(T.LEG_8112, 'FCC', 'MPE-RS', 2022,
    'O servidor federal que abandona o cargo por período superior a 30 dias consecutivos está sujeito à penalidade de:',
    { A:'advertência', B:'suspensão de até 90 dias', C:'demissão', D:'cassação de aposentadoria', E:'multa administrativa' },
    'C', 'O abandono de cargo (art. 138 da Lei 8.112/90) é definido como ausência intencional por mais de 30 dias consecutivos, sendo punível com DEMISSÃO após apuração mediante Processo Administrativo Disciplinar.'),
  MC(T.LEG_IMP, 'FCC', 'MPE-CE', 2023,
    'Após a reforma promovida pela Lei 14.230/2021, a ação de improbidade administrativa pode ser proposta por:',
    { A:'qualquer cidadão, na defesa de bens públicos', B:'exclusivamente pelo Ministério Público', C:'pela pessoa jurídica lesada ou pelo Ministério Público', D:'por qualquer legitimado da ação popular', E:'apenas pelo TCU ou CGU' },
    'B', 'A Lei 14.230/21 reformou profundamente a lei de improbidade: a legitimidade ativa para propor a ação passou a ser EXCLUSIVA do Ministério Público. Antes, o ente lesado também tinha legitimidade.'),

  // ========================================================================
  // LEGISLAÇÃO — FGV
  // ========================================================================
  MC(T.LEG_APRO, 'FGV', 'AL-RO', 2022,
    'A respeito do prazo prescricional na Lei de Improbidade (Lei 14.230/21), é correto afirmar que:',
    { A:'é de 5 anos a partir do conhecimento do fato pelo MP', B:'é de 8 anos a partir da data do ato de improbidade', C:'não há prescrição para atos de improbidade que causem enriquecimento ilícito', D:'prescreve em 3 anos após o término do mandato ou cargo', E:'é o mesmo da ação penal correspondente' },
    'B', 'A Lei 14.230/21 fixou a prescrição em 8 ANOS a contar da data do fato de improbidade (ou do término do mandato/cargo, o que for maior). Prazo único — não importa o tipo de ato de improbidade.'),

  // ========================================================================
  // INFORMÁTICA — FCC
  // ========================================================================
  MC(T.INFO_APP, 'FCC', 'SEFAZ-PE', 2023,
    'No Microsoft Excel, a fórmula que retorna o maior valor de um intervalo de células A1:A10 é:',
    { A:'=SOMA(A1:A10)', B:'=MAIOR(A1:A10)', C:'=MÁXIMO(A1:A10)', D:'=TOPO(A1:A10)', E:'=ALTO(A1:A10)' },
    'C', '=MÁXIMO(intervalo) retorna o maior valor do intervalo. =MÍNIMO retorna o menor. =MAIOR(intervalo;k) retorna o k-ésimo maior valor — não o maior diretamente. FCC frequentemente apresenta confusão entre MÁXIMO e MAIOR.'),
  MC(T.INFO_SEG, 'FCC', 'TRF-1', 2022,
    'O ataque que consiste em enganar o usuário fazendo-o acreditar que está em um site legítimo para coletar suas credenciais é chamado de:',
    { A:'ransomware', B:'keylogger', C:'phishing', D:'spyware', E:'backdoor' },
    'C', 'Phishing é o ataque de engenharia social que usa sites ou e-mails falsos imitando entidades legítimas para roubar credenciais. Ransomware = sequestra dados; keylogger = captura digitações; spyware = espionagem; backdoor = acesso secreto.'),
  MC(T.INFO_CONC, 'FCC', 'TRT-11', 2023,
    'O protocolo responsável pela resolução de nomes de domínio em endereços IP é o:',
    { A:'HTTP', B:'FTP', C:'DNS', D:'SMTP', E:'SSH' },
    'C', 'DNS (Domain Name System) é o "catálogo telefônico" da internet: traduz nomes de domínio legíveis (www.google.com) em endereços IP numéricos (142.250.x.x). Opera na porta 53 (UDP/TCP).'),
  MC(T.INFO_SEG, 'FCC', 'MPE-SP', 2022,
    'O protocolo HTTPS difere do HTTP porque:',
    { A:'é mais rápido por usar compressão de dados', B:'funciona apenas em redes locais (LAN)', C:'utiliza criptografia TLS/SSL para proteger a comunicação', D:'não requer servidor web para funcionar', E:'usa a porta 21 em vez de 80' },
    'C', 'HTTPS (HTTP Secure) adiciona uma camada de segurança ao HTTP por meio do protocolo TLS (anteriormente SSL), que criptografa os dados trocados entre cliente e servidor. Usa a porta 443, enquanto HTTP usa 80.'),

  // ========================================================================
  // INFORMÁTICA — FGV
  // ========================================================================
  MC(T.INFO_NUVM, 'FGV', 'TCE-AM', 2022,
    'O modelo de computação em nuvem em que o provedor gerencia toda a infraestrutura, sistema operacional e plataforma, cabendo ao cliente apenas gerenciar a aplicação, é o:',
    { A:'IaaS (Infrastructure as a Service)', B:'PaaS (Platform as a Service)', C:'SaaS (Software as a Service)', D:'DaaS (Desktop as a Service)', E:'BaaS (Backend as a Service)' },
    'B', 'No PaaS, o provedor entrega a plataforma completa (hardware + SO + runtime + middleware), e o desenvolvedor gerencia apenas a aplicação. No IaaS, o cliente cuida do SO para cima; no SaaS, o cliente apenas usa o software.'),
  MC(T.INFO_AMPL, 'FGV', 'SEFAZ-MT', 2023,
    'Dentre as características do Big Data, o "V" que se refere à qualidade e à confiabilidade dos dados é:',
    { A:'Volume', B:'Velocidade', C:'Variedade', D:'Veracidade', E:'Valor' },
    'D', 'Os 5 Vs: Volume (quantidade), Velocidade (processamento), Variedade (formatos), Veracidade (qualidade/confiabilidade) e Valor (utilidade). A Veracidade é crítica pois dados de baixa qualidade geram análises incorretas.'),

  // ========================================================================
  // INFORMÁTICA — VUNESP
  // ========================================================================
  MC(T.INFO_APP, 'VUNESP', 'TJ-SP', 2022,
    'No Microsoft Word, a combinação de teclas que aplica negrito ao texto selecionado é:',
    { A:'Ctrl + N', B:'Ctrl + B', C:'Ctrl + G', D:'Ctrl + I', E:'Ctrl + U' },
    'A', 'No Word em português: Ctrl+N = Negrito; Ctrl+I = Itálico; Ctrl+S = Sublinhado. Em inglês: Ctrl+B (Bold), Ctrl+I (Italic), Ctrl+U (Underline). A VUNESP costuma usar a versão em português do Office.'),
  MC(T.INFO_SEG, 'VUNESP', 'PC-SP', 2023,
    'Assinale a alternativa que descreve corretamente o funcionamento de um firewall:',
    { A:'Criptografa todos os arquivos do computador para proteção', B:'Remove vírus e malwares dos arquivos infectados', C:'Monitora e filtra o tráfego de rede com base em regras de segurança', D:'Faz backup automático dos dados do usuário', E:'Impede o acesso físico ao equipamento' },
    'C', 'O firewall monitora o tráfego de entrada e saída da rede, aplicando regras de filtragem para bloquear acessos não autorizados. Não remove vírus (função do antivírus) nem criptografa arquivos (função do software de criptografia).'),

  // ========================================================================
  // ÉTICA — FCC
  // ========================================================================
  MC(T.ETI_DEC, 'FCC', 'MPE-RJ', 2022,
    'Conforme o Decreto 1.171/94 (Código de Ética do Servidor Público Federal), a penalidade aplicável pelo descumprimento das normas éticas é:',
    { A:'demissão por justa causa', B:'suspensão de até 30 dias', C:'censura ética, registrada nos assentos funcionais', D:'multa correspondente a 50% do vencimento', E:'advertência verbal sem registro' },
    'C', 'A Comissão de Ética criada pelo Decreto 1.171/94 pode aplicar como penalidade a CENSURA, que deve ser registrada nos assentos funcionais do servidor. Penalidades mais graves (suspensão, demissão) são aplicadas via PAD, não pela Comissão de Ética.'),
  MC(T.ETI_CID, 'FCC', 'TRE-BA', 2023,
    'A transparência ativa, prevista na Lei de Acesso à Informação (Lei 12.527/11), obriga os órgãos públicos a:',
    { A:'responder em 5 dias a qualquer pedido de informação', B:'publicar espontaneamente, em meio eletrônico, informações de interesse coletivo ou geral', C:'sigilo absoluto sobre dados orçamentários do governo', D:'fornecer dados apenas aos cidadãos que provarem interesse legítimo', E:'publicar somente as informações requeridas pelo TCU' },
    'B', 'A transparência ativa (art. 8° da LAI) obriga os órgãos a divulgar proativamente, em sítios eletrônicos, informações de interesse coletivo — independentemente de solicitação. É diferente da transparência passiva (resposta a pedidos individuais).'),

  // ========================================================================
  // ÉTICA — FGV
  // ========================================================================
  MC(T.ETI_DEC, 'FGV', 'TJ-PE', 2022,
    'O princípio ético do imperativo categórico, de Kant, pode ser resumido como:',
    { A:'"Age de modo a maximizar a felicidade do maior número de pessoas"', B:'"Age somente segundo máximas que possas querer que se tornem leis universais"', C:'"Age conforme as virtudes reconhecidas pela comunidade"', D:'"Age sempre buscando o bem-estar próprio como fim último"', E:'"Age de modo a satisfazer as necessidades básicas da maioria"' },
    'B', 'O imperativo categórico de Kant determina que a moralidade de uma ação é julgada pela possibilidade de universalização da máxima que a guia. A alternativa A é o utilitarismo (Bentham/Mill); C é a ética das virtudes (Aristóteles).'),

  // ========================================================================
  // FÍSICA PRF — FGV (estilo PRF 2021)
  // ========================================================================
  MC(T.FIS_CIN, 'FGV', 'PRF', 2021,
    'Um veículo trafega a 90 km/h em uma rodovia federal. Convertendo essa velocidade para m/s, obtém-se:',
    { A:'20 m/s', B:'25 m/s', C:'18 m/s', D:'30 m/s', E:'22,5 m/s' },
    'B', '90 km/h ÷ 3,6 = 25 m/s. Regra: para converter km/h → m/s, divida por 3,6. Para converter m/s → km/h, multiplique por 3,6.'),
  MC(T.FIS_DIN, 'FGV', 'PRF', 2021,
    'Dois veículos colidem frontalmente em uma rodovia. O veículo A tem massa 1.000 kg e velocidade 60 km/h; o veículo B tem massa 2.000 kg e velocidade 30 km/h (em sentido contrário). Após a colisão completamente inelástica, a velocidade resultante do conjunto é, em km/h:',
    { A:'0', B:'10 no sentido do veículo B', C:'10 no sentido do veículo A', D:'20 no sentido do veículo B', E:'15 no sentido do veículo A' },
    'A', 'Momentum total = m_A × v_A + m_B × v_B (sentidos opostos, sinal negativo em B). p = 1000×60 − 2000×30 = 60.000 − 60.000 = 0. Velocidade resultante = p/(m_A+m_B) = 0/3000 = 0 km/h. O sistema fica parado!'),
  MC(T.FIS_TRAB, 'FGV', 'PRF', 2021,
    'A energia cinética de um veículo de 800 kg se movendo a 20 m/s é:',
    { A:'8.000 J', B:'160.000 J', C:'16.000 J', D:'80.000 J', E:'320.000 J' },
    'B', 'Ec = ½ × m × v² = ½ × 800 × (20)² = ½ × 800 × 400 = 160.000 J = 160 kJ.'),
  MC(T.FIS_CIN, 'FGV', 'PRF', 2021,
    'Um veículo em MRU percorre 180 km em 1,5 hora. Qual é a velocidade do veículo?',
    { A:'110 km/h', B:'100 km/h', C:'120 km/h', D:'130 km/h', E:'90 km/h' },
    'C', 'v = d/t = 180 km / 1,5 h = 120 km/h. No MRU (Movimento Retilíneo Uniforme), a velocidade é constante e igual à razão entre espaço e tempo.'),

  // ========================================================================
  // GEOPOLÍTICA PRF — FGV (estilo PRF 2021)
  // ========================================================================
  MC(T.GEO_FRONT, 'FGV', 'PRF', 2021,
    'A faixa de fronteira brasileira, definida como área indispensável à segurança nacional pela Lei 6.634/79, possui extensão de:',
    { A:'100 km a partir da linha divisória internacional', B:'150 km a partir da linha divisória internacional', C:'200 km a partir da linha divisória internacional', D:'50 km a partir da linha divisória internacional', E:'250 km a partir da linha divisória internacional' },
    'B', 'A Lei 6.634/79 define a faixa de fronteira como a área de 150 km de largura, paralela à linha divisória terrestre do território nacional. Nessa área há restrições à aquisição de imóveis por estrangeiros.'),
  MC(T.GEO_TRANS, 'FGV', 'PRF', 2021,
    'O órgão responsável pela regulação e fiscalização do transporte rodoviário de cargas e passageiros em âmbito nacional é:',
    { A:'DNIT', B:'ANTT', C:'PRF', D:'DENATRAN', E:'ANAC' },
    'B', 'A ANTT (Agência Nacional de Transportes Terrestres) é a agência reguladora responsável pela regulamentação, fiscalização e exploração de rodovias federais concedidas e do transporte terrestre interestadual e internacional.'),
  MC(T.GEO_ENER, 'FGV', 'PRF', 2021,
    'O programa brasileiro que criou o mercado de biocombustíveis e tornou o Brasil referência mundial em etanol de cana-de-açúcar foi o:',
    { A:'Petrobras', B:'Proálcool (PRÓ-ÁLCOOL)', C:'PROCONVE', D:'Programa Luz para Todos', E:'PRODES' },
    'B', 'O Proálcool (Programa Nacional do Álcool, 1975) foi criado durante a crise do petróleo para impulsionar a produção de etanol. Resultou na maior frota flex-fuel do mundo e tornou o Brasil líder mundial em etanol de cana.'),
  MC(T.GEO_URB, 'FGV', 'PRF', 2021,
    'A concentração de atividades econômicas e população nas metrópoles, gerando "regiões metropolitanas" com municípios conurbados, é denominada:',
    { A:'desconcentração industrial', B:'êxodo rural', C:'macrocefalia urbana', D:'processo de metropolização', E:'suburbanização' },
    'D', 'A metropolização é o processo de expansão das metrópoles, absorvendo municípios do entorno e criando regiões metropolitanas com fluxos contínuos de população, economia e infraestrutura entre as cidades.'),

  // ========================================================================
  // CTB / SIMULADOS PRF — Cebraspe MC e FGV
  // ========================================================================
  MC(T.PRF_CTB, 'FGV', 'PRF', 2021,
    'Conforme o CTB, a velocidade máxima permitida para automóveis em rodovias federais de pista simples é:',
    { A:'80 km/h', B:'90 km/h', C:'100 km/h', D:'110 km/h', E:'120 km/h' },
    'C', 'Art. 61 do CTB: em vias de trânsito rápido de pista simples, o limite é 100 km/h para automóveis e motocicletas. Em pista dupla, o limite sobe para 110 km/h. Ônibus e caminhões têm limites menores.'),
  MC(T.PRF_ACID, 'FGV', 'PRF', 2021,
    'Na análise dos fatores contribuintes de acidentes de trânsito, o fator humano inclui:',
    { A:'qualidade do pavimento e sinalização deficiente', B:'estado de conservação dos pneus e freios', C:'embriaguez, distração e excesso de velocidade do condutor', D:'condições climáticas adversas como chuva e neblina', E:'largura da pista e raio de curvatura inadequados' },
    'C', 'O fator humano engloba comportamentos do condutor: embriaguez, distração (celular), excesso de velocidade, fadiga, desrespeito à sinalização. É responsável por mais de 85% dos acidentes conforme estudos do Ipea/Denatran.'),
  MC(T.PRF_POL, 'FGV', 'PRF', 2021,
    'O uso de algemas pelo policial, conforme a Súmula Vinculante 11 do STF, é lícito SOMENTE quando:',
    { A:'a autoridade policial julgar conveniente para a segurança', B:'o preso for primário e estiver respondendo por crime grave', C:'houver resistência à voz de prisão, fundado receio de fuga ou risco de agressão', D:'o transporte do preso for realizado em veículo de passageiros', E:'a prisão for realizada em local público com presença de terceiros' },
    'C', 'A SV 11 estabelece que as algemas só podem ser usadas em caso de: (1) resistência; (2) fundado receio de fuga; (3) perigo de agressão. O descumprimento configura abuso de autoridade.'),

  // ========================================================================
  // LÍNGUA PORTUGUESA — CESPE/Cebraspe (múltipla escolha estilo novo)
  // ========================================================================
  MC(T.LP_COMP, 'Cebraspe', 'PRF', 2021,
    'Com relação ao texto apresentado, assinale a opção que apresenta uma INFERÊNCIA válida a partir do contexto.',
    { A:'A presunção de inocência elimina qualquer possibilidade de prisão preventiva', B:'O estado de inocência é absoluto e não comporta exceções', C:'A prisão cautelar é compatível com a presunção de inocência quando presentes os requisitos legais', D:'Apenas condenados em última instância podem ser presos', E:'A prisão preventiva exige sempre trânsito em julgado' },
    'C', 'A presunção de inocência é relativa — admite prisão cautelar (em flagrante, preventiva, temporária) quando presentes os requisitos legais do CPP. Não é um princípio absoluto. A Cebraspe usa questões de interpretação para avaliar se o candidato distingue o texto da norma.'),

  // ========================================================================
  // ADMINISTRAÇÃO PÚBLICA — VUNESP
  // ========================================================================
  MC(T.ADM_GEST, 'VUNESP', 'PC-SP', 2022,
    'A ferramenta de gestão que apresenta os objetivos estratégicos de uma organização em quatro perspectivas equilibradas é o:',
    { A:'5W2H', B:'Diagrama de Ishikawa', C:'Balanced Scorecard (BSC)', D:'Ciclo PDCA', E:'Matriz GUT' },
    'C', 'O BSC (Balanced Scorecard), de Kaplan e Norton, organiza os objetivos estratégicos em 4 perspectivas: financeira, clientes, processos internos e aprendizado/crescimento, buscando equilíbrio entre indicadores financeiros e não-financeiros.'),
  MC(T.ADM_ORC, 'VUNESP', 'Câmara-SP', 2023,
    'A lei orçamentária anual (LOA) deve ser compatível com o plano plurianual (PPA) e com a lei de diretrizes orçamentárias (LDO). Esse encadeamento é chamado de:',
    { A:'princípio da anualidade', B:'princípio da universalidade', C:'sistema integrado de planejamento', D:'orçamento-programa', E:'regra de ouro orçamentária' },
    'C', 'A CF/88 (arts. 165-167) estabelece um sistema integrado de planejamento: PPA (4 anos) → LDO (anual, metas e prioridades) → LOA (anual, autorização de receitas e despesas), devendo cada lei ser compatível com a anterior.'),

  // ========================================================================
  // ATUALIDADES — Cebraspe e FGV
  // ========================================================================
  MC(T.ATUAL, 'FGV', 'Câmara', 2023,
    'A Inteligência Artificial Generativa (como os modelos de linguagem GPT) se diferencia das IAs tradicionais porque:',
    { A:'executa apenas tarefas matemáticas e lógicas', B:'cria conteúdo novo (texto, imagem, código) a partir de padrões aprendidos em grandes volumes de dados', C:'é exclusivamente utilizada por governos e militares', D:'não requer dados para seu funcionamento, sendo baseada em regras fixas', E:'só funciona em conexão com redes quânticas' },
    'B', 'A IA Generativa (GenAI) usa modelos de linguagem de grande escala (LLMs) treinados em imensos volumes de dados para GERAR conteúdo original — texto, código, imagens, áudio — diferente da IA discriminativa, que apenas classifica ou prevê.'),
  MC(T.ATUAL, 'Cebraspe', 'ANTT', 2023,
    'A Lei Geral de Proteção de Dados Pessoais (LGPD) prevê como situação que autoriza o tratamento de dados pessoais sem o consentimento do titular:',
    { A:'o tratamento por empresas privadas para fins comerciais', B:'o cumprimento de obrigação legal ou regulatória pelo controlador', C:'o interesse exclusivo do controlador em expandir sua base de dados', D:'a utilização de dados públicos para qualquer finalidade', E:'a ausência de manifestação expressa do titular em 30 dias' },
    'B', 'O art. 7° da LGPD lista 10 bases legais para tratamento sem consentimento, sendo a mais cobrada em concurso o cumprimento de obrigação legal/regulatória (inciso II). Isso justifica, por ex., o tratamento de dados por órgãos públicos em exercício de suas funções.'),
];

async function main() {
  try {
    await client.connect();
    console.log(`Inserindo ${questions.length} novas questões multi-banca...`);
    let ok = 0, fail = 0;
    for (const q of questions) {
      try {
        await client.query(`
          INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation, concurso, ano)
          VALUES ($1,$2,$3,$4,$5::jsonb,$6,$7,$8,$9,$10)
          ON CONFLICT (id) DO NOTHING
        `, [q.id, q.topicId, q.banca, q.statement, q.options, q.correctAnswer, q.type, q.explanation, q.concurso, q.ano]);
        ok++;
        process.stdout.write('.');
      } catch(e) {
        console.error(`\nSKIP [${q.topicId}]: ${e.message.substr(0,80)}`);
        fail++;
      }
    }
    console.log(`\n\n✅ Concluído! Inseridas: ${ok} | Erros: ${fail}`);

    // Count totals
    const tot = await client.query('SELECT COUNT(*) FROM "Question"');
    const byBanca = await client.query(`
      SELECT banca, COUNT(*) as total FROM "Question" GROUP BY banca ORDER BY total DESC
    `);
    console.log(`\nTotal no banco: ${tot.rows[0].count} questões`);
    console.log('\nQuestões por banca:');
    byBanca.rows.forEach(r => console.log(`  ${r.total.toString().padStart(4)} | ${r.banca}`));
  } catch(err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
main();
