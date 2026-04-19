const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const data = [
  // LEGISLAÇÃO GERAL (FUNDAMENTAL)
  {
    subj: 'Legislação Geral', level: 'Fundamental', sub: 'Deveres e Proibições Básicas',
    content: `
# Deveres e Proibições do Servidor: A Base Disciplinar

Para Nível Fundamental, as bancas costumam cobrar as regras mais lógicas e básicas do que um servidor pode ou não fazer, que geralmente constam do Estatuto (ex. Lei 8.112/90 para os federais) e de Manuais de Ética.

## 1. Principais Deveres
O servidor tem o dever de agir não só como um empregado, mas como um representante do Estado:
1.  **Zelo e Dedicação:** Exercer as funções com excelência.
2.  **Lealdade:** Ser fiel às instituições que serve (jamais passar informações privilegiadas da delegacia, tribunal, etc.).
3.  **Observância legal:** Cumprir sempre as ordens superiores, **EXCETO** quando forem manifestamente ilegais. (A banca adora dizer que o servidor deve obedecer cegamente ao chefe: ERRADO! Ordem ilegal não se cumpre e deve ser denunciada).
4.  **Zelar pela economia de material:** Evitar o desperdício do dinheiro público impresso, combustíveis, etc.

## 2. Principais Proibições
Enquanto de serviço (ou mesmo de folga), é rigorosamente proibido:
1.  **Ausentar-se do serviço:** Sair no meio do expediente sem autorização da chefia.
2.  **Retirar qualquer documento:** Levar processos ou objetos da repartição para casa sem prévia permissão, mesmo que seja para tentar "terminar o serviço do dia".
3.  **Promover manifestações no ambiente:** Manifestações políticas, religiosas ou afins dentro da repartição prejudicando o fluxo.
4.  **Valer-se do cargo:** Usar sua carteirada de servidor para conseguir qualquer facilidade particular. (Ex: O agente que entra grátis no cinema).
    `
  },
  // DIREITO PENAL (MÉDIO)
  {
    subj: 'Direito Penal', level: 'Médio', sub: 'Conceito de Crime e Fato Típico',
    content: `
# Teoria Geral do Crime: O que faz uma conduta ser criminosa?

Para o estudo de concurso, a teoria majoritária adotada pelo Código Penal Brasileiro é a **Teoria Tripartida**. O conceito analítico diz que "Crime é fato típico, ilícito (antijurídico) e culpável".

## 1. O Fato Típico
Para que seja considerado "fato típico", a conduta precisa ter 4 elementos. Sem nenhum deles, descaracteriza o próprio crime de imediato!
*   **Conduta:** Ação ou omissão humana, voluntária e consciente (dolosa ou culposa). *Aviso: Coação física irresistível, caso fortuito ou sonambulismo excluem a conduta!*
*   **Resultado:** A consequência do ato.
*   **Nexo Causal:** A "ponte" entre a conduta e o resultado. 
*   **Tipicidade:** A conduta DEVE estar escrita na lei perfeitamente ("matar alguém" está no art 121; "furtar maçã para matar a fome" pode ser considerado materialmente atípico pelo Princípio da Insignificância).

## 2. Diferença Crucial: Crime x Contravenção
*   **Crime (Delito):** Infrações penais mais graves que são apenadas com reclusão ou detenção. (Ex: Homicídio, Roubo).
*   **Contravenção Penal (Crime Anão / Vagabundo):** Infrações penais de menor potencial ofensivo, punidas apenas com prisão simples ou multa. E não é possível punir a "Tentativa de contravenção" (Art 4º LCP)!
    `
  },
  {
    subj: 'Direito Penal', level: 'Médio', sub: 'Excludentes de Ilicitude',
    content: `
# As Excludentes de Ilicitude (Artigo 23 do CP)

Saber as excludentes é ponto garantido na prova. Aqui o sujeito cometeu um Fato Típico (ex: matar alguém), mas a atitude dele é justificada perante o Estado devido a uma circunstância, apagando a ilicitude do crime.

> "Não há crime quando o agente pratica o fato em:"

## 1. Estado de Necessidade
Ocorre quando o agente pratica o fato para salvar de PERIGO ATUAL (que ele não provocou intencionalmente) direito próprio ou alheio. É uma situação de conflito de bens. 
*Exemplo:* Naufrágio; 2 náufragos e só 1 colete. O náufrago afoga o outro para garantir o colete e sobreviver. (Matou alguém? Sim. Vai preso? Não, por Estado de Necessidade).

## 2. Legítima Defesa
Repelir agressão INJUSTA, atual ou iminente, a direito seu ou de outrem, utilizando os meios necessários moderadamente.
*   **Dica:** Tem que ser moderado. Agressão resolvida com um soco não dá direito a você esvaziar o carregador de um revólver no agressor. Isso configuraria o **Excesso Punível**.
*   A agressão pode ser contra você, familiar ou terceiro!

## 3. Estrito Cumprimento do Dever Legal
Quando um agente público age no estrito limite daquilo que a lei impõe.
*Exemplo:* O policial cumpre um mandado de prisão. Ele suprimiu a liberdade da pessoa (teoricamente seria Sequência ou Cárcere Privado), mas como a lei manda fazer, isso exclui o crime.

## 4. Exercício Regular de um Direito
Condutas que já são permitidas pelo Estado. Ex: Violência dentro da regra do esporte de Luta Livre / UFC, ou buraco de brinco feito por um enfermeiro a pedido.
    `
  },
  {
    subj: 'Direito Penal', level: 'Médio', sub: 'Crimes Contra a Vida',
    content: `
# Crimes Contra a Vida (Homicídio, Aborto e Infanticídio)

O Título I da Parte Especial (Art. 121 em diante). Esses crimes são de competência absoluta do Tribunal do Júri se praticados na modalidade **Dolosa**.

## 1. Homicídio (Art. 121)
O tipo básico é "Matar alguém". A pena é de reclusão de 6 a 20 anos.
*   **Homicídio Qualificado:**  A pena pula para 12 a 30 anos. Exemplos de qualificadora exigem DECOREBA:
    - Mediante paga ou promessa de recompensa (matador de aluguel).
    - Motivo fútil (Ex: matou por uma discussão de futebol).
    - Motivo torpe (repugnante, ex: matar os pais por herança).
    - Com emprego de veneno, fogo, explosivo, emboscada, traição.
    - Feminicídio (contra a mulher em contexto de desigualdade e gênero).

## 2. Induzimento, instigação ou auxílio ao Suicídio (Art. 122)
Prestar suporte material (auxílio) ou mental (instigar/induzir) para alguém tirar a própria vida. A lei atualizou a punição pesada se a vítima for um menor, podendo passar a ser considerado o crime de Homicídio doloso propriamente dito dependendo da vulnerabilidade mental e idade (Menor de 14 anos não consente!).

## 3. Infanticídio (Art. 123)
Matar **o próprio filho**, logo durante ou após o parto, atuando a mulher "sob a influência do estado puerperal". Se ela matar sem que os hormônios (E. Puerperal) tenham afetado, a sua conduta deixa de ser Infanticídio e vira Homicídio Comum!

## 4. Aborto (Arts. 124 a 128)
Interrupção da gravidez com a morte do feto. O Brasil permite aborto em APENAS duas excludentes explícitas no Código: O "Aborto Necessário" (salvar a vida da gestante) e o Aborto Humanitário (gravidez advinda de um estupro + consentimento). E o STF reconheceu o aborto em caso de bebezinho  Anencéfalo. 
    `
  },
  // DIREITO PROCESSUAL PENAL (MÉDIO)
  {
    subj: 'Direito Processual Penal', level: 'Médio', sub: 'Características do Inquérito',
    content: `
# O Inquérito Policial (IP): Natureza e Princípios

O processo penal não costuma começar do nada. Antes, ocorre a fase pré-processual, dominada pelo Delegado de Polícia, comumente o Inquérito Policial.

## 1. A Natureza do Inquérito Policial
O Inquérito Policial é um procedimento **Administrativo**, Preparatório (seu fim não é punir/condenar, é apenas informar!). Serve para colher as materialidades e indícios fortes de autoria. O "Dono do IP" é a autoridade policial. E atenção: O Inquérito Policial é **Dispensável**! O promotor pode oferecer denúncia sem sequer iniciar Inquérito se, através de fotos/vídeos e documentos, tudo já estiver super claro.

## 2. Princípios / Características (SEED)
Bancas cobram os macetes de siglas e entendimentos:
*   **SIGILOSO:** Corre em segredo (exceto para o advogado de defesa). O inquérito quer pegar criminoso despercebido! Súmula Vinculante 14 do STF: defensores não acessam elementos asiligilados que "estão rodando ou não findos".
*   **ESCRITO:** Todos os depoimentos realizados são reduzidos a termo ou digitalizados em mídia.
*   **INQUISITIVO:** Diferente do tribunal com o Juiz (em que vigora Ampla Defesa), no Inquérito **não há contraditório material!** O delegado não é obrigado a chamar o suspeito e realizar acareações com testemunha a pedido de advogado.
*   **DISCRICIONÁRIO:** O delegado conduz a apuração no ritmo tático que desejar, requerendo viatura naquele endereço a hora que necessitar. (Diferentemente do processo do tribunal, o inquérito não tem "fases" obrigatórias pré-dispostas temporalmente).
*   **INDISPONÍVEL:** Uma vez que o Delegado mandou "baixar uma portaria e abrir" o procedimento sobre um crime público, ele, por vontade mesma, NÃO pode mais rasgar, cancelar ou ARQUIVAR. Apenas o Promotor e Juiz arquivam inquéritos fechados (Art 17 do CPP).
    `
  },
  {
    subj: 'Direito Processual Penal', level: 'Médio', sub: 'Prazos do Inquérito',
    content: `
# Conclusão e Prazos do Inquérito Policial (A Matemática do CPP)

Essa parte é famosa nas questões de falso/verdadeiro da Vunesp, Fundatec e Cebraspe, pois cada polícia ou tipo de justiça tem "regrinhas matemáticas" únicas sobre conclusão do IP.

## 1. Prazos Base (Regra Geral Comum, Justiça Estadual) - Art. 10 CPP
A regra de ouro, quando a questão falar em "código de processo penal base":
*   **Indiciado PRESO:** 10 Dias (Pode haver flagrante ou temporária). Note-se que, pelo Pacote Anticrime, esse tempo para preso estendeu a possibilidade de prorrogação (+15 dias se o juiz deferir - Mas o foco de nível médio ainda pede os diretos e intocáveis 10 dias de base originais!).
*   **Indiciado SOLTO:** 30 Dias (E admite prorrogação contínua no tribunal). 

## 2. Prazos de Justiça Federal (Polícia Federal) - Lei 5.010/66
Quando se trata da Justiça Federal (PF atuando):
*   **Preso:** 15 dias, prorrogável igual período (+15) após despacho do juiz.
*   **Solto:** Permanece 30 dias com possibilidades plenas em prorrogar.

## 3. Prazos Especiais em Leis Duras (Tráfico vs Economia)
As leis que saem perenes pelo lado escuro são super complexas:
*   **Tráfico da Lei de Drogas (11.343 / 2006):** Preso: 30 dias (prorrogado a +30). Solto: 90 dias (prorrogável).
*   **Prisão no Exercito e Crimes Hediondos:** Leis Temporárias diferenciam a restrição.

A Memorização do dia do concurso geralmente centra em responder **PreSso tem 10 , Soolto 30**. "Solto - S" tem cara de 3!
    `
  },
  {
    subj: 'Direito Processual Penal', level: 'Médio', sub: 'Diligências Policiais',
    content: `
# As Diligências Policiais - O Poder Investigativo do Art. 6º

O que o Policial pode (e deve) fazer tão logo aconteça um crime? A lei prescreve, no Artigo 6º do CPP, um passo a passo do Delegado.

## Atitudes e Deveres Comuns ao Receber a Informação:
1.  Dirigir-se de cara ao local e não deixar mexer ou mudar a cena, antes da perícia. (Isolamento do Local do Crime, as faixas zebradas).
2.  Despachar a solicitação de peritagens do corpo delito e exames complementares cadavéricos, sangue ou papiloscópico (impressão).
3.  Proceder as oitivas imediatas de informante e testemunhas, ofendido / vítima se possível. Seguido à coleta do "Interrogatório Formal Penal do Acusado Suspeito" (Respeitando seu valioso silêncio!).
4.  Requisições e recolhas de identificações e prontuários que validem os trajes e os vestimentos utilizados na empreitada criminosa.
5.  Reunir informações vitais com o Instituto e Papiloscópicos a ver o modo histórico criminal se o suspeito havia condenações soltas prévias.

## O Que a polícia Não Pode sem Judicialização?
Anotações clássicas e "casca de banana" em provas de carreira investigatória: o delegado pode ouvir todo mundo sem o Juiz pedir. Contudo:
*   Grampear o seu celular conversando, whatsapp **Muda**. Chama "Interceptar Telefone", SÓ quem Manda é O Juiz (A própria constituição no Art 5 diz Quebra Telefonica Judicial!).
*   Invadir Domicilio após o Sol de Inverno (Apenas Juiz pode dar o papel para invasiões em dia - De noite o Policial sem B.O aberto flagrante fica restrito no muro.)
    `
  },
  // LEGISLAÇÃO GERAL (MÉDIO)
  {
    subj: 'Legislação Geral', level: 'Médio', sub: 'Regime Disciplinar',
    content: `
# Regime Disciplinar da Lei 8.112/90

Esse assunto é 100% certo de despencar para concursos de Tribunais e Ministério Público. Fala das punições que o servidor sofre quando atua contra as normativas.

## 1. As 6 Punições Cadastradas (Art. 127)
Sendo Servidor, caso passe das listras as penas são:
1. Advertência.
2. Suspensão.
3. Demissão. (Cuidado: Demissão é PUNIÇÃO para efetivos. Exoneração NÃO é punição, é vacância sem dolo).
4. Cassação de Aposentadoria e disponibilidade.
5. Destituição do Cargo em Comissão.
6. Destituição de Função de Confiança.

## 2. Como as Provas Cobram (Casos Específicos)
### Advertência (Advertido por escrito):
Será punido com AVISOS e papéis na ficha quando o cara: Recusa-se a passar ao colega material, ou foge antes de bater o ponto fora sem justificativa e descumpre pequenas ações de subordinação menores, recusa uma peritagem de junta do Ministério Publico (suspensão entra por desobediências pesadas).
Obs: O cara fez uma "Punição de advertência". Se repetir e recrudescer as faltas da mesmice, aplica-se SUSPENSÃO.

### Suspensão (No bolso!)
Pode demorar no máximo **90 DIAS**. E a dica matadora é: Se o Estado achar que está perdendo com ele de fora, transforma isso em **Multa de 50% dias**. Ele volta para trabalhar, mas só recebe Metade! (E a multa cessa se acabar a punição!).

### Demissão Imediata:
A maior fobia servil - quando perderás até o benefício a voltar em curto periodo. Acontece e muito quando houver provas de inassiduidade do servidor que gerem de 30 dias corriqueiros faltantes não justificados! E por improbidade ou casos crônicos e ilícitos dentro de corrupções.
    `
  },
  {
    subj: 'Legislação Geral', level: 'Médio', sub: 'Provimento e Vacância',
    content: `
# Lei 8.112: Provimento, Vacância e Redistribuição

Na Lei 8.112 as palavras têm significações técnicas distintas e as Bancas mudam 2 termos visando o engano lógico no estudante.

## 1. Provimento (A "Cadeira Ocupada")
É a forma como a pessoa PREENCHE legalmente um cargo público. 
As provas pedem a listagem das 7 Formas (A famigerada Sigla **P-R-R-R-R-A-NP**):
*   **N**omeação (Apenas o modo originário para preenchimentos pós-concurso).
*   **P**romoção (Vertical ascende na escala sem nova prova).
*   **R**eintegração (A volta honrosa por ganhar processo após ser despedido ilicitamente. Retorna sendo pago em remuneração retroativa!)
*   **R**eversão (A volta honrosa do Vovô na cadeira (Aposentado volta! - Volta porque descobriram suas saúdes ou para pedirem favor do retorno se teto).
*   **R**econdução (O servidor volta para seu cargo reativo antigo pois reprova no teste de cargo novo probatório ou pelo Reintegro de terceiro)
*   **A**proveitamento (Dá função para a Servidora que se localiza paralisada em disponibilidade sem cadeira até vagar novo oficio a ele/a compatíveis)
*   **R**eadaptação: Quando ele retorna num departamento semelhante porque adoeceu ou limitou. (Um mecânico estourou ligamento da lombar e retornará carimbando no balcão protocolizado).

## 2. Vacância (A "Cadeira Desocupada")
As 7 Modalidades inversas. Formam a "Vacancia" os processos:
Exoneração (saindo do trabalho do bem) e Demissão (saindo por crime grave na maldade civil/Penal!). Ou pela Aposentadorias e o Falecimento (Obito) além da subidas verticais / Possível readaptação (se tu mudar tu desocupa o primeiro e prova outro provimento!)
    `
  },
  {
    subj: 'Legislação Geral', level: 'Médio', sub: 'Noções de Licitações (Lei 14.133/21)',
    content: `
# Nova Lei de Licitações Básica: Conceitos Lógicos e o "Tripé" (14.133)

Diferente do monstro que era a 8.666/93; Em editais para níveis médios eles querem o simples entendimento:

## 1. O que é o Processo Licitário?
O processo perene de escolhas em que a Autarquia compra uma frota nova e garante por edital público que todos os Cidadãos com Loja Consigam Vender Justamente concorrendo no preço final sem apadrinhados e por metas de Vantajosidade na poupança dos tributos. Todo certame deve objetivar três missões (Seleção da Proposta mais Favorável / Proteger a Isonomia / Favorecer Desenvolvimentos pátrios tecnológicos ou de sustentabilidades sociais).

## 2. Fases de uma Licitação Moderna
As provas sempre perguntam A FASE. A Lei 14 inverteu e simplificou modernizando o Rito.
*   **Preparatória/Interna.**
*   **Divulgação O Edital.** (*Publicam para o povo*)
*   **Apresentações Das Propostas/Lances.** (Abre as cortinas nos portais de propostas de Comprando).
*   **Julgamentos.** (Escolhe O Menor Custo/Técnica/Valor e diz – “Você Ganhador”)
*   **Habilitação (Inversão de ritos!)**: Só o VENCEDOR passará agora por exames rigorosos orçamentárias nos cartórios, atestando ter caixa suficiente para honrar aquela frota e ficha limpas. Antes olhava os atestes de todos, agora é só do último melhor colocado!

## 3. Principais Modalidades a Conhecer Básicas:
1.  **Pregões (Virtual em foco):** Bens Focados e Serviços de Natureza "Comum" (Notebook ou Água; ou Varreduras de pátios. Aquilos de baixo peso especifico não focado num artífice de qualidade ímpar).
2.  **Concorrências:** As contratações de Engenharias gigantes (Construir ponte na pista/Túnel do morro!).
    `
  },
  {
    subj: 'Legislação Geral', level: 'Médio', sub: 'Lei de Improbidade (Lei 8.429/92 alterada)',
    content: `
# Lei 8.429/92 - Nova Improbidade (Dolo OBRIGATÓRIO!)

O mais cobrado no concurso público atualmente na Lei da Improbidade Administrativa foi a mudança estrutural legislativa gerada no cerne e corpo da lei.

## O Que É Improbidade?
São atitudes criminosas civis focadas que deterioram diretamente a lealdade ou saqueiem financeiramente uma Prefeitura ou União, sejam por civis engajados nas corrupções ou prefeitos desonestos.

## **DICA DE OURO: Acabou-se a Modalidade CULPOSA!**
Hoje (após atualizações e ADIN no supremo), NENHUM crime de Improbidade Administrativa pune pessoas que esqueceram, cometeram falhas bobas imperícia inofensiva e sem ambições. **Para existir um dolo tem que haver Vontade Livre e Consciente de ROUBAR / PREJUDICAR a MÁQUINA.** Condutas culposas (que não têm inteção de dano) por mero desleixo não tipificam improbidades!

## Os 3 Eixos dos Atos
1.  **Atos de Enriquecimento Ilícito (Art 9º)** (O Pior crime e o com maior severidade na lei). O Funcionário ROUBOU algo para botar em SEUS BOLSOS! Ex: O Prefeito pediu Mesada da Construtora e a Guardou.
2.  **Atos de Prejuízo no Erário Público (Art 10)** O Funcionário ajudou sem perceber o seu próprio enriquecer, mas ele facilitou com seu mal agir intencional a um parente esvaziar os cofres por favorecimentos sem lucro! – a pena e o repasso foi para bolsos externos – Ex. Prefeito contrata Construtora de Primo Sabendo das Fraudes orçamentárias com danos enormes à cidade – Prejuízos causados de Dolo.
3.  **Atos Contrários Principios da ADE (Art 11)** Afrontas Diretas onde o Financeiros e erário nem sequer mexeu! – Um edital do Governo feito as ESCONDIDAS (Afronta Total com Culpabilidade Dolo da Publicidade) que nem gastou – É imoral e tipificado por improbidade. 

Lembre-se: O Rito da ação pune as propriedades e suspende direitos à votar/ser candidato! (E o prazo decai em 8 anos!)
    `
  },
  // ÉTICA NO SERVIÇO PÚBLICO (MÉDIO)
  {
    subj: 'Ética no Serviço Público', level: 'Médio', sub: 'Regras Deontológicas',
    content: `
# Decreto 1.171/94 - Parte I: Regras Deontológicas e Conduta

O Decreto 1.171 de 1994 apresenta a essência do regramento para Executivo Federal, uma carta normativa amada e frequente. A porção mais nobre e cobrada se consolida pelas regras Deontológicas de princípios primários as quais todo novato estatuto deverá absorver a obediências perpétuas.

## 1. Valores Fundamentais e Básicos - O Pilar Norte 
*   "A dignidade, o decoro, o zelo, a eficácia e a consciência de princípios" formarão o conduto perene. As obrigatoriedades se espelharão **no trabalho E TAMBÉM NA SUA VIDA PRIVADA**. 
*   **Banca adora dizer**: *"Fora da prefeitura as regras morais estão soltas"*. **ERRADO!** Vida dupla depõe de ofícios do Estado! A atitude ruim na churrascaria reflete na sua carreira da Fazenda Federal/INSS.
*   Entre 2 posturas a que será devida para a ação final sempre é pautada naquele que é **O BEM COMUM**, ou seja – Nunca procure do bom nem do pior - e sim do Povo.  As atitudes da legalidades estão presas num dever mais elevado - *Se não é justo no dia social, não aja mesmo se a linha cinza permitir.* 

## 2. Direitos da População ao Atendimento Isonômico. 
O servidor tem sob custódia não apenas "processos", e sim o destino humano de filas angustiosas! Em resumo legal - **"Deixar quem os pede à procura pelas esperas enfadonhas imotivas É MULTIPAR UMA DANO MORAL DA ADMINISTRAÇÃO".** 

Lembre sempre da Transparência! Os Códigos repassam por regra o segredo sigiloso a dados de patentes / estado sensível como excludentes mas repassam como AÇÕES NATURAIS A PLENA PUBLICIDADE. “Se é segredo está sob justificativas duras” e Todo outro documento deve ser liberado – a Publicidade reflete a meta de Estado perene contra governos tiranos do Passos.
    `
  },
  {
    subj: 'Ética no Serviço Público', level: 'Médio', sub: 'Vedações ao Servidor',
    content: `
# Decreto 1.171/94 - Parte II: As Proibições Severas do Servidor Federal 

No decreto existem uma lista extensas e cruéis que são motivos de comissões pesadas punitivas para afastar e cassar as éticas das comissões diárias! Decorá-las garante o prumo! 

## As Grandes Vedações Éticas! (O QUE É PROIBIDO AO GOVERNANTE / AGENTE)
**É ESTRITAMENTE VEDADO, sob pena censuradas as manutenções das éticas ao Servidor nas lides de dia a dia:**  
1.  O Uso Expresso de Informações Restritas aos favores Próprios, para seus vizinhos, sócios de família - Informação Sigilada e valiosa só é veiculados no tráfego necessário!  Dará advertências! E crimes penais de espionagem estatais se comercializadas! 
2.  Deixar De se Posicionar nos Casos Críticos, usar sua capacidade para atrapalhar um processo interno / Embaçar vistas, gerando Atrasos Sistêmicos na Emissão nas Licenças / Processuais do Colega por Pura mesquinhez ! A Falsa Lerdeza (Corpo -mole) no órgão é vedação clássica!  
3.  Utilizar sua patente da portaria / Credenciais para arrumarem Facilidade Particular Nas filas Cidadãs, Carteiradas em Blitz das polícias, Embalos nos Cinemas.  As hierarquias as limitam no portão para com a sociedade as lides se tratam pelo CPF Isônomio! 
4.  Participidades em Trabalhos de sociedades paralelas aos Oficios (Tanto Privadas onde o poder atuar fiscalizando em que for O Gerente). Você sendo Policial civil não poderá abrir Loja / Segurança no nome - e ser Sócio Fiscalizados da Receita a ser Advogado Geral das contas - Cria Anomalia total – Súmula do conflitos Pessoais Interesses! 

Se cair na prova uma afirmação como *“Se a prefeitura estiver fechadas não causa nenhum probemética em tirar o material grampeados para dar um adianto pra tua faculdades a noite"* -> **O Item erra mortalmente! - Tudo do Estado se retira SÓ pela anuências formalizadas na rubrica ! Do Contrário caracteriza Purgatório de Furtos menores morais.**
    `
  },
  {
    subj: 'Ética no Serviço Público', level: 'Médio', sub: 'Comissão de Ética',
    content: `
# Decreto 1.171/94 - Parte III: A Comissão de Ética e as Punições Curiosas

Bancas gostam e muito desse final da Cidadania Normatizavas. Em cada Orgao Publico da repartições haverá que constará por obrigar nas leis as suas próprias instâncias morais encarregada da vigilância.  A Comissão!

## A Estrutura Da Comissão Mestra de Cada Órgãos (A Junta)! 
Composto pelas 3 PESSOAS da mais alta decências (3 Servidores Fichas limpas – Nunca Pessoas Temporárias Sem Lastro Administrativos - Mas Membros Perene / Efetivados das estribeiras de carreira que julgar as pares)! 
São ELES que instrui, fornece regras locais de conduta pro órgão e acionam sanções.

## A Grande "Pegadinha" de Concursos na Punição: A Pena EXCLUSIVA da Comissão! 
É natural acharem porque o conselho de comissäo têm juízes no comitê de ética ele podem DEMITIR e afastar as propinas dos servitórios faltantes nas éticas! --- E **A RESPOSTA É "NÃO!"**
*   Diferente das esferas jurídicas de sindicâncias pesadas em Processões (PAD) as quiass os Chefes e PAD apenem nas Demissões graves e exonere dos Salários! **NAS COMISSÕES DE ÉTICAS SÓ HÁ COMO CONDENAÇÃO APENAS UMA CONDUTA PUNITIVA NO ESTATUTO INTEIRO ---> A CENSURA!!!!!!!!!** 
*   **Dica matadora:** Se a prova disser *"A Comissão de Ética do órgão poderá aplicar suspensão ou multa no servidor..."* - FALSO! É Censura Escrita (Uma bronca oficial registrada no assentamento individual de sua caderneta - Para sujar promoções). Nada mais pode ser aplicado por aqueles 3 senhores! Eles até remetem o papel com a Censura e denúncias para os superiores em Ministérios a abrir um processo PAD (estes sim cortariam salário). Mas em escopo de Ética apenas Censuradas Escritas mancham seu caderno! 
    `
  }
];

async function run() {
  try {
    await client.connect();
    console.log("Starting massive update for Lote 1 - Part 2...");
    
    for (const item of data) {
      const q = `
        UPDATE "SubTopic" st
        SET content = $1
        FROM "Topic" t, "Subject" s
        WHERE st."topicId" = t.id AND t."subjectId" = s.id
          AND st.name = $2 AND s.name = $3 AND s.level = $4
      `;
      const res = await client.query(q, [item.content.trim(), item.sub, item.subj, item.level]);
      console.log(`Updated ${item.sub} (${item.subj}): ${res.rowCount} rows`);
    }
    console.log("Batch 2 complete!");
  } catch(e) {
    console.error(e);
  } finally {
    client.end();
  }
}

run();
