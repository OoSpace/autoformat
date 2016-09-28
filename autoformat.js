/**
 * Created by oospace on 2016/9/27.
 * 自动生成项目文件结构
 */
var fs = require("fs");

var folderList=[
    "",
];
var basePath = "web/";//文件路径
var reCreate = true;//已有的文件是否重新创建，暂不支持， 可扩展

if (fs.existsSync(basePath)) {
    console.log('已经创建过此目录了');
} else {
    fs.mkdirSync(basePath);
    console.log('目录已创建成功\n');
}


//读取文件
// fs.readFile("bb.txt","utf8",function (error,data){
//     if(error) throw error ;
//     console.log(data) ;
// }) ;
//创建文件
//fs.writeFile("bb.txt", "哈哈哈", function (err) {
//    if (err) throw err;
//});
// // 修改文件名称
// fs.rename('bb.txt','bigbear.txt',function(err){
//     console.log('rename success') ;
// });
// 删除文件
//fs.unlink('bb.txt', function(){
//    console.log('success') ;
//}) ;
// // 查看文件状态
// fs.stat('bb.txt', function(err, stat){
//     console.log(stat);
// });
// // 判断文件是否存在
// fs.exists('bb.txt', function( exists ){
//     console.log( exists ) ;
// }) ;
