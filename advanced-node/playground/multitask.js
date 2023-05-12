process.env.UV_THREADPOOL_SIZE = 6;

const https = require('https');
const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

const doHash = () => {
  crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
    console.log(`hash: ${Date.now() - start}`);
  });
};

const doRequest = () => {
  https
    .request('https://google.com', (res) => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(`http: ${Date.now() - start}`);
      });
    })
    .end();
};

fs.readFile('multitask.js', 'utf-8', () => {
  console.log(`fs: ${Date.now() - start}`);
});

doRequest();

doHash();
doHash();
doHash();
doHash();
doHash();
doHash();
doHash();
