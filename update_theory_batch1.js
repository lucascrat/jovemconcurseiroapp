const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const batch1 = [
  {
    ids: ['40d02654b9a55ecdbaff15a5e83398b0', '20ab1aca21e62b26e514f5742e620ef5'],
    name: 'DUDH',
    content: `# Declaração Universal dos Direitos Humanos (DUDH) - Guia Completo

A **Declaração Universal dos Direitos Humanos (DUDH)**, adotada pela Assembleia Geral da ONU em 10 de dezembro de 1948, é o documento fundamental que estabelece a proteção universal dos direitos humanos. Ela foi uma resposta direta às atrocidades da Segunda Guerra Mundial.

## 1. Características Fundamentais
Os direitos previstos na DUDH possuem características essenciais para concursos:
*   **Universalidade:** Aplicam-se a todos os seres humanos, sem distinção.
*   **Indivisibilidade:** Direitos civis, políticos, econômicos, sociais e culturais formam um todo inseparável.
*   **Irrenunciabilidade:** O indivíduo não pode abrir mão de seus direitos.
*   **Inalienabilidade:** Não podem ser transferidos ou vendidos.
*   **Imprescritibilidade:** Não deixam de existir pelo passar do tempo.

## 2. Estrutura da DUDH
A DUDH é composta por um **Preâmbulo** e **30 Artigos**.
*   **Dignidade da Pessoa Humana:** É o fundamento central. O Art. 1º afirma: "Todos os seres humanos nascem livres e iguais em dignidade e direitos".
*   **Igualdade e Não Discriminação:** O Art. 2º estabelece que todos têm direito sem distinção de raça, cor, sexo, língua, religião, etc.

## 3. Direitos de Primeira e Segunda Geração (Dimensão)
Embora a DUDH os trate como indivisíveis, a doutrina os classifica para fins didáticos:
*   **Direitos Civis e Políticos (1ª Geração):** Vida (Art. 3), Liberdade (Art. 4, 5, 18-21), Segurança, Propriedade (Art. 17).
*   **Direitos Econômicos, Sociais e Culturais (2ª Geração):** Trabalho (Art. 23), Educação (Art. 26), Saúde e Bem-estar (Art. 25).

## 4. Pontos Chave para Provas
*   **Vedação à Escravidão e Tortura:** Ninguém será mantido em escravidão ou submetido a tortura (Art. 4 e 5).
*   **Reconhecimento da Personalidade Jurídica:** Art. 6.
*   **Poder Público e Limites:** Ninguém será arbitrariamente preso, detido ou exilado (Art. 9).
*   **Direito de Asilo:** Direito de procurar asilo em outros países em caso de perseguição (Art. 14).
*   **Nacionalidade:** Todo ser humano tem direito a uma nacionalidade (Art. 15).
*   **Direito à Propriedade:** Tanto individual quanto coletiva (Art. 17).

## 5. Limitações aos Direitos
Os direitos não são absolutos. O Art. 29 estabelece que os direitos podem ser limitados pela lei para garantir o reconhecimento e respeito dos direitos alheios e para satisfazer as exigências da moral, da ordem pública e do bem-estar geral numa sociedade democrática.`
  },
  {
    ids: ['5ac65722ba1f2a8eb4a7f8477e130e3e', '22e53adcf1d0d7d87fe24a6616715f6a'],
    name: 'SUS',
    content: `# Sistema Único de Saúde (SUS) - Lei 8.080/90

O **SUS** é um dos maiores e mais complexos sistemas de saúde pública do mundo, garantido pela Constituição Federal de 1988 (Art. 196 a 200). A Lei 8.080/1990 é a norma que detalha sua organização e funcionamento.

## 1. Princípios Doutrinários (Éticos)
Estes são os fundamentos "filosóficos" do sistema:
1.  **Universalidade:** A saúde é um direito de todos e dever do Estado. O acesso deve ser garantido a qualquer cidadão, independente de contribuição.
2.  **Eqüidade:** Diminuir desigualdades. Tratar desigualmente os desiguais, investindo mais onde a carência é maior.
3.  **Integralidade:** O sistema deve considerar a pessoa como um todo, atendendo desde a prevenção até o tratamento de alta complexidade.

## 2. Princípios Organizativos (Operacionais)
Como o sistema se estrutura na prática:
*   **Regionalização e Hierarquização:** Os serviços devem ser organizados em níveis de complexidade crescente e distribuídos geograficamente.
*   **Descentralização:** O comando é único em cada esfera de governo (União, Estado, Município), mas com ênfase na municipalização dos serviços.
*   **Participação Comunitária (ou Controle Social):** Garantida pela Lei 8.142/90 através dos Conselhos e Conferências de Saúde.

## 3. Atribuições do SUS (Art. 6º da Lei 8.080)
O SUS não faz apenas consultas. Ele atua em:
*   Vigilância Sanitária e Epidemiológica.
*   Saúde do Trabalhador.
*   Assistência Terapêutica Integral, inclusive farmacêutica.
*   Ordenação da formação de recursos humanos na área de saúde.
*   Saneamento básico (em caráter suplementar).

## 4. O Financiamento
O financiamento é responsabilidade das três esferas de governo. Os recursos provêm do orçamento da Seguridade Social, além de outras fontes.

## 5. O Papel da Iniciativa Privada
*   A assistência à saúde é livre à iniciativa privada.
*   A iniciativa privada pode participar do SUS de forma **complementar**, quando as unidades públicas forem insuficientes.
*   Deve haver preferência pelas entidades filantrópicas e sem fins lucrativos.`
  },
  {
    ids: ['7b2fbbd440dd080eaab781fb6d0ff1dc', 'ad5bca9bb818c6a3ff0287082abf73d6'],
    name: 'Redação',
    content: `# Redação Oficial e Discursiva para Concursos

A **Redação Oficial** é a maneira pela qual o Poder Público redige atos normativos e comunicações. Segue o **Manual de Redação da Presidência da República**.

## 1. Atributos da Redação Oficial
Devem nortear todo texto oficial:
*   **Impessoalidade:** O texto é escrito em nome da instituição, não do servidor. A linguagem é objetiva.
*   **Clareza e Concisão:** O texto deve ser entendido imediatamente e dizer o máximo com o mínimo de palavras.
*   **Formalidade e Padronização:** Uso de normas gramaticais e padrões estéticos (fonte, margem).
*   **Uniformidade:** Mesmos padrões para comunicações do mesmo tipo.

## 2. O Padrão Ofício
Com o novo manual, diversos documentos (Aviso, Ofício e Memorando) foram unificados no **Padrão Ofício**. Partes do documento:
1.  **Cabeçalho:** Brasão de Armas, Nome do Órgão.
2.  **Identificação do Expediente:** Nome do documento + Número + Ano + Sigla da Unidade (Ex: Ofício nº 123/2023/GADIR).
3.  **Local e Data:** À direita ou alinhado à margem esquerda.
4.  **Endereçamento:** Destinatário (Vocativo, Cargo, Endereço).
5.  **Assunto:** Resumo do tópico tratado.
6.  **Texto:** Introdução, Desenvolvimento e Conclusão.
7.  **Fecho:** "Atenciosamente" (para autoridades de mesma hierarquia ou inferior) ou "Respeitosamente" (para autoridade superior).

## 3. Pronomes de Tratamento
*   **Vossa Excelência:** Para Chefes de Poderes, Ministros, Juízes, etc. (Vocativo: Excelentíssimo Senhor...).
*   **Vossa Senhoria:** Para demais autoridades e particulares.

## 4. Redação Discursiva (A Dissertação)
Geralmente exigida em provas, a dissertação-argumentativa exige:
*   **Introdução:** Apresentação do tema e tese.
*   **Desenvolvimento (2 ou 3 parágrafos):** Argumentos, dados, exemplos.
*   **Conclusão:** Síntese e proposta de intervenção ou fechamento lógico.`
  },
  {
    ids: ['095bee9c6d4190fafcb81524663c4755', '5f9c0ac1592041a77be63a26bda6daf6', '676e616ddc0bbd66828ae3d40f427b49'],
    name: 'Crase',
    content: `# Crase: Regência e Uso Correto

A **Crase** indica a fusão de dois fonemas iguais (contração). Geralmente ocorre entre a preposição **"a"** (exigida por um termo regente) e o artigo feminino **"a"** (que acompanha um substantivo feminino).

## 1. Regra Geral de Ouro
Substitua a palavra feminina por uma masculina equivalente.
*   Se "A" virar **"AO"** -> **Ocorre Crase**.
*   Ex: *Fui **à** feira* (Fui **ao** mercado).

## 2. Casos Obrigatórios
*   **Diante de substantivos femininos determinados:** *Entregue o livro **à** diretora.*
*   **Expressões Adverbiais Femininas (tempo, modo, lugar):** *À noite, à deriva, à direita, às pressas.*
*   **Locuções Conjuntivas e Prepositivas:** *À medida que, à exceção de.*
*   **Indicação de Horas Exatas:** *Chegarei **às** 15h.* (Exceção: quando precedido de preposição como "até", "desde", "para", a crase é facultativa ou proibida).
*   **À moda de / À maneira de:** Mesmo que a palavra "moda" esteja implícita. *Bife **à** milanesa.*

## 3. Casos Proibidos (NUNCA use)
*   Antes de palavras masculinas: *Andar **a** pé.*
*   Antes de verbos no infinitivo: *Começou **a** falar.*
*   Antes de pronomes pessoais e de tratamento (exceto senhora, senhorita e dona): *Disse **a** ela.*
*   Em expressões com palavras repetidas: *Cara **a** cara, dia **a** dia.*
*   "A" no singular antes de palavra no plural: *Refiro-me **a** festas.*

## 4. Casos Facultativos (Pode usar ou não)
*   Antes de nomes próprios femininos (uso de artigo é opcional).
*   Antes de pronomes possessivos femininos (*minha, tua, sua*).
*   Depois da preposição **ATÉ** diante de palavra feminina.`
  },
  {
    ids: ['90ffcb2495eb4ad944468870f5b625dc', '4ef22968b3f2417bf63e369f3ce032cf'],
    name: 'Juros',
    content: `# Matemática Financeira: Juros e Tabelas de Amortização

O estudo dos juros é fundamental para entender o valor do dinheiro no tempo.

## 1. Juros Simples
Os juros são calculados apenas sobre o Capital Inicial.
*   **Fórmula:** $J = C \cdot i \cdot t$
*   **Montante:** $M = C + J$ ou $M = C(1 + i \cdot t)$
*   O crescimento é linear (Progressão Aritmética).

## 2. Juros Compostos ("Juros sobre Juros")
Os juros são incorporados ao capital a cada período.
*   **Fórmula:** $M = C(1 + i)^t$
*   O crescimento é exponencial (Progressão Geométrica).
*   **Dica de Prova:** Em períodos curtos (t < 1), o juro simples rende mais que o composto. Para t=1, são iguais. Para t > 1, o composto cresce muito mais rápido.

## 3. Taxas de Juros
*   **Taxa Nominal:** Expressa em um período, mas capitalizada em outro. (Ex: 12% ao ano capitalizados mensalmente).
*   **Taxa Efetiva:** Quando o período de taxa e capitalização coincidem.
*   **Taxas Equivalentes (Compostos):** $1 + i_{anual} = (1 + i_{mensal})^{12}$

## 4. Sistemas de Amortização
Como se paga uma dívida ao longo do tempo.
*   **Sistema SAC (Sistema de Amortização Constante):**
    *   A **Amortização** é igual em todas as parcelas ($A = \text{Dívida} / \text{Prazo}$).
    *   Os **Juros** decrescem (pois incidem sobre o saldo devedor que diminui).
    *   A **Prestação** ($A + J$) também decresce ao longo do tempo.
*   **Sistema PRICE (Sistema Francês):**
    *   As **Prestações** são iguais/fixas.
    *   A Amortização cresce e os Juros decrescem dentro da parcela fixa.`
  }
];

async function main() {
  try {
    await client.connect();
    console.log("Iniciando expansão de teoria (Lote 11 - Parte 1)...");
    
    await client.query('BEGIN');
    
    for (const item of batch1) {
      console.log(`Atualizando: ${item.name}...`);
      for (const id of item.ids) {
        await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [item.content, id]);
      }
    }
    
    await client.query('COMMIT');
    console.log("Lote 11 - Parte 1 concluído com sucesso!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na atualização:", err);
  } finally {
    await client.end();
  }
}

main();
