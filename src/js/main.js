svg4everybody();

// @include('detect.js')
// @include('globals.js')

// @include('./hamburger-menu.js')
// @include('./menu.js')
// @include('./wow.js')
// @include('./more.js')
// @include('./fancybox.js')

$('h2 .info').on('click', () => {
	$('h2').toggleClass('info-text-open');
});
