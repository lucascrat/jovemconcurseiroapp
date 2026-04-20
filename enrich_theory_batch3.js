const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const upgrades = [

  {
    id: 'b2a79a62a1f96077a0150c5e4e5da975', // Pontuação
    content: `## Pontuação: Regras Essenciais para Concursos

### A Vírgula (,)
**Usos obrigatórios:**
1. Separar elementos de uma enumeração: "Estudei Direito, Português, Matemática e Informática."
2. Isolar aposto: "Bolsonaro, ex-presidente, discursou."
3. Isolar vocativo: "Candidato, fique atento ao tempo."
4. Isolar adjunto adverbial deslocado: "Ontem, o agente apreendeu o veículo."
5. Separar orações coordenadas (exceto aditivas com "e"): "Estudou muito, mas não passou."
6. Separar oração adjetiva explicativa: "João, que é policial, chegou cedo."

**Proibido usar vírgula:**
- Entre sujeito e verbo: ~~"O policial, apreendeu o veículo."~~
- Entre verbo e complemento: ~~"O policial apreendeu, o veículo."~~

### O Ponto e Vírgula (;)
- Separar orações coordenadas com vírgulas internas
- Separar itens de lista já com vírgulas
- Exemplo: "Estudou Direito, que é difícil; Português, que é subjetivo; e Matemática."

### Os Dois Pontos (:)
- Anunciar explicação, enumeração ou citação
- Exemplo: "O edital exige: Português, Direito e Informática."

### Reticências (...) vs Travessão (—) vs Aspas
- **Reticências**: suspensão da ideia, hesitação, continuação implícita
- **Travessão**: indicar fala de personagem, inciso explicativo mais destacado que parênteses
- **Aspas**: citação, ironia, estrangeirismos, neologismos, ênfase

> 🎯 **Dica PRF**: A Cebraspe adora testar vírgula entre sujeito e verbo (proibido) e vírgula antes de "e" (proibido em orações aditivas, mas possível em outros contextos).`
  },

  {
    id: 'f12e7ad2f333ecd3dacd29a923ea2b6c', // Regência Verbal e Nominal
    content: `## Regência Verbal e Nominal

Regência é a relação de dependência entre o verbo/nome e seus complementos.

### Verbos de Regência Mais Cobrados
| Verbo | Regência | Crase? | Exemplo |
|-------|---------|--------|---------|
| **Assistir** (ver) | a | Sim | "Assisti ao filme." |
| **Assistir** (auxiliar) | — | Não | "Assiste ao médico examinar." |
| **Visar** (almejar) | a | Sim | "Visa ao cargo público." |
| **Visar** (checar/assinar) | — | Não | "Visou o documento." |
| **Aspirar** (desejar) | a | Sim | "Aspira à promoção." |
| **Obedecer** | a | Às vezes | "Obedeceu ao sinal." |
| **Preferir** | a | Sim | "Prefere estudar a dormir." |
| **Custar** (ser custoso) | — sujeito | N/A | "Custou-me aprender." |
| **Chegar/Ir** | a | Sim | "Chegou ao destino." |
| **Morar** | em | Não | "Mora em São Paulo." |
| **Namorar** | — (sem prep) | N/A | "Namora uma colega." |

### Crase na Regência
A crase ocorre quando a preposição "a" se funde com o artigo "a". Só acorre antes de palavras femininas com artigo definido.

**Teste**: substitua por palavra masculina.
- "Fui à escola" → "Fui ao colégio" (artigo "ao" = crase)
- "Fui a pé" → não há artigo → sem crase

### Regência Nominal Cobrada
| Nome | Regência | Exemplo |
|------|---------|---------|
| Alheio | a | "Alheio à realidade." |
| Ansioso | por | "Ansioso pelo resultado." |
| Propenso | a | "Propenso ao erro." |
| Apto | a/para | "Apto ao serviço / para o cargo." |

> 🎯 **Dica PRF**: "Aspirar a" (desejar) e "visar a" (almejar) são os mais cobrados pela Cebraspe, pois geram crase antes de femininos.`
  },

  {
    id: '2e044933950e947b94a13391ebe8e17b', // Concordância Verbal e Nominal
    content: `## Concordância Verbal e Nominal

### Concordância Verbal: Regras Especiais

**1. Sujeito Composto antes do verbo** → plural
"Maria e João foram aprovados."

**2. Sujeito Composto depois do verbo** → pode ir ao plural ou concordar com o mais próximo
"Foram aprovados Maria, João e Pedro." ou "Foi aprovada Maria, João e Pedro."

**3. Pronomes Indefinidos (ninguém, alguém, cada um)** → singular
"Ninguém passou na prova."

**4. "A maioria", "a maior parte"** → singular (núcleo = maioria)
"A maioria dos candidatos foi aprovada."

**5. Sujeito = porcentagem**
- Com artigo + mais de 1%: plural: "Os 60% dos alunos foram aprovados."
- Sem artigo: singular: "60% da turma foi reprovada."

**6. Verbo "haver" impessoal (existir, ocorrer)** → sempre singular
"Havia muitos candidatos." ❌ "Haviam muitos candidatos."

**7. Verbo "fazer" impessoal (tempo)** → sempre singular
"Faz dois anos que não estudo." ❌ "Fazem dois anos..."

### Concordância Nominal: Regras Especiais

**1. Adjetivo after dois substantivos** → concorda com o mais próximo (masculino = plural masculino)
"Homem e mulher brasileiros." (ou "brasileira" concordando só com mulher)

**2. "Bastante"**
- Adjetivo (modifica substantivo): varia → "Bastantes candidatos vieram."
- Advérbio (modifica adjetivo/verbo): invariável → "O candidato estava bastante nervoso."

**3. "É proibido", "é necessário"** → sem artigo = invariável; com artigo = concorda
- "É proibido entrada." (invariável)
- "É proibida a entrada." (concorda com "entrada", feminino)

> 🎯 **Dica PRF**: "Haver" e "fazer" impessoais são as mais cobradas. Nunca se flexionam no plural!`
  },

  {
    id: 'ec5f3f8e0f5b23c63edbfff4bb4c263c', // Organização do Estado
    content: `## Organização Político-Administrativa do Estado (CF/88)

### Formas de Estado e de Governo
- **Forma de Estado**: Federação (forma composta, com autonomia dos entes)
- **Forma de Governo**: República (eleição periódica, responsabilidade dos governantes)
- **Sistema de Governo**: Presidencialismo (Executivo independente do Legislativo)
- **Regime Político**: Democracia representativa

### Os Entes Federativos (art. 18)
A RFB é formada pela união indissolúvel de:
1. **União** (poder central)
2. **Estados** (26 + DF)
3. **Municípios**
4. **Distrito Federal** (possui competências estaduais e municipais simultâneas)

**Atenção**: O DF não pode ser dividido em Municípios (art. 32).

### Competências (Resumo)
| Tipo | De quem | O que cobre |
|------|---------|-------------|
| **Exclusiva** | União (art. 21) | Emitir moeda, declarar guerra, polícia federal |
| **Privativa** | União (art. 22) | Legislar sobre civil, penal, trabalho (estados podem legislar com autorização) |
| **Comum** | Todos (art. 23) | Saúde, educação, proteção ambiental |
| **Concorrente** | União + Estados + DF (art. 24) | Direito tributário, financeiro, urbanístico |

### Intervenção Federal (art. 34)
A União pode intervir nos Estados APENAS nas hipóteses taxativas do art. 34:
- Manter a integridade nacional
- Repelir invasão estrangeira
- Garantir o free exercise dos poderes constitucionais estaduais
- Reorganizar as finanças estaduais
- Entre outros

> 🎯 **Dica PRF**: Saber distinguir competência **exclusiva** (art. 21 — não delegável) vs **privativa** (art. 22 — delegável por lei complementar) é questão clássica.`
  },

  {
    id: 'e9810751cbbd584816eeb73ac82f9216', // Remédios Constitucionais
    content: `## Remédios Constitucionais (art. 5° da CF/88)

### Habeas Corpus (HC) — art. 5°, LXVIII
- **Protege**: liberdade de locomoção (ir, vir e permanecer)
- **Quando cabe**: ameaça ou coação a essa liberdade
- **Quem pode impetrar**: Qualquer pessoa (física ou jurídica, não precisa de advogado)
- **Não cabe**: punições militares, crimes eleitorais (nesses casos, cabe HC somente em situações específicas)

### Mandado de Segurança (MS) — art. 5°, LXIX
- **Protege**: direito líquido e certo não amparado por HC ou HD
- **Quando cabe**: ato ilegal ou com abuso de poder de autoridade pública ou agente de pessoa jurídica privada no exercício de atribuição pública
- **Quem pode impetrar**: Pessoa física ou jurídica (com advogado)
- **Prazo**: 120 dias da ciência do ato impugnado
- **MS Coletivo** (art. 5°, LXX): partido político, organização sindical, entidade de classe ou associação

### Habeas Data (HD) — art. 5°, LXXII
- **Protege**: acesso e retificação de dados pessoais em registros ou banco de dados de órgãos públicos ou de caráter público
- **Quem pode impetrar**: O próprio interessado

### Mandado de Injunção (MI) — art. 5°, LXXI
- **Protege**: Inviabilidade de exercício de direitos por falta de norma regulamentadora
- **Efeito**: O STF ou tribunal competente pode suprir a omissão com efeitos inter partes ou erga omnes

### Ação Popular (AP) — art. 5°, LXXIII
- **Protege**: patrimônio público, moralidade administrativa, meio ambiente e patrimônio histórico-cultural
- **Quem pode propor**: qualquer **cidadão** (eleitor)
- **Gratuita**: salvo má-fé

| Remédio | Protege | Advogado? | Prazo |
|---------|---------|-----------|-------|
| HC | Locomoção | Não | Sem prazo |
| MS | Direito líquido e certo | Sim | 120 dias |
| HD | Dados pessoais | Sim | Sem prazo |
| MI | Omissão legislativa | Sim | Sem prazo |
| AP | Patrimônio público | Sim | 5 anos |`
  },
];

async function main() {
  try {
    await client.connect();
    console.log(`Updating ${upgrades.length} subtopics (Batch 3)...`);
    for (const u of upgrades) {
      await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [u.content, u.id]);
      console.log(`Updated: ${u.id}`);
    }
    console.log('Batch 3 done!');
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
main();
