const accordeon = () => {
    const accordeonItem = document.querySelectorAll('.guests__item')
    const elementContent = document.querySelectorAll('.guests__item-bottom')
    const guestsWrapper = document.querySelector('.guests__item-wrapper')

    const removeActive = () => {
        for (let item of accordeonItem) {
            item.classList.remove('active')
            if (item.querySelector('.guests__item-wrapper-active')) {
                item.querySelector('.guests__item-wrapper-active').classList.add('guests__item-wrapper')
                item.querySelector('.guests__item-wrapper-active').classList.remove('guests__item-wrapper-active')
            }
        }

    }

    const addRemoveDesc = () => {
        for (let i = 0; i < accordeonItem.length; i++) {
            if (accordeonItem[i].classList.contains('active')) {
                elementContent[i].style.display = 'flex'
            } else {
                elementContent[i].style.display = 'none'
            }
        }
    }

    accordeonItem.forEach((item) => {
        addRemoveDesc()
        console.log(item)
        item.addEventListener('click', () => {
            if (item.classList.contains('active')) {
                item.classList.remove('active')
                addRemoveDesc()
            } else {
                removeActive()
                item.classList.add('active')
                addRemoveDesc()
            }
            if (item.querySelector('.guests__item-wrapper')) {
                item.querySelector('.guests__item-wrapper').classList.add('guests__item-wrapper-active')
                item.querySelector('.guests__item-wrapper').classList.remove('guests__item-wrapper')
            }
        })

    })
}

export default accordeon