const basketBtn = () => {
    let basketCheckbox = document.querySelectorAll('.basket__label-checkbox');
    let basketCheckboxBtn = document.querySelector('.basket__header-checkbox');
    let basketItem = document.querySelectorAll('.basket__item');
    const basketBtnDecorate = document.querySelectorAll('.basket__btn'); // Обложка кнопки
    const basketListFirst = document.getElementById('basketListFirst');
    const basketBtnFirst = document.getElementById('basketBtnFirst');
    const basketListSecond = document.getElementById('basketListSecond');
    const basketBtnSecond = document.getElementById('basketBtnSecond');
    const uiBasketAmount = document.querySelector('.ui__basket-amount');
    let countCheckBox = basketCheckbox.length;
    let countCheckedTrue = 0;

    const countChecked = () => {
        let count = 0;
        for (let el of basketItem) {
            if (el.children[0].checked != null)
                if (el.children[0].checked)
                    count += 1
        }
        return String(count)
    }

    uiBasketAmount.textContent = countChecked();

    basketCheckbox.forEach(item => {
        item.addEventListener('click', () => {
            for (item of basketCheckbox) {
                if (item.checked === true) {
                    countCheckedTrue += 1;
                }
            }
            uiBasketAmount.textContent = countChecked();
            basketCheckboxBtn.checked = item.checked === true && countCheckedTrue === countCheckBox;
            countCheckedTrue = 0;
        })
    })

    basketCheckboxBtn.addEventListener('click', () => {
        basketCheckbox.forEach(item => {
            if (basketCheckboxBtn.checked === true) {
                item.checked = basketCheckboxBtn.checked
                uiBasketAmount.textContent = countChecked();
            } else {
                item.checked = false
                uiBasketAmount.textContent = '0';
            }
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