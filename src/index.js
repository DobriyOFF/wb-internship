import checkboxTotalBtn from "./modules/checkboxTotalBtn";
import validateForm from "./modules/validateInput";
import quantityGoods from "./modules/quantityGoods"
import basketCost from "./modules/basketCost"
import basketBtn from "./modules/basketBtn";
import itemDelete from "./modules/itemDelete"


checkboxTotalBtn();
validateForm()
quantityGoods()
basketCost()
basketBtn()
itemDelete()

//Кнопка "Еще подкасты"
// const eventsBtn = document.querySelector('.podcasts__btn');
// const slideHidden = document.querySelectorAll('.podcasts__item-hidden');
//
// function toggleClass(inactive, active) {
//     document.querySelector(inactive).classList.toggle(active);
// }
//
// eventsBtn.addEventListener('click', () => {
//     slideHidden.forEach(item => {
//         if(item.classList.contains('podcasts__item-hidden')) {
//             item.classList.remove('podcasts__item-hidden')
//         }
//     })
//     toggleClass('.podcasts__btn', 'podcasts__btn-hidden');
// });