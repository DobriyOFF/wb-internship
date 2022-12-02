const basketCost = () => {
    const termsCardItem = document.querySelectorAll('.terms__card-item')


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

    termsCardItem.forEach(item => {
        console.log(item)
        // item.firstElementChild.id = 'count' + count;
        // count++;
    })


    // let sumTotalDiscount = () => {
    //     let fullPriceDiscount = 0;
    //     let startAnimateValue, targetAnimateValue;
    //
    //     for (let item of productPriceDesc) {
    //         fullPriceDiscount += +item.textContent.replace(/ /g,'').match(/\d+/);
    //         startAnimateValue = +fullPriceDiscount - +item.textContent.replace(/ /g,'').match(/\d+/);
    //     }
    //     fullPriceDiscount = String(fullPriceDiscount);
    //     totalItemDiscount.textContent = fullPriceDiscount.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
    //
    //     targetAnimateValue = Number(totalItemDiscount.textContent.replace(/ /g,''));
    //
    //     animate({
    //         duration: 400,
    //         timing: (timeFraction) => timeFraction,
    //         draw(progress) {
    //             totalItemDiscount.textContent = '-' + (startAnimateValue + Math.round((targetAnimateValue - startAnimateValue) * progress)).toLocaleString();
    //         },
    //     });
    //
    // }

    // for (let item of basketLabel) {
    //     domObserver(document.getElementById(item.firstElementChild.id), function (el){
    //     });
    // }
}

export default basketCost