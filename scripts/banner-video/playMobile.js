let newTag = document.createElement('script');
newTag.src = 'https://www.youtube.com/iframe_api';
let oldTag = document.getElementsByTagName('script')[0];
oldTag.parentNode.insertBefore(newTag, oldTag);

function onYouTubeIframeAPIReady() {
    let player = new YT.Player('player', {
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}