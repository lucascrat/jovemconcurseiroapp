const { Client } = require('pg');

const config = {
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
};

const technicalFixes = [
  // Excel / Informatics Typos
  { find: /formulaicos/gi, replace: "fórmulas" },
  { find: /Identícas/gi, replace: "idênticas" },
  { find: /resultador/gi, replace: "resultado" },
  { find: /Intteirodo/gi, replace: "inteiro" },
  { find: /ponto e virgular/gi, replace: "ponto e vírgula" },
  { find: /pincádos/gi, replace: "indicados" },
  { find: /Mesmissmo/gi, replace: "mesmo" },
  { find: /resultador numericos/gi, replace: "resultados numéricos" },
  
  // RLM / Logic Typos & Formalization
  { find: /Diagramadores simbólicos/gi, replace: "diagramas lógicos" },
  { find: /Proponentes de Frases/gi, replace: "proposições" },
  { find: /tábula/gi, replace: "tabela verdade" },
  { find: /Falsidades globais/gi, replace: "resultado falso" },
  
  // Tonal Corrections (Sanitizing informal language)
  { find: /o 'OU' perdoa todo mundo/gi, replace: "na disjunção, a proposição é verdade se houver ao menos um valor verdadeiro" },
  { find: /o paciente morre Falso irremediado/gi, replace: "a proposição resulta em valor lógico Falso" },
  { find: /inferno de Só Falsos cruéis/gi, replace: "ocorrência de valores lógicos Falsos em ambas as partes" },
  { find: /O 'OU' perdoa todo mundo, basta ter 1 V/gi, replace: "A disjunção (OU) é verdadeira sempre que houver ao menos uma proposição verdadeira" },

  // Metadata Removal
  { find: /\(Variante \d+\)/g, replace: "" },
  { find: /\(Ref:[^)]+\)/g, replace: "" } // Removing Ref tags as they seem to clutter the UI
];

async function sanitize() {
  const client = new Client(config);
  await client.connect();
  console.log("Iniciando saneamento técnico do banco de dados...");

  try {
    // Fetch all questions to process locally
    const res = await client.query('SELECT id, statement, explanation FROM "Question"');
    const questions = res.rows;
    console.log(`Processando ${questions.length} questões...`);

    let updateCount = 0;

    for (const q of questions) {
      let newStatement = q.statement;
      let newExplanation = q.explanation;
      let changed = false;

      for (const fix of technicalFixes) {
        if (fix.find.test(newStatement)) {
          newStatement = newStatement.replace(fix.find, fix.replace);
          changed = true;
        }
        if (fix.find.test(newExplanation)) {
          newExplanation = newExplanation.replace(fix.find, fix.replace);
          changed = true;
        }
      }

      if (changed) {
        // Clean up double spaces that might arise from removals
        newStatement = newStatement.replace(/\s+/g, ' ').trim();
        newExplanation = newExplanation.replace(/\s+/g, ' ').trim();

        await client.query(
          'UPDATE "Question" SET statement = $1, explanation = $2 WHERE id = $3',
          [newStatement, newExplanation, q.id]
        );
        updateCount++;
      }
    }

    console.log(`Saneamento concluído! ${updateCount} questões foram corrigidas.`);
  } catch (err) {
    console.error("Erro durante o saneamento:", err);
  } finally {
    await client.end();
  }
}

sanitize();
