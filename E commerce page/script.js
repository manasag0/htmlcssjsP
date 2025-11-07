const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar && nav && close) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });

    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
