
const valueEl = document.querySelector('#value');

let counterValue = 0;

const btnIncrementEL = document.querySelector(
  '#counter button[data-action="increment"]',
);

btnIncrementEL.addEventListener('click', onIncrementClick);

function onIncrementClick(click) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

const btnDecrementEl = document.querySelector(
  '#counter button[data-action="decrement"]',
);

btnDecrementEl.addEventListener('click', onDecrementClick);

function onDecrementClick(click) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}