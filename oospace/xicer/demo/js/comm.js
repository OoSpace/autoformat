    //事件绑定
    function addEvent(obj,sEvent,fn){
     if(obj.attachEvent){
     obj.attachEvent("on"+sEvent,fn);
     }else{
     obj.addEventListener(sEvent,fn,false);
     };
    };
    //事件解除绑定
    function removeEvent(obj,sEvent,fn){
     if(obj.detachEvent){
     obj.detachEvent("on"+sEvent,fn);
     }else{
     obj.removeEventListener(sEvent,fn,false);
     };
    };
    function addLoadEvent(func) {
     var oldonload = window.onload;//得到上一个onload事件的函数
     if (typeof window.onload != 'function') {//判断类型是否为'function',注意typeof返回的是字符串
     window.onload = func;
     } else { 
         window.onload = function() {
         oldonload();//调用之前覆盖的onload事件的函数
         func();//调用当前事件函数
         }
     }
    }
    //获取事件对象详细信息
    function getObject(e){
    	var ev=e||window.event;//事件对象
    	var target=ev.target||ev.srcElement;//事件源
    	var elmts=target.nodeName.toLowerCase();//事件源的名字
    	var cls=target.getAttribute("class");//类名
    	return{
    		event:function(){
    			return ev;
    		},
    		target:function(){
    			return target;
    		},
    		elmts:function(){
    			return elmts;
    		},
    		cls:function(){
    			return cls;
    		}
    	}
    }