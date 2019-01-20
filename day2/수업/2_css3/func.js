
window.onload = function(){	
	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var wrap = document.getElementById("wrap");
	
	btn1.addEventListener("click",  function(){addClass(wrap)}  );
	btn2.addEventListener("click", function(){removeClass(wrap)}  );	
};


function addClass(sel){
	sel.className="on";
}
function removeClass(sel){
	sel.className="";
}




