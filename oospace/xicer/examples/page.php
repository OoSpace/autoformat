<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta http-equiv="X-UA-Compatible" content="IE=11;IE=10;IE=9; IE=8;" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11;IE=EmulateIE10;IE=EmulateIE9;IE=EmulateIE8" />
<link href="../css/xicer.css" rel="stylesheet" type="text/css"/>
<link rel="shortcut icon" href="../img/xicer.ico" type="image/x-icon" />
<link rel="bookmark" href="../img/xicer.ico" type="image/x-icon" />
<script src="../js/jquery-1.10.2.min.js"></script>
    
<title>破冰者的个人主页</title>
</head>
<body>
    <?php include ("../xicer_header.php");?>
	<div class="body">
        <table class="page">
            <tr><td>此处分页只需要传递给我当前页码和总页数即可</td></tr>
        </table>
    </div>
</body>
<script>
   
<!--禁止页面图片拖动在新窗口打开-->
function imgdragstart(){return false;}  
for(i in document.images)document.images[i].ondragstart=imgdragstart; 
</script>
    
    <script src="js/fenye.js"></script>
</html>