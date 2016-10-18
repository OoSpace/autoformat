/**
 * Created by oospace on 2016/10/17.
 * browser
 */
//window
setTimeout()
setInterval()

//location
window.location===document.location //总是true，因为window对象和document对象的location属性都是引用的Location对象

document.URL//文档首次载入的URL静态字符串，如果用锚点重新定位如#mark，Location会改变，URL却不会改变

location.toString()==location.href;

location.protocol
location.host
location.hostname
location.port
location.pathname
location.hash //返回url中的片段标识符的部分
location.search()//返回的问号之后的url
location.assign(url);
location.replace(url);
location.reload(boolean);
location.search="?pageIndex=123";//这些分解属性可写，会跳转到下一个页面

//navigator 为了纪念网景浏览器
navigator.appName //web浏览器的全称，如""为了兼容，大部分都是'Netscape'
navigator.appVersion //版本
navigator.userAgent //浏览器的绝大部分信息
navigator.platform //运行浏览器的操作系统的信息字符串（可能是硬件）
navigator.onLine //
navigator.geolocation //地理位置
navigator.javaEnabled();//浏览器可以运行Java小程序时返回true;
navigator.cookieEnabled//非标准的方法，当浏览器可以保存永久cookie返回true,当cookie配置为视情况而定时，返回值可能不正确

//screen


//history
history.back(-1);//直接返回当前页的上一页，数据全部消息，是个新页面
history.go(-1);//也是返回当前页的上一页，不过表单里的数据全部还在
history.back(0);//刷新 
history.back(1);//前进 
history.back(-1);//后退
//如果窗口内包含多个子窗口，则有可能导致子窗口回退，而主窗口不变

//希望最终停在B页，不想点B页浏览器返回按钮，返回到A页，则在A页加：
$(document).ready(function(){
    window.history.forward(1);
});

//离开页面或关闭选项卡提示
window.onbeforeunload = function(){
    return "Are you sure to leave?" ;
}


//cookie
//统一设置、获取、删除cookie方法
var Common={};
Common.cookie = {
    set: function(l, j, g) {
        var k = l + "=" + escape(j);
        var h = new Date(),
            i = 0;
        if (g && g > 0) {
            i = g * 3600 * 1000;
            h.setTime(h.getTime() + i);
            k += "; expires=" + h.toGMTString();
        } else {
            k += "; expires=Session";
        }
        document.cookie = k;
    },
    get: function(f) {
        var e = document.cookie.split("; ");
        for (var g = 0; g < e.length; g++) {
            var h = e[g].split("=");
            if (h[0] == f) {
                return unescape(h[1]);
            }
        }
    },
    del: function(c) {
        var d = new Date();
        d.setTime(d.getTime() - 10000);
        document.cookie = c + "=a; expires=" + d.toGMTString();
    }
};
//具体调用方法
Common.cookie.set("wxOpenid", "123456");
Common.cookie.get("wxOpenid");
Common.cookie.del("wxOpenid");

//session
sessionStorage.setItem('msg', "str");

sessionStorage.getItem('msg');


//storage
localStorage.setItem('msg', "123456");

localStorage.getItem('msg');


//indexDB
//同一个页面操作indexdb

var myDB={
    name:'wechatID',
    version:1,
    db:null
};

var students=[{
    id:1001,
    name:"Byron",
    age:24
},{
    id:1002,
    name:"Frank",
    age:30
},{
    id:1003,
    name:"Aaron",
    age:26
},{
    id:1004,
    name:"Casper",
    age:26
}];
openDB(myDB.name,myDB.version);
setTimeout(function(){
    addData(myDB.db,'students');
    getDataByIndex(myDB.db,'students')
},1000);

function openDB (name,version) {
    var version=version || 1;
    var request=window.indexedDB.open(name,version);
    request.onerror=function(e){
        console.log(e.currentTarget.error.message);
    };
    request.onsuccess=function(e){
        myDB.db=e.target.result;
    };
    request.onupgradeneeded=function(e){
        var db=e.target.result;
        if(!db.objectStoreNames.contains('students')){
            var store=db.createObjectStore('students',{keyPath: 'id'});
            store.createIndex('nameIndex','name',{unique:true});
            store.createIndex('ageIndex','age',{unique:false});
        }
        console.log('DB version changed to '+version);
    };
}

function closeDB(db){
    db.close();
}

function deleteDB(name){
    indexedDB.deleteDatabase(name);
}

function addData(db,storeName){
    var transaction=db.transaction(storeName,'readwrite');
    var store=transaction.objectStore(storeName);

    for(var i=0;i<students.length;i++){
        store.add(students[i]);
    }
}

function getDataByKey(db,storeName,value){
    var transaction=db.transaction(storeName,'readwrite');
    var store=transaction.objectStore(storeName);
    var request=store.get(value);

    request.onsuccess=function(e){

        var student=e.target.result;
        if(!student)return;// æ²¡ææ°æ®è¿å
        var item = student.value.item
        console.log(item);
    };
}

function updateDataByKey(db,storeName,value){
    var transaction=db.transaction(storeName,'readwrite');
    var store=transaction.objectStore(storeName);
    var request=store.get(value);
    request.onsuccess=function(e){
        var student=e.target.result;
        student.age=35;
        store.put(student);
    };
}

function deleteDataByKey(db,storeName,value){
    var transaction=db.transaction(storeName,'readwrite');
    var store=transaction.objectStore(storeName);
    store.delete(value);
}

function clearObjectStore(db,storeName){
    var transaction=db.transaction(storeName,'readwrite');
    var store=transaction.objectStore(storeName);
    store.clear();
}

function deleteObjectStore(db,storeName){
    var transaction=db.transaction(storeName,'versionchange');
    db.deleteObjectStore(storeName);
}

function fetchStoreByCursor(db,storeName){
    var transaction=db.transaction(storeName);
    var store=transaction.objectStore(storeName);
    var request=store.openCursor();
    request.onsuccess=function(e){
        var cursor=e.target.result;
        if(cursor){
            console.log(cursor.key);
            var currentStudent=cursor.value;
            console.log(currentStudent.name);
            cursor.continue();
        }
    };
}

function getDataByIndex(db,storeName){
    var transaction=db.transaction(storeName);
    var store=transaction.objectStore(storeName);
    var index = store.index("nameIndex");
    index.get('Byron').onsuccess=function(e){
        var student=e.target.result;
        console.log(student.age);
    }
}

function getMultipleData(db,storeName){
    var transaction=db.transaction(storeName);
    var store=transaction.objectStore(storeName);
    var index = store.index("nameIndex");
    var request=index.openCursor(null,IDBCursor.prev);
    request.onsuccess=function(e){
        var cursor=e.target.result;
        if(cursor){
            var student=cursor.value;
            console.log(student.name);
            cursor.continue();
        }
    }
}
