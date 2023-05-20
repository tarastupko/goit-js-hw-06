const input = document.querySelector('input');

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () =>
{
  const inputValue = input.value;
  createBoxes(inputValue);

});

destroyButton.addEventListener('click', () =>
{
  destroyBoxes();
});

function createBoxes(amount)

{
  
  const boxes = [];
  if (amount <= 0)
  {
    alert("Значення повинно бути більше 0");
  }
  for (let i = 0; i < amount; i++)
  {
    const size = 30 + (i * 10);
    const Onebox = document.createElement('div');
    const color = getRandomHexColor();
    Onebox.style.width = `${size}px`;
    Onebox.style.height = `${size}px`;
    Onebox.style.backgroundColor = color;
    boxes.push(Onebox);
  }
boxesContainer.append(...boxes);
}

function destroyBoxes()
{
  boxesContainer.innerHTML = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}