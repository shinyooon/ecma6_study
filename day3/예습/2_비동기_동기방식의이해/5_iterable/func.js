/*
	iterable object
	: for of문을 이용해 반복될수 있는 값을 가지고 있는 객체
	: 문자열, 배열
	: 이터러블 객체는 Symbol.iterator라는 이터레이터 함수를 내장하고 있다.	
*/	

/*
	iterator
	: 이터러블 객체의 값들은 이터레이터 함수에 의해서 
	.next() 메서드로 순차적으로 이터레이션(반복) 흐름을 제어가능
*/
/*
let arr = [10,20,30];
for(let i of arr){
	console.log(i);
}
*/

let str = 'Welcome';
/*
for(let i of str){
	console.log(i);
}
*/

let iterator = str[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
