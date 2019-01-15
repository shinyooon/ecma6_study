(function($){

	function Tab(selector, option){
		this.$tab;
		this.$tab_a;
		this.$tab_div;	
		this.option = option	
	
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
		active_name : "on"
	}

	$.fn.myTab = function(option){
		option = $.extend({}, $.defaults, option);
		var tab = new Tab(this, option);
	}
	

})(jQuery);













