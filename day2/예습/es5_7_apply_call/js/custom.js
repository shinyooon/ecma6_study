/*
  생성자함수 안의 this를 원하는 위치로 특정시킬때 쓰인다
  
  생성자함수.apply( target, [인수값들] );  인수값을 배열에 담을때
  생성자함수.call( target, 인수값 );  인수값을 개별적으로 담을때
*/

function Person(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var andy = new Person("Andy",20,"male");
var sally = new Person("Sally",30,"female");
console.log(andy);
console.log(sally);

var tom = {};
Person.apply(tom,["tom",40,"male"]);
console.log(tom);

var mike = {};
Person.call(mike,"mike",50,"male");
console.log(mike);


