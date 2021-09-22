const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории`);

itemsEl.forEach(item => {
  const titleEl = item.querySelector('h2').textContent;
  console.log(`
Категория: ${titleEl}
Количество элементов: ${item.querySelectorAll('li').length}`);
});