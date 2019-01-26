$(document).ready(function(){


	var num = 0;
	var timer;
	var $item = $(".list");
	var wid = $item.find("li").outerWidth();	
	var el = $item.selector;


	timer = setInterval(move,20);


	$item.on("mouseenter",function(){
		clearInterval(timer);
	});
	

	$item.on("mouseleave",function(){
		timer = setInterval(move,20);
	});

	
	function move(){
		num -= 2;
		if(num<-wid){
			$item.find("li").first().appendTo(el);
			num = 0;
		}
		$item.css({left:num});
	}
	
	
	
	
	
});










