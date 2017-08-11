$(() => {
    let $humburger = $('.humburger');
    let $navigationSmall = $('.navigation-small');

    $humburger.on('click', function (e) {
        e.stopPropagation();
        if ($navigationSmall.is(':hidden')) {
            $navigationSmall.css('display', 'block');
        } else {
            $navigationSmall.css('display', 'none');
        }
    });

    $(document).on('click', function () {
        $navigationSmall.css('display', 'none');
    })
});