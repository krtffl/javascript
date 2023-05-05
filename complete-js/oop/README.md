# object oriented programming

## what is oop

- object-oriented programming (oop) is a programming paradigm that focuses on organizing code around objects, which represent real-world entities or abstract concepts
- oop concepts include:
  - classes: blueprints for creating objects
  - abstraction: hiding complexity and exposing only necessary details
  - inheritance: creating new classes based on existing ones, reusing code
  - encapsulation: bundling data and methods that operate on that data within a single unit
  - polymorphism: using a single interface to represent different types or behaviors

## oop in js

- javascript is a prototype-based language, meaning that inheritance and object behavior is based on prototypes rather than classes (although ES6 introduced classes as syntactic sugar)
- objects in javascript can inherit from other objects, allowing for code reuse and more organized code

## constructor function and the new operator

- constructor functions are used to create new objects with a specified prototype and properties
- the `new` operator is used to create an instance of an object from a constructor function

## prototype

- every object in javascript has an associated prototype, which is an object from which it inherits properties and methods
- the prototype can be accessed and modified through the `prototype` property of a constructor function
- common methods for working with prototypes include:
  - `isPrototypeOf()`: checks if an object is in another object's prototype chain
  - `hasOwnProperty()`: checks if an object has a specified property as its own property (not inherited from the prototype chain)
  - prototypal inheritance: the mechanism by which objects inherit properties and methods from their prototypes

## prototypal inheritance and the prototype chain

- when an object is created, it inherits properties and methods from its prototype
- if a property or method is not found on the object, the interpreter looks up the prototype chain to find it, until it reaches the end of the chain (usually `Object.prototype`)
- this process is called prototypal inheritance and allows for code reuse and more organized code

## prototypal inheritance on built-in objects

- built-in objects in javascript, like arrays, functions, and dates, also use prototypal inheritance
- they inherit properties and methods from their respective prototypes, such as `Array.prototype`, `Function.prototype`, and `Date.prototype`

## ES6 classes

- ES6 introduced classes as a more familiar syntax for creating objects and managing inheritance
- classes in javascript can be defined using either class expressions or class declarations
- key differences between classes and constructor functions include:
  - classes are not hoisted
  - classes are first-class citizens (can be passed as arguments, returned from functions, etc.)
  - classes are executed in strict mode

## setters and getters

- setters and getters are special methods that allow you to define custom behavior for setting and getting properties on an object
- they can be defined in both constructor functions and classes

## static methods

- static methods are methods that belong to the class itself, rather than instances of the class
- they are useful for providing utility functions or other functionality that doesn't depend on object state

## object.create

- `Object.create()` is a method for creating a new object with a specified prototype and properties
- it can be used as an alternative to constructor functions and classes for implementing prototypal inheritance

## inheritance between classes

- inheritance between classes in javascript can be achieved using the `extends` keyword and the `super` keyword for calling the parent constructor
- this allows for code reuse and more organized code

## encapsulation: protected properties and methods

- encapsulation is the practice of hiding an object's internal state and exposing only necessary functionality
- in javascript protected properties and methods are a convention for indicating that certain members of a class should not be accessed directly from outside the class, but can be accessed by subclasses
- this is typically done by prefixing the property or method name with an underscore (e.g., `_protectedProperty`)

## encapsulation: private class fields and methods

- private class fields and methods are a more recent addition to javascript, allowing for true encapsulation of an object's state and functionality
- private fields are defined with a `#` prefix (e.g., `#privateField`) and can only be accessed within the class
- private methods can also be defined using the `#` prefix

## chaining methods

- method chaining is a technique that allows multiple methods to be called on an object in a single expression
- this can be achieved by returning `this` from a method, allowing another method to be called on the same object
