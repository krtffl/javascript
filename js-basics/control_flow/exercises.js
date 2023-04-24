// max of two numbers
const max = (x, y) => (x > y ? x : y);

// landscape or portrait
const landscape = (w, h) => w > h;

// fizzbuzz
const fizzBuzz = (x) => {
  if (typeof x !== 'number') return NaN;

  let msg = '';

  if (x % 3 === 0) msg += 'Fizz';
  if (x % 5 === 0) msg += 'Buzz';

  return msg || x;
};

// demerit points
const checkSpeed = (x) => {
  const speedLimit = 70;
  const speedPerPoint = 5;

  if (x <= speedLimit) return 'Ok';

  const demeritPoints = Math.floor((x - speedLimit) / speedPerPoint);

  if (demeritPoints > 12) return 'License suspended';

  return `Points: ${demeritPoints}`;
};

// even and odd numbers
const showNumber = (x) => {
  for (let i = 0; i <= x; i++) {
    console.log(`${i} - ${i % 2 === 0 ? 'EVEN' : 'ODD'}`);
  }
};

// count truthy
const countTruthy = (values) => {
  let count = 0;
  for (i of values) {
    if (i) count++;
  }
  return count;
};

// string properties
const showProperties = (obj) => {
  for (key in obj) if (typeof obj[key] === 'string') console.log(key, obj[key]);
};

// sum of multiples 3 and 5
const sum = (limit) => {
  let count = 0;
  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) count += i;
};
