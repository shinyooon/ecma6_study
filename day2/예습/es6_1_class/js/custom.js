
/*
//es5 생성자함수를 활용한 클래스
function FontStyle(el,color){
    this.el = el;
}
FontStyle.prototype.changeColor= function(color){
    document.getElementById(this.el).style.color= color
}

window.onload = function(){
    var t1 = new FontStyle("title1");
    t1.changeColor("red");
}
*/

class FontStyle {
    constructor(el){
        this.el = el;
    }
    changeColor(color){
        document.getElementById(this.el).style.color= color;
    }
    changeSize(size){
        document.getElementById(this.el).style.fontSize= size;
    }
}

class BoxStyle extends FontStyle{
    constructor(el){
        super(el);
    }
    changeWidth(wid){
        document.getElementById(this.el).style.width= wid;
    }
    changeHeight(ht){
        document.getElementById(this.el).style.height= ht;
    }
}

window.onload = function(){
    var f1 = new FontStyle("title1");
    f1.changeColor("green");
    f1.changeSize("50px");

    var b1 = new BoxStyle("box1");
    b1.changeWidth("300px");
    b1.changeHeight("300px");
    b1.changeSize("50px");
    b1.changeColor("aqua");
}


	










