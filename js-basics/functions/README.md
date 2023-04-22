## functions

### declarations vs expressions

- function declaration: defines a function with a specified name and can be used before it is declared due to hoisting

```js
function functionName() {
  // code
}
```

- function expression: defines a function within an expression and can only be used after it is defined

```js
const functionName = function () {
  // code
};
```

### hoisting

- the process of moving function and variable declarations to the top of their scope during the compilation phase
- allows function declarations and variables declared with `var` to be used before they are declared in the code

### arguments

- the input values passed to a function when it is called
- can be accessed within the function using the `arguments` object or named parameters

### the rest operator

- `...` (rest operator) can be used to collect remaining function arguments into an array

```js
function functionName(...args) {
  // code
}
```

### default params

- default parameter values can be specified in a function declaration

```js
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // code
}
```

### getters and setters

- special methods used to define how to access and modify object properties
- `get`: defines a getter method that is called when a property is accessed
- `set`: defines a setter method that is called when a property is modified

### try and catch

- error handling mechanism that allows code execution to continue after an exception is thrown
- syntax:

```js
try {
  // code that might throw an exception
} catch (error) {
  // code to handle the exception
} finally {
  // code to run regardless of whether an exception was thrown or not
}
```

### local vs global scope

- local scope: variables declared within a function are only accessible inside that function
- global scope: variables declared outside of any function are accessible throughout the entire script

### let vs var

- `let`: block-scoped variable declaration that can be reassigned but not redeclared within the same scope
- `var`: function-scoped or globally-scoped variable declaration that can be both reassigned and redeclared within the same scope

### the this keyword

- a reference to the object that is currently executing the function
- depends on how the function is called (e.g., as a method, as a constructor, or as a standalone function)

### changing this

- `call`: invokes a function with a specified `this` value and arguments
- `apply`: similar to `call`, but accepts an array of arguments
- `bind`: creates a new function with a specified `this` value and optional arguments
