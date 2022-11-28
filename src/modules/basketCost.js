const basketCost = () => {
    const totalPrice = document.getElementById('totalPrice');
    const basketLabel = document.querySelectorAll('.product__wrapper')
    const totalItemPrice = document.querySelector('.total__item-price');
    const productPriceDesc = document.querySelectorAll('.product__price-desc-main')
    const totalItemDiscount = document.getElementById('totalDiscount');


    function domObserver(el, callback){
        let done = function (){ callback(el); };
        let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

        if( MutationObserver ){
            let observer = new MutationObserver(done);
            observer.observe(el, { childList: true });
        }
        else if( el.addEventListener ){
            el.addEventListener('DOMNodeInserted', done, false);
        }
        else {
            let html = el.innerHTML;
            setInterval(function (){
                if (html != el.innerHTML ){
                    html = el.innerHTML;
                    done();
                }
            }, 300);
        }
    }
    let count = 1;

    basketLabel.forEach(item => {
        item.firstElementChild.id = 'count' + count;
        count++;
    })

    let sumTotal = () => {
        let fullPrice = 0;
        for (let item of basketLabel) {
            fullPrice += +item.firstElementChild.textContent.replace(/ /g,'');
        }
        fullPrice = String(fullPrice);
        totalPrice.textContent = fullPrice.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
        totalItemPrice.textContent = totalPrice.textContent
    }

    let sumTotalDiscount = () => {
        let fullPriceDiscount = 0;
        for (let item of productPriceDesc) {
            fullPriceDiscount += +item.textContent.replace(/ /g,'').match(/\d+/);
        }
        fullPriceDiscount = String(fullPriceDiscount);
        totalItemDiscount.textContent = '-' + fullPriceDiscount.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
    }

    for (let item of basketLabel) {
        domObserver(document.getElementById(item.firstElementChild.id), function (el){
            sumTotal()
            sumTotalDiscount()
        });
    }

    sumTotal()
    sumTotalDiscount()
}

export default basketCost