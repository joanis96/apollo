$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

function smoothScroll(){
	// FAIRE
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var target = this.hash;

			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000, function() {
				window.location.hash = target;
			});
		}
	});
	
}

function fullSlider(){
 // A FAIRE
 const slides = document.getElementsByClassName("carousel-item");
 const nextBtn = document.getElementById("carousel-button-next");
 const prevBtn = document.getElementById("carousel-button-prev");
 let position = 0;
 const slidesLength = slides.length;
 
 function hideAllSlides() {
	 for(const slide of slides) {
		 slide.classList.remove("carousel-item-visible");
		 slide.classList.add("carousel-item-hidden");
	 }
 }
 
 const nextSlide = function(e) {
	 hideAllSlides();
	 if(position === slidesLength - 1) {
		 position = 0;
	 } else {
		 position++;
	 }
 
	 slides[position].classList.add("carousel-item-visible");
 }
 
 const prevSlide = function(e) {
	 hideAllSlides();
	 if(position === 0) {
		 position = slidesLength - 1;
	 } else {
		 position--;
	 }
 
	 slides[position].classList.add("carousel-item-visible");
 }
 
 nextBtn.addEventListener("click", nextSlide);
 prevBtn.addEventListener("click", prevSlide);
}


nav();

smoothScroll();

fullSlider();

});
