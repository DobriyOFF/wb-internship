// import menu from './modules/menu'
import modal from './modules/modal'
import serviceScroll from './modules/serviceScroll'
// import validateForms from './modules/i'
// import tabs from './modules/tabs'
// import slider from './modules/slider'
import Swiper from './modules/swiper'
import accordeon from './modules/accordeon'

// menu()
modal()
serviceScroll()
// validateForms()
// tabs()
// slider()
accordeon()



//Кнопка "Еще подкасты"
const eventsBtn = document.querySelector('.podcasts__btn');
const slideHidden = document.querySelectorAll('.podcasts__item-hidden');

function toggleClass(inactive, active) {
    document.querySelector(inactive).classList.toggle(active);
}

eventsBtn.addEventListener('click', () => {
    slideHidden.forEach(item => {
        if(item.classList.contains('podcasts__item-hidden')) {
            item.classList.remove('podcasts__item-hidden')
        }
    })
    toggleClass('.podcasts__btn', 'podcasts__btn-hidden');
});

//Кастомный select из библиотеки itc-custom-select.js
const select1 = new ItcCustomSelect('#select-1');
