// looping a triangle
let string = '';
while (string.length < 7) {
  string += '#';
  console.log(string);
}

for (let line = '#'; line.length < 8; line += '#') {
  console.log(line);
}

// fizzbuzz
for (let n = 1; n <= 100; n++) {
  let output = '';
  if (n % 3 == 0) output += 'Fizz';
  if (n % 5 == 0) output += 'Buzz';
  console.log(output || n);
}

// chessboard
let board = '';
for (let x = 0; x < 8; x++) {
  for (let y = 0; y < 8; y++) {
    if ((x + y) % 2 === 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}
console.log(board);
