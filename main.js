'use strict'

// 메뉴바가 멘 위에 위치할때 투명하게 변경
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// 메뉴 클릭시 해당 페이지로 스크롤 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
})

// Home에 있는 'Contact me' 버튼 클릭 시 Contact 페이지로 스크롤 이동
const HomeContactBtn = document.querySelector('.home__contact');
HomeContactBtn.addEventListener('click', ()=>{
    scrollIntoView('#contact')
})

// 스크롤 이동 함수
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}