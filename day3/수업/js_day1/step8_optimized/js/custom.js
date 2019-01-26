//전역변수 선언
var num, timer, $item, el, $item_li, wid;

//문서 로딩시 변수초기화, 초기화함수 호출, DOM요소에 이벤트 바인딩
$(document).ready(function(){		
	//변수 초기화
	num = 0;
	timer;
	$item = $(".list");	
	el = $item.selector;

	//로딩시 화면 초기화
	initList();
	$item_li = $item.find("li");
	wid = $item_li.outerWidth();

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

	//레이어팝업 열기
	$item_li.on("click",addPop);
	
	//레이어팝업 닫기
	$("body").on("click",".pop .btnClose",removePop);	
});


//동적으로 리스트 아이템 생성 함수정의
function initList(){
	for(var i=1; i<=10; i++){
		$item.append(
			'<li><a href="add'+i+'.html"><img src="img/s'+i+'.jpg"/></a></li>'
		);
	}
}

//롤링배너 함수정의
function move(){
	num -= 2;
	if(num<-wid){
		$item.find("li").first().appendTo(el);
		num = 0;
	}
	$item.css({left:num});
}

//팝업생성 함수정의
function addPop(){
	removePop();
	var target = $(this).children("a").attr("href");	
	var tags = '<div class="pop"><div class="con"></div><span class="btnClose">Close</span></div>';

	$("body").append(tags);

	$(".pop").fadeIn(500,function(){
		callData(target);
	});
	
	return false;
}

//팝업제거 함수정의
function removePop(){
	$(".pop").fadeOut(400,function(){
		$(this).remove();
	});
}

//ajax호출 함수정의
function callData(target){
	$.ajax({
		url : target,
		beforeSend : function(){
			$(".con").html('<img class="loading" src="img/loading.gif" />');
		},
		success : function(data){
			setTimeout(function(){
				$(".con").html(data);
			},1000);				
		},
		error : function(){
			alert("데이터를 불러오는데 실패했습니다.");
		}
	});
}
	










