window.onload = function(){
	
	var btnArr = document.getElementsByTagName("button");
	var len = btnArr.length;	
	
	//즉시실행함수 이벤트 연결
	for(var i=0; i<len; i++){
		(function(i){	
			console.log(i);
			var abc = i;								
			document.getElementsByTagName("button")[i].onclick = function(){
				text(i); 				
			}				
		})(i);
	}
	console.log(abc);	
	
	/*
	즉시실행함수를 실행하면 반복문 블록안에 있는 변수와 함수가 지역으로 제한이 되면서 
	호이스팅이 발생하지 않게 됨. 

	document.getElementsByTagName("button")[0].onclick = function(){ text(0) };
	document.getElementsByTagName("button")[1].onclick = function(){ text(1) };
	따라서 위의 두 함수가 DOM에 등록이 되고나서 내부의 변수와 함수가 전역에 남지 않게 되어
	정상적으로 두개의 버틍에 각각의 함수가 제대로 출력
	*/
	
	
};




function text(k){
	console.log("btn"+k+" clicked");	
	
}	




