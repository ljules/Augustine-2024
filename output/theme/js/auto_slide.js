(function () {
    "use strict";
    const slideTimeout = 5000;
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const $slides = document.querySelectorAll('.slide');
    let $dots;
    let intervalId;
    let currentSlide = 0;

    function slideTo(index) {
        if (index >= $slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = $slides.length - 1;
        } else {
            currentSlide = index;
        }

        $slides.forEach(($elt, key) => {
            $elt.style.display = key === currentSlide ? 'block' : 'none';
        });
        $dots.forEach(($elt, key) => {
            $elt.classList.toggle('active', key === currentSlide);
        });
    }

    function showSlide() {
        slideTo(currentSlide + 1);
    }

    for (let i = 0; i < $slides.length; i++) {
        let dotClass = i === currentSlide ? 'active' : 'inactive';
        let $dot = document.createElement('span');
        $dot.className = `dot ${dotClass}`;
        $dot.setAttribute('data-slideId', i);
        document.querySelector('.carousel-dots').appendChild($dot);
    }

    $dots = document.querySelectorAll('.dot');
    $dots.forEach(($elt, key) => $elt.addEventListener('click', () => slideTo(key)));
    prev.addEventListener('click', () => slideTo(currentSlide - 1));
    next.addEventListener('click', () => slideTo(currentSlide + 1));

    intervalId = setInterval(showSlide, slideTimeout);

    $slides.forEach($elt => {
        let startX;
        let endX;
        $elt.addEventListener('mouseover', () => {
            clearInterval(intervalId);
        }, false);
        $elt.addEventListener('mouseout', () => {
            intervalId = setInterval(showSlide, slideTimeout);
        }, false);
        $elt.addEventListener('touchstart', (event) => {
            startX = event.touches[0].clientX;
        });
        $elt.addEventListener('touchend', (event) => {
            endX = event.changedTouches[0].clientX;
            if (startX > endX) {
                slideTo(currentSlide + 1);
            } else if (startX < endX) {
                slideTo(currentSlide - 1);
            }
        });
    });

    slideTo(currentSlide);
})();