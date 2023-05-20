const clickButton = document.querySelector('.change-color');
const backColor = document.querySelector('.color');


clickButton.addEventListener('click', (e) =>
{

  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  backColor.textContent = randomColor;

}


)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
