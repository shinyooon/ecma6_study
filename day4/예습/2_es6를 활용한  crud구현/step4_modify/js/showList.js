export default class{

	constructor({del, modify}){
		this.del = del;
		this.modify = modify;	
		this.$showBox = document.getElementById("showBox");
		this.$title = document.getElementById("title");
	}

	//인수값으로 데이터를 받아서 동적으로 태그를 생성후 DOM에 삽입해주는 메서드
	render(db){	
		this.$showBox.innerHTML="";

		//map으로 반복을 돌면서 태그를 동적으로 생성
		db.map((data)=>{
			let self = this;
			
			//div노드 생성후 클래스명 "post"적용
			let item = document.createElement("div");	
			item.classList.add("post");		

			//post DOM안에 삽입할 문자열 생성
			let tags = `						
				<h2>${data.title}</h2>		
				<span>${data.date}</span>	
				<input class="btnModify" type="button" value="modify" />
				<input class="btnDel" type="button" value="delete" />
			`;	
			item.innerHTML=tags;			
			self.$showBox.appendChild(item);	
			
		
			//삭제버튼 갯수만큼 반복을 돌면서 즉시실행함수로 해당버튼 클릭시 순서값을 콜백으로 넘어온 del함수에 인수로 넣음
			let $btnDel = document.getElementsByClassName("btnDel");
			for(let k=0; k<$btnDel.length; k++){
				
				(function(index){
					$btnDel[k].onclick = function(){
						self.del(index);														
					}					
				})(k);
			}


			//수정버튼 갯수만큼 반복을 돌면서 즉시실행함수로 해당버튼 클릭시 순서값을 콜백으로 넘어온 del함수에 인수로 넣음			
			let $btnModify = document.getElementsByClassName("btnModify");
			for(let k=0; k<$btnModify.length; k++){

				(function(index){
					$btnModify[k].onclick = function(){
						self.modify(index);	

						//input창에 수정할글 입력
						let inputTitle = this.parentElement.children[0].innerText;self.$title.value = inputTitle;	
					}					
				})(k);
			}
			
		});

	}



}