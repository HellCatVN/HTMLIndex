


jQuery(document).ready(function($){
		
		// Read dynamically window sizes
		$(window).resize(function() {
			if(this.resizeTO) clearTimeout(this.resizeTO);
			this.resizeTO = setTimeout(function() {
				$(this).trigger("resizeEnd");
			}, 500);
		});
		
		$(window).bind("resizeEnd", function() {
			$(".snow-panel canvas").css("width",($(this).width()));
			$(".snow-panel canvas").css("height",($(this).height()));
		});
		
		/* Put your JavaScript here */
	
});