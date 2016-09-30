/**
 * Created by oospace on 2016/9/29.
 */
var array1 = [12 , "foo" , {name :"Joe"} , -2458];
var array2 = ["Doe" , 555 , 100];
Array.prototype.push.apply(array1, array2);
console.log(array1)
var argArray = Array.prototype.slice.call(array1);
console.log(typeof argArray)
function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function isArray(obj){
    return Object.prototype.toString.call(obj) === '[object Array]' ;
}
Array.isArray(obj); // its a new Array method

var  numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
var maxInNumbers = Math.max.apply(Math, numbers);
var minInNumbers = Math.min.apply(Math, numbers);

var squares = [1,2,3,4].map(function (val) {
    return val * val;
});
function escapeHTML(text) {
    var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", "\"": "&quot;"};
    return text.replace(/[<>&"]/g, function(character) {
        return replacements[character];
    });
}
//比如，一般不要这样：
var min = Math.min(a,b);
A.push(v);
//可以这样来代替：
var min = a < b ? a : b;
A[A.length] = v;

var timerID = 0;
function keepAlive() {
    var timeout = 15000;
    if (webSocket.readyState == webSocket.OPEN) {
        webSocket.send('');
    }
    timerId = setTimeout(keepAlive, timeout);
}
function cancelKeepAlive() {
    if (timerId) {
        cancelTimeout(timerId);
    }
}

var xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        clearTimeout(timeout);
        // do something with response data
    }
}
var timeout = setTimeout( function () {
    xhr.abort(); // call error callback
}, 60*1000 /* timeout after a minute */ );
xhr.open('GET', url, true);
xhr.send();