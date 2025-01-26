const form = document.querySelector('.subscribe-form');
const input = form.querySelector('.email-input');

const errorMessage = document.querySelector('.msg');
const errorIcon = form.querySelector('.error-icon');

form.addEventListener('submit', function (e) {
  let formValid = true; 

  if (!input.validity.valid) {
    formValid = false; 
    input.style.color = 'hsl(0, 6%, 24%)'; 
    input.style.borderColor = 'red'; 
    errorIcon.style.display = 'block'; 

    if (input.value !== '') {
      errorMessage.textContent = 'Please provide a valid email';
    } else if (input.value === '') {
      errorMessage.textContent = `Email address cannot be empty`;
    }

    errorMessage.style.display = 'block';
  } else {
    input.style.color = 'hsl(0, 6%, 24%)';
    input.style.borderColor = 'hsl(0, 36%, 70%)';
    errorMessage.style.display = 'none';
    errorIcon.style.display = 'none';
  }

  if (!formValid) {
    e.preventDefault();
  }
});


input.addEventListener('input', function () {
  if (input.validity.valid) {
    input.style.color = 'hsl(0, 6%, 24%)';
    input.style.borderColor = 'hsl(0, 36%, 70%)';
    errorMessage.style.display = 'none';
    errorIcon.style.display = 'none';
  }
});
