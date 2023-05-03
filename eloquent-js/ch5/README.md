## chapter 5: higher-order functions

### higher-order functions

- functions that operate on other functions by either:
  - taking them as arguments, or
  - returning them as values.

### abstraction

- hiding details and providing a simpler, higher-level interface.
- allows for easier understanding and reuse of code.

### common higher-order functions

- `forEach()`: iterates over an array and applies a function to each element.
- `filter()`: creates a new array with elements that pass a test specified by a function.
- `map()`: creates a new array with the results of applying a function to each element.
- `reduce()`: applies a function to an array's elements, reducing them to a single value.

### anonymous functions

- functions without a name, often used as arguments for higher-order functions.
- example: `array.map(function(x) { return x * 2; });`.

### chaining higher-order functions

- combining multiple higher-order functions to create more complex operations.
- example: `array.filter(x => x % 2 === 0).map(x => x * 2);`.

### closures

- functions that "close over" variables from their surrounding scope, retaining access to them even after the outer function has completed execution.

### function composition

- creating new functions by combining existing functions.
- allows for building complex behavior from simpler functions.

### partial application

- a technique for creating new functions by pre-filling some arguments of an existing function.
- can simplify code and reduce the need for repetition.
