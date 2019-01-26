$(document).ready(function(){	
	
	// $(".btns a").on("click",function(e){
	// 	e.preventDefault();
	// 	var url = $(this).attr("href");
	// 	callData(url);
	// });


	// function callData(target){
	// 	$.ajax({
	// 		url :"data/"+target
	// 	})
	// 	.success(function(data){
	// 		$(".wrap").html(data);
	// 	})
	// 	.error(function(){
	// 		alert("Fail to load Data.")
	// 	});
	// }
	
	
	/*

	$.ajax({
		url: '실시간으로 불러올 데이터 타켓주소',
		success : function(data){
			데이터가 url로 성공적으로 불러와졌을때 처리할 구문
			데이터가 url로 불로오는 데 실패했을 때 처리 할 구문
		},
		error : function(){

		}
	})
	

	$.ajax({
		url :
	})
	.success(function(data){

	})
	.error(function(){

	})
	
	*/

	$.ajax({
		url : 'data/add1.html'
	})
	.success(function(data){
		$('.wrap').html(data);
	})
});






