const axios = require('axios');

async function test() {
  try {
    const res = await axios.get('http://jovemconcurseiro.com.br/api/admin/subjects', {
      headers: { Authorization: 'admin-secret-token' }
    });
    const levels = {};
    res.data.forEach(s => {
      if (!levels[s.level]) levels[s.level] = [];
      levels[s.level].push(s.name);
    });
    console.log('Levels found:');
    Object.entries(levels).forEach(([level, names]) => {
      console.log(`  "${level}" (${names.length}): ${names.slice(0, 3).join(', ')}...`);
    });
  } catch (err) {
    console.log('Error:', err.message);
  }
}
test();
