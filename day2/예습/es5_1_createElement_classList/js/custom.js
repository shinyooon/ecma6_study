/*
document.createElement("태그명") : 해당 태그노드를 동적으로 생성
document.createAttribue("속성명 ") : 해당 속성노드를 동적으로 생성
생성된DOM.setAttrubuteNode(속성노드) : 동적으로 생성된 DOM노드에 속성노드를 연결
부모DOM.appendChild(자식DOM) : 부모 DOM노드에 자식DOM을 삽입
배열.forEach(반복요소, 순서값) : 배열의 갯수만큼 자동 반복
DOM.classList.add("클래스명") : 클래스명 추가
DOM.classList.remove("클래스명") : 클래스명 제거
*/

window.onload = function(){

  var imgArr = ["s1.jpg","s2.jpg","s3.jpg","s4.jpg","s5.jpg"];
  var wrap = document.getElementById("wrap");

  imgArr.forEach(function(item,i){
    console.log(item);

    var newDiv = document.createElement("div");
    var newImg = document.createElement("img");
    var newSrc = document.createAttribute("src");

    newDiv.classList.add("item");
    newDiv.classList.add("item"+i);

    newSrc.value= "img/"+item;
    newImg.setAttributeNode(newSrc);

    wrap.appendChild(newDiv);
    newDiv.appendChild(newImg);
  });

}