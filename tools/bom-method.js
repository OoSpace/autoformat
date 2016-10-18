/**
 * Created by oospace on 2016/10/18.
 */

/**
 * 定时器
 * @param f
 * @param start
 * @param interval
 * @param end
 */
function invoke(f,start,interval,end) {
    if(!start)start=0;
    if(arguments.length<=2){
        setTimeout(f,start);
    }else {
        setTimeout(repeat,start);
        function repeat() {
            var h=setInterval(f,interval);
            if(end)setTimeout(function () {
                clearInterval(h)
            },end);
        }
    }
}
/**
 * 获取url中的参数对，并返回一个对象
 * var args=urlArgs();
 * q=args.q||'';
 * var n=args.n?parseInt(args.n):10;
 */
function urlArgs() {
    var args={};
    var query=location.search.substring(1);
    var pairs=query.split('&');
    for(var i=0,lg=pairs.length;i<lg;i++){
        var pos=pairs[i].indexOf('=');
        if(pos==-1)continue;
        var name=pairs[i].substring(0,pos);
        var value=paris[i].substring(pos+1);
        value=decodeURIComponent(value);
        args[name]=value;
    }
    return args;
}
//打开不带地址栏和状态栏的新窗口
var screenWidth=window.screen.availWidth;
var win =
    window.open(
        'http://xicer.com',
        '_blank',
        'z-index=1,width=300px,height=100px,top=300px,left='
        +(screenWidth/2-150)
        +'px');
win.document.write("你好");
//注：打开的url可为空，当url不为空时，即使后来被覆盖掉，但是如果F5刷新页面也会重新显示url的页面
//IE8下url不能被覆盖
//注意，关键是z-index=1这句，也可改为top=1,不过感觉不如前者标准