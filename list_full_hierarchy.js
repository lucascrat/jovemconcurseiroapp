const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    await client.connect();
    
    // Fetch all Subject, Topic, SubTopic
    const subjectRes = await client.query('SELECT id, name FROM "Subject" ORDER BY name');
    const topicRes = await client.query('SELECT id, title, "subjectId" FROM "Topic" ORDER BY title');
    const subTopicRes = await client.query('SELECT id, name, "topicId" FROM "SubTopic" ORDER BY name');

    const subjects = subjectRes.rows;
    const topics = topicRes.rows;
    const subTopics = subTopicRes.rows;

    console.log("# Grade Curricular do Foco no Concurso\n");

    for (const subject of subjects) {
      console.log(`## Matéria: ${subject.name}`);
      const subjectTopics = topics.filter(t => t.subjectId === subject.id);
      
      if (subjectTopics.length === 0) {
        console.log("   (Sem tópicos vinculados)");
      }

      for (const topic of subjectTopics) {
        console.log(`   ### Tópico: ${topic.title}`);
        const topicSubTopics = subTopics.filter(st => st.topicId === topic.id);
        
        if (topicSubTopics.length === 0) {
          console.log("      (Sem sub-matérias vinculadas)");
        }

        for (const subTopic of topicSubTopics) {
          console.log(`      - ${subTopic.name}`);
        }
      }
      console.log(""); // Space between subjects
    }

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
