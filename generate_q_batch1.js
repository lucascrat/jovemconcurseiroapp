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
  // 1. Gestão Estratégica (407f59fd4764d880e9dececcba0e1969)
  {
    topicId: "407f59fd4764d880e9dececcba0e1969",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "No que se refere à ferramenta Análise SWOT, assinale a alternativa que traz uma variável que se encontra sob o domínio do ambiente EXTENO (ou seja, fora do controle da prefeitura/órgão).",
    options: JSON.stringify(["Força da frota atual.", "Ameaça de redução de verbas federais motivada pela alta do dólar.", "Fraqueza na qualificação dos servidores locais.", "Corte deliberado de terceirizados pelo próprio prefeito.", "Surgimento de lideranças fortes nos departamentos internos."]),
    correctAnswer: "Ameaça de redução de verbas federais motivada pela alta do dólar.",
    explanation: "Na Análise SWOT (FOFA), Forças e Fraquezas (Fatores Internos) estão sob o controle da gestão. Já Oportunidades e Ameaças (como a cotação do dólar ou cortes de verbas externas) formam o cenário do ambiente Externo e não podem ser estritamente controladas pelo órgão."
  },
  {
    topicId: "407f59fd4764d880e9dececcba0e1969",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "O Balanced Scorecard (BSC) foca apenas em métricas de rentabilidade e fluxos de caixa, deixando de lado aspectos não financeiros por serem de difícil mensuração por parte das lideranças públicas. (Julgue Certo ou Errado)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "O Erro clássico! O BSC foi criado justamente para não focar apenas no 'Dinheiro'. Ele trabalha 4 perspectivas mútuas: Financeira, do Cliente/Sociedade, de Processos Internos e de Aprendizado/Inovação."
  },
  {
    topicId: "407f59fd4764d880e9dececcba0e1969",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "No contexto da Matriz SWOT, a situação de crescimento acelerado do desemprego nacional representa para o setor de arrecadação do munícipio uma:",
    options: JSON.stringify(["Força", "Oportunidade", "Ameaça", "Fraqueza", "Estratégia Defensiva"]),
    correctAnswer: "Ameaça",
    explanation: "Fatores vindos de fora do controle municipal (cenário nacional) que trazem prejuízo à prefeitura (queda na chance de arrecadar) enquadram-se perfeitamente em Ameaças."
  },
  {
    topicId: "407f59fd4764d880e9dececcba0e1969",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Para o Planejamento Estratégico utilizando a ferramenta Balanced Scorecard, investir em treinamentos rotineiros e cursos de pós-graduação aos servidores públicos se adequaria DIRETAMENTE à qual perspectiva?",
    options: JSON.stringify(["Perspectiva Financeira", "Perspectiva de Clientes", "Perspectiva de Inovação e Aprendizado", "Perspectiva de Processos Internos", "Perspectiva de Lucratividade Governamental"]),
    correctAnswer: "Perspectiva de Inovação e Aprendizado",
    explanation: "Cursos e qualificações de base afetam diretamente o pilar da 'Aprendizagem' do BSC, pois preparam o servidor para que no futuro ele melhore os Processos."
  },
  {
    topicId: "407f59fd4764d880e9dececcba0e1969",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "A 'Missão' no plano estratégico retrata o que a organização projeta de ideal e deseja para si mesma num futuro de longo prazo, de 10 a 20 anos. (Julgue o item)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Errado! Pegadinha brutal. O que relata o futuro e O Teto ideal do sonho é a VISÃO ('Queremos ser a marca número 1 em 10 anos'). A MISSÃO é o presente: O 'por que existimos agora' (ex: Combater o crime diário)."
  },

  // 2. Poderes Administrativos (07ea835890bea9bbaef28f62aa427e67)
  {
    topicId: "07ea835890bea9bbaef28f62aa427e67",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Sobre os Poderes da Administração, aquele que faculta ao chefe rever as atuações e despachos de seus subalternos e delegar competências internamente denomina-se Poder:",
    options: JSON.stringify(["Vinculado", "Discricionário", "De Polícia", "Hierárquico", "Disciplinar"]),
    correctAnswer: "Hierárquico",
    explanation: "É através da hierarquia (Poder Hierárquico) que a chefia divide, escala e controla internamente a subordinação e atuações de seus funcionários através de delegações (repassar poder) e avocações (puxar atribuições de volta)."
  },
  {
    topicId: "07ea835890bea9bbaef28f62aa427e67",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "O Poder Disciplinar autoriza a administração a aplicar a punição de multa na carteira CNH de um civil aleatório por estacionar na rampa do hospital público. (Certo ou Errado)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "O cidadão de rua não possui vínculo especial ou funcional com o Estado! Portanto, repreendê-lo e autuá-lo no trânsito é uso exclusivo do PODER DE POLÍCIA e NÃO Disciplinar. O disciplinar só bate em servidor ou empresas com contratos (pois têm laço íntimo)."
  },
  {
    topicId: "07ea835890bea9bbaef28f62aa427e67",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Assinale a opção que consiste num atributo intrínseco e essencial do Poder de Polícia da Administração Estatal:",
    options: JSON.stringify(["Unilateralidade e Inafastabilidade judiciária.", "Autoexecutoriedade do ato, permitindo demolições de perigo sem o mandato preliminar do juiz.", "Preponderância do Poder do Particulário.", "Sobranceria dos Lucros em Licitações de Consórcios.", "Incompetência Delegada em caráter pleno a empresa do ramo 100% privados."]),
    correctAnswer: "Autoexecutoriedade do ato, permitindo demolições de perigo sem o mandato preliminar do juiz.",
    explanation: "O Poder de Polícia possui o atributo de Autoexecutoriedade. Pode-se estourar portões de locais insalubres e reboques nas blitz de maneira autônoma e prévia pautada pela lei, sem a assinatura pré-juiz da comarca."
  },
  {
    topicId: "07ea835890bea9bbaef28f62aa427e67",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Um Secretário Estadual chamou para si a responsabilidade de assinar um parecer porque a questão estava empacada na mesa de seu subordinado. Essa atitude no poder hierárquico recebe o nome de:",
    options: JSON.stringify(["Delegação", "Revogação", "Anulação", "Avocação", "Sublevação"]),
    correctAnswer: "Avocação",
    explanation: "Avocar (chamar a voz, a si próprio). Quando a autoridade puxa um dever que estava abaixo de sua mesa na chefia, ela avocou para não travar a máquina. É a ação contrária a 'Delegar'."
  },
  {
    topicId: "07ea835890bea9bbaef28f62aa427e67",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "O STF recentemente confirmou o entendimento de que NÃO É DELEGÁVEL, sob qualquer pretexto à empresas de Sociedades Economias Mistas voltadas para Lucros a fase da Sanção das multas do Trânsito rodoviárias oriundas de fase do ciclo do Poder de Policia. (Julgue o item)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Antigamente estaria correto. Contudo o STF QUEBROU jurisprudência e Aprovou em Repercussão Geral de que empresas Estatais que NÃO VISAM LUCROS nas Bolsas podem receber todas as fases inclusive a SANÇÃO PUNITIVA da polícia de fiscalizações."
  },

  // 3. Teoria do Crime (5de5ce69fe8fc0d3152526794e096c22)
  {
    topicId: "5de5ce69fe8fc0d3152526794e096c22",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Pelo sistema finalista, adotado na redação penal, o Fato Típico carece de 4 componentes obrigatórios: A Conduta Humana, O Resultado, O dolo isolado da culpa e A Antijuridicidade material do Bem. ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Os 4 elementos do fato Típico são: 1.Conduta 2.Resultado (nos materiais) 3.Nexo Causal 4.Tipicidade."
  },
  {
    topicId: "5de5ce69fe8fc0d3152526794e096c22",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Um sujeito, sonâmbulo atestado em sono profundo, caminha sobre a janela da rua, derrubando o pesado vaso de flores, que amassa completamente a lataria de um Civic abaixo. Jurídicamente:",
    options: JSON.stringify(["Responderá pelo Dano civil perante Dolo Eventual.", "Responderá Culpavelmente e Materialmente por Dano consumado.", "Não houve Crime por inexistência de Conduta Voluntária e Consciente Exclusora no Fato Típico.", "Responderá no crime por Culpa inconsciente agravada.", "Cessa o Processo pela Legítima Causa Fortuita Menor."]),
    correctAnswer: "Não houve Crime por inexistência de Conduta Voluntária e Consciente Exclusora no Fato Típico.",
    explanation: "Sonambulismo, Espasmos e Coações Físicas Irresistíveis EXCLUEM A CONDUTA. Se não há conduta Humana Voluntaria (pois o cérebro dormia absoluto), o andar inteiro do Fato tipíco é arruinado."
  },
  {
    topicId: "5de5ce69fe8fc0d3152526794e096c22",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Assinale a alternativa que traz uma Excludente de Ilicitude positivada no Artigo 23 do Código Penal do Brasil.",
    options: JSON.stringify(["Boa-fé material.", "Escusa absolutória.", "Dolo Acidental Subjacente.", "Legítima Defesa.", "Coação moral irresistível."]),
    correctAnswer: "Legítima Defesa.",
    explanation: "As Excludentes expressas de ilicitudes são o E.N.L.E (Estado de Necessidade, Legítima Defesa, Estrito Cumprimento do Dever e Exercício Regular de um Direito)."
  },
  {
    topicId: "5de5ce69fe8fc0d3152526794e096c22",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "O indivíduo A que arremessa o Colega B na água fria durante um terrível naufrágio visando manter controle único de uma tábua de salva-vidas age, teoricamente, sob a ótica da excludente penal do Estado de Necessidade, apagando a ilicitude do Homicídio provocado (Julgue ou errado).",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Exemplo clássico da Tábua do Naufrágio (ou canibalism de Andes). Tira a vida do parceiro para garantir que o seu próprio Bem Maior sobreviva ao cenário imprevisível! Encaixa-se no Estado de Necessidade e afasta o processo penal!"
  },
  {
    topicId: "5de5ce69fe8fc0d3152526794e096c22",
    banca: "IBADES",
    type: "MULTIPLE_CHOICE",
    statement: "Um policial adentra de forma violenta, mas com mandado e com legitimidade plena o recinto do sequestrador à noite. A sua restrição à liberdade do marginal durante algemas configura penalmente ao Policial Culpas de Sequestro agravado por uso de torturação branca?",
    options: JSON.stringify(["O crime resiste e foi qualificado de Dolo Intencionado.", "Afastar-se do tipo pela estrita excludente do Exercício Regular dos Preceitos Normativos.", "Afasta ilicitudes processadas pois estava agindo Estrito Cumprimento aos Dever Legal da ordem emanadas das varas.", "Se consuma por Peculatos de Opressão com Absolvições.", "Não gera por Dano Culposo sem intenção de prender longo prazo."]),
    correctAnswer: "Afasta ilicitudes processadas pois estava agindo Estrito Cumprimento aos Dever Legal da ordem emanadas das varas.",
    explanation: "Se a lei (ou Mandado judicial) OBRIGA que o Policial prive a liberdade do malfeitor, A Ação deixa de ser o Sequestro e torna-se um cumprimento do dever legal!"
  },

  // 4. Marketing de Relacionamento (f0a8faa18b7a07fb56076af82571b4e4)
  {
    topicId: "f0a8faa18b7a07fb56076af82571b4e4",
    banca: "CESGRANRIO",
    type: "MULTIPLE_CHOICE",
    statement: "Nas estratégias de bancos, reter um cliente na carteira em vez de focar energia excludente apenas a buscar correntistas novos reflete conceitos puros de CRM e Marketing de Relacionamento, dado ao custo inferior de fidelizar do que conquistar.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "É exatamente o princípio base do Kotler. Manter um usuário ativo através do CRM é cerca de 5 a 7 vezes mais barato e viável do que bater em portas do mercado alugando Marketing para achar completos novatos!"
  },
  {
    topicId: "f0a8faa18b7a07fb56076af82571b4e4",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "O software/ferramenta que cruza dados sobre o volume transacionado pelo consumidor, antecipando que o mesmo pode estar necessitando de seguro de veículos em breve é:",
    options: JSON.stringify(["ERP Industrial.", "Logística de Inversão.", "O S.A.P contábil financeiro.", "CRM (Costumer Relation Management).", "O Funil Genérico Causal."]),
    correctAnswer: "CRM (Costumer Relation Management).",
    explanation: "O CRM mapeia e traqueja o coração do público corporativo. É o Sistema de Base de Dados Preditora gerencial pra vender focadamente ofertando fidelizar!"
  },
  {
    topicId: "f0a8faa18b7a07fb56076af82571b4e4",
    banca: "CESGRANRIO",
    type: "MULTIPLE_CHOICE",
    statement: "A 'Escuta Ativa' exigida nos padrões do pós-venda em telemarketing se qualifica por: ",
    options: JSON.stringify(["Ficar calado até o correntista deligar e emudecer todo ruído", "Atuar mecanicamente lendo os roteiros programados para não incorrer processuais da justiça", "Ouvir, reafirmar compreensões balizando os entendimentos fáticos e expressar rapport emocional nos dizeres amenos do problema.", "Transferência do fluxo pra central mecânica antes que os limites de minutos estourem.", "Ignorar a queixa sem resoluções em prol dos metas produtórios temporizados."]),
    correctAnswer: "Ouvir, reafirmar compreensões balizando os entendimentos fáticos e expressar rapport emocional nos dizeres amenos do problema.",
    explanation: "Essência da escuta ativa nos call centers! Ouvir o estressado, dizer 'Entendi perfeitamente Sr., a sua questão é o boleto não pago', gerando calma de validação e Rapport."
  },
  {
    topicId: "f0a8faa18b7a07fb56076af82571b4e4",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "No fluxo de uma marca atrelada a fidelidade, qual o termo de patamar que indica o máximo expoente no ápice do engajamento de consumo individual ao banco:",
    options: JSON.stringify(["Compradores Pontuais.", "Leads Ocultos frios e distantes.", "O Cliente Indiferenciado do Mix.", "Cliente Defensor/Advogado da Marca.", "Suspects e Cidadãos Céticos Ponderados."]),
    correctAnswer: "Cliente Defensor/Advogado da Marca.",
    explanation: "Para o MKT de Relacionamento o Apice do fidelizado é quando ele além de comprar todo mês, DEFENDE a sua maçã (Apple) ou as nubanks das ofensivas na mesa do Boteco! Ele é Advogado e Vendedor gratuito das qualidades."
  },
  {
    topicId: "f0a8faa18b7a07fb56076af82571b4e4",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "O Atendimento ideal visa padronização absoluta a todos os clientes. No contexto do Marketing de Relacionamento 3.0, deve-se tratar todo correntista do BB rigorosamente igual e empurrar as mesmíssimos produtos idênticos indiferente se ele for Agro ou Universitário.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Essa era a lógica Fordista de massa antigassa! O MKT Novo 3.0 / 4.0 Personaliza! Ele foca em Micro-Segmentação ao ponto das prateleiras, e nunca mais tenta 'esgoelar todos a comprar do mesmo sapato geral'."
  },

  // 5. Estilística e Semântica (20f951fa99573c5988a085492e002a4b)
  {
    topicId: "20f951fa99573c5988a085492e002a4b",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Na oração de Lygia: 'A sala de jantar ouviu o estrondo do portão sendo rompido as três da manhã nas matas.', encontra-se fortemente o uso da figura semântica denominada:",
    options: JSON.stringify(["Um Paradoxo irrefutável absoluto.", "Metáfora de cunhos animalescos.", "Metonímia.", "Um Eufemismo de Suavizações leves.", "Ironias Mistas e contritas."]),
    correctAnswer: "Metonímia.",
    explanation: "A Sala de Jantar (Parede/Louças) não possui ouvidias. Trata-se da troca do Continente da casa pelo Conteúdo que habitava na hora (As Pessoas jantando OUVIRAM). Substituição óbvia: METONÍMIA!"
  },
  {
    topicId: "20f951fa99573c5988a085492e002a4b",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "O Paradoxo difere da Antítese puramente no âmbito formal da frase. Enquanto a antítese apõe verbos, o Paradoxo só opõe substantivos e adjetivos abstratos, mantendo integral a lógica causal dos fatos. (Certo / Errado)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Errado total. A diferença não é se usa verbo ou nome. A diferença é a FÍSICA e o sentido real: Antítese (Gordo / Magro) é fisicamente possível na existência. Paradoxo cria LÓGICAS IMPOSSÍVEIS E IRRACIONAIS ABSOLUTAS! ('Estou gritando em silêncio cego das vistas')."
  },
  {
    topicId: "20f951fa99573c5988a085492e002a4b",
    banca: "FUNDATEC",
    type: "MULTIPLE_CHOICE",
    statement: "Se numa reportagem Policial o termo 'O rapaz desatou furtando do morador idoso o utilitário na rodovia...' foi trocado pela manchete branda 'O Agitador Social realocou por engano os meios transmigratórios provindos dos mais velhos e experientes', tem-se o uso escrachado do:",
    options: JSON.stringify(["Eufemismos", "Antítese", "Comparativismo semiótico", "Epístrefes Repetivas", "Aliteração"]),
    correctAnswer: "Eufemismos",
    explanation: "Pegar o Dano, Furtos ou Tragédias Sangrentas e colocar um 'panos Quente Brando de palavras amenas' configuratirá Sempre as Forjeções de EUFEMISMAR!"
  },
  {
    topicId: "20f951fa99573c5988a085492e002a4b",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "'O senhor é um asno astuto de óculos, digno das gramas! Não percebe as contas de soma?' - No uso popular figurado e ácido do excerto, o orador evoca principalmente:",
    options: JSON.stringify(["Pleonasmo", "Paradoxificações ricas em lirismos", "Metáfora aliada a tons de Ironia/Sarcasmo.", "Antítese Plena e Perfeita.", "Prosopopéias animais."]),
    correctAnswer: "Metáfora aliada a tons de Ironia/Sarcasmo.",
    explanation: "É uma Metáfora ('Ele É ÚM asno'), com um peso gigantesco de Ironização/Sátiras na pejorativização do subtexto sarcástico e escrachado."
  },
  {
    topicId: "20f951fa99573c5988a085492e002a4b",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Qual frase baseia-se unicamente no modelo da Comparação, recusando assumir os aspectos hibrídos e contiguos metáforicos?",
    options: JSON.stringify(["Aquela garota parecia feito uma rosa vermelhas na chuva fraca.", "João é O Corvo negro dos agouros da familia que afundou nos juros.", "Dente, O cão veloz, mordeu o assaltante feio", "Leio Machado quase todos os dia, o Mestre dos contos.", "Meus lábios foram trancados á 10 chaves da perdição na fala."]),
    correctAnswer: "Aquela garota parecia feito uma rosa vermelhas na chuva fraca.",
    explanation: "Comparação usa sempre palavras e partículas explícitas mantenedoras: 'Parecia, Igualzinho à, Feito a, Como...'. Retirou esses conectores, a frase assumira formato perigoso ou de Metáfora!"
  },

  // 6. Mundo Contemporâneo (29e2782c3bfbf78f3c4b43156a838e56)
  {
    topicId: "29e2782c3bfbf78f3c4b43156a838e56",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "A expansão e os avanços dos exercícios práticos logísticos da OTAN em direção ao Leste Europeu foi e é listado repetidamente pela parte Russa como a grande justificativa para invasão dos territórios Ucranianos desde as épocas atuais recentes. (Certo/Errado)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Exatamente. O medo de Moscou (Rússia) na perda do 'Cinturão Tapão Protetor' que as antigas republiquitas geram a ela se agrava ao ver a Ucrania tentando seduzir alianças milítaristas com a OTAN."
  },
  {
    topicId: "29e2782c3bfbf78f3c4b43156a838e56",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "No que toca a questão Israelense atual na faixas Sulinas litorânea de Gaza. A Autoridade Palestina que gerencia pacíficamentes os mandos civis lá da Cisjordania possuia poder pleno institucional sobre os membros do grupo Hamas armados instalados desde decadas das eleições de gaza.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "Pegadinha Absurda. Hamas (Grupo Radícal Islamita forte em Gaza) expulsou em 2007 (E odeia os membros diplomáticos Fatah) do Grupo 'Autoridade Palestina' de que hoje domina aos prantos a região montanhoza fraca desidratada de Cisjordania. Gaza e Cisjórdania não comungam nas alas políticas."
  },
  {
    topicId: "29e2782c3bfbf78f3c4b43156a838e56",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Qual bloco recente ganhou um corpo substancial nas manobras da Cúpula de 2023 expandindo e absorvendo Egito e Iras, mudando uma engrenagem na balada diplomática fugindo de Dolarizações Norte americanas?",
    options: JSON.stringify(["MERCOSUL Unificado dos Eixos.", "OCDE e Parcerias Estáveis.", "O bloco do BRICS.", "G-7 Expansivo Africano.", "Otan Ásia e os Tratados TPPs."]),
    correctAnswer: "O bloco do BRICS.",
    explanation: "Fato fortissímo em Atualidades! O BRICS explodiu em tamanho abrindo porteiras para Irã, Arabia, Egitos.. Visando em sua balança comercial usarem as moedas Reais/Yuans invés da escravização Cambial do Eixo SWIFT Dolárizados. Um golpe direto á hegemonia dos Estados Unidos nos Bancos."
  },
  {
    topicId: "29e2782c3bfbf78f3c4b43156a838e56",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Sobre as recentes metas da Economia de inflação central do Governo Brasileiros as autoridades contam fortemente com uso de qual instrumento como principal escudo de contenção e esfriamento num país?",
    options: JSON.stringify(["O Uso das Reservas Cambiais derretidas diuturnamente na venda no banco.", "Mudança radical as pautas constituições pra extinguir PPA de Lira.", "Gerenciar Aumento drásticos Do COPOM à elevação e cortes cirúrgicos das Taxas Básica Juros - SELIC.", "Atravez do embargo diretos de compras de Trigos nos fazes da fronteira mercosuls.", "Zeramento impiedosamente total nos IPIs de toda parte branca das indústriarias de eletros e geles."]),
    correctAnswer: "Gerenciar Aumento drásticos Do COPOM à elevação e cortes cirúrgicos das Taxas Básica Juros - SELIC.",
    explanation: "Selic é a Rainha dos domadores! E o Banco central a usa pra Frear povo nas gastancias ou O Acelerar as investideras empresáriais cortando a taxinhas a niveis de subsolos."
  },
  {
    topicId: "29e2782c3bfbf78f3c4b43156a838e56",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "As tensões nos Estreitos dos Mar Vermelho pelos extremismos bélicos armandos dos Rebeldes locais impactam a Geopolitizacao econômica ocidental encarecendo Fretes Navíos em demasia que sobem cruzando da ÁSIA para as capitais Ricas Da Europa.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Os chamados Rebeldes Houthis no lémen estão atacando os super-cargueiros que tentam cruzar para passar nos Canais de Suez. Pela inseguracaz e mísseis, as enormes navidades da logística Global têm recuado para dar vultos de milhares de dias dobrando Cabo da Boa e inflando pedágios carissimps nas geladeiras importadas!"
  },

  // 7. Conjuntos e Lógica (7860d847e4f9eee6d258b31f8410eb50)
  {
    topicId: "7860d847e4f9eee6d258b31f8410eb50",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Segundo a tabela das verdades, a proposição lógica interligada pelo fator conjuncionista 'E' só exibirá como conclusão Final um VALOR VERDADEIRO (V), quando ambas metades dos predicados testificados apresentarem individualizadas na tábua a avaliação da verdade (V - V). (Certo ou Errada)",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Perfeito! A Conjunção 'E' ( ^ ) é o cara chato e enjoado no pedaço! Pra entrar na festa, ELE EXIGE OS DOIS ACÇÕES CERTAS. Pelo lado Esquerdo Certo, pelo lado Direito também! As falhas geram falsos instantâneas."
  },
  {
    topicId: "7860d847e4f9eee6d258b31f8410eb50",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Qual dos diagramadores simbólicos e lógicas nas avaliações do Silogismos garante e emite avaliações do FALSO se as 2 Proponentes de Frases Atingirem e assumirem o Status Falso?  (Ex:  F _ _ _ F  = Resultand de Falsidades globais na Tábua)?",
    options: JSON.stringify(["O Operador das Conjuntividades Plenas ('E').", "A Condicionals estritas puras ('Se E Só).", "A Dupla Bicondicional Extrema. (Se-Só-Se)", "O Operador da Disjunção Inclusiveiras ('OU').", "O Ou Excluem (v com traço em baixos)."]),
    correctAnswer: "O Operador da Disjunção Inclusiveiras ('OU').",
    explanation: "O 'OU' perdoa todo mundo, basta ter 1 V. MASSSS, se de ambos os lados da tábula surgir o inferno de Só Falsos cruéis ( F ou F ), o paciente morre Falso irremediado na mesa ."
  },
  {
    topicId: "7860d847e4f9eee6d258b31f8410eb50",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Qual conectivo mestre reprova 90% de candidatos e MENTE, trazendo o estigma da Sentença Falsa no Resultado do Bloco da Tabua no momento Físico onde A Primeira Base nasce Verdadeira 'V', porem desencadeia nos futuros da Prova em Condições Falsas finais 'F'?",
    options: JSON.stringify(["O conectos conjuncionais E.", "A Condicional (SE -> EntãO).", "O conectivo Inversos De XOR.", "As conjuras do NÃO MISTOS", "AS Excluvisas."]),
    correctAnswer: "A Condicional (SE -> EntãO).",
    explanation: "O Mnemônico Salva-Vidas 'VERA FISCHER = FALSA'. A setinha Condicioanal MENTE (Dá Falso no Boletim final) na única linha onde VERDADE(V) dá uma voadora e encontra FALSIDADES (F) nas segundas metades V->F !"
  },
  {
    topicId: "7860d847e4f9eee6d258b31f8410eb50",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "As representações matemáticas na diagramador do Venn sobre 'A U B', onde o simbola de ferradura U represente plenas unificações dos dois circulos em questões; denotará na realidade do conjunto: ",
    options: JSON.stringify(["Tirar de dentro Das bolhas os pontos comuns e expurgarem os solos pra longe nas sombras.", "As pontas centrais apenas da fusão, ignorando quem tá Isolado em C;", "Todos os elementos que estão nas listas em Posições de A, O somatório dos das listas Do campo B e Inserindo no caldeirão os que morávam comuns do miolos central", "Tudo fora fora da sala, apagandando as extremidaes dos dois círculos", "Um Zero Vázios"]),
    correctAnswer: "Todos os elementos que estão nas listas em Posições de A, O somatório dos das listas Do campo B e Inserindo no caldeirão os que morávam comuns do miolos central",
    explanation: "A União é literalmente um Baldão que arrebanha sem pré-conceitos TODO MUNDO dos envolvimentados (Pega os Carinhas que só curtem MATE, os q Curtem GEO, e os Ninjas Hibrídos do Miolos!) e fecha no saco sólido."
  },
  {
    topicId: "7860d847e4f9eee6d258b31f8410eb50",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Nas equações de subtrações conjuntos de Conjunto A Menos Conjunto B (A - B), a lógica impeditiva do preceitou obriga os matemátoicos conservarem nos calculós somente com Apenas os pontinhos e elementos Cidadões que vivão puramente nas terras de A, DELETANDO FORAM DA CONTA inclusive os que residem na intersecção limítrope Mista (A^B).",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Corretíssimo! Subtrair conjuntos 'A - B' Manda Varrer do seu mapa até mesmo O TRAIDOR que curte o Seu lado mas curte o do Inimigo. Corta-se A Interseção Comum E os caras puros do B. Só sobra os Fiéis Do Terreno Físico Lácteo Isolado do (A)."
  }
];

async function insertQuestions() {
  await client.connect();
  console.log("Iniciando injeção Batch 1...");
  try {
    for (const q of questions) {
      const qId = generateId();
      await client.query(
        'INSERT INTO "Question" (id, "topicId", banca, type, statement, options, "correctAnswer", explanation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [qId, q.topicId, q.banca, q.type, q.statement, q.options, q.correctAnswer, q.explanation]
      );
    }
    console.log(`Sucesso: ${questions.length} questões inseridas no banco!`);
  } catch (e) {
    console.error("Erro na injeção batch 1:", e);
  } finally {
    client.end();
  }
}

insertQuestions();
