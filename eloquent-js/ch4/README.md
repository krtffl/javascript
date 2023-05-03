## chapter 4: data structures: objects and arrays

### objects

- collections of key-value pairs (properties).
- used to organize and store complex data.
- example: `const person = { name: "alice", age: 30 };`.

### accessing object properties

- using dot notation: `person.name`.
- using bracket notation: `person["name"]`.

### object methods

- functions stored as properties within objects.
- example: `const person = { greet: function() { return "hello"; } };`.

### arrays

- ordered lists of values.
- can store multiple data types.
- example: `const numbers = [1, 2, 3, 4, 5];`.

### accessing array elements

- using bracket notation with an index: `numbers[0]`.

### array methods

- functions that operate on arrays.
- examples: `push()`, `pop()`, `shift()`, `unshift()`, `indexOf()`, `slice()`.

### loops and arrays

- iterating over array elements using loops.
- examples: `for` loop, `for...of` loop, `forEach()` method.

### nested arrays

- arrays within arrays, used to create multi-dimensional structures.
- example: `const matrix = [[1, 2], [3, 4], [5, 6]];`.

### destructuring

- a way to extract values from arrays or objects and assign them to variables.
- array destructuring: `const [a, b] = [1, 2];`.
- object destructuring: `const { name, age } = person;`.

### rest and spread operators

- rest operator (`...`): collects remaining elements in an array or properties in an object.
- spread operator (`...`): expands an array or object's elements or properties.
- example: `const [first, ...rest] = [1, 2, 3, 4];`.

### json

- javascript object notation: a data interchange format that uses a subset of javascript syntax.
- methods for converting between json strings and javascript objects:
  - `JSON.stringify()`: converts a javascript object to a json string.
  - `JSON.parse()`: converts a json string to a javascript object.
