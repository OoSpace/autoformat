/**
* @Date:   2016-09-28T10:05:28+08:00
* @Last modified time: 2016-09-28T13:42:24+08:00
*/



function Range(from,to){
    //var r=inherit(range.methods);
    this.from=from;
    this.to=to;
    this["book ddd"]="sss";
   // return r;
}
Range.prototype={
    constructor:Range,//屏蔽试试
    includes:function(x){
        return this.from <=x&&x<=this.to;
    },
    foreach:function(f){
        for(var x=Math.ceil(this.from);x<=this.to;x++)f(x);
    },
    toString:function(){return "("+this.from+"..."+this.to+")"}
}
Range.prototype.constructor=Range;//和上面比较

var r= new Range(1,3);
r.includes(2);
r.foreach(console.log);
console.log(r);
console.log(r.constructor===Range);
console.log(r.constructor===Object);
//console.log(r.prototype.constructor==Range.prototype.constructor);
