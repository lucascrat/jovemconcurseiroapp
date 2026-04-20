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
  // --- DUDH ---
  {
    topicId: '0ded5a4e61734ac61fcf49c04b8f16d4',
    banca: 'VUNESP',
    statement: 'Segundo a Declaração Universal dos Direitos Humanos (1948), é correto afirmar que:',
    options: {
      a: 'Ninguém será arbitrariamente preso, detido ou exilado.',
      b: 'A educação deve ser gratuita apenas no ensino médio.',
      c: 'O direito de asilo é absoluto, mesmo em caso de crimes comuns.',
      d: 'A vontade do povo é a base da autoridade do governo, mas não precisa ser expressa via sufrágio universal.',
      e: 'O direito à propriedade é apenas coletivo.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'O Artigo 9º da DUDH estabelece categoricamente que ninguém será arbitrariamente preso, detido ou exilado.'
  },
  {
    topicId: '0ded5a4e61734ac61fcf49c04b8f16d4',
    banca: 'FCC',
    statement: 'A DUDH estabelece que a maternidade e a infância têm direito a:',
    options: {
        a: 'Cuidados e assistência especiais.',
        b: 'Isenção total de impostos.',
        c: 'Prioridade absoluta sobre qualquer outro direito.',
        d: 'Apenas assistência médica básica.',
        e: 'Ensino superior gratuito imediato.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Conforme o Artigo 25, item 2 da DUDH: "A maternidade e a infância têm direito a cuidados e assistência especiais."'
  },
  {
    topicId: '0ded5a4e61734ac61fcf49c04b8f16d4',
    banca: 'CEBRASPE',
    statement: 'Sobre os Direitos Humanos, assinale a alternativa que descreve a característica da Universalidade.',
    options: {
        a: 'Os direitos valem para todos os seres humanos, independentemente de raça, sexo ou nacionalidade.',
        b: 'Os direitos não podem ser vendidos ou transferidos.',
        c: 'Os direitos não se perdem pelo decurso do tempo.',
        d: 'Os direitos devem ser vistos como um todo, não podendo ser fragmentados.',
        e: 'O indivíduo não pode renunciar a seus próprios direitos.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A Universalidade implica que todos os seres humanos são titulares desses direitos, sem qualquer tipo de discriminação.'
  },
  {
    topicId: '0ded5a4e61734ac61fcf49c04b8f16d4',
    banca: 'FGV',
    statement: 'A DUDH prevê que ninguém será mantido em escravidão ou servidão. Essa vedação é considerada:',
    options: {
        a: 'Absoluta e inderrogável.',
        b: 'Relativa, dependendo do estado de guerra.',
        c: 'Aplicável apenas a cidadãos de países membros da ONU.',
        d: 'Uma norma de caráter puramente recomendatório.',
        e: 'Garantida apenas para maiores de 18 anos.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A proibição da escravidão e do tráfico de escravos (Art. 4º) é uma norma de jus cogens, ou seja, imperativa e absoluta.'
  },
  {
    topicId: '0ded5a4e61734ac61fcf49c04b8f16d4',
    banca: 'IBADE',
    statement: 'De acordo com o Art. 1º da DUDH, todos os seres humanos nascem livres e iguais em:',
    options: {
        a: 'Dignidade e direitos.',
        b: 'Riquezas e oportunidades.',
        c: 'Inteligência e força.',
        d: 'Crenças e opiniões.',
        e: 'Poder político.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'O Artigo 1º afirma: "Todos os seres humanos nascem livres e iguais em dignidade e direitos."'
  },

  // --- SUS ---
  {
    topicId: 'ea78766bb6eb4630efb0af5945348963',
    banca: 'VUNESP',
    statement: 'Constitui um princípio DOUTRINÁRIO do Sistema Único de Saúde (SUS):',
    options: {
        a: 'Integralidade da assistência.',
        b: 'Descentralização administrativa.',
        c: 'Regionalização dos serviços.',
        d: 'Participação da comunidade.',
        e: 'Hierarquização das unidades.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A Integralidade é um dos três princípios doutrinários (junto com Universalidade e Equidade). Os demais são organizativos.'
  },
  {
    topicId: 'ea78766bb6eb4630efb0af5945348963',
    banca: 'FCC',
    statement: 'A Lei 8.142/1990 dispõe sobre a participação da comunidade na gestão do SUS. Essa participação ocorre através de:',
    options: {
        a: 'Conferências de Saúde e Conselhos de Saúde.',
        b: 'Referendos e Plebiscitos anuais.',
        c: 'Apenas votação para cargos de diretoria de hospitais.',
        d: 'Sindicatos de trabalhadores da saúde exclusivamente.',
        e: 'Grupos de WhatsApp monitorados pelo Ministério.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A Lei 8.142 estabelece as Conferências e os Conselhos de Saúde como instâncias de participação social.'
  },
  {
    topicId: 'ea78766bb6eb4630efb0af5945348963',
    banca: 'CEBRASPE',
    statement: 'Sobre a Equidade no SUS, é correto afirmar que ela busca:',
    options: {
        a: 'Oferecer mais a quem mais precisa para reduzir desigualdades.',
        b: 'Oferecer exatamente o mesmo serviço a todos, sem distinção.',
        c: 'Priorizar o atendimento a quem contribui com a previdência.',
        d: 'Garantir que apenas hospitais de elite atendam casos complexos.',
        e: 'Eliminar o atendimento privado no país.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Equidade significa tratar desigualmente os desiguais, focando recursos onde a necessidade é maior para promover justiça social.'
  },
  {
    topicId: 'ea78766bb6eb4630efb0af5945348963',
    banca: 'FGV',
    statement: 'Segundo a Lei 8.080/90, a assistência à saúde pela iniciativa privada é:',
    options: {
        a: 'Livre.',
        b: 'Proibida.',
        c: 'Permitida apenas para estrangeiros.',
        d: 'Obrigatória em todos os municípios.',
        e: 'Subordinada diretamente ao Exército.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A Constituição e a Lei 8.080 estabelecem que a assistência à saúde é livre à iniciativa privada.'
  },
  {
    topicId: 'ea78766bb6eb4630efb0af5945348963',
    banca: 'AOCP',
    statement: 'A Descentralização no SUS implica em:',
    options: {
        a: 'Distribuição de responsabilidades para estados e municípios, com comando único em cada esfera.',
        b: 'Concentração de todo o poder no Ministério da Saúde em Brasília.',
        c: 'Extinção das secretarias estaduais de saúde.',
        d: 'Criação de um imposto único para a saúde.',
        e: 'Terceirização total dos hospitais públicos.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A descentralização visa aproximar o serviço do cidadão, dando autonomia administrativa aos entes federados.'
  },

  // --- Redação ---
  {
    topicId: 'dfeb5b580536929e67ba60a1abb27164',
    banca: 'FCC',
    statement: 'Na redação oficial, o princípio que veda o uso de gírias e regionalismos para garantir a compreensão universal é a:',
    options: {
        a: 'Clareza.',
        b: 'Impessoalidade.',
        c: 'Concisão.',
        d: 'Formalidade.',
        e: 'Publicidade.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A Clareza permite a imediata compreensão pelo leitor, evitando ambiguidades, gírias ou termos técnicos desnecessários.'
  },
  {
    topicId: 'dfeb5b580536929e67ba60a1abb27164',
    banca: 'VUNESP',
    statement: 'Qual o fecho adequado para um ofício enviado por um Diretor para o Governador do Estado?',
    options: {
        a: 'Respeitosamente.',
        b: 'Atenciosamente.',
        c: 'Com carinho.',
        d: 'Cordialmente.',
        e: 'Saudações.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Usa-se "Respeitosamente" para autoridades de hierarquia superior.'
  },
  {
    topicId: 'dfeb5b580536929e67ba60a1abb27164',
    banca: 'IBFC',
    statement: 'No Padrão Ofício, a parte que contém o resumo do que será tratado no documento chama-se:',
    options: {
        a: 'Assunto.',
        b: 'Cabeçalho.',
        c: 'Vocativo.',
        d: 'Endereçamento.',
        e: 'Local e Data.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'O campo "Assunto" deve trazer uma síntese clara do conteúdo do documento.'
  },
  {
    topicId: 'dfeb5b580536929e67ba60a1abb27164',
    banca: 'CEBRASPE',
    statement: 'A impessoalidade na redação oficial significa que:',
    options: {
        a: 'O tratamento deve ser o mesmo para todos, sem opiniões pessoais do autor.',
        b: 'O autor não precisa assinar o documento.',
        c: 'O documento não tem destinatário específico.',
        d: 'Pode-se usar a primeira pessoa do singular livremente.',
        e: 'O texto deve ser obrigatoriamente seco e agressivo.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A impessoalidade decorre da ausência de impressões individuais do autor e do caráter público da comunicação.'
  },
  {
    topicId: 'dfeb5b580536929e67ba60a1abb27164',
    banca: 'FGV',
    statement: 'Qual o vocativo correto para o Presidente da República em um envelope?',
    options: {
        a: 'A Sua Excelência o Senhor.',
        b: 'Ao Excelentíssimo Senhor Presidente.',
        c: 'Para o Caro Presidente.',
        d: 'Ao Sr. Presidente.',
        e: 'Vossa Excelência.'
    },
    correctAnswer: 'b',
    type: 'multiple_choice',
    explanation: 'Para o Chefe de Poder, o vocativo é "Excelentíssimo Senhor" seguido do cargo.'
  },

  // --- Crase ---
  {
    topicId: 'eff4b8f9f174958caa48355e2905bd7d',
    banca: 'VUNESP',
    statement: 'Assinale a alternativa em que o uso do acento grave (crase) está CORRETO:',
    options: {
        a: 'O aluno entregou a redação à professora.',
        b: 'Ele começou à correr no parque.',
        c: 'Fomos à pé até o cinema.',
        d: 'Enviei o documento à ele ontem.',
        e: 'Estamos frente à frente com o problema.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Entregou "a algo" (preposição) "a professora" (artigo). Nas demais: b) antes de verbo, c) antes de masculina, d) antes de pronome pessoal, e) palavras repetidas.'
  },
  {
    topicId: 'eff4b8f9f174958caa48355e2905bd7d',
    banca: 'FCC',
    statement: 'O acento indicativo de crase é FACULTATIVO em:',
    options: {
        a: 'Refiro-me à Maria.',
        b: 'Chegamos às duas horas.',
        c: 'Vou à cidade.',
        d: 'Assistimos à peça.',
        e: 'Fui à escola.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A crase é facultativa antes de nomes próprios femininos e pronomes possessivos femininos.'
  },
  {
    topicId: 'eff4b8f9f174958caa48355e2905bd7d',
    banca: 'CEBRASPE',
    statement: 'Em qual das expressões abaixo a crase é PROIBIDA?',
    options: {
        a: 'A prazo.',
        b: 'Às pressas.',
        c: 'À noite.',
        d: 'À direita.',
        e: 'À deriva.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: '"Prazo" é palavra masculina, portanto a crase é proibida.'
  },
  {
    topicId: 'eff4b8f9f174958caa48355e2905bd7d',
    banca: 'FGV',
    statement: 'Assinale a frase correta quanto à regência e ao uso da crase:',
    options: {
        a: 'Obedeça às leis para evitar multas.',
        b: 'Fomos à um lugar muito distante.',
        c: 'Aspiro à um cargo público.',
        d: 'Ela se referiu à mim cordialmente.',
        e: 'Desejo à todos um feliz natal.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'O verbo obedecer exige a preposição "a". "Leis" aceita artigo plural "as". Logo, "às".'
  },
  {
    topicId: 'eff4b8f9f174958caa48355e2905bd7d',
    banca: 'CESGRANRIO',
    statement: 'No trecho "A medida que o tempo passa...", o uso da crase ocorre por causa de:',
    options: {
        a: 'Uma locução conjuntiva feminina.',
        b: 'Uma locução prepositiva masculina.',
        c: 'A presença de um verbo transitivo direto.',
        d: 'A falta de um complemento nominal.',
        e: 'Pura estética gramatical.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Locuções conjuntivas femininas indicando proporção ("à medida que") sempre levam crase.'
  },

  // --- Juros ---
  {
    topicId: 'a73c09f7c80886b4ae28ba407c842e1f',
    banca: 'CESGRANRIO',
    statement: 'No Sistema de Amortização Constante (SAC), é correto afirmar que:',
    options: {
        a: 'O valor da amortização é igual em todas as prestações.',
        b: 'As prestações são constantes.',
        c: 'Os juros aumentam ao longo do tempo.',
        d: 'A amortização diminui a cada mês.',
        e: 'Não há incidência de juros.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'No SAC, como o nome diz, a amortização é fixa (Divida / Meses).'
  },
  {
    topicId: 'a73c09f7c80886b4ae28ba407c842e1f',
    banca: 'FCC',
    statement: 'Um capital de R$ 1.000,00 aplicado a juros simples de 10% ao mês, durante 3 meses, resultará em um montante de:',
    options: {
        a: 'R$ 1.300,00',
        b: 'R$ 1.331,00',
        c: 'R$ 1.100,00',
        d: 'R$ 1.200,00',
        e: 'R$ 1.500,00'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'J = 1000 * 0.1 * 3 = 300. Montante = 1000 + 300 = 1300.'
  },
  {
    topicId: 'a73c09f7c80886b4ae28ba407c842e1f',
    banca: 'CEBRASPE',
    statement: 'A tabela PRICE (Sistema Francês) caracteriza-se por:',
    options: {
        a: 'Prestações constantes.',
        b: 'Amortizações constantes.',
        c: 'Juros crescentes.',
        d: 'Saldo devedor invariável.',
        e: 'Ausência de capitalização.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Na tabela PRICE, as parcelas (prestações) mensais são iguais do início ao fim.'
  },
  {
    topicId: 'a73c09f7c80886b4ae28ba407c842e1f',
    banca: 'FGV',
    statement: 'Nos Juros Compostos, o montante cresce de forma:',
    options: {
        a: 'Exponencial.',
        b: 'Linear.',
        c: 'Logarítmica.',
        d: 'Inversa.',
        e: 'Estagnada.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'Devido à capitalização dos juros sobre o saldo anterior, o crescimento é geométrico/exponencial.'
  },
  {
    topicId: 'a73c09f7c80886b4ae28ba407c842e1f',
    banca: 'IBFC',
    statement: 'Qual a taxa efetiva anual equivalente a uma taxa nominal de 12% ao ano com capitalização mensal?',
    options: {
        a: 'Ligeiramente superior a 12%.',
        b: 'Ligeiramente inferior a 12%.',
        c: 'Exatamente 12%.',
        d: '24% ao ano.',
        e: '1% ao ano.'
    },
    correctAnswer: 'a',
    type: 'multiple_choice',
    explanation: 'A capitalização mensal (juros sobre juros) faz com que a taxa efetiva final seja maior que a nominal somada.'
  }
];

async function main() {
  try {
    await client.connect();
    console.log("Iniciando população de questões (Lote 11 - Parte 3)...");
    
    await client.query('BEGIN');
    
    for (const q of questions) {
      await client.query(
        'INSERT INTO "Question" (id, "topicId", banca, statement, options, "correctAnswer", type, explanation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [generateId(), q.topicId, q.banca, q.statement, JSON.stringify(q.options), q.correctAnswer, q.type, q.explanation]
      );
    }
    
    await client.query('COMMIT');
    console.log("Lote 11 - Parte 3 concluído com sucesso!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na população:", err);
  } finally {
    await client.end();
  }
}

main();
