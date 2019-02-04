

class Data{
	//생성자 함수로 데이터가 저장될 빈 배열을 생성
	constructor(){
		this._db = [];
	}
	
	//인수값으로 전달받은 데이터를 배열에 저장해주는 메서드
	insert(data){
		if(!data) return;

		let post = {
			title : data.title,		
			date : new Date()
		};
		this._db.unshift(post);	
		console.log(this._db);
	}
}


class InputEvent{
	constructor({save}){ //해당 클래스로 인스턴스 생성시 외부에서 콜백을 전달받음
		
		this.$title = document.getElementById("title");
		this.$btn = document.getElementById("send");
		this.$btnCancel = document.getElementById("cancel");
		this.save = save;			
		let self = this;
		
		self.$btn.onclick = function(){		
			//버튼을 클릭시 해당요소의 value값을 구함
			let titleValue = self.$title.value;		

			let dataValue = {
				title : titleValue
			};	

			//input안의 입력값을 비움
			self.$title.value="";		
			
			//save인수로 전달받은 콜백함수에 dataValue객체를 인수로 넣어 데이터값 저장
			self.save(dataValue);						
		};

		//취소 버튼 클릭시 input의 내용을 비움
		self.$btnCancel.onclick = function(){
			self.$title.value="";
		};		
	}
}


//Data클래스로부터 인스턴스 생성
//Data클래스안의 insert()사용가능
let data = new Data();


//InputEvent클새스에서 인스턴스를 생성
//인스턴스 생성할때 인수값으로 Data모듈에 있는 저장함수를 콜백으로 전달
let inputEvent = new InputEvent({
	save : function(value){		
		data.insert(value);		
	}
});



