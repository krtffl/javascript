# numbers, dates, intl, timers

## converting and checking numbers

- parseInt: parses a string argument and returns an integer
- parseFloat: parses a string argument and returns a floating-point number
- isNaN: determines whether a value is NaN (Not-a-Number)
- isFinite: determines whether a value is a finite number
- isInteger: determines whether a value is an integer

## math and rounding

- type coercion: JavaScript automatically converts types when needed
- Math.random(): returns a random number between 0 (inclusive) and 1 (exclusive)
- Math.round(): rounds a number to the nearest integer
- Math.ceil(): rounds a number up to the next largest integer
- Math.floor(): rounds a number down to the nearest integer
- Math.trunc(): removes any fractional digits from a number
- toFixed(): formats a number using fixed-point notation

## remainder operator

- `%`: returns the remainder of a division operation

## numeric separators

- use `_` to make numeric literals more readable by creating a visual separation between groups of digits

## working with bigint

- BigInt: a built-in object that provides a way to represent whole numbers larger than 2^53 - 1

## creating dates

- Date: built-in object for working with dates and times
- new Date(): creates a new date object with the current date and time

## internationalizing dates

- Intl.DateTimeFormat: a built-in object that enables language-sensitive date and time formatting

## internationalizing numbers

- Intl.NumberFormat: a built-in object that enables language-sensitive number formatting

## timers

- setTimeout(): sets a timer that executes a function or specified piece of code once the timer expires
- setInterval(): repeatedly calls a function or executes a code snippet with a fixed time delay between each call
- clearTimeout(): cancels a timeout previously established by calling setTimeout()
- clearInterval(): cancels a timed, repeating action which was previously established by a call to setInterval()
