function toggleTheme() {
    const body = document.querySelector("body");
    const icon = document.getElementById("icon");
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        icon.className = 'fa-solid fa-moon';
    }
    else {
        body.classList.add('dark');
        icon.className = 'fa-solid fa-sun';
    }
}

const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');
const overlay = document.getElementById('nav-overlay');

function openMenu() {
    ul.classList.add('show');
    overlay.classList.add('active');
}

function closeMenu() {
    ul.classList.remove('show');
    overlay.classList.remove('active');
}

burger.addEventListener('click', () => {
    if (ul.classList.contains('show')) {
        closeMenu();
    } else {
        openMenu();
    }
});

overlay.addEventListener('click', closeMenu);

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', closeMenu);
});
