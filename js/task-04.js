const targetBtn = document.querySelector("#counter");
const addListenerBtn = document.querySelector('#counter button[data-action="increment"]')
const removeListenerBtn = document.querySelector('#counter button[data-action="decrement"]');

addListenerBtn.addEventListener("click", (event) => {
  console.log(event);
  console.log("Вешаю слушателя события на целевую кнопку");

  targetBtn.addEventListener("click", onTargetBtnClick);
});

removeListenerBtn.addEventListener("click", (event) => {
  console.log(event);
  console.log("Снимаю слушателя события с целевой кнопки");

  targetBtn.removeEventListener("click", onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log(event);
  console.log("Клик по целевой кнопке");
}