process.env.UV_THREADPOOL_SIZE = 1;

const cluster = require('cluster');
const crypto = require('crypto');

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  const express = require('express');

  const app = express();

  const doWork = (duration) => {
    const start = Date.now();

    while (Date.now() - start < duration) {}
  };

  app.get('/', (req, res) => {
    doHash(res);
  });

  app.get('/fast', (req, res) => {
    res.send('fast hello');
  });

  app.listen(3000);
}

const doHash = (res) => {
  crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
    // console.log(`hash: ${Date.now() - start}`);
    res.send('hello');
  });
};
