let slidePosition = 0;
const slides = document.getElementsByClassName(`carousel__item`);
const totalSlides = slides.length;

console.log(slides);

/* Next */
document.getElementById(`carousel__button--next`)
.addEventListener("click", () => {
	console.log("Hello!")
});

/*previous*/
document.getElementById(`carousel__button--prev`)
.addEventListener("click", () => {
	console.log("Hi")
});

