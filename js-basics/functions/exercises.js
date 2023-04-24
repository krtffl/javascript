// sum of arguments
const sum = (...args) => {
  if (args.length === 1 && Array.isArray(args[0])) args = [...args[0]];
  return args.reduce((prev, curr) => prev + curr);
};

// area of circle
const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

// error handling
const countOccurences = (array, search) => {
  if (!Array.isArray(array)) throw new Error('invalid array');

  return array.reduce((acc, curr) => {
    const ocurrence = curr === search ? 1 : 0;
    return acc + ocurrence;
  }, 0);
};
