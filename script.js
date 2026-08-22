const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const dropdowns = document.querySelectorAll('.dropdown');

if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
}

dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector('.dropbtn');

    if (!button) return;

    button.addEventListener('click', (event) => {
        event.stopPropagation();

        const isOpen = dropdown.classList.contains('active');
        dropdowns.forEach((item) => item.classList.remove('active'));

        if (!isOpen) {
            dropdown.classList.add('active');
        }
    });
});

window.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        dropdowns.forEach((dropdown) => dropdown.classList.remove('active'));
    }
});

