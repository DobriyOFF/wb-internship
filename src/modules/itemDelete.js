const itemDelete = () => {
    let basketItem = document.querySelectorAll('.basket__item');
    let missingItem = document.querySelectorAll('.missing__item');
    let basketCheckbox = document.querySelectorAll('.basket__label');
    const uiBasketAmount = document.querySelector('.ui__basket-amount')
    const totalItemDesc = document.querySelector('.total__item-desc');
    let countCheckBox = basketCheckbox.length;

    totalItemDesc.textContent = countCheckBox;

    const countChecked = () => {
        let count = 0;
        for (let el of basketItem) {
            if (el.children[0].checked != null)
                if (el.children[0].checked)
                    count += 1
        }
        return String(count)
    }

    basketItem.forEach(item => {
        if (item.childNodes[3] !== undefined) {
            let btn = item.childNodes[3].childNodes[1].childNodes[7].childNodes[3].childNodes[3];
            btn.addEventListener('click', () => {
                countCheckBox -= 1;
                totalItemDesc.textContent -= 1;
                item.children[0].checked = false
                uiBasketAmount.textContent = countChecked();
                item.childNodes[3].childNodes[1].childNodes[9].childNodes[1].childNodes[1].textContent = '0'
                item.childNodes[3].childNodes[1].childNodes[9].childNodes[3].childNodes[1].textContent = '0'
                item.remove();
            })
        }
    })

    missingItem.forEach(item => {
        let btn = item.childNodes[1].childNodes[5].childNodes[1].childNodes[3];
        btn.addEventListener('click', () => {
            item.remove();
        })

    })
}

export default itemDelete