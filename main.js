const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const moving_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    moving_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if (scroll_position>250){
        header.style.backgroundColor = '#b3b3b3';
    }else{
        header.style.backgroundColor = 'transparent';
    }
    });

