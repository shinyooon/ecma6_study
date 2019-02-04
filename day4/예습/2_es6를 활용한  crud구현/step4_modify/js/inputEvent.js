export default class{

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
		}		
	}

}

