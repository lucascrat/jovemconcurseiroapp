const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const contentMap = {
  "1dab0038320d11c5102a4793a5c39867": `# Artigo 5º da CF em Linhas Gerais
  
## Introdução aos Direitos e Deveres Individuais e Coletivos
O Artigo 5º da Constituição Federal de 1988 é o pilar fundamental do Estado Democrático de Direito no Brasil. Ele estabelece que todos são iguais perante a lei, sem distinção de qualquer natureza.

### Pontos Chave para Concursos de Nível Fundamental:
1.  **Direito à Vida**: É o direito primordial. Inclui o direito de continuar vivo e o direito a uma vida digna.
2.  **Igualdade (Isonomia)**: Tratar igualmente os iguais e desigualmente os desiguais na medida de suas desigualdades.
3.  **Liberdade de Expressão**: É livre a manifestação do pensamento, sendo **vedado o anonimato**.
4.  **Inviolabilidade do Domicílio**: A casa é o asilo inviolável do indivíduo. Ninguém nela pode penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.

> [!TIP]
> **Mnemônico: L.I.P.E.**
> Liberdade, Igualdade, Propriedade e Segurança. Estes são os valores protegidos pelo caput do Art. 5º!

---
## Quadros Resumo
- **Homens e Mulheres**: São iguais em direitos e obrigações.
- **Tortura**: Ninguém será submetido a tortura nem a tratamento desumano ou degradante.
- **Religião**: É inviolável a liberdade de consciência e de crença.`,

  "301a706b458d122f12077ce449a59217": `# Sistemas de Medidas
  
## O que você precisa saber para a prova
O sistema decimal de medidas é a base para quase todas as questões de matemática em concursos.

### 1. Medidas de Comprimento
A unidade fundamental é o **Metro (m)**.
- **Quilômetro (km)** = 1000m
- **Centímetro (cm)** = 0,01m
- **Milímetro (mm)** = 0,001m

### 2. Medidas de Massa
A unidade fundamental é o **Grama (g)**, mas o quilograma (kg) é muito usado no dia a dia.
- **1 kg = 1000 g**
- **1 Tonelada (t) = 1000 kg**

### 3. Medidas de Tempo
Diferente do sistema decimal, o tempo usa base 60!
- **1 hora = 60 minutos**
- **1 minuto = 60 segundos**
- **1 dia = 24 horas**

> [!CAUTION]
> Erro Comum: Achar que 1,5 hora são 1 hora e 50 minutos. **FALSO!**
> 1,5 hora = 1 hora + 0,5 hora (metade de 60 min) = **1 hora e 30 minutos.**`,

  "a185a7a85d53df406954109d999c992d": `# Porcentagem Simples
  
## Entendendo o Símbolo %
Porcentagem significa "por cem". O número 20% é o mesmo que 20/100 ou 0,20.

### Como Calcular Rapidamente:
1.  **10%**: Basta andar a vírgula uma casa para a esquerda.
    - Ex: 10% de 450 = 45.
2.  **50%**: É o mesmo que dividir por 2 (metade).
    - Ex: 50% de 80 = 40.
3.  **25%**: É o mesmo que dividir por 4.
    - Ex: 25% de 100 = 25.

### Problemas com Descontos e Acréscimos:
- **Desconto**: Valor Original - (Valor Original * %)
- **Acréscimo**: Valor Original + (Valor Original * %)

**Exemplo de Prova:**
Um produto custa R$ 200,00 e sofre um desconto de 15%. Qual o novo valor?
- 10% de 200 = 20
- 5% de 200 = 10 (metade de 10%)
- Total do desconto: 20 + 10 = 30.
- Valor final: 200 - 30 = **R$ 170,00.**`,

  "477c22cb72ee3c438957c96abbfce5f6": `# Interpretação de Textos Simples
  
## Como ler para concursos
Interpretar não é apenas ler, é entender o que o autor quis dizer e o que o texto efetivamente diz.

### Dicas de Ouro:
1.  **Leia a pergunta antes do texto**: Assim você já lê procurando a resposta.
2.  **Cuidado com Extrapolação**: Não invente informações que não estão no texto. Se o texto diz que "muitos brasileiros gostam de café", você não pode afirmar que "todos os brasileiros amam café".
3.  **Idéia Central**: Geralmente está no primeiro ou no último parágrafo.

### Tipos de Questão:
- **Compreensão**: "Segundo o texto...", "O autor afirma que..." (A resposta está escrita no papel).
- **Interpretação**: "Depreende-se do texto...", "Conclui-se que..." (Você precisa ler nas entrelinhas).`,

  "95127b28dfca6ad62306b1e94a527d4d": `# Ortografia Oficial
  
## O Uso Correto das Letras
A ortografia verifica a escrita correta das palavras de acordo com a norma culta.

### O Uso dos Porquês:
- **Porque (junto e sem acento)**: Usado em respostas e explicações (Pois).
- **Por que (separado e sem acento)**: Usado em perguntas ou quando equivale a "pelo qual".
- **Por quê (separado e com acento)**: Usado no final de frases ou isolado.
- **Porquê (junto e com acento)**: É um substantivo. Equivale a "o motivo".

### Acentuação Básica:
- **Oxítonas**: Acentuam-se as terminadas em A, E, O (seguidas ou não de S), EM, ENS.
  - Ex: Café, Pará, Armazém.
- **Monossílabos Tônicos**: Acentuam-se os terminados em A, E, O.
  - Ex: Pá, Pé, Pó.`,

  "0730abb952848ec637a1214fdf0272a0": `# Substantivo e Adjetivo
  
## As Classes de Palavras
As palavras são divididas em famílias de acordo com sua função.

### 1. Substantivo (Dá nome às coisas)
Tudo que existe tem um nome: casa, João, amor, cidade.
- **Próprio**: Fortaleza, Maria (Sempre com letra maiúscula).
- **Comum**: cachorro, mesa, caneta.
- **Abstrato**: beleza, alegria, fome (dependem de outro ser).

### 2. Adjetivo (Dá características)
O adjetivo qualifica ou caracteriza o substantivo.
- Menino **inteligente**.
- Prova **difícil**.
- Carro **novo**.

> [!IMPORTANT]
> A concordância: O adjetivo deve concordar com o substantivo.
> Ex: As meninas (substantivo feminino plural) são **bonitas** (adjetivo feminino plural).`,

  "3a8c0c377ece7cefdd41dcea308d50a1": `# Verbos e Tempos Verbais
  
## A Palavra que Indica Ação
O verbo é a classe que indica ação, estado ou fenômeno da natureza.

### Tempos do Modo Indicativo (O que é real):
1.  **Presente**: Acontece agora. (Eu estudo).
2.  **Pretérito Perfeito**: Ação que já acabou totalmente. (Eu estudei ontem).
3.  **Pretérito Imperfeito**: Ação habitual no passado ou que não acabou. (Eu estudava muito quando criança).
4.  **Futuro do Presente**: Algo que vai acontecer. (Eu estudarei amanhã).

### Pessoa e Número:
- 1ª Pessoa: Eu / Nós
- 2ª Pessoa: Tu / Vós
- 3ª Pessoa: Ele / Eles`,

  "4f906e522b24d1cce12de8e599e4ac9d": `# Adição, Subtração, Multiplicação e Divisão
  
## As quatro operações fundamentais
Dominar estas operações é o primeiro passo para o sucesso em qualquer concurso.

### 1. Adição (Somar)
Lembre-se: unidade embaixo de unidade, dezena embaixo de dezena.
- Ex: 125 + 48 = 173

### 2. Subtração (Tirar/Diferença)
O famoso "pedir emprestado" quando o número de cima é menor que o de baixo.
- Ex: 100 - 37 = 63

### 3. Multiplicação (Produto)
É uma soma repetida.
- Ex: 5 x 4 = 5 + 5 + 5 + 5 = 20.
- Decore a tabuada! É a sua melhor ferramenta.

### 4. Divisão (Quociente)
Repartir em partes iguais.
- Ex: 20 / 4 = 5.

> [!TIP]
> **Ordem das Operações**: Numa conta com tudo misturado, primeiro fazemos Multiplicação e Divisão, e por último Adição e Subtração!`,

  "dab059acd918c179858604b4f8a083da": `# Deveres e Proibições Básicas
  
## Ética e Postura do Servidor Público
O servidor público deve agir sempre pensando no bem da coletividade.

### Principais Deveres:
- Ser assíduo e pontual (não faltar e chegar no horário).
- Tratar o público com urbanidade (educação e respeito).
- Cumprir as ordens superiores, salvo quando manifestamente ilegais.
- Manter sigilo sobre assuntos da repartição.

### Principais Proibições:
- Ausentar-se do serviço durante o expediente sem autorização.
- Retirar qualquer documento da repartição.
- Valer-se do cargo para lograr proveito pessoal.
- Receber propina ou presente de qualquer espécie.

> [!WARNING]
> A moralidade não é apenas escolher entre o legal e o ilegal, mas entre o honesto e o desonesto!`,

  "397ab6bf3bda5b5b5955f81488eca9a5": `# Geografia do Ceará
  
## Conhecendo Nosso Estado
O Ceará está localizado na região Nordeste do Brasil e possui características geográficas singulares.

### 1. Relevo
- **Sertão**: A maior parte do território, caracterizado por depressões.
- **Serras**: Ibiapaba, Baturité e Araripe (clima mais úmido e fresco).
- **Litoral**: Com dunas e falésias.

### 2. Clima e Vegetação
- **Semiárido**: Clima predominante, com chuvas escassas e irregulares.
- **Caatinga**: A vegetação exclusiva do Nordeste brasileiro, que se adapta à falta d'água (folhas que caem na seca, espinhos).

### 3. Hidrografia
- O Ceará sofre com rios temporários (que secam na estiagem).
- **Rio Jaguaribe**: O maior rio do estado, fundamental para o abastecimento.`,

  "5ab5e49c027f5d4bc3ff4af46fea5e50": `# História e Cultura do Ceará
  
## Identidade Cearense
A história do Ceará é marcada por resistência e conquistas sociais importantes.

### Fatos Históricos:
1.  **Confederação do Equador**: Movimento revolucionário que teve forte participação cearense.
2.  **Abolição Antecipada**: O Ceará foi o primeiro estado brasileiro a libertar os escravizados (em 1884), quatro anos antes da Lei Áurea. Por isso é chamado de **"Terra da Luz"**.
3.  **Padre Cícero**: Figura central na história e religiosidade do Cariri cearense.

### Cultura e Tradições:
- **Gastronomia**: Baião de dois, carne de sol, rapadura e tapioca.
- **Artesanato**: Rendas de bilros e labirinto.
- **Música e Dança**: Forró e reisado.`,

  "3df23c3616531c551edb135c5685c219": `# Navegação na Internet
  
## Como Funciona a Rede Mundial
Navegar na internet envolve o uso de ferramentas específicas chamadas navegadores (Browsers).

### 1. Navegadores Comuns:
- Google Chrome
- Microsoft Edge
- Mozilla Firefox

### 2. Termos Importantes:
- **URL**: O endereço do site (ex: www.google.com).
- **HTTP/HTTPS**: Protocolos de transferência. O "S" indica segurança (Criptografia).
- **Download**: Baixar arquivos da internet para o computador.
- **Upload**: Enviar arquivos do seu computador para a internet.

### 3. Pesquisas no Google:
- Use aspas para pesquisar termos exatos: **"Direito Administrativo"**.
- Use o sinal de menos para excluir palavras: **Concursos -Inscrições**.`,

  "e6eb63d4b5806d911bb6f2f2d895d96d": `# Hardware e Software Básicos
  
## Os Componentes do Computador
Um computador é dividido em duas partes fundamentais: o que você vê/toca e o que você opera.

### 1. Hardware (Parte Física)
São as peças do computador.
- **Entrada**: Mouse, Teclado, Scanner.
- **Saída**: Monitor, Impressora, Caixas de Som.
- **Processamento**: CPU (O cérebro do computador).
- **Armazenamento**: HD, SSD, Pendrive.

### 2. Software (Parte Lógica)
São os programas e aplicativos.
- **Sistemas Operacionais**: Windows, Linux (Eles gerenciam o computador).
- **Editores de Texto**: Word, Bloco de Notas.

> [!TIP]
> **Dica para Prova**: Hardware é o que você chuta, Software é o que você xinga!`,

  "eb3845e5c24732672cb3c8d1aeb1c693": `# Organização do Serviço
  
## Fundamentos da Administração Pública
Trabalhar no governo exige organização e respeito a hierarquias e normas.

### 1. O que é Administração Pública?
É o conjunto de órgãos e pessoas que realizam as atividades do Estado para atender o povo.

### 2. O Atendimento ao Público:
Deve ser pautado pela:
- **Cortesia**: Atender bem e com educação.
- **Eficiência**: Resolver o problema de forma rápida e correta.
- **Impessoalidade**: Tratar todos de forma igual, sem privilégios para amigos ou perseguição a inimigos.

### 3. Hierarquia:
O serviço público é organizado em níveis de comando. O funcionário deve respeito aos seus chefes, desde que as ordens sejam dentro da lei.`
};

async function updateContent() {
  try {
    await client.connect();
    console.log("🚀 Iniciando injeção de Apostilas Nível Fundamental...");
    
    for (const [id, content] of Object.entries(contentMap)) {
      await client.query(
        'UPDATE "SubTopic" SET content = $1 WHERE id = $2',
        [content, id]
      );
      console.log(`✅ Atualizado: ${id}`);
    }
    
    console.log("✨ Fase Fundamental Concluída com Sucesso!");
  } catch (err) {
    console.error("❌ Erro na atualização:", err);
  } finally {
    await client.end();
  }
}

updateContent();
