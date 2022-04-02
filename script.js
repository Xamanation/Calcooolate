let a = ''; //Первое число
let b = ''; //Второе число
let sign = ''; //Знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', '/', '*', '%'];

//экран
const out = document.querySelector('.calculator-screen p');

function clearAll() {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
  //нажата не кнопка
  if (!event.target.classList.contains('btn')) return;
  //нажата кнопка ac
  if (event.target.classList.contains('ac')) return;

  out.textContent = '';
  // получаю нажатую кнопку
  const key = event.target.textContent;
  // если нажата клавиша 0-9 или .
  if (digit.includes(key)) {
    if (b === '' && sign === '') {
      a += key;
      out.textContent = a;
    }
    else if (a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    }
    else {
      b += key;
      out.textContent = b;
    }
  }

  // е6сли нажата клавиша + - / *
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(sign);
    return;
  }
  //нажата =
  if (key === '=') {
    if (b === '') b = a;
    switch (sign) {
      case "+":
        a = (+a) + (+b);
        break;

      case "-":
        a = a - b;
        break;

      case "*":
        a = a * b;
        break;

      case "/":
        if (b === '0') {
          out.textContent = 'Стопэ';
          а = '';
          b = '';
          sign = ' ';
          return;

        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;

  }
  console.log(a, b, sign);
}