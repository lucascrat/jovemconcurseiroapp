const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}

const questions = [
  // --- Maria da Penha ---
  {
    topicId: '0083264e8ef87a902358e2012444b48b',
    banca: 'CEBRASPE',
    statement: 'De acordo com a Lei Maria da Penha, a violência que envolve retenção, subtração ou destruição parcial de instrumentos de trabalho da mulher é classificada como violência:',
    options: {
        a: 'Patrimonial.',
        b: 'Psicológica.',
        c: 'Moral.',
        d: 'Física.',
        e: 'Sexual.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'O Art. 7º, inciso IV, define a violência patrimonial como qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, etc.'
  },
  {
    topicId: '0083264e8ef87a902358e2012444b48b',
    banca: 'VUNESP',
    statement: 'Nos casos de violência doméstica contra a mulher, a autoridade policial poderá afastar o agressor imediatamente do lar quando houver risco à vida da vítima, desde que:',
    options: {
        a: 'O município não seja sede de comarca.',
        b: 'A vítima tenha menos de 18 anos.',
        c: 'O agressor seja reincidente.',
        d: 'Haja autorização prévia por telefone do juiz.',
        e: 'O crime seja apenas de lesão corporal grave.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Conforme o Art. 12-C, a autoridade policial (delegado ou policial, se não houver delegado) pode afastar o agressor se o município não for sede de comarca.'
  },
  {
    topicId: '0083264e8ef87a902358e2012444b48b',
    banca: 'IBFC',
    statement: 'A Lei Maria da Penha veda a aplicação, nos casos de violência doméstica e familiar contra a mulher, de penas de:',
    options: {
        a: 'Cesta básica ou pagamento isolado de multa.',
        b: 'Reclusão superior a 10 anos.',
        c: 'Prestação de serviços à comunidade.',
        d: 'Monitoramento por tornozeleira eletrônica.',
        e: 'Afastamento do cargo público.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'O Art. 17 proíbe expressamente a aplicação de penas de cesta básica ou outras prestações pecuniárias.'
  },
  {
    topicId: '0083264e8ef87a902358e2012444b48b',
    banca: 'FGV',
    statement: 'A configuração da violência doméstica contra a mulher independe de:',
    options: {
        a: 'Orientação sexual da vítima ou do agressor.',
        b: 'Haver coabitação entre os envolvidos.',
        c: 'Ambas as alternativas anteriores estão corretas.',
        d: 'Vínculo de parentesco natural.',
        e: 'A vítima ter feito denúncia anterior.'
    },
    correctAnswer: 'c',
    type: 'multiple_choice',
    explanation: 'A lei se aplica independente de orientação sexual e independe de coabitação entre vítima e agressor.'
  },
  {
    topicId: '0083264e8ef87a902358e2012444b48b',
    banca: 'FCC',
    statement: 'A ação penal nos crimes de lesão corporal leve praticados contra a mulher no ambiente doméstico é:',
    options: {
        a: 'Pública incondicionada.',
        b: 'Pública condicionada à representação.',
        c: 'Privada.',
        d: 'Personalíssima.',
        e: 'Facultativa ao Ministério Público.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'O STF decidiu (ADI 4424) que nos casos de lesão corporal contra a mulher no âmbito doméstico, a ação é sempre pública incondicionada.'
  },

  // --- CTB ---
  {
    topicId: '97c2e48a226cc8657f57bb96934b6b86',
    banca: 'VUNESP',
    statement: 'De acordo com o CTB, um veículo que se aproxima de uma rotatória onde não há sinalização de preferência deve:',
    options: {
        a: 'Dar preferência ao veículo que já estiver circulando na rotatória.',
        b: 'Acelerar para passar antes dos outros.',
        c: 'Dar preferência ao veículo que vem pela esquerda.',
        d: 'Parar obrigatoriamente, mesmo que não venha ninguém.',
        e: 'Dar preferência a veículos de luxo.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'O Art. 29, inciso III, afirma que nas rotatórias a preferência é de quem já está circulando.'
  },
  {
    topicId: '97c2e48a226cc8657f57bb96934b6b86',
    banca: 'FCC',
    statement: 'As vias urbanas em que a velocidade máxima é de 80 km/h, caracterizadas por acessos especiais e ausência de cruzamentos em nível, são chamadas de:',
    options: {
        a: 'Vias de trânsito rápido.',
        b: 'Vias arteriais.',
        c: 'Vias coletoras.',
        d: 'Vias locais.',
        e: 'Rodovias federais.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'As vias de trânsito rápido têm velocidade de 80km/h e não possuem interseções em nível.'
  },
  {
    topicId: '97c2e48a226cc8657f57bb96934b6b86',
    banca: 'CEBRASPE',
    statement: 'Qual das opções abaixo constitui uma MEDIDA ADMINISTRATIVA prevista no CTB?',
    options: {
        a: 'Retenção do veículo.',
        b: 'Multa.',
        c: 'Suspensão do direito de dirigir.',
        d: 'Cassação da CNH.',
        e: 'Advertência por escrito.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Medidas administrativas geralmente começam com R ou T (Retenção, Remoção, Recolhimento). As demais são penalidades.'
  },
  {
    topicId: '97c2e48a226cc8657f57bb96934b6b86',
    banca: 'FGV',
    statement: 'A luz intermitente de cor amarela num semáforo significa que o condutor deve:',
    options: {
        a: 'Reduzir a velocidade e atravessar com atenção.',
        b: 'Parar imediatamente.',
        c: 'Aumentar a velocidade para limpar o cruzamento.',
        d: 'Ignorar e seguir normalmente.',
        e: 'Esperar ficar verde.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'O sinal amarelo indica atenção e advertência para a mudança de fase.'
  },
  {
    topicId: '97c2e48a226cc8657f57bb96934b6b86',
    banca: 'AOCP',
    statement: 'Dirigir veículo com a validade da CNH vencida há mais de 30 dias é uma infração:',
    options: {
        a: 'Gravíssima.',
        b: 'Grave.',
        c: 'Média.',
        d: 'Leve.',
        e: 'Não é infração.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Conforme o Art. 162, V, dirigir com CNH vencida há mais de 30 dias é infração gravíssima.'
  },

  // --- Agentes Públicos ---
  {
    topicId: 'bf5804e9adf56f9cf44768542b769e36',
    banca: 'FCC',
    statement: 'Os cidadãos convocados para prestar serviços transitórios e gratuitos ao Estado, como os jurados e mesários, são classificados como:',
    options: {
        a: 'Agentes honoríficos.',
        b: 'Agentes políticos.',
        c: 'Agentes delegados.',
        d: 'Servidores públicos estatutários.',
        e: 'Empregados públicos.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Agentes honoríficos são particulares que colaboram com o Estado por requisição ou nomeação, geralmente sem remuneração.'
  },
  {
    topicId: 'bf5804e9adf56f9cf44768542b769e36',
    banca: 'VUNESP',
    statement: 'A avaliação especial de desempenho é requisito necessário para o servidor público nomeado em virtude de concurso público adquirir:',
    options: {
        a: 'Estabilidade.',
        b: 'Vitaliciedade.',
        c: 'Aposentadoria integral.',
        d: 'Progressão funcional automática.',
        e: 'Imunidade parlamentar.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A estabilidade exige 3 anos de exercício e avaliação de desempenho (Art. 41 da CF).'
  },
  {
    topicId: 'bf5804e9adf56f9cf44768542b769e36',
    banca: 'IBFC',
    statement: 'O cargo de livre nomeação e exoneração, destinado apenas às funções de direção, chefia e assessoramento, é o:',
    options: {
        a: 'Cargo em comissão.',
        b: 'Cargo vitalício.',
        c: 'Cargo efetivo.',
        d: 'Emprego público celetista.',
        e: 'Mandato eletivo.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Cargos em comissão dispensam concurso e servem para funções estratégicas de confiança.'
  },
  {
    topicId: 'bf5804e9adf56f9cf44768542b769e36',
    banca: 'CEBRASPE',
    statement: 'A demissão de um servidor público estável pode ocorrer por sentença judicial transitada em julgado ou por:',
    options: {
        a: 'Processo administrativo com ampla defesa.',
        b: 'Vontade política do novo prefeito.',
        c: 'Final de mandato do governador.',
        d: 'Apenas se o servidor pedir para sair.',
        e: 'Redução de metas da empresa estatal.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'O servidor estável goza de proteção, perdendo o cargo apenas por sentença, PAD ou avaliação periódica insatisfatória.'
  },
  {
    topicId: 'bf5804e9adf56f9cf44768542b769e36',
    banca: 'FGV',
    statement: 'A proibição de acumulação remunerada de cargos públicos abrange:',
    options: {
        a: 'Autarquias, fundações e empresas públicas.',
        b: 'Apenas a administração direta.',
        c: 'Apenas cargos do mesmo poder.',
        d: 'Não se aplica a aposentados.',
        e: 'Cargos honoríficos apenas.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A proibição de acumular (salvo exceções como professores e médicos) estende-se a toda a administração indireta.'
  },

  // --- Direito Civil ---
  {
    topicId: 'e41fbd2b0ea15b91f220f5f68817d1a0',
    banca: 'VUNESP',
    statement: 'São exemplos de bens públicos de uso comum do povo:',
    options: {
        a: 'Praças, rios e estradas.',
        b: 'Edifícios ocupados por escolas públicas.',
        c: 'Prédios desativados e terras devolutas.',
        d: 'Equipamentos e viaturas policiais.',
        e: 'Móveis de uma repartição pública.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Bens de uso comum são aqueles abertos à coletividade sem necessidade de autorização específica.'
  },
  {
    topicId: 'e41fbd2b0ea15b91f220f5f68817d1a0',
    banca: 'FCC',
    statement: 'Os bens públicos que constituem o patrimônio das pessoas jurídicas de direito público, como objeto de direito pessoal ou real, são os:',
    options: {
        a: 'Bens dominicais.',
        b: 'Bens de uso especial.',
        c: 'Bens de uso comum.',
        d: 'Bens alienáveis por natureza.',
        e: 'Bens inexistentes.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Bens dominicais são o patrimônio "disponível" do Estado, que não tem destinação pública específica.'
  },
  {
    topicId: 'e41fbd2b0ea15b91f220f5f68817d1a0',
    banca: 'CEBRASPE',
    statement: 'A característica dos bens públicos que impede que sejam adquiridos por usucapião é a:',
    options: {
        a: 'Imprescritibilidade.',
        b: 'Inalienabilidade.',
        c: 'Impenhorabilidade.',
        d: 'Irreversibilidade.',
        e: 'Legalidade.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Bens públicos não prescrevem aquisitivamente (não admitem usucapião).'
  },
  {
    topicId: 'e41fbd2b0ea15b91f220f5f68817d1a0',
    banca: 'FGV',
    statement: 'A responsabilidade civil do Estado pelos danos que seus agentes causarem a terceiros é, em regra:',
    options: {
        a: 'Objetiva.',
        b: 'Subjetiva.',
        c: 'Inexistente.',
        d: 'Dependente de dolo comprovado.',
        e: 'Apenas moral.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A CF adota a teoria do risco administrativo (responsabilidade objetiva).'
  },
  {
    topicId: 'e41fbd2b0ea15b91f220f5f68817d1a0',
    banca: 'IESES',
    statement: 'Pessoas jurídicas de direito público interno incluem:',
    options: {
        a: 'União, Estados, DF, Municípios e Autarquias.',
        b: 'Empresas Públicas e Sociedades de Economia Mista.',
        c: 'Associações e Partidos Políticos.',
        d: 'Apenas a União e o Estado do Vaticano.',
        e: 'Fundações privadas.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Conforme o Código Civil, a administração direta e autarquias são de direito público interno.'
  },

  // --- Legislativo ---
  {
    topicId: '5f5c31da99b3015908eded33a27e172e',
    banca: 'FCC',
    statement: 'No sistema bicameral brasileiro, o Congresso Nacional é composto por:',
    options: {
        a: 'Câmara dos Deputados e Senado Federal.',
        b: 'Assembleia Legislativa e Câmara Municipal.',
        c: 'Poder Executivo e Poder Judiciário.',
        d: 'Delegados federais e estaduais.',
        e: 'Apenas uma câmara única de representantes.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'O Legislativo Federal é bicameral, composto por duas casas com representações distintas.'
  },
  {
    topicId: '5f5c31da99b3015908eded33a27e172e',
    banca: 'VUNESP',
    statement: 'Quantos senadores cada Estado e o Distrito Federal elegem?',
    options: {
        a: 'Três senadores.',
        b: 'Oito senadores.',
        c: 'Um senador.',
        d: 'Proporcional à população.',
        e: 'Cinco senadores.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A representação no Senado é igualitária: 3 senadores por ente federado (Estado e DF).'
  },
  {
    topicId: '5f5c31da99b3015908eded33a27e172e',
    banca: 'CEBRASPE',
    statement: 'Uma lei que exige maioria absoluta dos votos para ser aprovada é classificada como:',
    options: {
        a: 'Lei complementar.',
        b: 'Lei ordinária.',
        c: 'Lei delegada.',
        d: 'Medida provisória.',
        e: 'Decreto legislativo.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A principal diferença entre leis ordinárias (maioria simples) e complementares é o quórum de maioria absoluta.'
  },
  {
    topicId: '5f5c31da99b3015908eded33a27e172e',
    banca: 'FGV',
    statement: 'A prerrogativa do Presidente da República de editar normas com força de lei em caso de relevância e urgência refere-se à:',
    options: {
        a: 'Medida provisória.',
        b: 'Emenda constitucional.',
        c: 'Sanção presidencial.',
        d: 'Prerrogativa de foro.',
        e: 'Veto parcial.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'As MPs são instrumentos do Executivo com força de lei, vigentes por 60+60 dias.'
  },
  {
    topicId: '5f5c31da99b3015908eded33a27e172e',
    banca: 'AOCP',
    statement: 'Qual o órgão que auxilia o Congresso Nacional na fiscalização contábil, financeira e orçamentária?',
    options: {
        a: 'Tribunal de Contas da União (TCU).',
        b: 'Supremo Tribunal Federal (STF).',
        c: 'Ministério Público Federal (MPF).',
        d: 'Receita Federal.',
        e: 'Banco Central.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'O TCU é o órgão técnico auxiliar indispensável para o controle externo exercido pelo Congresso.'
  }
];

async function main() {
  try {
    await client.connect();
    console.log("Iniciando população de questões (Lote 11 - Parte 4)...");
    
    await client.query('BEGIN');
    
    for (const q of questions) {
      await client.query(
        'INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [generateId(), q.topicId, q.banca, q.statement, JSON.stringify(q.options), q.correctAnswer, q.type, q.explanation]
      );
    }
    
    await client.query('COMMIT');
    console.log("Lote 11 - Parte 4 concluído com sucesso!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na população:", err);
  } finally {
    await client.end();
  }
}

main();
