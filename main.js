'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    if(window.scrollY > navbarHeight){
        console.log("a");
        navbar.classList.add('navbar--dark');
    } else {
        console.log("b");
        navbar.classList.remove('navbar--dark');
    }

})