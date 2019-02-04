/* 
	자바스크립트로 개발을 진행할때 객체지향에 맞게 클래스를 써야하는 이유
	--특정 반복되고 자주쓰는 기능들을 미리 클래스로 정의해 이벤트가 발생할때마다 인스턴스를 생성해 재활용
	--특정 클래스에 그룹으로 묶여야 되는 메소드들을 하나의 카테고리로 패키징해 관리가 가능

	클래스를 활용한 개발의 흐름
	--보통 기능관련 클래스와 이벤트관련 클래스를 따로 만듬
	--위와 같이 만드는 이유는 이벤트와 메소드를 서로 분리하여 관리하기 위함
	--기능관련 클래스 : 특정기능을 실행할수 있는 메소드만 품고있다 -- 자체적으로 이벤트 발생 불가
	--이벤트관련 클래스 : 이벤트를 발생시킬수 있음 -- 이벤트만 호출가능하고 클래스 자체에 메서드가 없으므로 인수를 통해 외부에서 메서드를 불러와야됨

	--작업의 흐름) 
	----> 기능클래스로부터 인스턴스를 생성해 메서드들을 활성화해서 사용가능하도록 준비
	----> 이벤트 클래스에서 인스턴스를 생성해 이벤트 기능을 활성화 시킬때 미리 준비된 메서드를 인수로 받아와 이벤트와 결합시킴 

*/

class Data{
	constructor(){
		this._db = [];
	}

	insert(data){
		this._db.push(data);
		console.log(this._db);
	}
}


class InputEvent{
	constructor(callback){
		this.$title = document.getElementById('title');
		this.$btn = document.getElementById('send');
		this.save = callback;

		let self = this;

		self.$btn.onclick = function(){
			let titleValue = self.$title.value;		
			self.save(titleValue);
			self.$title.value="";
		}
	}
}

let data = new Data();


let inputEvent = new InputEvent(
	function(value){
		data.insert(value)
	}	
);

