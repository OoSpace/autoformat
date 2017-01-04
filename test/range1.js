/**
* @Date:   2016-09-28T09:56:53+08:00
* @Last modified time: 2016-09-28T13:42:26+08:00
*/

var f=new Function("x","y","return x*y;")

function inherit(p) {
  if(p==null)throw TypeError();
  if(Object.create)return Object.create(p);
  var t=typeof p;
  if(t!="object"&&t!="function")throw TypeError();
  function f() { };
  f.prototype=p;
  //f.prototype.constructor=f.constructor;
  return new f();
}
function range(from,to){
  var r=inherit(range.methods);
  r.from=from;
  r.to=to;
  return r;
}
range.methods={
  constructor:range,
  includes:function(x){
    return this.from <=x&&x<=this.to;
  },
  foreach:function(f){
    for(var x=Math.ceil(this.from);x<=this.to;x++)f(x);
  },
  toString:function(){return "("+this.from+"..."+this.to+")"}
}

var r= range(1,3);
r.includes(2);
r.foreach(console.log);
console.log(r);
console.log(r.constructor==range);
console.log(r.constructor===Object);
