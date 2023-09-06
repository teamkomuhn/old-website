function isMobile() {
	return matchMedia('(max-width: 500px)').matches;
}

export function deviceTag() {
	return isMobile() ? 'mobile' : 'desktop';
}
