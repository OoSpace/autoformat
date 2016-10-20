module.exports=function (app) {
  var crypto=require('crypto');
  User=require('../models/user.js');
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Thought 、  stories 、 idea' });
  });
}