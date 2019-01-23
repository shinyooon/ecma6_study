/*
	generator함수
	: 기존의 이터레이터 함수호출의 번거로운 작업을 간소화한 버전
*/


window.onload = function(){
	let generator = gen(); //제너레이트 함수 호출

	generator.next(); //이후 .next() 메서드를 호출해서 제너레이터 안의 yeild로 선언된 이터레이터 함수가 실행됨 (func1실행)

	setTimeout(function(){
		generator.next(); //무조건 next()메서드가 호출되야지만 그 다음 yield구문의 함수가 실행되므로 2초뒤에 두번째 next()메서드가 호출될때까지는 세번째 yield함수는 대기
	},2000);
	
	generator.next(); //2초뒤에 next()메서드로 마지막 yeild구문 실행	
}



//제너레이트 함수를 실행한뒤에 .next()메서드를 호출해야 yield구문이 순차적으로 실행됨
function* gen(){
	yield func1();
	yield func2();
	yield func3();
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