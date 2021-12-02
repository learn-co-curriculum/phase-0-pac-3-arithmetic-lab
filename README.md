# JavaScript Calculator Challenge Lab

## Learning Goals

- Practice doing math with JavaScript
- Practice writing functions that do things with numbers
- Practice parsing strings as numbers

## Introduction

In this lab, we're going to practice writing functions and manipulating numbers
in JavaScript. First, though, we need to review some basic math. In this lab,
we're going to learn about various arithmetic operators. What's an operator, you
say? It's a symbol that _operates_ on one or more (usually two) objects —
`+` is a good example. The `+` operator says "add what's to the left of `+` and
what's to the right of `+` together."

If you haven't already, fork and clone this lab into your local environment.
Navigate into its directory in the terminal, then run `code .` to open the files
in Visual Studio Code. (If you are using a different text editor, the command
will be different.) Finally, run `npm install` to install the lab's
dependencies.

As you read through this lesson, you're going to be adding your solutions to
`index.js`. You'll write a total of eight functions. Use the results of running
`npm test` to guide you towards the right function names and functionality.

## Basic Math

The most fundamental math operations work as one might expect in JavaScript: `+`
adds two numbers; `-` subtracts one number from another; `*` multiplies two
numbers; and `/` divides one number by another.

To follow along with the examples in this lesson, we'll be using the _terminal
window_ in [repl.it][]. You can type any JavaScript statement or expression at
the prompt and it will be immediately executed when you hit enter. Give it a
try: type each of the following math examples into the terminal. You can use the
embedded terminal below or open repl.it in a separate window if you prefer.

```javascript
1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2
```

<iframe height="400px" width="100%" src="https://repl.it/@LizBurton/ConstantLoathsomeToolbox?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

At this point, we can fix the first _eight_ failing tests: we can define
functions `add()`, `subtract()`, `multiply()`, and `divide()` in `index.js`.

> **Top Tip**: you can also _define and run functions_ in the REPL terminal. Try
> writing your `add()` function in the terminal first to see how it works.

## Math + Assignment

Recall that we can increment (`++`) and decrement (`--`) a number if it's
assigned to a variable. Don't forget to follow along in the REPL's terminal.

```javascript
let number = 5;

number++; //=> 5... hmmmm

number; //=> 6 -- the number was incremented after it was evaluated

number--; //=> 6

number; //=> 5
```

We can also put the incrementor and decrementor operations before the number, in
which case the number is evaluated _after_ the operator is executed:

```javascript
--number; //=> 4

number; //=> 4

++number; //=> 5

number; //=> 5
```

But generally, you will see them placed _after_ the number (and we recommend
that that's where you put them). If you're interested in the difference, take a
look at
[the documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment).

And, while we're on the subject, you'll usually only want to use these
incrementors and decrementors when the shorthand makes what you're writing
easier to read (more on when _exactly_ in a later lesson). Instead, it's best to
use the basic arithmetic operators combined with `=`.

Follow along in the terminal's REPL. You can pick up where we left off with the
previous examples. Start by setting `number` equal to 5.

- `+=` modifies the value to the operator's left by adding to it the value to
  the operator's right:

```javascript
number += 3; //=> 8
```

- `-=` modifies the value to the operator's left by subtracting from it the
  value to the operator's right:

```javascript
number -= 2; //=> 6
```

- `*=` modifies the value to the operator's left by multiplying it by the value
  to the operator's right:

```javascript
number *= 10; //=> 60
```

- `/=` modifies the value to the operator's left by dividing it by the value to
  the operator's right:

```javascript
number /= 5; //=> 12
```

Note that these methods modify the variable in place. So, if we have two
functions that depend on the same external variable, the order in which they are
called matters. Follow along in the terminal:

```javascript
//reset number
number = 10;

function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
number = 10;

add5(); //=> 15

divideBy3(); //=> 5
```

**Because these methods are more explicit, we prefer `+=` to `++` and `-=` to
`--` (usually).**

Okay, now we're ready to write solutions for the next two functions:
`increment(n)` and `decrement(n)`. These methods should take in a number, and
increment/decrement the provided value by one, returning the result.

## Parsing Numbers

Sometimes, we'll receive a number wrapped in quotes. We recognize it as a
number, but JavaScript will think it's a string. Luckily, JavaScript gives us
tools to turn these strings into proper numbers (that is, numbers that
JavaScript understands).

### `parseInt()`

The first such tool is the function `parseInt()`, which accepts two arguments:
the value to parse and the base of the value being parsed (called the _radix_).
_Usually_ you will want to work with base 10, so a typical call to `parseInt()`
looks like:

```javascript
parseInt("2", 10); //=> 2
```

What happens if we pass a representation of a non-integer to `parseInt()`? Let's
try it:

```javascript
parseInt("2.2222", 10);
```

If we enter the above in the REPL's terminal, we will see that `parseInt()`
forces the parsed number to be an integer — which makes sense when we think
about it, right?

What happens, though, if we pass utter nonsense to `parseInt()`? Go ahead and
try it — something like:

```javascript
parseInt("nonsense!", 10);
```

What did it return? `NaN`? What is that?

`NaN` stands for "Not a Number" — pretty handy, right? This is the number (in
the JavaScript sense) that JavaScript returns when it can't determine a valid
value for a numeric operation.

**Note**: You may see `parseInt()` used without a radix specified. In most
cases, the radix will default to 10, **but not always**! To be safe, you should
**always specify a radix**.

### `parseFloat()`

Above, we saw that `parseInt()` lops off everything after the decimal point and
only returns integers. If we want to preserve decimals, we'll need to use
`parseFloat()`.

Unlike `parseInt()`, `parseFloat()` accepts only a single argument, the thing to
be parsed. We can use it like so:

```javascript
parseFloat("80.123999"); // 80.123999
```

You're now ready to solve the final two tests in this lab, `makeInt(string)` and
`preserveDecimal(string)`. `makeInt(string)` should take in a string, parse it
into a base 10 integer and return it. `preserveDecimal(string)` should take in
a string, parse it into a float and return it.

## Saving Your Work Remotely

Currently, the work you've done on this assignment is only on your local
machine. To preserve your solution on your GitHub fork, you will need to stage the
changes you've made, commit them, and push the commit up to GitHub. Use
the following commands to do this:

```console
$ git add .
$ git commit -m "Completed assignment"
$ git push
```

If you visit your fork on GitHub, you should now see that _you've_ made the most
recent commit, and your code will be present in the files.

## Resources

- [MDN - parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

- [MDN - parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

[repl.it]: https://repl.it/languages/javascript
