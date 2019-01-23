$(document).ready(function(){	

	//리스트 동적생성
	for(var i=1; i<=4; i++){
		$(".list").append('<li>'+i+'</li>');
	}

	//리스트 left의 초기값
	var i=0;
	var timer;
	
	//리스트의 left값을 계속해서 2씩 빼주는 함수
	timer = setInterval(function(){			
		if(i<=-300){
			i=0;
			$(".list li").first().appendTo(".list");
		}else{
			i-=2;
		}
		$(".list").css({"left":i});
	},1000/30);

	//마우스오버시 자동롤링 정지
	$(".wrap").on("mouseenter",function(){
		clearInterval(timer);
	});

	//마우스아웃시 자동롤링 다시시작
	$(".wrap").on("mouseleave",function(){
		timer = setInterval(function(){			
			if(i<=-300){
				i=0;
				$(".list li").first().appendTo(".list");
			}else{
				i-=2;
			}
			$(".list").css({"left":i});
		},1000/30);
	});
	

});










