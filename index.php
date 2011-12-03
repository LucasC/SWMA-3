<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html>
	<head>
	<title>Proto NoSmoke</title>
	<link href="static/main.css" media="all" rel="stylesheet" type="text/css" />
	<link href="static/firstpage.css" media="all" rel="stylesheet" type="text/css" />
	<link href="static/map.css" media="all" rel="stylesheet" type="text/css" />
	<link rel="shortcut icon" href="favicon.ico" />
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>
	<script type="text/javascript" src="static/main.js"></script>
</head>

<body>
<div id="logo_wrapper">
	<img src="static/img/icone.png" width="300px" height="300px"/><br/>
	<img src="static/img/nom_icone.png" width="300px" />
</div>
<div id="main_wrapper">
	<div id="content_wrapper">
		<div id="statusbar"></div>
		<div id="content">
			<?php include('content/home.html'); ?>
		</div>
		<div id="menubar">
			<a href="content/stats.html"><img class="stats" src="static/img/icon_stats.png" width="60" height="67"/></a>
			<a href="content/games.html"><img class="jeux" src="static/img/icon_jeux.png" width="60" height="67" /></a>
			<a href="content/cagnotte.html"><img class="cagnotte" src="static/img/icon_cagnotte.png" width="60" height="67" /></a>
			<a href="content/1up.html"><img class="1up" src="static/img/icon_1up.png" width="60" height="67" /></a>
		</div>
	</div>
</div>
<div id="keypoint_wrapper">
1- On est bien<br/>2- voir trop!
</div>
<div class="clear"></div>
</body>
</html>