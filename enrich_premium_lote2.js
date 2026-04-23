const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const upgrades = [
  {
    id: '397ab6bf3bda5b5b5955f81488eca9a5', // Geografia do Ceará
    content: `## 📚 Geografia do Ceará: Relevo, Clima e Hidrografia

O estado do Ceará, localizado na região Nordeste, possui uma geografia singular e intimamente ligada às condições do semiárido. 

### 🌄 O Relevo (A "Bacia" Cearense)
O relevo cearense pode ser compreendido como uma grande depressão cercada por relevos mais altos nas bordas.
- **Depressão Sertaneja**: Ocupa a maior parte do estado (centro). É uma planície de erosão antiga, com altitudes médias entre 200m e 300m, marcada pela presença de **inselbergs** (relevos residuais de rochas cristalinas, como os famosos monólitos de Quixadá).
- **Chapadas e Planaltos (Bordas)**:
  - **Oeste**: Serra da Ibiapaba (divisa com Piauí, possui áreas úmidas).
  - **Leste**: Chapada do Apodi (divisa com Rio Grande do Norte).
  - **Sul**: Chapada do Araripe (divisa com Pernambuco, rica em fósseis e fontes de água).
- **Maciços Residuais**: Serras no meio da depressão (ex: Maciço de Baturité, Serra de Maranguape, Uruburetama). Possuem clima mais ameno e vegetação de Mata Atlântica (brejos de altitude) graças às **chuvas orográficas** (chuvas de relevo).

### ☀️ O Clima e o Polígono das Secas
Quase a totalidade do Ceará está no **Polígono das Secas**, dominada pelo clima **Semiárido**.
- O regime de chuvas é definido pela atuação da **ZCIT (Zona de Convergência Intertropical)**, que atua trazendo chuvas na chamada "Quadra Chuvosa" (fevereiro a maio).
- Quando há o fenômeno **El Niño** (aquecimento das águas do Oceano Pacífico), os ventos alísios enfraquecem e a ZCIT não desce o suficiente, provocando secas severas no estado.

### 💧 Hidrografia e Perenização
Historicamente, os rios cearenses são **intermitentes** ou temporários (secam no período de estiagem) devido à base cristalina do solo que não retém água.
- **Rio Jaguaribe**: É a principal bacia hidrográfica (o "maior rio seco do mundo"). Para combater a seca, construiu-se uma política de grandes açudes.
- O Jaguaribe foi perenizado pelas águas dos enormes açudes do **Castanhão** (o maior do estado) e de **Orós**.
- **Projeto de Integração do São Francisco (Transposição)**: O Eixo Norte da transposição traz águas do "Velho Chico" para o Ceará, chegando ao cinturão das águas e ao açude Castanhão.

---

## 🎯 Foco nas Bancas
- **Cebraspe/Idecan/FGV**: Cobram muito a influência do relevo sobre o clima (Barlavento chove, Sotavento é seco). Costumam pedir as fronteiras naturais formadas pelas serras (Araripe ao sul, Ibiapaba a oeste).
- Outro ponto de prova constante é a relação direta entre o **El Niño** e a ocorrência de secas extremas no Nordeste e no Ceará.

---

## 💡 Macetes e Mnemônicos
- **Chuvas Orográficas (Barlavento x Sotavento)**:
  - **B**arlavento = **B**atida do vento (Lado úmido, que chove na subida da serra).
  - **S**otavento = **S**eco (Lado seco, o vento desce sem umidade).

---

## ⚠️ Pegadinhas Comuns
- Afirmar que não há floresta úmida no Ceará. **Falso!** Nos topos e barlaventos das serras (Baturité, Maranguape, Araripe) existem os "Brejos de Altitude", que abrigam resquícios de Mata Atlântica e clima mais frio (microclimas).`
  },
  {
    id: '7831347068d03321946925b56a2f02f3', // Qualidade no Atendimento Telefônico
    content: `## 📚 Qualidade no Atendimento Telefônico (Telemarketing e SAC)

O atendimento telefônico é, muitas vezes, o primeiro contato do cidadão ou cliente com a organização (pública ou privada). Uma comunicação ineficaz pode manchar a imagem institucional de forma irremediável.

### 🗣️ Princípios de Ouro do Atendimento Telefônico
1. **Comunicação Ativa e Escuta Empática**: A voz não deve ser robótica. A entonação (sorriso na voz) substitui a linguagem corporal que falta no telefone.
2. **Clareza e Objetividade**: Respostas diretas, usando a norma culta, sem gírias ou jargões excessivamente técnicos (que o cliente não entenda).
3. **Agilidade sem Pressa**: O tempo de espera é o maior causador de estresse. Deve-se resolver o problema rapidamente, mas sem demonstrar que quer "se livrar" da ligação.
4. **Padronização x Personalização**: Usar scripts e saudações padronizadas ("Bom dia, Empresa X, João falando"), mas tratar a necessidade do cliente de forma única e personalizada.

### ❌ Vícios de Linguagem e Gerundismo
O maior vilão do teleatendimento é o **Gerundismo**, que é o uso inadequado do gerúndio para expressar ações pontuais no futuro.
- **Inadequado (Gerundismo)**: "Eu vou estar transferindo a sua ligação." / "Nós vamos estar enviando o documento."
- **Adequado**: "Eu vou transferir a sua ligação." / "Nós enviaremos o documento."

Outros vícios a evitar:
- Diminutivos excessivos ("um minutinho", "vou olhar o seu sisteminha").
- Gírias ("falou", "tá beleza", "tranquilo").
- Expressões de incerteza ("eu acho que", "talvez").

### 📞 Etiqueta ao Telefone
- Ao atender, identifique imediatamente o órgão/empresa e seu nome.
- Ao precisar colocar a chamada em espera, **peça permissão** ao usuário e informe o motivo. Nunca deixe a linha muda por muito tempo sem dar "feedback".
- Ao finalizar, pergunte se há mais alguma coisa em que possa ajudar e espere o cliente desligar primeiro.

---

## 🎯 Foco nas Bancas
- **Cebraspe e FCC**: Adoram colocar situações hipotéticas onde o atendente usa termos técnicos ou gírias para "agilizar", sendo isso uma quebra da qualidade.
- Cobram também que o atendimento no setor público deve obedecer à **Impessoalidade** e à **Cortesia** (conforme Código de Ética e decretos de atendimento ao cidadão).

---

## 💡 Macetes e Mnemônicos
**Os 3 Cs do Atendimento:**
- **C**ordialidade (seja educado, chame pelo nome).
- **C**lareza (não use gerundismo nem termos técnicos).
- **C**oncisão (vá direto ao ponto para não gastar o tempo do usuário).

---

## ⚠️ Pegadinhas Comuns
- Afirmar que um "bom script" de atendimento deve ser seguido cegamente em qualquer situação. **Falso.** O roteiro é uma base, mas o atendimento de qualidade exige flexibilidade e empatia (atendimento humano) caso o problema do cliente fuja do padrão.`
  },
  {
    id: '0f2efd5ae6433a0d27315cf61da81ec7', // Ordem Social e Tributária
    content: `## 📚 Ordem Social e Tributária na Constituição

A Constituição de 1988 dedicou Títulos específicos para organizar as bases da sociedade (Ordem Social) e o recolhimento e distribuição das receitas do Estado (Sistema Tributário Nacional).

### 🛡️ A Ordem Social (Art. 193 ao 232 da CF)
A Ordem Social tem como base o **primado do trabalho**, e como objetivo o **bem-estar e a justiça sociais**.
Os principais pilares da Ordem Social são:
- **Seguridade Social**: Compreende um conjunto integrado de ações que engloba Saúde, Previdência e Assistência Social (**PAS - Previdência, Assistência e Saúde**).
- **Educação, Cultura e Desporto**: A educação é direito de todos e dever do Estado e da família, visando ao pleno desenvolvimento da pessoa, seu preparo para o exercício da cidadania e sua qualificação para o trabalho.
- **Meio Ambiente (Art. 225)**: Todos têm direito ao meio ambiente ecologicamente equilibrado (direito de terceira geração/dimensão), impondo-se ao Poder Público e à coletividade o dever de defendê-lo.
- **Família, Criança, Adolescente, Jovem e Idoso**: A família tem especial proteção do Estado.

### 💰 Sistema Tributário Nacional (Art. 145 ao 162)
O Estado precisa de recursos para financiar a Ordem Social, o que se dá por meio dos tributos.
**Espécies Tributárias (Teoria Pentapartida do STF)**:
1. **Impostos**: Não vinculados. Você paga por demonstrar riqueza (ex: IPVA, IR, IPTU).
2. **Taxas**: Vinculadas a um serviço público específico (ex: taxa de emissão de passaporte) ou pelo poder de polícia (ex: alvará de funcionamento).
3. **Contribuições de Melhoria**: Cobradas quando há uma obra pública que valoriza o imóvel do contribuinte.
4. **Empréstimos Compulsórios**: Instituídos pela União em casos de calamidade pública, guerra externa ou urgência financeira.
5. **Contribuições Especiais**: Ex: Contribuições Sociais (financiam a Seguridade Social), CIDE, COSIP (iluminação).

### Principais Limitações ao Poder de Tributar (Princípios)
- **Legalidade**: Nenhum tributo pode ser criado ou aumentado sem LEI (em regra, lei ordinária).
- **Anterioridade Anual**: O tributo criado/aumentado não pode ser cobrado no mesmo ano.
- **Anterioridade Nonagesimal (Noventena)**: Deve-se esperar 90 dias antes de cobrar um tributo novo/aumentado. *(Exceções aplicam-se a alguns impostos urgentes, como II, IE, IOF e IEG).*

---

## 🎯 Foco nas Bancas
- **Cebraspe e FGV**: Em Direito Constitucional, a clássica pegadinha é dizer que o SUS (Saúde) exige contribuição do cidadão. **Falso.** O acesso à saúde é universal e independe de contribuição prévia (diferente da Previdência Social, que tem caráter contributivo).
- Em tributário, as bancas adoram cobrar as exceções ao princípio da Legalidade e Anterioridade (Impostos Extra Fiscais como II, IE, IPI, IOF podem ter alíquotas alteradas pelo Executivo).

---

## 💡 Macetes e Mnemônicos
**O tripé da Seguridade Social (PAS):**
- **P**revidência (exige contribuição)
- **A**ssistência (para quem necessitar, não exige contribuição prévia)
- **S**aúde (acesso universal e igualitário, não exige contribuição)

---

## ⚠️ Pegadinhas Comuns
- Confundir Taxa com Tarifa. **Taxa** é tributo (compulsório), pago pelo serviço público essencial cobrado pelo Estado. **Tarifa/Preço Público** é facultativo, pago em contratos bilaterais (ex: conta de luz, pedágio de concessionária).`
  },
  {
    id: 'bc2b4398a3833450d4d3da85f346479a', // Hierarquia Urbana
    content: `## 📚 Hierarquia Urbana e a Rede de Cidades

A hierarquia urbana é a forma como as cidades se organizam e se subordinam umas às outras, dependendo do grau de complexidade de sua economia e da capacidade de influenciar outros centros urbanos. 

O IBGE classifica as cidades brasileiras em uma hierarquia funcional com base na região de influência (REGIC).

### 🌐 A Rede Urbana Contemporânea
Historicamente, a hierarquia urbana era rígida (o morador da vila precisava ir à cidade pequena, depois à cidade média, depois à metrópole). Hoje, devido ao avanço dos transportes e das telecomunicações (**Meio Técnico-Científico-Informacional**), a hierarquia é **flexível/reticular**. Uma pessoa no interior pode acessar serviços da metrópole global diretamente (via internet, compras, EAD).

### 🏛️ Os Níveis Hierárquicos (Classificação do IBGE)
1. **Grande Metrópole Nacional**: Maior poder de influência do país, estendendo-se por todo o território. Exclusivamente **São Paulo**.
2. **Metrópole Nacional**: Grande polo com influência que transcende as fronteiras do seu estado. Ex: **Rio de Janeiro** e **Brasília**.
3. **Metrópole**: Cidades que possuem forte grau de influência na macrorregião onde estão inseridas (geralmente uma ou duas por região). Ex: **Fortaleza, Recife, Salvador, Belo Horizonte, Curitiba, Porto Alegre, Manaus, Belém, Goiânia, Campinas, Florianópolis, Vitória**.
4. **Capital Regional**: Cidades (podem ser capitais de estado ou não) que influenciam sua região imediata, oferecendo serviços complexos, mas sem a pujança internacional de uma metrópole. (Ex: Ribeirão Preto, Londrina).
5. **Centro Sub-Regional e Centro Local**: Cidades médias e pequenas, cuja área de influência atinge apenas os municípios vizinhos diretos, oferecendo comércio e serviços básicos.

### 🏙️ Conceitos Conexos
- **Metropolização**: Processo de atração populacional para a metrópole. Ocorre forte conurbação.
- **Desmetropolização (Involução Metropolitana)**: Fenômeno atual no Brasil onde as cidades médias (no interior) crescem demográfica e economicamente a um ritmo superior ao das metrópoles, atraindo indústrias e pessoas (fuga do trânsito, violência e alto custo).
- **Megacidade**: Conceito quantitativo (cidade com mais de 10 milhões de habitantes, ex: SP).
- **Cidade Global**: Conceito qualitativo (cidades que funcionam como nós da globalização, abrigam sedes de multinacionais, bolsas de valores, centros de pesquisa, etc.). SP e RJ são as do Brasil.

---

## 🎯 Foco nas Bancas
- **Cebraspe e FCC**: Adoram perguntar sobre a mudança da hierarquia urbana. A afirmativa de que "o modelo atual de hierarquia urbana é flexível devido aos avanços tecnológicos" é sempre certa.
- Fique atento à **Desmetropolização**. Bancas usam o termo para tentar confundir o candidato, sugerindo que a metrópole está "diminuindo de tamanho" (o que é falso; ela continua crescendo, mas o interior cresce mais rápido).

---

## 💡 Macetes e Mnemônicos
- **Hierarquia Atual = Rede (Pula etapas)**. Com a internet, você não precisa viajar para a cidade vizinha para comprar um livro, você compra direto do depósito em São Paulo (Grande Metrópole Nacional).

---

## ⚠️ Pegadinhas Comuns
- Afirmar que a Grande Metrópole Nacional abrange SP, RJ e Brasília. **Falso.** Apenas SÃO PAULO ostenta o topo absoluto da hierarquia (Grande Metrópole Nacional) no estudo recente do IBGE. RJ e BSB são Metrópoles Nacionais.`
  },
  {
    id: '03d324980b485eaf5f8197793f819133', // Gestão de Pessoas e Liderança
    content: `## 📚 Gestão de Pessoas e Liderança nas Organizações

A Gestão de Pessoas evoluiu de um modelo burocrático de "Departamento Pessoal" (focado apenas em bater ponto, pagar salário e demitir) para um modelo estratégico focado no **Capital Humano** e no desenvolvimento de competências.

### 🔄 As Diferentes Visões da Liderança
A liderança não é um dom inato, mas uma habilidade de influenciar pessoas para alcançar objetivos. As bancas cobram três teorias principais:

#### 1. Teorias dos Traços (Ultrapassada)
- Defendia que líderes já "nascem" líderes, possuindo traços físicos, intelectuais e de personalidade natos. Hoje é descartada pela administração moderna.

#### 2. Estilos de Liderança (Kurt Lewin - O Clássico)
- **Liderança Autocrática**: O líder centraliza todas as decisões, não ouve o grupo. Foco extremo na tarefa. Resultado: alta produtividade com o líder presente, mas forte frustração e tensão no grupo.
- **Liderança Democrática (Participativa)**: As decisões são debatidas pelo grupo, o líder atua como facilitador e orientador. Resultado: ritmo constante, alta qualidade do trabalho e bom clima organizacional.
- **Liderança Liberal (Laissez-Faire)**: Delegação total das decisões ao grupo, participação mínima do líder. Resultado: forte desorganização, perda de tempo e baixa qualidade se o grupo não for altamente maduro.

#### 3. Liderança Situacional (Hersey e Blanchard)
- **Não existe o melhor estilo universal**. O estilo do líder deve se adaptar ao **nível de maturidade do subordinado** (maturidade é a junção de competência técnica + motivação).
- Se o liderado é inexperiente e inseguro: o líder deve *determinar* (foco alto na tarefa).
- Se o liderado é super especialista e motivado: o líder deve *delegar* (foco baixo na tarefa e no relacionamento).

### 🏆 Liderança Transacional vs Transformacional
- **Transacional**: Relação de troca (transação). "Você atinge a meta e eu te dou um bônus/promoção". Foco na eficiência e na rotina.
- **Transformacional**: O líder inspira a equipe a transcender seus interesses pessoais pela missão da empresa. Promove inovação, motivação carismática e transformação cultural (ex: Steve Jobs).

---

## 🎯 Foco nas Bancas
- **Cebraspe (CESPE)**: Ama cobrar a **Liderança Situacional** de Hersey e Blanchard. Lembre-se: O líder se adapta à maturidade do grupo, e não o contrário.
- **FCC / FGV**: Cobram muito os resultados do estudo de Kurt Lewin. Na liderança autocrática, a produtividade despenca assim que o líder vira as costas.

---

## 💡 Macetes e Mnemônicos
**Estilos de Lewin:**
- **Autocrático**: Eu mando.
- **Democrático**: Nós decidimos.
- **Liberal (Laissez-Faire)**: Vocês decidem sozinhos (deixa a vida me levar).

**Liderança Transformacional:** Lembre da palavra **Inspirar**. Transacional lembra **Bater ponto e Meta**.

---

## ⚠️ Pegadinhas Comuns
- Afirmar que a Liderança Democrática é a melhor em *todas* as situações. **Falso.** Em caso de urgência extrema (ex: incêndio ou prazo fatal em algumas horas), o estilo Autocrático é o mais rápido e eficaz. Tudo depende da situação.`
  }
];

async function main() {
  try {
    await client.connect();
    console.log(`Updating ${upgrades.length} subtopics (LOTE 2 Premium)...`);

    for (const u of upgrades) {
      await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [u.content, u.id]);
      console.log(`Updated: ${u.id} com conteúdo premium.`);
    }

    console.log('✅ Lote 2 finalizado com sucesso!');
  } catch (err) {
    console.error('Erro ao atualizar banco:', err);
  } finally {
    await client.end();
  }
}
main();
