const menu = document.querySelector(`#mobile-menu`); 
const menuLinks = document.querySelector(`.nav-menu`); 

menu.addEventListener(`click`, function() {
    menu.classList.toggle(`is-active`); 
    menu.classList.toggle(`active`); 
})
