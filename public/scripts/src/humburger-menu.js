$(() => {
    let $humburger = $('.humburger');
    let $navigationSmall = $('.navigation-small');

    $humburger.on('click', function (e) {
        e.stopPropagation();
        $navigationSmall.toggle();
    });

    $(document).on('click', function () {
        $navigationSmall.hide();
    });
});