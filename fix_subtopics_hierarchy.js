const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const subtopicToTopic = {
  // DUDH
  '40d02654b9a55ecdbaff15a5e83398b0': '0ded5a4e61734ac61fcf49c04b8f16d4',
  '20ab1aca21e62b26e514f5742e620ef5': '0ded5a4e61734ac61fcf49c04b8f16d4',
  // SUS
  '5ac65722ba1f2a8eb4a7f8477e130e3e': 'ea78766bb6eb4630efb0af5945348963',
  '22e53adcf1d0d7d87fe24a6616715f6a': 'ea78766bb6eb4630efb0af5945348963',
  // Redação
  '7b2fbbd440dd080eaab781fb6d0ff1dc': 'dfeb5b580536929e67ba60a1abb27164',
  'ad5bca9bb818c6a3ff0287082abf73d6': 'dfeb5b580536929e67ba60a1abb27164',
  // Crase
  '5f9c0ac1592041a77be63a26bda6daf6': 'eff4b8f9f174958caa48355e2905bd7d',
  '676e616ddc0bbd66828ae3d40f427b49': 'eff4b8f9f174958caa48355e2905bd7d',
  '095bee9c6d4190fafcb81524663c4755': 'eff4b8f9f174958caa48355e2905bd7d',
  // Juros
  '90ffcb2495eb4ad944468870f5b625dc': 'a73c09f7c80886b4ae28ba407c842e1f',
  '4ef22968b3f2417bf63e369f3ce032cf': 'a73c09f7c80886b4ae28ba407c842e1f',
  // Maria da Penha
  '77f553d39a42802f08ba503c50c5c9ae': '0083264e8ef87a902358e2012444b48b',
  '5a1d7e74a75ec82daa4b8069c28f496b': '0083264e8ef87a902358e2012444b48b',
  // CTB
  '0629412791656297109fd62376bb5634': '97c2e48a226cc8657f57bb96934b6b86',
  'f8e7ad403a0bf820795c1340ebc82cf2': '97c2e48a226cc8657f57bb96934b6b86',
  // Agentes Públicos
  'f89ff0f532600bed9b7d8953ea846901': 'bf5804e9adf56f9cf44768542b769e36',
  '43a9835abc17962b119480e1df86a01a': 'bf5804e9adf56f9cf44768542b769e36',
  // Direito Civil
  '0e2c4a23a28a7a3f09b9ab85e618064f': 'e41fbd2b0ea15b91f220f5f68817d1a0',
  '2faecc47e38922fedf1387088ac5c8df': 'e41fbd2b0ea15b91f220f5f68817d1a0',
  // Legislativo
  '5014b675a6be42baf862db12bf43d959': '5f5c31da99b3015908eded33a27e172e',
  'ad02f7975c3a59ecd5ab227b29e85bb2': '5f5c31da99b3015908eded33a27e172e'
};

async function main() {
  try {
    await client.connect();
    console.log("Corrigindo hierarquia de SubTopics...");
    await client.query('BEGIN');

    for (const [subId, topId] of Object.entries(subtopicToTopic)) {
      await client.query('UPDATE "SubTopic" SET "topicId" = $1 WHERE id = $2', [topId, subId]);
    }

    await client.query('COMMIT');
    console.log("Hierarquia corrigida com sucesso!");
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
