const { Pool } = require('pg');
const pool = new Pool({ 
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    // 1. Subjects
    const subjects = await pool.query('SELECT id, name, level FROM "Subject" ORDER BY name');
    console.log(`\n=== MATÉRIAS (${subjects.rows.length}) ===`);
    subjects.rows.forEach(s => console.log(`  [${s.level}] ${s.name} (${s.id})`));

    // 2. Topics per subject
    console.log(`\n=== TÓPICOS ===`);
    for (const s of subjects.rows) {
      const topics = await pool.query('SELECT id, title, "order" FROM "Topic" WHERE "subjectId" = $1 ORDER BY "order"', [s.id]);
      console.log(`\n  ${s.name} (${s.level}): ${topics.rows.length} tópicos`);
      topics.rows.forEach(t => console.log(`    - ${t.title} (${t.id})`));
    }

    // 3. SubTopics count per topic
    console.log(`\n=== SUBTÓPICOS ===`);
    const stCount = await pool.query(`
      SELECT t.title, s.name as subject, COUNT(st.id) as count 
      FROM "Topic" t 
      LEFT JOIN "Subject" s ON t."subjectId" = s.id 
      LEFT JOIN "SubTopic" st ON st."topicId" = t.id 
      GROUP BY t.id, t.title, s.name 
      ORDER BY s.name, t.title
    `);
    stCount.rows.forEach(r => console.log(`  ${r.subject} > ${r.title}: ${r.count} subtópicos`));

    // 4. Questions count per topic
    console.log(`\n=== QUESTÕES ===`);
    const qCount = await pool.query(`
      SELECT t.title, s.name as subject, COUNT(q.id) as count 
      FROM "Topic" t 
      LEFT JOIN "Subject" s ON t."subjectId" = s.id 
      LEFT JOIN "Question" q ON q."topicId" = t.id 
      GROUP BY t.id, t.title, s.name 
      ORDER BY s.name, t.title
    `);
    qCount.rows.forEach(r => console.log(`  ${r.subject} > ${r.title}: ${r.count} questões`));

    // 5. Totals
    const totalSub = await pool.query('SELECT COUNT(*) FROM "SubTopic"');
    const totalQ = await pool.query('SELECT COUNT(*) FROM "Question"');
    console.log(`\n=== TOTAIS ===`);
    console.log(`  Matérias: ${subjects.rows.length}`);
    console.log(`  Tópicos: ${stCount.rows.length}`);
    console.log(`  Subtópicos: ${totalSub.rows[0].count}`);
    console.log(`  Questões: ${totalQ.rows[0].count}`);

  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}
run();
