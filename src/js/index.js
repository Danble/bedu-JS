import {suma, resta, mult, div} from './math'

const num1 = document.getElementById('firstQuantity');
const num2 = document.getElementById('secondQuantity');

const $result = document.querySelector('#result');
const sumar = document.getElementById('sum-button');
const restar = document.getElementById('minus-button');
const multipicar = document.getElementById('multiply-button');
const dividir = document.getElementById('divide-button');


sumar.addEventListener('click', () => {
  let number1 = parseInt(num1.value);
  let number2 = parseInt(num2.value);
  $result.innerHTML += `<p>El resultado de la suma es: <b>${suma(number1, number2)}</b></p>`;
});

restar.addEventListener('click', () => {
  let number1 = parseInt(num1.value);
  let number2 = parseInt(num2.value);
  $result.innerHTML += `<p>El resultado de la resta es: <b>${resta(number1, number2)}</b></p>`;
});

multipicar.addEventListener('click', () => {
  let number1 = parseInt(num1.value);
  let number2 = parseInt(num2.value);
  $result.innerHTML += `<p>El resultado de la multiplicación es: <b>${mult(number1, number2)}</b></p>`;
});

dividir.addEventListener('click', () => {
  let number1 = parseInt(num1.value);
  let number2 = parseInt(num2.value);
  $result.innerHTML += `<p>El resultado de la división es: <b>${div(number1, number2)}</b></p>`;
});
