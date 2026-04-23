const { Pool } = require('pg');
const { v4: uuidv4 } = require('uuid');

const pool = new Pool({ 
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const generateId = () => uuidv4().replace(/-/g, '');

async function run() {
  try {
    const levels = ['Fundamental', 'Médio', 'Superior'];
    
    for (const level of levels) {
      console.log(`Creating for level: ${level}`);
      
      // 1. Create Subject
      const subjectId = generateId();
      await pool.query(
        'INSERT INTO "Subject" (id, name, level, description) VALUES ($1, $2, $3, $4)',
        [subjectId, 'Interpretação de Textos', level, `Desenvolvimento de habilidades de leitura e compreensão de textos para o nível ${level}.`]
      );
      
      // 2. Create a Topic for this subject
      const topicId = generateId();
      let topicTitle = '';
      if (level === 'Fundamental') topicTitle = 'Textos Narrativos e Descritivos';
      else if (level === 'Médio') topicTitle = 'Textos Dissertativos e Jornalísticos';
      else topicTitle = 'Textos Técnicos e Filosóficos';
      
      await pool.query(
        'INSERT INTO "Topic" (id, "subjectId", title, "order") VALUES ($1, $2, $3, $4)',
        [topicId, subjectId, topicTitle, 1]
      );
      
      // 3. Create a SubTopic (The actual text content)
      const subTopicId = generateId();
      let subTopicName = '';
      let content = '';
      
      if (level === 'Fundamental') {
        subTopicName = 'Aventura no Bosque (Leitura)';
        content = `### Texto: Aventura no Bosque\n\nEra uma manhã ensolarada quando João e Maria decidiram explorar o bosque atrás de sua casa. Eles levavam apenas uma mochila com água e alguns biscoitos. Ao entrarem na mata, ficaram maravilhados com o canto dos pássaros e o cheiro da terra úmida...\n\n### Interpretação e Dicas:\n\n1. **Identifique o Cenário**: Onde a história acontece? (No bosque atrás da casa).\n2. **Personagens**: Quem são os protagonistas? (João e Maria).\n3. **Clima**: Como estava o dia? (Ensolarado).`;
      } else if (level === 'Médio') {
        subTopicName = 'O Futuro do Trabalho (Leitura)';
        content = `### Texto: O Impacto da Tecnologia no Mercado de Trabalho\n\nA automação e a inteligência artificial estão transformando profundamente as relações de trabalho. Enquanto novas profissões surgem na área de dados e tecnologia, postos tradicionais enfrentam o desafio da obsolescência...\n\n### Análise do Texto:\n\n- **Tese Central**: A tecnologia como motor de mudança e desafio no mercado.\n- **Argumentos**: Surgimento de novas áreas vs. extinção de cargos manuais.\n- **Conclusão**: A necessidade de educação contínua (lifelong learning).`;
      } else {
        subTopicName = 'A Ética na Sociedade Líquida (Leitura)';
        content = `### Texto: Reflexões sobre a Pós-Modernidade\n\nZygmunt Bauman, em sua obra sobre a modernidade líquida, argumenta que as relações humanas tornaram-se frágeis e voláteis. Nesse contexto, a interpretação de discursos exige uma camada extra de criticismo para identificar as nuances do poder...\n\n### Estudo Dirigido:\n\n1. **Contextualização**: O pensamento de Bauman e a fluidez das instituições.\n2. **Terminologia**: Entenda o conceito de "líquido" aplicado à sociologia.\n3. **Crítica**: Como a volatilidade afeta o senso de comunidade e a ética individual.`;
      }
      
      await pool.query(
        'INSERT INTO "SubTopic" (id, "topicId", name, content) VALUES ($1, $2, $3, $4)',
        [subTopicId, topicId, subTopicName, content]
      );
      
      console.log(`Successfully created subject, topic and subtopic for ${level}`);
    }
  } catch (err) {
    console.error('Error during population:', err);
  } finally {
    await pool.end();
  }
}

run();
