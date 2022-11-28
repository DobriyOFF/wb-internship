const tooltip = () => {
    const infoFree = document.querySelectorAll('.info__free');
    const tooltipInfoFree = document.querySelectorAll('.tooltip__delivery-info');
    const sellerInfoBtn = document.querySelectorAll('.basket__item');
    const productPrice = document.querySelectorAll('.product__price');

    infoFree.forEach(item => {
        console.log(item)
        tooltipInfoFree.forEach(el => {
            item.addEventListener('mouseover', () => {
                el.style.display = 'inline-block'
            })
            item.addEventListener('mouseout', () => {
                el.style.display = 'none'
            })
        })
    })

    sellerInfoBtn.forEach(item => {
       if (item.childNodes[3] !== undefined) {
           let btn = item.childNodes[3].childNodes[1].childNodes[5].childNodes[9].childNodes[1];
           btn.addEventListener('mouseover', () => {
               item.childNodes[3].childNodes[1].childNodes[5].childNodes[11].style.display = 'inline-block'
           })
           btn.addEventListener('mouseout', () => {
               item.childNodes[3].childNodes[1].childNodes[5].childNodes[11].style.display = 'none'
           })
       }
    })

    productPrice.forEach(item => {
        if (item.childNodes[3] !== undefined) {
            let btnItem = item.childNodes[3];
            btnItem.addEventListener('mouseover', () => {
                item.childNodes[5].style.display = 'flex'
            })
            btnItem.addEventListener('mouseout', () => {
                item.childNodes[5].style.display = 'none'
            })
        }
    })
}

export default tooltip