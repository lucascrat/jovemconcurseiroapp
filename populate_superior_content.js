const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const contentMap = {
  "33fd990e1c25cb7e3c2f28fd05b1294f": `# Sistemas de Controle de Constitucionalidade
  
## A Supremacia da Constituição
O controle de constitucionalidade garante que nenhuma norma infrassistência a Lei Maior.

### 1. Momentos do Controle
- **Preventivo**: Ocorre durante o processo legislativo (CCJ, Veto do Presidente).
- **Repressivo**: Ocorre após a lei entrar em vigor (Geralmente pelo Judiciário).

### 2. Modelos de Controle Repressivo
- **Difuso (Aberto)**: Realizado por qualquer juiz ou tribunal num caso concreto. Efeitos inter partes (regra).
- **Concentrado (Reservado)**: Realizado pelo STF em abstrato. Efeitos Erga Omnes e Vinculantes.

### 3. Ações do Controle Concentrado
- **ADI**: Ação Direta de Inconstitucionalidade.
- **ADC**: Ação Declaratória de Constitucionalidade.
- **ADO**: Ação Direta de Inconstitucionalidade por Omissão.
- **ADPF**: Arguição de Descumprimento de Preceito Fundamental.`,

  "5a1b763e6fab4a2f1bfebe252dd98b3a": `# Políticas Públicas Sociais no Ceará
  
## Desenvolvimento Humano e Social
Foco em como o Estado busca reduzir desigualdades.

### 1. Educação
O Ceará é referência nacional no ensino fundamental (Sobral como modelo). Programas de alfabetização na idade certa (PAIC).

### 2. Combate à Fome
Programas de transferência de renda estaduais e cozinhas comunitárias.

### 3. Saúde Comunitária
O pioneirismo dos Agentes Comunitários de Saúde (ACS) nasceu no Ceará e foi exportado para o Brasil.`,

  "72d6fa6b00f31c5a85b782b7a164bc62": `# Jurisprudência: Lei 8.112/90
  
## Entendimento dos Tribunais Superiores (STF/STJ)
Para cargos de nível superior, não basta a letra da lei, precisa do entendimento dos tribunais.

### Pontos Polêmicos:
1.  **Demissão sem PAD**: É nula. O contraditório e ampla defesa são obrigatórios.
2.  **Acumulação de Cargos**: A jornada de 60 horas semanais não é um limite absoluto, desde que comprovada a compatibilidade de horários (STJ).
3.  **Investigação Social**: Não se pode excluir candidato de concurso apenas por inquérito policial ou ação penal sem trânsito em julgado.`,

  "866546663421738fbf702d925fa95d1e": `# Jurisprudência: Lei de Improbidade
  
## A Nova LIA e os Tribunais
Principais decisões após a reforma de 2021.

### O Tema do Dolo Específico:
O STF confirmou que a nova lei mais benéfica (que exige dolo) retroage para beneficiar quem cometeu improbidade culposa em processos ainda não transitados em julgado.

### Prescrição:
O prazo agora é de 8 anos a contar do fato. Existe a prescrição intercorrente se o processo ficar parado por muito tempo após o ajuizamento.`,

  "c13b016bbd81ea84f150239b6586a837": `# Poder Legislativo: Estrutura e Atribuições
  
## O Congresso Nacional
O sistema brasileiro é o bicameralismo federativo.

### 1. Câmara dos Deputados
Representantes do **Povo**. Eleitos pelo sistema proporcional. Mandato de 4 anos.

### 2. Senado Federal
Representantes dos **Estados e DF**. Eleitos pelo sistema majoritário. Mandato de 8 anos (renovação de 1/3 ou 2/3 a cada 4 anos).

### 3. Atribuições Exclusivas
- Congresso (Art. 49): Fiscalizar o Executivo, sustar atos normativos que exorbitem o poder regulamentar.
- Senado (Art. 52): Processar e julgar o Presidente nos crimes de responsabilidade (Impeachment).`,

  "e65a4be35fd6e29a66732a11455ae835": `# Redes de Computadores: Nível Avançado
  
## Arquitetura e Protocolos
Conceitos profundos para analistas.

### 1. Modelo OSI (7 Camadas) vs TCP/IP (4 ou 5 Camadas)
- Camada 7: Aplicação (HTTP, FTP, SMTP).
- Camada 4: Transporte (TCP - orientado a conexão / UDP - rápido e não-orientado).
- Camada 3: Rede (IP, Roteamento).

### 2. Dispositivos de Rede
- **Switch**: Trabalha na camada 2 (Enlace), filtrando por endereço MAC.
- **Roteador**: Trabalha na camada 3 (Rede), enviando pacotes entre redes diferentes.`,

  "2a9f0350c80a9a53d9dfa1b35daeff26": `# Probabilidade Complexa
  
## Eventos Independentes e Condicionais
Avançando além do básico.

### 1. Teorema de Bayes (Probabilidade Condicional)
Cálculo da probabilidade de um evento A ocorrer dado que B já ocorreu. \`P(A|B) = P(A e B) / P(B)\`.

### 2. Distribuição Binomial
Usada quando temos repetidos testes independentes com apenas dois resultados possíveis (Sucesso/Fracasso).`,

  "3a8286b494b0fb8a9a2da354090faf8c": `# Responsabilidade Civil do Estado
  
## A Teoria da Reparação de Danos
O Estado responde pelos danos que seus agentes causarem a terceiros.

### 1. Responsabilidade Objetiva (Teoria do Risco Administrativo)
Não precisa provar dolo ou culpa do agente, basta provar:
1. Ação administrativa.
2. Dano.
3. Nexo causal entre a ação e o dano.

### 2. Excludentes de Responsabilidade
- Culpa exclusiva da vítima.
- Caso Fortuito ou Força Maior.

### 3. Ação de Regresso
O Estado paga a vítima e depois cobra do agente, SE houver dolo ou culpa dele.`,

  "503e33f2397875f96f245eb1e8a0cf81": `# Tipologia e Gênero Textual
  
## Análise de Discurso
Essencial para provas de alta complexidade (FGV/Cebraspe).

### Tipos Textuais:
- **Dissertativo-Argumentativo**: Defende uma tese com argumentos.
- **Narrativo**: Sequência de eventos no tempo.
- **Injuntivo**: Instrução ou comando (Manual de instrução).

### Gêneros:
Artigo de opinião, editorial, crônica, relatório técnico, parecer jurídico.`,

  "5e2b9f050b3eda355fe93cb7ed549b27": `# Lei 14.133/21 Completa: Regime de Contratação
  
## A Nova Bíblia das Licitações
Tópico densíssimo para nível superior.

### 1. Dos Portais
- Criação do **PNCP** (Portal Nacional de Contratações Públicas) como vitrine obrigatória.

### 2. Critérios de Julgamento
Até a lei anterior eram "Tipos". Agora são:
- Menor preço.
- Maior desconto.
- Melhor técnica ou conteúdo artístico.
- Técnica e preço.
- Maior lance (Leilão).
- Maior retorno econômico (Inovação).

### 3. Contratos Administrativos
- Vigência de até 10 anos para serviços contínuos. Prerrogativas de alteração unilateral pela administração.`,

  "5eda9c00b875b6a4c8774a552779933a": `# Controle da Administração Pública
  
## Freios e Contrapesos
Mecanismos de fiscalização da atividade estatal.

### 1. Controle Interno
Realizado pela própria estrutura da administração (ex: Controladoria Geral).

### 2. Controle Externo
Realizado pelo Poder Legislativo com auxílio do **Tribunal de Contas (TC)**.
- TC não é do Judiciário! É um órgão autônomo.

### 3. Controle Judicial
Provocado. O Judiciário só analisa **Legalidade**, nunca o mérito administrativo (oportunidade e conveniência) de atos discricionários.`,

  "75013355ec2324f679f96ab3b4f09b87": `# Orações Subordinadas e Coordenadas
  
## Sintaxe do Período Composto
Domínio das conjunções e sentidos lógicos.

### 1. Orações Subordinadas Adjetivas
Introduzidas por pronome relativo.
- **Restritivas**: Sem vírgula. Limitam o sentido.
- **Explicativas**: Com vírgula. Generalizam o sentido.

### 2. Orações Subordinadas Adverbiais
Função de advérbio (Causa, Condição, Concessão, Finalidade, Tempo).
- Ex: "Embora fizesse frio (Concessão), fomos à praia."`,

  "7bb1eb80eb005945540a7a924326618a": `# Dinâmicas Rurais e Urbanas (Ceará)
  
## Transformações Espaciais
O Ceará deixou de ser puramente agrário.

### 1. Urbanização
Crescimento das cidades médias (Juazeiro do Norte, Sobral, Quixadá) desafogando a capital.

### 2. Êxodo Rural e Modernização
A agroindústria no Jaguaribe fixa o homem no campo com tecnologia, mas a mecanização expulsa o trabalhador sem qualificação.`,

  "856963e5b6c29d0e23670561b062f138": `# Reescritura de Frases
  
## O Desafio da Semântica e Gramática
Transformar a frase sem mudar o sentido.

### O que observar:
1.  Voz ativa vs Voz passiva.
2.  Substituição de conjunções por sinônimos.
3.  Deslocamento de termos (Adjuntos adverbiais).
4.  Pontuação (Mudança de lugar da vírgula pode alterar o foco).`,

  "a846a71f283a9b2cc832198da14a7424": `# Lógica de Argumentação
  
## Silogismos e Validade
Determinando se um argumento é logicamente válido.

### Premissas e Conclusão:
Um argumento é válido se, supondo as premissas verdadeiras, a conclusão for obrigatoriamente verdadeira.
- **Cuidado**: Verdade (fato) é diferente de Validade (lógica).`,

  "b3c0fc4c03cbb9555f5d685425b2cbaa": `# Processo Legislativo Constitucional
  
## A Elaboração das Normas
Trâmite das leis na CF.

### 1. Iniciativa Legislativa
Quem pode propor leis.
- Privativa: Só o Presidente ou só o Tribunais, etc.
- Popular: Exige 1% do eleitorado nacional.

### 2. Espécies Normativas (Art. 59)
- Emendas Constitucionais (Rígida, 3/5 dos votos, 2 turnos).
- Leis Complementares (Maioria Absoluta).
- Leis Ordinárias (Maioria Simples).
- Medidas Provisórias (Urguência e Relevância).`,

  "dd09f6d199c650d08b954da44b43a3a5": `# Banco de Dados e Big Data
  
## Gestão de Grandes Volumes de Dados
Conceitos modernos para gestão pública.

### 1. Bancos Relacionais (SQL)
Tabelas, chaves, relacionamentos. Integridade referencial.

### 2. Os 5 Vs do Big Data
- Volume, Velocidade, Variedade, Veracidade e Valor.

### 3. Data Mining
Processo de descobrir padrões em grandes conjuntos de dados.`,

  "ff729c3b4ea287d44bebb8020fd59e40": `# Combinatória e Permutação
  
## Contagem e Agrupamentos
Selecionando elementos de um conjunto.

### 1. Arranjo vs Combinação
- **Arranjo**: A ORDEM importa (ex: pódio, senha).
- **Combinação**: A ORDEM NÃO importa (ex: comissão, salada de frutas).

### 2. Permutação
Quando usamos todos os elementos do grupo apenas trocando de lugar.
- Ex: Anagramas.`
};

async function updateContent() {
  try {
    await client.connect();
    console.log("🚀 Iniciando injeção de Apostilas Nível Superior...");
    
    for (const [id, content] of Object.entries(contentMap)) {
      await client.query(
        'UPDATE "SubTopic" SET content = $1 WHERE id = $2',
        [content, id]
      );
      console.log(`✅ Atualizado: ${id}`);
    }
    
    console.log("✨ Fase Nível Superior Concluída com Sucesso!");
  } catch (err) {
    console.error("❌ Erro na atualização:", err);
  } finally {
    await client.end();
  }
}

updateContent();
