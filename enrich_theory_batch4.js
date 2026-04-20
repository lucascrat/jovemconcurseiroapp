const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const upgrades = [

  // ==================== DIREITO PENAL ====================

  {
    id: '7ea72209ee0727c58185d89b54ad3b54', // Conceito de Crime e Fato Típico
    content: `## Teoria do Crime: Conceito e Elementos

### O que é Crime?
Crime é um fato típico, ilícito (antijurídico) e culpável. Para que alguém seja punido criminalmente, é preciso que sua conduta preencha todos esses três requisitos cumulativamente.

### Os Três Substratos do Crime
| Substrato | Pergunta | Elementos |
|-----------|----------|-----------|
| **Fato Típico** | A conduta está descrita na lei penal? | Conduta, resultado, nexo causal, tipicidade |
| **Ilicitude** | A conduta é contrária ao ordenamento jurídico? | Ausência de excludentes (legítima defesa, estado de necessidade etc.) |
| **Culpabilidade** | O agente pode ser responsabilizado? | Imputabilidade, potencial consciência da ilicitude, exigibilidade de conduta diversa |

### Fato Típico em Detalhes
**Conduta**: ação ou omissão humana, consciente e voluntária.
- Dolosa: o agente queria o resultado ou assumiu o risco
- Culposa: o agente não queria, mas agiu com imprudência, negligência ou imperícia

**Resultado**: consequência naturalística da conduta (em crimes materiais).

**Nexo de Causalidade**: relação entre a conduta e o resultado.
- Teoria da Equivalência dos Antecedentes (conditio sine qua non): é causa tudo aquilo que, suprimido, faz o resultado desaparecer.

**Tipicidade**: adequação formal e material da conduta ao tipo penal previsto na lei.

### Crimes Dolosos: Dolo Direto × Dolo Eventual
- **Dolo Direto**: o agente quer o resultado ("quero matar")
- **Dolo Eventual**: o agente não quer, mas assume o risco ("tanto faz se morrer")

### Crimes Culposos: Modalidades
- **Imprudência**: ação descuidada (dirigir em alta velocidade)
- **Negligência**: omissão de cuidado (não revisar os freios)
- **Imperícia**: falta de habilidade técnica (médico sem competência)

> 🎯 **Dica PRF**: A Cebraspe SEMPRE cobra a distinção entre dolo eventual (assume o risco) e culpa consciente (acredita que evitará o resultado). Só muda a "aceitação" do resultado!`
  },

  {
    id: '39231f00307f0871a0f56c8cf18e6235', // Excludentes de Ilicitude
    content: `## Excludentes de Ilicitude (Causas Justificantes)

Mesmo que a conduta seja típica, ela pode ser lícita se estiver amparada por uma das causas excludentes de ilicitude do art. 23 do CP.

### As Quatro Excludentes (Art. 23 CP)

**1. Legítima Defesa (art. 25)**
Requisitos cumulativos:
- Agressão injusta, atual ou iminente
- A bens jurídicos próprios ou de terceiros
- Usar meios necessários
- Usar moderadamente esses meios

⚠️ **Excesso**: Se o agente vai além do necessário, responde pelo excesso (doloso ou culposo).
⚠️ **Legítima defesa recíproca**: não é possível — quem ataca injustamente não pode se defender licitamente do revide.

**2. Estado de Necessidade (art. 24)**
- Perigo atual (não iminente!)
- Que o agente não provocou por sua vontade
- Inevitável de outra forma
- Sacrifício de bem de valor menor ou igual ao preservado

**3. Estrito Cumprimento do Dever Legal**
- O agente age por imposição legal (ex: policial que usa força para prender em flagrante)
- Só cabe para agentes públicos no exercício de suas funções legais

**4. Exercício Regular de Direito**
- A conduta é tolerada pelo ordenamento (ex: cirurgião que corta o paciente para operar)

### Comparativo: Legítima Defesa × Estado de Necessidade
| Aspecto | Legítima Defesa | Estado de Necessidade |
|---------|----------------|----------------------|
| Origem do perigo | Agressão humana injusta | Situação de perigo (pessoa ou natureza) |
| Direção | Contra o agressor | Pode sacrificar bem de terceiro inocente |
| Agressão | Injusta e atual/iminente | Perigo atual |

> 🎯 **Dica PRF**: O policial que usa força moderada para realizar prisão em flagrante age em "estrito cumprimento do dever legal", e não em legítima defesa!`
  },

  {
    id: '71cf163dd7040af2d130fceb3e010ee9', // Peculato e Concussão
    content: `## Crimes Contra a Administração Pública: Peculato e Concussão

### Peculato (Art. 312 CP)
**"Apropriar-se o funcionário público de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo."**

| Modalidade | Descrição | Pena |
|------------|-----------|------|
| **Peculato-Apropriação** | Apoderamento definitivo de bem que já detém | 2 a 12 anos |
| **Peculato-Desvio** | Desvia em proveito próprio ou de outrem | 2 a 12 anos |
| **Peculato-Furto** | Subtrai ou concorre para que terceiro subtraia (sem posse anterior) | 2 a 12 anos |
| **Peculato Culposo** | Por negligência, permite que terceiro subtraia | 3 meses a 1 ano |

⚠️ **Reparação no peculato culposo**: Se reparado antes da sentença irrecorrível → extinção da punibilidade. Se após → redução de metade da pena.

### Concussão (Art. 316 CP)
**"Exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida."**

Palavra-chave: **EXIGIR** (com intimidação, imposição)

### Corrupção Passiva (Art. 317 CP)
**"Solicitar ou receber, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida."**

Palavras-chave: **SOLICITAR ou RECEBER** (sem imposição)

### Tabela Comparativa Essencial
| Crime | Verbo Núcleo | Sujeito Ativo | Vantagem |
|-------|-------------|---------------|----------|
| Peculato | Apropriar / Desviar | Funcionário público | Bem que já tem a posse |
| Concussão | **Exigir** | Funcionário público | Qualquer vantagem |
| Corrupção Passiva | **Solicitar / Receber** | Funcionário público | Qualquer vantagem |
| Corrupção Ativa | **Oferecer / Prometer** | Particular | Qualquer vantagem |

> 🎯 **Dica PRF**: O policial que para um veículo e EXIGE dinheiro para não multar pratica **CONCUSSÃO** (art. 316). Se apenas pede ou recebe sem exigir, é **corrupção passiva** (art. 317).`
  },

  {
    id: '169550684193ddf2b561246ea232cd84', // Corrupção Passiva e Ativa
    content: `## Corrupção Passiva e Ativa

### Corrupção Passiva (Art. 317 CP) — "Do funcionário"
**Solicitar** ou **receber** vantagem indevida para praticar ou deixar de praticar ato de ofício.

- Sujeito ativo: funcionário público
- Verbo: SOLICITAR (ativo) ou RECEBER (passivo)
- Não exige intimidação — difere da concussão
- Pena base: 2 a 12 anos + multa

**Causa de aumento**: se o ato é retardado ou omitido, ou praticado com infração de dever → pena aumentada de 1/3

### Corrupção Ativa (Art. 333 CP) — "Do particular"
**Oferecer** ou **prometer** vantagem indevida ao funcionário público.

- Sujeito ativo: qualquer pessoa (inclusive funcionário público)
- Verbo: OFERECER ou PROMETER
- Pena: 2 a 12 anos + multa
- Crime autônomo: não precisa que o funcionário aceite!

### Corrupção Ativa × Passiva: Independência
Os dois crimes são **autônomos** — um pode ocorrer sem o outro:
- Funcionário exige → Concussão (316), sem corrupção ativa do particular
- Particular oferece e funcionário recusa → Corrupção ativa (333) sem corrupção passiva

### Prevaricação (Art. 319 CP)
Retardar ou deixar de praticar ato de ofício **para satisfazer interesse ou sentimento pessoal**.
- Diferença da corrupção: na prevaricação, o móvel é pessoal (não há vantagem econômica)
- Pena: 3 meses a 1 ano + multa

### Condescendência Criminosa (Art. 320 CP)
Deixar de responsabilizar subordinado por infração ou omitir a comunicação ao superior.
- Pena: 15 dias a 1 mês ou multa

> 🎯 **Dica PRF**: Na prevaricação, o servidor age por "sentimento pessoal" (raiva, amizade) — sem vantagem econômica. Na corrupção passiva, sempre há vantagem indevida!`
  },

  {
    id: '3cdb40921aab7911310437fcf610d01f', // Características do Inquérito
    content: `## Inquérito Policial: Conceito e Características

### O Que é o Inquérito Policial?
Procedimento administrativo, de natureza inquisitiva, presidido pela autoridade policial (delegado), destinado a apurar a materialidade e a autoria de infrações penais.

### Características Fundamentais
| Característica | Significado |
|----------------|-------------|
| **Administrativo** | Não é processo judicial — não há jurisdição |
| **Inquisitivo** | Não há contraditório pleno nem ampla defesa |
| **Sigiloso** | Pode ser decretado sigilo (art. 20 CPP) |
| **Escrito** | Todas as peças são documentadas por escrito |
| **Dispensável** | A ação penal pode ser ajuizada sem IP (se houver provas suficientes) |
| **Oficial** | Presidido por delegado de polícia |
| **Oficioso** | A Polícia age de ofício ao tomar conhecimento da infração |

### Como se Instaura o IP
- **De ofício**: autoridade toma conhecimento do fato
- **Requisição**: do Ministério Público ou do Juiz
- **Requerimento**: da vítima ou seu representante
- **Auto de prisão em flagrante**: o próprio flagrante instaura o IP

### Fases
1. Instauração (portaria ou APF)
2. Investigação (oitivas, perícias, diligências)
3. Relatório do delegado
4. Envio ao MP para oferecimento de denúncia ou arquivamento

### Arquivamento
Pelo MP; homologado pelo juiz. O delegado NÃO arquiva IP — ele apenas conclui o relatório.

> 🎯 **Dica PRF**: O IP é **dispensável** — o MP pode oferecer denúncia diretamente com base em outras provas. E o delegado NÃO pode arquivar o IP, apenas o juiz (mediante pedido do MP)!`
  },

  {
    id: '85f02b8820e74229089bf38a8471002d', // Prazos do Inquérito
    content: `## Prazos do Inquérito Policial (CPP, Art. 10)

### Prazos Padrão
| Situação | Prazo |
|----------|-------|
| Indiciado preso | **10 dias** (improrrogável no CPP comum) |
| Indiciado solto | **30 dias** (prorrogável a requerimento) |

### Prazos Especiais por Lei
| Lei / Situação | Prazo preso | Prazo solto |
|----------------|-------------|-------------|
| **Lei de Drogas (11.343/06)** | 30 dias | 90 dias (prorrogáveis) |
| **Crimes contra a economia popular** | 10 dias | 10 dias |
| **Justiça Federal** | 15 dias (+ 15 dias de prorrogação) | 30 dias |

### Implicações do Prazo para Preso
Se o inquérito não for concluído no prazo com o indiciado preso, ele deve ser **solto** (relaxamento de prisão ou habeas corpus).

### O que acontece ao final do prazo?
O delegado elabora o **relatório** e remete os autos ao MP. O MP poderá:
1. **Oferecer denúncia** → inicia a ação penal
2. **Pedir arquivamento** → o juiz homologa (ou discorda e remete ao PGJ)
3. **Requerer diligências** → o IP retorna à polícia para novas investigações

### Tramitação Após o Relatório
Delegado → (relatório) → Juiz → MP → (denúncia ou arquivamento)

> 🎯 **Dica PRF**: A Cebraspe cobra os prazos em combinação — especialmente o prazo da Lei de Drogas (30/90 dias), que difere do CPP geral (10/30 dias). Memorize essa diferença!`
  },

  // ==================== DIREITO ADMINISTRATIVO ====================

  {
    id: '5098aace183a1a4ee3d9057e0bb8062a', // Princípios Constitucionais (LIMPE)
    content: `## Princípios da Administração Pública (LIMPE — Art. 37 CF/88)

O art. 37 da CF/88 estabelece os princípios que norteiam a Administração Pública direta e indireta.

### O Acrônimo LIMPE
| Letra | Princípio | Significado |
|-------|-----------|-------------|
| **L** | **Legalidade** | A Adm. só faz o que a lei autoriza (≠ particular, pode fazer tudo que a lei não proíbe) |
| **I** | **Impessoalidade** | Trata todos igualmente; os atos são da Adm., não do agente pessoalmente |
| **M** | **Moralidade** | Agir com ética, boa-fé e probidade |
| **P** | **Publicidade** | Os atos devem ser divulgados (exceto sigilosos por lei) |
| **E** | **Eficiência** | (EC 19/98) Atuar com qualidade, velocidade e resultado |

### Princípios Implícitos (também cobrados!)
- **Razoabilidade e Proporcionalidade**: Meios adequados aos fins; não exceder o necessário
- **Autotutela**: A Adm. pode anular seus atos ilegais (de ofício) e revogar os inconvenientes
- **Segurança Jurídica**: Proteção à confiança legítima do administrado
- **Supremacia do Interesse Público**: Interesse coletivo prevalece sobre o individual
- **Indisponibilidade do Interesse Público**: O agente não pode abrir mão do interesse público

### Legalidade Administrativa × Legalidade Penal
- **Legalidade Administrativa** (art. 37): só faz o que a lei permite
- **Legalidade Penal** (art. 5°, XXXIX): não há crime sem lei anterior que o defina

### Publicidade × Sigilo
A publicidade é a regra. Exceções permitidas pela lei:
- Segurança do Estado
- Intimidade do particular (dados pessoais)
- Processo disciplinar em andamento

> 🎯 **Dica PRF**: A Cebraspe adora afirmar que a Adm. pode fazer "tudo que a lei não proíbe" — ERRADO para a Adm. Pública! Isso vale para o particular. A Adm. só faz o que a lei **autoriza**.`
  },

  {
    id: '3c4d236ddbcdbbaccd761cd3f452e079', // Poder de Polícia
    content: `## Poder de Polícia Administrativa

### Conceito (Art. 78 CTN)
Atividade da Administração que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato ou abstenção de fato, em razão do interesse público.

### Atributos do Poder de Polícia (DICA)
| Atributo | Definição | Exemplo |
|----------|-----------|---------|
| **D**iscricionariedade | Margem de escolha quanto ao momento e modo (em geral) | Escolher hora de fiscalizar |
| **I**mperatividade | Imposição unilateral, sem necessidade de concordância | Multa de trânsito sem aprovação do infrator |
| **C**oercibilidade | Pode ser executado pela própria Adm., inclusive com força | Remoção de veículo abandonado |
| **A**uto-executoriedade | Executa sem precisar de ordem judicial (em regra) | Demolição de obra irregular |

⚠️ Nem todos os atos de polícia têm TODOS os atributos. Exemplo: a multa é imperativa, mas para cobrança judicial pode precisar de processo.

### Ciclo de Polícia
1. **Ordem** → norma que estabelece conduta (lei, regulamento)
2. **Consentimento** → licença ou autorização (alvará, CNH)
3. **Fiscalização** → verificação do cumprimento (blitz, vigilância sanitária)
4. **Sanção** → penalidade ao infrator (multa, apreensão)

### Poder de Polícia da PRF
A PRF exerce poder de polícia administrativa de trânsito nas rodovias federais:
- Fiscalização de velocidade, CNH, documentos do veículo
- Aplicação de autos de infração (multas)
- Remoção de veículos em situação irregular
- Uso progressivo da força para garantir cumprimento das ordens

> 🎯 **Dica PRF**: A auto-executoriedade é o atributo que permite à PRF remover veículo SEM ordem judicial. Mas a cobrança de multa (que vira dívida ativa) pode exigir execução fiscal!`
  },

  {
    id: '3a8286b494b0fb8a9a2da354090faf8c', // Responsabilidade Civil do Estado
    content: `## Responsabilidade Civil do Estado (Art. 37, §6° CF/88)

### Teoria Adotada: Risco Administrativo (Objetiva)
"As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros."

### Elementos da Responsabilidade Objetiva
1. **Conduta** do agente público (ação ou omissão)
2. **Dano** (material ou moral) ao particular
3. **Nexo causal** entre a conduta e o dano

⚠️ A vítima NÃO precisa provar culpa ou dolo do agente!

### Excludentes de Responsabilidade
| Excludente | Descrição |
|------------|-----------|
| **Culpa exclusiva da vítima** | A própria vítima causou o dano |
| **Caso fortuito / Força maior** | Evento imprevisível e inevitável |
| **Culpa de terceiro** | Terceiro alheio ao Estado causou o dano |

### Responsabilidade Subjetiva × Objetiva
| Tipo | Quando | Exemplo |
|------|--------|---------|
| **Objetiva** (regra) | Ação do Estado que causa dano | PRF bate em carro durante perseguição |
| **Subjetiva** (exceção) | Omissão estatal onde havia dever de agir | Estado não consertou buraco já notificado |

### Ação Regressiva
O Estado responde ao terceiro; depois, pode acionar o agente que agiu com **dolo ou culpa** para se ressarcir.

> 🎯 **Dica PRF**: Em omissão estatal (ex: buraco na estrada), a responsabilidade é SUBJETIVA — exige-se prova de que o Estado sabia do problema e não agiu. Na AÇÃO (ex: acidente causado por viatura), é OBJETIVA.`
  },

  // ==================== INFORMÁTICA ====================

  {
    id: 'bfebc86a12e928ba144c6dbebeb6817a', // Conceitos de Segurança
    content: `## Segurança da Informação: Conceitos Fundamentais

### Pilares da Segurança da Informação (CID)
| Pilar | Sigla | O que garante | Como é violado |
|-------|-------|---------------|----------------|
| **Confidencialidade** | C | Acesso apenas por autorizados | Vazamento de dados, phishing |
| **Integridade** | I | Dado não foi alterado indevidamente | Man-in-the-middle, vírus |
| **Disponibilidade** | D | Dado acessível quando necessário | Ataque DDoS, falha de hardware |

Outros pilares adicionais: **Autenticidade** (identidade verificada), **Não-repúdio** (não pode negar autoria).

### Principais Ameaças e Ataques
| Ameaça | Descrição |
|--------|-----------|
| **Phishing** | E-mail/mensagem falsa para roubar credenciais |
| **Ransomware** | Criptografa arquivos e exige resgate |
| **Spyware** | Espiona atividades do usuário sem consentimento |
| **Keylogger** | Registra tudo que o usuário digita |
| **Rootkit** | Se esconde no sistema para manter acesso persistente |
| **DDoS** | Ataque distribuído que derruba servidores por sobrecarga |
| **Engenharia Social** | Manipulação humana para obter acesso (ex: se passar por técnico) |

### Mecanismos de Proteção
- **Firewall**: filtra o tráfego de rede
- **Antivírus**: detecta e remove malware
- **Criptografia**: torna os dados ilegíveis para não autorizados
- **VPN**: cria túnel seguro de comunicação
- **Autenticação multifator (MFA)**: exige 2+ fatores para acesso
- **Certificado Digital**: garante autenticidade e integridade de documentos eletrônicos

### HTTPS e Criptografia
- **HTTP**: dados em texto puro → inseguro
- **HTTPS**: usa TLS/SSL para criptografar → garante C, I e A dos dados

> 🎯 **Dica PRF**: O ransomware é o ataque mais criticado em provas recentes. Ele criptografa os dados — a solução é BACKUP atualizado e offline, já que o pagamento do resgate não garante a devolução.`
  },

  {
    id: 'ce1ff6fa0d32822562e710fb3260a7c8', // Microsoft Word
    content: `## Microsoft Word: Recursos Cobrados em Concursos

### Atalhos Essenciais
| Atalho | Função |
|--------|--------|
| **Ctrl+Z** | Desfazer |
| **Ctrl+Y** | Refazer |
| **Ctrl+C / Ctrl+V** | Copiar / Colar |
| **Ctrl+X** | Recortar |
| **Ctrl+A** | Selecionar tudo |
| **Ctrl+B** | Negrito |
| **Ctrl+I** | Itálico |
| **Ctrl+U** | Sublinhado |
| **Ctrl+P** | Imprimir |
| **Ctrl+S** | Salvar |
| **Ctrl+F** | Localizar |
| **Ctrl+H** | Localizar e substituir |
| **Ctrl+G** / F5 | Ir para (página específica) |
| **F7** | Verificar ortografia |

### Formatação e Layout
- **Estilos**: formatos predefinidos (Título 1, Normal etc.) para consistência
- **Seções**: permitem orientações diferentes (retrato/paisagem) no mesmo documento
- **Cabeçalho e Rodapé**: insere número de páginas, data, título
- **Mala Direta**: gera documentos personalizados com base em banco de dados (planilha)

### Tabelas
- Inserir: Aba "Inserir" → Tabela
- Mesclar células: selecionar → clicar com direito → Mesclar células
- Dividir tabela: cursor na linha → Layout → Dividir tabela

### Extensões de Arquivo
- **.docx**: formato padrão Word (XML compactado)
- **.doc**: formato legado (Word 97-2003)
- **.pdf**: exportar como PDF (Arquivo → Salvar como)
- **.odt**: formato aberto (LibreOffice)

> 🎯 **Dica PRF**: A Cebraspe cobra COM FREQUÊNCIA os atalhos Ctrl+Z (desfazer), Ctrl+Y (refazer) e F7 (ortografia). Também cobra a diferença entre "Salvar" (Ctrl+S, mesmo nome) e "Salvar Como" (escolhe nome/formato).`
  },

  {
    id: '7dcc26afb684db1e20e896bf952a0765', // Microsoft Excel
    content: `## Microsoft Excel: Fórmulas e Recursos Cobrados

### Fórmulas Essenciais
| Fórmula | Função | Exemplo |
|---------|--------|---------|
| **=SOMA(A1:A10)** | Soma de um intervalo | =SOMA(B2:B20) |
| **=MÉDIA(A1:A10)** | Média aritmética | =MÉDIA(C2:C10) |
| **=MÁXIMO(A1:A10)** | Maior valor | =MÁXIMO(D2:D50) |
| **=MÍNIMO(A1:A10)** | Menor valor | |
| **=CONT.SE(intervalo;critério)** | Conta células que atendem critério | =CONT.SE(A1:A10;"Aprovado") |
| **=SOMASE** | Soma condicional | |
| **=SE(teste;verdadeiro;falso)** | Condicional | =SE(A1>7;"Aprovado";"Reprovado") |
| **=PROCV** | Busca vertical em tabela | |

### Referências de Células
- **Relativa**: A1 (muda ao copiar a fórmula)
- **Absoluta**: $A$1 (não muda ao copiar — F4 para fixar)
- **Mista**: $A1 ou A$1 (fixa só coluna ou só linha)

### Gráficos
- Selecionar dados → Inserir → Gráfico
- Tipos comuns: Colunas, Linhas, Pizza, Barras

### Formatação Condicional
Formata células automaticamente com base em regras (ex: pintar de vermelho valores abaixo de 5).

### Atalhos do Excel
| Atalho | Função |
|--------|--------|
| Ctrl+; | Data atual |
| Ctrl+Shift+; | Hora atual |
| Alt+Enter | Quebra de linha dentro da célula |
| F2 | Editar célula ativa |
| Ctrl+Seta | Ir para última célula preenchida |

> 🎯 **Dica PRF**: A fórmula **=SE()** é a mais cobrada. Entenda que ela tem 3 argumentos: teste lógico, valor se verdadeiro, valor se falso. Ex: =SE(B2>=60;"Aprovado";"Reprovado").`
  },

  {
    id: '1a52108060b0e072e2719da69b5acc64', // Modelos SaaS, PaaS e IaaS
    content: `## Computação em Nuvem: Modelos de Serviço e Implantação

### O que é Cloud Computing?
Fornecimento de recursos computacionais (servidores, armazenamento, bancos de dados, redes, software) pela internet, com pagamento conforme uso (pay-per-use).

### Modelos de Serviço (Mais Cobrados!)
| Modelo | Nome Completo | O que oferece | Quem gerencia o quê | Exemplo |
|--------|---------------|---------------|---------------------|---------|
| **IaaS** | Infrastructure as a Service | Infraestrutura (servidores, rede, armazenamento) | Provedor: hardware; Cliente: SO e apps | AWS EC2, Azure VMs |
| **PaaS** | Platform as a Service | Plataforma (SO + middleware) para desenvolver apps | Provedor: infra + SO; Cliente: apenas o app | Google App Engine, Heroku |
| **SaaS** | Software as a Service | Software pronto, acessado pelo navegador | Provedor: tudo; Cliente: apenas usa | Gmail, Office 365, Salesforce |

**Regra mnemônica**: IaaS < PaaS < SaaS (crescendo em abstração)

### Modelos de Implantação
| Modelo | Descrição | Quem usa |
|--------|-----------|----------|
| **Nuvem Pública** | Recursos compartilhados pela internet | Qualquer organização |
| **Nuvem Privada** | Infra exclusiva, dentro ou fora da empresa | Grandes empresas, governos |
| **Nuvem Híbrida** | Combinação de pública e privada | Empresas que querem flexibilidade |
| **Multicloud** | Uso de múltiplos provedores públicos | Empresas que querem evitar dependência |

### Vantagens da Nuvem
- Escalabilidade (aumenta/diminui recursos facilmente)
- Redução de custos de infraestrutura
- Acesso remoto de qualquer lugar
- Alta disponibilidade e redundância

> 🎯 **Dica PRF**: SaaS é o mais simples para o usuário final (só usa). IaaS é o mais complexo (gerencia quase tudo). A questão típica: "O Gmail é um exemplo de (SaaS)".`
  },

  {
    id: 'e6eb63d4b5806d911bb6f2f2d895d96d', // Hardware e Software Básicos
    content: `## Hardware e Software: Conceitos Fundamentais

### Hardware × Software
| Aspecto | Hardware | Software |
|---------|----------|---------|
| Definição | Componentes físicos do computador | Programas e instruções que o hardware executa |
| Exemplos | CPU, RAM, HD, teclado, monitor | Windows, Word, antivírus, drivers |
| Subdivisão | Entrada, saída, armazenamento, processamento | Sistema Operacional, Aplicativos, Utilitários |

### Componentes de Hardware
**Processamento**:
- **CPU** (Unidade Central de Processamento): "cérebro" do computador; executa instruções
- **GPU**: processador gráfico; paralelismo de cálculos

**Memória**:
- **RAM** (memória volátil): armazena dados em uso; perde ao desligar
- **ROM** (memória permanente): firmware, BIOS; não perde ao desligar
- **Cache**: memória ultrarrápida integrada à CPU

**Armazenamento** (não volátil):
- **HD** (HDD): mecânico, mais lento, maior capacidade
- **SSD**: estado sólido, muito mais rápido, sem partes móveis
- **Pendrive/cartão SD**: armazenamento removível

**Entrada**: teclado, mouse, scanner, webcam, microfone
**Saída**: monitor, impressora, caixa de som, projetor

### Software
- **Sistema Operacional (SO)**: gerencia o hardware e permite que outros programas funcionem. Ex: Windows 11, macOS, Linux, Android
- **Aplicativos**: programas com finalidade específica. Ex: Word, Chrome, WhatsApp
- **Utilitários**: auxiliam na manutenção do sistema. Ex: antivírus, desfragmentador
- **Drivers**: software que permite SO comunicar com hardware específico

### Unidades de Medida
| Unidade | Equivalência |
|---------|-------------|
| 1 Byte | 8 bits |
| 1 KB | 1.024 bytes |
| 1 MB | 1.024 KB |
| 1 GB | 1.024 MB |
| 1 TB | 1.024 GB |

> 🎯 **Dica PRF**: A Cebraspe cobra a distinção entre memória **volátil** (RAM — perde ao desligar) e **não volátil** (HD, SSD, ROM — mantém dados). E: 1 Byte = 8 bits.`
  },
];

async function main() {
  try {
    await client.connect();
    console.log(`Updating ${upgrades.length} subtopics (Batch 4 — Penal + Adm + Info)...`);
    for (const u of upgrades) {
      await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [u.content, u.id]);
      console.log(`Updated: ${u.name || u.id}`);
    }
    console.log('Batch 4 done!');
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
main();
