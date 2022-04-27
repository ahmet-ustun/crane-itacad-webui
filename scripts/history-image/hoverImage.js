$('section.history img').each(function () {

    $(this)
        .on('mouseover', function () {
            $(this).next('figcaption')
                .animate({ bottom: '0px' }, 300);
        }).on('mouseout', function () {
            $(this).next('figcaption')
                .animate({ bottom: '-40px' }, 300);
        });
});