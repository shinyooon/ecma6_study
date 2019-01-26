$(document).ready(function(){


	
	var num = 0;
	var timer;


	timer = setInterval(function(){
		num -= 2;
		$(".list").css({ left : num });
	},20);

	
	$(".list").on("mouseenter",function(){
		clearInterval(timer);
	});
	

	$(".list").on("mouseleave",function(){
		timer = setInterval(function(){
			num -= 2;
			$(".list").css({ left : num });
		},20);
	});
	
	
	
	
});










