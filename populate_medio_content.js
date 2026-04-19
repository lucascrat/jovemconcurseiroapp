const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const contentMap = {
  "ce1ff6fa0d32822562e710fb3260a7c8": `# Microsoft Word: Domine o Editor de Textos
  
## Ferramentas Essenciais para Concursos
O Word é figurinha carimbada em provas de nível médio. O foco deve ser na Faixa de Opções e Atalhos.

### 1. Faixa de Opções (Guias)
- **Página Inicial**: Formatação de fonte, parágrafo e estilos.
- **Inserir**: Tabelas, imagens, cabeçalhos, rodapés e números de página.
- **Layout**: Margens, orientação (Retrato/Paisagem), colunas e quebras.
- **Referências**: Sumários, notas de rodapé e citações.

### 2. Atalhos de Teclado (Versão PT-BR)
- **Ctrl + B**: Salvar.
- **Ctrl + C / Ctrl + V**: Copiar e Colar.
- **Ctrl + Z**: Desfazer.
- **Ctrl + N**: Negrito.
- **Ctrl + S**: Sublinhado.
- **Ctrl + P**: Imprimir.

> [!IMPORTANT]
> A guia **Revisão** é onde encontramos o Corretor Ortográfico (F7) e o Controle de Alterações!`,

  "084a7c196c7cb3affd64833eb3f3b487": `# Estruturas Lógicas e Tabela Verdade
  
## Conectivos Lógicos
A lógica sentencial estuda as proposições e seus conectivos.

### Os 5 Conectivos Principais:
1.  **Conjunção (e) \`^\`**: Só é verdade se as duas forem verdade.
2.  **Disjunção (ou) \`v\`**: É verdade se pelo menos uma for verdade.
3.  **Condicional (se... então) \`->\`**: Só é falsa no caso "Vera Fischer" (V -> F).
4.  **Bicondicional (se e somente se) \`<->\`**: É verdade quando os valores são iguais (V<->V ou F<->F).
5.  **Disjunção Exclusiva (ou... ou) \`v underline\`**: É verdade quando os valores são diferentes.

### Negações Clássicas:
- **Negação do 'E'**: Troca pelo 'OU' e nega as duas partes.
- **Negação do 'OU'**: Troca pelo 'E' e nega as duas partes.
- **Negação do 'Se... então'**: Mantém a primeira E nega a segunda (Mané).`,

  "27dec939eb1f008dd8be2e3d026059e5": `# Conjunções: O Elo do Texto
  
## Classes de Palavras Invariáveis
As conjunções ligam orações e estabelecem sentidos fundamentais para a interpretação.

### 1. Coordenativas
Ligam orações independentes.
- **Aditivas**: e, nem, mas também.
- **Adversativas (Oposição)**: mas, porém, contudo, todavia, entretanto.
- **Explicativas**: pois, porque, porquanto.

### 2. Subordinativas
Ligam orações onde uma depende da outra.
- **Causais**: porque, visto que, já que.
- **Concessivas (Embora)**: embora, ainda que, mesmo que.
- **Integrantes**: que, se (introduzem orações subjetivas ou objetivas).

> [!TIP]
> **Dica de Prova**: As bancas amam pedir para substituir 'contudo' por 'entretanto' ou 'embora' por 'conquanto'. Mantenha o sentido!`,

  "c6d06733197dd3c8bd55d40806f766bd": `# Regra de Três e Probabilidade
  
## Matemática Analítica
Conteúdo essencial para cargos administrativos.

### 1. Regra de Três Simples
Relaciona duas grandezas.
- **Diretamente Proporcional**: Se uma aumenta, a outra aumenta. (Cruza a multiplicação).
- **Inversamente Proporcional**: Se uma aumenta, a outra diminui. (Multiplica em linha).

### 2. Noções de Probabilidade
É a chance de algo acontecer.
- **Fórmula**: \`P = Casos Favoráveis / Casos Totais\`
- Ex: Qual a chance de tirar um '6' num dado? Favorável: 1 (o número 6). Totais: 6 (lados do dado). P = 1/6.

---
## Dica de Estudo
Sempre simplifique as frações antes de fazer os cálculos finais para ganhar tempo na prova!`,

  "d5427fe0f674744b17d6b8b771c8890a": `# Repartição de Competências na CF
  
## Organização Político-Administrativa
O Brasil é uma Federação composta pela União, Estados, DF e Municípios.

### Tipos de Competência:
1.  **Exclusiva da União (Art. 21)**: Só a União faz. Não se delega (ex: emitir moeda).
2.  **Privativa da União (Art. 22)**: Só a União legisla, mas pode delegar aos Estados via Lei Complementar (ex: Direito Penal, Civil, Trabalho).
3.  **Comum (Art. 23)**: Todos fazem juntos (ex: cuidar da saúde, proteger o meio ambiente).
4.  **Concorrente (Art. 24)**: União, Estados e DF legislam. (Município NÃO entra aqui, ele legisla sobre interesse local).

> [!IMPORTANT]
> No conflito de normas concorrentes: A União faz normas gerais. Se a União não fizer, o Estado tem competência plena!`,

  "2e044933950e947b94a13391ebe8e17b": `# Concordância Verbal e Nominal
  
## Harmonia na Frase
A concordância estuda como as palavras se ajustam em gênero e número.

### 1. Concordância Verbal
O verbo concorda com o sujeito em número e pessoa.
- **Casos Especiais**: 
    - Verbo **HAVER** no sentido de existir é impessoal (fica no singular).
    - Ex: "Havia muitos alunos", nunca "Haviam".
    - Verbo **FAZER** indicando tempo decorrido é impessoal.
    - Ex: "Faz dois anos".

### 2. Concordância Nominal
O adjetivo concorda com o substantivo.
- Ex: "Comprei livros e revistas **novos**" (Masculino plural predomina).`,

  "7dcc26afb684db1e20e896bf952a0765": `# Microsoft Excel: Planilhas Inteligentes
  
## Fórmulas e Funções
O Excel é a ferramenta de cálculo mais cobrada.

### 1. Conceito de Célula
É o encontro de uma Coluna (Letra) com uma Linha (Número). Ex: A1, B10.

### 2. Funções Matemáticas
Toda fórmula começa com o sinal de igual \`=\`.
- **=SOMA(A1:A5)**: Soma do intervalo de A1 até A5.
- **=MÉDIA(B1;B2)**: Média aritmética simples de B1 e B2.
- **=SE(C1>10; "Aprovado"; "Reprovado")**: Função lógica condicional.

### 3. Sinais Importantes
- **:** (até) -> Indica um intervalo.
- **;** (e) -> Indica elementos isolados.`,

  "bfebc86a12e928ba144c6dbebeb6817a": `# Conceitos de Segurança da Informação
  
## A Proteção de Dados
Segurança não é apenas antivírus, é comportamento e ferramentas.

### 1. Pilares da Segurança (D.I.C.A.)
- **Disponibilidade**: Dado deve estar acessível.
- **Integridade**: Dado não deve ser alterado por estranhos.
- **Confidencialidade**: Só pessoas autorizadas veem.
- **Autenticidade**: Garantia de quem enviou o dado é quem diz ser.

### 2. Malwares (Pragas Virtuais)
- **Vírus**: Precisa de um hospedeiro e ser executado.
- **Worm (Verme)**: Se auto-replica sozinho pela rede.
- **Trojan (Cavalo de Troia)**: Parece um presente/programa útil, mas traz uma praga escondida.
- **Spyware**: Programa espião (Keylogger grava teclas, Screenlogger grava tela).`,

  "5098aace183a1a4ee3d9057e0bb8062a": `# Princípios Constitucionais do Direito Administrativo
  
## O famoso L.I.M.P.E.
O Art. 37 da Constituição define os princípios regentes da Administração Pública.

### 1. Legalidade
O administrador só pode fazer o que a lei permite. (No particular, pode-se fazer tudo que a lei não proíbe).

### 2. Impessoalidade
Tratar todos sem favoritismos ou perseguições. Sem promoção pessoal do agente em obras públicas.

### 3. Moralidade
Atuar com ética, honestidade e boa-fé.

### 4. Publicidade
Os atos devem ser públicos e transparentes para controle social.

### 5. Eficiência
Fazer mais com menos, buscando o melhor resultado com o menor custo.`,

  "ab0078bb1d07819c3aff6dba2af0c440": `# Organização Administrativa
  
## Direta vs Indireta
Como o Estado se estrutura para trabalhar.

### 1. Administração Direta
São os próprios entes políticos: União, Estados, DF e Municípios. (Seus ministérios e secretarias).

### 2. Administração Indireta (A.F.E.S.)
Entidades criadas para tarefas específicas:
- **Autarquias**: Criadas por lei. Regime público (ex: INSS).
- **Fundações Públicas**: Atividades sociais.
- **Empresas Públicas**: Capital 100% público (ex: Correios, Caixa).
- **Sociedades de Economia Mista**: Capital Público + Privado. S/A (ex: Banco do Brasil, Petrobras).`,

  "04084975bde99f170a5883758c88305c": `# Noções de Licitações (Lei 14.133/21)
  
## As Compras do Governo
O Estado não pode comprar de quem ele quer, deve licitar.

### Objetivos da Licitação:
- Selecionar a proposta mais vantajosa.
- Garantir a isonomia (igualdade entre os interessados).
- Evitar o sobrepreço e a corrupção.

### Novas Modalidades:
1.  **Pregão**: Para bens e serviços comuns.
2.  **Concorrência**: Obras e serviços de engenharia.
3.  **Concurso**: Trabalho técnico, científico ou artístico.
4.  **Leilão**: Venda de bens.
5.  **Diálogo Competitivo**: Inovações tecnológicas ou técnicas.

> [!CAUTION]
> A modalidade **Tomada de Preços** e **Convite** da lei antiga FORAM EXTINTAS na lei nova! Solo cai em prova para confundir o candidato.`,

  "189c29bac0505d63a0643a26bf5fb423": `# Geografia do Nordeste e Ceará
  
## Nossa Região no Mapa
O Nordeste é dividido em 4 sub-regiões.

### As Sub-Regiões:
1.  **Meio-Norte**: Transição entre Amazônia e Sertão (Maranhão e Piauí).
2.  **Sertão**: Onde fica a maior parte do Ceará. Clima semiárido.
3.  **Agreste**: Transição entre o Sertão e a Zona da Mata.
4.  **Zona da Mata**: Faixa litorânea úmida e mais povoada.

### O Ceará em Destaque:
- **Porto do Pecém**: Hub logístico importante.
- **Cinturão das Águas**: Obra para garantir hídrica no estado.
- **Energia Eólica**: Ceará é destaque nacional na produção.`,

  "56926868161edc9857228847c78e5331": `# Regime Disciplinar (Lei 8.112/90)
  
## Deveres e Punições
O estatuto define o que o servidor deve e o que não pode fazer.

### Penalidades Disciplinares:
1.  **Advertência**: Falta leve. Escrita.
2.  **Suspensão**: Até 90 dias. Sem remuneração.
3.  **Demissão**: Falta grave (ex: improbidade, abandono de cargo).
4.  **Cassação de Aposentadoria**: Para o inativo que cometeu falta grave na ativa.
5.  **Destituição de Cargo em Comissão**.

### Prazos de Prescrição:
- Advertência: 180 dias.
- Suspensão: 2 anos.
- Demissão: 5 anos.`,

  "6de13df200ed0017e52fa02cd742e61c": `# Atividades Econômicas do Ceará
  
## O Motor do Desenvolvimento
O Ceará diversificou sua economia nos últimos anos.

### 1. Setor de Serviços (Comércio e Turismo)
É o que mais gera empregos. O litoral cearense atrai turistas do mundo todo (Jericoacoara, Canoa Quebrada).

### 2. Indústria
- **Couro e Calçados**: Pólos fortes no interior.
- **Têxtil**: Fortaleza e região metropolitana.
- **Siderurgia**: Complexo do Pecém.

### 3. Agropecuária
- **Fruticultura Irrigada**: No Vale do Jaguaribe (Melão, Banana para exportação).
- **Cajucultura**: Tradicional no estado.`,

  "7ebbd7ed8a6ee37e53752186802a8f41": `# Atos Administrativos: Conceito e Elementos
  
## A Manifestação de Vontade do Estado
O Ato Administrativo é a ferramenta para o Estado agir.

### 5 Elementos do Ato (CO.FI.FO.MO.OB)
1.  **COmpetência**: Quem tem poder legal para o ato. (Sempre vinculado).
2.  **FInalidade**: Interesse público. (Sempre vinculado).
3.  **FOrma**: Como o ato se apresenta (geralmente escrito). (Sempre vinculado).
4.  **MOtivo**: A situação de fato e de direito que gerou o ato. (Pode ser discricionário).
5.  **OBjeto**: O que o ato decide/faz. (Pode ser discricionário).

### Atributos do Ato (P.A.T.I.)
- **Presunção de Legitimidade**: O ato nasce parecendo legal até que se prove o contrário.
- **Autoexecutoriedade**: O Estado executa sem precisar pedir ao juiz antes.
- **Tipicidade**: O ato deve estar previsto em lei.
- **Imperatividade**: O ato se impõe ao particular independente da vontade dele.`,

  "ae6995a8e0872adf59b7396b206fae43": `# Provimento e Vacância
  
## Entradas e Saídas no Serviço Público
Como se ocupa e como se libera um cargo público.

### Formas de Provimento (Entrada):
- **Nomeação**: Única forma originária (via concurso).
- **Promoção**: Subir na carreira.
- **Readaptação**: Quando o servidor tem limitação física/mental.
- **Reversão**: O retorno do aposentado (Vovô voltou).
- **Reintegração**: Retorno de quem foi demitido ilegalmente (Rico voltou).
- **Reaproveitamento**: Retorno de quem estava em disponibilidade.

### Formas de Vacância (Saída):
- **Exoneração**: Não é punição. A pedido ou de ofício.
- **Demissão**: É PUNIÇÃO.
- **Aposentadoria**.
- **Falecimento**.
- **Posse em outro cargo inacumulável**.`,

  "b22e9bb64f164cfcbf0c0fe6ac5eba16": `# Direitos Políticos (Nível Médio)
  
## A Soberania Popular
Como o cidadão participa das decisões do país.

### 1. Sufrágio Universal
Voto direto e secreto, com valor igual para todos.

### 2. Alistamento Eleitoral (Voto)
- **Obrigatório**: Maiores de 18 anos.
- **Facultativo**: Analfabetos, maiores de 70 anos e jovens entre 16 e 18 anos.
- **Proibido (Inalistáveis)**: Estrangeiros e conscritos (durante o serviço militar obrigatório).

### 3. Condições de Elegibilidade:
- Nacionalidade brasileira.
- Pleno exercício dos direitos políticos.
- Alistamento eleitoral e domicílio na circunscrição.
- **Idades Mínimas**: 
    - 35 anos (Presidente/Senador)
    - 30 anos (Governador)
    - 21 anos (Deputados/Prefeito)
    - 18 anos (Vereador)`,

  "c8d84a30b11b5637d33f7e64db9b4ad9": `# Lei de Improbidade Administrativa (Lei 8.429/92)
  
## O Combate à Corrupção
LIA pune atos desonestos que geram enriquecimento ilícito ou lesão ao erário.

### Tipos de Atos de Improbidade (Atualização 2021):
1.  **Enriquecimento Ilícito**: O agente ganha dinheiro indevido. (Exige Dolo).
2.  **Prejuízo ao Erário**: O Estado perde dinheiro. (Exige Dolo - a lei nova acabou com a forma culposa).
3.  **Contra os Princípios**: Viola o LIMPE. (Exige Dolo).

> [!WARNING]
> **Atenção**: Agora só existe improbidade se houver **DOLO** (intenção). O erro por incompetência ou negligência sem má-fé não é mais improbidade por esta lei.`,

  "d12df35ada478f9ebf34cd8381018cb8": `# Obras do Art. 5º: Direitos Individuais Avançados
  
## Além do básico para o Nível Médio
Focaremos nos "Remédios Constitucionais".

### 1. Habeas Corpus (HC)
Protege a liberdade de **locomoção** (ir e vir). Gratuito.

### 2. Habeas Data (HD)
Protege o acesso ou retificação de **informações pessoais** constantes em bancos de dados do governo. Gratuito.

### 3. Mandado de Segurança (MS)
Protege **direito líquido e certo** não amparado por HC ou HD. (Ex: o primeiro colocado num concurso que não foi chamado). Não é gratuito.

### 4. Ação Popular
Qualquer **cidadão** (com título de eleitor) pode entrar para anular ato lesivo ao patrimônio público ou meio ambiente.`,

  "f12e7ad2f333ecd3dacd29a923ea2b6c": `# Regência Verbal e Nominal
  
## O Comando dos Verbos e Nomes
Regência estuda quais preposições os verbos e nomes exigem.

### 1. Regência Verbal Importante:
- **Assistir**: 
    - Sentido de ver -> Exige "a". (Assisti **ao** filme).
    - Sentido de ajudar -> Sem preposição. (Assisti o paciente).
- **Visar**: 
    - Sentido de mirar -> Sem preposição. (Visou o alvo).
    - Sentido de desejar -> Exige "a". (Visou **ao** cargo).
- **Aspirar**: 
    - Sentido de cheirar -> Sem preposição. (Aspirou o perfume).
    - Sentido de desejar -> Exige "a". (Aspirou **ao** sucesso).

### 2. Regência Nominal:
- Ex: Ansioso **por/para**, Aptidão **para**, Favorável **a**.`,

  "f5ccc28404e9d8f5b4a2a03035e1aa16": `# Pronomes: Substituição e Referência
  
## Colocação Pronominal e Tipos
Pronomes acompanham ou substituem substantivos.

### 1. Colocação Pronominal:
- **Próclise**: Antes do verbo. (Me diga). É atraída por palavras negativas, pronomes relativos e advérbios.
- **Ênclise**: Depois do verbo. (Diga-me). Regra geral para início de frases.
- **Mesóclise**: No meio do verbo. (Dir-te-ia). Usada no Futuro do Presente ou Pretérito quando não cabe próclise.

### 2. Pronomes Relativos:
- **QUE**: O mais comum.
- **CUJO**: Indica posse. Nunca aceita artigo depois (Cujo o pai - ERRADO).
- **ONDE**: Somente para lugares físicos.`
};

async function updateContent() {
  try {
    await client.connect();
    console.log("🚀 Iniciando injeção de Apostilas Nível Médio...");
    
    for (const [id, content] of Object.entries(contentMap)) {
      await client.query(
        'UPDATE "SubTopic" SET content = $1 WHERE id = $2',
        [content, id]
      );
      console.log(`✅ Atualizado: ${id}`);
    }
    
    console.log("✨ Fase Nível Médio Concluída com Sucesso!");
  } catch (err) {
    console.error("❌ Erro na atualização:", err);
  } finally {
    await client.end();
  }
}

updateContent();
