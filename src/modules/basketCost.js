const basketCost = () => {
    const totalPrice = document.getElementById('totalPrice');
    const productPriceTitle = document.querySelectorAll('.product__price-title')
    const basketLabel = document.querySelectorAll('.product__wrapper')

    function domObserver(el, callback){
        var done = function (){ callback(el); };
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

        if( MutationObserver ){
            var observer = new MutationObserver(done);
            observer.observe(el, { childList: true });
        }
        else if( el.addEventListener ){
            el.addEventListener('DOMNodeInserted', done, false);
        }
        else {
            var html = el.innerHTML;
            setInterval(function (){
                if( html != el.innerHTML ){
                    html = el.innerHTML;
                    done();
                }
            }, 300);
        }
    };
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
    }

    for (let item of basketLabel) {
        domObserver(document.getElementById(item.firstElementChild.id), function (el){
            sumTotal()
        });
    }

}

export default basketCost