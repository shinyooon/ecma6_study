window.onload = function(){
	gen();
}

function gen(){
	func1();
	setTimeout(func2,2000);
	func3();
}



function func1(){
	console.log('first');
}

function func2(){
	console.log('second');
}

function func3(){
	console.log('third');
}

function func4(){
	 
}

/*
	기존의 비동기 방식 프로그래밍에서는 함수의 호출 순서가
	func1 --> setTimeout(func2) --> func3 임에도 불구하고
	call stack에서 다음 3개의 구문의 먼저 실행
	--> func1 
	--> setTimeout요청(func2는 일단 callback queue에서 대기)  
	--> func3 
	위의 3개의 구문이 일단 callstack상에서 실행이 완료되면
	이후 callback queue에서 대기하던 func2가 callstack에 넘어화 실행
	--> func2 
*/
