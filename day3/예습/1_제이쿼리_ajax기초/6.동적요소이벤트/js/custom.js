$(document).ready(function(){	

	$("button").on("click",function(){
		$(".btns").append('<li>new btn</li>');
	});

	/*
	$(".btns li").live("click",function(){
		alert("You clicked");
	});
	*/

	$("body").on("click",".btns li",function(){
		alert("You clicked");
	});

	
});










