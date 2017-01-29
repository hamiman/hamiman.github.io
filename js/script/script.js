	
	$(document).ready(function(){
		// burger menu
		$("#burger-container").on("click",function(){
			$(this).toggleClass("open");
			$("#menu").toggleClass("open");
		});
		// fixed navbar
		var navOffset = $("nav").offset().top;

		$(window).scroll(function(){
			var scrollFix = $(window).scrollTop();
			if (scrollFix >= navOffset){
				$("nav").addClass("navbar-fixed-top");
			}else {
				$("nav").removeClass("navbar-fixed-top");
			}
		});
		// page-scroll
		$(".page-scroll").on("click", function(){
			var href = $(this).attr("href");
			var elementHref = $(href);

			$("body").animate({
				scrollTop: elementHref.offset().top - 50
			},1500,"easeInOutExpo");
		});
		// *****
	});
	

