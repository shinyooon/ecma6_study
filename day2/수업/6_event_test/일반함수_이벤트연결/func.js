window.onload = function(){
    // var btn1 = document.getElementById('btn1');
    // console.log(btn1);
    // var btn2 = document.getElementsByClassName('btns');
    // console.log(btn2[0]);
    var btn = document.getElementsByTagName('button');
    //console.log(btn3[0]);
    var len = btn.length;

    for(var i=0;i<len;i++){
        //console.log(i);
        (function(i){
            btn[i].onclick = function(){
                console.log(i);
            }
        })(i);
    }

    /*
    원래대로라면 아래와 같이 코드가 실행되야됨
    btn[0].onclick = function(){console.log(0)}
    btn[1].onclick = function(){console.log(1)}
    btn[2].onclick = function(){console.log(2)}
    
    블로안에 있는 명령어와 변수가 호이스팅이 발생함
    i=3; function(){console.log(i)}

    **해결방법
    let 사용 
    즉시실행함수 사용
    */
}