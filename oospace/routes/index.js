var User  = require('../models/user.js');
module.exports=function (app) {
  app.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Thought 、  stories 、 idea',
      user:req.session.user||'',
      success:req.flash('success').toString()||'',
      error:req.flash('error').toString()||''
    });
  });
}