;(function($, window, undefined) {
		   "use strict";
	$(document).ready(function(){
		$("#owl-demo").owlCarousel({
     		items : 4, 
      		itemsDesktop : [1000,3],
      		itemsDesktopSmall : [900,2],
      		itemsTablet: [600,2],
	  		margin:10,
	  		loop:true,
			autoPlay: true,
			slideSpeed: 200,
	   		autoWidth:false,
     	 	itemsMobile : true,
			pagination:false,
			 navigation:false
  			});
 		});
	})(jQuery, window);