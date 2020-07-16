;(function($, window, undefined) {
		   "use strict";
      
		/************ Testimonials Slider *************/
		$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        itemsMobile:[650,1],
        pagination:false,
		slideSpeed: 200,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});})(jQuery, window);