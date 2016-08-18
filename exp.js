/**
 * Created by oospace on 2016/8/4.
 */
var express = require('express');
var app = express();
app.use('/',express.static('view'));
app.use('/css',express.static('css'));
app.use('/js',express.static('js'));
app.use('/imgs',express.static('imgs'));
app.use('/data',express.static('data'));
app.use('/json',express.static('json'));
//app.use(express.static('view'));
//app.get('/', function (req, res) {
//    res.send('前端模拟数据测试');
//});


var server = app.listen(81, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('maxchain  listening at http://%s:%s', host, port);
});