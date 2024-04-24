const cards = document.querySelectorAll('.cards > *');

for (const card of cards) {
	card.addEventListener('click', ({ currentTarget }) => {
		currentTarget.classList.toggle('selected');
	});
}
