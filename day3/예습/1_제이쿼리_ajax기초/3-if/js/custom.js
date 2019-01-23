$(document).ready(function(){	

	//리스트 동적생성
	for(var i=1; i<=4; i++){
		$(".list").append('<li>'+i+'</li>');
	}

	//리스트 left의 초기값
	var i=0;
	
	//리스트의 left값을 계속해서 2씩 빼주는 함수
	setInterval(function(){			
		if(i<=-300){
			i=0;
			$(".list li").first().appendTo(".list");
		}else{
			i-=2;
		}
		$(".list").css({"left":i});
	},1000/30);
	

});










