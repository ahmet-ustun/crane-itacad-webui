const button = $('button#scroll-up');
const html = $('html');

$(window).on('scroll', function() {
    if (html.scrollTop() > 20) {
        button.fadeIn(300);
    } else {
        button.fadeOut(300);
    }
});

button.on('click', function() {
    html.animate({
        scrollTop: 0
    }, 'slow');
});