process.env.UV_THREADPOOL_SIZE = 6;

const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
  console.log(`1: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
  console.log(`2: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
  console.log(`3: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
  console.log(`4: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
  console.log(`5: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
  console.log(`6: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
  console.log(`7: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
  console.log(`8: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
  console.log(`9: ${Date.now() - start}`);
});

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
  console.log(`10: ${Date.now() - start}`);
});