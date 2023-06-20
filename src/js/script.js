//mobile-menu

const burger = document.querySelector('.header__burger-link'),
    navMenu = document.querySelector('.header__nav'),
    closeMenu = document.querySelector('.nav__close');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

//accordeon

const accounts = document.getElementById('accounts'),
    accountsHead = document.querySelectorAll('.accounts__head'),
    accountsItem = document.querySelectorAll('.accounts__head-arrow--link'),
    accountsList = document.querySelectorAll('.accounts__check-list');


accountsItem.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()

        if (!item.classList.contains('active')) {
            accountsItem[i].classList.add('active')
            accountsList[i].classList.add('accounts__check-list--show')
            accountsHead[i].style.overflow = 'visible'

            const h = getComputedStyle(accountsList[i]).height

            accountsList[i].style.height = '0'
            getComputedStyle(accountsList[i]).height
            accountsList[i].style.height = h
        } else {
            accountsList[i].style.height = getComputedStyle(accountsList[i]).height
            getComputedStyle(accountsList[i]).height
            accountsList[i].style.height = ''
            accountsHead[i].style.overflow = 'hidden'
            accountsItem[i].classList.remove('active')
            accountsList[i].classList.remove('accounts__check-list--show')
        }
    })
})