const rateBtns = document.querySelectorAll('.rating__rate-btn');
const submitBtn = document.querySelector('.rating__submit-btn');
const ratingCard = document.querySelector('.rating');
const thankYouCard = document.querySelector('.thank-you');
const endRating = document.querySelector('.thank-you__end-rating');

rateBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		// removes selected class from all rating buttons
		rateBtns.forEach((button) => {
			button.classList.remove('rating__rate-btn--checked');
			button.ariaChecked = 'false';
		});
		// and adds selected class to clicked button
		e.target.classList.add('rating__rate-btn--checked');
		e.target.ariaChecked = 'true';
	});
});

submitBtn.addEventListener('click', (e) => {
	// prevents reloading the page on submit
	e.preventDefault();
	// checkes if any rating is selected
	if (document.querySelector('.rating__rate-btn--checked')) {
		const selectedRating = document.querySelector('.rating__rate-btn--checked').value;
		ratingCard.classList.add('card--hidden');
		thankYouCard.classList.remove('card--hidden');
		endRating.innerText = selectedRating;
	}
});
