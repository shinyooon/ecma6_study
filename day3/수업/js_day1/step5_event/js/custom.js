$(document).ready(function(){	

	
	//전역변수 설정
	var num = 0;
	var timer;
	var $item = $(".list");	
	var el = $item.selector;


	//로딩시 화면 초기화
	initList();
	var $item_li = $item.find("li");
	var wid = $item_li.outerWidth();


	//로딩이 되자마자 자동롤링시작
	timer = setInterval(move,20);


	//리스트에 마우스오버시 자동롤링 멈춤
	$item.on("mouseenter",function(){
		clearInterval(timer);
	});
	
	//리스트에 마우스아웃시 자동롤링 다시 시작
	$item.on("mouseleave",function(){
		timer = setInterval(move,20);
	});


	//레이어팝업 열고 닫기
	$item_li.on("click",function(){
		$(".pop").fadeIn();
	});
	$(".pop .btnClose").on("click",function(){
		$(".pop").fadeOut();
	});




	//동적으로 리스트 아이템 생성 함수정의
	function initList(){
		for(var i=1; i<=10; i++){
			$item.append(
				'<li><a href="#"><img src="img/s'+i+'.jpg"/></a></li>'
			);
		}
	}

	
	//롤링배너 함수 정의
	function move(){
		num -= 2;
		if(num<-wid){
			$item.find("li").first().appendTo(el);
			num = 0;
		}
		$item.css({left:num});
	}
	
	
	
	
	
});










