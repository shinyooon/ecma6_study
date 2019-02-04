//외부 모듈을 임포트로 불러오기
import Data from './js/data.js';
import InputEvent from './js/inputEvent.js';
import ShowList from './js/showList.js';


//Data모듈로부터 인스턴스 생성
//Data모듈안의 insert(), read(), delete() 호출가능
let data = new Data();


//ShowList모듈로부터 인스턴스 생성
//ShowList모듈안의 render()호출가능
let showList = new ShowList({ //인스턴스 생성시 del함수 콜백으로 전달
	del:function(index){
		data.delete(index);
		showList.render(data.read());
	}
});

//기존 배열에 데이터가 있을시 화면에 출력
showList.render(data.read());


//InputEvent모듈에서 인스턴스를 생성
//인스턴스 생성할때 인수값으로 Data모듈에 있는 저장함수를 콜백으로 전달
let inputEvent = new InputEvent({
	save : function(value){		
		data.insert(value);
		showList.render(data.read());		
	}
});


