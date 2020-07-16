<!-- Animatio Js -->
;(function($, window, undefined) {
		   "use strict";
        new WOW().init();
		
	
	/************ Header Scroll *************/
	
		$(window).on("scroll", function() {
		if($(window).scrollTop() > 0) {
			$("#header-fix").addClass("active");
		} else {
			//remove the background property so it comes transparent again (defined in your css)
		   $("#header-fix").removeClass("active");
		}
	});

	
		/************ Mixitup js *************/
		$('#grid').mixitup();
		
		
		 
})(jQuery, window);