/*
  callback
  -함수를 호출할때 인수(매개변수)로 다시 함수를 넣어서 호출
  -외부에 있는 함수를 다른 함수에서 언제든 자유롭게 불러와 추가적인 작업이 가능
  -기능별로 함수를 잘게 쪼개고 해당 함수들을 또다른 함수에서 전달받아 호출하기 위함
*/


function master(callback1, callback2){
  console.log("콜백함수를 실행합니다.");
  callback1();
  callback2();
}

function component1(){
  console.log("나는 첫번째 컴포넌트 함수입니다.");
}

function component2(){
  console.log("나는 두번째 컴포넌트 함수입니다.")
}

master(component1, component2);

