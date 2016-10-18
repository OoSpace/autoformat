/**
 * Created by oospace on 2016/10/18.
 * css 方法
 */

/**
 *
 * @param e 相对定位的元素对象或元素的id
 * @param callback 动画结束调用的函数
 * @param distance 震动距离，默认5px
 * @param time 震动时间，默认500毫秒
 */
function shake(e,callback,distance,time) {
    e=typeof e ==='string'? document.getElementById(e):e;
    time=!time ? 500:time;
    distance=!distance?5:distance;

    var originalStyle=e.style.cssText;
    e.style.position='relative';
    var startTime=(new Date()).getTime();
    this.animate();

    this.animate=function(){
        var now=(new Date()).getTime();
        var elapsed=now-startTime;

        var fraction=elapsed/time;

        if(fraction<1){
            var x=distance*Math.sin(fraction*4*Math.PI);
            e.style.left=x+'px';

            setTimeout(this.call(),Math.min(25,time-elapsed));
        }else{
            e.style.cssText=originalStyle;
            callback?callback(e):null;
        }
    }

    /**
     *
     * @param e
     * @param complete
     * @param time
     */
    this.fadeOut=function (e,callback,time) {
        var ease=Math.sqrt;
        var start=(new Date()).getTime();
        this.animate();

        this.animate=function () {
            var elapsed=(new Date()).getTime()-start;
            var fraction=elapsed/time;

            if(fraction<1){
                var opacity=1-ease(fraction);
                e.style.opacity=String(opacity);

                setTimeout(this.call(),Math.min(25,time-elapsed));
            }else{
                e.style.opacity='0';
                callback?callback(e):null;
            }
        }
    }


}
/**
 *
 * 用指定的参数缩放元素e的文本尺寸
 * @param e
 * @param factor
 */
function scale(e,factor) {
    var size=parseInt(window.getComputedStyle(e,'').fontSize);
    e.style.fontSize=factor*size+'px';
}
/**
 * 用指定的参数改变元素e的背景色
 * @param e
 * @param factor
 */
function scaleColor(e,factor) {
    var color=window.getComputedStyle(e,'').backgroundColor;
    var components=color.match(/[\d\.]+/g)//解析r,g,b,a分量
    for(var i=0;i<3;i++){
        var x=Number(components[i]*factor);
        x=Math.round(Math.min(Math.max(x,0),255));//设置边界并取整
        components[i]=String(x);
    }
    if(components.length==3){
        e.style.backgroundColor='rgb('+components.join()+')';
    }else {
        e.style.backgroundColor='rgba('+components.join()+')'
    }
}

/**
 * 如果e有classList属性则返回，否则，返回一个为e模拟的DOMTokenList API的对象
 * 返回的对象有contains(),add(),remove(),toggle()和toString()等方法
 * 来检测和修改元素e的类的集合，如果classList是原生支持的，
 * 返回的类数组有length和数组索引属性,模拟DOMTokenList不是类数组对象
 * 但是他有一个toArray()方法来返回一个含元素类名的纯数组快照
 * @param e
 */
function classList(e) {
    if(e.classList)return e.classList;
    else return new CSSClassList(e);
}

function CSSClassList(e) {
    this.e=e;
}
CSSClassList.prototype.contains=function (c) {
    if(c.length===0 || c.indexOf(' ')!=-1){
        throw new Error('Invalid class name :'+c);
    }
    var classes=this.e.className;
    if(!classes)return false;
    if(classes===c)return true;

    return classes.search('\\b'+c+'\\b')!=-1;
}
CSSClassList.prototype.add=function (c) {
    if(this.contains(c))return;
    var classes=this.e.className;
    if(classes && classes[classes.length-1]!=-''){
        c=" "+c;
        this.e.className+=c;
    }
}
CSSClassList.prototype.remove=function (c) {
    if(c.length===0||c.indexOf(' ')!=-1){
        throw new Error('Invalid class name :'+c);
        var pattern =new RegExp('\\b'+c+'\\b\\s*','g');
        this.e.className=this.e.className.replace(pattern,'');
    }
}
CSSClassList.prototype.toggle=function (c) {
    if(this.contains(c)){
        this.remove(c);
        return false;
    }else {
        this.add(c);
        return true;
    }
}
CSSClassList.prototype.toString=function () {
    return this.e.className;
}
CSSClassList.prototype.toArray=function () {
    return this.e.className.match(/\b\w+\b/g)||[];
}

/**
 * 关闭样式表
 * @param num
 */
function disabledStylesheet(num) {
    if(typeof num ==='number'){
        document.styleSheets[num].disabled=true;
    }else{
        var sheets=document.querySelectorAll(num);
        for(var i=0;i<sheets.length;i++){
            sheets[i].disabled=true;
        }
    }
}

/**
 * 对文档添加一个样式表，用指定样式填充
 * @param styles 可以是对象或者字符串
 * 字符串则直接设置为样式
 * 对象则属性名为选择器，值为对应的样式
 */
function addStyles(styles) {
    var styleElt,styleSheet;
    if(document.createStyleSheet){
        styleSheet=document.createStyleSheet();
    }else {
        var head=document.getElementsByTagName('head')[0];
        styleElt=document.createElement('style');
        head.appendChild(styleElt);
        styleSheet=document.styleSheets[document.styleSheets.length-1];//这边万一有人把样式写在head外面估计就废了
    }
    if(typeof styles==='string'){
        if(styleElt)styleElt.innerHTML=styles;
        else styleSheet.cssText=styles; //IE
    }else{
        var i=0;
        for(selector in styles){
            if(styleSheet.insertRule){
                var rule=selector+'{'+styles[selector]+'}';
                styleSheet.insertRule(rule,i++);
            }else{
                styleSheet.addRule(selector,styles[selector],i++);
            }
        }
    }
}