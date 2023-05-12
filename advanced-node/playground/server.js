const crypto = require('crypto');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  doHash(res);
});

app.get('/fast', (req, res) => {
  res.send('fast hello');
});

app.listen(3000);

const doHash = (res) => {
  crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
    // console.log(`hash: ${Date.now() - start}`);
    res.send('hello');
  });
};
