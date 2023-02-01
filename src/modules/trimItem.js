const slicer = () => {
    let itemProductTitle = document.querySelectorAll('.item__product-title');
    const mediaQuery = window.matchMedia('(max-width: 420px)')

    itemProductTitle.forEach(item => {
        if (mediaQuery.matches) {
            let str = item.textContent;
            let num = 44;
            item.textContent = str.trim().length > num ? str.trim().substring(0, num).trim() + '...' : str.trim()
        }
    })
}

export default slicer;