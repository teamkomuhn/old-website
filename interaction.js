/** @template T @param {Set<T>} set @param {T} value*/
function toggleSetValue(set, value) {
    if (set.has(value)) {
        set.delete(value);

        return;
    }

    set.add(value);
}

const cards = document.querySelectorAll('.cards > *');
const selected = new Set();

for (const card of cards) {
    card.addEventListener('click', ({ currentTarget }) => {
        currentTarget.classList.toggle('selected');

        toggleSetValue(selected, currentTarget);

        // console.log(selected);
    });
}

const makingTogetherCards = document.querySelectorAll(
    '#making-together > div > div > *',
);

console.log(makingTogetherCards);
