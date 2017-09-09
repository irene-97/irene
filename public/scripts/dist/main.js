'use strict';

$(function() {
	var $humburger = $('.humburger');
	var $navigationSmall = $('.navigation-small');

	$humburger.on('click', function(e) {
		e.stopPropagation();
		if ($navigationSmall.is(':hidden')) {
			$navigationSmall.css('display', 'block');
		} else {
			$navigationSmall.css('display', 'none');
		}
	});

	$(document).on('click', function() {
		$navigationSmall.css('display', 'none');
	});
});
$(function() {
	$('.js-scrollTo').on('click', function(e) {
		var $this = $(this);
		var href = $this.attr('href') || $this.data('href');

		e.preventDefault();

		$('html, body').stop().animate({
			scrollTop: $(href).offset().top
		}, 500);

		$this.trigger('blur');
	});
});
$(function() {
	new WOW().init();
});

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect: 'none',
		closeEffect: 'none'
	});
});
