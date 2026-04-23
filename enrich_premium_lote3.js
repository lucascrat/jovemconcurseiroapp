const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const upgrades = [
  {
    id: '67083fffc0e24c7604fd5cebdf51b6d8', // Atualidades Gerais: Fatos Recentes
    content: `## 📚 Atualidades Gerais: Fatos Recentes (Cenário Nacional e Internacional)

O estudo de Atualidades exige atenção aos eventos de grande repercussão que impactam a política, economia, sociedade e meio ambiente. As bancas costumam cobrar fatos ocorridos nos últimos 12 a 18 meses anteriores à prova.

### 🌍 Cenário Internacional
- **Guerra na Ucrânia**: Iniciada em fev/2022 pela invasão da Rússia. Impactos: crise energética na Europa, choque nos preços de commodities (trigo, fertilizantes) e expansão da OTAN (entrada da Finlândia e Suécia).
- **Conflito Israel x Hamas**: Escalada em out/2023. Implicações geopolíticas severas no Oriente Médio, risco de envolvimento de atores como Irã e Hezbollah, além do intenso debate na ONU sobre crises humanitárias na Faixa de Gaza.
- **Tensões EUA x China**: A "Nova Guerra Fria" gira em torno de tecnologia (5G, inteligência artificial, semicondutores) e a disputa por influência sobre a ilha de **Taiwan**.
- **BRICS+**: A expansão do bloco original (Brasil, Rússia, Índia, China, África do Sul) com a entrada de novos membros (como Egito, Etiópia, Irã e EAU) fortalece o chamado "Sul Global".

### 🇧🇷 Cenário Nacional
- **Política e Economia**: Reforma Tributária (Emenda Constitucional 132/2023) - unificação de impostos (IBS e CBS) criando o IVA Dual; transição energética e foco no protagonismo verde (COP 30 sediada em Belém/PA em 2025).
- **Meio Ambiente**: Crise climática evidenciada pelas fortes secas na Amazônia e inundações históricas no Sul do Brasil (Rio Grande do Sul em 2023 e 2024), associadas às mudanças climáticas e à intensidade do fenômeno El Niño.
- **Saúde**: Explosão de casos de **Dengue** em 2024, levando diversos estados a decretarem emergência e à incorporação de vacinas de forma escalonada no SUS.

---

## 🎯 Foco nas Bancas
- **Cebraspe**: Foca nas *consequências estruturais* dos fatos. (Ex: não pergunta quem atacou quem, mas como a guerra na Ucrânia afeta a balança comercial do agronegócio brasileiro por conta dos fertilizantes).
- **FGV e VUNESP**: Costumam cobrar nomes de tratados, locais exatos onde ocorreram conferências (ex: local da COP 30) e nomes de líderes globais.

---

## 💡 Macetes e Mnemônicos
**O IVA Dual da Reforma Tributária (O que junta com o quê?):**
- **CBS** (Contribuição sobre Bens e Serviços) = Impostos Federais (PIS, COFINS, IPI).
- **IBS** (Imposto sobre Bens e Serviços) = Impostos Estaduais e Municipais (ICMS + ISS).

---

## ⚠️ Pegadinhas Comuns
- Afirmar que a Argentina entrou no BRICS. **Falso.** Ela foi convidada sob o governo de Alberto Fernández, mas o governo de Javier Milei (que assumiu em dez/2023) rejeitou a entrada no bloco.`
  },
  {
    id: '4b5831f7960c7dd60cb0528006610ae5', // Processo Administrativo (Lei 9.784/99)
    content: `## 📚 Processo Administrativo (Lei 9.784/99)

A Lei 9.784/1999 regula o processo administrativo no âmbito da Administração Pública **Federal**. Ela busca proteger os direitos dos administrados e garantir o melhor cumprimento dos fins da Administração.

### ⚖️ Princípios e Regras Básicas
Além do famoso LIMPE (Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência), a Lei destaca:
- **Oficialidade (ou Impulso Oficial)**: O processo pode ser iniciado de ofício (pela própria administração) ou a pedido. Uma vez iniciado, a Administração tem o DEVER de impulsioná-lo até a decisão final, independentemente de provocação do interessado.
- **Informalismo (Formalismo Moderado)**: Não há o rigor excessivo do processo judicial. As formas só são exigidas quando a lei determinar para garantir direitos.
- **Verdade Material**: A Administração deve buscar o que realmente aconteceu, não se limitando às provas trazidas aos autos pelas partes (pode investigar e juntar provas de ofício).

### 🚫 Impedimento e Suspeição
A autoridade deve ser imparcial.
- **Impedimento (Art. 18)**: Presunção ABSOLUTA de parcialidade (Obrigatório afastar-se). Ex: A autoridade tem interesse direto, ou seu cônjuge/parente até 3º grau atua no processo. Se não declarar, comete falta grave.
- **Suspeição (Art. 20)**: Presunção RELATIVA. Ex: A autoridade é amiga íntima ou inimiga notória de alguma das partes.

### ↩️ Revogação x Anulação (Art. 53 - Súmula 473 do STF)
- A Administração **DEVE anular** seus próprios atos quando eivados de **vício de legalidade** (ilegais).
- A Administração **PODE revogar** seus atos válidos por motivo de **conveniência ou oportunidade** (mérito administrativo), respeitados os direitos adquiridos.

### ⏱️ Prazos Importantes da Lei
- Prazo para decidir: **30 dias** (prorrogáveis por igual período com motivação expressa), após concluída a instrução.
- Prazo para recorrer: **10 dias** contados da ciência.
- Prazo para a Administração decidir o recurso: **30 dias** (prorrogável por +30).
- Instâncias recursais: O recurso tramitará por no **máximo 3 instâncias** administrativas.

---

## 🎯 Foco nas Bancas
- **Ponto crucial**: O recurso administrativo **não tem**, como regra, efeito suspensivo. Ou seja, a decisão já começa a valer mesmo que haja recurso (salvo determinação legal ou risco de dano irreparável).
- As bancas tentam confundir afirmando que a Lei 9.784 se aplica obrigatoriamente a Estados e Municípios. **Falso.** Aplica-se à União. Aos Estados e Municípios, aplica-se de forma **subsidiária** apenas se eles não tiverem lei própria.

---

## 💡 Macetes e Mnemônicos
**Prazos base do Recurso na 9.784/99 (A Regra do 10-30):**
- Eu interponho em **10**.
- Você julga em **30**.

---

## ⚠️ Pegadinhas Comuns
- Afirmar que o processo administrativo necessita obrigatóriamente da assistência de advogado. **Falso!** Súmula Vinculante nº 5 do STF: "A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição."`
  },
  {
    id: '3f6cebe384428cadd621e9ee76cd8792', // CRM e Fidelização
    content: `## 📚 CRM (Customer Relationship Management) e Fidelização

CRM (Gestão de Relacionamento com o Cliente) não é apenas um software, mas uma **estratégia de negócio** focada no cliente, visando atrair, reter e fidelizá-lo por meio da oferta de valor percebido.

### 🖥️ O CRM como Estratégia e Ferramenta
- **Estratégia**: O cliente no centro de tudo (Customer Centric). O foco sai do "produto" e vai para "o que o cliente necessita e valoriza".
- **Ferramenta**: Softwares que armazenam todo o histórico de interações, compras, preferências e reclamações do cliente, criando um banco de dados robusto.

### 📊 Tipos de CRM
1. **CRM Operacional**: O dia a dia. É a automação de vendas, marketing e atendimento (SAC). O "front-office".
2. **CRM Analítico**: O "cérebro". Usa mineração de dados (Data Mining) para entender padrões de consumo, prever tendências e segmentar clientes. O "back-office".
3. **CRM Colaborativo**: A integração. Facilita o fluxo de comunicação entre os diferentes setores da empresa (vendas, suporte, logística) para que todos tenham a mesma visão do cliente.

### 💖 Satisfação x Fidelização
- **Satisfação**: Acontece quando as expectativas do cliente são atendidas. (Ele comprou o produto, recebeu no prazo, ficou feliz). A satisfação é condição básica, mas **não garante fidelização**.
- **Fidelização**: É o vínculo emocional e de longo prazo. Ocorre quando a expectativa é **superada** (encantamento). O cliente fiel não apenas volta a comprar, mas defende a marca e a indica para outros (Marketing boca a boca).

### Custo de Retenção
É amplamente difundido no marketing (Philip Kotler) que **"Conquistar um novo cliente custa de 5 a 7 vezes mais do que manter um atual"**. Por isso o CRM e a fidelização são tão cruciais para a lucratividade.

---

## 🎯 Foco nas Bancas (Cebraspe, FCC, FGV)
- As bancas cobram intensamente a diferença entre os tipos de CRM. Se falar de "análise de dados, cruzamento de informações e inteligência", marque **CRM Analítico**.
- Se a questão disser que a simples "satisfação com a compra" gera fidelização automática, a assertiva estará **Errada**.

---

## 💡 Macetes e Mnemônicos
**Tipos de CRM:**
- **Operacional** = Faz o negócio andar (Atende/Vende).
- **Analítico** = Pensa e descobre (Cruza dados).
- **Colaborativo** = Une a empresa (Comunicação interna).

---

## ⚠️ Pegadinhas Comuns
- Afirmar que CRM é exclusivamente um sistema/software de tecnologia. **Falso.** É uma *cultura e estratégia* organizacional; o software é apenas a ferramenta que possibilita a aplicação dessa estratégia.`
  },
  {
    id: 'a8a36db2867a902c6ee9e5be35d3dcf4', // Economia Brasileira Atual
    content: `## 📚 Economia Brasileira Atual: Estrutura, Desafios e Indicadores

A economia do Brasil é classificada como emergente e em desenvolvimento, estando tradicionalmente entre as 10 maiores do mundo em PIB (Produto Interno Bruto). No entanto, enfrenta gargalos estruturais históricos.

### 🚜 A Matriz Econômica (A Primarização)
O Brasil sofreu nas últimas décadas um processo de **Desindustrialização** (perda de participação da indústria de transformação no PIB) e uma **Primarização da Pauta de Exportações**.
- O Brasil exporta principalmente **commodities** (produtos básicos com baixa tecnologia agregada, cotados no mercado internacional). Exemplos: Soja (grão), Minério de Ferro, Petróleo cru, Carnes.
- A China é o principal parceiro comercial do Brasil (maior compradora de nossa soja e minério).

### 🏦 O Tripé Macroeconômico
Desde 1999, a economia brasileira se apoia num modelo desenhado para conter a inflação e garantir a credibilidade externa:
1. **Metas de Inflação**: O CMN (Conselho Monetário Nacional) define uma meta, e o Banco Central (Bacen) usa a taxa Selic para tentar manter a inflação no alvo.
2. **Câmbio Flutuante**: O valor do Dólar é definido pelo mercado (oferta e demanda), sofrendo intervenções do Bacen apenas em momentos de alta volatilidade ("flutuação suja").
3. **Superávit Primário**: (Agora substituído pelo Novo Arcabouço Fiscal). Historicamente era a meta do governo de arrecadar mais do que gasta (sem contar os juros da dívida) para provar que consegue pagar os credores.

### 📉 Desafios Atuais
- **Custo Brasil**: Conjunto de dificuldades que encarecem a produção no país (alta carga tributária complexa, infraestrutura logística precária - muito dependente de rodovias -, burocracia excessiva e insegurança jurídica).
- **O Novo Arcabouço Fiscal (2023)**: Veio para substituir o antigo Teto de Gastos (que congelava despesas por 20 anos). O Arcabouço atrela o crescimento das despesas públicas ao crescimento da arrecadação, tentando equilibrar as contas públicas sem paralisar os investimentos estatais.

---

## 🎯 Foco nas Bancas
- **Cebraspe**: Cobra muito o entendimento geopolítico de que o Brasil é extremamente dependente do crescimento chinês. Se a economia da China desacelera, as exportações brasileiras sofrem imediatamente.
- A **Desindustrialização Precoce** é tema recorrente: o Brasil começou a perder indústria antes mesmo de enriquecer e de desenvolver tecnologias de ponta.

---

## 💡 Macetes e Mnemônicos
**O Tripé Macroeconômico (M.C.S.):**
- **M**etas de Inflação (Controle de preços)
- **C**âmbio Flutuante (Dólar livre)
- **S**uperávit Primário (Controle de gastos)

---

## ⚠️ Pegadinhas Comuns
- Afirmar que a balança comercial brasileira é deficitária porque importamos alta tecnologia. **Falso.** Apesar de importarmos itens caros (tecnologia, semicondutores, medicamentos), o volume estrondoso da exportação do agronegócio e mineração mantém a nossa Balança Comercial altamente **superavitária** (exportamos mais do que importamos financeiramente).`
  },
  {
    id: 'f4bf2e4a70fc755eb2426beaf676981a', // Análise SWOT (Matriz FOFA)
    content: `## 📚 Análise SWOT (Matriz FOFA)

A Análise SWOT (ou matriz FOFA em português) é uma das ferramentas mais clássicas e importantes do **Planejamento Estratégico**. Ela permite realizar um diagnóstico completo do ambiente em que a organização está inserida.

### 🔍 Estrutura da Matriz
O acrônimo SWOT vem do inglês e divide-se em dois ambientes:

#### 1. Ambiente Interno (Controlável pela Organização)
Aqui analisamos o "da porta para dentro". A organização tem poder para mudar isso.
- **S - Strengths (Forças)**: Vantagens competitivas internas. Ex: equipe altamente qualificada, marca consolidada, patente exclusiva, localização excelente.
- **W - Weaknesses (Fraquezas)**: Deficiências internas que prejudicam o negócio. Ex: maquinário obsoleto, alto endividamento, péssimo clima organizacional.

#### 2. Ambiente Externo (Incontrolável pela Organização)
Aqui analisamos o "da porta para fora" (macroambiente: economia, política, natureza, concorrência). A empresa **não** pode mudar o fato, apenas adaptar-se a ele.
- **O - Opportunities (Oportunidades)**: Fatores externos que, se aproveitados, beneficiam a empresa. Ex: nova lei de isenção de impostos, falência do principal concorrente, alta do dólar (se a empresa exporta).
- **T - Threats (Ameaças)**: Fatores externos que colocam o negócio em risco. Ex: pandemia, entrada de um multinacional no bairro, greve de caminhoneiros, mudança brusca de tecnologia.

### 🔗 Cruzamento Estratégico (SWOT Cruzada / Matriz TOWS)
A análise não termina na listagem. É preciso cruzar os dados para definir estratégias:
- **Sobrevivência**: Pior cenário (Fraquezas + Ameaças). A empresa precisa reduzir custos ou até sair do mercado.
- **Manutenção**: Tem Forças, mas enfrenta fortes Ameaças. Usa suas fortalezas para se defender.
- **Crescimento**: Tem Fraquezas, mas o ambiente externo oferece Oportunidades. Deve buscar parcerias ou melhorar internamente para surfar na oportunidade.
- **Alavancagem (Desenvolvimento)**: Melhor cenário (Forças + Oportunidades). A empresa está forte e o mercado está favorável. Ação agressiva de expansão.

---

## 🎯 Foco nas Bancas
- **Ponto vital absoluto para provas (Cebraspe, FCC, FGV)**: A confusão clássica que derruba candidatos é misturar os ambientes.
- Se a questão disser: *"A falta de capacitação dos funcionários é uma Ameaça para a empresa."* **ERRADO**. Falta de capacitação é interna, portanto é uma FRAQUEZA.
- *"A nova lei que proíbe produtos da empresa X é uma Fraqueza."* **ERRADO**. Nova lei é fator externo, incontrolável, logo é uma AMEAÇA.

---

## 💡 Macetes e Mnemônicos
**F.O.F.A.**
- **F**orças (Interno / Positivo)
- **O**portunidades (Externo / Positivo)
- **F**raquezas (Interno / Negativo)
- **A**meaças (Externo / Negativo)

*Dica de Ouro*: Conseguiu resolver com dinheiro ou demissão direto no RH da empresa? É interno (Força/Fraqueza). Depende do Governo, Natureza ou Concorrente? É externo (Oportunidade/Ameaça).

---

## ⚠️ Pegadinhas Comuns
- Afirmar que a análise SWOT serve apenas para empresas privadas com fins lucrativos. **Falso.** É perfeitamente aplicável ao Setor Público (ex: uma prefeitura analisando sua gestão), ONGs ou até no planejamento pessoal de um concurseiro.`
  }
];

async function main() {
  try {
    await client.connect();
    console.log(`Updating ${upgrades.length} subtopics (LOTE 3 Premium)...`);

    for (const u of upgrades) {
      await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [u.content, u.id]);
      console.log(`Updated: ${u.id} com conteúdo premium.`);
    }

    console.log('✅ Lote 3 finalizado com sucesso!');
  } catch (err) {
    console.error('Erro ao atualizar banco:', err);
  } finally {
    await client.end();
  }
}
main();
