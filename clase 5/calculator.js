
console.log('Logic online!');

let numberButton = document.querySelectorAll('.num');
let operationButton = document.querySelectorAll('.op');
let ac = document.querySelector('.AC');
let equal = document.querySelector('.equal');
let middleText = document.querySelector('#middle_text');
let bottomText = document.querySelector('#bottom_text');
let isOperationUsed = false;
let bottomTextContent = bottomText.firstChild.textContent;
let middleTextContent = middleText.firstChild.textContent;

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
  if (!isNaN(a) && !isNaN(b)) {

    if (typeof operation === 'string') {

      switch (operation) {
        case '+':
          results = sum(a, b);
          break;

        case '-':
          results = substract(a, b);
          break;

        case 'x':
          results = multiply(a, b);
          break;

        case '/':
          results = divide(a, b);
          break;

        default:
          break;
      }
    }
  }
  return results;
}

numberButton.forEach(btn =>
  btn.addEventListener('click', e => {

    if (bottomTextContent === '0') {
      bottomTextContent = e.target.innerText;
      bottomText.firstChild.textContent = bottomTextContent;
    } else {
      bottomTextContent = bottomTextContent + e.target.innerText;
      bottomText.firstChild.textContent = bottomTextContent;
    }
  })
);

operationButton.forEach(btn =>
  btn.addEventListener('click', e => {

    if (!isOperationUsed) {
      bottomTextContent = `${bottomTextContent} ${e.target.innerText} `;
      bottomText.firstChild.textContent = bottomTextContent;
    }
    isOperationUsed = true;
  })
);

ac.addEventListener('click', () => {
  bottomText.firstChild.textContent = '0';
  middleText.firstChild.textContent = ' ';
  bottomTextContent = bottomText.firstChild.textContent;
  isOperationUsed = false;
});

equal.addEventListener('click', () => {
  const operation = bottomTextContent.split(' ');
  let result = calculator(operation[0], operation[2], operation[1]);

  if (result === Infinity) {
    result = 'Error!';
  }

  middleText.firstChild.textContent = bottomTextContent;
  bottomText.firstChild.textContent = result;
});
