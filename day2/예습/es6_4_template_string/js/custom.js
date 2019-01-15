window.onload = function(){

    const wrap = document.getElementById("wrap");
    const url = "http://www.naver.com";
    const text = "naver";
    
    //let tags = '<a href="'+url+'">'+text+'</a>';
    let tags = `<a href="${url}">${text}</a>`;
    wrap.innerHTML = tags;

}


