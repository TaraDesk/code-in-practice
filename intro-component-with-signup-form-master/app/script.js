const root = document.documentElement;
const errorColor = getComputedStyle(root).getPropertyValue('--red');

const form = document.querySelector('.sign-up-form');
const inputs = form.querySelectorAll('.form-input');
const errorMessages = form.querySelectorAll('.msg');
const errorIcons = form.querySelectorAll('.error-icon');

form.addEventListener('submit', function (e) {
  let formValid = true; 

  inputs.forEach((input, index) => {
    const errorMessage = errorMessages[index];
    const errorIcon = errorIcons[index];

    if (!input.validity.valid) {
      formValid = false; 
      input.style.color = errorColor; 
      input.style.borderColor = errorColor; 
      errorIcon.style.display = 'block'; 

      if (input.type === 'email' && input.value !== '') {
        errorMessage.textContent = 'Looks like this is not an email';
      } else if (input.value === '') {
        errorMessage.textContent = `${input.placeholder} cannot be empty`;
      }

      errorMessage.style.display = 'block';
    } else {
      input.style.color = 'hsl(249, 10%, 26%)';
      input.style.borderColor = 'hsla(249, 10%, 26%, 0.4)';
      errorMessage.style.display = 'none';
      errorIcon.style.display = 'none';
    }
  });

  if (!formValid) {
    e.preventDefault();
  }
});

inputs.forEach((input, index) => {
  input.addEventListener('input', function () {
    const errorMessage = errorMessages[index];
    const errorIcon = errorIcons[index];

    if (input.validity.valid) {
      input.style.color = 'hsl(249, 10%, 26%)';
      input.style.borderColor = 'hsla(249, 10%, 26%, 0.4)';
      errorMessage.style.display = 'none';
      errorIcon.style.display = 'none';
    }
  });
});
