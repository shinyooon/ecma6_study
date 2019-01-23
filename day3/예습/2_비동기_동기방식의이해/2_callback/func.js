window.onload = function(){
	gen();
}


function gen(){
	func1(function(){
		setTimeout(function(){
			func2(function(){
				func3();
			});
		},2000);
	});
}


function func1(callback){
	console.log('first');
	callback();
}

function func2(callback){
	console.log('second');
	callback();
}

function func3(){
	console.log('third');
}

/*
	기존 함수에 인수값으로 다시 함수를 넣어서
	함수 내부에서 인수로 전달받은 콜백함수를 실행

	각각의 함수끝에 강제로 콜백함수를 호출함으로서 강제동기화를 할수는 있으나
	코드의 가독성이 떨어지고 구문이 복잡해 유지보수 어려움
*/
