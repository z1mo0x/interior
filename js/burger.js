const burgerBtn = document.querySelector('.header__burger');
const burgerList = document.querySelector('.header__burger-list');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active-burger');
    burgerList.classList.toggle('active-list');
    document.documentElement.classList.toggle('off_scroll');
})