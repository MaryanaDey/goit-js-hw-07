const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsEl = document.getElementById("ingredients");
  
  ingredients.forEach((ingredient) => {
    const ingredientLi = document.createElement("li");
    const liEl = document.createElement("a");
  
    ingredientLi.appendChild(liEl);
    ingredientsEl.appendChild(ingredientLi);
    ingredientLi.textContent = ingredient;
  });
  
  document.body.appendChild(ingredientsEl);