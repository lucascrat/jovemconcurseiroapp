const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const batch2 = [
  {
    ids: ['77f553d39a42802f08ba503c50c5c9ae', '5a1d7e74a75ec82daa4b8069c28f496b'],
    name: 'Maria da Penha',
    content: `# Lei Maria da Penha (Lei nº 11.340/2006) - Conteúdo Aprofundado

A **Lei Maria da Penha** é o principal instrumento jurídico para combater a violência doméstica e familiar contra a mulher no Brasil. Ela não cria um novo tipo penal, mas estabelece mecanismos de proteção e aumenta o rigor das punições.

## 1. Âmbito de Aplicação (Art. 5º)
A violência deve ocorrer em:
*   **Unidade Doméstica:** Espaço de convívio permanente de pessoas (com ou sem vínculo familiar).
*   **Família:** Comunidade formada por indivíduos que são ou se consideram aparentados (laços naturais, afinidade ou vontade).
*   **Relação Íntima de Afeto:** Qualquer relação onde o agressor conviva ou tenha convivido com a vítima, independente de coabitação.

## 2. Formas de Violência (Art. 7º) - MUITO COBRADO
1.  **Física:** Ofensa à integridade ou saúde corporal.
2.  **Psicológica:** Dano emocional, diminuição da autoestima, controle, isolamento, humilhação.
3.  **Sexual:** Coagir a presenciar, a manter ou a participar de relação sexual não desejada.
4.  **Patrimonial:** Retenção, subtração, destruição de objetos, instrumentos de trabalho, documentos ou bens.
5.  **Moral:** Calúnia, difamação ou injúria.

## 3. Assistência à Mulher em Situação de Violência
*   **Juizados de Violência Doméstica:** Têm competência cível e criminal.
*   **Atendimento Policial:** Deve ser especializado, preferencialmente por mulheres.
*   **Vedação de penas pecuniárias:** É proibida a aplicação de penas de cesta básica ou multas isoladas.

## 4. Medidas Protetivas de Urgência
Podem ser concedidas pelo juiz em 48 horas:
*   Pelo juiz (Art. 22): Suspensão do porte de armas, afastamento do lar, proibição de contato.
*   Pela autoridade policial (Art. 12-C): Em casos de risco atual ou iminente, se o município não for sede de comarca, o delegado ou policial pode afastar o agressor imediatamente do lar.

## 5. Aspectos Processuais Importantes
*   **Ação Penal:** Nos crimes de lesão corporal (leve, grave ou gravíssima), a ação é **Pública Incondicionada** (Súmula 589 do STJ). A vítima não pode "retirar a queixa".
*   **Desistência (Art. 16):** Só é admitida renúncia à representação (em crimes que admitem, como ameaça) perante o juiz, em audiência específica, antes do recebimento da denúncia.`
  },
  {
    ids: ['0629412791656297109fd62376bb5634', 'f8e7ad403a0bf820795c1340ebc82cf2'],
    name: 'CTB',
    content: `# Código de Trânsito Brasileiro (CTB) - Resumo Estratégico

O **CTB (Lei nº 9.503/1997)** rege o trânsito de qualquer natureza nas vias terrestres do território nacional abertas à circulação.

## 1. Sistema Nacional de Trânsito (SNT)
Conjunto de órgãos que planejam e fiscalizam.
*   **CONTRAN:** Órgão máximo **Normativo** e Consultivo (Federal).
*   **DENATRAN (agora SENATRAN):** Órgão máximo **Executivo** da União.
*   **DETRAN:** Órgão Executivo dos Estados.
*   **JARI:** Órgão que julga os recursos contra penalidades.

## 2. Normas Gerais de Circulação e Conduta (Art. 26 a 67)
*   **Lado da Via:** A circulação deve ser feita pelo lado **direito**, admitida exceções sinalizadas.
*   **Prioridade:** Veículos de socorro (ambulância, polícia, bombeiros) em serviço de urgência, com sirene e luz intermitente, têm prioridade de passagem e livre circulação/estacionamento.
*   **Ultrapassagem:** Regra geral pela esquerda. Pela direita apenas quando o veículo à frente sinalizar que vai entrar à esquerda.
*   **Rotatória:** A preferência é de quem já está circulando nela, salvo sinalização contrária.

## 3. Classificação das Vias
*   **Vias Urbanas:**
    *   Trânsito Rápido: 80 km/h.
    *   Arterial: 60 km/h.
    *   Coletora: 40 km/h.
    *   Local: 30 km/h.
*   **Vias Rurais:**
    *   Rodovias (Simples): 100 km/h (carros) / 90 km/h (demais).
    *   Rodovias (Duplas): 110 km/h (carros) / 90 km/h (demais).

## 4. Infrações e Penalidades (Art. 256)
*   **Penalidades:** Advertência por escrito, Multa, Suspensão do direito de dirigir, Cassação da CNH, Frequência obrigatória em curso de reciclagem.
*   **Medidas Administrativas (Começam com R ou T):** Retenção do veículo, Remoção do veículo, Recolhimento da CNH, Transbordo de excesso de carga.

## 5. Crimes de Trânsito
Destaque para o **Homicídio Culposo** e **Embriaguez ao Volante** (Art. 306). A concentração igual ou superior a 6 decigramas de álcool por litro de sangue configura crime.`
  },
  {
    ids: ['f89ff0f532600bed9b7d8953ea846901', '43a9835abc17962b119480e1df86a01a'],
    name: 'Agentes Públicos',
    content: `# Agentes Públicos e Regime Jurídico

**Agentes Públicos** são todas as pessoas que exercem uma função pública, de forma temporária ou permanente, com ou sem remuneração.

## 1. Classificação dos Agentes
1.  **Agentes Políticos:** Formadores da vontade do Estado (Chefes do Executivo, Legisladores, Ministros).
2.  **Agentes Administrativos (Servidores):**
    *   **Estatutários:** Regidos por estatuto (Lei 8.112 para União). Estáveis após 3 anos.
    *   **Empregados Públicos:** Regidos pela CLT (Empresas Públicas, Sociedades de Economia Mista).
    *   **Temporários:** Contratados por tempo determinado para necessidade de excepcional interesse público.
3.  **Agentes Honoríficos:** Cidadãos convocados para serviços transitórios (Jurados, Mesários).
4.  **Agentes Delegados:** Particulares que executam serviço por delegação (Concessionários).

## 2. Acessibilidade aos Cargos (Art. 37 da CF)
*   Cargos e empregos são acessíveis a brasileiros e estrangeiros (na forma da lei).
*   Investidura depende de aprovação prévia em **Concurso Público** de provas ou provas e títulos.
*   **Exceção:** Cargos em comissão (livre nomeação e exoneração) destinados às funções de Direção, Chefia e Assessoramento.

## 3. Estabilidade vs Vitaliciedade
*   **Estabilidade:** Adquirida após 3 anos de efetivo exercício após avaliação de desempenho. O servidor estável só perde o cargo por: sentença judicial transitada em julgado, processo administrativo com defesa, avaliação periódica de desempenho ou corte de gastos (Art. 169).
*   **Vitaliciedade:** Garantia de magistrados e membros do MP. Só perdem o cargo por sentença judicial.

## 4. Regime Disciplinar e Penas
Conforme a Lei 8.112/90:
*   **Advertência:** Infração leve (escrita).
*   **Suspensão:** Até 90 dias.
*   **Demissão:** Falta grave (improbidade, abandono de cargo, corrupção).
*   **Cassação de Aposentadoria:** Quando o inativo praticou falta punível com demissão na ativa.`
  },
  {
    ids: ['0e2c4a23a28a7a3f09b9ab85e618064f', '2faecc47e38922fedf1387088ac5c8df'],
    name: 'Direito Civil',
    content: `# Direito Civil aplicado à Administração Pública

Embora a Administração Pública seja regida pelo Direito Administrativo (Regime Público), ela frequentemente utiliza institutos do **Direito Civil** em suas relações contratuais e patrimoniais.

## 1. Pessoas Jurídicas (Art. 40 do CC)
*   **Pessoas Jurídicas de Direito Público Interno:** União, Estados, DF, Municípios, Autarquias e Fundações Públicas.
*   **Pessoas Jurídicas de Direito Privado:** Sociedades de Economia Mista, Empresas Públicas e Associações.

## 2. Bens Públicos (Art. 98 e seguintes do CC)
*   **Bens de Uso Comum do Povo:** Rios, mares, estradas, praças.
*   **Bens de Uso Especial:** Edifícios ou terrenos destinados a serviço ou estabelecimento da administração (Escolas, Hospitais, Quartéis).
*   **Bens Dominicais:** Patrimônio das pessoas jurídicas de direito público, como objeto de direito pessoal ou real (Terras devolutas, prédios desativados). **São os únicos que podem ser alienados.**

## 3. Características dos Bens Públicos
*   **Inalienabilidade:** Salvo os dominicais, seguindo a lei.
*   **Impenhorabilidade:** Não podem ser objeto de penhora judicial (Pagam via Precatórios).
*   **Imprescritibilidade:** Não podem ser adquiridos por **Usucapião**.
*   **Não Onerabilidade:** Não podem ser dados em garantia (Hipoteca).

## 4. Fatos e Atos Jurídicos
O Código Civil define os defeitos do negócio jurídico (Erro, Dolo, Coação, Estado de Perigo, Lesão e Fraude contra credores) que podem levar à anulação de contratos, inclusive os administrativos em situações específicas de ilegalidade privada.

## 5. Responsabilidade Civil
O Código Civil (Art. 927) estabelece o dever de indenizar danos. No campo público, o Art. 37, §6º da CF estabelece a **Responsabilidade Objetiva** do Estado (Teoria do Risco Administrativo), baseada no dano causado por seus agentes.`
  },
  {
    ids: ['5014b675a6be42baf862db12bf43d959', 'ad02f7975c3a59ecd5ab227b29e85bb2'],
    name: 'Poder Legislativo',
    content: `# Poder Legislativo e Processo Legislativo

O **Poder Legislativo** federal é exercido pelo **Congresso Nacional**, que se compõe da Câmara dos Deputados e do Senado Federal (Bicameralismo).

## 1. Câmara vs Senado
*   **Câmara dos Deputados:** Representantes do **Povo**. Eleitos pelo sistema proporcional. Mandato de 4 anos.
*   **Senado Federal:** Representantes dos **Estados e DF**. Eleitos pelo sistema majoritário. Mandato de 8 anos (renovação de 1/3 e 2/3 a cada 4 anos). Cada estado tem 3 senadores.

## 2. Atribuições do Congresso (Art. 48 e 49)
*   **Com sanção do Presidente:** Matérias de competência da União (tributos, planos plurianuais).
*   **Exclusiva do Congresso (Sem sanção):** Ratificar tratados internacionais, autorizar o Presidente a declarar guerra, julgar as contas do Presidente.

## 3. Processo Legislativo (Art. 59)
Compreende a elaboração de:
1.  Emendas à Constituição (PEC).
2.  Leis Complementares (exigem maioria absoluta).
3.  Leis Ordinárias (exigem maioria simples).
4.  Leis Delegadas.
5.  Medidas Provisórias (expedidas pelo Presidente, vigência de 60+60 dias).
6.  Decretos Legislativos.
7.  Resoluções.

## 4. Fases da Lei Ordinária
*   **Iniciativa:** Parlamentar, Presidente, STF, Tribunais Superiores, PGR ou Cidadãos (Iniciativa Popular).
*   **Deliberação:** Discussão e votação nas comissões e no plenário.
*   **Sanção ou Veto:** O Presidente tem 15 dias úteis para sancionar ou vetar. O veto pode ser jurídico (inconstitucionalidade) ou político (interesse público).
*   **Promulgação e Publicação:** Dá existência e vigência à lei.

## 5. Fiscalização Contábil e Financeira
O Legislativo fiscaliza o Executivo com o auxílio do **Tribunal de Contas da União (TCU)**, que é um órgão técnico independente, não subordinado ao Judiciário.`
  }
];

async function main() {
  try {
    await client.connect();
    console.log("Iniciando expansão de teoria (Lote 11 - Parte 2)...");
    
    await client.query('BEGIN');
    
    for (const item of batch2) {
      console.log(`Atualizando: ${item.name}...`);
      for (const id of item.ids) {
        await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [item.content, id]);
      }
    }
    
    await client.query('COMMIT');
    console.log("Lote 11 - Parte 2 concluído com sucesso!");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na atualização:", err);
  } finally {
    await client.end();
  }
}

main();
