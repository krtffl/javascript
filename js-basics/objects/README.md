## objects

### basics

- covered earlier in the "objects" section

### function vs methods

- functions: standalone, reusable blocks of code
- methods: functions that are properties of an object and typically operate on the object's data

### oop

- object-oriented programming: a programming paradigm based on the concept of "objects" that contain data (properties) and behavior (methods)

### factory functions

- functions that create and return objects with specified properties and methods, without using the `new` keyword
- useful for creating multiple objects with similar structure

### constructor functions

- functions that create and return a new object when called with the `new` keyword
- used for creating objects with similar properties and methods (before classes were introduced in ES6)

### dynamic nature of objects

- properties can be added, modified, or deleted at runtime
- example:

```js
const obj = {};
obj.property = 'value'; // add property
obj.property = 'new value'; // modify property
delete obj.property; // delete property
```

### constructor property

- every object in JavaScript has a `constructor` property that points to the function that created the object
- for built-in objects, such as arrays or dates, the constructor is the corresponding constructor function (e.g., `Array`, `Date`)
- for custom objects created with a constructor function, the constructor is the custom function

### functions are objects

- in JavaScript, functions are objects that can have properties and methods
- functions can be assigned to variables, passed as arguments, and returned from other functions

### value vs reference types

- covered earlier in the "value types vs reference types" section

### enumerating properties

- iterate over an object's properties using a `for...in` loop, `Object.keys()`, `Object.values()`, or `Object.entries()`

### cloning an object

- create a shallow copy of an object using `Object.assign({}, obj)` or the spread operator `{...obj}`
- create a deep copy of an object using JSON methods: `JSON.parse(JSON.stringify(obj))`

### garbage collection

- the process of automatically freeing up memory occupied by objects that are no longer needed
- JavaScript uses a garbage collector to reclaim memory, typically using a "mark-and-sweep" algorithm
