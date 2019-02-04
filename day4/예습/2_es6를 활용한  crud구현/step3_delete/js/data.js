export default class{

	//생성자 함수로 데이터가 저장될 빈 배열을 생성
	constructor(){
		this._db = [
			{ title :"title1", date:"2018-09-18"},
			{ title :"title2", date:"2018-09-18"},
			{ title :"title3", date:"2018-09-18"}	
		];
	}


	//배열의 데이터를 외부로 내보내는 메서드
	read(){
		return this._db;
	}

	
	//인수값으로 전달받은 데이터를 배열에 저장해주는 메서드
	insert(data){
		if(!data) return;

		let post = {
			title : data.title,		
			date : this.formatDate()
		};
		this._db.unshift(post);	
	}


	//인수값으로 전달받은 순서값으로 배열의 데이터를 삭제
	delete(index){
		this._db.splice(index, 1);
	}


	//날짜를 보기좋게 정리해주는 메서드
	formatDate() {
	    let date = new Date();
	    let month = '' + (date.getMonth() + 1);
	    let day = '' + date.getDate();
	    let year = date.getFullYear();

	    if (month.length < 2) month = '0' + month;
	    if (day.length < 2) day = '0' + day;

	    return [year, month, day].join('-');
	}
}