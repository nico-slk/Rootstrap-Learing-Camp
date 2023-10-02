function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculator(a, b, operation) {
  let results;
  a = Number(a);
  b = Number(b);
  if (!isNaN(Number(a)) && !isNaN(Number(b))) {

    if (typeof operation === 'string') {

      switch (operation) {
        case '+':
          results = a + b;
          break;

        case '.':
          results = a - b;
          break;

        case '*':
          results = a * b;
          break;

        case '/':
          results = a / b;
          break;

        default:
          break;
      }
      return results;
    }
  }
}

// whenever an operation cannot be processed by the calculator function, it should throw the following generic error
// throw new Error('Invalid operation')

// example call

calculator(1, 2, '+'); // should work
calculator('1', 2, '+'); // should work

calculator('a', 1, '+'); // shouldn't be processed
calculator(1, 2, 'hi'); // shouldn't be processed

// operation could be the following -> number, string, [], {}, -infinity, infinity, NaN and you need to validate
// a,b could be the following -> number, string and you need to validate
