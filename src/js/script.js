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
    accountsHeader = document.querySelectorAll('.accounts__head'),
    accountsHead = document.querySelectorAll('.accounts__head-pointer'),
    accountsItem = document.querySelectorAll('.accounts__head-arrow--link'),
    accountsList = document.querySelectorAll('.accounts__check-list');

accounts.addEventListener('click', (e) => {
    if (e.target.matches('.accounts__head-arrow--link')) {
        const btn = e.target.closest('.accounts__head-arrow--link');

        accountsItem.forEach((item, i) => {
            e.preventDefault()

            if (btn === item) {
                if (!item.classList.contains('active-acc')) {
                    accountsHeader[i].classList.toggle('active')
                    accountsItem[i].classList.toggle('active-acc')
                    accountsHead[i].classList.toggle('active')
                    accountsList[i].classList.add('accounts__check-list--show')

                    const h = getComputedStyle(accountsList[i]).height

                    accountsList[i].style.height = '0'
                    getComputedStyle(accountsList[i]).height
                    accountsList[i].style.height = h

                    setTimeout(() => {
                        accountsList[i].style.height = ''
                        accountsHead[i].style.overflow = 'visible'
                    }, 360);
                } else {
                    accountsList[i].style.height = getComputedStyle(accountsList[i]).height
                    getComputedStyle(accountsList[i]).height
                    accountsList[i].style.height = ''
                    accountsHead[i].style.overflow = 'hidden'
                    accountsHeader[i].classList.toggle('active')
                    accountsItem[i].classList.toggle('active-acc')
                    accountsHead[i].classList.toggle('active')
                    accountsList[i].classList.remove('accounts__check-list--show')
                }
            }
        })
    } else if (e.target.matches('.accounts__head-pointer')) {
        const btn = e.target.closest('.accounts__head-pointer');

        accountsHead.forEach((item, i) => {
            e.preventDefault()

            if (btn === item) {
                if (!item.classList.contains('active')) {
                    accountsHeader[i].classList.toggle('active')
                    accountsHead[i].classList.toggle('active')
                    accountsItem[i].classList.toggle('active-acc')
                    accountsList[i].classList.add('accounts__check-list--show')

                    const h = getComputedStyle(accountsList[i]).height

                    accountsList[i].style.height = '0'
                    getComputedStyle(accountsList[i]).height
                    accountsList[i].style.height = h

                    setTimeout(() => {
                        accountsList[i].style.height = ''
                        accountsHead[i].style.overflow = 'visible'
                    }, 360);
                } else {
                    accountsList[i].style.height = getComputedStyle(accountsList[i]).height
                    getComputedStyle(accountsList[i]).height
                    accountsList[i].style.height = ''
                    accountsHead[i].style.overflow = 'hidden'
                    accountsHeader[i].classList.toggle('active')
                    accountsHead[i].classList.toggle('active')
                    accountsItem[i].classList.toggle('active-acc')
                    accountsList[i].classList.remove('accounts__check-list--show')
                }
            }
        })
    } else if (e.target.matches('.accounts__head')) {
        const btn = e.target.closest('.accounts__head');

        accountsHeader.forEach((item, i) => {
            e.preventDefault()

            if (btn === item) {
                if (!item.classList.contains('active')) {
                    accountsHeader[i].classList.toggle('active')
                    accountsHead[i].classList.toggle('active')
                    accountsItem[i].classList.toggle('active-acc')
                    accountsList[i].classList.add('accounts__check-list--show')

                    const h = getComputedStyle(accountsList[i]).height

                    accountsList[i].style.height = '0'
                    getComputedStyle(accountsList[i]).height
                    accountsList[i].style.height = h

                    setTimeout(() => {
                        accountsList[i].style.height = ''
                        accountsHead[i].style.overflow = 'visible'
                    }, 360);
                } else {
                    accountsList[i].style.height = getComputedStyle(accountsList[i]).height
                    getComputedStyle(accountsList[i]).height
                    accountsList[i].style.height = ''
                    accountsHead[i].style.overflow = 'hidden'
                    accountsHeader[i].classList.toggle('active')
                    accountsHead[i].classList.toggle('active')
                    accountsItem[i].classList.toggle('active-acc')
                    accountsList[i].classList.remove('accounts__check-list--show')
                }
            }
        })
    }
})