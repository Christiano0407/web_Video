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
function updateSlidePosition() {
	for(let slide of slides) {
		slide.classList.remove(`carousel__item--visible`);
		slide.classList.add(`carousel__item--hidden`);
	}

	slides[slidePosition].classList.add(`carousel__item--visible`);
}

function moveToNextSlide () {
	
    if(slidePosition === totalSlides -1 ) {
		slidePosition = 0;
	}else {
		slidePosition++;
	}
	updateSlidePosition();
}

function moveToPrevSlide () {
   
  if(slidePosition === 0) {
	slidePosition = totalSlides -1;
 }else {
	slidePosition--;
 }

 updateSlidePosition();
}

/*Two Carousel*/
const swiper = new Swiper('.swiper-container', {
	// Optional parameters
/* 	direction: 'vertical',
	loop: true, */
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });