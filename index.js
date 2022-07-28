const btns = document.querySelectorAll('.market_btn');
const market_item = document.querySelectorAll('.market_item');

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        market_item.forEach((product)=> {
            if (filter === 'All_Items'){
                product.style.display = 'flex';
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'flex';
                } else {
                    product.style.display = 'none';
                }
            }
        });

        
    });
};
