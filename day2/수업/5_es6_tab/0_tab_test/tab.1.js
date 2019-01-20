var frame = document.getElementById('tab1');
var btns = frame.querySelectorAll('ul>li');
var boxs = frame.querySelectorAll('div');

for(var i=0; i<btns.length;i++){
    btns[i].addEventListener('click',activateBox);
    //addEventListenr내에 i를 사용하지 않기때문에 호이스팅이 발생하지x 굳이 즉시실행 함수로 묶을 필요가 없음
    // (function(i){
        
    // })(i);
}

function activateBox(e){
    e.preventDefault();
    var thisID = this.querySelector('a').getAttribute('href'); //this : 각각의 btns[i]를 의미
    //console.log(thisID);

    for(var i=0;i<boxs.length;i++){
        btns[i].classList.remove('on');
        if(thisID===boxs[i].getAttribute('id')){
            boxs[i].classList.add('on');
        }else{
            boxs[i].classList.remove('on');
        }
    }
    this.classList.add('on');
}
//console.log(btns);