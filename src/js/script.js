//mobile menu

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
    accountsArrow = document.querySelectorAll('.accounts__head-arrow--link > .icon'),
    accountsList = document.querySelectorAll('.accounts__check-list');

const activeAccordeon = (e, block, elems) => {
    const btn = e.target.closest(block);

    elems.forEach((item, i) => {
        e.preventDefault()

        if (btn === item) {
            if (!item.classList.contains('active') && !accountsItem[i].classList.contains('active-acc')) {
                elems[i].classList.toggle('active')

                accountsItem[i].classList.toggle('active-acc')
                accountsHeader[i].classList.toggle('active')
                accountsHead[i].classList.toggle('active')
                accountsArrow[i].classList.toggle('active')

                accountsList[i].classList.toggle('accounts__check-list--show')

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

                elems[i].classList.toggle('active')

                accountsItem[i].classList.toggle('active-acc')
                accountsHeader[i].classList.toggle('active')
                accountsArrow[i].classList.toggle('active')
                accountsHead[i].classList.toggle('active')
                accountsList[i].classList.toggle('accounts__check-list--show')
            }
        }
    })
}

if (accounts !== null) {
    accounts.addEventListener('click', (e) => {
        switch (true) {
            case e.target.matches('.accounts__head-arrow--link'):
                activeAccordeon(e, '.accounts__head-arrow--link', accountsItem)
                break
            case e.target.matches('.accounts__head-pointer'):
                activeAccordeon(e, '.accounts__head-pointer', accountsHead)
                break

            case e.target.matches('.accounts__head'):
                activeAccordeon(e, '.accounts__head', accountsHeader)
                break
        }
    })
}

//default style form inputs

const defaultInputs = (formWrapperId) => {
    const form = document.getElementById(formWrapperId)

    if (form === null) return

    const allInputs = form.querySelectorAll('.form-control > .form-input'),
        policyCheck = form.querySelector('[name="check"]'),
        checkBox = form.querySelector('[name="check"] ~ label > span');

    allInputs.forEach((input) => {
        input.addEventListener('input', () => {
            input.classList.remove('input-error')
        })
    })

    policyCheck.addEventListener('click', () => checkBox.classList.remove('checkbox-error'))
}

defaultInputs('form')

//disabled form controls

const disabledControls = (formWrapperId) => {
    const form = document.getElementById(formWrapperId)

    if (form === null) return

    const allInputs = form.querySelectorAll('.form-control > .form-input'),
        policyCheck = form.querySelector('[name="check"]'),
        formBtn = form.querySelector('.form-btn > .button');

    allInputs.forEach(input => input.disabled = true)
    policyCheck.disabled = true
    formBtn.disabled = true
}

//active form controls

const activeControls = (formWrapperId) => {
    const form = document.getElementById(formWrapperId)

    if (form === null) return

    const allInputs = form.querySelectorAll('.form-control > .form-input'),
        policyCheck = form.querySelector('[name="check"]'),
        formBtn = form.querySelector('.form-btn > .button');

    allInputs.forEach(input => input.disabled = false)
    policyCheck.disabled = false
    formBtn.disabled = false
}

//validation form inputs

const validateEmail = (email) => {
    var emailStr = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailStr.test(email);
}

const validation = (formWrapperId) => {
    const form = document.getElementById(formWrapperId)

    if (form === null) return

    const firstName = form.querySelector('[name="first-name"]'),
        lastName = form.querySelector('[name="last-name"]'),
        userEmail = form.querySelector('[name="mail"]'),
        userPhone = form.querySelector('[name="tel"]'),
        policyCheck = form.querySelector('[name="check"]'),
        checkBox = form.querySelector('[name="check"] ~ label > span');

    let success = true

    if (firstName.value.length < 2) {
        firstName.classList.add('input-error')
        success = false
    }

    if (lastName.value.length < 2) {
        lastName.classList.add('input-error')
        success = false
    }

    if (!validateEmail(userEmail.value)) {
        userEmail.classList.add('input-error')
        success = false
    }

    if (userPhone.value.length < 5) {
        userPhone.classList.add('input-error')
        success = false
    }

    if (!policyCheck.checked) {
        checkBox.classList.add('checkbox-error')
        success = false
    }

    return success
}

// send form

const sendForm = (formWrapperId) => {
    const form = document.getElementById(formWrapperId)

    if (form === null) return

    const formBtn = form.querySelector('.form-btn > .button'),
        formBtnText = form.querySelector('.form-btn > .button > span')

    form.reset()
    formBtn.disabled = false
    formBtnText.textContent = 'submit'

    const sendData = (data) => {
        return fetch('../php/send.php', {
            method: 'POST',
            body: data,
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formData = new FormData(form)

        disabledControls(form)

        if (validation(formWrapperId)) {
            sendData(formData)
                .then(data => {
                    disabledControls(form)
                    formBtnText.textContent = 'send'
                })
                .catch(error => {
                    setTimeout(() => {
                        activeControls(form)
                        formBtnText.textContent = 'submit'
                    }, 3000)
                })
        } else {
            formBtnText.textContent = 'error'
            setTimeout(() => {
                activeControls(form)
                formBtnText.textContent = 'submit'
            }, 3000)
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        submitForm()
    })
}

sendForm('form')