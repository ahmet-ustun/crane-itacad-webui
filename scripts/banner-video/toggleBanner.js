import { toggle, banner } from "./onLoadBanner.js";

toggle.on('change', function() {
    if (toggle.is(':checked')) {
        banner.show(500);
        localStorage.setItem('banner-status', 'true');
    } else {
        banner.hide(500);
        localStorage.setItem('banner-status', 'false');
    }
});