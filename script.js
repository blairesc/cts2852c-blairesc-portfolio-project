const menu = document.querySelector('#menu-btn');
const header = document.querySelector('.header');
const body = document.querySelector('body');

let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.prev-btn');
let slides = document.querySelectorAll('.slide');
let slideIcons = document.querySelectorAll('.slide-icons');
let navBar = document.querySelector('.nav-bar');

const ch = document.getElementById('character');
const block = document.getElementById('block');

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');
const charCount = document.getElementById('charCount');
const submitBtn = document.getElementById('submit');


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

//next button function
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
    image.setAttribute('src', 'images/about-img2.jpg');
}

function unHover(image) {
    image.setAttribute('src', 'images/about-img1.jpg');
}



//contact page
function submitForm() {
    document.form.action = 'http://ss1.ciwcertified.com/cgi-bin/process.pl';
    alert('Going to ' + document.form.action);
    document.form.submit();
}

function isEmail(email) {
	isMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email);
    return isMail;
} 

let valNumber = 0;
function checkForm() {

    if (/[a-z]/i.test(firstName.value) && /[a-z]/i.test(lastName.value) ) {
        valNumber++;
    }
    alert('Enter the names correctly !');
    

    if (isEmail(email.value)) {
        valNumber++;
    }
    alert('Enter email correctly !');


	if(password.value == '') {
		valNumber++;
	}
    alert('Password cannot be blank');


    if(valNumber == 3) {
        return true;
    }
    else {
        return false;
    }
};



function updateCharCount() {
    charCount.value = message.value.length; 

    if (message.value.length >= 500) {  //disables text area if reaches 500 characters
        message.disabled = true;
    }
}
