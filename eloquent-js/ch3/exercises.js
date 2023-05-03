// minimum
const minimum = (x, y) => (x > y ? y : x);

// recursion
const isEven = (x) => {
  if (x === 0) return true;
  if (x === 1) return false;

  if (x < 0) return isEven(-x);

  return isEven(x - 2);
};

console.log(isEven(75));
console.log(isEven(50));

// bean counting
// const countBs = (string) => {
//   let count = 0;
//   for (char of string) {
//     if (char === 'B') count++;
//   }
//   return count;
// };

const countChar = (string, char) => {
  let count = 0;
  for (s of string) {
    if (s === char) count++;
  }
  return count;
};

const countBs = (string) => countChar(string, 'B');

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
