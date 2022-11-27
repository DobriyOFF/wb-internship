const serviceScroll = () => {
    //const mobileMenu = document.querySelector('.mobile-menu')
    const recipientName = document.querySelector('.recipient__form-name');
    const recipientSurname = document.querySelector('.recipient__form-surname');
    const recipientEmail = document.querySelector('.recipient__form-email');
    const recipientPhone = document.querySelector('.recipient__form-phone');
    const recipientInn = document.querySelector('.recipient__form-inn');
    const agreeChecbox = document.getElementById('agreeMount');

    const toggleMenu = (e) => {
        if (e.target.closest('.total__order-btn') || e.target.closest('.footer__menu')) {
            if (e.target.matches('button')) {
                e.preventDefault();
                const id = e.target.getAttribute('href');
                if (recipientName.value !== '' && recipientSurname.value !== '' && recipientEmail.value !== '' && recipientPhone.value !== '' && recipientInn.value !== '' && agreeChecbox.checked) {

                } else {
                    document.querySelector(id).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }

        }
        // if (e.target.closest('.mob-menu-btn')) {
        //     e.preventDefault()
        //     mobileMenu.style.right = 0 + 'px'
        // }
        // if (e.target.closest('.mobile-menu-close')) {
        //     e.preventDefault()
        //     mobileMenu.style.right = -500 + 'px'
        // }
    }

    document.addEventListener("click", (e) => toggleMenu(e));
}

export default serviceScroll