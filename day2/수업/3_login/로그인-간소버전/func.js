/*
$(선택자).on("이벤트명", 실행함 함수);
선택자.onload = 실행할 함수;

$(선택자);
document.getElementById("아이디명")
*/

/*
jQuery에서 value받는 방법
$(선택자).val();
*/
window.onload = function(){
	document.getElementById("btnIn").onclick = log_in;
	document.getElementById("btnOut").onclick = log_out;
}

function log_in(e){
	//alert("로그인함수입니다");
	e.preventDefault();
	
	var lg_id = lg.id.value;
	//var lg_pw = parseInt(lg.pw.value);  입력받은 값을 강제로 숫자로 변화
	var lg_pw = lg.pw.value;
	if( lg_id =="korea" && lg_pw == "1234"){		
		addClass();
	}else{
		alert("입력한 아이디와 비밀번호가 올바르지 않습니다");
		lg.id.value="";
		lg.pw.value="";
	}	
}

function log_out(e){
	//alert("로그아웃함수입니다");
	e.preventDefault();
	removeClass();
}

function addClass(){
	document.getElementById("frame").className="on";
}

function removeClass(){
	document.getElementById("frame").className="";
	lg.id.value="";
	lg.pw.value="";
}






