const { Pool } = require('pg');
const pool = new Pool({ 
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS "ExamBoard" (
        id TEXT PRIMARY KEY,
        name TEXT,
        difficulty TEXT,
        style TEXT,
        analysis TEXT,
        "logoUrl" TEXT
      )
    `);
    console.log('Table ExamBoard created successfully');
    
    // Seed with main ones if empty
    const check = await pool.query('SELECT count(*) FROM "ExamBoard"');
    if (parseInt(check.rows[0].count) === 0) {
      const boards = [
        ['cebraspe', 'Cebraspe (Cespe)', 'Alta', 'Certo/Errado com penalidade por erro.', 'Foca em interpretação e doutrina pura. Geralmente questões complexas.', 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Logo_Cebraspe.png'],
        ['fgv', 'FGV', 'Muito Alta', 'Múltipla escolha (A-E). Português extremamente complexo.', 'Conhecida pelo "Português da FGV" e casos práticos jurídicos.', ''],
        ['fcc', 'FCC', 'Média/Alta', 'Múltipla escolha. "Fundação Copia e Cola".', 'Foco em letra de lei, mas vem evoluindo para casos práticos.', '']
      ];
      for (const b of boards) {
        await pool.query('INSERT INTO "ExamBoard" (id, name, difficulty, style, analysis, "logoUrl") VALUES ($1, $2, $3, $4, $5, $6)', b);
      }
      console.log('Seeded main exam boards');
    }
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}

run();
