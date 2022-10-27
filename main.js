const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const moving_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    moving_menu.classList.toggle('active');
})

