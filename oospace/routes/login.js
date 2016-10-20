module.exports=function (app) {
    /* GET home page. */
    app.get('/login',function (req,res) {
        res.render('login',{title:'登录'});
    })
}