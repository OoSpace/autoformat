var crypto=require('crypto');
User=require('../models/user.js');
module.exports=function (app) {
    app.get('/reg',function (req,res) {
        res.render('reg',{
            title:'注册',
            user:req.session.user,
            success:req.flash('success').toString()
        });
    })
    app.post('/reg',function (req,res) {
        var name=req.body.name,
            password=req.body.password,
            password_re=req.body['password-repeat'];
        //检验用户两次输入密码是否一致
        if(password_re!=password){
            req.flash('error','两次输入的密码不一致！');
            return res.redirect('/reg');//返回注册页
        }
        //生成密码的md5值
        var md5=crypto.createHash('md5'),
            password=md5.update(req.body.password).digest('hex');
        var newUser=new User({
            name:req.body.name,
            password:password,
            email:req.body.email
        });
        //检查用户名是否已经存在
        User.get(newUser.name,function (err,user) {
            if(err){
                req.flash('error',err);
                return res.redirect('/');
            }
            if(user){
                req.flash('error','用户已存在！');
                return res.redirect('/reg');
            }
            //如果不存在则新增用户
            newUser.save(function (err,user) {
                if(err){
                    req.flash('error',err);
                    return res.redirect('/reg');
                }
                req.session.user=user;
                req.flash('success','注册成功！');
                res.redirect('/');
            })
        })
    })
}