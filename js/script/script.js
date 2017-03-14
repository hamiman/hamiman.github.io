	
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
		//typed.js plugin
        $("#typed").typed({
            stringsElement: $('#typed-strings'),
	        // typing speed
			typeSpeed: 50,
			// time before typing starts
			startDelay: 0,
			// backspacing speed
			backSpeed: 50,
			// shuffle the strings
			shuffle: false,
			// time before backspacing
			backDelay: 1500,
			// loop
			loop: true,
			// false = infinite
			loopCount: false,
			// show cursor
			showCursor: true,
			// character for cursor
			cursorChar: "|",
	    });
	    

		// *****
	});
	

