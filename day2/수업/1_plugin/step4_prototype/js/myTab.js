/*
	즉시실행함수 : 함수를 정의함과 동시에 실행
	즉시실행함수를 쓰는이유 : 
	
	1. $예약어 충돌방지
	2. 호이스팅 방지

	(정의부분)(인수);
	(function($){

	})(jQuery);

*/


(function($){


	function Tab(selector,option){
		this.$tab;
		this.$tab_a;
		this.$tab_div;		
		this.option = option;
		this.initDOM(selector);
		this.bindingEvent();	
	}
	Tab.prototype.initDOM = function(selector){
		this.$tab = $(selector);
		this.$tab_a = this.$tab.children('ul').find('a');
		this.$tab_div = this.$tab.children('div').children('div');
	}
	Tab.prototype.bindingEvent = function(){
		var this2 = this;
		this2.$tab_a.on('click',function(e){
			e.preventDefault();
			var target = $(this).attr('href');
	
			this2.activateBtn(this);
			this2.activatePanel(target);		
		});
	}
	Tab.prototype.activateBtn = function(el){
		this.$tab_a.removeClass(this.option.active_name);
		$(el).addClass(this.option.active_name);
	}
	Tab.prototype.activatePanel = function(el){
		this.$tab_div.hide();
		$(el).show();
	}
	$.defaults = {
		active_name : 'on'
	};
	$.fn.myTab = function(option){
		var option2 = $.extend({},$.defaults,option);
		var tab = new Tab(this,option2);
	}
})(jQuery);














