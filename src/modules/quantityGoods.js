const quantityGoods = () => {
    const itemProduct = document.querySelectorAll('.item__product');
    let max = 300;
    let min = 0;

    itemProduct.forEach(el => {
        let startTotalCost;
        let input;
        let minus;
        let plus;
        let totalCost;
        let maxLeftText;
        let maxLeft;

        if (el.children[3] != null) {
            input = el.children[3].children[0].children[0];
        }
        if (el.children[3] != null) {
            minus = el.children[3].children[0].children[1];
        }
        if (el.children[3] != null) {
            plus = el.children[3].children[0].children[2];
        }
        if (el.children[4] != null && el.children[4].children[0].children[0].textContent != null) {
            totalCost = el.children[4].children[0].children[0];
        }
        if (el.children[3] != null) {
            maxLeftText = el.children[3].children[0].querySelector('.product__pieces-left');
        }
        if (el.children[3] != null) {
            maxLeft = el.children[3].children[0].querySelector('.product__pieces-left') //Дабы не знаю, сколько осталось штук
        }

        if (totalCost != null) {
            startTotalCost = Math.round(totalCost.textContent / input.value);
            totalCost.textContent = totalCost.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")

            if (maxLeft != null) {
                maxLeft = +input.value + +maxLeft.textContent;
            } else {
                maxLeft = max;
            }

            plus.addEventListener('click', () => {
                if (input.value < maxLeft) {
                    totalCost.textContent = totalCost.textContent.replace(/ /g,'')
                    if (input.value == 0) {
                        totalCost.textContent = startTotalCost;
                    } else {
                        totalCost.textContent = +totalCost.textContent + +startTotalCost;
                        totalCost.textContent = totalCost.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")
                    }
                    input.value = +input.value + 1;
                    if (maxLeftText != null) {
                        maxLeftText.textContent -= 1;
                    }
                }
            })

            minus.addEventListener('click', () => {
                if (input.value > min) {
                    totalCost.textContent = totalCost.textContent.replace(/ /g,'')
                    input.value = +input.value - 1;
                    if (input.value < 1) {
                        totalCost.textContent = '0';
                    }  else {
                        totalCost.textContent = +totalCost.textContent - startTotalCost;
                        totalCost.textContent = totalCost.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")
                    }
                    if (maxLeftText != null) {
                        maxLeftText.textContent = +maxLeftText.textContent + 1;
                    }
                }
            })
        }

    })
}

export default quantityGoods