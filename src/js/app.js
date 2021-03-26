let slidePosition = 0;
const slides = document.getElementsByClassName(`carousel__item`);
const totalSlides = slides.length;

/*Muestra cuántos slides*/
console.log(slides);

/* Next */
document.getElementById(`carousel__button--next`)
.addEventListener("click", () => {
	/* console.log("Hello!") */
	moveToNextSlide()
});

/*previous*/
document.getElementById(`carousel__button--prev`)
.addEventListener("click", () => {
	/* console.log("Hi") */
	moveToPrevSlide()
});
  
    /*Actions and conditionals*/
function updateSlidePosition()

function moveToNextSlide () {
	/* console.log("Next"); */
	if(slidePosition === totalSlides -1) {
		slidePosition = 0;
	}else {
		slidePosition++;
	}
}

function moveToPrevSlide () {
/* 	console.log("Previous"); */
if(slidePosition === 0) {
	slidePosition = 0;
}else {
	slidePosition++;
}
}

