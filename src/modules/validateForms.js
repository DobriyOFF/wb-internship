const validateForms = () => {
    const form = document.querySelectorAll('.recipient__hints');
    const totalBtn = document.querySelectorAll('.total__order-btn');
    const recipientName = document.querySelector('.recipient__form-name');
    const recipientSurname = document.querySelector('.recipient__form-surname');
    const recipientEmail = document.querySelector('.recipient__form-email');
    const recipientPhone = document.querySelector('.recipient__form-phone');
    const recipientInn = document.querySelector('.recipient__form-inn');
    const nameError = document.getElementById('nameError')
    const surnameError = document.getElementById('surnameError')
    const emailError = document.getElementById('emailError')
    const telError = document.getElementById('telError')
    const innError = document.getElementById('innError')
    const paymentLabel = document.querySelector('.payment__permanent-label')

    totalBtn.forEach(item => {
        item.addEventListener('click', () => {
            if (recipientName.value === '' && recipientSurname.value === '' && recipientEmail.value === '' && recipientInn.value === '') {
                nameError.style.display = 'inline-block'
                nameError.textContent = 'Укажите имя'
                recipientName.style.color = '#F55123'
                recipientName.style.borderColor = '#F55123'
                surnameError.style.display = 'inline-block'
                surnameError.textContent = 'Укажите фамилию'
                recipientSurname.style.color = '#F55123'
                recipientSurname.style.borderColor = '#F55123'
                emailError.style.display = 'inline-block'
                emailError.textContent = 'Укажите электронную почту'
                recipientEmail.style.color = '#F55123'
                recipientEmail.style.borderColor = '#F55123'
                telError.style.display = 'inline-block'
                telError.textContent = 'Укажите номер телефона'
                recipientPhone.style.color = '#F55123'
                recipientPhone.style.borderColor = '#F55123'
                innError.style.display = 'inline-block'
                innError.textContent = 'Укажите индекс'
                recipientInn.style.color = '#F55123'
                recipientInn.style.borderColor = '#F55123'
                paymentLabel.style.color = '#F55123'
            }
        })
    })

    let prevLength = 0;
        recipientPhone.addEventListener('input', (e) => {
            let input = e.target;
            if ((input.value.length === 3 || input.value.length === 7 || input.value.length === 11 || input.value.length === 14) && input.value.length > prevLength) {
                const lastValue = input.value.charAt(input.value.length - 1);
                input.value = input.value.slice(0, input.value.length - 1);
                input.value += ' ';
                input.value += lastValue;
            }
            if (input.value.charAt(input.value.length - 1) === ' ' && input.value.length < prevLength) {
                input.value = input.value.slice(0, input.value.length - 1)
            }
            prevLength = input.value.length
    })

    form.forEach(item => {
        item.addEventListener('mouseout', () => {
            if (item.firstElementChild.matches('.recipient__form-name')) {
                if (/[^А-ЯЁа-яё\s\-]/.exec(item.firstElementChild.value)) {
                    item.lastElementChild.style.display = 'inline-block'
                    nameError.textContent = ' '
                    item.firstElementChild.style.color = '#F55123'
                    item.firstElementChild.style.borderColor = '#F55123'
                } else {
                    item.lastElementChild.style.display = 'none'
                    item.firstElementChild.style.color = '#A0A0A4'
                    item.firstElementChild.style.borderColor = 'rgba(0, 0, 0, 0.2)'
                }
            } else if (item.firstElementChild.matches('.recipient__form-surname')) {
                if (/[^А-ЯЁа-яё\s\-]/.exec(item.firstElementChild.value)) {
                    item.lastElementChild.style.display = 'inline-block'
                    surnameError.textContent = ' '
                    item.firstElementChild.style.color = '#F55123'
                    item.firstElementChild.style.borderColor = '#F55123'
                } else {
                    item.lastElementChild.style.display = 'none'
                    item.firstElementChild.style.color = '#A0A0A4'
                    item.firstElementChild.style.borderColor = 'rgba(0, 0, 0, 0.2)'
                }
            } else if (item.firstElementChild.matches('.recipient__form-email')) {
                if (!/[^\w\-@.!~*']/gi.exec(item.firstElementChild.value)) {
                    item.lastElementChild.style.display = 'none'
                    item.firstElementChild.style.color = '#A0A0A4'
                    item.firstElementChild.style.borderColor = 'rgba(0, 0, 0, 0.2)'
                } else {
                    item.lastElementChild.style.display = 'inline-block'
                    emailError.textContent = 'Проверьте адрес электронной почты'
                    item.firstElementChild.style.color = '#F55123'
                    item.firstElementChild.style.borderColor = '#F55123'
                }
            } else if (item.firstElementChild.matches('.recipient__form-phone')) {
                console.log()
                if (/[^\d\(\)\-]/gi.exec(item.firstElementChild.value)) {
                    item.lastElementChild.style.display = 'inline-block'
                    console.log(item.lastElementChild.style.textContent)
                    item.lastElementChild.style.textContent = 'Формат: +9 999 999 99 99'
                    item.firstElementChild.style.color = '#F55123'
                    item.firstElementChild.style.borderColor = '#F55123'
                } else {
                    item.lastElementChild.style.display = 'none'
                    item.firstElementChild.style.color = '#A0A0A4'
                    item.firstElementChild.style.borderColor = 'rgba(0, 0, 0, 0.2)'
                }
            } else if (item.firstElementChild.matches('.recipient__form-inn')) {
                if (/[^\d\(\)\-]/gi.exec(item.firstElementChild.value)) {
                    item.lastElementChild.style.display = 'inline-block'
                    item.lastElementChild.style.textContent = 'Формат: +9 999 999 99 99'
                    item.firstElementChild.style.color = '#F55123'
                    item.firstElementChild.style.borderColor = '#F55123'
                } else {
                    item.lastElementChild.style.display = 'none'
                    item.firstElementChild.style.color = '#A0A0A4'
                    item.firstElementChild.style.borderColor = 'rgba(0, 0, 0, 0.2)'
                }
            }
        })
    })
}

export default validateForms;