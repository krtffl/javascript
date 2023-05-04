# object oriented programming

## what is oop

- classes: templates for creating objects
- abstraction: simplifying complex systems by breaking them down into smaller parts
- inheritance: allowing classes to inherit properties and methods from other classes
- encapsulation: bundling of data and the methods that operate on that data within one unit
- polymorphism: allowing a single interface to represent different types of data

## oop in js

## constructor function and the new operator

- constructor function: a special function used to create objects with a specific prototype
- `new` operator: creates an object with the specified prototype and constructor function

## prototype

- `isPrototypeOf()`: checks if an object is in the prototype chain of another object
- `hasOwnProperty()`: checks if an object has a specified property as its own property
- prototypal inheritance: objects inherit properties and methods from their prototype

## prototypal inheritance and the prototype chain

- prototype chain: a chain of objects connected through their prototypes, allowing for property and method inheritance

## prototypal inheritance on built-in objects

- built-in objects, like Arrays or Functions, also follow prototypal inheritance

## ES6 classes

- class expression: a way to define a class with an expression
- class declaration: a way to define a class with a declaration

- not hoisted: classes are not hoisted like function declarations
- first-class citizens: classes can be passed as arguments, returned from functions, and assigned to variables
- executed in strict mode: class code is executed in strict mode

## setters and getters

- setter: a method that sets the value of a specific property
- getter: a method that gets the value of a specific property

## static methods

- static methods: methods that are called on the class itself, not on instances of the class

## Object.create

- `Object.create()`: creates a new object with the specified prototype object and properties

## inheritance between classes

- using the `extends` keyword, classes can inherit properties and methods from other classes

## encapsulation: protected properties and methods

- protected properties and methods: properties and methods that can be accessed within the class and its subclasses, but not outside of them

## encapsulation: private class fields and methods

- private class fields: class fields that can only be accessed within the class they are defined
- private class methods: class methods that can only be accessed within the class they are defined

## chaining methods

- method chaining: a technique that allows multiple methods to be called on an object in a single statement
