const containers = document.querySelectorAll(
	':is(#recent-posts, #about) > div > article',
);

for (const container of containers) {
	const href = container.querySelector('a')?.href;

	if (!href) continue;

	container.addEventListener('click', () => {
		location.assign(href);
	});
}
