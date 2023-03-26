var slideIndex = 1;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
var slides = document.querySelectorAll('.new__slide');

showSlides();

function showSlides(n) {

    if (n && n > slides.length) {
        slideIndex = 1;
    }

    if (n && n < 1) {
        slideIndex = slides.length;
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slides[i].classList.remove('out');
        slides[i].classList.remove('in');
    }

    if (window.screen.width < 993 && window.screen.width > 579) {
        for (var i = 0; i < 2; i++) {
            slides[slideIndex + i - 1].style.display = 'flex';
        }
        if (slideIndex > 5) {
            next.style.display = 'none';
            slideIndex++;
        } else {
            next.style.display = 'flex';
        }
    } else if (window.screen.width < 579) {
        for (var i = 0; i < 1; i++) {
            slides[slideIndex + i - 1].style.display = 'flex';
        }
        if (slideIndex > 5) {
            next.style.display = 'none';
            slideIndex++;
        } else {
            next.style.display = 'flex';
        }
    } else {
        for (var i = 0; i < 3; i++) {
            slides[slideIndex + i - 1].style.display = 'flex';
        }
        if (slideIndex > 3) {
            next.style.display = 'none';
        } else {
            next.style.display = 'flex';
        }
    }


    if (slideIndex <= 1) {
        prev.style.display = 'none';
    } else {
        prev.style.display = 'flex';
    }

}


next.addEventListener('click', () => {
    next.setAttribute('disabled', true);
    if (window.screen.width < 993 && window.screen.width > 579) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('out');
            slides[i].classList.remove('in');
            slides[i].classList.remove('outof');
            slides[i].classList.remove('inof');
        }
        slides[slideIndex - 1].classList.add('inof');
        setTimeout(() => {
            slides[slideIndex - 2].style.display = 'none';
            slides[slideIndex].classList.add('in');
            slides[slideIndex].style.display = 'flex';
            next.removeAttribute('disabled');
        }, 700)
        slideIndex++;
        console.log(slideIndex);
        if (slideIndex > 4) {
            next.style.display = 'none';
        } else {
            next.style.display = 'flex';
        }
        if (slideIndex <= 1) {
            prev.style.display = 'none';
        } else {
            prev.style.display = 'flex';
        }
    } else if (window.screen.width < 579) {


        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('out');
            slides[i].classList.remove('in');
            slides[i].classList.remove('outof');
            slides[i].classList.remove('inof');
        }

        slides[slideIndex - 1].classList.add('inof');
        setTimeout(() => {
            slides[slideIndex - 2].style.display = 'none';
            slides[slideIndex - 1].classList.add('in');
            slides[slideIndex - 1].style.display = 'flex';
            next.removeAttribute('disabled');
        }, 700)
        slideIndex++;
        console.log(slideIndex);
        if (slideIndex > 5) {
            next.style.display = 'none';
        } else {
            next.style.display = 'flex';
        }
        if (slideIndex <= 1) {
            prev.style.display = 'none';
        } else {
            prev.style.display = 'flex';
        }
    }



    else {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('out');
            slides[i].classList.remove('in');
            slides[i].classList.remove('outof');
            slides[i].classList.remove('inof');
        }

        slides[slideIndex - 1].classList.add('inof');
        setTimeout(() => {
            slides[slideIndex - 2].style.display = 'none';
            slides[slideIndex + 1].classList.add('in');
            slides[slideIndex + 1].style.display = 'flex';
            next.removeAttribute('disabled');
        }, 700)
        slideIndex++;
        console.log(slideIndex);
        if (slideIndex > 3) {
            next.style.display = 'none';
        } else {
            next.style.display = 'flex';
        }

        if (slideIndex <= 1) {
            prev.style.display = 'none';
        } else {
            prev.style.display = 'flex';
        }
    }

    if (slideIndex <= 1) {
        prev.style.display = 'none';
    } else {
        prev.style.display = 'flex';
    }
});


console.log(window.screen.width);



prev.addEventListener('click', () => {
    prev.setAttribute('disabled', true);
    if (window.screen.width < 993 && window.screen.width > 579) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('out');
            slides[i].classList.remove('in');
            slides[i].classList.remove('outof');
            slides[i].classList.remove('inof');
        }
        slides[slideIndex].classList.add('out');
        setTimeout(() => {
            slides[slideIndex - 1].style.display = 'flex';
            slides[slideIndex + 1].style.display = 'none';
            slides[slideIndex - 1].classList.add('outof');

            prev.removeAttribute('disabled');

        }, 700)

        console.log(slideIndex);
        slideIndex--;

    } else if (window.screen.width < 579) {

        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('out');
            slides[i].classList.remove('in');
            slides[i].classList.remove('outof');
            slides[i].classList.remove('inof');
        }
        slides[slideIndex - 1].classList.add('out');
        setTimeout(() => {
            slides[slideIndex - 1].style.display = 'flex';
            slides[slideIndex].style.display = 'none';
            slides[slideIndex - 1].classList.add('outof');
            prev.removeAttribute('disabled');
        }, 700)

        console.log(slideIndex);
        slideIndex--;
    }
    else {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('out');
            slides[i].classList.remove('in');
            slides[i].classList.remove('outof');
            slides[i].classList.remove('inof');
        }
        slides[slideIndex + 1].classList.add('out');
        setTimeout(() => {
            slides[slideIndex - 1].style.display = 'flex';
            slides[slideIndex + 2].style.display = 'none';
            slides[slideIndex - 1].classList.add('outof');

            prev.removeAttribute('disabled');

        }, 700)

        console.log(slideIndex);
        slideIndex--;

    }

    if (slideIndex > 5) {
        next.style.display = 'none';
    } else {
        next.style.display = 'flex';
    }

    if (slideIndex <= 1) {
        prev.style.display = 'none';
    } else {
        prev.style.display = 'flex';
    }
})
