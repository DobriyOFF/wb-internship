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
        let totalCostDiscount;
        let startTotalCostDiscount;
        let totalCostDiscountItem;
        let startTotalCostDiscountItem;
        let totalCostDiscountItemPerson;
        let startTotalCostDiscountItemPerson;

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
        if (el.children[4] != null && el.children[4].children[1].children[0].textContent != null) {
            totalCostDiscount = el.children[4].children[1].children[0];
        }
        if (el.children[4] != null && el.children[4].children[0].children[0].textContent != null) {
            totalCostDiscountItem = el.children[4].children[2].children[0].children[1].children[0];
        }
        if (el.children[4] != null && el.children[4].children[0].children[0].textContent != null) {
            totalCostDiscountItemPerson = el.children[4].children[2].children[1].children[1].children[0];
        }
        if (el.children[3] != null) {
            maxLeftText = el.children[3].children[0].querySelector('.product__pieces-left');
        }
        if (el.children[3] != null) {
            maxLeft = el.children[3].children[0].querySelector('.product__pieces-left') //Дабы не знаю, сколько осталось штук
        }

        if (totalCost != null) {
            startTotalCost = Math.round(totalCost.textContent / +input.value);
            startTotalCostDiscount = Math.round((totalCost.textContent / +input.value) * 0.65);
            startTotalCostDiscountItem = Math.round((totalCost.textContent / +input.value) * 0.55);
            startTotalCostDiscountItemPerson = Math.round((totalCost.textContent / +input.value) * 0.10);

            totalCost.textContent = totalCost.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")

            totalCostDiscount.textContent = +input.value * startTotalCostDiscount;
            totalCostDiscount.textContent = totalCostDiscount.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")

            totalCostDiscountItem.textContent = +input.value * startTotalCostDiscountItem;
            totalCostDiscountItem.textContent = totalCostDiscountItem.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")

            totalCostDiscountItemPerson.textContent = +input.value * startTotalCostDiscountItemPerson;
            totalCostDiscountItemPerson.textContent = totalCostDiscountItemPerson.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")


            if (maxLeft != null) {
                maxLeft = +input.value + +maxLeft.textContent;
            } else {
                maxLeft = max;
            }

            plus.addEventListener('click', () => {
                if (input.value < maxLeft) {
                    totalCost.textContent = totalCost.textContent.replace(/ /g,'')
                    totalCostDiscount.textContent = totalCost.textContent.replace(/ /g,'')
                    if (input.value == 0) {
                        totalCost.textContent = startTotalCost;
                        totalCostDiscount.textContent = startTotalCostDiscount;
                    } else {
                        totalCost.textContent = +totalCost.textContent + +startTotalCost;
                        totalCostDiscount.textContent =  startTotalCostDiscount * (+input.value + 1);
                        totalCostDiscount.textContent = totalCostDiscount.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")
                        totalCostDiscountItem.textContent =  startTotalCostDiscountItem * (+input.value + 1);
                        totalCostDiscountItem.textContent = totalCostDiscountItem.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")
                        totalCostDiscountItemPerson.textContent =  startTotalCostDiscountItemPerson * (+input.value + 1);
                        totalCostDiscountItemPerson.textContent = totalCostDiscountItemPerson.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")

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
                    totalCostDiscount.textContent = totalCost.textContent.replace(/ /g,'')
                    input.value = +input.value - 1;
                    if (input.value < 1) {
                        totalCost.textContent = '0';
                        totalCostDiscount.textContent = '0';
                    }  else {
                        totalCost.textContent = +totalCost.textContent - startTotalCost;
                        totalCost.textContent = totalCost.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")
                        totalCostDiscount.textContent = +startTotalCostDiscount * +input.value;
                        totalCostDiscount.textContent = totalCostDiscount.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")
                        totalCostDiscountItem.textContent = +startTotalCostDiscountItem * +input.value;
                        totalCostDiscountItem.textContent = totalCostDiscountItem.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")
                        totalCostDiscountItemPerson.textContent = +startTotalCostDiscountItemPerson * +input.value;
                        totalCostDiscountItemPerson.textContent = totalCostDiscountItemPerson.textContent.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")
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