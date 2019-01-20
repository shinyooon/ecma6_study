
//DOM 등록
var el = document.getElementById('tab1');
var btns = el.querySelectorAll('ul>li');
var boxs = el.querySelectorAll('div');

//버튼수만큼 tab함수 이벤트 연결
for(var i=0; i<btns.length; i++){
	btns[i].addEventListener('click',activateBox);
}

//tab함수 정의
function activateBox(e){
    e.preventDefault();

    //클릭한 버튼의 id값 찾기
    var thisID = this.querySelector('a').getAttribute('href');      

    //박수 갯수만큼 반복돌기
    for(var i=0; i<boxs.length; i++){

        //버튼활성화
        btns[i].classList.remove('on');
        this.classList.add('on');

        //클릭한 버튼의 아이디값과 매칭이 되면 활성화 아니면 비활성화
        if(boxs[i].getAttribute('id')==thisID){
            boxs[i].classList.add('on');
        }else{
            boxs[i].classList.remove('on');
        }
    }
}
