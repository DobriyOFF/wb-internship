const basketBtn = () => {
    let basketCheckbox = document.querySelectorAll('.basket__label-checkbox');
    let basketCheckboxBtn = document.querySelector('.basket__header-checkbox');
    const basketBtn = document.querySelectorAll('.basket__btn-wrapper'); // Кнопка стрелка разворота
    const basketBtnDecorate = document.querySelectorAll('.basket__btn'); // Обложка кнопки
    const basketListFirst = document.getElementById('basketListFirst');
    const basketBtnFirst = document.getElementById('basketBtnFirst');
    const basketListSecond = document.getElementById('basketListSecond');
    const basketBtnSecond = document.getElementById('basketBtnSecond');
    let countCheckBox = basketCheckbox.length;
    let countCheckedTrue = 0;

    basketCheckbox.forEach(item => {
        item.addEventListener('click', () => {
            for (item of basketCheckbox) {
                if (item.checked === true) {
                    countCheckedTrue += 1;
                }
            }
            basketCheckboxBtn.checked = item.checked === true && countCheckedTrue === countCheckBox;
            countCheckedTrue = 0;
        })
    })

    basketCheckboxBtn.addEventListener('click', () => {
        basketCheckbox.forEach(item => {
            item.checked = basketCheckboxBtn.checked === true;
        })
    })

    /** Кнопка разворота SVG **/
    basketBtnDecorate.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        })
    })

    basketBtnFirst.addEventListener('click', () => {
        basketListFirst.classList.toggle('disable');
    })

    basketBtnSecond.addEventListener('click', () => {
        basketListSecond.classList.toggle('disable');
    })
}

export default basketBtn