//mobile menu

const mobileMenu = () => {
    const burger = document.querySelector('.header__burger-link'),
        navMenu = document.querySelector('.header__nav'),
        closeMenu = document.querySelector('.nav__close');

    burger.addEventListener('click', () => {
        navMenu.classList.toggle('show')
    })

    closeMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show')
    })
}

mobileMenu()

//accordeons

const accordeon = (wrapper, head, headPointer, headLink, headLinkActive, answer, answerShow) => {
    const accordeonWrapper = document.querySelector(wrapper);

    if (accordeonWrapper === null) return

    const accordeonHead = accordeonWrapper.querySelectorAll(head),
        accordeonPointer = accordeonWrapper.querySelectorAll(headPointer),
        accordeonLink = accordeonWrapper.querySelectorAll(headLink),
        accordeonAnswer = accordeonWrapper.querySelectorAll(answer);

    const activeAccordeon = (e, block, elems) => {
        const btn = e.target.closest(block);

        elems.forEach((item, i) => {
            e.preventDefault()

            if (btn === item) {
                if (!item.classList.contains('active') && !accordeonLink[i].classList.contains(headLinkActive)) {
                    accordeonLink[i].classList.toggle(headLinkActive)
                    accordeonAnswer[i].classList.toggle(answerShow)
                    elems[i].classList.toggle('active')
                    accordeonHead[i].classList.toggle('active')
                    accordeonPointer[i].classList.toggle('active')

                    const h = getComputedStyle(accordeonAnswer[i]).height

                    accordeonAnswer[i].style.height = '0'
                    getComputedStyle(accordeonAnswer[i]).height
                    accordeonAnswer[i].style.height = h

                    setTimeout(() => {
                        accordeonAnswer[i].style.height = ''
                        accordeonPointer[i].style.overflow = 'visible'
                    }, 360);
                } else {
                    accordeonAnswer[i].style.height = getComputedStyle(accordeonAnswer[i]).height
                    getComputedStyle(accordeonAnswer[i]).height
                    accordeonAnswer[i].style.height = ''
                    accordeonPointer[i].style.overflow = 'hidden'

                    accordeonAnswer[i].classList.toggle(answerShow)
                    accordeonLink[i].classList.toggle(headLinkActive)
                    elems[i].classList.toggle('active')
                    accordeonHead[i].classList.toggle('active')
                    accordeonPointer[i].classList.toggle('active')
                }
            }
        })
    }

    accordeonWrapper.addEventListener('click', (e) => {
        switch (true) {
            case e.target.matches(headLink):
                activeAccordeon(e, headLink, accordeonLink)
                break
            case e.target.matches(headPointer):
                activeAccordeon(e, headPointer, accordeonPointer)
                break

            case e.target.matches(head):
                activeAccordeon(e, head, accordeonHead)
                break
        }
    })
}

accordeon('.accounts__wrap', '.accounts__head', '.accounts__head-pointer', '.accounts__head-arrow--link', 'active-accounts-link', '.accounts__check-list', 'accounts__check-list--show')
accordeon('.faq__wrap', '.faq__head', '.faq__head-pointer', '.faq__head-arrow--link', 'active-faq-link', '.faq__answer', 'faq__answer--show')

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