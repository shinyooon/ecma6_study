$(function(){	

	//mleft초기화 해주고 리스트갯수와 넓이값을 알아내서 .list 목록의 넓이값을 설정
	var mleft = 0;
	var num = $(".list li").length;
	var li_width = $(".list li").outerWidth();
	var list_width = num*li_width; 
	$(".list").css({"width":list_width});
	
	
	timer = setInterval(move, 40);
	
	$(".listBox").on("mouseenter",function(){
		clearInterval(timer);
	});
	$(".listBox").on("mouseleave",function(){
		timer = setInterval(move, 40);
	});
	
	//move함수 정의
	function move(){
		mleft -= 2;
		if(mleft < -li_width){
			$(".list li").first().appendTo(".list");
			mleft = 0;
		}		
		$(".list").css({"left":mleft});
	}
	
	
	
	//각각의 리스트를 클릭하면 레이어팝업 동적으로 생성
	$(".list li").on("click",function(e){
		e.preventDefault();
		
		//클릭이벤트 발생하자마자 무조건 기존에 있던 팝업은 제거
		$(".pop").fadeOut(600,function(){
			$(this).remove();
		});
		
		//동적으로 생성될 팝업내용을 미리 변수에 할당
		var tags = '<div class="pop"><div class="con"></div><span class="btnClose">Close</span></div>';	
		
		//변수에 클릭할때마다 타겟 주소값을 할당
		var target = $(this).children("a").attr("href");	
	
		//동적인 팝업내용을 body안쪽 뒤에 추가한뒤, fadeIn으로 서서히 나타나게
		$(tags).appendTo("body");	
		$(".pop").fadeIn();
		
		
		//ajax 비동기 서버통신 시작
		$.ajax({
			
			url : target, //데이터를 불러올 타겟 주소
			//데이터를 불러오기 전까지 실행할 함수를 등록
			beforeSend : function(){
				$(".con").html('<img class="loading" src="img/loading.gif" />');
			},	
			//데이터 불러오는데 성공했을시 실행할 함수를 등록
			success : function(data){
				$(".con").html(data);
			},	
			//데이터 불러오는데 실패했을시 실행할 함수를 등록
			error : function(){
				alert("데이터를 불러오는데 실패했습니다");
			}
	
		}); //ajax
		
	});
	
	//닫기버튼 클릭 시 팝업닫기
	$("body").on("click",".pop .btnClose",function(e){
		e.preventDefault();
		//alert("test");
		$(this).parent(".pop").fadeOut(600,function(){
			$(this).remove();
		});
		
	});
	/*
	$(".pop .btnClose").live("click",function(e){
		e.preventDefault();
		alert("test");
		$(this).parent(".pop").fadeOut(600);
	});
	*/
	
	
});










