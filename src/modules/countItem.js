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
}

export default basketCost