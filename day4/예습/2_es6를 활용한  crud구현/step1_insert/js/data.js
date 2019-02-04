export default class{

	//생성자 함수로 데이터가 저장될 빈 배열을 생성
	constructor(){
		this._db = [];
	}

	
	//인수값으로 전달받은 데이터를 배열에 저장해주는 메서드
	insert(data){
		if(!data) return;

		let post = {
			title : data.title,		
			date : this.formatDate()
		};
		this._db.unshift(post);	
		console.log(this._db);
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