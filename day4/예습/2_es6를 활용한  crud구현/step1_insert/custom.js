//외부 모듈을 임포트로 불러오기
import Data from './js/data.js';
import InputEvent from './js/inputEvent.js';


//Data모듈로부터 인스턴스 생성
//Data모듈안의 insert()
let data = new Data();


//InputEvent모듈에서 인스턴스를 생성
//인스턴스 생성할때 인수값으로 Data모듈에 있는 저장함수를 콜백으로 전달
let inputEvent = new InputEvent({
	save : function(value){		
		data.insert(value);		
	}
});


