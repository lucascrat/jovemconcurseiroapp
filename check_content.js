const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});
client.connect().then(() => client.query("SELECT name, substring(content for 100) as content FROM \"SubTopic\" LIMIT 5")).then(r => console.log(r.rows)).finally(()=>client.end());
