## getting started

v8 - the open-source JavaScript engine developed by Google, responsible for compiling JavaScript into machine code, using a Just-In-Time (JIT) compiler. V8 optimizes JavaScript code through various techniques such as inline caching and hidden classes.

node - a runtime environment that enables JavaScript to run outside of the browser, built on the V8 engine. It provides an event-driven, non-blocking I/O model, making it lightweight and efficient for scalable network applications. Node.js extends JavaScript with APIs for file system, network, and OS interaction.

ecmascript vs javascript - ECMAScript is a scripting language specification standardized by ECMA International, while JavaScript is the most widely used implementation of the ECMAScript standard. ECMAScript defines the core syntax, semantics, and features, while JavaScript implements these specifications and adds environment-specific APIs, such as the DOM manipulation in browsers.

es6 - shorthand for ECMAScript 2015, a significant update to the ECMAScript standard that introduced many new features and improvements. Some of the most notable features include arrow functions (for more concise function syntax), template literals (for easier string interpolation), classes (a syntactic sugar for prototype-based inheritance), and promises (for better handling of asynchronous operations).

## basics

### variables

- variables are used to store and manipulate data in JavaScript
- declared with `var`, `let`, or `const` keywords
- `var` has function scope, while `let` and `const` have block scope
- `let` allows reassignment, `const` does not

### constants

- constants are similar to variables, but their values cannot be changed once assigned
- declared using the `const` keyword
- used for values that should remain constant throughout the program's execution

### primitive types

- JavaScript has seven primitive types: `String`, `Number`, `BigInt`, `Boolean`, `Undefined`, `Null`, and `Symbol`
- these types represent basic, immutable data

### value types vs reference types

- value types (primitive types) store the actual data value in memory
- reference types (objects, arrays, functions) store a reference (memory address) to the actual data
- value types are compared by value, reference types are compared by reference

### dynamic typing

- JavaScript is a dynamically typed language, meaning that a variable's type can be changed at runtime
- type coercion can happen implicitly, converting one type to another during operations

### dynamic typing vs static typing

- in statically typed languages, the type of a variable is defined at compile time and cannot change
- in dynamically typed languages, like JavaScript, the type can change during runtime

### null has type object

- `null` is a primitive type in JavaScript, representing an intentional absence of any object value
- due to a historical bug, `typeof null` returns `"object"` instead of the expected `"null"`

### objects

- objects are collections of key-value pairs, also known as properties
- keys are strings, and values can be any data type, including other objects or functions
- can be created using object literals `{}`, the `new Object()` constructor, or `Object.create()`
- properties can be accessed using dot notation (`object.property`) or bracket notation (`object['property']`)

### arrays

- arrays are ordered, indexed collections of values
- can store values of different types, including other arrays (multi-dimensional arrays)
- created using array literals `[]` or the `new Array()` constructor
- array length is dynamic and can be changed by adding or removing elements
- common methods: `push`, `pop`, `shift`, `unshift`, `splice`, `slice`, `concat`, `map`, `filter`, `reduce`

### functions

- functions are reusable blocks of code that perform a specific task and can return a value
- defined using the `function` keyword, followed by the function name, a list of parameters, and a code block `{}`

### types of functions

- **named functions**: functions with a name, useful for recursion and debugging
- **anonymous functions**: functions without a name, often used as arguments for other functions (e.g., callbacks)
- **arrow functions**: a concise syntax for defining functions using the `=>` symbol, automatically binding `this` to the enclosing scope
- **immediately-invoked function expressions (IIFE)**: functions that are defined and executed immediately after their declaration, used for creating private scopes and avoiding global scope pollution
- **generator functions**: functions that can be paused and resumed during execution using the `yield` keyword, defined with the `function*` syntax
- **constructor functions**: functions that create and return a new object when called with the `new` keyword, used for creating objects with similar properties and methods (before classes were introduced in ES6)
