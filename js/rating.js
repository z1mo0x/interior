const ratingStar = document.querySelectorAll('.fa-star');
const productRating = document.querySelectorAll('.product__rating');


productRating.forEach((element) => {
    element.innerHTML = (element.innerHTML).repeat(Math.floor(Math.random() * 5 + 1));
})
