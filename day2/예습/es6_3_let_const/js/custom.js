/*
    let : 블록단위 지역변수 선언시
    const : 바뀌면 안되는 고정된 값을 선언시
    hoisting : 블록안에 선언된 지역변수가 강제로 끌어올려져서 전역변수가 되는 현상
*/

/*
var dbs = "DB정보";
dbs= "다른값";
*/

/*
const dbs="DB정보";
dbs="다른값";

console.log(dbs);
*/

/*
//함수안에서 선언된 지역변수는 함수외부에서 호출이 불가능
function abc(){
    var name = "Andy";
}
abc();
console.log("지역변수"+name);
*/

if(true){
    let name="Tom";
}
console.log("호이스팅"+name);
