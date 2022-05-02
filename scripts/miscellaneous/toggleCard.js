$('section.artists article').each(function() {

    const infoCard = $(this).find('div.info');
    const button = $(this).find('div.button button');
    
    button.on('click', function() {
        infoCard.fadeToggle({
            duration: 500,
            complete: function() {
                if (infoCard.is(':visible')) {
                    button.text('Less');
                } else {
                    button.text('More');
                }
            }
        });
    });
});