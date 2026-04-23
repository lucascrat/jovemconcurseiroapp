const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const upgrades = [
  {
    id: 'dd09f6d199c650d08b954da44b43a3a5', // Banco de Dados e Big Data
    content: `## 📚 Banco de Dados e Big Data

No mundo moderno, os dados são considerados o "novo petróleo". O armazenamento e processamento eficiente de volumes colossais de dados é o que diferencia empresas e governos de ponta.

### 🗄️ Bancos de Dados Tradicionais (Relacionais - RDBMS)
- Organizam os dados em **Tabelas** (linhas e colunas), com relacionamentos rígidos entre elas.
- **Linguagem**: Utilizam fortemente a linguagem **SQL** (Structured Query Language).
- **Propriedades ACID**:
  - **A**tomicidade: A transação é "tudo ou nada" (se der erro no meio, desfaz tudo - *rollback*).
  - **C**onsistência: O banco sai de um estado válido para outro estado válido (regras não são quebradas).
  - **I**solamento: Uma transação em andamento não interfere na outra.
  - **D**urabilidade: Após confirmada (*commit*), a mudança não é perdida, mesmo se acabar a energia.
- *Exemplos*: Oracle, MySQL, PostgreSQL, SQL Server.

### 🐘 Big Data e NoSQL
Quando o volume de dados explode e os dados deixam de ser estruturados (ex: posts de redes sociais, vídeos, áudios, logs de servidores), o banco relacional perde eficiência. Surge o **Big Data** e os bancos **NoSQL** (Not Only SQL).

Os **5 V's do Big Data**:
1. **Volume**: Quantidade massiva de dados (Terabytes, Petabytes, Exabytes).
2. **Velocidade**: A rapidez com que os dados são gerados e precisam ser processados (ex: transações de PIX em tempo real).
3. **Variedade**: Dados de múltiplas fontes e formatos (estruturados, semiestruturados e não-estruturados).
4. **Veracidade**: A qualidade, limpeza e confiabilidade dos dados (evitar *Fake News* e dados corrompidos).
5. **Valor**: O resultado financeiro ou estratégico que aqueles dados geram para o negócio.

**Características do NoSQL**:
- Alta escalabilidade **horizontal** (adicionar mais servidores baratos, em vez de um servidor super potente).
- Tipos de bancos NoSQL: Chave-Valor (Redis), Orientado a Documentos (MongoDB), Orientado a Grafos (Neo4j), Orientado a Colunas (Cassandra).

---

## 🎯 Foco nas Bancas
- **Cebraspe (CESPE)**: Ama cobrar as propriedades ACID dos bancos relacionais e os 5 V's do Big Data. Eles costumam trocar os significados (ex: dizer que "Veracidade" refere-se à rapidez do dado - errado).
- **FGV e FCC**: Cobram muito a diferença de escalabilidade. Bancos relacionais escalam melhor **verticalmente** (melhorando a máquina/hardware), enquanto o Big Data (Hadoop/NoSQL) escala nativamente **horizontalmente** (adicionando novas máquinas à rede - *clusters*).

---

## 💡 Macetes e Mnemônicos
**Propriedades de Transações SQL:**
Lembre do **A.C.I.D.**:
- **A**tomicidade (Tudo ou Nada)
- **C**onsistência (Sempre válido)
- **I**solamento (Não se misturam)
- **D**urabilidade (Gravado em pedra)

---

## ⚠️ Pegadinhas Comuns
- Afirmar que Bancos NoSQL **nunca** usam a linguagem SQL ou não suportam buscas. **Falso.** NoSQL significa "Not *Only* SQL" (Não Apenas SQL). Muitos sistemas de Big Data hoje possuem interfaces SQL-like para facilitar as consultas.`
  },
  {
    id: '85f02b8820e74229089bf38a8471002d', // Prazos do Inquérito
    content: `## 📚 Processo Penal: Prazos do Inquérito Policial (IP)

O Inquérito Policial (IP) é um procedimento administrativo, de natureza inquisitiva, presidido pela Autoridade Policial (Delegado de Polícia). O objetivo é reunir provas de materialidade e indícios de autoria para que o Ministério Público ofereça a denúncia. O IP **não pode durar para sempre**.

### ⏱️ Regra Geral (Justiça Estadual - Art. 10 do CPP)
- Indiciado **PRESO**: O IP deve terminar em **10 dias**. *Atenção: Esse prazo conta a partir do dia em que se executar a ordem de prisão (prisão em flagrante ou preventiva).*
- Indiciado **SOLTO**: O IP deve terminar em **30 dias**.
*(Na prática, se o réu está solto, esse prazo pode ser prorrogado mediante pedido ao juiz, quantas vezes forem necessárias, desde que o crime não prescreva).*

### ⏱️ Justiça Federal (Polícia Federal - Lei 5.010/66)
Para crimes de competência da Justiça Federal (ex: contrabando internacional, crimes contra a União, PRF flagrantes federais):
- Indiciado **PRESO**: **15 dias** (Prorrogável por mais 15 dias, mediante pedido ao juiz).
- Indiciado **SOLTO**: **30 dias** (Prorrogável).

### 🌿 Lei de Drogas (Lei 11.343/06)
A investigação de tráfico de drogas é complexa e exige mais tempo:
- Indiciado **PRESO**: **30 dias** (Pode ser duplicado para 60 dias).
- Indiciado **SOLTO**: **90 dias** (Pode ser duplicado para 180 dias).

### ⚔️ Crimes Hediondos e Justiça Militar
- **Crimes Militares (CPPM)**: Preso: 20 dias. Solto: 40 dias (prorrogável por mais 20).
- **Prisão Temporária em Crime Comum**: 5 dias + 5 dias de prorrogação.
- **Prisão Temporária em Crime Hediondo**: 30 dias + 30 dias de prorrogação.

---

## 🎯 Foco nas Bancas
- **Cebraspe (CESPE)**: Gosta de testar o limite da prorrogação. A prorrogação com réu **preso** na regra geral do CPP (Justiça Estadual) NÃO ESTÁ PREVISTA legalmente (deve ser em 10 dias e ponto final, sob pena de relaxamento da prisão por excesso de prazo). Já na Justiça **Federal**, a prorrogação com réu preso (15 + 15) é expressamente permitida!
- A Lei de Drogas (30 preso / 90 solto, ambos dobráveis) despenca em provas policiais (PC, PRF, PF).

---

## 💡 Macetes e Mnemônicos
**Tabela de Prazos do IP (Preso / Solto):**
- **Regra Geral (CPP)**: 10 / 30
- **Polícia Federal**: 15 / 30 (Dica: PF tem 5 letras a mais para o preso)
- **Drogas**: 30 / 90 (Dica: Multiplique tudo por 3)

---

## ⚠️ Pegadinhas Comuns
- Afirmar que o Ministério Público pode arquivar o IP diretamente e encerrar os prazos. **Falso.** O MP **promove/requer** o arquivamento. Com o pacote anticrime (Art. 28 do CPP, que esteve suspenso pelo STF mas agora tem novas regras de modulação), a sistemática de homologação do arquivamento mudou, sendo feita pela instância revisional do próprio MP, mas as bancas costumam evitar essa confusão se a lei do estado não estiver totalmente alinhada.`
  },
  {
    id: '0c827763f799044388447424f703d517', // Ação Civil Pública
    content: `## 📚 Ação Civil Pública (ACP) - Lei 7.347/85

A Ação Civil Pública (ACP) é o instrumento processual, previsto na Constituição e em Lei própria, adequado para **reprimir ou prevenir danos** causados a **direitos difusos, coletivos e individuais homogêneos**.

### 🎯 O que a ACP Protege?
Protege bens de valor inestimável e coletivo:
- Meio Ambiente (ex: empresa que polui um rio).
- Consumidor (ex: propaganda enganosa de uma operadora de telefonia).
- Patrimônio público e social, histórico, turístico, estético, paisagístico.
- Ordem urbanística.
- Honra e dignidade de grupos raciais, étnicos ou religiosos.

### 🏛️ Legitimidade: Quem pode propor a ACP? (Rol Restrito)
Não é qualquer pessoa (cidadão) que pode entrar com uma ACP (o cidadão comum entra com *Ação Popular*). Podem propor a ACP:
1. **O Ministério Público** (é o autor na grande maioria das vezes).
2. **A Defensoria Pública**.
3. A **União, Estados, Municípios e DF** (os entes federativos).
4. **Autarquias, empresas públicas, fundações e sociedades de economia mista**.
5. **Associações** (Neste caso, há dois requisitos rigorosos: a associação deve estar constituída há pelo menos **1 ano**, e o tema deve estar entre as **finalidades institucionais** dela). *Atenção: O juiz pode dispensar o requisito de 1 ano em caso de dano gravíssimo.*

### 🔍 Inquérito Civil
O Ministério Público é o **único** ente autorizado pela Constituição a instaurar o **Inquérito Civil**, que é uma investigação preparatória (administrativa e inquisitiva) para reunir provas antes de ajuizar a ACP. (Outros órgãos podem fazer investigações, mas o nome "Inquérito Civil" é exclusivo do MP).

---

## 🎯 Foco nas Bancas
- **Pegadinha Clássica**: A banca lista várias pessoas e pergunta quem NÃO pode propor a ACP. O "Cidadão brasileiro, eleitor" ou "Pessoa Física" estará na lista. **Cidadão não pode propor ACP, cidadão propõe Ação Popular.**
- **Requisito das Associações**: O "prazo de 1 ano" e a "pertinência temática" das associações caem em 90% das questões sobre legitimidade da ACP (FCC e FGV amam isso).

---

## 💡 Macetes e Mnemônicos
**A Diferença Vital:**
- Ação **Civil Pública**: Autor é "Pessoa Grande" (MP, Defensoria, União, Associação). Defende meio ambiente, consumidor.
- Ação **Popular**: Autor é "Cidadão" (pessoa física com título de eleitor). Defende o patrimônio contra atos lesivos.

---

## ⚠️ Pegadinhas Comuns
- Afirmar que a ACP serve para defesa de direitos individuais puros (ex: o meu vizinho bateu no meu carro). **Falso.** A ACP protege direitos *transindividuais* (difusos, coletivos ou individuais homogêneos).`
  },
  {
    id: '866546663421738fbf702d925fa95d1e', // Jurisprudência: Lei de Improbidade
    content: `## 📚 Jurisprudência e Mudanças na Lei de Improbidade Administrativa (LIA - Lei 8.429/92)

A Lei de Improbidade Administrativa sofreu a sua maior reforma com a **Lei 14.230/2021**, alterando drasticamente a forma como os agentes públicos são punidos, gerando forte repercussão na jurisprudência do STF.

### 🛑 O Fim da Improbidade Culposa
Antes da reforma de 2021, era possível punir um servidor por improbidade (na modalidade "lesão ao erário") se ele agisse com *culpa* (negligência, imprudência ou imperícia).
**NOVA REGRA ABSOLUTA**: Agora, para que exista qualquer ato de improbidade (seja enriquecimento ilícito, dano ao erário ou ofensa aos princípios), **exige-se o DOLO ESPECÍFICO**.
- **Dolo Específico**: Vontade livre e consciente de alcançar o resultado ilícito. Não basta a mera voluntariedade da conduta ou erro grosseiro.

### 🏛️ Jurisprudência do STF (Tema 1199 - Retroatividade da Lei)
Essa é a questão jurisprudencial mais cobrada atualmente em concursos:
- **A nova lei mais benéfica (que exige dolo) retroage para salvar quem foi condenado por culpa no passado?**
  - **Decisão do STF**: A nova lei **NÃO RETROAGE** para os processos que já tiveram condenação definitiva (*trânsito em julgado*).
  - Porém, para os processos que **ainda estão em andamento** (sem trânsito em julgado) e a acusação era apenas de culpa, o processo deve ser extinto, pois não há mais o crime/ato ilícito culposo.

### ⚠️ Fim da Condenação por "Ofensa aos Princípios" genérica
Antes, o rol de ofensas aos princípios da administração (Art. 11) era *exemplificativo* (numerus apertus).
**NOVA REGRA**: O rol do Art. 11 tornou-se **TAXATIVO** (numerus clausus). Ou seja, o agente só comete improbidade por ofensa aos princípios se a conduta dele estiver **exatamente escrita** nos incisos da lei. (Ex: fraude em concurso público, nepotismo).

### ⚖️ O Novo Regime de Prescrição
- **Regra Única**: A ação para aplicação das sanções prescreve em **8 anos**, contados da ocorrência do fato (ou do dia que cessou, se for crime continuado).
- *Dica de Jurisprudência (STF Tema 897)*: Cuidado! A Ação de Improbidade prescreve em 8 anos, **MAS** a ação de **Ressarcimento ao Erário** (fazer o corrupto devolver o dinheiro que roubou dolosamente) é **IMPRESCRITÍVEL**.

---

## 🎯 Foco nas Bancas
- **Cebraspe, FGV e FCC**: Cobram quase exclusivamente as alterações da Lei 14.230/21 e a decisão do STF (Tema 1199). Memorize: **Não existe mais improbidade culposa em nenhuma hipótese.**
- As bancas tentam te enganar dizendo que a lei retroage para anular condenações que já transitaram em julgado. **Falso, o STF proibiu a retroatividade para o trânsito em julgado.**

---

## 💡 Macetes e Mnemônicos
**O Trio da Improbidade:**
- Art. 9: Enriquecimento Ilícito (Pior pena)
- Art. 10: Lesão ao Erário (Pena média)
- Art. 11: Ofensa aos Princípios (Pena mais branda, Rol Taxativo)
*(Lembrete: Todos exigem DOLO).*

---

## ⚠️ Pegadinhas Comuns
- Afirmar que a Improbidade Administrativa é um crime (Direito Penal). **Falso.** É um ilícito de natureza **Civil-Administrativa** (embora a mesma conduta possa ser também tipificada como crime no Código Penal, como corrupção ou peculato).`
  },
  {
    id: '6669d089ea752abe3256e62489e6f9e8', // Poder Executivo e Judiciário
    content: `## 📚 Direito Constitucional: Poder Executivo e Poder Judiciário

A República Federativa do Brasil baseia-se no princípio da **Separação dos Poderes** (Legislativo, Executivo e Judiciário), que são independentes e harmônicos entre si, controlando-se mutuamente (sistema de "Freios e Contrapesos" ou *Checks and Balances*).

### 👔 O Poder Executivo
Sua função atípica principal é **Administrar**, executando as leis e as políticas públicas.
No Brasil, vigora o sistema **Presidencialista**. O Presidente da República exerce dupla função:
- **Chefe de Estado**: Representa o Brasil nas relações internacionais (ex: assinar tratados, declarar guerra, receber diplomatas).
- **Chefe de Governo**: Administra as questões internas, política econômica, nomeação de ministros.

**Responsabilidade do Presidente (Art. 85 e 86 da CF)**:
- **Crime de Responsabilidade (Impeachment)**: O Presidente é julgado pelo **Senado Federal** (o STF apenas preside a sessão). Ex: atentar contra o livre exercício de outro poder, ou contra a lei orçamentária.
- **Crime Comum**: O Presidente é julgado pelo **Supremo Tribunal Federal (STF)**.
- *Condição de procedibilidade*: Em ambos os casos, a denúncia só prossegue se a **Câmara dos Deputados** autorizar por **2/3** dos seus membros.

### ⚖️ O Poder Judiciário
Sua função típica é **Julgar** (função jurisdicional), aplicando a lei aos casos concretos e resolvendo conflitos.

**Órgãos de Cúpula**:
- **STF (Supremo Tribunal Federal)**: É o guardião da Constituição. Formado por **11 Ministros** (brasileiros natos, +35 e -75 anos, notável saber jurídico e reputação ilibada, indicados pelo Presidente e aprovados pelo Senado).
- **STJ (Superior Tribunal de Justiça)**: Guardião da Lei Federal. Formado por no mínimo **33 Ministros** (1/3 de juízes federais, 1/3 de desembargadores, 1/3 do quinto constitucional - advogados e MP).
- **CNJ (Conselho Nacional de Justiça)**: Formado por **15 membros**. Faz o controle administrativo e disciplinar dos juízes. *Atenção:* O CNJ pertence ao Poder Judiciário, mas **NÃO TEM função jurisdicional** (não julga causas processuais, apenas processos administrativos contra juízes).

**Garantias da Magistratura (Art. 95)**:
- **Vitaliciedade**: Após 2 anos no cargo (se por concurso), só perde o cargo por sentença judicial transitada em julgado.
- **Inamovibilidade**: O juiz não pode ser transferido de comarca contra sua vontade (salvo por interesse público com maioria absoluta do tribunal).
- **Irredutibilidade de Subsídio**: O salário do juiz não pode ser reduzido (garante independência contra retaliações do Estado).

---

## 🎯 Foco nas Bancas
- **Câmara x Senado**: A pegadinha máxima é confundir os papéis no Impeachment do Presidente. **A Câmara (2/3) AUTORIZA o processo. O Senado Federal JULGA o processo.**
- **CNJ**: As bancas colocam o CNJ julgando recursos processuais de cidadãos. **Falso.** O CNJ só julga infrações disciplinares e má conduta administrativa dos juízes e tribunais.

---

## 💡 Macetes e Mnemônicos
**Composição dos Tribunais Superiores:**
- **STF**: Somos Um Time de Futebol (**11** ministros).
- **STJ**: Somos Todos Jesus (**33** ministros).
- **TST** (Trabalho): Trinta Sem Três (**27** ministros).
- **TSE** (Eleitoral): Tem Sete Elementos (**7** ministros).
- **STM** (Militar): Somos Todas Meninas (**15** ministros - a idade da debutante).
- **CNJ**: Conselho Não Julga (**15** membros).

---

## ⚠️ Pegadinhas Comuns
- Afirmar que Ministros do STJ precisam ser brasileiros natos. **Falso.** Apenas os Ministros do STF (e o Presidente/Vice do Brasil, Presidente da Câmara/Senado, Diplomatas, Oficiais das Forças Armadas e Ministro da Defesa) possuem a exigência constitucional de serem brasileiros **natos**. (A linha sucessória e a segurança nacional).`
  }
];

async function main() {
  try {
    await client.connect();
    console.log(`Updating ${upgrades.length} subtopics (LOTE 4 Premium)...`);

    for (const u of upgrades) {
      await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [u.content, u.id]);
      console.log(`Updated: ${u.id} com conteúdo premium.`);
    }

    console.log('✅ Lote 4 finalizado com sucesso!');
  } catch (err) {
    console.error('Erro ao atualizar banco:', err);
  } finally {
    await client.end();
  }
}
main();
