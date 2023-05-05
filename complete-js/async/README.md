# async javascript

## async javascript and ajax

- Asynchronous JavaScript and XML (AJAX) is a technique that allows web applications to send and receive data from a server asynchronously, without interfering with the display and behavior of the existing page
- AJAX enables web pages to be updated partially, creating smoother and more responsive user experiences

## xmlhttprequest

- XMLHttpRequest is an older API for making HTTP requests in JavaScript
- It can be used to make AJAX requests, but has been largely replaced by the more modern and easier-to-use Fetch API

## how the web works

- Web browsers communicate with web servers using the Hypertext Transfer Protocol (HTTP)
- When a user visits a website, the browser sends an HTTP request to the server, which responds with the requested data (typically HTML, CSS, and JavaScript files)
- The browser then processes and renders the web page based on the received data

## callback hell

- "Callback hell" is a term used to describe the complexity and difficulty of managing multiple nested callbacks in asynchronous JavaScript code
- Nested callbacks can lead to code that is difficult to read, understand, and maintain

## promises and the fetch api

- Promises are a JavaScript feature that simplifies working with asynchronous operations by providing a more flexible way to handle the results or errors of those operations
- The Fetch API is a modern, promise-based alternative to XMLHttpRequest for making HTTP requests in JavaScript, providing a more intuitive and clean syntax

## consuming promises

- Promises can be consumed by attaching `.then()` and `.catch()` methods to handle the resolved value or error, respectively
- The `.finally()` method can also be used to execute code regardless of whether the promise is resolved or rejected

## chaining promises

- Promises can be chained by returning another promise within a `.then()` callback, allowing for sequential asynchronous operations to be performed in a more readable and maintainable way

## throwing errors manually

- Errors can be thrown manually using the `throw` keyword, typically within a `try` block
- Custom error messages can be provided, which can be useful for debugging and understanding the cause of the error

## the event loop

- The event loop is a mechanism that allows JavaScript to handle asynchronous operations in a single-threaded environment
- It constantly checks for tasks to execute, such as callbacks or promises, and runs them when they are ready
- The event loop consists of the callback queue, microtask queue, and call stack

### callback queue

- The callback queue is a list of callbacks waiting to be executed
- Callbacks are enqueued when an asynchronous operation, such as a timer or an AJAX request, has completed

### microtask queue

- The microtask queue is a list of microtasks waiting to be executed
- Microtasks include tasks like promise resolution callbacks

### call stack

- The call stack is a data structure that JavaScript uses to keep track of the function calls and their contexts
- When a function is called, a new execution context is created and pushed onto the call stack; when a function returns, its execution context is popped from the call stack

### priorities of the event loop

- The event loop prioritizes tasks in the following order: microtask queue, callback queue, and call stack
- This means that microtasks (such as promise resolution callbacks) will be executed before other callbacks (such as those from setTimeout or XMLHttpRequest)

## async await

- `async` and `await` are keywords that provide a more concise and readable way to work with promises
- `async` functions automatically return a promise, and `await` can be used within an `async` function to pause the execution of the function until the promise is resolved, effectively "unwrapping" the promise value

## try catch

- The `try` and `catch` keywords can be used to handle errors that occur within a block of code
- The code within the `try` block is executed, and if an error is thrown, the code execution jumps to the `catch` block, where the error can be handled
- This is useful for handling errors that may occur in asynchronous operations, especially when using `async`/`await`

## promises in parallel

- It's possible to run multiple promises in parallel, which can help to improve performance by executing asynchronous tasks concurrently
- This can be achieved using methods such as `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, and `Promise.any()`

### Promise.all()

- `Promise.all()` accepts an array of promises and returns a new promise that is fulfilled with an array of resolved values, in the same order as the input promises
- If any of the input promises are rejected, `Promise.all()` rejects with the reason of the first rejected promise

### Promise.race()

- `Promise.race()` accepts an array of promises and returns a new promise that is fulfilled or rejected with the result of the first input promise that is settled (either fulfilled or rejected)

### Promise.allSettled()

- `Promise.allSettled()` accepts an array of promises and returns a new promise that is fulfilled with an array of objects describing the outcome of each input promise (whether it was fulfilled or rejected)
- This method is useful for handling multiple promises when you need to know the result of each promise, regardless of whether they were fulfilled or rejected

### Promise.any()

- `Promise.any()` accepts an array of promises and returns a new promise that is fulfilled with the value of the first input promise that is fulfilled
- If all input promises are rejected, `Promise.any()` rejects with an `AggregateError` containing an array of the rejection reasons
