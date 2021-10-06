let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let body = document.querySelector('body');
let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.prev-btn');
let slides = document.querySelectorAll('.slide');
let slideIcons = document.querySelectorAll('.slide-icons');
let navBar = document.querySelector('.nav-bar');


//cookie set on first visit
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//get cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert(`Welcome again ${user}!`);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}


//menu burger icon toggle
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    body.classList.toggle('left');
    navBar.classList.toggle('display');
}


const numberOfSlides = slides.length;
let currentSlide = 0;

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


//My Page
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);