const axios = require('axios');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function extractQuestions(fileBuffer, mimeType, boardName) {
  if (!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY not configured');

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  const prompt = `
    Analise esta prova da banca ${boardName}. 
    Extraia TODAS as questões de múltipla escolha ou Certo/Errado.
    
    ATENÇÃO ESPECIAL: Muitas questões de concurso são precedidas por um TEXTO BASE (texto de leitura, trecho de lei, notícia, poema, tabela, etc.) que o candidato deve ler antes de responder. 
    Capture esse texto integralmente no campo "textBase". Se a questão não tiver texto de apoio, deixe "textBase" como string vazia "".
    
    Para cada questão, retorne exatamente este formato JSON:
    {
      "banca": "${boardName}",
      "textBase": "Texto de apoio/leitura que precede a questão (se houver). Pode ser um trecho de lei, notícia, poema, tabela, etc. Se não houver, deixe vazio.",
      "statement": "Enunciado completo da questão (o comando/pergunta em si, sem o texto de apoio)",
      "options": ["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "Alternativa E"],
      "correctAnswer": 0,
      "explanation": "Uma breve explicação de por que esta é a correta",
      "type": "multiple"
    }
    Retorne APENAS o array JSON, sem markdown, sem \`\`\`json.
  `;

  const payload = {
    contents: [{
      parts: [
        { text: prompt },
        {
          inline_data: {
            mime_type: mimeType,
            data: fileBuffer.toString('base64')
          }
        }
      ]
    }],
    generationConfig: {
      response_mime_type: "application/json"
    }
  };

  try {
    const response = await axios.post(url, payload);
    const text = response.data.candidates[0].content.parts[0].text;
    return JSON.parse(text);
  } catch (err) {
    console.error('Gemini API Error:', err.response?.data || err.message);
    throw err;
  }
}

async function analyzeBoardStyle(questions, boardName) {
  if (!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY not configured');

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`;

  const prompt = `
    Com base nestas questões da banca ${boardName}:
    ${JSON.stringify(questions.slice(0, 10))}
    
    Faça uma análise profunda do estilo desta banca.
    Descreva:
    1. Nível de dificuldade médio.
    2. Estilo de cobrança (casos práticos, letra da lei, doutrina).
    3. Armadilhas comuns.
    4. Recomendações para o estudante.
    
    Retorne um texto formatado em Markdown.
  `;

  const payload = {
    contents: [{
      parts: [{ text: prompt }]
    }]
  };

  try {
    const response = await axios.post(url, payload);
    return response.data.candidates[0].content.parts[0].text;
  } catch (err) {
    console.error('Gemini Analysis Error:', err.response?.data || err.message);
    throw err;
  }
}

module.exports = { extractQuestions, analyzeBoardStyle };
