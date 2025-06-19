const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  const inputValue = event.target.value.trim();
  if (inputValue === '' || inputValue.length === 0) {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = inputValue;
  }
});
