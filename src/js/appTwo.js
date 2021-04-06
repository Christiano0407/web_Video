const menu = document.querySelector(`#mobile-menu`); 
const menuLinks = document.querySelector(`.nav-menu`); 

menu.addEventListener(`click`, function() {
    menu.classList.toggle(`is-active`); 
    menuLinks.classList.toggle(`active`); 
});

           /* ====gsap==== */
 gsap.registerPlugin(ScrollTrigger); 

 gsap.utils.toArray(`.section`).forEach(section => {
     ScrollTrigger.create({
         trigger: section, 
         start: `top top`, 
         pin: true, 
         pinSpacing: false
     }); 
 }); 