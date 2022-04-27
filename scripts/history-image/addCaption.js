$('section.history img').each(function() {
    
    $(this)
        .css({width: '100%'})
        .wrap('<figure>')
        .after('<figcaption>');

    $(this)
        .parent('figure')
        .css({
            position: 'relative',
            overflow: 'hidden'
        });

    $(this)
        .next('figcaption')
        .text($(this).attr('alt'))
        .css({
            position: 'absolute',
            padding: '8px 0px',
            width: '100%',
            bottom: '-40px',
            textAlign: 'center',
            background: '#0e7e4f',
            color: 'whitesmoke'
        });
});