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
            accountsItem[i].classList.remove('active')
            accountsList[i].classList.remove('accounts__check-list--show')
        }
    })
})

//table

// const tableBtn = document.querySelectorAll('.deposits__table-link > a'),
//     tableRow = document.querySelectorAll('.deposits__table-body > tr');

// tableBtn.forEach((btn, i) => {
//     btn.addEventListener('mouseenter', (e) => {
//         const tableTd = tableRow[i].querySelectorAll('td');

//         tableTd.forEach((item) => {
//             item.style.backgroundColor = '#FE7E47'
//             item.style.color = '#FFFFFF'
//         })
//         // tableRow[i].style.backgroundColor = '#FE7E47'
//         // tableRow[i].style.color = '#FFFFFF'
//     })

//     btn.addEventListener('mouseleave', (e) => {
//         const tableTd = tableRow[i].querySelectorAll('td');

//         tableTd.forEach((item) => {
//             item.style.backgroundColor = ''
//             item.style.color = ''
//         })
//         // tableRow[i].style.backgroundColor = ''
//         // tableRow[i].style.color = ''
//     })
// })

const tableBtn = document.querySelectorAll('.table-link > a'),
    tableRow = document.querySelectorAll('.table-item');

tableBtn.forEach((btn, i) => {
    btn.addEventListener('mouseenter', (e) => {
        tableRow[i].style.backgroundColor = '#FE7E47'
        tableRow[i].style.color = '#FFFFFF'
    })

    btn.addEventListener('mouseleave', (e) => {
        tableRow[i].style.backgroundColor = ''
        tableRow[i].style.color = ''
    })
})