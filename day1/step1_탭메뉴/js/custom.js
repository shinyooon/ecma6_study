var $nav_li, $nav_a, $panel_li;

$(document).ready(function(){
	$nav_li = $('.navi>li');
	$nav_a = $nav_li.children('a');
	$panel_li = $('.panel>li');

	$('.navi>li').on('click',function(e){
		e.preventDefault();
		var i = $(this).index();

		activate_btn(i);
		activate_panel(i);

	});
});

function TabMenu($el){
	this.$el = el;
	this.$navi = this.$el.find('.navi')
	this.$navi_a = this.$navi.children('a');
	this.$nav_li = this.$navi.children('li');
	this.$panel = $.$el.find('.panel');
	this.$panel_li = this.$panel.child('li');
}

function activate_btn(index){
	$nav_a.removeClass('on');
	$nav_li.eq(index).children('a').addClass('on');
}
function activate_panel(index){
	$panel_li.removeClass('on');
	$panel_li.eq(index).addClass('on');
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







