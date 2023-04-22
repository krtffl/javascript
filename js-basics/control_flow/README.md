## control flow

### if else

- conditional statements that execute a block of code if a specified condition is true, and another block if it is false
- syntax:

```js
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}
```

### switch case

- a control structure used to simplify multiple `if-else` statements by matching a value against multiple cases
- syntax:

```js
switch (expression) {
  case value1:
    // code to execute if expression === value1
    break;
  case value2:
    // code to execute if expression === value2
    break;
  // additional cases...
  default:
  // code to execute if no case matches the expression
}
```

### for

- a loop that iterates a specified number of times, using an initialization, a condition, and an update expression
- syntax:

```js
for (initialization; condition; update) {
  // code to execute on each iteration
}
```

### while

- a loop that executes a block of code as long as a specified condition is true
- syntax:

```js
while (condition) {
  // code to execute while condition is true
}
```

### do while

- similar to the `while` loop, but the block of code is executed at least once, even if the condition is false initially
- syntax:

```js
do {
  // code to execute while condition is true
} while (condition);
```

### infinite loops

- loops that never terminate, usually caused by a faulty condition or lack of proper update
- can cause the program to crash or become unresponsive
- example of an infinite loop:

```js
while (true) {
  // code to execute indefinitely
}
```

### for in

- a loop that iterates over the enumerable properties of an object (keys for objects, indices for arrays)
- syntax:

```js
for (const key in object) {
  // code to execute on each property
}
```

### for of

- a loop that iterates over the values of an iterable object, such as arrays, strings, or sets
- syntax:

```js
for (const value of iterable) {
  // code to execute on each value
}
```

### break and continue

- `break` and `continue` are control flow statements used inside loops

#### break

- terminates the innermost loop and transfers execution to the statement following the loop
- example:

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
// output: 0 1 2 3 4
```

#### continue

- skips the current iteration and continues with the next one
- example:

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
// output: 1 3 5 7 9
```
