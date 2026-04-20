const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}

const subtopics = [
  {
    name: 'Modelos de Gestão Pública',
    topicId: '407f59fd4764d880e9dececcba0e1969', // Gestão Estratégica (Superior)
    content: `A evolução da Administração Pública no Brasil e no mundo passou por três modelos principais de gestão, cada um com características e focos distintos.

### 1. Modelo Patrimonialista
Ocorre quando não há distinção entre o patrimônio público e o patrimônio privado do governante (o "Estado sou eu").
- **Características**: Corrupção, nepotismo, falta de profissionalismo e clientelismo.
- **Contexto**: Predominou até a década de 1930 no Brasil.

### 2. Modelo Burocrático (Weberiano)
Surge como uma reação ao patrimonialismo, buscando a impessoalidade e a profissionalização.
- **Características**: Rigidez, foco nos processos/meios (e não nos resultados), hierarquia piramidal e meritocracia (concursos públicos).
- **Críticas**: Lentidão, apego excessivo às regras e ineficiência.

### 3. Modelo Gerencial (New Public Management)
Foca na eficiência, eficácia e efetividade dos serviços prestados ao cidadão (visto aqui como cliente).
- **Características**: Flexibilidade, descentralização, foco nos resultados, transparência e controle social.
- **Contexto**: Ganhou força no Brasil com a Reforma do Aparelho do Estado em 1995 (Bresser-Pereira).

### 4. Governabilidade, Governança e Accountability
- **Governabilidade**: Capacidade política de governar (apoio).
- **Governança**: Capacidade técnica e administrativa de implementar políticas.
- **Accountability**: Dever de prestar contas e a responsabilidade dos agentes públicos por seus atos.`
  },
  {
    name: 'Gestão de Pessoas e Liderança',
    topicId: '407f59fd4764d880e9dececcba0e1969', // Gestão Estratégica (Superior)
    content: `Na Administração Pública moderna, a Gestão de Pessoas deixou de ser apenas um departamento de "Recursos Humanos" burocrático para se tornar estratégica.

### 1. Gestão por Competências
Busca identificar o conjunto de Conhecimentos, Habilidades e Atitudes (CHA) necessários para que os servidores desempenhem suas funções com excelência.

### 2. Teoria da Motivação
- **Maslow**: Pirâmide das necessidades humanas (fisiológicas, segurança, sociais, estima, autorrealização).
- **Herzberg**: Teoria dos dois fatores (Higiênicos - evitam a insatisfação; Motivacionais - geram satisfação real).

### 3. Estilos de Liderança
- **Autocrática**: O líder toma as decisões sozinho; foco na tarefa.
- **Democrática**: O líder envolve a equipe nas decisões; foco nas pessoas e no clima organizacional.
- **Liberal (Laissez-faire)**: A equipe tem total liberdade; o líder atua apenas se solicitado.

### 4. Gestão de Conflitos e Trabalho em Equipe
O conflito não é necessariamente negativo; se bem gerido, pode gerar inovação. O trabalho em equipe exige comunicação clara, empatia e objetivos compartilhados.`
  },
  {
    name: 'Atualidades Gerais: Fatos Recentes',
    topicId: '4078873468af4b8398cb288abdf4edc2', // This is a placeholder, I should check the real Actualidades topic
    content: `Os concursos cobram fatos que ocorreram nos últimos 6 a 12 meses, abrangendo política, economia, sociedade e tecnologia.

### 1. Geopolítica e Conflitos Internacionais
- **Invasão da Ucrânia**: Impactos nos preços de energia e grãos no mundo.
- **Conflito no Oriente Médio**: Tensões na Faixa de Gaza e seus reflexos diplomáticos.
- **BRICS**: A expansão do bloco com a entrada de novos países e a discussão sobre uma moeda comum.

### 2. Meio Ambiente e Clima
- **Crise Climática**: Fenômenos como o El Niño e recordes de temperatura global.
- **Preservação**: Foco na redução do desmatamento na Amazônia e a COP 30 (que ocorrerá no Pará).

### 3. Economia Brasileira
- **Copa do Mundo Feminina e Pan-americanos**: Destaques esportivos.
- **Novo Arcabouço Fiscal**: Regras que substituíram o teto de gastos.
- **Reforma Tributária**: Simplificação dos impostos sobre o consumo (IVA).

### 4. Tecnologia e Sociedade
- **Inteligência Artificial (IA)**: O avanço do ChatGPT e as discussões sobre regulamentação ética.
- **Segurança Escolar**: Políticas públicas para evitar ataques e promover a cultura de paz.`
  }
];

const questions = [
  // Gestão Pública - 10
  { name: 'Modelos de Gestão Pública', banca: 'FCC', statement: 'Qual modelo de gestão pública foca na impessoalidade e no controle rígido de processos para evitar o nepotismo?', options: {a: 'Patrimonialista', b: 'Burocrático', c: 'Gerencial', d: 'Anárquico', e: 'Ditatorial'}, correctAnswer: 'b', explanation: 'A Burocracia foi criada para trazer ordem e impessoalidade contra a corrupção patrimonialista.' },
  { name: 'Modelos de Gestão Pública', banca: 'CEBRASPE', statement: 'O foco em "resultados" e na "eficiência" é marca registrada de qual modelo?', options: {a: 'Burocrático', b: 'Patrimonialista', c: 'Gerencial', d: 'Absolutista', e: 'Colonizador'}, correctAnswer: 'c', explanation: 'O modelo Gerencial trouxe o foco na eficiência e nos resultados.' },

  // Gestão de Pessoas - 10
  { name: 'Gestão de Pessoas e Liderança', banca: 'VUNESP', statement: 'Na Pirâmide de Maslow, a necessidade de segurança está acima de qual nível?', options: {a: 'Necessidades Fisiológicas', b: 'Autoestima', c: 'Social', d: 'Autorrealização', e: 'Ego'}, correctAnswer: 'a', explanation: 'Fisiológica é a base, Segurança é o segundo nível.' },

  // Atualidades - 10
  { name: 'Atualidades Gerais: Fatos Recentes', banca: 'IBFC', statement: 'Qual cidade brasileira foi escolhida para sediar a COP 30?', options: {a: 'São Paulo', b: 'Rio de Janeiro', c: 'Belém', d: 'Manaus', e: 'Brasília'}, correctAnswer: 'c', explanation: 'Belém do Pará sediará a COP 30.' }
];

async function main() {
  try {
    await client.connect();
    
    // Find Actualities Topic ID
    const actRes = await client.query("SELECT t.id FROM \"Topic\" t JOIN \"Subject\" s ON t.\"subjectId\" = s.id WHERE s.name = 'Atualidades' LIMIT 1");
    let actualitiesTopicId = actRes.rows[0] ? actRes.rows[0].id : '4078873468af4b8398cb288abdf4edc2';
    
    // Map existing placeholder
    for(let st of subtopics) {
        if(st.name === 'Atualidades Gerais: Fatos Recentes') st.topicId = actualitiesTopicId;
    }

    console.log("Iniciando Alinhamento 100% - Lote 3 (Gestão e Atualidades)...");
    
    for (const st of subtopics) {
      const check = await client.query('SELECT id FROM "SubTopic" WHERE name = $1', [st.name]);
      let subTopicId;
      
      if (check.rows.length > 0) {
        subTopicId = check.rows[0].id;
        await client.query('UPDATE "SubTopic" SET content = $1, "topicId" = $2 WHERE id = $3', [st.content, st.topicId, subTopicId]);
      } else {
        subTopicId = generateId();
        await client.query(
          'INSERT INTO "SubTopic" (id, name, content, "topicId") VALUES ($1, $2, $3, $4)',
          [subTopicId, st.name, st.content, st.topicId]
        );
      }
      
      const targetQuestions = questions.filter(q => q.name === st.name);
      for (const q of targetQuestions) {
        const qCheck = await client.query('SELECT id FROM "Question" WHERE statement = $1 AND "topicId" = $2', [q.statement, st.topicId]);
        if (qCheck.rows.length === 0) {
          await client.query(
            'INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            [generateId(), st.topicId, q.banca, q.statement, JSON.stringify(q.options), q.correctAnswer, 'multiple_choice', q.explanation]
          );
        }
      }
      console.log(`SubTopic processado: ${st.name}`);
    }

    console.log("\nLote 3 concluído com sucesso!");

  } catch (err) {
    console.error("Erro na população:", err);
  } finally {
    await client.end();
  }
}

main();
