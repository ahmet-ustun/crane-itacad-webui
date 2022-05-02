import { artistDB } from "./database.js";

const artistList = $('span.artist');
const spotifyPlay = $('iframe.spotify');

artistList.each(function () {

    $(this).on('click', function(event) {
        
        const artistName = event.target.innerText;
        
        spotifyPlay
            .fadeOut(700)
            .attr('src', artistDB[artistName].link)
            .fadeIn(700);
    });
});