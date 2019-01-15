

$(document).ready(function(){
	var tab = new Tab("#tab");
});

function Tab($el){
	this.$tab;
	this.$navi_a ;
	this.$nav_li ;
	this.$panel_li;

	this.initDOM = function($el){
		this.$tab = $($el);
		this.$nav_li = this.$tab.children('.navi').children('li');
		this.$nav_a = this.$nav_li.children('a');
		this.$panel_li = this.$tab.children('.panel').children('li');
	}

	this.activate_btn = function(index){
		this.$nav_a.removeClass('on');
		this.$nav_li.eq(index).children('a').addClass('on');
	}
	this.activate_panel = function(index){
		this.$panel_li.removeClass('on');
		this.$panel_li.eq(index).addClass('on');
	}

	this.binding_event = function(){
		var this2 = this;
		$('.navi>li').on('click',function(e){
			e.preventDefault();
			var i = $(this).index();
			this2.activate_btn(i);
			this2.activate_panel(i);

		});
	}
	this.initDOM($el);
	this.binding_event();

}



/*var classA = [
	{
		name : '홍길동',
		age : 20,
		detail : function(){
			console.log('홍길동의 나이는 20살 입니다.')
		}
	},
	{
		name : '김영희',
		age : 30,
		detail : function(){
			console.log('김영희의 나이는 30살 입니다.')
		}
	},
];
classA[0].hobby ='soccer';
console.log(classA[0]);


*/







