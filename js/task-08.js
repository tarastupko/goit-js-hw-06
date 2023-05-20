const Forma = document.querySelector('.login-form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');

Forma.addEventListener('submit', (e)=>

{
    e.preventDefault();
 if (emailInput.value === '' || passwordInput.value === '') {
    alert('Всі поля повинні бути заповнені');
  } else {
    const loginData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(loginData);
    Forma.reset();
  }
}

);
