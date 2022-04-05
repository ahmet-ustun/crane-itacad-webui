import { artistDB } from "./database.js";

const artistList = document.querySelectorAll('span.artist');
const spotifyPlaylist = document.querySelector('iframe.spotify');

artistList.forEach(artist => {
    artist.addEventListener('click', event => {
        const playTime = event.target.innerText;
        spotifyPlaylist.setAttribute('src', artistDB[playTime]);
    });
});