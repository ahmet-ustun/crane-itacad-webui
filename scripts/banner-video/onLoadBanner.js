let condition = localStorage.getItem('banner-status');
let toggle = $('footer div.banner-toggle input');
let banner = $('main section.kaleidoscope');

if (condition === 'false') {
    banner.hide();
    toggle.prop('checked', false);
} else {
    banner.show();
    toggle.prop('checked', true);
}

export { toggle, banner };