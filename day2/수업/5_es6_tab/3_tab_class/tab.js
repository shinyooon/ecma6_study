window.onload = function(){
    var tab1 = new Tab('tab1');
}

class Tab {

    constructor(sel){
        this.el;
        this.btns;
        this.boxs;
    
        this.initDOM(sel);
        this.bindingEvent();
    }

    initDOM(el){
        this.el = document.getElementById(el);
        this.btns = this.el.querySelectorAll('ul>li');
        this.boxs = this.el.querySelectorAll('div');
    }

    bindingEvent(){
        var this2 = this; //인스턴스객체의 this
        for(var i=0; i<this.btns.length; i++){
            this.btns[i].addEventListener('click', function(e){
                e.preventDefault();
                this2.activateBox(this); //이벤트가 발생한 li의 this
             } );    
        }
    }


    activateBox(el){ //el는 이벤트가 발생한 li  
        var thisID = el.querySelector('a').getAttribute('href'); 
        
        for(var i=0; i<this.boxs.length; i++){        
            this.btns[i].classList.remove('on');
            el.classList.add('on');
            
            if(this.boxs[i].getAttribute('id')==thisID){
                this.boxs[i].classList.add('on');
            }else{
                this.boxs[i].classList.remove('on');
            }
        }       
    }


}















