const menu = document.querySelector(`#mobile-menu`); 
const menuLinks = document.querySelector(`.nav-menu`); 
/* gsap.registerlugin(ScrollTrigger);  */

menu.addEventListener(`click`, function() {
    menu.classList.toggle(`is-active`); 
    menuLinks.classList.toggle(`active`); 
});

           /* ====gsap==== */
