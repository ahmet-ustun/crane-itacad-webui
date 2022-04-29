import { toggle, banner } from "./onLoadBanner.js";

toggle.on('change', function() {
    if (toggle.is(':checked')) {
        banner.slideDown(500);
        localStorage.setItem('banner-status', 'true');
    } else {
        banner.slideUp(500);
        localStorage.setItem('banner-status', 'false');
    }
});