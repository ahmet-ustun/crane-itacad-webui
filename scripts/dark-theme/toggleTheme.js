import { html, toggle } from "./onLoadTheme.js";

toggle.addEventListener('change', () => {
    if (!toggle.checked) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    }
});