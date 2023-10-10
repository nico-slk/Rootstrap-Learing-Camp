
console.log('Logic online!');

let number_button = document.querySelectorAll('.num');
let operation_button = document.querySelectorAll('.op');
let AC = document.querySelector('.AC');
let equal = document.querySelector('.equal');
let top_text = document.querySelector('#top_text');
let middle_text = document.querySelector('#middle_text');
let bottom_text = document.querySelector('#bottom_text');
let isOperationUsed = false;
let bottom_textContent = bottom_text.firstChild.textContent;
let middle_textContent = middle_text.firstChild.textContent;

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

number_button.forEach(btn =>
  btn.addEventListener('click', e => {

    if (bottom_textContent === '0') {
      bottom_textContent = e.target.innerText;
      bottom_text.firstChild.textContent = bottom_textContent;
    } else {
      bottom_textContent = bottom_textContent + e.target.innerText;
      bottom_text.firstChild.textContent = bottom_textContent;
    }
  })
);

operation_button.forEach(btn =>
  btn.addEventListener('click', e => {

    if (!isOperationUsed) {
      bottom_textContent = `${bottom_textContent} ${e.target.innerText} `;
      bottom_text.firstChild.textContent = bottom_textContent;
    }
    isOperationUsed = true;
  })
);

AC.addEventListener('click', () => {
  bottom_text.firstChild.textContent = '0';
  middle_text.firstChild.textContent = ' ';
  bottom_textContent = bottom_text.firstChild.textContent;
  isOperationUsed = false;
});

equal.addEventListener('click', () => {
  const operation = bottom_textContent.split(' ');
  let result = calculator(operation[0], operation[2], operation[1]);

  if (result === Infinity) {
    result = 'Error!';
  }

  middle_text.firstChild.textContent = bottom_textContent;
  bottom_text.firstChild.textContent = result;
});
