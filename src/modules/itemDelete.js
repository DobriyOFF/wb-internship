const itemDelete = () => {
    let basketItem = document.querySelectorAll('.basket__item');
    let missingItem = document.querySelectorAll('.missing__item');
    let missingBasketCol = document.querySelector('.missing__basket-col');

    basketItem.forEach(item => {
        if (item.childNodes[3] !== undefined) {
            let btn = item.childNodes[3].childNodes[1].childNodes[7].childNodes[3].childNodes[3];
            btn.addEventListener('click', () => {
                item.remove();
            })
        }
    })

    missingItem.forEach(item => {
        let btn = item.childNodes[1].childNodes[5].childNodes[1].childNodes[3];
        btn.addEventListener('click', () => {
            missingBasketCol.textContent = +missingBasketCol.textContent - 1;
            console.log(missingBasketCol.textContent)
            item.remove();
        })

    })
}

export default itemDelete