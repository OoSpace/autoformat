/**
 * Created by oospace on 2016/10/20.
 */
var monbodb=require('./db');
var crypto = require('crypto');
function User(user) {
    this.name=user.name;
    this.password=user.password;
    this.email=user.email;
}
module.exports=User;

//存储用户信息
User.prototype.save=function (callback) {
    var user={
        name:this.name,
        password:this.password,
        email:this.email
    }
    //打开数据库
    monbodb.open(function (err,db) {
        if(err){
            return callback(err);
        }
        //读取users集合
        db.collection('users',function (err,collection) {
            if(err){
                monbodb.close();
                return callback(err);
            }
            collection.insert(user,{
                safe:true
            },function (err,user) {
                monbodb.close();
                if(err){
                    return callback(err)
                }
                callback(null,user[0]);
            });
        });
    });
};
User.get=function (name,callback) {
    //打开数据库
    monbodb.open(function(err,db){
        if(err){
            return callback(err);
        }
        //读取users集合
        db.collection('users',function(err,collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            //查找用户名（name键）值为name一个文档
            collection.findOne({
                name:name
            },function(err,user){
                mongodb.close();
                if(err){
                    return callback(err);
                }
                callback(null,user);
            });
        });
    });
}