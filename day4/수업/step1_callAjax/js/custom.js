
var $wrap; 
var url = 'https://api.instagram.com/v1/users/self/media/recent'; 
var token = "2311280572.1677ed0.e6fb91b5ca574246974c3b807fff2772";
var count = 5;

/*

실제 넘어가는 주소
url : https://api.instagram.com/v1/users/self/media/recent?access_token=2311280572.1677ed0.e6fb91b5ca574246974c3b807fff2772&count=5

*/

$(document).ready(function(){	
	getData(url,function(){
		addition(1);
	});
});


//인스타그램 데이터호출 함수정의
function getData(target,callback){

	$.ajax({		
		url : target, 
		dataType : 'jsonp', // 다른 서버상에 있는 데이터를 불러올때에는 jsonp형태로 불러옴
		data : {
			access_token : token,
			count : count
		}		
	})
	.success(function(data){
		var insta = data.data;
		//console.log(insta);
		$(insta).each(function(index){
			console.log(this);
			$('#wrap').append(
				$('<div class="item"></div>').append(
					$('<a href='+ this.link+' target="_blank"></a>').append(
						$('<img />').attr('src',this.images.thumbnail.url)
					)
				)
			);
		});
		console.log('데이터파싱 완료');
		callback();	
	})
	.error(function(){
		alert("fail to load instagram api");
	});		
}

function addition(k){
	console.log('masonry 플로그인을 연결합니다.'+k);
}

