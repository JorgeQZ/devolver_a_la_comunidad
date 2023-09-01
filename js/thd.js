(function ($) {
    "use strict";
    $(document).ready(function () {
        $('.burguer').on('click', function () {
            $(this).toggleClass('active');
            $('.menu').slideToggle(500);
        });
    });
})(jQuery);