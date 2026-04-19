const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const data = [
  // LÍNGUA PORTUGUESA (Faltantes Médio/Superior)
  { subj: 'Língua Portuguesa', level: 'Médio', sub: 'A Vírgula no Período Composto', content: `
# A Vírgula no Período Composto (Orações)

No período composto, nós não estamos separando palavras soltas, estamos separando frases intiras baseadas nos seus conectivos! A regra mágica gira em torno das Conjunções que já estudamos.

## Orações Coordenadas (Independentes)
*   Asição: Usa-se vírgula ANTES das conjunções (mas, porém, logo, pois, ou). "Estudou muito, **mas** reprovou". (Exceção: A conjunção 'E' só ganha vírgula quando o sujeito da segunda frase for diferente da primeira frase).
*   A Coordenada Assindética (Aquelas orações cruas que não tem conjuções unindo-as) são separadas OBRIGATORIAMENTE por vírgulas. "Entrou, sentou, jantou."

## Orações Subordinadas (Mãe e Filha)
*   **Adjetivas Explicativas:** Agem como um aposto, um "fofoqueiro" gigantesco na Frase. SEMPRE vêm ilhadas com vírgulas. Ex: "Pelé, *que foi tricampeão*, adorava o Santos!"
*   **Adjetivas Restritivas:** Diretas! NÃO LEVAM VÍRGULA! Ex: "Os alunos *que estudaram* passaram". (Não foram todos que passaram, apenas o grupo que estudou).

> Pegadinha FCC: Trocar a restritiva por explicativa (pôr vírgula) mantém a frase certa gramaticalmente, mas ALTERA O SENTIDO bruscamente! Se eu digo: "Os alunos, que estudaram, passaram" (Com vírgula) -> Significa que A SALA INTEIRA estudou, e consequentemente, a sala inteira passou!
  `},
  { subj: 'Língua Portuguesa', level: 'Superior', sub: 'Ironia e Antítese', content: `
# Figuras de Pensamento: A Guerra Semântica

A língua portuguesa em textos literários ou jornalísticos avança para expressar o "impróprio".

## 1. Antítese (A Oposição Limpa)
A Antítese expõe na mesma sentença duas palavras de carga semântica extrema contrária, a fim de gerar ênfase no raciocínio. Contudo, ela é LÓGICA! 
Ex: "Os **bons** e os **maus** se encontram na morte". Repare que ter gente boa e má é possível na realidade do fato.
Ex2: "Nasceu na **luz**, mas vive nas **trevas**".

## 2. Paradoxo (O Curto-Circuito Lógico)
Aqui mora a casca de banana das bancas Superiores (Eles sempre colocam paradóxo como alternativa certa pra quem marcou Antitese!). O Paradoxo é a fusão impossível! A ideia quebra a física.
Ex: "O Silêncio gritou na sala". (Silêncio absoluto não emite voz). 
Ex2: "Estou cego, porém vejo tudo".

## 3. Ironia (O Veneno Disfarçado)
Consiste em afirmar o exato contrário do seu julgamento real para achincalhar/atingir o alvo com sátira, dependendo muito da modulação ou do contexto para o leitor perceber que é Mentira! 
"Que rapaz **inteligente**! Entregou as respostas da prova para o concorrente."
  `},
  { subj: 'Língua Portuguesa', level: 'Superior', sub: 'Metáfora e Metonímia', content: `
# Figuras de Palavras: Substituições Famosas

A troca de um termo por outro é o pão diário dos grandes da Literatura (Machado de Assis / Clarice) e costuma despencar no Cebraspe.

## 1. A Metáfora: A Comparação Cega
Diferente da Comparação onde usamos clareza ("Teus olhos são **como** jabuticabas"), a Metáfora é agressiva. Ela arranca a palavra "como" e impõe a fusão. 
Ex: "Teus olhos **são** jabuticabas". (Isso é falso literalmente, mas lindo poeticamente). 

## 2. Metonímia (Troca por Proximidade Lógica)
A principal de provas. É quando eu uso uma palavra em lugar da outra, pois elas têm tamanha afinidade cultural que o cérebro resolve o hiato sozinho. Ocorre de várias formas:
*   **O Autor pela Obra:** "Eu li Machado de Assis hoje". (Você não leu o corpo do homem morto, você leu o LIVRO).
*   **Marca pelo Produto:** "Comprei Cotonete e Bom Bril". (Na verdade comprou Hastes Flexíveis e Palha de Aço).
*   **A Parte pelo Todo:** "As cabeças de gado cruzavam o pasto". (O gado inteiro andou, e não só as cabeças soltas).
*   **Continente pelo Conteúdo:** "Eu comi dois pratos deliciosos hoje". (Você comeu a comida; engolir a porcelana ou o vidro causaria letalidade!).
  `},

  // INFORMÁTICA / ATUALIDADES / ATENDIMENTO
  { subj: 'Atendimento e Ética', level: 'Médio', sub: 'CRM e Fidelização', content: `
# CRM (Customer Relationship Management) e a Fidelização

Em cargos de Bancos (BB/Caixa) ou Correios, não basta vender: o objetivo do lucro está atrelado à manutenção perpétua do usuário na base de dados (Fidelização).

## 1. O Que É o bendito CRM?
Marketing de Relacionamento atinge o ápice pelo uso do CRM (Gestão de Relacionamento do Cliente). CRM nada mais é que um conceito forte apoiado numa suíte de Software. 
Objetivo: Mapear tudo! O sistema cruza os dados do indivíduo: idade, última vez que logou, seus padrões de pagamentos, seus gostos... Com base nessa predição, o atendente ou o Banco pode ofertar antecipadamente cartões específicos pra ele sem "incomodar" cegamente.

## 2. Fidelização Retém Mais Lucro
Regra clássica do Marketing (Kotler): "Custa de 5 a 7 vezes mais conquistar um NOVO cliente do que manter e fidelizar o SEU atual."
Portanto, a "Fidelização" (cliente fiel) perpassa a esfera do "Satisfeito". O cliente satisfeito pode ir embora e comprar da concorrência amanhã; O *Fidelizado* torna-se Advogado da Marca (A defende, não abandona pelo preço do vizinho e sente conexão de lealdar o serviço).
  `},
  { subj: 'Atendimento e Ética', level: 'Médio', sub: 'Qualidade no Atendimento Telefônico', content: `
# Regras de Ética em Atendimentos e Fluxos Remotos

## O Papel da Empatia no Call Center (SAC)
Atender um cidadão no balcão é díficil, atende-lo pelo cordão do Telefone num SAC governamental exige uma proeza chamada **Escuta Ativa**. A Escuta Ativa não é ficar calado ouvindo resmungos: É dizer *"Sim, senhor. Entendo seu cenário..."* e balizar confirmando os fatos na mente dele para apaziguar tensões (Rapport).

## Padrões de Atendimento ao telefone:
*   Atenda a chamada preferencialmente até o 3º toque (Nunca demore).
*   Bancas cobram qual a primeira frase: SEMPRE a sua Identificação / Órgão + Oferecer ajuda! Ex: *"Ministério da Saúde, João falando, bom dia! Como posso ajudá-lo?"*. É falta grave dizer "Alô?".
*   Transferências justas: Se não cabe a ti o caso, explique por que vai transferir a ele. Não repasse o cidadão pro além sem explicar o "porquê" ele está indo.
*   Retorno Programado: O SAC tem que ter SLAs normatizados para as Ouvidorias estatais, sempre obedecendo a impessoalidade e clareza total.
  `},
  { subj: 'Atualidades', level: 'Médio', sub: 'Economia Brasileira Atual', content: `
# A Macroeconomia Contemporânea do Brasil 

Para bancas como CEBRASPE e FCC, não basta ler notícias sensacionalistas, você deve saber ler os índices oficiais. 

## 1. O COPOM e a Selic!
O Comitê de Políticas Monetárias a cada ~45 dias sobe ou desce o famoso Juros da economia (Taxa Selic). Por quê? 
*   Se a INFLAÇÃO sobe, preços ficam caros. Pro banco "trancar" os gastos da população, ele Puxa a Selic para Alto (Fica caro sacar empréstimo, o povo retrai grana, comércio cai e esfria os preços da Gôndola).
*   Se o Brasil tá em recessos (parado) O Governo Corta a Selic: Fica baratinho pegar dólares nos bancos; A Galera monta construtora e as taxas de desempregos caem num aquecimento frenético. 

## 2. IPCA e O Desafio Central
O IPCA é o medidor Oficial de inflações das prateleiras do povo brasileiro. O Governo traça uma META anual. 

A grande discussão cobrada hoje gira em tornos do "Arcabouço Fiscal" (A Nova regência que o Tesouro fez p/ limitar como se os prefeitos podem subir gastanças sem lascarem as devidas arrecadações), além de tensões da dívida do Pib e Reformas Fiscais votadas pelas pautas da tributação únicas (O imposto IVA que trará unificações de ICMS e ISS).  
  `},
  { subj: 'Atualidades', level: 'Médio', sub: 'Geopolítica e Conflitos Atuais', content: `
# Panorama Mundial de Conflitos e Geopolítica Modernos

Um Concursando que se preza jamais vai à sala sem os panos de fundo do ano corrente dominado. O eixo principal das atualidades mora nas rupturas das alianças!

## 1. As Extensões Leste (Ucrânia) e Orientes
A investida Leste perpassa essencialmente num fator: Controle logístico territorial de Otação e os Portões eslavos. Provas da FCC adoram usar palavras chaves: Soberanias Ameaçadas, Conglomerados do Otan vs Blocos de Cortina. As sansões econômicas ocidentais vs Uso do barril de Energia como alavanca de preços!   

## 2. Israel e Oriente Próximo
Saber distinguir Autoridade Palestina, Gaza (Muro do mediterrâneo e atuação da Hamas), Cisjordania. É um conflito que tem raízes em resolutividades da ONU estagnadas do pós guerra num panorama misto teológicos X demarcações coloniais. O Foco da banca não será perguntar quem está certo/errado mas como A Disputada dos Mares Vermelhos (pelos Hutis afetandos exportações pelo canal de Suez encarecendo tudo para Ocidente). 

## 3. Blocos BRICS Expansionista
O BRICs era pequeninho (Brasil, URSS, India, China, SAF). Na cúpula se expandiu absurdamente, virando as cartas à polarização global anti-Dólar; recebendo a entrada do Egito, Irã, Emirados Arabes. Isso tira do G7 a monopolização financeira imperial global e faz o eixo Asiano ter forçam em negociações sem usarem swift bancario comum.
  `},
  { subj: 'Informática', level: 'Médio', sub: 'Segurança em Redes Sociais', content: `
# Segurança em Dispositivos e Nuvens 

As bancas saíram daquelas provas antigas de perguntar o atalho do "Ctrl+C", o negócio agora é Hacker e Cybersegurança Corporativa! 

## Engenharia Social Moderna 
Todo programa de defesa é vulnerável no quesito Humano! O maior malware do servidor não é vírus executável, é A Bobeira do funcionário ao relatar senhas pro trote telefonico ("Phishings" e "Spear Phishings" muito bem executados com logotipo de banco fingindo pedir recadastramento por causa de um 'erro na conta'). 

## A dupla Fatorações - (MFA/2Fa)
As senhas caíram. Se usar senha apenas, serás invadido em 12 horas nos servidores de e-mail corporativo. Para impedir pedem as segundas camadas de autênticas: **Biometrias** (Impressões ou retinas da sua essência inerente), **Tokens Físicos** (A Coisa física que só tua tem inserida na algibeira ou cartões magnetóides), e o Pin Temporário pelo SMS/Aplicativos (Algo de seu conhecimento memorizavel condicionado!). As provas chamam isso de Acesso Triplo: Algo que você (Tem), Algo que você (É - Biometria) e Algo que você (Sabe - Senhas).
  `},
  { subj: 'Informática', level: 'Médio', sub: 'Modelos SaaS, PaaS e IaaS', content: `
# Computação Nas Nuvens (Cloud Computing)

Nuvem não é um HD mágico nos céus que cai água. Nuvem é O Computador do Dono da Amazon (AWS), da Microsoft (Azure) ou Google alugado pelo Governo pra evitar construir a torre do servidor na Prefeitura da cidade. 

As modalidades de Contratação são o Filet Mignon dessas provinhas Vunesp:
### IaaS (Infraestrutura Como Serviço)
Eu só te dou O COMPUTADOR NU / FERRO/ HDs (O Hardware na Sala). Eu banco IaaS! O prefeito tem que contratar técnicos de infra para montar instalar windowns nele pelo remoto, plugar rede. (Muito controle ao comprador e o de Alta complexidade!).

### PaaS (Plataforma Como Serviço)
Eu dou o Hardware E a Base operacional (Linux, Banco de Dados, Bibliotecas Pycharm embutida). Feito exclusivo pro **Desenvolvedor de Software** da prefeitura não perder tempo configurando pendrive e ir diretão lá codificar o App de impostos!  

### SaaS (Software Como Um Serviço)
É a Nuvem "Gourmet"! O produto final chega mastigado pro Zé e pra Maria Cidadã! Não tem controle, apenas usa a interface. Ex: **Netflix**, **Google Drive**, **Office 365, Gmail Cloud**. O usário paga a conta do mês e gasta 0 neuronio em infraestrura; Loga na tela e consome. 
  `},

  // DIREITO PÚBLICO AVANÇADO E AFO (NÍVEL SUPERIOR)
  { subj: 'Administração Pública', level: 'Superior', sub: 'PPA, LDO e LOA', content: `
# A Tríade do Orçamento - PPA / LDO / LOA  (AFO)

Administração Orçamentária e as finanças Estatais seguem um rito sagrado para que o tesouro cumpra o cronograma do ano, sendo pautado na Constituição art 165. Elas são Leis Ordinárias De Iniciativa Exclusiva do Chefe do Executivo (Prefeitos / Governadodor/ Presidente da Rep.).

## 1. PPA (O Sonhador Estratégico em 4 Anos)
O Plano Plurianual determina a "Estruturas de grandes voos e diretrizes" ao Longo Prazo do governante. Sua duração transpassa os calendários! O presidente eleito o formula num ano e ele vigorará PELOS QUATROS ANOS subseguntes (Até o primeiro ano de mandato fixo de um prefeito próximo! Pra evitar q a cidade paralise em caso da entrada do prefeito adversário). É exigido pra obras pesadas q extrapolam ciclos unícos anuariais. 

## 2. LDO (A Bússula e Mãe dos Metas Básicos)
A Lei de Diretrizes Orçamentária Funciona igual um Sinaleiro Feroz - Seu Vigor E Foco Tático e anual! Antes de a LOA chegar farta com dinheiro, a LDO quem pautou os limiares as metas urgentes que vão englobar o orçamento focado do exercicio a se seguir (Sela como se muda o funcionalismo civil da folha, ajeita taxas, prioriza gastos para hospitais naquele momento curto). Mnemônico: LDO é o Elo elástico dos sonhadoros de Longe do (PPA) com o dinheiro Real no LooA). 

## 3. LOA (O Cofre de Aço Verdadeiro / A Carteira do Dinheiro Vivo)
A Lei Orçamentária do Âno Fiscal (Anualidade plena). Aqui nela Fixam as DESPESAS LIMITES E ESTIMAM a Receita de arrecadar para rodar aquela maquina na execução final do ano! 
Quem Aprova os 3 Cadernos Gigantes para O Tesouro Nacional Gastar? O Poder Legislativo (O CONGRESSO!) é quem detém a caneta final para chancelos sem rasuras nas folhas!
  `},
  { subj: 'Administração Pública', level: 'Superior', sub: 'Princípios Orçamentários', content: `
# Os Princípios de AFO (O "Credo" Orçamentar)

O dinheiro não sai por qualquer folha ou balcão da República. Existe um sistema de rédeas constitutas (Princípio) aos regimentos da AFO. As policias superiores testam isso aos Auditórios fiscais das carreitas.

## As Regras Básicas:
*   **A Anualidade (Periodicidades Exatas):** Uma lei de orçamento deve fixar as despesas rigorosamente estimadas no ano Fiscal do brasil (que coincide do dia 1 de jan ao último d dezembro no calendário normal!). O recurso alocado a um ano é de morte contínua no dia 31 de dezembro a validade de empenhos frouxos sem liquidar pra restos.
*   **O da Unidade (Totalidade Feroz):** É a regra que impõe haver Uma única peça principal orçamentárias (1 LOA consolidado para cada ente da esfera – O Governo tem 1 Orçamento Nacional (Uma Lei), onde ali dentro empacota tudo). Ele é Unico por Ente Público Fisco!
*   **Universalidade e o Nada Escondidinhos:** Exige OBRIGATORIEDADES plenas para a Lei Orcamentariana abraçar AS TODAS as receitas e TODAS AS Despesas totais e ilimitáveis dos poderio do estado, em fundos ou orgão. Dinheiro no porão não prestador do livro se tipifica em corrupção da rubrica negra!
*   **Não Afetação do Tributo - Impostos Lívres:** Salvo das exceções raras de verba dos fundos educadores, FPE da saúde garantidas... você NÃO APONTA as vinculações da receita de UM ÚNICO IMPOSTO (tipo ICMS) amarrado com laço para financiar obras ou despesejos do órgão solto.   
  `},
  { subj: 'Administração Pública', level: 'Superior', sub: 'Análise SWOT (Matriz FOFA)', content: `
# Análise Externa e Interna das Instituições

O planejamento Estratégico moderno precisa tirar o Governo de achismos e jogá-lo numa prancheta visiva para a cúpula saber se atacar, recuar ou defender os departamentos. 

A SWOT, traduzida no tupiniquim das bancas como MÁTRIZ FOFA, trabalha em quadrantes que os consurseitos reprovam se não souberem o pulo de gato: AS VARIÁVEIS SOB CONTROLE e As Sem Controle! 

## Os 2 Fatores: INTERNO vs EXTERNO! 
*   **O Campo Interno da Minha Prefeitura:** (Forças E as Fraquezas). O Prefeito pode dominar se treina a frota de policias municipais pra ser fortes, Ou pode demitir todos os secretários q roubam e trazem fraquezas ao sistema interno. O Ente ESTÁ NO CONTROLE para erradicar As Fraquezas próprias do chassi dele. 
*   **O Campo Externo (Lá fora no universo!):** (As Ameaças e Oportunidades). O Prefeito NÃO DOMINA OS EXTERNOS, Apenas mitiga, se preparam nos muros ou surfa na sorte. 
Exemplo de Ameaça Extrema pro orgão: Um Furacões destruiu as pontes / Uma mudança no Juros do Dólares nos Eua falida a economia ! 
Exemplo Opurtunidades que surgiu solta Fora: Um investimento gigante e novo das montadoras no interior asiático vindo montar loja no país ao lado e sua capital virando rota. Ele surfa nela pra fazer capital.  
  `},
  { subj: 'Administração Pública', level: 'Superior', sub: 'Balanced Scorecard (BSC)', content: `
# Planejamento Em BSC (A Tabela Geral das Visões)

Trata da forma macro de não focar as visões de avaliações estratégias somente nos cifrões dourados de "LUCROS". BSC é criado em 90s, propensa 4 Perspectivas para Equilibrar O Tablado da Empresa na parede de métricas equilibrando Passados, futuros e focos das missões de Longo Trato!  O Edital de Carreiras Focadas ama perguntá-las!

### As 4 Caixinhas Mágicas dos ScoreCads
1.  **A Perspectiva Financeira:** O pilar antigo. Como agrada O Dono da prefeitura (Arrecadar/Reduzir os Custos inúteis da máquina).
2.  **Dos Clientes e Sociedade (Para orgão público O Clientelário é sempre o Povo/Cidadões):** Foca os Índies de Aprovação geral, como estão enxergando seu Atendimento a demandas no balcão e as soluções da espera nas crechê! (O Ouro dós serviços públicos mora no foco cliente!).
3.  **Os Processos da Internidade Máquinas:** A Linha Fabril ! Avaliações de eficiências por dentro: Reduzimos Papelarias do processo Judicias em Fóruns pro Juiz Julgar as Causos rápido (Acelerar Processo = ganha-se pontuação em métricas Táticas operátórias internas e reflete pro Cidadão na janela vizinha). 
4.  **A Aprendizagens / Inovações Crescentes:** Os alicerces da inovadoras! Os servidores estão indo pra pós graduções (Treinamentos Rótineiros)? Os softwares dos PC's estão inovados em atualizações pica das nuvems modernas? Focar nisso hoje é o q garante o futuro produtivo nas outras três cascalhas da caixa amanhã. 
  `},

  // DIREITO PÚBLICO SUPERIOR (ADMINISTRATIVO, CONSTITUCIONAL E PENAL)
  { subj: 'Direito Administrativo', level: 'Superior', sub: 'Poder de Polícia', content: `
# Poderes de Polícia: Muito Além do Homem Armado

Nível Superior requer diferenciar as 4 Fases Práticas do Poder Feroz Estatal sobre as Individualidades Cidadãs. 
O Poder de Polícia impõe a Supremacia Publica restritiva ou condenadores à direitos parciais de "fazeres e usufruir da sociedade das gentes normais", quando estas ameacam O TODO BEM da Vida pública. (Ex: Bloquear na Blitz seu Lancer barulhento das pistas não é prender bandidos (Policia Judiciária Civil de tribunais) - é a verdadeira "Policia d Administração e transito da Autarquia"). 

## O Ciclo Completo (Ordem, Consentir, Fiscais, Sancionadora) 
*   **Ordem De policia:** Lei estrita. A Prefeitura publica Decreto com as Regras de proibido pollução (É o inicio abstratos indelegàveis do rito!).
*   **Consentimento (Licenças):** A Parte que a Banca brincas nos Delegações do alvará - Ao pedir um Habite-se para construir uma casinha na encostas - o Poder vai checar seus cimentários na fundação consentido as aprovações! (Essa parte do ciclo a Banca pode delegar a Empresas Terceirtadas para aferirem Laudo ! - ATENÇÃO SFAVOR). 
*   **A Fiscalização dos Terrenos:** As roletas pelas ruelhas em caminhonetes azuis. O olhar pro asfalto pra pegar a irregularidade da massa ou feira no dia. 
*   **A Punição(Sanções do Ato):** Embargar Obra / Aplicarem Multas! (Atencao Superiores - S.T.F em decisão recentissima PODE SIM delegar a Sanção da Policia pra estatais que ganhem Lucrativos ou consórcios de Capital Público da PM/Transitos se autorizados - A pegadinha cruel que muda o passado inteiro da jurisprudências onde Sanções antes erão exclusivas indelegadas do rei!). 
  `},
  { subj: 'Direito Administrativo', level: 'Superior', sub: 'Poder Hierárquico e Disciplinar', content: `
# Organização de Força e Punições Domésticas

Hierarquia e a Disciplina dão um norte e comando à repartição publica (A Subordinação Escalada Administrativa). 

## 1. O Poder Hierárquico (Estruturador) 
É O Poder vertical de organizar órgãos internos governamentivos em escalões dos donos chefões da Uniao pro os Pés frios subordinadas da ponta. 
*   No Poder hierárquico Nascem AS ferramentas de "Avocar Carga" (Pegar competência do de baixo subornidado pra Cima nas garras do chefes do conselhos quando urgentes das resolutos). Mas não se avoca nunca Atitude de exclusividade de alguem nem julgados os Recuros nas esferas.
*   Nasce dele as feramentas em Delegares atitudes pros níveis inferiores por auxiliancis (Desafogar gargalos - Não é possivel os tribunamentos Decretos Normativas Nuncas nem julgar Recuros Delegarem pros Pés Frios!).

## 2. A Força Disciplinadores do Punição! (Poder Disciplinar e seus Limiares) 
Onde reside e atua a forja punitiva - as investigacoes com PAD sindicaticas prós servidores rebelantes das suas obrigações funcionais do dia! O Poder punitiva disciplinar se pauta em averigurares se tem nexos internos os vínculos das pessoas cometidas ilicitamentes ou a contratada. Jamais um Prefeito usa Força Disciplinar pra BATER num Cidadão Sem Vinculos que pixou o banco pracial (Contra Sem-Vínculos Pessoais / Estatutares / Das Contratadas se impõe as FORCAS EXCLUSIVAS do PODER DE POLICIA Extremo!! Jamais de Disciplinanar).
  `},
  { subj: 'Direito Constitucional', level: 'Superior', sub: 'Mandado de Injunção', content: `
# O Remédio de Combates à "Síndrome da Ineficácia das Normas Constitucionais"

As Constituições mais belas formam Normas que a gente dá nome "De Eficácias Limitadas" na tipologias do Silva (Eles são lindos direitos prometidos no Papel - "Haverá um Direito de greve aso serviçários", Contudo a CF disse: "*Nos termos de UMA LEI que deverá as regulamentarem pelos deputados próximos futurus*"). 

Os anos passam 2 décadas rodando ao vento e o congresso vagabundos NÃO EDITA A BENDITA LEI da regra da Greves! Daí você é servidor, seu estado paralisou o hospital e você quer fazer grep mas corre o perigo total por ficar exposto nas faltências ao tribunal. É O Caos da Omissão de Congresos.

Para salvar vidas - Acionamos o **O MANDADO DE INJUNÇÂES!** 

## Quando Usar? 
No caso supremo das **Ausência de normas do regulamentos,**  Onde essas lerdezas Omissivos tornem INVIÁVEIS E INEFICAZ os exercicios básicos sobre Direitos Da Nacionalidade, da Cidadania ou Constituições firmadas plenas da Soberania! Ele não exige pagar as Custas do processo (A menos q hajam Litigios de Maféb). 
Ele não cria "Leis pelo Juiz" - ele apenas Apele ao Supremo "Me dá a ferramenta agora quebra Galha usando base provisoria pra eu exercer meus faturamentos até que O Congresso Acorde Do Berço" (Esse modelo chaman de Rito "Concretista Diretos" que O STF usou a muito custo com o exemplo da greves estendendo CLT a eles).
  `},
  { subj: 'Direito Constitucional', level: 'Superior', sub: 'Ação Civil Pública', content: `
# Defesas das Coletividades na ACP! 

As causas do Remédio da ação civil pública sãos o coringa da Promotorias Judiciais para varrer os crimes pesados nas indústrias Poluidoras Ambientais! 

## Os Legitimados Fortes (Quem Pode Acionar à Justiça em Acp)
A lei restringe que cidadã solítario no Brasil (Seu Cpf na esquina) processe um ACP das valas Sujas ambientões. (Cidadão normal das esquinas só Processam Via a Famosas **"Ações Populares!" e Anulacionais**)  
A Acp - Civil pública Exige o peso de "Institucionais": Minisérioz das Promtórios Público e da Defenderoria Gerais!! E a União , O DF, E ESTADO inteiros / Prefeitos.   Além de As Autarquia!  

*As Pegadinhas Gigantes de Ouro de Legitimado em ACPs de bancas Feroz:* 
PODEM Sim os Agrupamentos (As Associações Comunitárias Privadas de defesas dos bairros!) - CONTANDO SE que ela Esteja nas Pré Formadas ativas nas junta Jurídicas REGISTRICAS EM CARTÓRO HÁ MAIS NO MINÍMO **De UMA (1) ANUIDADE (1 ANO Válidos e registrados prévios as lides de acidentar ambientals).** Esse lapso em tempo servem  para as Máfias das Ocorrencials oportunistas nao montares cnpj d manhas após tragédias e surfaer lucros nos perdas danos indenixatorias alheas de vales doce, por exclusões legais das proteçoes civil de danos aos bens do interesse Histórico e Artítico-Turisticas !
  `},
  { subj: 'Direito Penal', level: 'Superior', sub: 'Corrupção Passiva e Ativa', content: `
# As Gêmeas Opostas em Facetas de Propina! 

Nos crimes contra Admin público, são 3 grandes Crimes os Favoritos por decadas inteiras: Corrupção das Moedinhas nas gavetas, Concussões opresssas e Peculatos desvios. Para as provas dificeis voce decora "Verbo Central / Núcleos de Vontados"!

## 1. Corrupcao Passiva! (Do Agente Do Fucionárismo Públicos - Art 317) 
O Ato não é só "aceirar ou receber na mesa e bolso as vantagens Indevida", você pode incorrer passivamente nas prisiões (Reclusas pesados) das VONTADES se o servidor Apenas cometer O VERBO: **"Solicitar!"**  (Nem precisa pegar nas Propriedadas!). O Fato "Exigir com grossedias" exclui a figura das Propina passivas! E Cuidado : Puni-se O DOLO - Aceitas "Promessações das Propinas para um amanhã".

## 2. A Ativa (Do Setor das Iniciativa do Cidadão Privado - Art 333)! 
Para Cometer As Atividades ativamente Oferecer no Subornos as Vantgens indevidos , "Ofertaram nos dinheiros à Autoridade Servidora pedindo alívio numa autuação". 

*   O Paradoxo Cúspide Penal de Súmulas: Nao Existe um Elo Obrigatorio Bilateral da Culpa. Pode o Policiar no Tráficos Complicados exigir a Grana para livrar O Carro Forte na rodovida. Se ele pediu ou extorquiu (O Policie incidiu num crime), e se o Condutor na desesperos Pagou calado, a Culpa não passará os Corrompidoses Ativamentos por que as Oferencias ativas não se tipificou (Ele Cedeu Sob Pressão). O crime bilateral nasce das trocas recíprocas sem ameaçadoras as Coações!
  `},
  { subj: 'Direito Penal', level: 'Superior', sub: 'Peculato e Concussão', content: `
# Extravios Fortes e Extorsões Dos Fardas em Admin Público (Art 312 e Art 316)

A banca CESPE foca na Diferença do "Furtamento" / Da Improbidade perante a Natureza do Crime no Títulos 11 Penal da Administração Público Brasil: Crimes cometidos "Por Funcionários Em Seus Cargos Contras os Interresses Estatais ". 

## 1. Concussão - (Artigo 316 - EXIGIR COM AUTORIDADES GROSSAS).
Diferentes dA propinas, o verbo passivo corrompedor é "Solicitar no papo Brando". Na CONSCUSSÂO o funcionario Bate na MESA nas Ocultas, usando de Força Intimidadórias da Patentes pra Fazer a Vitorimia dar dinheradas !  Verbo Mestre Exclusívo de Provas Cruzares: "EXIGIR". (A Vitória Sente MEDO). A consumamentos Ocorres Formalementas No estantes Exatos da Fala Ameaçadouras (Nem precisa o Cidadaõ entregar o Celta no dinheiro para Condenas nas justica!). 

## 2. O Tremei da Terra: OS Peculatos Variáveis (Art 312)!
Ele Roubou "Com a Roupa Fardamento das Funçõees Da Empresa ou Por Ela Fácilitado".
*   **Peculato Apropriações:** O Dinheiro ou o PC na mão d Servidor estavam justos e entregues legalmenteses (pra sua rotinas nas secretária geridas) por posses! Ai de noite ele se apropria e Pega "Para Sie / Dons De Casa a Maquina da prefeitura / Bens de Cidadãos Recolhidas nas Depositos!" 
*   **Peculatos Desvios Verbosos (Art 312 da Inverteção de Funcoes):** "Desvir a grana" para aplicar e Pagar Empreeteiras Dos Primos do seu Votar! As finacas não foran Pro Seus Bolso em casa, mas os finalidade Ilícita causou um desvios perfeitamente.
*   **Peculatos Das Subtracaoes Ilícitas - O "Furto nas Sombras" (Art § 1):** Ele não era as guaridas da sala Das armar dos Cops. Ele nao tinha poses da Chave do Estoque , Porém seu Cargo Fardado Permitiu as Passagens Livres no corredor da noite pra ele Arrombar cadeado do fundo e Furtou "Beneficianose das Ocorrencia as Forças" do crachá facilitadores nas entradas de acessos de fora ! É Peculato-Furto .
*   **Peculato-Culposos(Art § 2 Fuga Legalista):** Diferentemenete das Corrupções Improbidades , AQUI EXISTE CULPAS! O Polical dormiu nos plantoes abertos da porta As Armamentos Ficaram em vacilo. O Crimonoso Adentra os fundos Facilitaos as Lideransas e Roubas O Patrimonies Públicos . Ele Não Teve os dolo De levar, porem os Desleixos Dele Facilitou o crime dos alheios ! Puni-se Ele com a Prisão reduzidas Ou - Se ele reparar A Dinheirama e Fazer as restuitucoes Dos Danos ANTES Que Julguem-nas A Sentenças Penal Finalis -> A Lei EXCTINGUIRa AS CULPADILIDADES As Prisoes Sujas dele (Peculatos Culpavos tem essa mágica extingsao Exclusiva!) ! 
  `},
  { subj: 'Direito Penal', level: 'Superior', sub: 'Prevaricação e Condescendência Criminosa', content: `
# Prevaricação vs Corrupção Pela Boa-Amizades 

Por fim as Crimes Funcionais Onde OS dolo da Dinheirama (Pecúnia no bolos sujos) **NÃO EXISTEM**. O cara agiu puramente nos favores emotivações dos desvios internos coraçãos. 

## 1. O Crime Das Amizades: PREVARICAÇÃO ! (Art - 319 )
É Quanse Um "Abuso Do Seu Poder Das Autuações e Trabalhado !".
*   Retardares Os Andamentos / Deixar Sem Prática ou praticas as Foras e Infridindos Regramentos Normativas  P-A-R-A ---> **"SATISFAZIMENTOS NOS SENTIMENTAIS DAS AFEIÇÕES / SENTIMENTOS E INTERESSES SEUS PESSOAIS !".**
*   Exemplo Da Base de Prova (Policial de transites pára sua Blitz num Cidadões Infratores Multados Alcoolizados. Ao Ver Q Os Sujeitos Infratores e O Meu Filho De corações, O Meu coracao bate Forças Omitimos minhas Forcas Obrigatoriedade de Prisao E Libero O Pibete no Carrão nas sombras dos Vistas Grossas!). O Motivos nao Era pra dinheiros de Corrupções O Motivas Era (Minhas Afeiçãos Paternativas Sentmentais da Esferá Pessoal !).

## 2. A Famosissima "Condescendência Criminosa": (Art 320 - O Pano Das Chefias) 
O Chefe da repartição tem OS "Dever das Hiererquicas Fiscalizantes". Se o Chefinho Da Area das Mesas VER as Cagadas ilicitas ou das Infracoes Disciplines nas repartiçaõ de um Funcioáro Abaixo De Si Subordinados! E Este CHEFES, das Famosas "POR A DÓ INTRA - REPARTIMENTA / DÓ DAS INDULGÊNCIAS", Ele não abre o P.A.D processo as puneções pros Subordinados, ou nao os Relata prós Superiores Responsabilizadores... Ele ta comentendo um Crime Famosíssimo Da Esfera Superior por Omiteação Nas Piedades / Fofura (A Penal Da Peninha Da Misericórdias). Não se Cede perdoes No estátos Do Governimentos ! A condescencia penaliza O Jefe Moles!  
  `} 

];

async function run() {
  try {
    await client.connect();
    console.log("Starting massive update for Lote 3 (Superior/Específicas)...");
    
    for (const item of data) {
      const q = `
        UPDATE "SubTopic" st
        SET content = $1
        FROM "Topic" t, "Subject" s
        WHERE st."topicId" = t.id AND t."subjectId" = s.id
          AND st.name = $2 AND s.name = $3 AND s.level = $4
      `;
      const res = await client.query(q, [item.content.trim(), item.sub, item.subj, item.level]);
      console.log(`Updated ${item.sub} (${item.subj} / ${item.level}): ${res.rowCount} rows`);
    }
    console.log("Batch Lote 3 completado com sucesso!");
  } catch(e) {
    console.error(e);
  } finally {
    client.end();
  }
}

run();
