const InputText = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
InputText.addEventListener('click', (e) =>
{
    console.log(e.target.value);
 const fontSize = e.target.value + 'px';
  text.style.fontSize = fontSize;
}

)