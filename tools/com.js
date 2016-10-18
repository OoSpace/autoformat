/**
 * Created by oospace on 2016/10/17.
 * css stylesheet
 */
@importScripts('tools/com-method.js')

var e=document.getElementById('id');
//cssStyleDeclaration 设置元素内联样式
e.style.opacity='0';//保持不变

e.style.fontSize='24px';//一般样式去除连接线

e.style.cssFloat='left';//保留字样式 添加 css前缀

e.style.margin=topMargin+"px "+rightMargin+"px "+bottomMargin+"px "+leftMargin+"px";//复合样式,注意px后的空格

e.style.clip='rect('+top+','+right+','+bottom+','+left+')';//相对于元素的左上角

//     值	     描述
// border-box	背景被裁剪到边框盒。
// padding-box	背景被裁剪到内边距框。
// content-box	背景被裁剪到内容框。
e.style.backgroundClip='border-box';
//该属性指定了背景在哪些区域可以显示，但与背景开始绘制的位置无关，背景的绘制的位置可以出现在不显示背景的区域，这时就相当于背景图片被不显示背景的区域裁剪了一部分一样。

// 值	        描述
// padding-box	背景图像相对于内边距框来定位。
// border-box	背景图像相对于边框盒来定位。
// content-box	背景图像相对于内容框来定位。
e.style.backgroundOrigin='border-box';
//该属性指定了背景从哪个区域(边框、补白或内容)开始绘制,但也仅仅能控制背景开始绘制的位置，你可以用这个属性在边框上绘制背景，但边框上的背景显不显示出来那就要由background-clip来决定了

//更方便的集中设置样式
e.setAttribute('style',s);//
e.style.cssText=s

//集中读取样式
s=e.getAttribute('style');
s=e.style.cssText;

//读取元素的内联样式
/**
 * e 某HTML元素
 * 第二个参数一般是null或空字符串，也可以是伪类如 ':before' ':after' ':first-line' ':first-letter' 等
 *
 * 1，改方法的样式是只读的
 * 2，样式的值是绝对值，百分比等都会转换为'px'为单位， 颜色值为'rgb(#,#,#)'或'rgba(#,#,#)'
 * 3, 只计算基本属性不计算复合属性，如'margin' ,可以用'marginTop'等替代
 * 4，计算样式的cssText 未定义
 * 5，兼容IE8+
 * 6, IE8- 可以使用e.currentStyle属性替代，但是相对值不会转化为绝对值，如 %  em red 等
 * 7，该方法返回字体样式是字符串，而不是当前使用的字体，top或left也可能是auto，需要注意
 * 8，另一种获取元素的几何尺寸的方法 e.getBoundingClientRect(),包含top，right,bottom,left的位置，有的浏览器有width和height
 */
var style=window.getComputedStyle(e,null);//窗口对象方法
var size=parseInt(style.fontSize);

//通过css类修改样式
e.className='on'
e.classList=['on','animation'];//H5支持

//通过样式表的开关来修改样式（<link> <style>标签）
document.styleSheets[0].disabled=true;

//直接修改样式表规则
document.styleSheets[0].cssRules[0];//标准 包含@import @page等
document.styleSheets[0].rules[0];//IE， 不包含

//创建新的样式表
document.createStyleSheet();//IE
document.createElement('style');