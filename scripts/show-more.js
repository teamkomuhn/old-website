/** @param {string} string */
export function capitalize(string) {
	return string[0].toUpperCase() + string.slice(1);
}

function isMobile() {
	return matchMedia('(max-width: 500px)').matches;
}

function deviceTag() {
	return isMobile() ? 'mobile' : 'desktop';
}

/** @param {HTMLElement} element */
function getGridColumnCount(element) {
	return getComputedStyle(element).gridTemplateColumns.split(' ').length;
}

/** @param {HTMLElement} element @param {string} attribute */
function getResponsiveDataAttribute(element, attributeName) {
	return element.dataset[attributeName + capitalize(deviceTag())];
}

const showMoreContainers = document.querySelectorAll(
	'[data-rows-mobile], [data-rows-desktop], [data-items-mobile], [data-items-desktop]',
);

for (const showMoreContainer of showMoreContainers) {
	const gridColumnCount = getGridColumnCount(showMoreContainer);
	const childCount = showMoreContainer.childElementCount;
	const showMoreButton = showMoreContainer.nextElementSibling;

	const rowCount = Number(
		getResponsiveDataAttribute(showMoreContainer, 'rows'),
	);

	const itemCount = Number(
		getResponsiveDataAttribute(showMoreContainer, 'items'),
	);

	const showCount = itemCount || gridColumnCount * rowCount;

	if (childCount <= showCount) {
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
