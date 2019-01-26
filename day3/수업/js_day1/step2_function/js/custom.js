$(document).ready(function(){
	

	var num = 0;
	var timer;
	var $item = $(".list");


	timer = setInterval(move,20);


	$item.on("mouseenter",function(){
		clearInterval(timer);
	});
	

	$item.on("mouseleave",function(){
		timer = setInterval(move,20);
	});


	function move(){
		num -= 2;
		$item.css({left:num});
	}
	
	
	
	
});










