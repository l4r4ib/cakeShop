const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');
const cartButton = document.querySelector('.cartBtn');
const shoppingCart = document.querySelector('.shoppingCart')
window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
});

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

cartButton.addEventListener('click', ()=>{
    shoppingCart.classList.toggle('show');
})

