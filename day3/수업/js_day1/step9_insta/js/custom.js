//전역변수 선언
var num, timer, $item, el, $item_li, wid;
var url = "https://api.instagram.com/v1/users/self/media/recent";
var token = "2311280572.1677ed0.e6fb91b5ca574246974c3b807fff2772";
var count = 10;
var instaData = [];

//문서 로딩시 변수초기화, 초기화함수 호출, DOM요소에 이벤트 바인딩
$(document).ready(function(){		
	//변수 초기화
	num = 0;
	timer;
	$item = $(".list");	
	el = $item.selector;	

	//로딩시 화면 초기화
	callData(url,token,count);	

	//리스트에 마우스오버시 자동롤링 멈춤
	$item.on("mouseenter",function(){
		clearInterval(timer);
	});
	
	//리스트에 마우스아웃시 자동롤링 다시 시작
	$item.on("mouseleave",function(){
		timer = setInterval(move,20);
	});	
	
	//레이어팝업 닫기
	$("body").on("click",".pop .btnClose",removePop);	
});




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
	var src = $(this).children("a").attr("href");	
	var tags = '<div class="pop"><div class="con"></div><span class="btnClose">Close</span></div>';

	$("body").append(tags);

	$(".con").css({
		"background-image":"url("+src+")",
		"background-position":"center",
		"background-size":"cover"
	});

	$(".pop").fadeIn();	
	return false;
}

//팝업제거 함수정의
function removePop(){
	$(".pop").fadeOut(400,function(){
		$(this).remove();
	});
}

//ajax호출 함수정의
function callData(url, token, count){
	$.ajax({
		url : url,
		dataType : 'jsonp',
		data : {
			access_token : token,
			count : count
		}		
	})
	.success(function(data){		
		initList(data.data);//리스트 초기화함수 호출
	})
	.error(function(){
		alert("fail to load instagram api");
	});
}



//동적으로 리스트 아이템 생성 함수정의
function initList(post){	
	console.log(post);	
	
	for(var i=0; i<post.length; i++){			
		$item.append(
			$('<li>').append(
				$('<a>').attr({"href":post[i].images.standard_resolution.url}).css({
					"background-image":"url("+post[i].images.low_resolution.url+")"				
				})
			)
		)	
	}	

	$item_li = $item.find("li");	
	wid = $item_li.outerWidth();	

	//리스트로딩 완료시 자동롤링시작
	timer = setInterval(move,20);

	//레이어팝업 열기
	$item_li.on("click",addPop);	
}
	










