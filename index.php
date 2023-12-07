<!DOCTYPE html>
<html>
<head>
	<title>Clock App</title>
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
<div id="clocks">
  <div id="serverClock" class="clock">
    Server Time: <span id="serverClockInner"><?php echo date('H:i:s'); ?></span>
  </div>
  <div id="browserClock" class="clock">
    Browser Time:
  </div>
</div>
<script src="assets/js/script.js"></script>
</body>
</html>
