// array from range
const arrayFromRange = (min, max) => {
  const arr = [];

  for (let i = min; i <= max; i++) {
    arr.push(i);
  }

  return arr;
};

// includes
const includes = (array, el) => {
  for (val of array) {
    if (val === el) return true;
  }

  return false;
};

// except
const except = (array, excluded) => {
  const output = [];

  for (val of array) {
    if (!excluded.includes(val)) output.push(val);
  }

  return output;
};

// moving an element
const move = (array, index, offset) => {
  if (index + offset >= array.length || index + offset < 0)
    throw new Error('invalid offset');

  const output = [...array];
  const el = output.splice(index, 1)[0];
  output.splice(index + offset, 0, el);

  return output;
};

// count occurrences
const countOccurences = (array, element) => {
  let occurrences = 0;
  for (el of array) {
    if (el === element) occurrences++;
  }

  return occurrences;
};

// get max
const getMax = (array) =>
  array.reduce((max, current) => {
    if (current > max) max = current;
  }, 0);

const gexMaxTwo = (array) => array.reduce((a, b) => (a > b ? a : b));

// movies
const movies = (array) =>
  array
    .filter((movie) => movie.year === 2018 && movie.rating > 4)
    .sort((a, b) => (a.rating > b.rating ? -1 : 1))
    .map((movie) => movie.title);
