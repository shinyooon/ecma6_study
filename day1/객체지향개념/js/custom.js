$(document).ready(function(){
	/*$('#title1').css({
		'color':'pink',
		'font-size' : '50px'
	});
	$('#title2').css({
		'color':'aqua',
		'font-size' : '20px'
	});*/

	//생성자함수
	//1. 선택자를 인스턴스로 전달

	function FontStyle(el,size,color){
		this.el = el;
		this.size = size;
		this.color= color;
		this.changeColor(this.color);
		this.changeSize(this.size)
	}
	//2. 공통된 기능을 메소드로 정의해서 자신의 프로토타입에 저장
	//3. 자체적으로 저장한 기능을 호출

	FontStyle.prototype.changeColor = function(color){
		$(this.el).css('color',color);
	}
	FontStyle.prototype.changeSize = function(size){
		$(this.el).css('font-size',size);
	}

	var b1 = new FontStyle('#title1','100px','pink');
	var b2 = new FontStyle('#title2','20px','aqua');

});



