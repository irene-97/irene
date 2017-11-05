/* global $document */

let $hamburger = $('.hamburger');
let $navigationSmall = $('.navigation-small');

$hamburger.on('click', (e) => {
	e.stopPropagation();
	$navigationSmall.toggle();
});

$document.on('click', () => {
	$navigationSmall.hide();
});
