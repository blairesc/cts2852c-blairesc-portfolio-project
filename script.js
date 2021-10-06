let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let body = document.querySelector('body');
let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.prev-btn');
let slides = document.querySelectorAll('.slide');
let slideIcons = document.querySelectorAll('.slide-icons');
let navBar = document.querySelector('.nav-bar');

const numberOfSlides = slides.length;
let currentSlide = 0;

//menu burger icon toggle
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    body.classList.toggle('left');
    navBar.classList.toggle('display');
}

//next button funtion
function nextSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('action');
    });

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('action');
    });

    currentSlide++; //each time next button is clicked then the current slide increases

    if(currentSlide > (numberOfSlides - 1)) { //slides starts over once have reached the number of slides
        currentSlide = 0;
    }

    //marks the current slide it is on
    slides[currentSlide].classList.add('action');
    slideIcons[currentSlide].classList.add('action');
}

nextBtn.addEventListener('click', nextSlide);

//previous button 
prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('action');
    });

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('action');
    });

    currentSlide--; //each time previous button is clicked then the current slide decreases

    if(currentSlide < 0) { //slides goes to end once have reached the first slide
        currentSlide = numberOfSlides -1;
    }

    //marks the current slide it is on
    slides[currentSlide].classList.add('action');
    slideIcons[currentSlide].classList.add('action');
}

//slider auto
let playSlider = setInterval(nextSlide, 5000);


//about image change
function hover(image) {
    image.setAttribute('src', 'images/about2.jpg');
}

function unHover(image) {
    image.setAttribute('src', 'images/about1.jpg');
}
