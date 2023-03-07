const form = document.forms.formWithInput;
const printResult = document.querySelector('.content__result');
const inputNumber = document.querySelector('.form__input');
const congratulation = document.querySelector('#congratulation');

function findNearestFactorial(value) {
  if (value === '' || value === undefined) {
    return '*';
  }
  if (value <= 0) {
    console.log(value);
    return 1;
  }
  let currentValue = 1;
  for (var i = 1; currentValue * i <= value; i++) {
    currentValue *= i;
  }
  return i - 1;
}

form.addEventListener('keyup', evt => {
  evt.preventDefault();
  printResult.textContent = findNearestFactorial(inputNumber.value);
  congratulation.textContent = inputNumber.value && 'Вау, это успех!';
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
});