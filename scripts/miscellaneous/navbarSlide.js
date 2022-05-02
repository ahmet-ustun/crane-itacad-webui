const divSlide = $('nav ul li.dropdown div.slide');
const divLinks = $('nav ul li.dropdown div.links');
const arrowIcon = $('nav ul li.dropdown div.slide i');

divSlide.on('click', function() {
    divLinks.slideToggle({
        duration: 300,
        start: function() {
            divLinks.css({
                display: 'flex'
            });
        },
        complete: function() {
            if (divLinks.is(':visible')) {
                arrowIcon.css({
                    transform: 'rotate(-90deg)'
                });
            } else {
                arrowIcon.css({
                    transform: 'rotate(0deg)'
                });
            }
        }
    });
});