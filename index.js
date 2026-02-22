// basic math functions

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function increment(n) {
  return n + 1
}

function decrement(n) {
  return n - 1
}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}

// attach to global scope so tests can see them
global.add = add
global.subtract = subtract
global.multiply = multiply
global.divide = divide
global.increment = increment
global.decrement = decrement
global.makeInt = makeInt
global.preserveDecimal = preserveDecimal


