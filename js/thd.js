(function ($) {
    "use strict";
    $(document).ready(function () {
        $('.burguer').on('click', function () {
            console.log('click');
            $(this).toggleClass('active');
            $('.menu').slideToggle(500);
        });
    });
})(jQuery);