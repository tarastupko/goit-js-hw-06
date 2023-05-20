const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
//console.log(categoriesItems);
console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li');

  console.log('\nCategory:', categoryName);
  console.log('Elements:', elements.length);
});