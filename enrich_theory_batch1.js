const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

// Rich theory upgrades keyed by SubTopic ID
const upgrades = [

  // ===== LÍNGUA PORTUGUESA =====
  {
    id: '856963e5b6c29d0e23670561b062f138', // Reescritura de Frases (content_len: 317 - muito curto!)
    content: `## Reescritura de Frases (Estilo Cebraspe)

A reescritura de frases é um dos temas mais cobrados pela Cebraspe (CESPE) em provas de Língua Portuguesa, especialmente no concurso da PRF. A banca apresenta uma frase e propõe uma nova versão, afirmando que o sentido original foi mantido.

### Armadilhas Mais Comuns

**1. Voz Ativa → Voz Passiva**
- Original: "A polícia prendeu o suspeito."
- Reescrita: "O suspeito foi preso pela polícia." ✅ (sentido mantido)
- Armadilha: Mudança do agente da passiva pode alterar sentido.

**2. Substituição de Pronomes**
- Pronomes oblíquos e retos têm funções sintáticas diferentes. "O documento o convenceu" e "O documento convenceu-o" têm o mesmo sentido, mas a banca pode trocar a colocação pronominal inadequadamente.

**3. Substituição de Conectivos**
- "Embora" (concessiva) ≠ "Porque" (causal). Trocar um pelo outro altera completamente o sentido.
- "E" pode ter valor aditivo, adversativo ou conclusivo conforme o contexto.

**4. Nominalização**
- "Ele decidiu partir" → "Sua decisão foi partir" (nominalização do verbo "decidir"). Observe se o agente da ação é preservado.

### Checklist Para o Candidato
✔ O sujeito agente foi preservado?
✔ O sentido (positivo/negativo, certeza/dúvida) foi mantido?
✔ O valor semântico do conectivo foi preservado?
✔ A colocação pronominal está adequada à norma culta?`
  },

  {
    id: '75013355ec2324f679f96ab3b4f09b87', // Orações Subordinadas e Coordenadas (content_len: 458 - curto!)
    content: `## Orações Coordenadas e Subordinadas

### Orações Coordenadas
Orações independentes sintaticamente, ligadas por conjunções coordenativas (SAMPA):
- **S**índeticas Adversativas: mas, porém, todavia, contudo, entretanto → oposição
- **A**ditivas: e, nem → adição
- **M**as (adversativas, já vistas)
- **P**ropositivas Alternativas: ou, ora, quer → alternância
- **A**ão (explicativas): pois, porque → explicação
- **C**onclusivas: logo, portanto, assim, então → conclusão

### Orações Subordinadas Adverbiais (FOCO CEBRASPE)
| Tipo | Conjunção Típica | Exemplo |
|------|-----------------|---------|
| Causal | porque, pois, como | "Ficou em casa porque choveu." |
| Concessiva | embora, ainda que, mesmo que | "Estudou, embora estivesse cansado." |
| Condicional | se, caso, desde que | "Se estudar, passará." |
| Temporal | quando, enquanto, assim que | "Ligue quando chegar." |
| Final | para que, a fim de que | "Estudou para que passasse." |
| Consecutiva | tão...que, tanto...que | "Era tão difícil que desistiu." |
| Comparativa | como, tal qual, mais...do que | "É mais rápido do que parece." |
| Conformativa | conforme, segundo, como | "Fez conforme mandou." |
| Proporcional | à medida que, quanto mais | "Quanto mais estuda, mais aprende." |

### Adjetivas Restritivas × Explicativas
- **Restritiva** (sem vírgula): limita/restringe o substantivo → "O aluno que estudou passou."
- **Explicativa** (com vírgula): acrescenta info → "O aluno, que é dedicado, passou."

> 🎯 **Dica PRF**: A Cebraspe cobra muito a distinção entre causal e explicativa (pois), e entre subordinada adverbial concessiva e adversativa coordenada.`
  },

  {
    id: '07be16eb70e61cc36b282e07de659d59', // Ironia e Antítese
    content: `## Figuras de Linguagem: Ironia, Antítese e outras

As figuras de linguagem são recursos estilísticos que conferem expressividade ao texto. A Cebraspe cobra com frequência a identificação e o efeito de sentido dessas figuras.

### Figuras de Palavras (Tropos)
| Figura | Definição | Exemplo |
|--------|-----------|---------|
| **Metáfora** | Comparação implícita (sem "como") | "A vida é uma viagem." |
| **Metonímia** | Substituição de um termo por outro com relação real | "Ler Machado de Assis" (obra = autor) |
| **Catacrese** | Metáfora desgastada pelo uso | "Braço da cadeira", "pé da mesa" |
| **Sinestesia** | Mistura de sensações diferentes | "Voz macia e quente" |
| **Antonomásia** | Substituição de nome por qualidade | "O Rei do Futebol" (Pelé) |

### Figuras de Pensamento
| Figura | Definição | Exemplo |
|--------|-----------|---------|
| **Antítese** | Justaposição de ideias opostas | "Unidos na dor e na alegria." |
| **Ironia** | Dizer o contrário do que se pensa | "Que diretor competente! Perdeu o prazo de novo." |
| **Eufemismo** | Suavizar uma ideia desagradável | "Ele nos deixou" (morreu) |
| **Hipérbole** | Exagero intencional | "Já te disse um milhão de vezes!" |
| **Prosopopeia/Personificação** | Atribuir características humanas ao inanimado | "A lua chora sobre o mar." |
| **Gradação/Clímax** | Sequência de ideias em intensidade crescente | "Vim, vi, venci." |

### Figuras de Construção (Sintaxe)
- **Elipse**: Omissão de termo subentendido → "Na sala, silêncio." (havia)
- **Pleonasmo**: Repetição enfática → "Eu vi com meus próprios olhos."
- **Anáfora**: Repetição de palavra no início de frases → "Amor que tarda, amor que dói, amor que cura."

> 🎯 **Dica PRF**: A Cebraspe frequentemente confunde ironia com antífrase e metáfora com comparação. Memorize: metáfora = sem "como"; comparação = com "como/tal qual".`
  },

  {
    id: '5c75bb876d42aee74a59f7e452622d1b', // Operações com Conjuntos
    content: `## Teoria dos Conjuntos: Operações e Aplicações

### Notação e Conceitos Básicos
- **Conjunto**: Coleção bem definida de elementos → A = {1, 2, 3}
- **Elemento**: Cada objeto do conjunto → 2 ∈ A; 5 ∉ A
- **Subconjunto**: A ⊆ B significa que todo elemento de A está em B

### Operações Fundamentais
| Operação | Símbolo | Definição | Exemplo (A={1,2,3}, B={2,3,4}) |
|----------|---------|-----------|-------------------------------|
| **União** | A ∪ B | Elementos de A ou B | {1,2,3,4} |
| **Interseção** | A ∩ B | Elementos em A e B | {2,3} |
| **Diferença** | A - B | Elementos de A que não estão em B | {1} |
| **Complementar** | Aᶜ | Elementos do universo que não estão em A | depende do universo |

### Fórmula do Diagrama de Venn (2 conjuntos)
**n(A ∪ B) = n(A) + n(B) - n(A ∩ B)**

**Exemplo PRF**:
Numa turma de 40 alunos, 25 estudam Direito, 20 estudam Português, e 10 estudam os dois. Quantos não estudam nenhum?
- n(D ∪ P) = 25 + 20 - 10 = 35
- Nenhum dos dois: 40 - 35 = **5 alunos**

### Fórmula para 3 Conjuntos
n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A∩B) - n(A∩C) - n(B∩C) + n(A∩B∩C)

> 🎯 **Dica PRF**: Questões de conjuntos com 3 grupos são clássicas na Cebraspe. Monte sempre o diagrama de Venn antes de calcular — evita erros com as interseções triplas.`
  },

  {
    id: '2a9f0350c80a9a53d9dfa1b35daeff26', // Probabilidade Complexa
    content: `## Probabilidade: Princípios e Aplicações

### Conceito Fundamental
P(E) = (casos favoráveis) / (casos possíveis)

A probabilidade é sempre um número entre 0 e 1 (0% a 100%).

### Probabilidade de Eventos Compostos
| Tipo | Fórmula | Quando usar |
|------|---------|-------------|
| **A e B (independentes)** | P(A∩B) = P(A) × P(B) | Eventos que não se influenciam |
| **A ou B (excludentes)** | P(A∪B) = P(A) + P(B) | Eventos que não ocorrem juntos |
| **A ou B (não excludentes)** | P(A∪B) = P(A) + P(B) - P(A∩B) | Casos gerais |
| **A dado B (condicional)** | P(A|B) = P(A∩B) / P(B) | Já sabe que B ocorreu |

### Exemplo Clássico (Estilo PRF/Cebraspe)
Uma urna tem 4 bolas vermelhas e 6 azuis. Retirando 2 bolas sem reposição, qual a probabilidade de ambas serem vermelhas?
- P = (4/10) × (3/9) = 12/90 = **2/15 ≈ 13,3%**

### Probabilidade Complementar
P(Ā) = 1 - P(A)
"Probabilidade de ao menos uma" = 1 - P(nenhuma)

> 🎯 **Dica PRF**: A Cebraspe adora usar "ao menos um" → sempre use o complementar!`
  },

  {
    id: 'f1c3c7cee55ec436339e679c8658fbb9', // Equações de 1º e 2º Grau
    content: `## Equações de 1º e 2º Grau

### Equação de 1º Grau
Formato: ax + b = 0 → x = -b/a

**Resolução**: isolar a incógnita realizando operações inversas em ambos os lados.

Exemplo: 3x - 9 = 0 → 3x = 9 → x = 3

### Equação de 2º Grau
Formato: ax² + bx + c = 0 (a ≠ 0)

**Fórmula de Bhaskara**:
Δ = b² - 4ac
x = (-b ± √Δ) / 2a

**Análise do discriminante (Δ)**:
- Δ > 0: duas raízes reais distintas
- Δ = 0: uma raiz real (raiz dupla)
- Δ < 0: sem raízes reais (raízes complexas)

**Relações de Girard** (Soma e Produto das Raízes):
- x₁ + x₂ = -b/a
- x₁ × x₂ = c/a

Exemplo: x² - 5x + 6 = 0
Δ = 25 - 24 = 1; x = (5 ± 1) / 2 → x = 3 ou x = 2

### Sistemas de Equações
**Método da Substituição** e **Adição** são os mais cobrados.

Exemplo PRF: Um policial percorreu 400 km em 5h. A metade do percurso foi a 90 km/h e a outra metade a x km/h. Determine x.
- Tempo1 = 200/90; Tempo2 = 200/x
- 200/90 + 200/x = 5 → resolva para x ≈ 69,2 km/h

> 🎯 **Dica**: Cebraspe frequentemente envolve equações em problemas de mistura, velocidade e porcentagem.`
  },

  // ===== DIREITO CONSTITUCIONAL =====
  {
    id: '403f92c8504e60bb254a29fdd1c4f427', // Diagramas de Venn → na verdade é subtópico de conjuntos, já tratado
    // Vamos atualizar outro
  },
];

// Remove a entrada undefined (id undefined que inserimos por engano)
const validUpgrades = upgrades.filter(u => u && u.id && u.content);

async function main() {
  try {
    await client.connect();
    console.log(`Updating ${validUpgrades.length} subtopics...`);

    for (const u of validUpgrades) {
      await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [u.content, u.id]);
      console.log(`Updated: ${u.id}`);
    }

    console.log('Done!');
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
main();
