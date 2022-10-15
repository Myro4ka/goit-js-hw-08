import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle"

const iframe = document.querySelector("iframe");
const iframePlayer = new Vimeo(iframe);

iframePlayer.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

iframePlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
