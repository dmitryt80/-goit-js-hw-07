const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsRef = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient => {
  const item = document.createElement('li');
   item.textContent = ingredient;

  return item;
});

ingredientsRef.append(...ingredientsList);