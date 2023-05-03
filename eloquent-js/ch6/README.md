## chapter 6: the secret life of objects

### object-oriented programming

- a programming paradigm based on the concept of "objects".
- objects contain data and behavior (methods) related to a specific concept or entity.

### prototypes

- objects from which other objects inherit properties and methods.
- used as blueprints for creating new objects with shared properties and behavior.

### prototype inheritance

- a mechanism that allows one object to inherit properties and methods from another object.
- in javascript, every object has a prototype, which is another object or `null`.

### constructor functions

- special functions used to create new objects with a specific prototype.
- invoked using the `new` keyword.
- example: `function Person(name, age) { this.name = name; this.age = age; }`.

### `this` keyword

- refers to the current object context within a function or method.
- in constructor functions, `this` refers to the newly created object.

### instance

- an individual object created from a constructor function or class.
- inherits properties and methods from its prototype.

### class

- a syntactic sugar in javascript for defining constructor functions and prototypes.
- introduced in es6 (ecmascript 2015).
- example: `class Person { constructor(name, age) { this.name = name; this.age = age; } }`.

### inheritance

- the process of creating a new class that extends an existing class.
- the new class inherits properties and methods from the parent class.
- example: `class Employee extends Person { constructor(name, age, title) { super(name, age); this.title = title; } }`.

### polymorphism

- the ability of a function, method, or class to take on multiple forms.
- can simplify code and make it more flexible.

### encapsulation

- the practice of bundling data and methods that operate on that data within an object.
- helps to isolate concerns and hide implementation details.
