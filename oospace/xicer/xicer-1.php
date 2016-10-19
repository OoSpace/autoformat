<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta http-equiv="X-UA-Compatible" content="IE=11;IE=10;IE=9; IE=8;" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11;IE=EmulateIE10;IE=EmulateIE9;IE=EmulateIE8" />
<link href="css/xicer.css" rel="stylesheet" type="text/css"/>
<link rel="shortcut icon" href="img/xicer.ico" type="image/x-icon" />
<link rel="bookmark" href="img/xicer.ico" type="image/x-icon" />
<script src="js/jquery-1.10.2.min.js"></script>
<title>破冰者的个人主页</title>
</head>
<body>
    <?php include ("xicer_header.php");?>
	<div class="body">
        <!--<h1>首次加载比较缓慢，<a href="http://xicer.com/wordpress">xicer.com</a></h1>-->
<!--
    	各种实例：
        <ul class="fileList_searchResult">
                <li>  
                    <a href="1.php">Jquery窗体拖动效果</a> 
                </li>
                <li>
                    <a href="http://xicer.com/examples/page.php">原生JavaScript分页插件</a> 
                </li>
            	<li>
                    <a href="3.php">判断浏览器类型、版本及盒子模型类型</a> 
                </li>
            	<li>
                    <a href="color.php">网页颜色代码对照表</a> 
                </li>
            	<li>
                    <a href="cut.php">图片切割插件（一）基本实现版，方便扩展修改理解</a> 
                </li>
            	<li>
                    <a href="cut1.php">图片切割插件（二）基本实现版，方便扩展修改理解</a> 
                </li>
                						
         </ul>-->
    </div>
</body>
<script>
  /*  window.location.href="http://xicer.com/wordpress"*/
<!--禁止页面图片拖动在新窗口打开-->
function imgdragstart(){return false;}  
for(i in document.images)document.images[i].ondragstart=imgdragstart; 
</script>
</html>