# data structures

## destructuring arrays

- allows you to extract elements from arrays and assign them to variables
- syntax: `const [a, b] = [1, 2]`

## destructuring objects

- similar to destructuring arrays but for objects
- syntax: `const {a, b} = {a: 1, b: 2}`

## the spread operator

- allows you to expand elements of an iterable (e.g., arrays, objects)
- syntax: `const newArray = [...oldArray, newItem]`

## rest pattern and parameters

- collects remaining elements or properties into a new array or object
- syntax: `const [a, b, ...rest] = [1, 2, 3, 4, 5]`

## short circuiting

- evaluates expressions from left to right, stopping as soon as the result is determined
- syntax: `a && b`, `a || b`

## the nullish coalescing operator

- returns the right operand when the left operand is `null` or `undefined`
- syntax: `a ?? b`

## logical assignment operators

- combines logical operations with assignment
- syntax: `a &&= b`, `a ||= b`, `a ??= b`

## looping arrays: the for of loop

- iterates over the values of an array
- using .entries() method: `for (const [index, value] of array.entries())`

## enhanced object literals

- computed property names: `const obj = { [key]: value }`
- functions: `const obj = { myFunction() { ... } }`

## optional chaining

- allows you to access properties without checking if the parent object is `null` or `undefined`
- syntax: `const value = obj?.property`

## looping objects: keys, values and entries

- keys: `for (const key of Object.keys(obj))`
- values: `for (const value of Object.values(obj))`
- entries: `for (const [key, value] of Object.entries(obj))`

## sets

- a collection of unique values
- methods for a set: `add`, `delete`, `has`, `clear`, `size`
- difference between set and array: sets only store unique values
- spread operator with sets: `const mergedSet = new Set([...set1, ...set2])`

## maps

- a collection of key-value pairs
- methods: `set`, `get`, `has`, `delete`, `clear`, `size`

## maps: iteration

- keys: `for (const key of myMap.keys())`
- values: `for (const value of myMap.values())`
- entries: `for (const [key, value] of myMap.entries())`

## working with strings

- padStart: `str.padStart(length, padString)`
- padEnd: `str.padEnd(length, padString)`
- startsWith: `str.startsWith(searchString)`
- endsWith: `str.endsWith(searchString)`
- includes: `str.includes(searchString)`
- toLowerCase: `str.toLowerCase()`
- toUpperCase: `str.toUpperCase()`
- slice: `str.slice(beginIndex, endIndex)`
- repeat: `str.repeat(count)`
- replace: `str.replace(searchFor, replaceWith)`
- trim: `str.trim()`
- indexOf: `str.indexOf(searchValue)`
- lastIndexOf: `str.lastIndexOf(searchValue)`
