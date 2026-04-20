const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const upgrades = [

  // ==================== FÍSICA (PRF) — MUITO CURTOS ====================

  {
    id: '04a9c92df294a71d3adeca3b5da502ed', // Movimento Uniforme (MU) — 187 chars
    content: `## Movimento Uniforme (MU): Conceito e Aplicações na PRF

### Definição
No Movimento Uniforme, a velocidade escalar é **constante** e a aceleração é **zero**.

### Função Horária da Posição
**S = S₀ + V · t**
- S = posição final (m)
- S₀ = posição inicial (m)
- V = velocidade constante (m/s)
- t = tempo (s)

### Gráficos do MU
- **S × t**: reta inclinada (inclinação = velocidade)
- **V × t**: reta horizontal (velocidade constante)
- **a × t**: reta sobre o zero (sem aceleração)

### Aplicação Prática — PRF
**Problema típico**: Um veículo circula a 90 km/h constante. Em quanto tempo percorre 150 km?
- Converter: 90 km/h = 25 m/s
- t = S/V = 150.000 / 25 = 6.000 s = **1h 40min**
- Ou diretamente: t = 150/90 = 1,67 h = **1h 40min**

### Espaço Percorrido Entre Dois Tempos
ΔS = V · Δt

**Importante**: No MU, espaços iguais são percorridos em tempos iguais.

### Velocidade com Vetores (MR_etilizando MU)
Para dois móveis em sentido contrário:
- Velocidade de aproximação = V₁ + V₂
- Velocidade de afastamento = V₁ - V₂ (se mesmo sentido)

### Exemplo Cebraspe
"Dois veículos partem do mesmo ponto em sentidos opostos, um a 60 km/h e outro a 80 km/h. Em quanto tempo estarão a 280 km de distância?"
- Velocidade relativa = 60 + 80 = 140 km/h
- t = 280/140 = **2 horas**

> 🎯 **Dica PRF**: A Cebraspe usa MU para calcular velocidades relativas em perseguições e encontros em rodovias. Sempre some as velocidades quando em sentidos opostos.`
  },

  {
    id: '9f931a2cf8115fea4645e4a32ff12360', // Velocidade Média e Instantânea — 363 chars
    content: `## Velocidade Média, Instantânea e Limite de Velocidade

### Velocidade Média
**VM = ΔS / Δt = (S_f - S_i) / (t_f - t_i)**

Representa o "ritmo geral" da viagem — não informa nada sobre variações durante o percurso.

**Conversão de Unidades** (fundamental!):
- km/h → m/s: **divide por 3,6**
- m/s → km/h: **multiplica por 3,6**

Exemplos:
- 72 km/h = 72/3,6 = **20 m/s**
- 15 m/s = 15 × 3,6 = **54 km/h**

### Velocidade Instantânea
É a velocidade em um instante específico — o que o velocímetro mostra.
Em um MU, VM = V_instantânea (são iguais).
Em MUV, a velocidade instantânea varia ao longo do tempo.

### Velocidade Escalar Média em Percurso com Trechos Diferentes
Se um carro vai 100 km a 100 km/h e 100 km a 50 km/h:
- Tempo total = 1h + 2h = 3h
- VM = 200 km / 3h = **66,7 km/h** (NÃO é a média aritmética das velocidades!)

### Distância de Reação e Frenagem (Aplicação PRF)
Antes de frear, o condutor precisa de um tempo de reação (~0,5 a 1s):
- **Distância de reação** = V × t_reação
- **Distância de frenagem** = depende da velocidade e do atrito
- **Distância total de parada** = d_reação + d_frenagem

**Exemplo**: V = 72 km/h = 20 m/s; t_reação = 1s
d_reação = 20 × 1 = **20 m** antes de sequer frear!

> 🎯 **Dica PRF**: A distinção entre velocidade MÉDIA e INSTANTÂNEA é cobrada sempre. O velocímetro mede a instantânea; para calcular se excedeu o limite em um trecho monitorado, usa-se a média.`
  },

  {
    id: '7533c2bed8e47bfaf17a00f140a2fab6', // As Três Leis de Newton — 263 chars
    content: `## As Três Leis de Newton: Aplicações em Acidentes de Trânsito

### 1ª Lei de Newton — Princípio da Inércia
**"Um corpo em repouso permanece em repouso, e um corpo em movimento permanece em movimento uniforme em linha reta, a menos que uma força resultante atue sobre ele."**

**Aplicação na PRF**:
- O passageiro sem cinto, em uma freada brusca, continua em movimento (inércia) → choca-se contra o para-brisa
- O veículo em alta velocidade tem maior inércia → necessita de maior força para parar

### 2ª Lei de Newton — Princípio Fundamental da Dinâmica
**F_resultante = m × a**

- F em Newtons (N)
- m em kg
- a em m/s²

**Aplicação na PRF**:
- Um veículo de 1.000 kg com aceleração de 5 m/s² → F = 1.000 × 5 = **5.000 N**
- Para frear: F_atrito = m × a (negativo = desaceleração)

| Colisão | Força | Explicação |
|---------|-------|-----------|
| Alta velocidade | Força maior | F = ma; maior v → maior Δa no impacto |
| Maior massa | Força maior | F = ma; doubling m doubles F |

### 3ª Lei de Newton — Ação e Reação
**"Para toda ação há uma reação de mesma intensidade, mesma direção e sentido oposto."**

**Aplicação na PRF**:
- A frenagem do veículo gera força para frente nos ocupantes (reação do banco → pressão no cinto)
- Em colisão frontal, os dois veículos exercem forças iguais um no outro — mas as massas diferentes causam acelerações diferentes!

### Calculando Aceleração de Frenagem
Se um veículo de 80 km/h (22,2 m/s) para em 4 segundos:
a = Δv / t = (0 - 22,2) / 4 = **-5,55 m/s²** (desaceleração)

> 🎯 **Dica PRF**: A Cebraspe cobra: por que o airbag salva vidas? Porque **aumenta o tempo de colisão**, reduzindo a força de impacto. F = m × (Δv/Δt) → maior Δt = menor F.`
  },

  {
    id: '7c0f219ba099bca0a796dd4186a71900', // Força de Atrito e Frenagem — 215 chars
    content: `## Força de Atrito e Distância de Frenagem

### Força de Atrito
**F_at = μ × N**
- μ (mi) = coeficiente de atrito (adimensional, entre 0 e 1)
- N = força normal (perpendicular à superfície, em N)
- Em superfície horizontal: N = m × g (g ≈ 10 m/s²)

### Tipos de Atrito
| Tipo | Situação | μ |
|------|----------|---|
| **Estático** | Objeto em repouso, prestes a mover | Maior |
| **Cinético** | Objeto em movimento (pneu deslizando) | Menor |
| **Rolamento** | Pneu girando normalmente | Muito pequeno |

**Importante**: ABS impede que o pneu trave → mantém atrito de rolamento → maior controle!

### Cálculo da Distância de Frenagem
Usando Torema Energia-Trabalho:
Ec = F_at × d → (1/2)mv² = μmg × d
**d = v² / (2μg)**

**Exemplo**: v = 20 m/s, μ = 0,5, g = 10 m/s²
d = 400 / (2 × 0,5 × 10) = 400/10 = **40 m**

### Impacto da Velocidade na Distância de Frenagem
Se a velocidade **dobra**, a distância de frenagem **quadruplica** (função quadrática de v²)!

| Velocidade | Distância de Frenagem (μ=0,5) |
|------------|-------------------------------|
| 50 km/h (13,9 m/s) | ≈ 19 m |
| 100 km/h (27,8 m/s) | ≈ 77 m |
| 150 km/h (41,7 m/s) | ≈ 174 m |

### Fatores que Aumentam a Distância de Frenagem
1. Velocidade maior
2. Coeficiente de atrito menor (pista molhada, barro)
3. Maior massa do veículo
4. Pneus carecas (menor μ)
5. Freios desgastados

> 🎯 **Dica PRF**: A relação v² mostra por que dobrar a velocidade é muito mais perigoso do que parece. Essa relação é cobrada em cálculos diretos pela Cebraspe.`
  },

  {
    id: 'ec8d75833547152b676af5c4f3f02c95', // Teorema da Energia Cinética — 179 chars
    content: `## Teorema Trabalho-Energia e Energia Cinética

### Energia Cinética
**Ec = (1/2) × m × v²**
- m = massa em kg
- v = velocidade em m/s
- Ec em Joules (J)

**Exemplo**: Veículo de 1.000 kg a 72 km/h (20 m/s)
Ec = 0,5 × 1.000 × 400 = **200.000 J = 200 kJ**

Se a velocidade dobra (40 m/s):
Ec = 0,5 × 1.000 × 1.600 = **800.000 J** (4× maior!)

### Trabalho de uma Força
**W = F × d × cos(θ)**
- θ = ângulo entre força e deslocamento
- Força na mesma direção: cos(0°) = 1 → W = F × d
- Força perpendicular: cos(90°) = 0 → W = 0

### Teorema Trabalho-Energia Cinética
**W_total = ΔEc = Ec_f - Ec_i**

O trabalho realizado pela força resultante é igual à variação da energia cinética.

**Aplicação na Frenagem**:
- Veículo a 20 m/s para completamente
- W_atrito = Ec_f - Ec_i = 0 - 200.000 = -200.000 J
- O atrito realizou 200.000 J de trabalho negativo (freou o veículo)

### Energia Potencial e Conservação
Em descidas, energia potencial (mgh) converte-se em cinética: v aumenta.
Em subidas, o inverso: v diminui.

**Lei da Conservação de Energia**:
Em sistema sem atrito: Emecânica = Ec + Ep = constante
Na prática (com atrito): parte vira calor → pneus e freios aquecem!

> 🎯 **Dica PRF**: O aquecimento dos freios em longas descidas é exatamente a energia cinética convertida em calor pelo atrito — pode causar falha dos freios ("vapour lock"). Por isso existem rampas de fuga nas rodovias.`
  },

  {
    id: '4d7b012e76eddd0587c6d3130c35ceab', // Tipos de Colisões — 187 chars
    content: `## Colisões: Tipos e Aplicações Periciais

### Quantidade de Movimento (Momentum)
**p = m × v**
- p em kg·m/s
- Direção do vetor igual à velocidade

### Lei da Conservação de Momentum
Em um sistema isolado (sem forças externas):
**p_total antes = p_total depois**
**m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'**

### Tipos de Colisão
| Tipo | Característica | EC conservada? | Exemplo |
|------|---------------|----------------|---------|
| **Elástica** | Objetos se separam sem deformação | Sim | Bolas de bilhar |
| **Inelástica parcial** | Deformação, mas se separam | Não (parte vira calor/som) | Colisão entre carros |
| **Perfeitamente Inelástica** | Objetos ficam unidos | Não (máxima perda) | Engavetamento onde carros travam |

### Coeficiente de Restituição (e)
e = (v₂' - v₁') / (v₁ - v₂)
- e = 1: colisão perfeitamente elástica
- e = 0: colisão perfeitamente inelástica
- 0 < e < 1: colisão inelástica parcial (a maioria dos acidentes)

### Aplicação Pericial da PRF
**Colisão Perfeitamente Inelástica** (carros que ficam juntos após impacto frontal):
m₁v₁ + m₂v₂ = (m₁+m₂) × V_final

Exemplo: Carro 1 (800 kg, 30 m/s) + Carro 2 (1200 kg, em repouso)
800×30 + 1200×0 = 2000 × V
V = 24.000/2.000 = **12 m/s** (velocidade após impacto)

A energia cinética perdida vira deformação, calor e som — permite estimar intensidade do impacto.

> 🎯 **Dica PRF**: Na perícia de acidentes, a conservação do momentum permite calcular velocidades **antes** do impacto a partir das posições de repouso. É o princípio que fundamenta a análise técnica de acidentes.`
  },

  {
    id: '1f03910a81c9b0842511b88c6c834969', // Trabalho de uma Força — 188 chars
    content: `## Trabalho de uma Força

### Definição
Trabalho é a medida da energia transferida por uma força ao longo de um deslocamento.
**W = F × d × cos(θ)**

### Casos Especiais
| Ângulo (θ) | cos(θ) | Tipo de Trabalho |
|------------|--------|-----------------|
| 0° (força e deslocamento mesmo sentido) | 1 | Motor (W positivo) |
| 90° (força perpendicular) | 0 | Trabalho nulo (força normal) |
| 180° (força contrária ao deslocamento) | -1 | Resistência (W negativo) |

### Trabalho do Peso
W_peso = m × g × h
- Em descidas: W positivo (peso realiza trabalho)
- Em subidas: W negativo (peso resiste ao movimento)

### Trabalho do Atrito
Sempre negativo (atrito opõe-se ao movimento):
**W_atrito = -F_at × d = -μ × m × g × d**

### Unidade: Joule (J)
1 J = 1 N × 1 m = 1 kg·m²/s²

### Potência
Potência é o trabalho realizado por unidade de tempo:
**P = W/t** (em Watts, W)
P = F × v (quando força e velocidade são constantes)

Exemplo: Um motor desenvolve 50.000 W (50 kW) aplicando 2.000 N de força. Velocidade:
v = P/F = 50.000/2.000 = **25 m/s = 90 km/h**

### Aplicação PRF-Energia Cinética e Deformação
A energia absorvida na deformação dos veículos = trabalho realizado pelas forças de impacto:
W_deformação = Ec_perdida = (1/2)mv² - 0

> 🎯 **Dica PRF**: Potência é fundamentalmente ligada ao desempenho do veículo. Motores mais potentes conseguem manter velocidade em subidas — isso explica por que caminhões sobem mais devagar: menor relação P/m.`
  },

  {
    id: '08bc85c31b7327035aec45c392ca1d6c', // Quantidade de Movimento — 215 chars
    content: `## Quantidade de Movimento e Impulso

### Definição
**p = m × v** (vetor — tem direção e sentido)

A quantidade de movimento (ou momentum linear) é o produto da massa pela velocidade.

### Impulso
**J = F × Δt = Δp**

O impulso de uma força é igual à variação da quantidade de movimento que ela provoca.

**Aplicações Práticas**:
- Airbag: aumenta o **Δt** → reduz **F** (com mesmo impulso)
- Cinto de segurança: distribui a força em área maior + aumenta Δt
- Para-choque moderno: absorve energia aumentando o tempo de deformação

### Conservação da Quantidade de Movimento
Em sistema isolado: **p_total = constante**
m₁v₁i + m₂v₂i = m₁v₁f + m₂v₂f

**Exemplo Pericial**:
Caminhão (10.000 kg, 20 m/s) colide com carro parado (1.000 kg). Ficam unidos:
p = (10.000 × 20) + (1.000 × 0) = 11.000 × V
V = 200.000/11.000 ≈ **18,2 m/s** após impacto

### Momento Angular (rotacional)
Em capotamentos, o veículo adquire momento angular. Essa análise pericial considera:
- Velocidade de translação pré-impacto
- Ângulo de incidência
- Marcas no solo (rastros de capotamento)

### Diagrama de Impulso e Segurança Viária
| Situação | Δt | Força |
|----------|-----|-------|
| Sem airbag, sem cinto | Pequeno (~20ms) | Grandíssima |
| Com airbag + cinto | Maior (~100ms) | Reduzida em ~5× |

> 🎯 **Dica PRF**: "Por que o airbag salva vidas?" → Porque aumenta o tempo de atuação da força (Δt), reduzindo a força de impacto (F = Δp/Δt). Mesma variação de p, maior tempo = menor força letal.`
  },

  // ==================== GEOPOLÍTICA BRASILEIRA ====================

  {
    id: '4cec6174faad1f3f3aed5e4b066a2ea9', // Fronteiras Terrestres — 220 chars
    content: `## Fronteiras Terrestres do Brasil e Segurança Viária

### Extensão e Países Limítrofes
O Brasil faz fronteira com **10 países** (todos da América do Sul, exceto Chile e Equador):

| País | Extensão aprox. | Características |
|------|----------------|----------------|
| Bolívia | 3.423 km | Maior fronteira; rota de tráfico |
| Peru | 2.995 km | Amazônica; acesso fluvial |
| Colombia | 1.644 km | Tri-fronteira (Peru/Col/Bra) |
| Venezuela | 2.199 km | Tensão geopolítica recente |
| Guiana | 1.606 km | Menos monitorada |
| Suriname | 593 km | Comércio informal |
| Guiana Francesa | 649 km | Fronteira com UE (França) |
| Uruguai | 1.069 km | Bem monitorada; MERCOSUL |
| Argentina | 1.261 km | MERCOSUL; Iguaçu |
| Paraguai | 1.365 km | Maior porto seco da AL |

**Total: ~16.800 km** de fronteira terrestre

### Faixa de Fronteira (Lei 6.634/79)
- Extensão de **150 km** da linha divisória para dentro do território nacional
- Considerada área indispensável à segurança nacional
- Restrições à propriedade de estrangeiros
- A PRF tem atuação prioritária nas rodovias federais dessa faixa

### Ameaças nas Fronteiras cobradas pela PRF
- Tráfico de drogas (cocaína da Bolívia, pela BR-364)
- Contrabando e descaminho (Paraguai, Foz do Iguaçu)
- Tráfico de armas e de pessoas
- Crimes transfronteiriços organizados

### A PRF nas Fronteiras
A PRF opera postos de fiscalização nas principais rodovias federais que cruzam a faixa de fronteira, em cooperação com a Polícia Federal e o Exército.

> 🎯 **Dica PRF**: A faixa de fronteira tem **150 km** — não confundir com faixa de rolamento! É uma questão clássica de Geopolítica em concursos da PRF.`
  },

  {
    id: '257f7f07ff342fbfacbe4d6ed0a1c45e', // Rodoviarismo no Brasil — 222 chars
    content: `## Matriz de Transportes e Rodoviarismo no Brasil

### Histórico da Opção Rodoviária
O Brasil optou pelo modal rodoviário como espinha dorsal do transporte nacional a partir da década de 1950, com o **Plano de Metas** de Juscelino Kubitschek (1956-1961).

**Fatores que consolidaram o rodoviarismo**:
- Indústria automobilística instalada (Ford, GM, Volkswagen)
- Construção de Brasília (novas rodovias radiais)
- Pressão das montadoras estrangeiras
- Distâncias continentais que favoreciam rodovias em relação ao trem

### Matriz Modal Atual (participação no transporte de cargas)
| Modal | Participação | Características |
|-------|-------------|----------------|
| **Rodoviário** | ~65% | Flexível, porta a porta, mas caro e poluente |
| **Ferroviário** | ~15% | Eficiente para granéis sólidos; subutilizado |
| **Aquaviário** | ~13% | Hidrovias; potencial enorme (rios navegáveis) |
| **Dutoviário** | ~6% | Petróleo e gás; eficiente, mas inflexível |
| **Aéreo** | ~1% | Alto valor agregado; urgência |

### Rodovias Federais (BRs) — Numeração
- **BRs ímpares longitudinais** (Norte-Sul): BR-101, BR-153, BR-163
- **BRs pares transversais** (Leste-Oeste): BR-116, BR-262, BR-040
- **BRs radiais** (partem de Brasília): BR-010, BR-020, BR-030…

### Concessões e Pedágios
- **ANTT** (Agência Nacional de Transportes Terrestres) regula as rodovias concedidas
- Rodovias concessionadas têm fiscalização compartilhada entre PRF e concessionária
- **DNIT** (Departamento Nacional de Infraestrutura de Transportes) administra as federais não concedidas

> 🎯 **Dica PRF**: A questão clássica cobra por que o Brasil tem tantas mortes em rodovias: excesso de dependência do modal rodoviário + malha antiga e mal conservada + comportamento do condutor.`
  },

  {
    id: '52c7eb861d20f44353712444815a0c6c', // Petróleo e Biocombustíveis — 195 chars
    content: `## Matriz Energética Brasileira e Transportes

### A Matriz Energética do Brasil
O Brasil tem uma das matrizes energéticas mais **limpas** do mundo entre as grandes economias:

| Fonte | Participação na Energia Elétrica |
|-------|----------------------------------|
| Hidrelétrica | ~65% |
| Eólica | ~12% |
| Biomassa | ~9% |
| Solar | ~4% |
| Gás natural e carvão | ~8% |
| Nuclear | ~2% |

### Petróleo e o Pré-Sal
- O Brasil possui enormes reservas no **Pré-Sal** (descobertas a partir de 2006)
- A exploração é feita principalmente pela **Petrobras** (empresa mista, controle estatal)
- O Brasil é um dos maiores exportadores de petróleo bruto da América Latina
- O diesel ainda é o combustível predominante no transporte de cargas rodoviário

### Biocombustíveis — Diferencial Brasileiro
| Biocombustível | Matéria-prima | Uso |
|----------------|--------------|-----|
| **Etanol** | Cana-de-açúcar | Veículos de passeio (flex) |
| **Biodiesel** | Soja, algodão, palma | Mistura obrigatória com diesel (B12+) |

**Programa Combustível do Futuro (2023)**: aumenta gradualmente o teor de biocombustível nas misturas, reduzindo emissões.

### Impacto nos Transportes
- Frota Flex no Brasil: +80% dos veículos novos — maior do mundo
- Diesel: fundamental para caminhões e ônibus intermunicipais
- GNV (Gás Natural Veicular): popular nos ônibus urbanos (RJ, SP)

### Crimes Relacionados a Combustíveis (PRF)
- **Adulteração de combustível**: crime ambiental e econômico
- **Roubo de carga**: caminhões-tanque com derivados de petróleo são alvo frequente
- A PRF fiscaliza o transporte de produtos perigosos (ADR) nas rodovias federais

> 🎯 **Dica PRF**: O Brasil é único no mundo por ter uma frota massiva de carros flex (etanol/gasolina). Questão cobrada: a mistura de biodiesel é **obrigatória** no diesel comercializado no Brasil.`
  },

  // ==================== DIREITO CONSTITUCIONAL ====================

  {
    id: '33fd990e1c25cb7e3c2f28fd05b1294f', // Sistemas de Controle de Constitucionalidade — 876 chars
    content: `## Controle de Constitucionalidade: Sistemas e Modalidades

### O que é Controle de Constitucionalidade?
É o mecanismo pelo qual se verifica a compatibilidade das normas infraconstitucionais com a Constituição. Normas incompatíveis com a CF são declaradas **inconstitucionais** e perdem eficácia.

### Sistemas de Controle
| Sistema | Origem | Quem controla |
|---------|--------|---------------|
| **Difuso** (americano) | EUA (1803 — Marbury v. Madison) | Qualquer juiz ou tribunal |
| **Concentrado** (europeu/austríaco) | Kelsen (1920) | Apenas o Tribunal Constitucional |

O Brasil adota um **sistema misto** (difuso + concentrado).

### Controle Difuso (Concreto)
- Qualquer juiz pode declarar lei inconstitucional em um caso concreto
- Efeitos **inter partes** (só para as partes do processo) e **ex tunc**
- Pode ocorrer como questão incidental (prejudicial) ao julgamento do mérito
- No STF: RE (Recurso Extraordinário) com repercussão geral pode ter efeito erga omnes

### Controle Concentrado (Abstrato) — STF
| Ação | Legitimados (art. 103) | Objeto |
|------|----------------------|--------|
| **ADI** (Ação Direta de Inconstitucionalidade) | 9 legitimados (Presidente, PGR, Partidos, etc.) | Lei/ato normativo federal ou estadual vs. CF |
| **ADC** (Ação Declaratória de Constitucionalidade) | Mesmos 9 | Declara constitucional lei federal |
| **ADPF** (Arguição de Descumprimento de Preceito Fundamental) | Mesmos 9 | Quando não cabe ADI/ADC (leis municipais, pré-constitucionais) |
| **ADO** (Ação Direta por Omissão) | Mesmos 9 | Omissão inconstitucional do legislador |

### Efeitos do Controle Concentrado
- **Erga omnes**: vale para todos
- **Ex tunc** (regra): retroage à data da lei inconstitucional
- **Vinculante**: vincula os demais órgãos do Judiciário e a Adm. Pública
- **Modulação de efeitos** (exceção): STF pode dar efeito ex nunc por razões de segurança jurídica

> 🎯 **Dica PRF**: A ADPF cabe para leis **municipais** e leis **pré-constitucionais** (anteriores a 1988), situations em que a ADI não é cabível.`
  },

  {
    id: 'c13b016bbd81ea84f150239b6586a837', // Poder Legislativo — 621 chars
    content: `## Poder Legislativo Federal: Estrutura e Funções

### Composição (Sistema Bicameral)
O Poder Legislativo Federal é composto pelo **Congresso Nacional**, que se divide em:

| Casa | Membros | Mandato | Representação |
|------|---------|---------|--------------|
| **Câmara dos Deputados** | 513 deputados federais | 4 anos | Proporcional à população |
| **Senado Federal** | 81 senadores (3 por estado + DF) | 8 anos | Igualitária (estados) |

### Funções Típicas do Legislativo
1. **Legislar**: criar, modificar e revogar leis
2. **Fiscalizar**: controlar o Executivo (CPI, TCU)
3. **Julgamento político**: impeachment do Presidente (Câmara acusa; Senado julga)

### Funções do Senado (exclusivas)
- Aprovar tratados internacionais
- Aprovar nomeações do Presidente (ministros do STF, PGR, etc.)
- Julgar o Presidente, VP e Ministros de Estado por crimes de responsabilidade
- Fixar limites globais da dívida pública

### Funções da Câmara (exclusivas)
- Iniciar leis sobre matéria orçamentária
- Autorizar abertura de processo de impeachment

### Comissões Parlamentares de Inquérito (CPIs)
- Criadas com 1/3 dos membros da Casa (ou bicamerais)
- Investigam fato determinado e prazo certo
- Têm poderes investigatórios **próprios das autoridades judiciais** (exceto: decretação de prisão preventiva, busca e apreensão domiciliar, interceptação telefônica)

> 🎯 **Dica PRF**: No impeachment, a Câmara AUTORIZA (2/3) e o Senado JULGA (2/3). O Presidente fica suspenso por 180 dias; se condenado, perde o cargo + inabilitado por 8 anos.`
  },

  {
    id: 'b3c0fc4c03cbb9555f5d685425b2cbaa', // Processo Legislativo — 468 chars
    content: `## Processo Legislativo: Como a Lei é Criada

### Espécies Normativas (art. 59 CF/88)
1. Emendas Constitucionais (EC)
2. Leis Complementares (LC)
3. Leis Ordinárias (LO)
4. Leis Delegadas
5. Medidas Provisórias (MP)
6. Decretos Legislativos
7. Resoluções

### Emenda Constitucional (requisitos rigorosos)
- **Proposta por**: Presidente, 1/3 da Câmara ou do Senado, ou 50% das Assembleias Legislativas
- **Aprovação**: 3/5 dos membros de **cada Casa**, em **2 turnos**
- **Não pode ser proposta na vigência** de estado de sítio, de defesa ou intervenção federal
- **Cláusulas pétreas** (art. 60, §4°): não podem ser abolidas nem por EC

### Lei Ordinária (processo padrão)
1. Iniciativa → 2. Votação na Casa iniciadora → 3. Casa revisora → 4. Sanção/Veto presidencial → 5. Promulgação → 6. Publicação

**Maioria simples** (metade + 1 dos presentes, desde que haja quórum de maioria absoluta)

### Lei Complementar
- **Maioria absoluta** (metade + 1 dos membros) em ambas as Casas
- Casos previstos expressamente na CF (ex: LC 101/00 — Lei de Responsabilidade Fiscal)

### Medida Provisória (art. 62)
- Editada pelo **Presidente** em caso de **urgência e relevância**
- Vigência: **60 dias** (prorrogável por mais 60)
- Votação obrigatória pelo Congresso dentro do prazo
- **Vedada** para: direito penal, eleitoral, organização do Judiciário, MP, etc.

### Veto Presidencial
- **Veto total ou parcial** → Congresso pode **derrubar por maioria absoluta** em sessão conjunta

> 🎯 **Dica PRF**: A distinção entre LC (maioria absoluta) e LO (maioria simples) é clássica. E EC exige 3/5 em 2 turnos em CADA Casa — muito mais rígido que qualquer lei ordinária.`
  },

  {
    id: '5eda9c00b875b6a4c8774a552779933a', // Controle da Administração — 524 chars
    content: `## Controle da Administração Pública

### Tipos de Controle
| Tipo | Quem exerce | Quando |
|------|------------|--------|
| **Interno** | Própria Adm. (autotutela) | Permanente |
| **Externo** | Legislativo + TCU; MP; Judiciário | Provocado/periódico |
| **Social** | Cidadão, ONGs, imprensa | Qualquer momento |

### Controle Interno — Autotutela
A Administração pode:
- **Anular** seus atos ilegais (de ofício ou por provocação) — efeitos ex tunc
- **Revogar** seus atos inconvenientes ou inoportunos — efeitos ex nunc (só para os não consolidados)

Prazo para anular atos com efeitos favoráveis aos administrados: **5 anos** (Lei 9.784/99), salvo má-fé.

### Controle pelo Tribunal de Contas da União (TCU)
- Órgão auxiliar do Congresso Nacional
- **Não faz parte do Judiciário** — é órgão independente
- Funções: fiscalizar, aplicar multas, emitir pareceres sobre contas do Executivo
- Suas decisões têm eficácia de **título executivo** (multas)
- Composto por **9 ministros** (indicados pelo Congresso e Presidente)

### Controle pelo Ministério Público
- Fiscaliza a legalidade dos atos administrativos
- Pode propor Ação Civil Pública por improbidade administrativa
- Tem independência funcional — não subordinado a nenhum Poder

### Controle Judicial
- Brasil adota o **sistema de jurisdição única** (qualquer ato pode ser levado ao Judiciário)
- O Judiciário analisa **legalidade**, não **mérito** (conveniência e oportunidade) dos atos administrativos
- Prazo prescricional da ação popular: **5 anos**

> 🎯 **Dica PRF**: O TCU **não** pertence ao Poder Judiciário. A Cebraspe adora afirmar que é um órgão judicial — ERRADO! É órgão de controle externo, auxiliar do Legislativo.`
  },

  {
    id: '5e2b9f050b3eda355fe93cb7ed549b27', // Lei 14.133/21 — 605 chars
    content: `## Nova Lei de Licitações (Lei 14.133/2021)

### Contexto
A Lei 14.133/21 substitui a antiga Lei 8.666/93, a Lei do Pregão (10.520/02) e o RDC (12.462/11). Entrou em vigor com período de transição; a partir de 01/04/2023, passou a ser de aplicação exclusiva.

### Modalidades de Licitação (art. 28)
| Modalidade | Quando usar |
|------------|------------|
| **Pregão** | Bens e serviços comuns (qualquer valor) |
| **Concorrência** | Bens e serviços especiais; obras acima de R$ 1,5M (serviços) e R$ 6M (obras) |
| **Concurso** | Trabalho técnico, científico ou artístico |
| **Leilão** | Alienação de bens; concessões |
| **Diálogo Competitivo** | Contratações inovadoras e complexas (novo!) |

⚠️ **Suprimidas**: Tomada de Preços e Convite (não existem mais na nova lei)

### Critérios de Julgamento (art. 33)
- Menor preço
- Maior desconto
- Melhor técnica ou conteúdo artístico
- Técnica e preço
- Maior lance (leilão)
- Maior retorno econômico (novo)

### Contratação Direta (sem licitação)
| Situação | Tipo |
|----------|------|
| Emergência/calamidade | Dispensa |
| Fornecedor exclusivo | Inexigibilidade |
| Baixo valor (até R$57.900 para bens/serviços; R$176.000 para obras) | Dispensa |

### Principais Novidades
- **Portal Nacional de Contratações Públicas (PNCP)**: publicação centralizada
- **Matriz de Risco** obrigatória em contratos de grande vulto
- **Seguro-garantia** ampliado
- **Agente de Contratação**: substitui comissão em muitos casos

> 🎯 **Dica PRF**: O **Diálogo Competitivo** é a principal novidade e costuma cair em provas. A Cebraspe cobra também que Tomada de Preços e Convite foram **extintos** pela Lei 14.133/21.`
  },
];

async function main() {
  try {
    await client.connect();
    console.log(`Updating ${upgrades.length} subtopics (Batch 5 — Física + Geopolítica + Constitucional + Adm)...`);
    for (const u of upgrades) {
      await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [u.content, u.id]);
      console.log(`Updated: ${u.id}`);
    }
    console.log('Batch 5 done!');
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
main();
