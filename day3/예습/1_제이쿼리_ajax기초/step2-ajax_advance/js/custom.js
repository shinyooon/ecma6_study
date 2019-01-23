$(document).ready(function(){	
	
	$(".btns a").on("click",function(e){
		e.preventDefault();
		var url = $(this).attr("href");
		callData(url);
	});


	function callData(target){
		$.ajax({
			url :"data/"+target
		})
		.success(function(data){
			$(".wrap").html(data);
		})
		.error(function(){
			alert("Fail to load Data.")
		});
	}
	
	
});






