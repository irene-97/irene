let $button = $('.block-works button');
let $hiddenWorks = $('.works .work.hidden');

$button.on('click', () => {
	$hiddenWorks.removeClass('hidden');
	$button.hide();
});
