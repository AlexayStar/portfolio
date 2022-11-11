const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const headerTop = document.querySelector('.header_top');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    headerTop.classList.toggle('header_top--active')
});

const scrollToAbout = document.querySelector('.scroll-to-about');
const scrollToSkill = document.querySelector('.scroll-to-skill');
const scrollToService = document.querySelector('.scroll-to-service');
const scrollToPortfolio = document.querySelector('.scroll-to-portfolio');
const scrollToReviwe = document.querySelector('.scroll-to-reviwe');
const scrollToContact = document.querySelector('.scroll-to-contact');

const headerArrowLink = document.querySelector('.header_arrow-link');
const about = document.querySelector('.about');
const skill = document.querySelector('.skill');
const service = document.querySelector('.service');
const portfolio = document.querySelector('.portfolio');
const reviwe = document.querySelector('.reviwe');
const contact = document.querySelector('.contact');

function scrollTO(element) {
    window.scroll({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

scrollToAbout.addEventListener('click', () => {
    scrollTO(about);
});

scrollToSkill.addEventListener('click', () => {
    scrollTO(skill);
});

scrollToService.addEventListener('click', () => {
    scrollTO(service);
});

scrollToPortfolio.addEventListener('click', () => {
    scrollTO(portfolio);
});

headerArrowLink.addEventListener('click', () => {
    scrollTO(portfolio);
});

scrollToReviwe.addEventListener('click', () => {
    scrollTO(reviwe);
});

scrollToContact.addEventListener('click', () => {
    scrollTO(contact);
});

var mixer = mixitup('.portfolio_content');