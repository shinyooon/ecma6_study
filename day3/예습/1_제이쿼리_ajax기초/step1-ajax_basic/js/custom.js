$(document).ready(function(){	
	
	/*
	$.ajax({
		url : "data/add2.html",
		beforeSend : function(){
			console.log("data 준비중")
		},
		success : function(data){
			$(".wrap").html(data);
		},
		error : function(){
			alert("Fail to load Data.")
		}
	});
	*/

	$.ajax({
		url :"data/add3.html"
	})
	.success(function(data){
		$(".wrap").html(data);
	})
	.error(function(){
		alert("Fail to load Data.")
	});
	
});






