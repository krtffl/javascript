## operators

### arithmetic

- perform mathematical operations, such as addition, subtraction, multiplication, and division
- operators: `+`, `-`, `*`, `/`, `%` (modulo), `**` (exponentiation), `++` (increment), `--` (decrement)

### assignment

- assign values to variables or object properties
- operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`

### comparison

- compare two values and return a boolean result
- operators: `>`, `<`, `>=`, `<=`

### equality

- compare two values for equality, returning a boolean result

#### strict equality

- `===` operator
- checks both value and type
- e.g., `5 === '5'` returns `false`

#### loose equality

- `==` operator
- checks value, but allows type coercion
- e.g., `5 == '5'` returns `true`

### ternary

- a shorthand for an `if-else` statement, also known as the conditional operator
- syntax: `condition ? trueExpression : falseExpression`
- evaluates the condition, returning the value of `trueExpression` if the condition is true, and `falseExpression` otherwise

### logical operators

- perform logical operations, returning a boolean result or the value that determined the outcome
- operators: `&&` (AND), `||` (OR), `!` (NOT)

#### short-circuiting

- logical operators evaluate left-to-right and stop as soon as the outcome is determined
- `&&` returns the first falsy value or the last value if all are truthy
- `||` returns the first truthy value or the last value if all are falsy

#### falsy/truthy values

- falsy values: `false`, `0`, `NaN`, `null`, `undefined`, `''` (empty string)
- truthy values: all values that are not falsy

### bitwise

- perform operations on binary representations of numbers
- operators: `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (left shift), `>>` (signed right shift), `>>>` (unsigned right shift)

#### read, write, execute permissions

- bitwise operators can be used to manipulate file permissions in systems that use numeric representations, such as Unix-based systems
- permissions are represented as a combination of read (4), write (2), and execute (1) values
- e.g., 7 (4+2+1) represents read, write, and execute permissions

### operator precedence

- determines the order in which operators are evaluated in an expression
- operators with higher precedence are evaluated before operators with lower precedence
- can be overridden with parentheses `()`
- precedence, from highest to lowest: `()` (grouping), `!` `~` (unary), `*` `/` `%` (multiplication, division, modulo), `+` `-` (addition, subtraction), `<<` `>>` `>>>` (bitwise shifts), `<` `<=` `>` `>=` (comparison), `==` `!=` `===` `!==` (equality), `&` (bitwise AND), `^` (bitwise XOR), `|` (bitwise OR), `&&` (logical AND), `||` (logical OR), `? :` (ternary)
