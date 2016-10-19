  
   // author:oospace
   // address:http://xicer.com
   // email:oospace@foxmail.com
  //获取url地址栏对应参数值
	(function($) {
		$.getUrlParam = function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if (r != null)
				return unescape(r[2]);
			return null;
		};
	})(jQuery);

var pageIndex=$.getUrlParam("page");
if(pageIndex==null)pageIndex=1;

//总条数(必填)
    var Num=Number(396)
    //当前页(必填)
    var index = Number(pageIndex);
    /* //每页的条数(可选,默认每页10条) */
    var  pageNum=Number(10);  
    /* //最大显示的页码的数目(可选，默认显示5个页码,页码数目必须大于等于1) */
    var  maxPageNum=Number(5);
     
    //以下可忽略
     
     
     
    //计算得出总页数

 

    var count = (Num%pageNum)>0?(Num/pageNum+1):(Num/pageNum);
         count=Math.floor(count);//取整转化为数据类型
    //显示的最小页码,
    var first=1;
        //显示的最大页码，首先last<=count;其次last是小于等于count的最大数//last=index+maxPageNum/2;
    var last =1;
    var decrease=Math.floor(maxPageNum/2);//当前页向上增加值
    var increase=Math.floor(maxPageNum/2);//当前页向下减少值
    if(maxPageNum>=1){
        if(maxPageNum==1){//最多显示一页时
                first=index<=count?index:count;  
                last=index<=count?index:count;       
        }else{
                    //first要大于零
                first=(index-decrease);
                while(first<=0){
                    first++;
                }   
                    //first判断显示的最后一页
                if((count-index)<=decrease){
                    var diff=count-first;
                    while(diff<maxPageNum-1){
                        if(first==1){
                            break;
                        }else{
                            --first;
                            diff=count-first;
                        }
                    }
                }
                    //last要小于count
                last=(index+increase);
                while(last>=1){
                    if(last<=count){
                        break;
                    }
                    last--;
                }   
                //last//判断显示的最后一页与maxPageNum的关系
                last=last>=maxPageNum?last:(maxPageNum>count?count:maxPageNum);
            }
    }else{
        alert("至少需要显示一个页码!");
    }
         
        var prev = index - 1;//上一页
        var next = index+ 1;//下一页   
         
        var str = "<tr>";
        if(count==0){
            str += "<td>共<a href='#'>0</a>页</td><td>";
        }else if(index>count||index<=0){
            str="<td style='color:blue;' >页码超出范围</td>";
        }else if (count > 0) {
            str += "<td>";
            if(first>1){
                str += "&nbsp;&nbsp;<span  style='color:#4169E1;' >...</span>&nbsp;&nbsp;";
            }
            var i=1;
            for(i=first;i<=last; i++){
                if(i==index){
                    str += "&nbsp;&nbsp;<a href='#'  style='color:#4169E1;' onclick='submit(" + i + ");'>[" + i+ "]</a>&nbsp;&nbsp;";
                }else{
                    str += "&nbsp;&nbsp;<a href='#'  onclick='submit(" + i + ");'>" + i+ "</a>&nbsp;&nbsp;";
                }
            } 
                if(last<count){
                    str += "&nbsp;&nbsp;<span  style='font-size:16px;color:#4169E1;' >...</span>&nbsp;&nbsp;"; 
                }
                 
            str+="</td><td style='font-size: 14px;'>共<a href='#first' style='color:#4169E1;font-size: 16px;' >"+ Num +"</a>条</td>";
            if(index!=1){
                str +="<td style='width:60px;font-family: 微软雅黑;font-size: 14px;' ><a href='#' id='prev'  onclick='submit(" + prev+ ");'>上一页</a></td>"; 
            }
            if(index<count){
                str +="<td style='width:60px;font-family: 微软雅黑;font-size: 14px;'><a href='#'  id='next' onclick='submit("+ next + ");'>下一页</a></td>";
            }
            if(index!=1&&count>1){
                str += "<td style='width:40px;font-family: 微软雅黑;font-size: 14px;white-space: nowrap;'>&nbsp;&nbsp;<a href='#' id='first' name='first' onclick='submit(1);'>首页</a>&nbsp;&nbsp;</td>";
            }
            if(index!=count&&count>1&&index<count){
                str += "<td style='width:40px;font-family: 微软雅黑;font-size: 14px;white-space: nowrap;'>&nbsp;&nbsp;<a href='#' onclick='submit(" + count+ ");'>尾页</a>&nbsp;&nbsp;</td>" ;
            } 
                str+="</tr>";
        }
         
         
//分页区域填写
    $('.page').html(str); 
    
//根据页码查询,
    function submit(pageIndex) {
        //var sortInfo = $.getUrlParam('sortInfo');//判断是哪一个页面的查询
        var url = "page.php?page="+pageIndex;
        window.location.href=url;
    }