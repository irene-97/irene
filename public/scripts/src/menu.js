$(() => {
    $('.js-scrollTo').on('click', function (e) {
        var $this = $(this);
        var href = $this.attr('href') || $this.data('href');

        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: $(href).offset().top
        }, 500);

        $this.trigger('blur');
    });
});