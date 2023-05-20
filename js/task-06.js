const InputText = document.querySelector('#validation-input');
const dataLength = Number(InputText.getAttribute('data-length'));

InputText.addEventListener('blur', (e) =>
{
    console.log(e.target.value.length);
    if (e.target.value.length === dataLength)
    {
        InputText.classList.remove('invalid');
        InputText.classList.add('valid');
    }
    else {
    InputText.classList.remove('valid');
    InputText.classList.add('invalid');
  }
}

)