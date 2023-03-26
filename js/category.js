const category = document.querySelectorAll('.team__category');

category.forEach((element) => {

    element.addEventListener('click', () => {
        for (let cat of category) {
            cat.classList.remove('button-category');
        }
        element.classList.add('button-category');
    })

})