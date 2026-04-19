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
    console.log("Iniciando atualização do Lote Final (Lote 10)...");
    await client.query('BEGIN');

    // --- Submatéria 46: Repartição de Competências ---
    const id46 = 'd5427fe0f674744b17d6b8b771c8890a';
    const theory46 = `
# Organização do Estado: Competências

A Constituição Federal divide o poder entre os entes federativos.

## 1. União, Estados, DF e Municípios
- **União:** Competências exclusivas (Art. 21) e privativas (Art. 22). Legisla sobre direito civil, penal, etc.
- **Estados:** Competência remanescente (o que não é vedado).
- **Municípios:** Assuntos de interesse local (Art. 30).

## 2. Intervenção
Medida excepcional onde um ente interfere na autonomia de outro para manter a ordem, a integridade ou a lei.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory46, id46]);

    // --- Submatéria 47: Banco de Dados e Big Data ---
    const id47 = 'dd09f6d199c650d08b954da44b43a3a5';
    const theory47 = `
# Banco de Dados e Big Data

## 1. Noções SQL
SQL é a linguagem para consultar bancos relacionais.
- **SELECT:** Busca dados.
- **INSERT:** Insere dados.
- **Chaves:** Primária (identifica a linha) e Estrangeira (vincula tabelas).

## 2. Big Data
Refere-se a volumes imensos de dados regidos pelos 5 Vs: Volume, Velocidade, Variedade, Veracidade e Valor.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory47, id47]);

    // --- Submatéria 48: Redes de Computadores ---
    const id48 = 'e65a4be35fd6e29a66732a11455ae835';
    const theory48 = `
# Redes e Protocolos

## 1. Protocolos (TCP/IP)
O "idioma" da internet.
- **HTTP/HTTPS:** Navegação web.
- **FTP:** Transferência de arquivos.
- **IP:** Endereço da máquina na rede.

## 2. Modelo OSI
Modelo de 7 camadas que padroniza a comunicação. Foco na Camada 1 (Física), 2 (Enlace) e 7 (Aplicação).
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory48, id48]);

    // --- Submatéria 49: Hardware e Software Básicos ---
    const id49 = 'e6eb63d4b5806d911bb6f2f2d895d96d';
    const theory49 = `
# Hardware e Software Fundamentais

## 1. Hardware
Parte física. Entrada (Mouse, Teclado), Saída (Monitor, Impressora) e Processamento (CPU).

## 2. Software
Parte lógica. Sistemas Operacionais (Windows, Linux) e Aplicativos.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory49, id49]);

    // --- Submatéria 50: Organização do Serviço ---
    const id50 = 'eb3845e5c24732672cb3c8d1aeb1c693';
    const theory50 = `
# Postura no Serviço Público

## 1. Ética e Postura
O servidor deve agir com decoro, zelo e eficácia. O atendimento deve ser cortês, sem discriminação e respeitando a hierarquia.

## 2. Tipos de Servidores
Efetivos (concurso), Comissionados (livre nomeação) e Temporários.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory50, id50]);

    // --- Submatéria 51: Regência Verbal e Nominal ---
    const id51 = 'f12e7ad2f333ecd3dacd29a923ea2b6c';
    const theory51 = `
# Regência e Crase

Regência é a relação entre o termo regente (verbo ou nome) e o regido.

## 1. Verbos Importantes
- **Assistir (ver):** Exige preposição "a". (Assisti ao filme).
- **Visar (objetivar):** Exige preposição "a". (Viso ao cargo).

## 2. Crase
É a fusão de "a" preposição + "a" artigo.
- **Dica:** Substitua por uma palavra masculina. Se der "ao", tem crase.
- **Proibida:** Antes de palavras masculinas, verbos e pronomes pessoais.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory51, id51]);

    // --- Submatéria 52: Pronomes ---
    const id52 = 'f5ccc28404e9d8f5b4a2a03035e1aa16';
    const theory52 = `
# Morfologia: Pronomes

## 1. Colocação Pronominal
- **Próclise:** Antes do verbo (atraída por palavras negativas, "que").
- **Ênclise:** Depois do verbo (início de frase).

## 2. Pronomes Relativos
"Que" e "Cujo". "Cujo" indica posse e nunca aceita artigo depois dele.
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory52, id52]);

    // --- Submatéria 53: Combinatória e Permutação ---
    const id53 = 'ff729c3b4ea287d44bebb8020fd59e40';
    const theory53 = `
# Análise Combinatória

## 1. Fatorial (!)
Ex: 3! = 3 x 2 x 1 = 6.

## 2. Arranjo vs Combinação
- **Arranjo:** A ordem importa (ex: senhas, pódio).
- **Combinação:** A ordem **não** importa (ex: sorteio de mega-sena, formação de comissões).
    `;
    await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [theory53, id53]);

    await client.query('COMMIT');
    console.log("Lote Final concluído com sucesso! Edital 100% preenchido.");

  } catch (err) {
    await client.query('ROLLBACK');
    console.error("Erro na atualização final:", err);
  } finally {
    await client.end();
  }
}

main();
