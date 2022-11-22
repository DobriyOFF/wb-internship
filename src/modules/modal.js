const modal = () => {
    const modalOverlay = document.querySelector('.modal__overlay')
    const modalCallback = document.querySelector('.modal__callback')

    const toggleModal = (e) => {
        if (e.target.closest('.header__primary-log-in') || e.target.closest('.broadcast__form-btn')
            || e.target.closest('.hero__info-btn') || e.target.closest('.guests__card-btn')) {
            e.preventDefault();
            modalCallback.style.display = 'block'
            modalOverlay.style.display = 'block'
        }
        if (e.target.closest('.modal__close') || e.target.closest('.modal__overlay')) {
            modalCallback.style.display = 'none'
            modalOverlay.style.display = 'none'
        }
    }
    document.addEventListener("click", (e) => toggleModal(e));
}

export default modal