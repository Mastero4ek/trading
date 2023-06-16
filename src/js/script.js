const burger = document.querySelector('.header__burger-link'),
    navMenu = document.querySelector('.header__nav'),
    closeMenu = document.querySelector('.nav__close');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})