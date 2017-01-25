	// burger menu
	$(document).ready(function(){
		$("#burger-container").on("click",function(){
			$("#burger-container").toggleClass("open");
			$("#menu").toggleClass("open");
		});
	});