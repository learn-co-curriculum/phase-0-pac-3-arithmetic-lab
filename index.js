//arithmetic lab

function add(a, b) {// adds two parameters and returns the result
return a + b;
}

function subtract(a, b){// subtracts the second parameter from the first and returns the result
   return a - b; 
}

function multiply(a, b){// multiplies two parameters and returns the result
    return a * b;
}

function divide(a, b){// divides the first parameter by the second and returns the result
    return a / b;
}

function increment(n){// takes in a number, increments it by 1 and returns the result
    return n + 1;
}

function decrement(n){// takes in a number, decrements it by 1 and returns the result
    return n - 1;
}

function makeInt(n){// takes in a parameter, converts it to an integer and returns the result
    return parseInt(n, 10);
}

function preserveDecimal(n){// takes in a parameter, converts it to a floating point number and returns the result
    return parseFloat(n);
}