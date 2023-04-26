## chapter 3: functions

### functions

- reusable pieces of code that perform a specific task.
- can accept input (parameters) and return a value.
- examples: `function greet(name) { return "hello, " + name; }`.

### function declaration

- a way to define a function using the `function` keyword.
- example: `function add(x, y) { return x + y; }`.

### function expression

- defining a function and assigning it to a variable.
- example: `const add = function(x, y) { return x + y; };`.

### arrow functions

- a shorter syntax for defining functions using `=>`.
- example: `const add = (x, y) => x + y;`.

### parameters and arguments

- parameters: placeholders for input values in a function definition.
- arguments: actual values passed to a function when it's called.
- example: in `function add(x, y) { return x + y; }`, `x` and `y` are parameters.
  in `add(2, 3)`, `2` and `3` are arguments.

### scope

- the area in the code where a variable or function is accessible.
- local scope: variables declared inside a function are accessible only within that function.
- global scope: variables declared outside a function are accessible throughout the entire program.

### nested functions

- functions defined inside other functions.
- can access variables and parameters from the outer function.

### closure

- a function that "closes over" variables from its surrounding scope, retaining access to them even after the outer function has completed execution.

### recursion

- a function that calls itself to solve a problem.
- example: `function factorial(n) { return n === 0 ? 1 : n * factorial(n - 1); }`.

### higher-order functions

- functions that operate on other functions by either:
  - taking them as arguments, or
  - returning them as values.
