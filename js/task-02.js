const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');

const liElement = document.createDocumentFragment();

ingredients.forEach(
  ingredient => {
    
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');
    liElement.appendChild(listItem);
  }

);
ingredientsList.appendChild(liElement);