const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function testUpload() {
  const form = new FormData();
  form.append('file', fs.createReadStream('list_buckets.js'));

  try {
    const res = await axios.post('http://localhost:80/api/upload', form, {
      headers: form.getHeaders(),
    });
    console.log('Upload Success:', res.data);
  } catch (err) {
    console.error('Upload Failed:', err.response ? err.response.data : err.message);
  }
}

testUpload();
