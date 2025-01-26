const form = document.querySelector('.rating-form');
const submit = form.querySelector('button');
const radios = form.querySelectorAll('.rate-button');

const rateCard = document.querySelector('.rating-card');
const thankCard = document.querySelector('.thanks-card');
const rateLabel = thankCard.querySelector('.submited-rate');

if (Array.from(radios).some(radio => radio.checked)) {
	submit.disabled = false;
}

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    submit.disabled = false;
  });
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const selectedRadio = Array.from(radios).find(radio => radio.checked);
	
	rateCard.style.display = 'none';
	thankCard.style.display = 'block';
	rateLabel.textContent = selectedRadio.value;
});