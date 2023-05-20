const inputValue = document.querySelector('#name-input');
const spanValue = document.querySelector('#name-output');


inputValue.addEventListener("input", (e) => {
    spanValue.textContent = e.target.value;
    if (e.target.value === '')
    {
        spanValue.textContent = "Anonymous";
    }
    else
    {
        spanValue.textContent = e.target.value;
        }
}
);