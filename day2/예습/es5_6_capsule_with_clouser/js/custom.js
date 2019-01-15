/*
  클로저를 활용하면 지역변수를 함수 외부로 내보내 활용할수 있다.
  캡슐화 
  - 생성자함수 안에 있는 객체는 언제든 외부에서 키값을 활용하여 값을 변경가능
  - 대단위 프로젝트 작업히 실수로 생성자함수의 객체키값을 덮어써서 오류를 일으킬수 있다.
  - 중요한 값은 "this.키값" 대신 외부에서 접근할수 없는 지역변수로 만들어 클로저로 내보내면 은닉화가능
*/



function Square(width, height){
  this.width = width;
  this.height = height;
  this.getArea = function(){
    console.log (this.width*this.height);
  }
}

var box2 = new Square(10,4);
box2.width = "test";
box2.getArea();



//캡슐화
function SquareClouser(width, height){
  var w = width;
  var h = height;
  this.getArea = function(){
    console.log (w*h);
  }
}

var box3 = new SquareClouser(5,4);
w = "test";
box3.getArea();

