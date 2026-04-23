const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const upgrades = [
  // LOTE 1
  {
    name: 'Dinâmicas Rurais e Urbanas',
    content: `## 📚 Dinâmicas Rurais e Urbanas: Teoria Completa

As dinâmicas rurais e urbanas envolvem a interação e as transformações espaciais, econômicas e sociais entre o campo e a cidade. Historicamente, o campo antecede a cidade, mas com a Revolução Industrial e o processo de globalização, a cidade passou a subordinar o campo, impondo seus ritmos e tecnologias.

### 🏙️ O Espaço Urbano
- **Urbanização**: Processo em que a população urbana cresce em ritmo superior à população rural. No Brasil, acelerou-se a partir de 1950 (Governo JK - Rodoviarismo e Industrialização).
- **Macrocefalia Urbana**: Inchaço desordenado das grandes metrópoles, gerando problemas estruturais (favelização, mobilidade precária, violência).
- **Gentrificação**: Revitalização de áreas urbanas degradadas que encarece o custo de vida local, "expulsando" a população de baixa renda para as periferias.
- **Conurbação**: Encontro físico da mancha urbana de duas ou mais cidades vizinhas (origina as Regiões Metropolitanas).

### 🌾 O Espaço Rural e o Agronegócio
- **Modernização Conservadora**: O Brasil modernizou o campo (Revolução Verde) adotando máquinas e agrotóxicos, mas **conservou** a estrutura fundiária concentrada (latifúndios).
- **Agropecuária Comercial/Patronal**: Focada no mercado externo (commodities como soja e carne), utiliza alta tecnologia e grandes extensões de terra (monocultura).
- **Agricultura Familiar**: Responsável pela maior parte do alimento que chega à mesa do brasileiro (feijão, mandioca, leite). Emprega mais mão de obra, mas recebe menos incentivos governamentais e ocupa áreas menores.
- **Fronteira Agrícola (Arco do Desmatamento)**: Expansão do agronegócio em direção à Amazônia (Matopiba: Maranhão, Tocantins, Piauí, Bahia).

### 🔄 Relação Campo x Cidade
A relação hoje não é mais de isolamento. O campo é cada vez mais "urbanizado" (acesso a internet, maquinário com GPS), fenômeno chamado de **Rururbanização**. Há uma relação de interdependência onde a cidade fornece tecnologia e serviços, e o campo fornece commodities e alimentos.

---

## 🎯 Foco nas Bancas (Cebraspe e FGV)
- **Cebraspe**: Gosta de explorar a subordinação do campo à cidade (o meio rural produz para atender demandas urbanas e globais). Questões frequentemente abordam a Revolução Verde e suas consequências ambientais.
- **FGV**: Foca muito nos conceitos de Gentrificação, Macrocefalia Urbana e nas diferenças estatísticas (ex: quem produz comida vs quem produz commodity exportável).

---

## 💡 Macetes e Mnemônicos
**Matopiba (A Nova Fronteira Agrícola):**
- **MA**ranhão
- **TO**cantins
- **PI**auí
- **BA**hia
*(Lembre-se: é a região de transição do Cerrado que mais sofre com o avanço da soja e desmatamento).*

---

## ⚠️ Pegadinhas Comuns
- **Erro fatal:** Dizer que o Brasil é rural. O Brasil é **altamente urbanizado** (mais de 84% da população vive em cidades, segundo o IBGE).
- **Erro conceitual:** Confundir Crescimento Urbano (crescimento físico da cidade) com Urbanização (aumento percentual da população urbana em relação à rural).`
  },
  {
    name: 'Políticas Públicas Sociais',
    content: `## 📚 Políticas Públicas Sociais: Teoria Completa

As Políticas Públicas Sociais são ações e programas desenvolvidos pelo Estado para garantir direitos fundamentais previstos na Constituição Federal de 1988 (CF/88), visando reduzir as desigualdades sociais e promover o bem-estar coletivo.

### 🏛️ Fundamento Constitucional
O artigo 6º da CF/88 elenca os direitos sociais:
*Educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância, assistência aos desamparados.*

### 🔄 O Ciclo das Políticas Públicas
Para que uma política exista, ela passa por fases:
1. **Formação da Agenda**: O problema chama a atenção do governo (ex: epidemia, aumento da miséria).
2. **Formulação (Desenho)**: Como o problema será resolvido? Quais os objetivos e metas?
3. **Tomada de Decisão**: Aprovação legal e alocação de orçamento (orçamento público).
4. **Implementação**: A execução prática da política (ex: construção de postos de saúde, distribuição de renda). É o momento em que a regra sai do papel.
5. **Avaliação**: Verificação dos resultados e impactos. A política funcionou? Precisa de ajustes?

### 🧩 Tipos de Políticas Públicas (Classificação de Theodore Lowi)
- **Distributivas**: Oferecem serviços ou equipamentos a determinados grupos sem cobrar diretamente dos beneficiários (ex: iluminação pública, pavimentação).
- **Redistributivas**: Retiram recursos de uma parcela da sociedade (via impostos) para financiar outra parcela mais vulnerável. (ex: Bolsa Família, Reforma Agrária). *São as que geram mais conflitos sociais.*
- **Regulatórias**: Criam regras, normas ou proibições que disciplinam o comportamento (ex: Código de Trânsito Brasileiro, regulação da Anatel).
- **Constitutivas**: São as "regras do jogo". Definem como outras políticas serão criadas (ex: leis sobre eleições ou divisão de competências entre Ministérios).

---

## 🎯 Foco nas Bancas
- **Cebraspe**: Exige que o candidato saiba diferenciar a fase de *Implementação* da fase de *Formulação*. Cobra muito o entendimento de que a avaliação deve ser contínua e não apenas no final do ciclo.
- **FCC/FGV**: Adoram a classificação de Lowi. Questões clássicas pedem para classificar programas de transferência de renda como políticas **Redistributivas**.

---

## 💡 Macetes e Mnemônicos
**Mnemônico dos Direitos Sociais (Art. 6º da CF/88):**
*Edu mora lá, Sau trabalha ali, Assis prossegue transportando presidiários.*
- **Edu**: Educação
- **Mora**: Moradia
- **Lá**: Lazer
- **Sau**: Saúde
- **Trabalha**: Trabalho
- **Ali**: Alimentação
- **Assis**: Assistência aos desamparados
- **Pro**: Proteção à maternidade e à infância
- **Segue**: Segurança
- **Transportando**: Transporte
- **Presidiários**: Previdência social

---

## ⚠️ Pegadinhas Comuns
- **Pegadinha da Privatização**: Achar que políticas públicas só podem ser executadas por órgãos estatais. **Falso!** O Estado pode formular a política, mas a implementação pode ser feita por ONGs (Terceiro Setor) ou empresas privadas sob concessão.
- **Pegadinha do Ciclo**: Afirmar que a avaliação ocorre APENAS no final do ciclo. **Falso.** A avaliação contemporânea deve ser feita *ex ante* (antes), *in itinere* (durante) e *ex post* (depois).`
  },
  {
    name: 'Atividades Econômicas do Ceará',
    content: `## 📚 Atividades Econômicas do Ceará: Teoria Completa

A economia do Estado do Ceará passou por grandes transformações nas últimas décadas. Antes fortemente dependente da agropecuária de subsistência e do algodão (ouro branco), o estado diversificou sua matriz produtiva e hoje destaca-se nos setores de serviços, indústria leve e energias renováveis.

### 🏭 Setor Secundário (Indústria)
- **Desconcentração Industrial**: A partir dos anos 1990, o Ceará atraiu indústrias do Sudeste (Guerra Fiscal), oferecendo incentivos fiscais e mão de obra mais barata.
- **Polos Tradicionais**: Destacam-se as indústrias de **calçados** (Região do Cariri/Sobral), **têxtil e confecções** (Fortaleza e RMF) e **alimentos/bebidas**.
- **Complexo Industrial e Portuário do Pecém (CIPP)**: É a joia da coroa da economia cearense. Localizado em São Gonçalo do Amarante, possui uma ZPE (Zona de Processamento de Exportação) única em plena operação no Brasil. Abriga a Companhia Siderúrgica do Pecém (CSP).

### ☀️ Setor de Energia
O Ceará tem vocação natural para as **Energias Renováveis**.
- **Eólica e Solar**: O estado é um dos maiores produtores de energia eólica e solar do país, aproveitando seus fortes ventos (principalmente no litoral) e alta insolação anual.
- **Hub de Hidrogênio Verde (H2V)**: O Porto do Pecém está se transformando no principal hub brasileiro de produção e exportação de hidrogênio verde para a Europa, uma aposta de industrialização sustentável.

### 🏖️ Setor Terciário (Comércio e Serviços)
- Responsável pela maior parte do PIB do estado.
- **Turismo**: Motor fundamental, atrai milhões de turistas devido ao clima quente, litoral extenso (Canoa Quebrada, Jericoacoara) e equipamentos como o Beach Park.
- **Hub Tecnológico e de Conectividade**: Fortaleza é o principal ponto de chegada de cabos submarinos de fibra óptica de alta capacidade do Atlântico no Brasil, tornando-se um grande hub tecnológico e de data centers.

### 🌾 Setor Primário (Agropecuária)
- Devido às secas periódicas (Polígono das Secas), a agricultura é limitada em grande parte do Sertão (predomina pecuária extensiva e agricultura de subsistência).
- **Fruticultura Irrigada**: Ocorre em polos específicos, como a Chapada do Apodi e o Vale do Jaguaribe, exportando melão, melancia e outras frutas (destaque para o perímetro irrigado).

---

## 🎯 Foco nas Bancas (Concursos Locais, Idecan, UECE, FGV)
- As bancas cobram incansavelmente o **Porto do Pecém** e a **ZPE**. Memorize que a ZPE do Ceará é um modelo de sucesso voltado quase exclusivamente para a exportação.
- O tema do **Hidrogênio Verde (H2V)** é a grande tendência das provas atuais como o "novo salto econômico" do estado.
- Em provas sobre infraestrutura, a posição de Fortaleza como hub de aviação e de cabos submarinos é questão certa.

---

## 💡 Macetes e Mnemônicos
**Os Três HUBs do Ceará:**
- **Portuário** (Pecém + Parceria com o Porto de Roterdã).
- **Aéreo** (Aeroporto Pinto Martins - concessão à Fraport).
- **Tecnológico** (Cabos submarinos em Fortaleza).

---

## ⚠️ Pegadinhas Comuns
- Afirmar que o algodão ainda é a principal riqueza do estado. **Falso.** O ciclo do algodão entrou em declínio forte na década de 1980 devido à praga do bicudo-do-algodoeiro.
- Dizer que a agricultura cearense é a base do PIB. **Falso.** O Setor Terciário (Serviços e Comércio) lidera folgadamente a composição do PIB estadual.`
  },
  {
    name: 'Geografia do Nordeste e Ceará',
    content: `## 📚 Geografia do Nordeste e Ceará: Teoria Completa

A compreensão da geografia nordestina exige o estudo das suas sub-regiões (Zonas Geoeconômicas), que apresentam características físicas, climáticas e econômicas muito distintas.

### 🗺️ As 4 Sub-regiões do Nordeste
1. **Zona da Mata**: Faixa litorânea oriental (do RN ao Sul da BA). Clima tropical úmido, maior densidade demográfica, áreas mais industrializadas, herança histórica da monocultura da cana-de-açúcar (latifúndios).
2. **Agreste**: Faixa de transição entre a Zona da Mata e o Sertão. Clima semiárido mais brando/tropical. Destaque para a agropecuária (policultura e minifúndios) e grandes feiras comerciais (ex: Caruaru, Campina Grande).
3. **Sertão**: A maior sub-região. Ocupa o interior nordestino (Polígono das Secas). Clima semiárido, vegetação de Caatinga (xerófita). A economia tradicional é a pecuária extensiva, e hoje há destaque para a fruticultura irrigada no Vale do São Francisco.
4. **Meio-Norte**: Faixa de transição entre o Sertão e a Amazônia (Maranhão e metade do Piauí). Clima equatorial/tropical. Vegetação de Mata de Cocais (extrativismo de babaçu e carnaúba) e avanço do agronegócio (Matopiba).

### 🌵 A Geografia do Ceará
O Ceará está quase em sua totalidade (cerca de 90%) inserido na sub-região do **Sertão**, sofrendo com o clima semiárido e as secas prolongadas.

- **Relevo Cearense**: É marcado pela **Depressão Sertaneja** (áreas baixas e planas) pontilhada por relevos residuais, chamados de **Inselbergs** (monólitos de rocha cristalina, como os monólitos de Quixadá).
- **Serras e Chapadas**: As bordas do estado possuem áreas mais elevadas que funcionam como barreiras orográficas (fazem chover de um lado). Destacam-se a **Chapada do Araripe** (Sul), **Chapada do Apodi** (Leste), **Serra da Ibiapaba** (Oeste) e o Maciço de Baturité.
- **Clima**: Predomina o **Semiárido**. As chuvas são concentradas em poucos meses (geralmente fevereiro a maio) e ocorrem devido à atuação da **ZCIT** (Zona de Convergência Intertropical).
- **Vegetação**: **Caatinga**, bioma exclusivamente brasileiro. As plantas são xerófitas (adaptadas à seca), perdem folhas no período seco (caducifólias) e possuem raízes profundas.
- **Hidrografia**: Os rios do Ceará são, em sua esmagadora maioria, **intermitentes/temporários** (secam parte do ano). A exceção é o Rio Jaguaribe e seus afluentes, que foram perenizados pela construção de grandes açudes (Castanhão, Orós).

---

## 🎯 Foco nas Bancas
- As bancas cobram intensamente o entendimento do **Relevo** como fator de alteração climática local (chuvas orográficas). Por exemplo, as serras do Ceará (como Baturité) possuem "brejos de altitude", que são áreas mais úmidas no meio do sertão, onde há Mata Atlântica e produção de café ou flores.
- Entender que o **Rio Jaguaribe** é o maior do estado e que o açude do **Castanhão** é o maior reservatório hídrico do Ceará (essencial para o abastecimento de Fortaleza).

---

## 💡 Macetes e Mnemônicos
Para lembrar as fronteiras do relevo cearense:
- O Ceará é como uma "bacia" cercada por chapadas:
- Leste = **Apodi** (Faz fronteira com RN)
- Oeste = **Ibiapaba** (Faz fronteira com PI)
- Sul = **Araripe** (Faz fronteira com PE)

---

## ⚠️ Pegadinhas Comuns
- Dizer que o Ceará possui Zona da Mata. **Falso!** O Ceará **não** possui a sub-região Zona da Mata (seu litoral já é uma transição para o semiárido).
- Afirmar que a vegetação do Ceará é pobre. A Caatinga possui altíssimo endemismo (espécies que só existem lá) e é riquíssima em biodiversidade adaptada, não confunda "aparência seca" com "pobreza ecológica".`
  },
  {
    name: 'História e Cultura do Ceará',
    content: `## 📚 História e Cultura do Ceará: Teoria Completa

A formação histórica do Ceará difere muito do restante do Nordeste canavieiro. Enquanto Pernambuco e Bahia enriquiam com a cana-de-açúcar no litoral, o Ceará foi desbravado por meio da **pecuária extensiva no interior** (Sertão).

### 🐄 A Ocupação pelo Gado (O Ciclo do Couro)
- A colonização efetiva do Ceará ocorreu no século XVII e XVIII, com o gado subindo pelos vales dos rios (como o Jaguaribe).
- Essa expansão gerou intensos conflitos (Guerra dos Bárbaros) que resultaram no extermínio ou escravização de diversas nações indígenas nativas (Tapuias).
- O Ceará viveu o que se chamou de **"Civilização do Couro"**: as casas, roupas, recipientes e camas eram feitos de couro bovino. O charque (carne de sol) tornou-se a grande moeda de troca e exportação do estado (Aracati foi um grande polo charqueador).

### ☁️ O Ciclo do Algodão ("Ouro Branco")
- A partir da Revolução Industrial (Inglaterra) e da Guerra de Secessão Americana (que bloqueou a exportação de algodão dos EUA), o Ceará tornou-se um grande produtor e exportador de algodão a partir do final do século XVIII.
- O algodão reconfigurou a economia, impulsionou a construção de estradas de ferro (Ferrovia de Baturité, depois RVC) e causou um "boom" urbano em cidades como Fortaleza, Sobral e Icó.

### ⛓️ A Abolição da Escravidão: A Terra da Luz
O Ceará tem um imenso orgulho de ter sido a **primeira província do Brasil a abolir a escravidão (25 de março de 1884)**, quatro anos antes da Lei Áurea nacional.
- O movimento abolicionista ganhou força com a greve dos jangadeiros em Fortaleza (1881), liderada por Francisco José do Nascimento, o **Dragão do Mar**, que recusaram transportar escravos vendidos para o Sul.
- José do Patrocínio batizou o Ceará de **"A Terra da Luz"** por conta desse pioneirismo.

### 🎭 Cultura, Religião e Política (Padre Cícero e Caldeirão)
- **Padre Cícero Romão Batista**: Principal figura de Juazeiro do Norte. O "Milagre da Hóstia" (que teria virado sangue na boca da beata Maria de Araújo) em 1889 transformou o Cariri no maior centro de peregrinação religiosa do Nordeste. Cícero envolveu-se na política e liderou a "Sedição de Juazeiro" (1914) contra o governo estadual rabelista.
- **Caldeirão da Santa Cruz do Deserto**: Comunidade igualitária liderada pelo beato José Lourenço (seguidor de Padre Cícero). Foi duramente bombardeada e destruída pelo Exército na Era Vargas (1936), temendo a formação de um "novo Canudos".

### 🌵 A Sede, a Seca e a Emigração
As grandes secas do século XIX e XX (especialmente a de 1877) marcaram profundamente o Ceará. Elas geraram levas de retirantes, a criação de "Campos de Concentração" (currais humanos montados pelo governo em Fortaleza para reter os flagelados) e o fenômeno dos Soldados da Borracha (cearenses que foram trabalhar nos seringais da Amazônia na 2ª Guerra Mundial).

---

## 🎯 Foco nas Bancas
- **Pioneirismo Abolicionista**: As bancas adoram perguntar o contexto do Dragão do Mar e a data de 1884.
- **Ciclos Econômicos**: Lembre da sequência de ocupação: Pecuária (Couro) -> Charque -> Algodão (Ouro Branco) -> Indústria/Serviços.
- **História Sócio-religiosa**: O massacre do Caldeirão e a Sedição de Juazeiro costumam cair em provas mais elaboradas de nível médio e superior do Ceará.

---

## 💡 Macetes e Mnemônicos
- **Terra da Luz**: Lembre que a "Luz" iluminou a liberdade (Abolição pioneira).
- **O Ceará foi povoado de "Dentro para Fora"**: Diferente do Brasil, que foi litoral-sertão, o Ceará ganhou força nos sertões (gado) e depois o desenvolvimento desceu para a capital litorânea (Fortaleza) com a exportação do algodão e o trem.

---

## ⚠️ Pegadinhas Comuns
- Afirmar que o Ceará baseou sua economia inicial na cana-de-açúcar. **Falso.** Foi o gado e o couro.`
  }
];

async function main() {
  try {
    await client.connect();
    console.log(`Updating ${upgrades.length} subtopics (FIX)...`);

    for (const u of upgrades) {
      await client.query('UPDATE "SubTopic" SET content = $1 WHERE name = $2', [u.content, u.name]);
      console.log(`Updated: ${u.name} com conteúdo premium.`);
    }

    console.log('✅ Correção finalizada com sucesso!');
  } catch (err) {
    console.error('Erro ao atualizar banco:', err);
  } finally {
    await client.end();
  }
}
main();
