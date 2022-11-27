const itemDelete = () => {
    let basketItem = document.querySelectorAll('.basket__item');
    let missingItem = document.querySelectorAll('.missing__item');
    let missingBasketCol = document.querySelector('.missing__basket-col');
    let basketCheckbox = document.querySelectorAll('.basket__label');
    const uiBasketAmount = document.querySelector('.ui__basket-amount')
    const totalItemDesc = document.querySelector('.total__item-desc');
    let countCheckBox = basketCheckbox.length;

    totalItemDesc.textContent = countCheckBox;


    basketItem.forEach(item => {
        if (item.childNodes[3] !== undefined) {
            let btn = item.childNodes[3].childNodes[1].childNodes[7].childNodes[3].childNodes[3];
            btn.addEventListener('click', () => {
                countCheckBox -= 1;
                totalItemDesc.textContent -= 1;
                uiBasketAmount.textContent = countCheckBox;
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