var width = 1000;
var height = 500;

function clearCanvas(id) {
	canvas = document.getElementById(id);
	context = canvas.getContext('2d');
	context.clearRect (0,0,width,height);
}

function clearMyRect(currentX,currentY,size) {
	canvas = document.getElementById(id);
	context = canvas.getContext('2d');
	context.clearRect (currentX,currentY,size,size);
}

function drawRect(x, y, size) {
	canvas = document.getElementById('grid');
	context = canvas.getContext('2d');
	context.fillStyle = "#111";
	context.fillRect(x, y, size, size);
	context.fill();
}

function readInput(inputID) {
	return document.getElementById(inputID).value;
}

function tree(iterations, x, y, size, mstraight,slowDraw,currentBlocks) {
	var blockSize = parseInt(size);
	var maxStraight = parseInt(mstraight);
	var rand, length, i;
	var currentSteps = 0;
	var currentX,currentY;
	drawRect(x, y, blockSize);
	function drawNextBlock() {
		if (currentBlocks && slowDraw) {
			setTimeout(clearMyRect(currentX,currentY,blockSize),1);
		}
		rand = Math.floor(Math.random() * 8) + 1;
		length = Math.floor(Math.random() * maxStraight) + 1;
		/*
		position moved relative to 0
		8  1  2
		7  0  3
		6  5  4
		*/
		for (i = 0; i < length; i++) {
			switch (rand) {
				case 1:
					if (y > 0) {
						y = y - blockSize;
					}
					break;
				case 2:
					if (y > 0) {
						y = y - blockSize;
					}
					x = x + blockSize;
					break;
				case 3:
					x = x + blockSize;
					break;
				case 4:
					y = y + blockSize;
					x = x + blockSize;
					break;
				case 5:
					y = y + blockSize;
					break;
				case 6:
					y = y + blockSize;
					x = x - blockSize;
					break;
				case 7:
					x = x - blockSize;
					break;
				case 8:
					if (y > 0) {
						y = y - blockSize;
					}
					x = x - blockSize;
					break;
			} //switch rand
			currentX = x;
			currentY = y;
			drawRect(x, y, blockSize);
			currentSteps += 1;
			if (currentSteps > iterations) {
				clearInterval(nextBlockID);
			}
		} //for length
	} //func drawnextblock
	if (slowDraw) {
		var nextBlockID = setInterval(drawNextBlock, 0);
	} else {
		while (currentSteps < iterations) {
			drawNextBlock();
		}	
	}
} // func tree