const menu = document.querySelector('.menu-lines');
const menuContent = document.querySelector('.menu');
const span = document.querySelectorAll('.menu-lines span')
const options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    wrapAround: true,
    cellAlign: 'center',
    arrowShape: {
        x0: 1,
        x1: 58,
        y1: 62,
        x2: 55,
        y2: 48,
        x3: 18
    }
};

// window.addEventListener('resize', () => {
//     menuContent.style.display = window.innerWidth >= 800 ? 'block' : 'none';
// })


// const ul = document.querySelector('.menu ul');
menu.addEventListener('click', () => {

    span.forEach(span => {
        if(span.classList.contains('effects')){
            span.classList.remove('effects');
            // menuContent.style.display = 'none'
            span.style.backgroundColor = '#cdc';
            return;
        }
        span.classList.add('effects');
        // menuContent.style.display = 'block'
        span.style.backgroundColor = '#333';
    });
})

function positionPage() {
    document.getElementById('close-menu').checked = false;
    if(window.innerWidth >= 800) return;
    // menuContent.style.display = 'none'
    span.forEach(element => {
        element.style.backgroundColor = '#cdc';
        element.classList.remove('effects');
    })
}

function setBgPosition(slide, index) {
    const x = -(slide.target + flkty.x) / 5;
    slides[index].style.backgroundPosition = `${x}px`;
}

// Slides initialization
const carousel = document.querySelector('[carousel]');
const slides = Array.from(document.getElementsByClassName('carousel-cell'));
const flkty = new Flickity(carousel, options);

// Event listener using bg position
flkty.on('scroll', () => {
    flkty.slides.forEach(setBgPosition);
});