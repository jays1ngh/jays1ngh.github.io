$(document).ready(function () {
    $('.post-detail h1, .post-detail h2, .post-detail h3, .post-detail h4').each(function () {

        //create id from heading text
        var id = $(this).attr('id') || $(this).text().toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ +/g, '-');

        //add id to heading
        $(this).attr('id', id);

        //append parent class to heading
        $(this).addClass('anchor-heading');

        //create anchor
        var anchor = $('<a class="anchor-link" href="#' + id + '">#</a>');

        //append anchor link after heading text
        $(this).append(anchor);
    });

    //add smooth scroll for anchor links
    $(document).on('click', 'a.anchor-link', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 10, 'linear');
    });

    //navigate to anchor if available
    if (window.location.hash.length > 0) {
        $('a[href="' + window.location.hash + '"]').trigger('click');
    }
});