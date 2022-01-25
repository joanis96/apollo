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
	

}


nav();

smoothScroll();

fullSlider();

});
