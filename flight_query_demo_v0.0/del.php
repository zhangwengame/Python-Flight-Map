<?php
	header("Content-Type:text/html;charset=utf-8");
	$id = $_GET['id'];
	$path = realpath(".");
	$path = strtr($path, "\\", "/");
	
	system("python " .$path. "/del.py" . " ".$id." ".$path);
	//获取php当前目录，并拼凑出Py文件的目录
?>