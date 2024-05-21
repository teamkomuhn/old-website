function is_mobile() {
	return matchMedia('(max-width: 1279.5px)').matches;
}

function device_tag() {
	return is_mobile() ? 'mobile' : 'desktop';
}

/** @param {string} string */
export function capitalize(string) {
	return string[0].toUpperCase() + string.slice(1);
}

/** @param {HTMLElement} element */
function get_grid_column_count(element) {
	return getComputedStyle(element).gridTemplateColumns.split(' ').length;
}

/** @param {HTMLElement} element @param {string} attribute */
function get_responsive_data_attribute(element, attribute_name) {
	return element.dataset[attribute_name + capitalize(device_tag())];
}

const containers = document.querySelectorAll('[data-rows-mobile], [data-rows-desktop], [data-items-mobile], [data-items-desktop]');

for (const container of containers) {
	const column_count = get_grid_column_count(container);
	const child_count = container.childElementCount;
	const see_more_button = container.parentElement.querySelector('button.see-more');

	const row_count = Number(get_responsive_data_attribute(container, 'rows'));
	const item_count = Number(get_responsive_data_attribute(container, 'items'));
	const count = item_count || column_count * row_count;

	if (child_count <= count) {
		see_more_button.remove();

		continue;
	}

	const last_visible = container.children.item(count - 1);

	last_visible.classList.add('hide-after');

	see_more_button.addEventListener('click', (event) => {
		event.stopPropagation();
		last_visible.classList.remove('hide-after');
		event.currentTarget.remove();
	}, { once: true });
}
