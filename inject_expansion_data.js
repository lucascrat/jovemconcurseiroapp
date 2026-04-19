const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}

async function main() {
  try {
    await client.connect();
    console.log("🚀 Iniciando Expansão Massiva de Currículo (~40 Sub-matérias)...");
    await client.query('BEGIN');

    // 1. Criar as Novas Disciplinas (Subjects) se não existirem
    const newSubjectsData = [
      { name: 'Direito Penal', level: 'Médio' },
      { name: 'Direito Penal', level: 'Superior' },
      { name: 'Direito Processual Penal', level: 'Médio' },
      { name: 'Direito Processual Penal', level: 'Superior' },
      { name: 'Ética no Serviço Público', level: 'Fundamental' },
      { name: 'Ética no Serviço Público', level: 'Médio' },
      { name: 'Administração Pública', level: 'Superior' },
      { name: 'Atendimento e Ética', level: 'Médio' },
      { name: 'Atualidades', level: 'Médio' }
    ];

    const subjectMap = {};
    for (const s of newSubjectsData) {
      const id = generateId();
      await client.query('INSERT INTO "Subject" (id, name, level) VALUES ($1, $2, $3)', [id, s.name, s.level]);
      subjectMap[`${s.name}_${s.level}`] = id;
    }

    // Pegar IDs de subjects existentes para extensão
    const existingSubjects = await client.query('SELECT id, name, level FROM "Subject"');
    existingSubjects.rows.forEach(s => {
      subjectMap[`${s.name}_${s.level}`] = s.id;
    });

    // 2. Definir Tópicos e Subtópicos em Massa
    const items = [
      { 
        subject: 'Direito Penal_Médio', topic: 'Teoria do Crime', 
        subs: [
          { name: 'Conceito de Crime e Fato Típico', content: '# Teoria do Crime: Fato Típico\nO crime é um fato típico, antijurídico e culpável. O fato típico compreende conduta, resultado, nexo causal e tipicidade.' },
          { name: 'Excludentes de Ilicitude', content: '# Excludentes de Ilicitude\nSão elas: Estado de Necessidade, Legítima Defesa, Estrito Cumprimento do Dever Legal e Exercício Regular de Direito.' },
          { name: 'Crimes Contra a Vida', content: '# Crimes Contra a Vida\nHomicídio, Induzimento ao Suicídio, Infanticídio e Aborto.' }
        ]
      },
      { 
        subject: 'Direito Penal_Superior', topic: 'Crimes Contra a Adm Pública', 
        subs: [
          { name: 'Peculato e Concussão', content: '# Peculato e Concussão\nO peculato (Art. 312) é a apropriação de dinheiro/bem por funcionário público. A concussão (Art. 316) é a EXIGÊNCIA de vantagem indevida.' },
          { name: 'Corrupção Passiva e Ativa', content: '# Corrupção Passiva vs Ativa\nPassiva (Art. 317): Funcionário que solicita/recebe. Ativa (Art. 333): Particular que oferece/promete.' },
          { name: 'Prevaricação e Condescendência Criminosa', content: '# Outros Crimes Funcionais\nPrevaricação: Retardar ou deixar de praticar ato para satisfazer interesse pessoal.' }
        ]
      },
      { 
        subject: 'Direito Processual Penal_Médio', topic: 'Inquérito Policial', 
        subs: [
          { name: 'Características do Inquérito', content: '# Inquérito Policial (IP)\nProcedimento administrativo, inquisitivo e sigiloso que visa colher elementos de autoria e materialidade.' },
          { name: 'Prazos do Inquérito', content: '# Prazos do IP\nRegra Geral: 10 dias se preso, 30 dias se solto.' },
          { name: 'Diligências Policiais', content: '# Diligências\nExame de corpo de delito, apreensões e reconhecimento de pessoas.' }
        ]
      },
      { 
        subject: 'Ética no Serviço Público_Fundamental', topic: 'Ética e Cidadania', 
        subs: [
          { name: 'O que é Ética?', content: '# Ética e Moral\nÉtica é a reflexão sobre o comportamento, Moral é o conjunto de regras de uma sociedade.' },
          { name: 'Deveres do Cidadão', content: '# Deveres do Cidadão\nRespeito às leis, ao patrimônio público e convivência harmônica.' }
        ]
      },
      { 
        subject: 'Ética no Serviço Público_Médio', topic: 'Decreto 1.171/94', 
        subs: [
          { name: 'Regras Deontológicas', content: '# Código de Ética Profissional\nO servidor deve agir com decoro, zelo e eficácia, lembrando que o fim é o bem comum.' },
          { name: 'Vedações ao Servidor', content: '# Proibições Éticas\nÉ vedado usar o cargo para tirar proveito pessoal ou prejudicar subordinados.' },
          { name: 'Comissão de Ética', content: '# Comissão de Ética\nEncarregada de orientar e aconselhar sobre a ética profissional do servidor.' }
        ]
      },
      { 
        subject: 'Administração Pública_Superior', topic: 'Gestão Estratégica', 
        subs: [
          { name: 'Balanced Scorecard (BSC)', content: '# Balanced Scorecard\nFoca em perspectivas Financeira, do Cliente, de Processos e de Aprendizado.' },
          { name: 'Análise SWOT (Matriz FOFA)', content: '# Análise SWOT\nForças, Oportunidades, Fraquezas e Ameaças.' }
        ]
      },
      { 
        subject: 'Administração Pública_Superior', topic: 'Orçamento Público (AFO)', 
        subs: [
          { name: 'PPA, LDO e LOA', content: '# Instrumentos Orçamentários\nO PPA define diretrizes, a LDO orienta a elaboração e a LOA estima receitas e fixa despesas.' },
          { name: 'Princípios Orçamentários', content: '# Princípios de AFO\nUnidade, Universalidade e Anualidade.' }
        ]
      },
      { 
        subject: 'Atendimento e Ética_Médio', topic: 'Marketing de Relacionamento', 
        subs: [
          { name: 'CRM e Fidelização', content: '# Foco no Cliente\nGerenciar a interação para gerar valor a longo prazo.' },
          { name: 'Qualidade no Atendimento Telefônico', content: '# Atendimento Remoto\nAgilidade, clareza e cordialidade na comunicação.' }
        ]
      },
      { 
        subject: 'Atualidades_Médio', topic: 'Mundo Contemporâneo', 
        subs: [
          { name: 'Geopolítica e Conflitos Atuais', content: '# Panorama Mundial\nFoco nas tensões no Leste Europeu e Oriente Médio.' },
          { name: 'Economia Brasileira Atual', content: '# Inflação e PIB\nEntendimento dos indicadores econômicos atuais.' }
        ]
      },
      { 
        subject: 'Língua Portuguesa_Médio', topic: 'Sintaxe Avançada de Vírgula', 
        subs: [
          { name: 'A Vírgula no Período Composto', content: '# Uso da Vírgula\nSeparação de orações coordenadas e subordinadas adverbiais deslocadas.' },
          { name: 'Crase: Casos Proibitivos', content: '# Quando NÃO usar crase\nAntes de verbos, palavras masculinas e pronomes pessoais.' }
        ]
      },
      { 
        subject: 'Língua Portuguesa_Superior', topic: 'Estilística e Semântica', 
        subs: [
          { name: 'Metáfora e Metonímia', content: '# Figuras de Linguagem\nComparação implícita e substituição de termos por proximidade.' },
          { name: 'Ironia e Antítese', content: '# Outras Figuras\nDizer o contrário do que se pensa e oposição de ideias.' }
        ]
      },
      { 
        subject: 'Raciocínio Lógico e Matemática_Médio', topic: 'Conjuntos e Lógica', 
        subs: [
          { name: 'Operações com Conjuntos', content: '# Teoria dos Conjuntos\nUnião, Interseção e Diferença de conjuntos.' },
          { name: 'Diagramas de Venn', content: '# Resolução de Problemas\nUso de círculos para resolver questões de grupos.' }
        ]
      },
      { 
        subject: 'Informática_Médio', topic: 'Nuvem e Colaboração', 
        subs: [
          { name: 'Modelos SaaS, PaaS e IaaS', content: '# Cloud Computing\nDiferença entre software, plataforma e infraestrutura como serviço.' },
          { name: 'Segurança em Redes Sociais', content: '# Privacidade Digital\nCuidados com senhas e compartilhamento de dados.' }
        ]
      },
      { 
        subject: 'Direito Constitucional_Superior', topic: 'Remédios Constitucionais', 
        subs: [
          { name: 'Mandado de Injunção', content: '# Remédios\nCombate à falta de norma regulamentadora.' },
          { name: 'Ação Civil Pública', content: '# Proteção Coletiva\nDefesa do patrimônio público e meio ambiente.' }
        ]
      },
      { 
        subject: 'Direito Administrativo_Superior', topic: 'Poderes Administrativos', 
        subs: [
          { name: 'Poder Hierárquico e Disciplinar', content: '# Poderes da Adm\nCapacidade de organizar o serviço e punir faltas internas.' },
          { name: 'Poder de Polícia', content: '# Poder de Polícia\nRestrição a direitos individuais em prol do interesse público.' }
        ]
      }
    ];

    console.log("🛠️ Inserindo Tópicos e Subtópicos...");
    for (const item of items) {
      const subjectId = subjectMap[item.subject];
      if (!subjectId) {
        console.warn(`⚠️ Subject não encontrado: ${item.subject}`);
        continue;
      }

      const topicId = generateId();
      await client.query('INSERT INTO "Topic" (id, "subjectId", title, "order") VALUES ($1, $2, $3, $4)', [topicId, subjectId, item.topic, 0]);
      
      for (const sub of item.subs) {
        const subId = generateId();
        await client.query('INSERT INTO "SubTopic" (id, "topicId", name, content) VALUES ($1, $2, $3, $4)', [subId, topicId, sub.name, sub.content]);
      }
    }

    await client.query('COMMIT');
    console.log("✨ Expansão Concluída! ~40 novas matérias injetadas.");
  } catch (err) {
    if (client) await client.query('ROLLBACK');
    console.error("❌ Erro na expansão:", err);
  } finally {
    await client.end();
  }
}

main();
