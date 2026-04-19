const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

// Macetes organizados por SubTopic ID
// Formato: appended ao final do content existente
const macetes = {

  // ===== LÍNGUA PORTUGUESA =====
  '477c22cb72ee3c438957c96abbfce5f6': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Interpretação de Texto:**\n> "A resposta ESTÁ no texto. Não invente, não extrapole."\n\n🔑 **Palavras-armadilha da Cebraspe:**\n- "apenas", "somente", "exclusivamente" → costumam tornar a afirmação FALSA\n- "é possível inferir que" → a inferência precisa estar no texto, não na sua opinião\n- "necessariamente" → exige certeza absoluta; se houver exceção, é falso\n\n📌 **Sequência de leitura eficiente:**\n1. Leia as questões ANTES do texto\n2. Grife as palavras-chave nas questões\n3. Leia o texto procurando especificamente esses termos\n4. Marque a resposta apenas com base no que está escrito\n\n⚡ **Pegadinha clássica:** A banca diz que o autor "defende" algo que ele apenas "menciona como possibilidade". Atenção ao grau de certeza das afirmações!`,

  '95127b28dfca6ad62306b1e94a527d4d': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Acento Gráfico:**\n> "Proparoxítona: SEMPRE acentuada. Memorize as regras das paroxítonas e oxítonas."\n\n🔑 **Reforma Ortográfica 2009 — O que mudou e que CAI:**\n- Trema ELIMINADO (exceto em nomes próprios estrangeiros)\n- Acento diferencial ELIMINADO: "pelo/pélo", "polo/pólo", "para/pára"\n- Exceções que MANTÉM acento: pôde (passado) ≠ pode (presente); pôr (verbo) ≠ por (preposição)\n\n📌 **Hiato vs. Ditongo:**\n- Hiato com i/u tônicos após vogal → acento: saída, baú, Piauí\n- Exceção QUE CAI: "feiura", "baiuca", "boiuna" — SEM acento (ditongo antes)\n\n⚡ **Questão clássica:** "Creem", "leem", "veem" NUNCA levam acento (plural de 3ª pessoa — reforma 2009 eliminou o acento circunflexo nesse caso). A Cebraspe ainda testa esse ponto!`,

  '6cbe20a9b3a46bc360313d8a278cd8e3': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Sinônimos e Antônimos:**\n> "O contexto manda. Uma palavra tem vários sentidos; escolha o que combina com o texto."\n\n🔑 **Palavras polissêmicas cobradas:**\n- "Certo": determinado (um certo dia) / correto (a resposta certa)\n- "Banco": assento / instituição financeira / banco de dados\n- "Lima": fruta / ferramenta / cidade\n\n📌 **Sinonímia no contexto da Cebraspe:**\nA banca propõe substituição de uma palavra e pergunta se o sentido foi mantido. Sempre teste a substituição dentro da frase, não de forma isolada.\n\n⚡ **Macete rápido:** Se a questão diz "sem prejuízo de sentido", verifique:\n1. Classe gramatical compatível?\n2. Regência idêntica?\n3. Conotação (positivo/negativo) preservada?`,

  '27dec939eb1f008dd8be2e3d026059e5': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Conjunções:**\n> "MAS ENTÃO PORÉM (adversativas) = CONTUDO, TODAVIA, ENTRETANTO — todos intercambiáveis em sentido!"\n\n🔑 **Quadro de valores semânticos:**\n| Valor | Conjunção | Palavra-chave |
|-------|-----------|---------------|
| Adição | e, nem, mas também | SOMA |
| Adversidade | mas, porém, contudo | OPOSIÇÃO |
| Conclusão | logo, portanto, então | CONSEQUÊNCIA |
| Explicação | pois, porque (antes do verbo) | JUSTIFICATIVA |
| Alternância | ou, ora...ora | OPÇÃO |

📌 **Armadilha — "pois":**\n- Pois ANTES do verbo principal = EXPLICAÇÃO (coord.)\n- Pois DEPOIS do verbo = CAUSA (subordinada causal)\n- Ex: "Estude, pois a prova é amanhã." (explicação) vs "Ficou reprovado pois não estudou." (causa)`,

  'f5ccc28404e9d8f5b4a2a03035e1aa16': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Pronomes:**\n> "EU, TU, ELE fazem / A MIM, A TI, A ELE pedem"\n\n🔑 **Colocação pronominal — regras rápidas:**\n- Início de oração: NUNCA use pronome oblíquo átono → "Me disse" ❌ → "Disse-me" ✅\n- Após palavra negativa: próclise → "Não me disse nada."\n- Após vírgula, ponto e vírgula: próclise\n- Verbo no infinitivo ou gerúndio em final de locução → ênclise ao infinitivo\n\n📌 **"O" vs "LO" vs "NO":**\n- Verbo termina em R, S, Z → corta + adiciona LO/LOS/LA/LAS\n- Ex: "fiz + o" = "fi-lo"; "queremos + a" = "queremo-la"\n- Verbo termina em ditongo nasal (am, em, ão) → NO/NOS/NA/NAS\n- Ex: "fizeram + os" = "fizeram-nos"\n\n⚡ **Pegadinha:** "Ele o viu" vs "Ele viu-o" — ambas corretas conforme o contexto. A Cebraspe pode dar as duas como corretas ou incorretas dependendo da frase.`,

  '2e044933950e947b94a13391ebe8e17b': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Concordância:**\n> "HAVER e FAZER impessoais: NUNCA pluralizam!"\n\n🔑 **Os 5 erros mais cobrados pela Cebraspe:**\n1. ~~"Haviam"~~ → "Havia muitas pessoas" ✅\n2. ~~"Fazem"~~ dois anos → "Faz dois anos" ✅\n3. ~~"Existem"~~ um jeito → "Existe um jeito" ✅\n4. "A maioria DOS alunos ~~foram~~" → "foi" ✅ (núcleo = maioria)\n5. "Um dos que ~~chegou~~" → "chegaram" ✅ (o verbo concorda com "que" = plural)\n\n📌 **Macete do "SE":**\n- SE = índice de indeterminação + verbo intransitivo/transitivo indireto → singular\n- SE = partícula apassivadora + verbo transitivo direto → concorda com sujeito paciente\n- "Vende-se casas" ❌ → "Vendem-se casas" ✅ (apassivadora)`,

  'f12e7ad2f333ecd3dacd29a923ea2b6c': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Regência:**\n> "VISAR, ASPIRAR, OBEDECER, ASSISTIR (ver) — todos pedem A!"\n\n🔑 **Lista dos verbos que mais caem:**\n| Verbo | Preposição | Crase? |
|-------|-----------|--------|
| Assistir (ver) | a | Sim se feminino |
| Visar (almejar) | a | Sim se feminino |
| Aspirar (desejar) | a | Sim se feminino |
| Preferir | a | Sim se feminino |
| Agradar (satisfazer) | a | Sim se feminino |
| Simpatizar | com | Sem crase "com" |
| Implicar (acarretar) | sem prep | Sem crase |

📌 **Macete da crase — Teste do "ao":**\nSubstitua a palavra feminina por uma masculina. Se ficar "ao", tem crase.\n"Fui à escola" → "Fui ao colégio" → TEM CRASE ✅\n"Cheguei a tempo" → "Cheguei a momento" → SEM CRASE`,

  'b2a79a62a1f96077a0150c5e4e5da975': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Ponto e Vírgula:**\n> "Vírgula separa o miúdo; ponto e vírgula separa o grande dentro do maior."\n\n🔑 **As 3 situações que mais caem:**\n1. **PROIBIDO:** Vírgula entre sujeito e verbo → "O policial, apreendeu..." ❌\n2. **OBRIGATÓRIO:** Vírgula isola aposto, vocativo e adjunto deslocado\n3. **PEGADINHA:** "... e" antes de oração com sujeito diferente → vírgula antes de "e"\n\n📌 **Macete do Vocativo:**\nVocativo = chamamento direto. Sempre entre vírgulas.\n"Candidato, preste atenção." / "Preste atenção, candidato." / "Preste atenção, candidato, no tempo."\n\n⚡ **FGV vs Cebraspe no uso das aspas:**\n- Cebraspe: usa aspas para ironia → "O inspetor 'trabalhou' o dia todo"\n- FGV: cobra a diferença entre aspas de ironia e aspas de citação`,

  // ===== RACIOCÍNIO LÓGICO =====
  '084a7c196c7cb3affd64833eb3f3b487': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Tabela Verdade:**\n> "O condicional só é FALSO quando o antecedente é VERDADEIRO e o consequente é FALSO. O famoso V→F=F"\n\n🔑 **Macete da Negação (mais cobrado!):**\n| Proposição | Negação |
|------------|---------|
| Todo A é B | Algum A NÃO é B |
| Nenhum A é B | Algum A É B |
| Algum A é B | Nenhum A é B |
| Se P então Q | P e NÃO Q |
| P e Q | NÃO P ou NÃO Q (De Morgan) |
| P ou Q | NÃO P e NÃO Q (De Morgan) |

📌 **Equivalências imprescindíveis:**\n- P→Q ≡ ¬P∨Q ≡ ¬Q→¬P (contrapositiva)\n- ¬(P→Q) ≡ P∧¬Q\n\n⚡ **Pegadinha clássica:** A negação de "Se chove, levo guarda-chuva" NÃO é "Se não chove, não levo guarda-chuva" — isso é a INVERSÃO (inválida). A negação correta é "Chove E não levo guarda-chuva."`,

  'a846a71f283a9b2cc832198da14a7424': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Silogismos:**\n> "Se a conclusão contradiz uma premissa, o argumento é inválido. Se decorre necessariamente, é válido."\n\n🔑 **Os 4 tipos de proposições categóricas:**\n- **A** (Universal afirmativa): "Todo S é P"\n- **E** (Universal negativa): "Nenhum S é P"\n- **I** (Particular afirmativa): "Algum S é P"\n- **O** (Particular negativa): "Algum S não é P"\n\n📌 **Diagrama de Venn para silogismos:**\nSempre desenhe círculos para visualizar:\n- P1: Todo policial (P) é honesto (H) → P dentro de H\n- P2: João é policial (P) → João dentro de P → João dentro de H\n- Conclusão válida: João é honesto ✅\n\n⚡ **Armadilha frequente:** "Todo A é B; Todo B é C; logo todo C é A" → INVÁLIDO! A → B → C não implica C → A.`,

  '403f92c8504e60bb254a29fdd1c4f427': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Conjuntos:**\n> "n(A∪B) = n(A) + n(B) - n(A∩B). Sempre subtraia a interseção para não contar duas vezes!"\n\n🔑 **Sequência para problemas de Venn:**\n1. Leia o problema e identifique os grupos e a interseção\n2. Desenhe os círculos\n3. Preencha de DENTRO para FORA (interseção primeiro)\n4. Calcule o que está fora dos dois círculos por subtração do total\n\n📌 **Macete dos 3 conjuntos:**\nSe o problema tem 3 grupos (A, B, C), procure o dado da interseção tripla (A∩B∩C) e preencha o centro do Venn primeiro, depois as interseções duplas, por fim os únicos.\n\n⚡ **Erro clássico:** Em "tanto A quanto B" — isso significa A∩B (quem está nos dois). Não confunda com "A ou B" (união).`,

  'a185a7a85d53df406954109d999c992d': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Porcentagem:**\n> "Aumentar X% e depois diminuir X% NÃO volta ao valor original! Há sempre uma perda."\n\n🔑 **Fórmula dos juros compostos simples para % encadeada:**\n- Aumento de 20% = × 1,20\n- Desconto de 15% = × 0,85\n- Dois aumentos: 10% + 20% = × 1,10 × 1,20 = × 1,32 = aumento de 32%\n\n📌 **Macete do desconto sucessivo:**\n"Desconto de 10% e depois 20%" ≠ desconto de 30%\nCálculo: 0,90 × 0,80 = 0,72 → desconto real de 28%\n\n⚡ **Pegadinha de concurso:** "O preço subiu 50% e depois baixou 50%. Qual o preço final?"\nR$ 100 → +50% = R$ 150 → -50% = R$ 75. PERDEU 25%, não voltou ao início!`,

  'ff729c3b4ea287d44bebb8020fd59e40': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Combinatória:**\n> "ARRANJO = importa a ORDEM (A de Arranjo = A de Alinhado). COMBINAÇÃO = não importa a ordem."\n\n🔑 **Quando usar cada fórmula:**\n| Situação | Fórmula | Mnemônico |
|----------|---------|-----------|
| Permutação simples | n! | Todos ocupam todos os lugares |
| Arranjo | n!/(n-p)! | Ordem importa, p escolhidos |
| Combinação | n!/[p!(n-p)!] | Ordem NÃO importa |
| Com repetição | nᵖ | Pode repetir, ordem importa |

📌 **Macete do "importa a ordem?":**\n- Senha de banco (1234 ≠ 4321) → ARRANJO\n- Comitê de 3 pessoas de um grupo (ABC = BAC) → COMBINAÇÃO\n- Anagrama de palavra → PERMUTAÇÃO\n\n⚡ **Pegadinha:** Elementos REPETIDOS na permutação → divide pelo fatorial de cada grupo.`,

  // ===== DIREITO CONSTITUCIONAL =====
  '1dab0038320d11c5102a4793a5c39867': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Art. 5° da CF:**\n> "LEGALIDADE: só o que a lei ordena. IGUALDADE: tratar desiguais desigualmente na medida da desigualdade."\n\n🔑 **Incisos mais cobrados pela Cebraspe:**\n- II: Legalidade → ninguém faz nada sem lei que ordene\n- X: Inviolabilidade de intimidade, vida privada, honra e imagem\n- XI: Casa é asilo → invasão: flagrante (dia/noite), desastre, socorro (dia/noite), judicial (só de dia)\n- XII: Sigilo de comunicações → quebra só por ordem judicial (exceto fiscal e bancário)\n- XVI: Reunião → aviso à autoridade, local aberto, sem prejudicar outra reunião\n- XXXV: Inafastabilidade do Judiciário\n- LXIII: Preso tem direito de ficar calado e de ter advogado\n\n📌 **Macete das prisões (art. 5°, LXI):**\nCabem prisões: em FLAGRANTE ou por ORDEM ESCRITA E FUNDAMENTADA do juiz.\nExceção constitucional: transgressão militar ou crime propriamente militar.`,

  '33fd990e1c25cb7e3c2f28fd05b1294f': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Controle de Constitucionalidade:**\n> "ADI ataca; ADC defende; ADPF é o coringa (subsidiária)"\n\n🔑 **Cebraspe adora confundir:**\n- ADI: lei federal OU estadual vs CF → efeito erga omnes + vinculante\n- ADC: só lei FEDERAL → declara constitucional (afasta dúvidas)\n- ADPF: leis municipais, leis pré-88, normas que não cabem ADI → subsidiária\n- ADO: omissão do legislador — STF dá ciência ao órgão para sanar\n\n📌 **Macete dos legitimados (art. 103):**\n→ MESA (Mesa do CN, Senado, Câmara, Assembleia Estadual)\n→ PRESIDENTE (Presidente da República e dos Partidos Políticos)\n→ PGR, OAB, CONFEDERAÇÕES, GOVERNADORES\nTotal: 9 legitimados\n\n⚡ **Pegadinha:** O STF pode MODULAR efeitos (dar eficácia ex nunc ou pro futuro) por maioria de 2/3, por razão de segurança jurídica ou excepcional interesse social.`,

  'b3c0fc4c03cbb9555f5d685425b2cbaa': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Processo Legislativo:**\n> "LC = maioria ABSOLUTA. LO = maioria SIMPLES. EC = 3/5 em 2 turnos em CADA Casa."\n\n🔑 **Macete dos quóruns — "SACAL":**\n- **S**imples: LO (maioria dos presentes)\n- **A**bsoluta: LC, aprovação de MP, maioria especial\n- **C**ualificada 3/5: emendas constitucionais (2 turnos por casa)\n- **A**bsoluta 2/3: superar veto, modular efeitos no STF\n- **L**imitação: matérias que EC não pode alterar (cláusula pétrea)\n\n📌 **MP (Medida Provisória) — pontos que a Cebraspe cobra:**\n- Editada pelo Presidente em urgência e relevância\n- Vigência: 60 + 60 dias (prorrogada automaticamente)\n- Tranca a pauta depois de 45 dias\n- PROIBIDA para: Direito Penal (salvo benéfica), Eleitoral, Processual Penal, organização do Judiciário\n\n⚡ **Pegadinha clássica:** MP pode tratar de matéria penal? SIM, se for para BENEFICIAR o réu (in dubio pro reo). A proibição é para norma penal que piore a situação.`,

  // ===== DIREITO ADMINISTRATIVO =====
  '5098aace183a1a4ee3d9057e0bb8062a': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — LIMPE:**\n> "Lembrem-se: o PARTICULAR pode fazer tudo que não é proibido. A ADM só faz o que a lei PERMITE."\n\n🔑 **Os princípios que mais geram questões erradas:**\n- **Impessoalidade:** Os atos são da ADM, não do AGENTE. A publicidade de atos não pode ter nome do agente (vide propaganda governamental)\n- **Moralidade:** Inclui boa-fé, probidade, lealdade — é autônomo do princípio da legalidade!\n- **Eficiência:** Único que foi trazido pela EC 19/98 (os outros 4 já estavam na CF desde 1988)\n\n📌 **Princípios implícitos mais cobrados:**\n- Autotutela: adm. pode anular (atos ilegais) e revogar (inconvenientes) de ofício\n- Segurança jurídica: prazo de 5 anos para anular atos favoráveis ao administrado\n- Razoabilidade/Proporcionalidade: meios adequados e necessários ao fim\n\n⚡ **Cebraspe adora:** "A Administração pode revogar atos vinculados?" → NÃO! Só atos discricionários. Atos vinculados só são anulados, nunca revogados por conveniência.`,

  '3c4d236ddbcdbbaccd761cd3f452e079': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Poder de Polícia:**\n> "DICA: Discricionariedade, Imperatividade, Coercibilidade, Auto-executoriedade"\n\n🔑 **O que a Cebraspe adora perguntar:**\n- A cobrança de multa NÃO é auto-executória — precisa de processo de execução fiscal\n- O poder de polícia pode ser DELEGADO a pessoas jurídicas de direito público\n- NÃO pode ser delegado a pessoa jurídica de direito PRIVADO (ex: empresa terceirizada não pode multar)\n\n📌 **Ciclo de polícia (memorize a ordem):**\nOrdem → Consentimento → Fiscalização → Sanção\n\n⚡ **Pegadinha:** "DETRAN pode multar?" → Sim, é autarquia (PJ de direito público).\n"Empresa concessionária pode multar?" → SIM nas rodovias federais concedidas, por expressa previsão contratual e legal — esse é um ponto controvertido que a Cebraspe já cobrou como certo!`,

  '3a8286b494b0fb8a9a2da354090faf8c': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Responsabilidade Civil do Estado:**\n> "Ação do estado = OBJETIVA (sem provar culpa). Omissão = SUBJETIVA (precisa provar culpa)."\n\n🔑 **Tabela decisiva:**\n| Situação | Tipo | O que provar |
|----------|------|-------------|
| Viatura da PRF bate em carro | Objetiva | Só dano + nexo causal |
| Buraco na estrada não arrumado | Subjetiva | Dano + nexo + culpa/dolo do Estado |
| Dano causado por preso foragido | Subjetiva | Que Estado sabia do risco e ficou inerte |

📌 **Excludentes:**\n- Culpa exclusiva da vítima: exclui 100% (ex: pedestre que atravessa na contramão)\n- Culpa concorrente: reduz proporcionalmente\n- Caso fortuito / força maior: exclui nexo causal\n\n⚡ **Ação regressiva:** Estado paga à vítima e depois cobra do agente. Só cabe se o agente agiu com DOLO ou CULPA. O prazo prescricional da ação regressiva é IMPRESCRITÍVEL (art. 37, §5° CF).`,

  // ===== DIREITO PENAL =====
  '7ea72209ee0727c58185d89b54ad3b54': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Teoria do Crime:**\n> "FATO TÍPICO + ILÍCITO + CULPÁVEL = CRIME. Falta um = sem crime."\n\n🔑 **Dolo Eventual vs. Culpa Consciente — a distinção mais cobrada do Brasil:**\n\n| | Dolo Eventual | Culpa Consciente |
|-|--------------|-----------------|
| Prevê o resultado? | SIM | SIM |
| Aceita o resultado? | SIM ("tanto faz") | NÃO ("confio que não vai acontecer") |
| Pune por quê? | Por assumir o risco | Por imprudência |

📌 **Macete do "racha" (Cebraspe já cobrou):**\nCondutor que participa de racha e mata alguém → DOLO EVENTUAL (assumiu o risco) → Homicídio doloso!\n\n⚡ **Iter criminis (caminho do crime):**\nCogitação → Preparação → Execução → Consumação\n- Só punível a partir da EXECUÇÃO (regra)\n- Preparação é punível apenas em crimes específicos (ex: associação criminosa)`,

  '39231f00307f0871a0f56c8cf18e6235': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Excludentes de Ilicitude:**\n> "LEED: Legítima defesa, Estado de necessidade, Estrito cumprimento do dever legal, Exercício regular de direito"\n\n🔑 **Legítima defesa — pontos que caem:**\n- Agressão INJUSTA (agressão justa não gera LD)\n- ATUAL ou IMINENTE (não futura, pois seria vingança)\n- Moderação é obrigatória — excesso é punido!\n- Legítima defesa PUTATIVA: o agente imagina erroneamente estar sendo agredido → erro de tipo\n\n📌 **Estado de necessidade vs. Legítima Defesa:**\n| | LD | EN |
|-|--|--|
| Quem ameaça? | Pessoa (agressão injusta) | Qualquer coisa (pessoa, animal, natureza) |
| Contra quem age? | O agressor | Pode ser terceiro inocente |
| Tipo de perigo | Atual ou iminente | ATUAL (só) |

⚡ **Pegadinha:** "Policial que usa força para prender em flagrante está em legítima defesa?" → NÃO! Está no **estrito cumprimento do dever legal** (art. 23, III do CP). Legítima defesa exige agressão injusta sofrida pelo próprio agente.`,

  '3cdb40921aab7911310437fcf610d01f': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Inquérito Policial:**\n> "IP = ADMINISTRATIVO (não jurisdicional) + INQUISITIVO (sem contraditório) + DISPENSÁVEL"\n\n🔑 **O que a Cebraspe MAIS cobra em IP:**\n- O delegado NÃO arquiva o IP → só o faz o Juiz mediante pedido do MP\n- A vítima pode pedir vistas do IP (mas não tem contraditório pleno)\n- O advogado pode acompanhar o cliente em oitiva no IP (Estatuto da OAB)\n- IP pode ser base da denúncia + provas colhidas na fase judicial\n\n📌 **Diferença entre Notícia-crime e Delatio Criminis:**\n- Notícia-crime: qualquer comunicação do crime\n- Delatio criminis: comunicação feita por terceiro (não a vítima)\n- Auto de prisão em flagrante (APF): instaura IP automaticamente\n\n⚡ **Pegadinha frequente:** "O MP pode dispensar o IP?" → SIM! Se já tiver provas suficientes, o MP pode oferecer denúncia diretamente mesmo sem conclusão do IP (IP é dispensável mas não obrigatório).`,

  // ===== INFORMÁTICA =====
  'bfebc86a12e928ba144c6dbebeb6817a': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Segurança da Informação:**\n> "CID = Confidencialidade, Integridade, Disponibilidade. Memorize nessa ordem."\n\n🔑 **Ataques que mais caem (com o que violam):**\n| Ataque | O que viola | Como funciona |
|--------|------------|--------------|
| Phishing | Confidencialidade | E-mail falso para roubar senha |
| Ransomware | Disponibilidade | Criptografa dados, exige resgate |
| DDoS | Disponibilidade | Sobrecarga de requisições derruba servidor |
| Man-in-the-Middle | Integridade + Conf. | Intercepta comunicação |
| Keylogger | Confidencialidade | Grava teclado do usuário |

📌 **Macete dos certificados:**\n- Certificado digital = identidade + integridade (não confidencialidade!)\n- HTTPS = usa TLS para C + I + A\n- VPN = garante C + I no túnel\n\n⚡ **Cebraspe já cobrou:** "O backup é a melhor defesa contra ransomware." ✅ CERTO — e o backup deve ser OFFLINE (desconectado da rede) para o ransomware não atingi-lo.`,

  'ce1ff6fa0d32822562e710fb3260a7c8': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Word:**\n> "Ctrl+Z desfaz. Ctrl+Y refaz. F7 corrige. F5 vai para página. Decore esses 4."\n\n🔑 **Atalhos que a Cebraspe MAIS cobra:**\n| Atalho | Função |
|--------|--------|
| Ctrl+Enter | Quebra de página |
| Ctrl+Shift+P | Tamanho da fonte (cursor no campo) |
| Ctrl+L | Localizar (igual ao F) no Word antigo |
| Ctrl+Shift+C | Copiar formatação |
| Ctrl+Shift+V | Colar formatação |
| Alt+F4 | Fechar o programa |
| F12 | Salvar Como |

📌 **Mala Direta (Mailings) — 3 etapas:**\n1. Documento principal (carta padrão)\n2. Fonte de dados (planilha com nomes)\n3. Mesclagem (gera documentos individuais)\n\n⚡ **Pegadinha:** "Ctrl+S salva no mesmo arquivo. F12 abre 'Salvar Como' (escolhe nome/local)." — A Cebraspe distingue os dois!`,

  '7dcc26afb684db1e20e896bf952a0765': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Excel:**\n> "=SE(teste; se_verdadeiro; se_falso) — sempre 3 argumentos separados por ponto e vírgula."\n\n🔑 **Fórmulas mais cobradas pela Cebraspe:**\n| Fórmula | Use quando | Exemplo |
|---------|-----------|---------|
| =SE() | Condição simples | =SE(A1>7;"OK";"Não") |
| =CONT.SE() | Contar com critério | =CONT.SE(A:A;"Aprovado") |
| =SOMASE() | Somar com critério | =SOMASE(A:A;">100";B:B) |
| =PROCV() | Buscar em tabela | =PROCV(A1;Tabela;2;FALSO) |
| =MÉDIA() | Média simples | =MÉDIA(A1:A10) |

📌 **Referência Absoluta — quando usar:**\nUse $A$1 quando copiar a fórmula e NÃO quiser que a referência mude.\nMacete: Aperte **F4** na célula para alternar entre relativa, mista e absoluta.\n\n⚡ **Pegadinha:** No PROCV, o último argumento FALSO significa correspondência EXATA. Sem FALSO, aceita valor aproximado — isso muda completamente o resultado!`,

  // ===== ÉTICA =====
  '50882ecd4d33aad05c544a2f63600c81': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Decreto 1.171/94:**\n> "No Código de Ética, o servidor deve ser HONESTO, LEAL, PROBO, IMPARCIAL — mas nunca pode usar o cargo para benefício pessoal."\n\n🔑 **Vedações mais cobradas (item XI do Decreto 1.171):**\n1. Usar cargo para obter vantagem pessoal\n2. Utilizar serviços de subordinados em tarefas particulares\n3. Aliciar subordinados para atividades político-partidárias\n4. Fazer uso de informação privilegiada\n5. Receber propina, comissão ou vantagem de qualquer espécie\n\n📌 **Macete — Pena do Código de Ética:**\nA Comissão de Ética aplica apenas **censura ética** (não demite, não suspende).\nPara penas mais graves → PAD (Lei 8.112/90)\n\n⚡ **Pegadinha:** "O servidor pode exercer atividade político-partidária fora do horário de trabalho?" → SIM, desde que não use o cargo, não alicie subordinados e não use recursos públicos.`,

  // ===== LEGISLAÇÃO =====
  'ae6995a8e0872adf59b7396b206fae43': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Lei 8.112/90:**\n> "CARGO EFETIVO: nomeação → posse (30 dias) → exercício (15 dias). Soma: 45 dias do total."\n\n🔑 **Prazos que mais caem:**\n| Evento | Prazo |
|--------|-------|
| Posse (após nomeação) | 30 dias |
| Início do exercício (após posse) | 15 dias |
| Estágio probatório | 3 anos |
| Estabilidade | 3 anos de efetivo exercício |
| Licença paternidade | 5 dias (8 se servidor federal) |
| Licença maternidade | 120 dias (180 com prorrogação) |
| Licença para capacitação | 3 meses a cada 5 anos |

📌 **Macete das formas de provimento:**\n→ **N**omeação, **P**romoção, **R**eadaptação, **R**eversão, **A**proveitamento, **R**eintegração, **R**econdução\n→ Mnemônico: "**N**ossa **P**rofissão **R**eal **R**equer **A**lta **R**esponsabilidade **R**epetida"\n\n⚡ **Remoção vs. Redistribuição:**\n- Remoção: mesmo CARGO, mesmo QUADRO, pode mudar de local\n- Redistribuição: outro ÓRGÃO, mantém o cargo\nNenhuma das duas é forma de PROVIMENTO!`,

  'c8d84a30b11b5637d33f7e64db9b4ad9': `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n**MACETE — Lei de Improbidade (8.429/92 c/ redação da 14.230/21):**\n> "Após a reforma de 2021: TODO ato de improbidade exige DOLO ESPECÍFICO. Acabou a culpa!"\n\n🔑 **Principais mudanças da Lei 14.230/21:**\n- Dolo específico em TODOS os atos (acabou com atos culposos)\n- Legitimidade exclusiva do MP para ação de improbidade\n- Prescrição: 8 anos após a prática do ato\n- Indisponibilidade de bens: só após decisão judicial fundamentada (não mais no início)\n- Acordo de não persecução civil (ANPC) com o MP\n\n📌 **As 3 categorias de atos (penas diferentes):**\n| Categoria | Exemplos | Pena máxima |
|-----------|---------|-------------|
| Enriquecimento ilícito (art. 9°) | Receber propina | Perda dos bens + 14 anos de inabilitação |
| Lesão ao erário (art. 10) | Fraude em licitação | Ressarc. + 12 anos |
| Violação de princípios (art. 11) | Publicidade proibida | Multa + 4 anos |

⚡ **O que a Cebraspe mais cobra:** A ação popular ≠ ação de improbidade. Para a ação popular, qualquer CIDADÃO tem legitimidade. Para improbidade, só o MP.`,
};

async function main() {
  try {
    await client.connect();
    console.log(`Appending macetes to ${Object.keys(macetes).length} subtopics...`);
    let count = 0;
    for (const [id, tip] of Object.entries(macetes)) {
      const res = await client.query('SELECT content FROM "SubTopic" WHERE id = $1', [id]);
      if (res.rows.length === 0) {
        console.log(`SKIP (not found): ${id}`);
        continue;
      }
      const newContent = (res.rows[0].content || '') + tip;
      await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [newContent, id]);
      console.log(`✅ Updated: ${id}`);
      count++;
    }
    console.log(`\nDone! ${count} subtopics enriched with macetes.`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
main();
