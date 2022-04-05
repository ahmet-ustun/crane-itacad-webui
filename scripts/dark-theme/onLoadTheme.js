let theme = localStorage.getItem('data-theme');
let html = document.documentElement;
let toggle = document.getElementById('checkbox');

if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    toggle.checked = false;
} else {
    html.setAttribute('data-theme', 'light');
    toggle.checked = true;
}

export { html, toggle };