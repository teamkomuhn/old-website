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
    });
}

/** @param {HTMLElement} element */
function getGridColumnCount(element) {
    return getComputedStyle(element).gridTemplateColumns.split(' ').length;
}

const showMoreContainers = document.querySelectorAll('[data-show-more-rows]');

for (const showMoreContainer of showMoreContainers) {
    const columnCount = getGridColumnCount(showMoreContainer);
    const rowCount = Number(showMoreContainer.dataset.showMoreRows);
    const itemCount = showMoreContainer.childElementCount;
    const showCount = columnCount * rowCount;

    const showMoreButton = showMoreContainer.nextElementSibling;

    if (itemCount <= showCount) {
        showMoreButton.remove();

        continue;
    }

    const hideAfter = showMoreContainer.children.item(showCount - 1);

    hideAfter.classList.add('hide-after');

    showMoreButton.addEventListener(
        'click',

        (event) => {
            event.stopPropagation();
            hideAfter.classList.remove('hide-after');
            event.currentTarget.remove();
        },

        { once: true },
    );
}
