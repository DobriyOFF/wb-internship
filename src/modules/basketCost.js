const basketCost = () => {
    const totalPrice = document.getElementById('totalPrice');
    const productPriceTitle = document.querySelectorAll('.product__price-title')
    const basketLabel = document.querySelectorAll('.product__wrapper')
    const totalItemPrice = document.querySelector('.total__item-price');

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

    for (let item of basketLabel) {
        domObserver(document.getElementById(item.firstElementChild.id), function (el){
            sumTotal()
        });
    }

    sumTotal()
}

export default basketCost