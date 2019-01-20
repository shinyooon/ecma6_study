window.onload = function(){	
	
	var btnArr = document.getElementsByTagName("button");
	var len = btnArr.length;	

	//일반함수 이벤트연결
	for(var i=0; i<len; i++){	
		console.log(i)
		var abc = i;						
		document.getElementsByTagName("button")[i].onclick = function(){ 
			console.log(i);
			text(i); 				
		}
	}
	console.log(abc);	 
	
	/*
	원래대로라면 아래와 같이 반복이 총 두번을 돌며 반복이 끝나면	
	두개의 돔의 onclick객체에 함수가 연결이 되며 끝나야함
	document.getElementsByTagName("button")[0].onclick = function(){ text(0) };
	document.getElementsByTagName("button")[1].onclick = function(){ text(1) };

	하지만 변수i 와 함수모두 반복이 끝난이후에 호이스팅이 발생을 해서
	원래대로라면 사라져야할 i값과 함수 text(i)가 전역에 다시한번 등록이 되면서
	반복문이 끝난이후에도  i=2, text(i)라는 함수가 전역에 최종적으로 저장이 됨

	반복문에서의 변수i, i++는 일반적인 변수 scope를 쓰지 않음 
	일단 i값을 {블록} 안에서 먼저 실행한 후에 해당 값을 다음 조건식이 실행될때 임시로 해당값을 복사한뒤에 증가해서 해당 값을 다시 복사해서 리턴
	

	결국 반복이 끝난이후에 어떤버튼을 클릭하더라도 전역에 등록된 text(2)함수가 계속 호출됨
	*/
	
};




function text(k){
	console.log("btn"+k+" clicked");
		
}	




