/* global $html, $body */

$('.js-scrollTo').on('click', (e) => {
	let $this = $(e.currentTarget);
	let href = $this.attr('href') || $this.data('href');

	e.preventDefault();

	$html.add($body).stop().animate({
		scrollTop: $(href).offset().top,
	}, 500);

	$this.trigger('blur');
});
