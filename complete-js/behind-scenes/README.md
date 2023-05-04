# behind the scenes

## high level overview

- high level: JavaScript abstracts away many low-level details, making it easier for developers to write code
- garbage collected: JavaScript automatically manages memory, freeing up memory that is no longer in use
- interpreted: JavaScript code is executed directly by the JavaScript engine without prior compilation to machine code
- multi paradigm: JavaScript supports multiple programming paradigms, such as procedural, object-oriented, and functional
- dynamic: JavaScript's types are determined at runtime, and its code can be modified during execution
- single threaded: JavaScript executes code in a single thread of execution, allowing for non-blocking and concurrent operations
- non-blocking event loop: JavaScript uses an event loop to handle asynchronous tasks, allowing it to continue executing other code while waiting for async operations to complete
- prototype-based object oriented: JavaScript uses prototypes for inheritance instead of classes, promoting code reuse and dynamic object behavior
- first-class functions: JavaScript functions can be assigned to variables, passed as arguments, and returned from other functions, enabling powerful functional programming patterns

## engine and runtime

- JavaScript engines, like Google's V8, are responsible for parsing, compiling, and executing JavaScript code
- the engine consists of multiple components, such as the parser, compiler, and runtime
- the runtime includes the JavaScript standard library, which provides built-in objects and functions for developers to use

## execution context and the call stack

- an execution context is an environment in which JavaScript code is executed, including variable and function declarations, the value of `this`, and the scope chain
- the call stack is a data structure that keeps track of function calls and their execution contexts
- each time a function is called, a new execution context is created and pushed onto the call stack
- when a function completes execution, its execution context is popped off the call stack and control is returned to the calling function
- if the call stack becomes too deep (e.g., due to excessive recursion), a "stack overflow" error occurs

## scope and the scope chain

- global scope: variables declared outside any function or block
- function scope: variables declared within a function
- block scope: variables declared within a block (e.g., `let` and `const`)

## hoisting and the TDZ (temporal dead zone)

- hoisting: variable and function declarations are moved to the top of their containing scope during the compilation phase
- TDZ: a period when `let` and `const` variables cannot be accessed or used, even though they have been hoisted

## the this keyword

- refers to the context in which a function is called or an object on which a method is called
- its value depends on how the function or method is called, and it may be different for each invocation

## how primitives and reference types are stored

- primitive types (e.g., numbers, strings, booleans) are stored directly on the call stack
- reference types (e.g., objects, arrays, functions) are stored in the heap, with a reference to their location in the heap stored on the call stack
