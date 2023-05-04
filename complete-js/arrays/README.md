# working with arrays

## simple array methods

- some methods mutate the original array: `push`, `pop`, `shift`, `unshift`, `splice`, `reverse`, `sort`
- some methods do not mutate the original array: `slice`, `concat`, `join`, `indexOf`, `lastIndexOf`, `every`, `some`, `forEach`, `map`, `filter`, `reduce`, `find`, `findIndex`

## the new at method

- returns the element at a given index, supporting negative indices to access elements from the end
- syntax: `arr.at(index)`

## looping arrays: for each

- executes a provided function for each element in the array
- syntax: `arr.forEach(callback)`

## for each with maps and sets

- both maps and sets have a `forEach` method to loop through their elements

## the map method

- creates a new array with the results of calling a provided function on every element in the array
- syntax: `const newArr = arr.map(callback)`

## the filter method

- creates a new array with all elements that pass a provided test (predicate function)
- syntax: `const newArr = arr.filter(callback)`

## the reduce method

- applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
- syntax: `const reducedValue = arr.reduce(callback, initialValue)`

## the magic of chaining methods

- array methods can be chained together to perform multiple operations in a single statement
- example: `const result = arr.map(callback1).filter(callback2).reduce(callback3)`

## the find method

- returns the first element in the array that satisfies a provided testing function
- syntax: `const foundElement = arr.find(callback)`

## the find index method

- returns the index of the first element in the array that satisfies a provided testing function
- syntax: `const foundIndex = arr.findIndex(callback)`

## some and every

- some: tests whether at least one element in the array passes the provided testing function, returns a boolean
- every: tests whether all elements in the array pass the provided testing function, returns a boolean

## flat and flatmap

- flat: creates a new array with all sub-array elements concatenated into it recursively up to a specified depth
- flatmap: applies a function to each element of an array, then flattens the result into a new array

## sorting arrays

- `sort`: sorts the elements of an array in place, returning the sorted array
- `sort` can be customized by providing a comparison function

## more ways of creating and filling arrays

- `Array.from()`: creates a new array instance from an array-like or iterable object
- `Array.of()`: creates a new array instance with a variable number of arguments
- `Array.fill()`: fills all the elements of an array with a static value
- `Array.prototype.fill()`: fills all the elements of an array from a start index to an end index with a static value
