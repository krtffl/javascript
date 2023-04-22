## arrays

### intro

- covered earlier in the "arrays" section

### adding elements

- `push`: adds an element to the end of the array
- `unshift`: adds an element to the beginning of the array
- `splice`: inserts an element at a specific index in the array

### finding elements (primitives)

- `indexOf`: returns the index of the first occurrence of an element in the array, or -1 if not found
- `lastIndexOf`: returns the index of the last occurrence of an element in the array, or -1 if not found
- `includes`: returns a boolean indicating whether an element is present in the array

### finding elements (ref types)

- `find`: returns the first element in the array that satisfies a specified condition, or `undefined` if not found
- `findIndex`: returns the index of the first element in the array that satisfies a specified condition, or -1 if not found

### arrow func

- covered earlier in the "types of functions" section

### removing elements

- `pop`: removes and returns the last element of the array
- `shift`: removes and returns the first element of the array
- `splice`: removes one or more elements starting from a specific index in the array

### emptying an array

- assign an empty array `[]`
- set the `length` property to `0`
- use the `splice` method to remove all elements

### combining and slicing

- `concat`: combines two or more arrays into a new array
- `slice`: extracts a portion of an array into a new array

### the spread operator

- `...` (spread operator) can be used to concatenate arrays, pass array elements as function arguments, or copy arrays

### iterating an array

- use `for`, `for...of`, or array methods like `forEach`, `map`, and `filter` to iterate over an array

### joining arrays

- `join`: concatenates all elements of an array into a single string, separated by a specified delimiter

### sorting arrays

- `sort`: sorts the elements of an array in place and returns the sorted array
- can use a compare function for custom sorting

### testing the elements of an array

- `every`: tests whether all elements in the array pass a specified test
- `some`: tests whether at least one element in the array passes a specified test

### filtering an array

- `filter`: creates a new array containing elements that pass a specified test

### mapping an array

- `map`: creates a new array with the results of applying a specified function to each element in the original array

### reducing an array

- `reduce`: applies a specified function to the elements of an array, reducing the array to a single value
