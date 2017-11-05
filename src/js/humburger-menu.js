/* global $document */

let $humburger = $('.humburger');
let $navigationSmall = $('.navigation-small');

$humburger.on('click', (e) => {
	e.stopPropagation();
	$navigationSmall.toggle();
});

$document.on('click', () => {
	$navigationSmall.hide();
});
