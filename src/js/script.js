window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__item'),
    hamburger = document.querySelector('.nav-hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('nav-hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('nav-hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})