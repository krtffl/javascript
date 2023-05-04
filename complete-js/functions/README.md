# functions

## default params

- allows you to set default values for function parameters
- syntax: `function myFunc(a = 1, b = 2) { ... }`

## how passing arguments work: value vs reference

- value: primitive types (e.g., numbers, strings, booleans) are passed by value
- reference: non-primitive types (e.g., objects, arrays) are passed by reference

## first-class and higher-order functions

- first-class functions: functions that can be treated like any other value (e.g., assigned to variables, passed as arguments, or returned from other functions)
- higher-order functions: functions that accept other functions as arguments or return functions as output

## functions accepting callback functions

- functions that take other functions as arguments, which are then executed within the function body
- syntax: `function myFunc(callback) { ... callback(); ... }`

## function methods

- call: `func.call(thisArg, arg1, arg2, ...)`
- apply: `func.apply(thisArg, [argsArray])`
- bind: `func.bind(thisArg, arg1, arg2, ...)`

## functions returning functions

- functions that return other functions
- syntax: `function myFunc() { return function() { ... } }`

## the call and apply methods

- call: invokes a function with a given `this` value and arguments provided individually
- apply: invokes a function with a given `this` value and arguments provided as an array

## the bind method

- creates a new function with a specified `this` value and optional arguments
- syntax: `const boundFunc = func.bind(thisArg, arg1, arg2, ...)`

## immediately invoked function expressions (IIFE)

- functions that are executed immediately after being defined
- syntax: `(function() { ... })();`

## closures

- a function's ability to remember and access its lexical scope, even when it is called outside that scope
- the scope chain is preserved, allowing the function to access variables from its containing function(s)
- example:

```javascript
function outer() {
  const outerVar = "I'm from the outer function";

  function inner() {
    const innerVar = "I'm from the inner function";
    console.log(outerVar);
  }

  return inner;
}

const innerFunc = outer();
innerFunc(); // logs "I'm from the outer function"
```
