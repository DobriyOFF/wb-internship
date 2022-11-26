const checkboxTotalBtn = () => {
    const paymentPermanent = document.getElementById('paymentPermanent');
    const paymentLabel = document.querySelector('.payment__permanent-label');
    const totalOrderBtn = document.querySelector('.total__order-btn');
    const totalPrice = document.querySelector('.total-head-price');
    const totalCurrency = document.querySelector('.basket__total-currency');

    paymentLabel.addEventListener('click', () => {
        paymentPermanent.checked = paymentPermanent.checked !== false;

        if (paymentPermanent.checked === false) {
            totalOrderBtn.textContent = 'Оплатить ' + totalPrice.textContent + ' ' + totalCurrency.textContent
        } else {
            totalOrderBtn.textContent = 'Заказать'
        }
    })
}

export default checkboxTotalBtn