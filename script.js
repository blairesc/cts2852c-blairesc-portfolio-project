let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let body = document.querySelector('body');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    body.classList.toggle('left');
}