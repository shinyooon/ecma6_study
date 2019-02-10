
const url = 'https://api.instagram.com/v1/users/self/media/recent'; 
const token = "2311280572.1677ed0.e6fb91b5ca574246974c3b807fff2772";
const count = 5;
const $wrap = document.getElementById('wrap');
/*

실제 넘어가는 주소
url : https://api.instagram.com/v1/users/self/media/recent?access_token=2311280572.1677ed0.e6fb91b5ca574246974c3b807fff2772&count=5
*/

// fetch()
// 	.then(
// 		function(data){
// 			return data.json();
// 		}
// 	).then(
// 		function(data){
// 			console.log(data)
// 		}
// 	)


const fetchData = function(url){
	return fetch(url).then(data =>
		data.json()
	).then(
		data => {
			if(data) {
				return Promise.resolve(data);
			}else{
				return Promise.reject();
			}
		}
	)
	
}

fetchData(`${url}?access_token=${token}&count=${count}`).then(data =>{
	data.data.map((item,index)=>{
		console.log(item);
		let $newDiv = document.createElement('div');
		let $newImg = document.createElement('img');
		let $newA = document.createElement('a');
		let newSrc = document.createAttribute('src');
		let newHref = document.createAttribute('href');
		let newTarget = document.createAttribute('target');

		$newDiv.classList.add('item');
		newSrc.value = item.images.thumbnail.url;
		newHref.value = item.link;
		newTarget.value='_blank';

		$newImg.setAttributeNode(newSrc);
		$newA.setAttributeNode(newHref);
		$newA.setAttributeNode(newTarget);

		$wrap.appendChild($newDiv);
		$newA.appendChild($newImg);
		$newDiv.appendChild($newA);

		console.log('인스타그램 데이터를 불러왔습니다.')

	});
}).catch(error => {
	console.log(error);
	console.log('data를 불러오는데 실패했습니다. 3초뒤에 이전 페이지로 넘어갑니다.')
}).then( 
	()=>{
		console.log('masonry 플러그인을 연결합니다.');
	}
)	
