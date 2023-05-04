# fundamentals

## strict mode

- a way to opt-in to a stricter variant of JavaScript that helps catch common coding mistakes and prevent some unsafe actions
- enables better error checking and improved performance
- activated by adding `'use strict';` at the beginning of a script or function

## function declaration vs expression

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

## arrow functions vs regular functions

- arrow functions: a shorter syntax for writing function expressions, and do not have their own `this`, `arguments`, `super`, or `new.target` values

```js
const functionName = (param1, param2) => {
  // code
};
```

- regular functions: have their own `this`, `arguments`, `super`, and `new.target` values, can be written as function declarations or function expressions

## basic array operators

- adding elements: `push`, `unshift`, `splice`
- finding elements: `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`
- removing elements: `pop`, `shift`, `splice`
- combining and slicing: `concat`, `slice`
- iterating: `for`, `for...of`, `forEach`, `map`, `filter`
- others: `join`, `sort`, `every`, `some`, `filter`, `map`, `reduce`

## dot vs bracket notation

- dot notation: used to access an object's properties or methods using a literal name (e.g., `object.property`)
- bracket notation: used to access an object's properties or methods using a variable or an expression (e.g., `object['property']`)
