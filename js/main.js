const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const headerTop = document.querySelector('.header_top');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    headerTop.classList.toggle('header_top--active')
});

var mixer = mixitup('.portfolio_content');