/*
클로저 : 리턴값으로 연산이 처리된 결과값이 아닌 함수자체를 내보내는 행위
클로저를 쓰는 이유 - 연산이 완료된 결과값이 아닌 기능만 정의되어 있는 함수만 리턴값으로 내보냄으로써 특정 이벤트발생시 원하는 타이밍에 함수를 실행하기 위함
부수적인 효과로는 일반적으로 특정함수가 실행되고 나면 함수 내부에서 정의된 변수는 사라지는게 정상이나.. 클로저를 통해 함수가 리턴이 되면 리턴되는 함수를 통해 실행이 완료된 지역변수는 계속해서 살아있음 
*/

/*
function changeColor(color){
  return function(){
    document.getElementById("text").style.color = color;
  } 
}

window.onload = function(){

  var red = changeColor("red"); 
  var blue = changeColor("blue");
  var green = changeColor("green"); 

  document.getElementById("red").onclick = red;
  document.getElementById("green").onclick = green;
  document.getElementById("blue").onclick = blue;

}
*/

//지역변수 오류
/*
function test(name){
  var output = "hello "+name+"..!";
}

test("Tom");
alert(output);
*/

//클로저로 지역변수 내보내기
function exportLocal(name){
  var output = "hello "+name+"..!";
  return function(){
    alert(output);
  }
}

var callLocal = exportLocal("Tom");
callLocal();