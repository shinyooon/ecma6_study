$(document).ready(function(){	

	

	var num = 0;
	var timer;
	var $item = $(".list");		
	var el = $item.selector;


	initList();
	var wid = $item.find("li").outerWidth();
	

	timer = setInterval(move,20);


	$item.on("mouseenter",function(){
		clearInterval(timer);
	});
	

	$item.on("mouseleave",function(){
		timer = setInterval(move,20);
	});



	function initList(){
		for(var i=1; i<=10; i++){
			$item.append(
				'<li><a href="#"><img src="img/s'+i+'.jpg"/></a></li>'
			);
		}
	}

	
	function move(){
		num -= 2;
		if(num<-wid){
			$item.find("li").first().appendTo(el);
			num = 0;
		}
		$item.css({left:num});
	}
	
	
	
	
	
});










