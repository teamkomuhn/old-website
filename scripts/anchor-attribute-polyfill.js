// TODO update to work with pseudo elements

if (!('anchorElement' in document.documentElement) && 'anchorName' in document.documentElement.style) {
    console.debug('%canchor="id"%c attribute polyfill enabled', 'color: white; background-color: grey', 'color: revert-layer');

    /** @type NodeListOf<HTMLElement> */
    const anchored_elements = document.querySelectorAll('[anchor]');

    for (const element of anchored_elements) {
        const anchor_name = element.getAttribute('anchor');
        const anchor_identifier = `--${anchor_name}`;
        /** @type HTMLElement */
        const anchor = document.getElementById(anchor_name);

        anchor.style.setProperty('anchor-name', anchor_identifier)
        element.style.setProperty('position-anchor', anchor_identifier);
    }
}
