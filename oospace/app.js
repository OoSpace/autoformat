var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//routes
var index = require('./routes/index');
var login = require('./routes/login');
var reg = require('./routes/reg');
var users = require('./routes/users');


var app = express();
var settings=require('./settings');
var flash=require('connect-flash');


//DB
var nmDbEngine='sqlite3';
//var nmDbEngine='mongoose';
var notesdb=require('./nodesdb-'+nmDbEngine);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(flash());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('xicer'));
app.use('/static', express.static('xicer'));//虚拟路径
//app.use('/', express.static('public'));//虚拟路径

//路由控制器
index(app);
login(app);
reg(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.listen(app.get('port'),function () {
  console.log('Express server listenging on port: '+app.get('port'));
})

module.exports = app;
