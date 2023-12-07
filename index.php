<!DOCTYPE html>
<html>
<head>
	<title>Clock App</title>
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
<div id="clocks">
  <div id="serverClock" class="clock">
    Server: <span id="serverClockInner"><?php echo date('H:i:s'); ?></span>
  </div>
  <div id="browserClock" class="clock">
    Browser: <span id="browserClockInner"><?php echo date('H:i:s'); ?></span>
  </div>
</div>
<script src="assets/js/script.js"></script>
</body>
</html>
