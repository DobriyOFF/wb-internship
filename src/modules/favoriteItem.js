const favoriteItem = () => {
    const productFeaturesLike = document.querySelectorAll('.product__features-like');

    productFeaturesLike.forEach(item => {
        item.addEventListener('click', () => {
            if (item.childNodes[1].childNodes[1].style.fill == 'rgb(103, 37, 168)') {
                item.childNodes[1].childNodes[1].style.fill = 'black'
            } else {
                item.childNodes[1].childNodes[1].style.fill = '#6725A8'
            }
        })
    })
}

export default favoriteItem