/* const hamburguer = document.querySelector(".nav__hamburger"); 
const navLinks = document.querySelector(".nav__link"); 
const links = document.querySelector(".nav__link li"); 
const nav = document.querySelector(".nav"); 

hamburguer.addEventListener("click", () => {
    navLinks.classList.toggle(".open"); 
    console.log("hola"); 
}) */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});