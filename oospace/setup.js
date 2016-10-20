/**
 * Created by oospace on 2016/10/20.
 */
var util = require('util');
var async = require('async');   //npm install async
var notesdb = require('./nodesdb-sqlite3');
// var notesdb = require('./notesdb-mongoose');

notesdb.connect(function(error){
    if (error) throw error;
});
notesdb.setup(function(error){
    if (error){
        util.log('ERROR ' + error);
        throw error;
    }
    async.series([   //async.series函数可以控制函数按顺序执行，从而保证最后的函数在所有其他函数完成之后执行
            function(cb){
                notesdb.add("test", "testtest",
                    function(error){
                        if (error) util.log('ERROR ' + error);
                        cb(error);
                    });
            }
        ],
        function(error, results){
            if (error) util.log('ERROR ' + error);
            notesdb.disconnect(function(err){});
        }
    );
});