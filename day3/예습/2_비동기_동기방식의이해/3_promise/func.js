window.onload = function(){
	gen();
}


function gen(){
	//func1().then(func2).then(func3);
	func3().then(func2).then(func1);
}


function func1(){
	return new Promise(function(resolve, reject){
		console.log('first');
		resolve();
		//reject();
	})
	
}

function func2(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			console.log('second');
			resolve();
		},2000);
	});	
}

function func3(){
	return new Promise(function(resolve, reject){
		console.log('third');
		resolve();
	})
	
}