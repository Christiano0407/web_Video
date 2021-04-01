const navLinks = document.querySelector(`.nav__list ul`); 
const links = document.querySelectorAll(`.nav__list ul li `); 
const hamburger = document.querySelector(`.hamburger`); 

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open"); 
    console.log("hello"); 
})