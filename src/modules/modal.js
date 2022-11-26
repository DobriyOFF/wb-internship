const modal = () => {
    const modalOverlay = document.querySelector('.modal__overlay')
    const modalCallback = document.querySelector('.modal__callback')
    const modalOverlayDelivery = document.querySelector('.modal__overlay-delivery')
    const modalCallbackDelivery = document.querySelector('.modal__callback-delivery')

    const toggleModalPayment = (e) => {
        if (e.target.closest('.paymet__method-btn') || e.target.closest('.total__payment-btn-svg')) {
            e.preventDefault();
            modalCallback.style.display = 'block'
            modalOverlay.style.display = 'block'
        }
        if (e.target.closest('.modal__close-svg') || e.target.closest('.modal__overlay') || e.target.closest('.modal__footer-btn')) {
            modalCallback.style.display = 'none'
            modalOverlay.style.display = 'none'
        }
    }
    const toggleModalDelivery = (e) => {
        if (e.target.closest('.delivery__method-btn') || e.target.closest('.total__delivery-btn-svg')) {
            e.preventDefault();
            modalCallbackDelivery.style.display = 'block'
            modalOverlayDelivery.style.display = 'block'
        }
        if (e.target.closest('.modal__close-svg') || e.target.closest('.modal__overlay-delivery') || e.target.closest('.modal__footer-btn')) {
            modalCallbackDelivery.style.display = 'none'
            modalOverlayDelivery.style.display = 'none'
        }
    }
    document.addEventListener("click", (e) => toggleModalPayment(e));
    document.addEventListener("click", (e) => toggleModalDelivery(e));
}
export default modal