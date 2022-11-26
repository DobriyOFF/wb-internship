const quantityGoods = () => {
    const productForm = document.querySelectorAll('.product__number')
    let max = 300;
    let min = 0;

    productForm.forEach(item => {
        let input = item.children[0];
        let minus = item.children[1];
        let plus = item.children[2];
        let maxLeftText = item.querySelector('.product__pieces-left');
        let maxLeft = item.querySelector('.product__pieces-left') //Дабы не знаю, сколько осталось штук

        if (maxLeft != null) {
            maxLeft = +input.value + +maxLeft.textContent;
        } else {
            maxLeft = max;
        }

        plus.addEventListener('click', () => {
            if (input.value < maxLeft) {
                input.value = +input.value + 1;
                if (maxLeftText != null) {
                    maxLeftText.textContent -= 1;
                }
            }
        })

        minus.addEventListener('click', () => {
            if (input.value > min) {
                input.value = +input.value - 1;
                if (maxLeftText != null) {
                    maxLeftText.textContent = +maxLeftText.textContent + 1;
                }
            }
        })
    })
}

export default quantityGoods