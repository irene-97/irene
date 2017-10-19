$(() => {
	let $button = $('.block-works button');
	let $hiddenWorks = $('.works .work.hidden');

	$button.on('click', function (e) {
		$hiddenWorks.removeClass('hidden');
		$button.hide();
	});
});