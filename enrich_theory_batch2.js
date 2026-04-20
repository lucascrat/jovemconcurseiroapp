const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const upgrades = [

  // Orações Subordinadas
  {
    id: 'a846a71f283a9b2cc832198da14a7424', // Lógica de Argumentação
    content: `## Lógica de Argumentação (Silogismos e Inferências)

### Estrutura do Argumento
Um argumento é composto por **premissas** (hipóteses) e uma **conclusão**. O argumento é **válido** se a conclusão decorre necessariamente das premissas, independente de serem verdadeiras.

### Formas Válidas de Inferência

**Modus Ponens** (afirmação do antecedente):
- P1: Se P → Q
- P2: P é verdadeiro
- Conclusão: Q é verdadeiro ✅

**Modus Tollens** (negação do consequente):
- P1: Se P → Q
- P2: Q é falso (¬Q)
- Conclusão: P é falso (¬P) ✅

**Silogismo Hipotético**:
- P1: Se P → Q; P2: Se Q → R → Conclusão: P → R ✅

### Falácias Comuns (invalidas)
- **Afirmação do consequente**: "Se chove → rua molha. Rua molhou → choveu." ❌ (pode ter outro motivo)
- **Negação do antecedente**: "Se P → Q. ¬P → ¬Q." ❌

### Contrapositiva
P → Q é logicamente equivalente a ¬Q → ¬P.
Exemplo: "Todo servidor honesto é promovido" ≡ "Quem não foi promovido não é honesto."

### Quantificadores
- "Todo A é B" — nega-se com "Algum A não é B"
- "Nenhum A é B" — nega-se com "Algum A é B"
- "Algum A é B" — nega-se com "Nenhum A é B"

> 🎯 **Dica PRF**: A Cebraspe adora pedir a negação de proposições com "todo", "nenhum" e "algum". Memorize as negações!`
  },

  {
    id: '084a7c196c7cb3affd64833eb3f3b487', // Estruturas Lógicas
    content: `## Estruturas Lógicas (Tabelas-Verdade)

### Conectivos Lógicos e Seus Valores
| Conectivo | Símbolo | Nome | Falso apenas quando... |
|-----------|---------|------|----------------------|
| Negação | ¬P | "não P" | P é verdadeiro |
| Conjunção | P ∧ Q | "P e Q" | Pelo menos um é falso |
| Disjunção | P ∨ Q | "P ou Q" | Ambos são falsos |
| Condicional | P → Q | "Se P, então Q" | P verdadeiro e Q falso |
| Bicondicional | P ↔ Q | "P se e somente se Q" | P e Q têm valores opostos |

### Tabela-Verdade Completa (P e Q)
| P | Q | ¬P | P∧Q | P∨Q | P→Q | P↔Q |
|---|---|----|----|-----|-----|-----|
| V | V | F | V | V | V | V |
| V | F | F | F | V | F | F |
| F | V | V | F | V | V | F |
| F | F | V | F | F | V | V |

### Tautologias Importantes
- P ∨ ¬P = sempre verdadeiro (princípio do terceiro excluído)
- P → Q ≡ ¬P ∨ Q (o condicional pode ser reescrito como disjunção)
- ¬(P ∧ Q) ≡ ¬P ∨ ¬Q (De Morgan)
- ¬(P ∨ Q) ≡ ¬P ∧ ¬Q (De Morgan)

### Equivalências Lógicas (Exigidas pela Cebraspe)
- Contrapositiva: P→Q ≡ ¬Q→¬P
- Negação do condicional: ¬(P→Q) ≡ P ∧ ¬Q
- Negação da conjunção: ¬(P∧Q) ≡ ¬P∨¬Q

> 🎯 **Dica PRF**: A questão clássica pede a negação de "Se P então Q". A resposta é "P e não Q" — não é "Se P então não Q"!`
  },

  // ===== DIREITO ADMINISTRATIVO =====
  {
    id: 'df991c79b48abbb03a90544fdbd12e19', // Direitos e Garantias Fundamentais
    content: `## Direitos e Garantias Fundamentais (Art. 5º CF/88)

O art. 5º da CF/88 consagra os direitos e garantias individuais e coletivos — cláusula pétrea (art. 60, §4°, IV).

### Características dos Direitos Fundamentais
- **Universalidade**: Aplicam-se a todos (brasileiros e estrangeiros residentes)
- **Relatividade**: Nenhum direito é absoluto
- **Cumulabilidade**: Podem ser exercidos simultaneamente
- **Irrenunciabilidade**: O titular não pode renunciá-los definitivamente
- **Imprescritibilidade**: Não se extinguem pelo não uso

### Principais Remédios Constitucionais (art. 5°)
| Remédio | Protege | Impetrado por |
|---------|---------|---------------|
| **Habeas corpus** (LXVIII) | Liberdade de locomoção | Qualquer pessoa |
| **Mandado de segurança** (LXIX) | Direito líquido e certo | Pessoa física ou jurídica |
| **Habeas data** (LXXII) | Dados pessoais em registros públicos | Interessado |
| **Mandado de injunção** (LXXI) | Falta de norma regulamentadora | Quem tem direito inviabilizado |
| **Ação popular** (LXXIII) | Patrimônio público | Cidadão (eleitor) |

### Direitos Mais Cobrados pela Cebraspe
- **Legalidade**: Ninguém é obrigado a fazer nada senão em virtude de lei (II)
- **Igualdade**: Homens e mulheres são iguais em direitos e obrigações (I)
- **Inviolabilidade do domicílio** (XI): Casa é asilo inviolável. Exceções: flagrante, desastre, socorro, ou determinação judicial diurna
- **Devido processo legal** (LIV): Ninguém será privado de liberdade ou bens sem ele
- **Contraditório e ampla defesa** (LV): Garantidos aos litigantes e acusados em geral
- **Presunção de inocência** (LVII): Ninguém é culpado antes do trânsito em julgado

> 🎯 **Dica PRF**: A Cebraspe distingue HC (locomoção) de MS (direito líquido e certo). Memorize: HC não precisa de advogado; MS sim.`
  },

  {
    id: '8e3523a969237625de3adecb6749fb59', // O que é Ética?
    content: `## Ética: Conceitos Fundamentais Aplicados ao Serviço Público

### O que é Ética?
Ética é a ciência que estuda o comportamento humano sob o aspecto do bem e do mal, do certo e do errado, com base em valores e princípios morais. No serviço público, a ética representa o dever de agir com honestidade, transparência e respeito ao interesse coletivo.

### Moral × Ética × Direito
| Dimensão | Natureza | Sanção | Exemplo |
|----------|----------|--------|---------|
| **Moral** | Individual/subjetiva | Consciência, rejeição social | Mentir para um amigo |
| **Ética** | Social/coletiva | Reprovação do grupo | Usar cargo para benefício pessoal |
| **Direito** | Norma jurídica estatal | Coercitiva (pena, multa) | Peculato, concussão |

### Princípios Éticos do Servidor Público (Decreto 1.171/94)
O Código de Ética dos Servidores Públicos Civis Federais estabelece:
- **Honestidade**: Não usar o cargo para fins pessoais
- **Probidade**: Atuar com retidão e boa-fé
- **Lealdade**: Fidelidade às instituições e à lei
- **Imparcialidade**: Tratar todos os cidadãos igualmente
- **Discrição**: Manter sigilo das informações protegidas

### Ética e a PRF
O policial rodoviário federal está sujeito a deveres éticos específicos:
- Não aceitar vantagens indevidas de infratores
- Tratar todos os usuários da rodovia com respeito e urbanidade
- Agir com proporcionalidade e razoabilidade no uso da força
- Prestar contas de suas ações à chefia e à sociedade

### Consequências da Violação Ética
- Processo administrativo disciplinar (PAD)
- Demissão em caso de improbidade ou abandono de cargo
- Responsabilização penal (corrupção passiva, concussão)`
  },

  {
    id: 'b4e487995c9b979cf5a49195e87fb46f', // Comissão de Ética
    content: `## Comissão de Ética (Decreto 1.171/94 e Decreto 6.029/07)

### O que é a Comissão de Ética?
É o órgão colegiado responsável por orientar, aconselhar e fiscalizar o cumprimento das normas éticas pelos servidores públicos federais. Cada órgão da administração pública federal deve ter uma Comissão de Ética.

### Composição
- 3 membros titulares e 3 suplentes
- Escolhidos entre servidores de nível superior
- Mandato de 3 anos, renovável uma vez
- Indicados pelo dirigente máximo do órgão

### Competências da Comissão de Ética
1. **Apurar** irregularidades éticas denunciadas ou identificadas de ofício
2. **Aplicar** penas de censura ética
3. **Recomendar** ao órgão a instauração de PAD quando houver indício de infração grave
4. **Orientar** os servidores sobre condutas éticas adequadas
5. **Divulgar** o Código de Ética periodicamente

### Diferença: Comissão de Ética × Corregedoria × PAD
| Instância | Natureza | Pena Máxima |
|-----------|----------|-------------|
| Comissão de Ética | Ética/disciplinar leve | Censura ética |
| PAD (Lei 8.112) | Administrativo | Demissão |
| Ação Judicial | Penal/Civil | Reclusão, ressarcimento |

> 🎯 **Dica PRF**: A Comissão de Ética não aplica demissão — apenas censura ética. Para demissão, exige-se PAD com contraditório e ampla defesa.`
  },

  {
    id: '99cd02aabed98c05c9e8fd87e44e9770', // Deveres do Cidadão
    content: `## Deveres e Direitos do Cidadão frente à Administração Pública

### Fundamento Constitucional
A CF/88 estabelece que a Administração Pública serve ao interesse público e ao cidadão (art. 37). O cidadão é o destinatário dos serviços públicos e tem tanto direitos quanto deveres em sua relação com o Estado.

### Direitos do Cidadão
- **Direito à informação** (art. 5°, XXXIII): acesso a informações de interesse particular ou geral, resguardadas as sigilosas
- **Direito de petição** (art. 5°, XXXIV, a): peticionar aos poderes públicos sem pagamento de taxas
- **Direito à certidão** (art. 5°, XXXIV, b): obter certidões de repartições públicas
- **Direito à participação** (art. 37): controle dos atos administrativos
- **Direito à razoável duração do processo** (art. 5°, LXXVIII)

### Deveres do Cidadão
- Pagar impostos e tributos (art. 145 CF)
- Votar obrigatoriamente (art. 14, §1°)
- Prestar serviço militar obrigatório (art. 143)
- Respeitar as leis e normas do convívio social
- Colaborar com as autoridades (testemunhos, denúncias)

### Lei de Acesso à Informação (LAI - Lei 12.527/11)
- Toda informação pública é acessível por padrão
- O sigilo é exceção e deve ser justificado
- Prazo de resposta: **20 dias** (prorrogável por mais 10)
- Órgão de recurso: CGU (Controladoria-Geral da União)

> 🎯 **Dica PRF**: A LAI é cobrada em concursos policiais. Memorize: o prazo é 20+10 dias e o sigilo pode ser de 5, 15 ou 25 anos conforme a classificação.`
  },

  // ===== INFORMÁTICA =====
  {
    id: 'd90e8e035c4d428acdcfb64896882380', // Médias Simples e Ponderadas
    content: `## Médias Estatísticas Aplicadas

### Média Aritmética Simples
MA = (x₁ + x₂ + ... + xₙ) / n

Exemplo: Notas de um aluno: 7, 8, 6, 9
MA = (7+8+6+9) / 4 = 30/4 = **7,5**

### Média Aritmética Ponderada
MAP = (x₁·p₁ + x₂·p₂ + ... + xₙ·pₙ) / (p₁ + p₂ + ... + pₙ)

Exemplo: Nota da prova (peso 3) = 8; Trabalho (peso 2) = 6
MAP = (8×3 + 6×2) / (3+2) = (24+12)/5 = 36/5 = **7,2**

### Mediana
Valor central dos dados ordenados.
- N ímpar: elemento central
- N par: média dos dois centrais

Dados: 3, 5, 7, 9, 11 → Mediana = **7**
Dados: 2, 4, 6, 8 → Mediana = (4+6)/2 = **5**

### Moda
O valor que aparece com maior **frequência**.
Dados: 1, 2, 2, 3, 4, 4, 4, 5 → Moda = **4** (aparece 3 vezes)

### Resumo Comparativo
| Medida | Quando usar |
|--------|------------|
| Média | Dados sem extremos discrepantes |
| Mediana | Quando houver outliers (salários, renda) |
| Moda | Dados qualitativos ou frequência |

> 🎯 **Dica PRF**: Em questões de "salário médio", prefira mediana quando houver extremos. A Cebraspe costuma perguntar qual medida é mais representativa em cenários específicos.`
  },

];

const validUpgrades = upgrades.filter(u => u && u.id && u.content);

async function main() {
  try {
    await client.connect();
    console.log(`Updating ${validUpgrades.length} subtopics (Batch 2)...`);
    for (const u of validUpgrades) {
      await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [u.content, u.id]);
      console.log(`Updated: ${u.id}`);
    }
    console.log('Batch 2 done!');
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
main();
