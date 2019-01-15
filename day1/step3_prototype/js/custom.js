$(document).ready(function(){
	var tab1 = new Tab('.tabBox1');	
});

function Tab(selector){
	this.$tab;
	this.$tab_a;
	this.$tab_div;		

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
	this.$tab_a.removeClass('on');
	$(el).addClass('on');
}
Tab.prototype.activatePanel = function(el){
	this.$tab_div.hide();
	$(el).show();
}












