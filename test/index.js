window.addEventListener('load', () => {

    // prevention links`s default behavior

    const preventLinks = document.querySelectorAll('.prevent');

    preventLinks.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
        })
    });

    // burger menu collaption
    const burgerMenu = document.querySelector('.burger-menu');
    const menuButton = document.querySelector('.burger-menu__button');
    const menuOverlay = document.querySelector('.burger-menu__overlay');

    const collapseMenu = () => {
        burgerMenu.classList.toggle("burger-menu_active");
    }

    const hideMenu = () => {
        burgerMenu.classList.remove("burger-menu_active");
    }

    menuButton.addEventListener('click', collapseMenu);
    menuOverlay.addEventListener('click', hideMenu);

})