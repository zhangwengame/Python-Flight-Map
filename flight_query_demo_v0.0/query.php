<?php
	header("Content-Type:text/html;charset=utf-8");
	$dep = $_GET['dep'];
	$des = $_GET['des'];
	$id = $_GET['id'];
	$path = realpath(".");
	$path = strtr($path, "\\", "/");
	echo "python " .$path. "/query.py" . " " .$dep ." ".$des ." ".$id." ".$path;
	system("python " .$path. "/query.py" . " " .$dep ." ".$des ." ".$id." ".$path);
	//获取php当前目录，并拼凑出Py文件的目录
?>