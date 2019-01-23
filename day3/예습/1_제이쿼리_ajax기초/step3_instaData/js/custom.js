$(document).ready(function(){	
	
	$.ajax({
		url : 'https://api.instagram.com/v1/users/self/media/recent',
		dataType : 'jsonp',
		data : {
			access_token : '2311280572.1677ed0.e6fb91b5ca574246974c3b807fff2772',
			count : 3
		},
		success : function(data){
			console.log(data);	
		},
		error : function(){
			alert("fail to load instagram api");
		}
	});
	
});




/*
	$.ajax({
		url : 'https://api.instagram.com/v1/users/self/media/recent',
		dataType : 'jsonp',
		data : {
			access_token : '2311280572.1677ed0.e6fb91b5ca574246974c3b807fff2772',
			count : 33
		}		
	})
	.success(function(data){
		console.log(data);			
	})
	.error(function(){
		alert("fail to load instagram api");
	});
	*/






