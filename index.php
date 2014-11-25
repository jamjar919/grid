<!doctype html>
<html>
	<head>
		<title>Grid</title>
		<script src="grid.js" ></script>
		<style>
			#grid {
				border: 1px solid #111;
			}
			label {
				display: block;
				float: left;
				margin-left: 10px;
			}
			input {
				display:block;
			}
			input[type=text] {
				width: 100px;
			}
		</style>
	</head>
	<body>
		<canvas id="grid" width="1000" height="500">
			<noscript>You need a modern browser to view this.</noscript>
		</canvas>
		<div id="options">
			<label for="ite">Iterations:<input type="text" id="ite" name="ite" value="2000"></label>
			<label for="blockSize">Block Size:<input type="text" id="blockSize" name="blockSize" value="5"></label>
			<label for="maxStraight">Max Straight line:<input type="text" id="maxStraight" name="maxStraight" value="1"></label>
			<label for="slowDraw">Animation:<input type="checkbox" id="slowDraw" name="slowDraw" value="0"></label>
			<label for="currentBlocks">Only Draw Current Blocks<input type="checkbox" id="currentBlocks" name="currentBlocks" value="0">
			<input type="button" onClick="tree(readInput('ite'),500,0,readInput('blockSize'),readInput('maxStraight'),document.getElementById('slowDraw').checked,document.getElementById('currentBlocks').checked)" value="Execute">
			<input type="button" onClick="clearCanvas('grid')" value="Clear">
		</div>
	</body>
</html>