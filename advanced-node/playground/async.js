const https = require('https');

const start = Date.now();

const doRequest = () => {
  https
    .request('https://google.com', (res) => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(Date.now() - start);
      });
    })
    .end();
};

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
