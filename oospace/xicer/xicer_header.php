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
	<div class="head">
        <a id="logo" href="http://xicer.com/wordpress" ><img class="logo" src="http://xicer.com/img/logo.png" title="破冰者 xicer.com" alt="破冰者 xicer.co"/></a>
        <div class="login" >
           <!-- <a href="#" id="login"  onclick="login();">登录</a>|<a href="#" id="regist"  onclick="regist();">注册</a>-->
        </div>
            <br/>
            
        <ul class="headMenu" >
               
            	<li><a id="libs" href="http://xicer.com/wordpress">博客</a></li>
                <li><a id="libs" href="http://xicer.com/demo">大礼包</a></li>
                
                
        </ul>
        <span id="arrow" ></span>
    </div>
</body>
 <script langugage="javascript">
	var url = self.location.href;
	if( -1 != url.indexOf("xicer.php") ){
        $("#xicer").attr("style","background-color:#333333;");
	}else if( -1 != url.indexOf("libs.php") ){
		$("#libs").attr("style","background-color:#333333;");
	}else if( -1 != url.indexOf("tools.php") ){
		$("#tools").attr("style","background-color:#333333;");
	}else if( -1 != url.indexOf("files.php") ){
		$("#files").attr("style","background-color:#333333;");
	}
	</script>
</html>
