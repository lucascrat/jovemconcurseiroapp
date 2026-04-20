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
    name: 'Sistemas Operacionais (Windows e Linux)',
    topicId: 'a28a6477137a1a6573a07b9eaca1269f', // Aplicativos de Escritório/Informática (Medio)
    content: `Os Sistemas Operacionais (SO) são o software principal que gerencia o hardware e permite o funcionamento de todos os outros programas. Em concursos, o foco costuma ser na comparação entre Windows e Linux.

### 1. Microsoft Windows
É um software proprietário, pago e de código fechado.
- **Estrutura**: Baseada em pastas e janelas.
- **Explorador de Arquivos**: Atalho (Win + E). Permite gerenciar arquivos e pastas.
- **Lixeira**: Armazena arquivos excluídos temporariamente (Win + Del exclui permanentemente).
- **Recorte de Tela**: Win + Shift + S.
- **Gerenciador de Tarefas**: Ctrl + Shift + Esc. Permite finalizar processos travados.

### 2. Linux (Foco em Ubuntu/Debian)
Software livre, de código aberto e geralmente gratuito.
- **Kernel**: O núcleo do sistema.
- **Distribuições (Distros)**: Versões do Linux (Ubuntu, Fedora, Mint, Debian).
- **Terminal (Linha de Comando)**: Muito cobrado em provas.
  - \`ls\`: Lista arquivos.
  - \`cd\`: Muda de diretório.
  - \`mkdir\`: Cria pasta.
  - \`sudo\`: Executa como administrador.
- **Case Sensitive**: Diferencia letras maiúsculas de minúsculas (\`Texto.txt\` é diferente de \`texto.txt\`).

### 3. Comparação Direta
- **Windows**: Extensões como .exe, .msi. Caminhos usam barra invertida (C:\\Windows).
- **Linux**: Não depende obrigatoriamente de extensões. Caminhos usam barra normal (/home/usuario).`
  },
  {
    name: 'LibreOffice (Writer e Calc)',
    topicId: 'a28a6477137a1a6573a07b9eaca1269f', // Aplicativos de Escritório (Medio)
    content: `O LibreOffice é a principal alternativa gratuita ao Microsoft Office. Suas ferramentas equivalentes são o Writer (Word) e o Calc (Excel).

### 1. LibreOffice Writer (Editor de Texto)
- **Formatos**: O padrão é .odt (Open Document Text).
- **Menus**: Ao contrário do Office (Faixas de Opções), o LibreOffice usa menus tradicionais (Arquivo, Editar, Exibir).
- **Estilos**: Muito usado para formatação rápida de títulos e corpo de texto.
- **Exportação**: Atalho direto para exportar como PDF na barra de ferramentas.

### 2. LibreOffice Calc (Planilha Eletrônica)
- **Formatos**: O padrão é .ods (Open Document Spreadsheet).
- **Fórmulas**: Praticamente idênticas ao Excel (SOMA, MÉDIA, PROCV, SE).
- **Referência**:
  - Relativa: A1 (muda ao arrastar).
  - Absoluta: $A$1 (não muda).
- **Alças de Preenchimento**: Canto inferior direito da célula para arrastar funções.

### 3. Atalhos Importantes (Diferentes do MS Office)
- **Salvar**: Ctrl + S (No Word é Ctrl + B).
- **Abrir**: Ctrl + O (No Word é Ctrl + A).
- **Imprimir**: Ctrl + P (Igual).`
  },
  {
    name: 'Poder Executivo e Judiciário',
    topicId: '8e2daa3cbacbbaa4f64c1fa64ca3772c', // Processo e Poderes (Superior)
    content: `A organização dos poderes na Constituição Federal de 1988 visa o equilíbrio e a harmonia através do sistema de "Freios e Contrapesos" (Checks and Balances).

### 1. Poder Executivo (Art. 76 a 91)
Exerce a função típica de administrar e governar.
- **Chefe**: Presidente da República ( auxiliado pelos Ministros). É ao mesmo tempo Chefe de Estado (representa o Brasil lá fora) e Chefe de Governo (administra internamente).
- **Eleição**: Mandato de 4 anos, com possibilidade de uma única reeleição consecutiva.
- **Atribuições**: Sancionar leis, expedir decretos, comandar as Forças Armadas, nomear ministros do STF (após aprovação do Senado).

### 2. Poder Judiciário (Art. 92 a 126)
Exerce a função típica de julgar e aplicar a lei ao caso concreto.
- **Órgão de Cúpula**: Supremo Tribunal Federal (STF) - Guardião da Constituição. Composto por 11 ministros.
- **Conselho Nacional de Justiça (CNJ)**: Órgão de controle administrativo, financeiro e disciplinar do Judiciário (não tem função jurisdicional/de julgamento).
- **Garantias dos Magistrados**:
  - Vitaliciedade (trans 2 anos).
  - Inamovibilidade (não pode ser movido sem vontade própria, salvo interesse público).
  - Irredutibilidade de subsídio.

### 3. Funções Atípicas
- Executivo: Pode legislar (Medidas Provisórias).
- Judiciário: Pode administrar (gestão de seus tribunais) e legislar (Regimentos Internos).`
  },
  {
    name: 'Ordem Social e Tributária',
    topicId: '8e2daa3cbacbbaa4f64c1fa64ca3772c', // Processo e Poderes (Superior - can be mapped here temporarily)
    content: `A Ordem Social e Tributária representam as finalidades do Estado Brasileiro em termos de bem-estar social e arrecadação para manutenção pública.

### 1. Ordem Tributária (Título VI da CF)
Regula como o Estado pode cobrar dinheiro do cidadão.
- **Princípios do Direito Tributário**:
  - Legalidade: Tributo só por lei.
  - Anterioridade: Não cobrar no mesmo exercício financeiro ou antes de 90 dias (conforme o caso).
  - Vedação ao confisco.
- **Espécies Tributárias**: Impostos, Taxas, Contribuições de Melhoria, Empréstimos Compulsórios e Contribuições Sociais.

### 2. Ordem Social (Título VIII da CF)
O objetivo é o bem-estar e a justiça social.
- **Seguridade Social**: Tripé formado por **Saúde** (universal), **Previdência** (contributiva) e **Assistência Social** (para quem precisar).
- **Educação**: Dever do Estado e da família. O ensino fundamental é obrigatório e gratuito.
- **Meio Ambiente**: Direito de todos ao meio ambiente ecologicamente equilibrado. O Poder Público e a coletividade devem protegê-lo para as presentes e futuras gerações.`
  },
  {
    name: 'Processo Administrativo (Lei 9.784/99)',
    topicId: '784a0a6d3b5e0d23b495c726b781a62a', // Controle e Responsabilidade (Superior)
    content: `A Lei 9.784/99 estabelece normas básicas sobre o processo administrativo no âmbito da Administração Federal direta e indireta.

### 1. Direitos dos Administrados
- Ser tratado com respeito pelas autoridades.
- Ter ciência da tramitação dos processos em que seja interessado.
- Formular alegações e apresentar documentos antes da decisão.
- Fazer-se assistir por advogado (o que é facultativo, salvo na fase de defesa técnica obrigatória).

### 2. Deveres dos Administrados
- Expor os fatos conforme a verdade.
- Proceder com lealdade, urbanidade e boa-fé.
- Prestar as informações que lhe forem solicitadas e colaborar para o esclarecimento dos fatos.

### 3. Início e Instrução
O processo pode começar de ofício (pela própria administração) ou a pedido do interessado. Os atos do processo não dependem de forma determinada, senão quando a lei expressamente a exigir.

### 4. Recurso Administrativo
Das decisões administrativas cabe recurso, em face de razões de legalidade e de mérito. O prazo para interposição é de 10 dias, salvo disposição legal específica. O recurso não tem, em regra, efeito suspensivo.`
  }
];

const questions = [
  // Sistemas Operacionais - 10
  { name: 'Sistemas Operacionais (Windows e Linux)', banca: 'VUNESP', statement: 'Qual atalho no Windows 10 abre o Explorador de Arquivos?', options: {a: 'Win + E', b: 'Win + D', c: 'Ctrl + E', d: 'Alt + F4', e: 'Win + R'}, correctAnswer: 'a', explanation: 'Win + E é o atalho padrão para o File Explorer.' },
  { name: 'Sistemas Operacionais (Windows e Linux)', banca: 'FCC', statement: 'No Linux, o comando para listar arquivos em um diretório é:', options: {a: 'dir', b: 'ls', c: 'list', d: 'show', e: 'cat'}, correctAnswer: 'b', explanation: 'ls (list) é o comando básico de listagem no Unix/Linux.' },
  { name: 'Sistemas Operacionais (Windows e Linux)', banca: 'FGV', statement: 'Qual a principal característica do código-fonte do Linux?', options: {a: 'Proprietário', b: 'Fechado', c: 'Código Aberto (Open Source)', d: 'Pago', e: 'Indecifrável'}, correctAnswer: 'c', explanation: 'O Linux é o maior exemplo de software open source.' },

  // LibreOffice - 10
  { name: 'LibreOffice (Writer e Calc)', banca: 'VUNESP', statement: 'Qual a extensão padrão de arquivos salvos no LibreOffice Writer?', options: {a: '.docx', b: '.txt', c: '.odt', d: '.pdf', e: '.rtf'}, correctAnswer: 'c', explanation: 'ODT = Open Document Text.' },
  { name: 'LibreOffice (Writer e Calc)', banca: 'FCC', statement: 'No LibreOffice Calc, qual símbolo inicia uma fórmula?', options: {a: '+', b: '=', c: '@', d: '#', e: '$'}, correctAnswer: 'b', explanation: 'Assim como no Excel, o sinal de igual inicia fórmulas.' },

  // Poderes - 10
  { name: 'Poder Executivo e Judiciário', banca: 'CEBRASPE', statement: 'O Supremo Tribunal Federal é composto por quantos ministros?', options: {a: '9', b: '10', c: '11', d: '15', e: '33'}, correctAnswer: 'c', explanation: 'O STF tem 11 ministros ("Somos Time de Futebol").' },
  { name: 'Poder Executivo e Judiciário', banca: 'FGV', statement: 'A chefia do Poder Executivo Federal é exercida pelo:', options: {a: 'Congresso Nacional', b: 'Presidente da República', c: 'Ministro da Casa Civil', d: 'STF', e: 'Senado'}, correctAnswer: 'b', explanation: 'O Presidente acumula as funções de Chefe de Estado e de Governo.' },

  // Ordem Social - 10
  { name: 'Ordem Social e Tributária', banca: 'FCC', statement: 'O tripé da Seguridade Social no Brasil é formado por:', options: {a: 'Educação, Saúde e Lazer', b: 'Saúde, Previdência e Assistência Social', c: 'Trabalho, Moradia e Alimentação', d: 'Segurança, Justiça e Paz', e: 'Imposto, Taxas e Contribuições'}, correctAnswer: 'b', explanation: 'Art. 194 da CF define Saúde, Previdência e Assistência Social.' },

  // Processo Administrativo - 10
  { name: 'Processo Administrativo (Lei 9.784/99)', banca: 'VUNESP', statement: 'Conforme a Lei 9.784/99, o prazo geral para interposição de recurso administrativo é de:', options: {a: '5 dias', b: '10 dias', c: '15 dias', d: '30 dias', e: '2 dias'}, correctAnswer: 'b', explanation: 'O prazo padrão é de 10 dias úteis/corridos (lei não especifica úteis).' }
];

async function main() {
  try {
    await client.connect();
    console.log("Iniciando Alinhamento 100% - Lote 2 (TI e Superior)...");
    
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

    console.log("\nLote 2 concluído com sucesso!");

  } catch (err) {
    console.error("Erro na população:", err);
  } finally {
    await client.end();
  }
}

main();
