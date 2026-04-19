const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const data = [
  // DIREITO CONSTITUCIONAL (FUNDAMENTAL)
  {
    subj: 'Direito Constitucional', level: 'Fundamental', sub: 'Artigo 5º da CF em Linhas Gerais',
    content: `
# Direitos e Deveres Individuais e Coletivos (Art. 5º da CF/88)

O caput do artigo 5º da Constituição Federal de 1988 estabelece uma das premissas mais importantes do Estado Democrático de Direito:

> "Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade (...)"

## 1. Princípio da Igualdade (Isonomia)
A Constituição garante a **igualdade formal** (todos são iguais na letra da lei) e introduz a **igualdade material** (tratar os desiguais na medida de suas desigualdades) para garantir um equilíbrio justo. Homens e mulheres, por exemplo, são iguais em direitos e obrigações (Art. 5º, I).

## 2. Inviolabilidade do Direito à Vida
O direito à vida é o bem jurídico mais importante. Ele abrange não apenas o direito de continuar vivo, mas de ter uma vida digna. Daí decorre a **vedação à pena de morte no Brasil**, exceto em tempos de guerra declarada.

## 3. Liberdade
- **Liberdade de manifestação do pensamento:** É livre, sendo vedado o anonimato (Art. 5º, IV).
- **Liberdade religiosa:** Ninguém será privado da sua crença, garantindo-se a livre prática do culto.
- **Liberdade de locomoção:** É livre o direito de ir e vir em tempo de paz, podendo qualquer pessoa entrar, permanecer ou sair do país com seus bens (respeitada a lei).

## 4. Direito à Propriedade
A propriedade é garantida, desde que cumpra a sua **função social**. Em caso de desapropriação por necessidade pública, mediante justa e prévia indenização em dinheiro.

## 5. Casa como Asilo Inviolável
**Atenção para pegadinha de prova!** A casa é asilo inviolável, ninguém podendo nela entrar sem consentimento do morador, SALVO nas seguintes exceções constitucionais:
1. Desastre.
2. Prestar socorro.
3. Flagrante delito.
4. Por determinação judicial (APENAS durante o dia).
    `
  },
  // DIREITO ADMINISTRATIVO (FUNDAMENTAL)
  {
    subj: 'Direito Administrativo', level: 'Fundamental', sub: 'Organização do Serviço',
    content: `
# Noções Básicas do Serviço Público

## 1. O que é Serviço Público?
É toda a atividade exercida pelo Estado (ou por quem ele delegar) para atender de forma direta e contínua às necessidades da coletividade. Exemplos: Saúde, Educação, Segurança, Transporte coletivo.

## 2. Elementos Principais
Para compreender a organização do serviço público, você precisa entender como o Estado se estrutura:
*   **Administração Direta:** O próprio governo realizando o serviço. Formada por **C**entros de competência sem personalidade jurídica, chamados de Órgãos (Ministérios, Secretarias). Memorize: União, Estados, DF e Municípios.
*   **Administração Indireta:** O Estado repassa a prestação de serviços para entidades com personalidade jurídica própria. São elas: Autarquias, Fundações Públicas, Empresas Públicas e Sociedades de Economia Mista.

## 3. Princípios Fundamentais (LIMPE)
A Administração Pública de todas as esferas e poderes tem o dever de obedecer a 5 pilares, resumidos no mnemônico **LIMPE** (presente no artigo 37 da Constituição):
1.  **Legalidade:** O servidor público só pode fazer o que a lei permite. (Diferente da iniciativa privada, onde se faz tudo o que a lei não proíbe).
2.  **Impessoalidade:** Não se pode beneficiar ou prejudicar alguém por interesses pessoais.
3.  **Moralidade:** Atuar com boa-fé, ética, lealdade e honestidade administrativa.
4.  **Publicidade:** Dar transparência aos atos oficiais, sendo essencial para que o cidadão possa fiscalizar.
5.  **Eficiência:** Alcançar os melhores resultados, utilizando os recursos de maneira mais produtiva e com menos desperdício.

> **Alerta de Prova FGV/VUNESP:** Costumam inverter os princípios. Nunca se esqueça: O princípio da impessoalidade também proíbe o uso da máquina pública para a promoção pessoal de autoridades ou servidores!
    `
  },
  // ÉTICA NO SERVIÇO PÚBLICO (FUNDAMENTAL)
  {
    subj: 'Ética no Serviço Público', level: 'Fundamental', sub: 'O que é Ética?',
    content: `
# Ética vs. Moral: Fundamentos

Em provas de concurso, a principal pegadinha na parte de Ética é a confusão intencional que a banca faz entre Ética e Moral.

## 1. O que é Moral?
A **Moral** é um conjunto de regras, costumes e normas adquiridos pelo hábito e que guiam o comportamento das pessoas de um grupo social de forma prática.
*   **Características da Moral:** Prática, Temporal (muda com o tempo), Cultural (depende do país/região/crença) e Normativa. Reflete na conduta do indivíduo perante a sociedade ("isso é certo ou errado no nosso grupo?").

## 2. O que é Ética?
A **Ética** é a ciência ou ramo da filosofia que estuda a moral. É a teoria profunda, a reflexão sobre o que é certo ou errado universalmente.
*   **Características da Ética:** Teórica, Permanente, Filosófica e Universal. Reflete os grandes valores humanos (justiça, verdade, dignidade).

**Mnemônico para a Prova:**
*   **M**oral = **M**odos, Costumes, ação prática.
*   É**t**ica = **T**eoria, reflexão.

## 3. A Ética no Serviço Público
No contexto do funcionalismo público, a Ética baseia-se muitas vezes na formalização de regras de conduta por meio de **Códigos de Ética** (Como o famoso Decreto 1.171/94). Nesse caso, exige-se que o servidor atue sempre pensando na melhor forma de respeitar o dinheiro do pagador de impostos (contribuinte) e garantir que suas ações demonstrem zelo, decoro e dedicação à causa pública.
    `
  },
  {
    subj: 'Ética no Serviço Público', level: 'Fundamental', sub: 'Deveres do Cidadão',
    content: `
# Os Deveres do Cidadão

O exercício pleno da cidadania vai muito além do simples direito de votar e ser votado. Ele exige do indivíduo o cumprimento de obrigações em relação ao Estado e à sociedade.

## 1. O Conceito de Cidadania
Cidadão não é apenas quem nasce num local ou quem tem RG. A cidadania expressa o conjunto de direitos civil, políticos, e sociais que possibilita a participação do indivíduo no exercício do poder (por exemplo, exigindo transparência e cumprimento das promessas).  junto a esses direitos estão os **Deveres**.

## 2. Principais Deveres do Cidadão:
*   **Cumprir e respeitar as Leis e à Constituição:** Este é o pilar fundamental. Mesmo sem concordar com uma lei, é dever obedecê-la enquanto estiver em vigência.
*   **Votar:** Nas democracias representativas, a escolha de quem exercerá mandatos e atuará no poder Executivo e Legislativo é fundamental (No Brasil, o voto é obrigatório para alfabetizados maiores de 18 anos).
*   **Pagar Impostos:** Para sustentar o funcionamento básico das atividades de Estado (Educação, Saúde Pública, Segurança) é indispensável o recolhimento de tributos. É através dos impostos que a administração pública se financia.
*   **Respeito ao Próximo e Combate à Discriminação:** O Brasil é uma nação fundamentada na diversidade cultural. É vedado ter ações preconceituosas referentes à raça, cor, idade e quaisquer formas de discriminação.
*   **Cuidado com o Meio Ambiente:** Como impõe o Art. 225 da CF, não é apenas dever do governo, mas também de todos os cidadãos, proteger o espaço ambiente para as presentes e futuras gerações.

**Dica de Prova:** Muitas vezes, bancas de concurso afirmam que os deveres e direitos são incondicionais e absolutos. **Nenhum direito ou dever é absoluto** – eles funcionam em equilíbrio uns com os outros e podem ter exceções dispostas em lei.
    `
  },
  // DIREITO CONSTITUCIONAL (MÉDIO)
  {
    subj: 'Direito Constitucional', level: 'Médio', sub: 'Obras do Art. 5º',
    content: `
# Aprofundamento no Artigo 5º da CF/88 (Direitos Fundamentais)

Para nível médio, o Artigo 5º cai "chapado" na letra da lei. O que os examinadores mais cobram são os detalhes finos e as chamadas ressalvas constitucionais.

## 1. Penas Proibidas (Art. 5º, XLVII)
O Brasil não adota as seguintes modalidades de punição, devendo isso estar muito fixado na mente do concursando:
- Penas de morte (**salvo** em caso de guerra declarada).
- Penas de caráter perpétuo (ninguém vai ficar preso "para sempre").
- Penas de trabalhos forçados.
- Penas de banimento (exulsar o brasileiro nato de seu próprio país).
- Penas cruéis.

## 2. Inadimplência e Prisão Civil (Art. 5º, LXVII)
A Constituição diz: *“Não haverá prisão civil por dívida, salvo a do responsável pelo inadimplemento voluntário e inescusável de obrigação alimentícia e a do depositário infiel”*  
**ATENÇÃO ABSOLUTA MATADORA DE CONCURSOS:** O STF editou a Súmula Vinculante nº 25 e pacificou que hoje em dia **É ILÍCITA A PRISÃO CIVIL DO DEPOSITÁRIO INFIEL**, não importando o que diz a literalidade da Constituição. Hoje **SÓ HÁ PRISÃO POR DÍVIDA NO CASO DE PENSÃO ALIMENTÍCIA**.

## 3. Extradição (Art. 5º, LI)
*   **Brasileiro Nato:** Jamais será extraditado, em nenhuma hipótese.
*   **Brasileiro Naturalizado:** Poderá ser extraditado em dois casos específicos: 
    1) Crime comum cometido antes da naturalização.
    2) Envolvimento comprovado em tráfico ilícito de entorpecentes a qualquer tempo.
*   **Estrangeiro:** Não será extraditado por crime político ou de opinião.

## 4. Remédios Constitucionais Rápidos
*   **Habeas Corpus (HC):** Protege especificamente a **liberdade de locomoção** ameaçada ou violada por abuso de poder. É e o HC e o Habeas Data são gratuitos.
*   **Mandado de Segurança (MS):** Protege o Direito **Líquido e Certo** (não amparado por HC ou HD). Ex: um candidato não foi convocado por um erro administrativo da banca e quer assegurar a posse.
    `
  },
  {
    subj: 'Direito Constitucional', level: 'Médio', sub: 'Direitos Políticos',
    content: `
# Direitos Políticos e Nacionalidade

O conjunto de regras constitucionais que diz como um cidadão participa do processo de poder estatal e as diferentes espécies de brasileiros são essenciais para quem vai pleitear cargos públicos.

## 1. Quem é Brasileiro Nato (Art. 12, I)
A Constituição brasileira segue um misto de **jus soli** (direito de território) e **jus sanguinis** (direito de sangue).
*   É brasileiro nato todo aquele nascido dentro do Brasil, não importando a nacionalidade dos pais, **exceto** se os pais estrangeiros estiverem no país a serviço de seu país de origem.
*   Nascidos no estrangeiro, filhos de brasileiro ou brasileira: São natos desde que a criança seja registrada na repartição brasileira competente, ou venha a morar no Brasil posteriormente e opte pela nacionalidade.

## 2. Direitos Políticos e Voto (Art. 14)
A Soberania Popular será exercida pelo voto mediante plebiscito, referendo e iniciativa popular. O voto, bem como a eleição, segue princípios bem demarcados.

### Capacidade Eleitoral Ativa (Alistamento e Voto)
Quem pode votar nas urnas?
*   **Obrigatórios:** Maiores de 18 anos até menores de 70 anos.
*   **Facultativos:** Analfabetos, os que têm 16 ou 17 anos (apenas após completados 16; jovem de 15 não vota) e os maiores de 70 anos.
*   **Inelegíveis absolutos / Inalistáveis:** Os recrutas estrangeiros durante obrigação militar primária e os inalistáveis formam o grupo daqueles proibidos de voto e eleição. Conscriptos não votam!

### Capacidade Eleitoral Passiva (Idade Mínima para Cargo Político)
Decore a "Tabelinha das Idades" para cargos eletivos. A idade é aferida na **posse**, salvo para a de vereador que é aferida no registro. Mnemônico do Telefone das Eleições: **35302118**.
*   **35 anos:** Presidente, Vice-Presidente e Senador
*   **30 anos:** Governador e Vice.
*   **21 anos:** Deputados (F/E/Dist.), Prefeito/Vice e Juiz de Paz.
*   **18 anos:** Apenas Vereador.
    `
  },
  {
    subj: 'Direito Constitucional', level: 'Médio', sub: 'Repartição de Competências',
    content: `
# A Organização do Estado e a Repartição de Competências

O Estado Federal do Brasil exige uma clara demarcação do que é atribuição de Brasília (União) ou do seu Estado, sob pena de conflito constante nos tribunais.

## 1. Classificação das Competências
Existem essencialmente dois eixos: competência para agir / administrar o País (Material) e a competência de editar Leis (Legislativo).

### Competência Exclusiva e Privativa da União
*   **Exclusiva:** Competência material (administrativa). Somente a União faz e é intransferível (indelegável). Ex: Declarar guerra e celebrar paz, emitir moedas, criar serviços postais (Correios!).
*   **Privativa:** Competência para Legislar. Pode ser delegada via de Lei Complementar aos estados desde que tratando de detalhes muito locais. Ex: A União tem exclusividade em legislar sobre as leis de Trânsito, Penal e do Trabalho. Se cair na prova "Estado legisla o Trânsito" está automaticamente errado (salvo raras particularidades da dita Lei Complementar que quase nunca cai em Nível Médio).
*   **Dica mnemônica para Privativa:** CAPACETE de PM! Legisla a respeito de Direito **C**ivil, **A**grário, **P**enal, **A**eronáutico, **C**omercial, **E**leitoral, **T**rabalho, **E**spacial, **P**rocessual e **M**arítimo.

### Competência Concorrente (União, DF e Estados legislando juntos)
Nos moldes do Art.24, ocorre uma repartição de tarefas: a UNIÃO cria a Norma Geral. ESTADOS, a partir daí e com as particularidades regionais, criam normas supletivas que se detalham ao povo local. Se a norma Estadual entrar em choque com a Federal na regulamentação geral, prevalecerá a Nacional.

## 2. A Inexistência da Hierarquia no Descentralismo
Preste muita atenção num peguinha frequente: "As entidades estaduais têm hierarquia menor do que a União." **FALSO**. Entre União, Estados, Municípios e Distrito Federal **não há relação hierárquica**. Há apenas campos de atuação (competências) divididos constitucionalmente!
    `
  },
  // DIREITO ADMINISTRATIVO (MÉDIO)
  {
    subj: 'Direito Administrativo', level: 'Médio', sub: 'Princípios Constitucionais',
    content: `
# Princípios Administrativos Essenciais (O Aprofundamento Legal)

Vimos superficialmente o conceito no nível fundamental, mas no Ensino Médio/Superior as bancas (CESPE, FCC, VUNESP, FGV) exigirão profundidade dos Princípios Expressos ou Implícitos.

## Os "LIMPE" Expressos na Carta (Art 37 CF/88):
1.  **Legalidade:** A base da segurança jurídica. Um servidor pode apenas atuar na estrita pauta estabelecida por lei ou regulamentação validada. É a oposição extrema contra governos absolutistas de outrora. 
2.  **Impessoalidade:** O serviço é focado à prestação isonômica. Daqui derivam a obrigação do Concurso Público (ninguém é favorecido via QI "quem indica" para carga efetiva), e os editais de licitação, em que deve ser comprada as mercadorias de melhor proposta ignorando a face do licitante. Súmula Vinculante nº 13 - A vedação ao NEPOTISMO deriva deste princípio, onde os órgãos não podem eleger parentes até 3º grau com vistas a favorecimento para preenchimento de cargos de comissão.
3.  **Moralidade:** Todo ato não deve apenas ser lícito (cumprir a legalidade), mas deve ser HONESTO aos olhos justos de um bom administrador; deve obedecer ao bom senso. O ato lícito no papel, mas com má intenção desvia desse princípio.
4.  **Publicidade:** Transparência de dados. Hoje temos Leis que permitem os governos detalhares abertamente seus pagamentos/contratos em diários oficiais e portals online gratuitos. É o veículo que abre margem ao exercício pleno do princípio cidadão participativo. As provas cobram uma exceção: *As únicas coisas protegidas contra publicidade são os sigilos para honra subjetiva e os casos classificados que envolvam segurança social dos Estado.*
5.  **Eficiência:** Mais novo desse grupo (Chegou pela Emenda Constitucional 19/98). Procura modernidade, rendimento real à maquina, presteza, perfeição gerencial, desburocratizar a adm, gerir metas produtivas aos servitórios. E ele impôs que agora uma simples aprovação garantida não fará sua eficácia perene. Foi estabelecida as avaliações semestrais as quais são indispensáveis as retenções ao funcionalismo final efetivado daquele concursado (após três anos probatórias concluídos do estágio admissional.)

## Princípios Implícitos ou Reconhecidos pela Doutrina:
*   **Supremacia do Interesse Público Sobre Privado:** Tudo o que for favor e vontade perene do Público engolirá os do campo privado. Exemplificamos fortemente pelos tributos severos aos que não obedecem e pela desapropriação. 
*   **Indisponibilidade do Bem Público:** O administrador atua cuidando do pátio para o povo, por isso, sua intenção não deve vender por vontade os lotes, edifícios ou materiais livremente sem a legalizada e burocracia do Leilão. (Não é "Dono", mas sim "Zelador").
*   **Autotutela (Súmula 473):** Poder em corrigir suas próprias ações (Anula algo Ilegal ou Revoga por ser Oportuno Indiscreto ou Inconveniente).
    `
  },
  {
    subj: 'Direito Administrativo', level: 'Médio', sub: 'Organização Administrativa',
    content: `
# Desconcentração x Descentralização – Administração Direta e Indireta

Um dos temas TOP 3 mais cobrados em concursos de polícias e tribunais na esfera Administrativa. O Estado moderno necessita "delegar"/repassar poderes para não travar a máquina. Mas isso é feito de duas maneiras cruciais. Muito cuidado para não confundir os dois termos com Prefixos parecidos!

## 1. A Desconcentração (Prefixo 'CO' de Criação de Órgãos)
Ocorre quando o Estado divide competências internamente **DENTRO DA MESMA PESSOA JURÍDICA**, seguindo subordinação hierárquica. 
Exemplo: Foi instituído o MEC. Por não dar conta, em razão da enormidade, o ministério distribui suas cargas em coordenações menores (Seducs Nacionais). Todos esses blocos de gavetas integram apenas e perfeitamente a esfera da *União / Administração Direta*. Trata-se do fenômeno jurídico que forma e enche as prateleiras hierárquicas da estrutura de Órgãos (são os pezinhos, mas não dispõem sua própria carteira separadamente.) 

## 2. A Descentralização (Prefixo 'CE' de Criar Entidade)
Acontece quando uma pessoa distribui atuações externas repassando tarefas à uma prestadora alheia para auxiliar a roda giracional, **COM AS TRANSFERÊNCIAS DE DOMÍNIO/RESPONSAS EM UMA NOVA PESSOA JURÍDICA DIFERENTE DA MATRIZ.**
Temos dois cenários clássicos que você precisa dominar:

*   **Descentralização por Outorga / Legal:** Na Lei surge um novo “ente” Administrativo, ou seja, compõe-se toda estruturação pesada de Autarquias, Fundações Públicas (Exemplo: O IBGE e o INSS, Entidades descentralizadas das Unidades Executivas da União que atuam a serviço dos seguros sócias, contendo orçamentação e gerenciais individualizados das suas atuações rotineiras). Elas absorvem A Titularidade E Exercício da Ação.
*   **Descentralização por Delegação / Colaboração:** Repassa apenas a prestação do Exercício, porém não entrega a sua real Titularidade. É regido não por Lei que elabora entidades novas e sim apenas formaliza *Contratos* e *Autorizações Verbais* às prestadoras privadas - Como Exemplo: Quando o poder Público entrega linhas circulares rodoviárias aos ônibus via Contratos para Concessionárias Privadas lucrarem repassando bons funcionamentos; O pedágio em estradas. 

> **Alerta de Prova FGV**: Órgãos Desconcentrados NÃO TÊM personalidade jurídica própria (apenas em exceções processuais). A Ação Descentralizada gera empresas autônomas e que têm seus próprios números Cadastros de Atividades Jurídica / CPNJ em folha, os quais deverão ser réus solitários das meras causas indenizatórias!
    `
  },
  {
    subj: 'Direito Administrativo', level: 'Médio', sub: 'Conceito e Elementos',
    content: `
# Atos Administrativos: Conceito, Requisitos (Elementos) e Atributos

Ato administrativo trata-se da declaração e expressão governamental ou de delegações legais, a fim de gerarem a produção real nos efeitos jurídicos pontuais aos cidadãos (como dar a demissão por transgressão, aplicar licenciamento de condutor do indivíduo – a CNH - ou realizar uma transferência orçamentária para a quitação judicial da prestadora de água).  A parte mais importante p/ sua prova em toda matéria: OS LIMITES DO ATO

## 1. Atributos do Ato (Características Iniciais) (PATI)
Entenda o que difere a mera voz sua para uma ordem governamental das ordens da CNH: 
*   **P – Presunção de Legitimidade:** Quando a ordem é posta ao relento legal e a tinta seca na folha diário do Estado – Ela nasceu lícita até que, caso necessário, alguém demonstre por um processo as irregularidades. Presume-se verdadeira sempre - o ônus recai para os infratores argumentares o inverso.
*   **A – Autoexecutoriedade:** A máquina estatal pode, dentro do parâmetro e dos limites restritivos, proceder sem o pré-julgamento formal Judiciário a concretidade penal cabível sobre os infratores que geram males pontuais (Exemplo: a remoção forçada de produtos fora de época; Reboque o veículo mal estacionado pela patrulha; Embargos nos locais nocivos a sanidade animal / pessoas).
*   **T – Tipicidade:** Previstas e pré-demarcadas com as definições postadas.
*   **I – Imperatividade:** Trata da sua determinação de Forçar, uma obrigatoriedade e coação naqueles agentes exteriores do local; ou seja - Você obedece a sinalização não porque sentiu empatia nas cores, sentiu amor na cor Vermelha; sua conduta paralisa e a ação obedece forçadamente as medidas estatais (mesmo contrariados ao desejo).

## 2. Elementos / Requisitos Essenciais de um Ato Valido. (COM - FI - FOR - M - OB)
O Ato será derrubado se errar os CINCOS ingredientes chaves, que constrói a bolo estatal de legalismos. 
Todos os atos dependem do COM FIFORMOB:
*   **Com – Competência:** Deve ter o agente capaz com o poder daquela região a realizar seu edital (O Juiz dá a senteça; o delegado aciona inquérito civil penal e o Policial rodoviário da a infração transiteira; O Policial não deve sentenciar!) (Pode haver *Delegação* - mas não se delega decisões cruciais dos tribunais regionais!).
*   **Fi – Finalidade:**  Fim que procura O Interesse público e não para fins revanchistas das rivalidades (O Desvio dessa meta caracteriza Desvio da Finalidade / Assédio moral e Ilegalidades). 
*   **For – Forma:** Geralmente escritos aos moldes normatizantes. O modo que se exterioriza suas regras a visibilidade - Se não prever forma, são NULOS. A excessão será para portarias tácitas no tráfego sinalizado ou gestos policias, ordens verbais graves. 
*   **M – Motivo:** É a verdadeira "Situação / Origem" a que gera um comportamento – Os motivos fáticos e legais de base. Qual a causa das construções viárias? Estão acorrentados no fluxo extremo na velha passarela. 
*   **Ob – Objeto (Conteúdo do Ato):**  É o resultado de efeito – ou seja O Quê o motivo causou (o efeito materializado pontual – Demitir! Autuar o Veículo Celta). A conduta fim materializado de seu desejo. O seu verbo legal executado de ordem.
    `
  }
];

async function run() {
  try {
    await client.connect();
    console.log("Starting massive update for Lote 1 - Part 1...");
    
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
    console.log("Batch complete!");
  } catch(e) {
    console.error(e);
  } finally {
    client.end();
  }
}

run();
