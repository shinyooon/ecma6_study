window.onload = function(){
    var tab1 = new Tab('tab1');
}

function Tab(sel){
    this.frame;
    this.btns;
    this.boxs;
    this.initDOM(sel);
    this.bindingEvent();
}

Tab.prototype.initDOM = function(el){
    this.frame = document.getElementById('tab1');
    this.btns = this.frame.querySelectorAll('ul>li');
    this.boxs = this.frame.querySelectorAll('div');
}

Tab.prototype.bindingEvent = function(){
    var this2 = this;
    for(var i=0; i<this2.btns.length;i++){
        this2.btns[i].addEventListener('click',function(e){
            e.preventDefault();
            this2.activateBox(this);
        });
    }
}

Tab.prototype.activateBox = function(self){
    var thisID = self.querySelector('a').getAttribute('href'); //this : 각각의 btns[i]를 의미
    //console.log(thisID);

    for(var i=0;i<this.boxs.length;i++){
        this.btns[i].classList.remove('on');
        if(thisID===this.boxs[i].getAttribute('id')){
            this.boxs[i].classList.add('on');
        }else{
            this.boxs[i].classList.remove('on');
        }
    }
    self.classList.add('on');
}
//console.log(btns);