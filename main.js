let square = document.createElement('div')
document.body.appendChild(square)
var squareMarginLeft = 0;
let move = true;
let screenWidth = window.innerWidth;

square.style.marginLeft = squareMarginLeft + "px";
let squareSize = square.style.height = "50px";
square.style.width = "50px";
square.style.backgroundColor = "green";

const movingSquare = () => {
	setInterval(() => {
		if (squareMarginLeft > screenWidth) {
			move = !move

		} else if (squareMarginLeft <= 0) {
			move = !move;
		}

		if (!move) {
			squareMarginLeft++;
		} else {
			squareMarginLeft--;
		}

		square.style.marginLeft = squareMarginLeft + "px";
	}, 1)
}

movingSquare();


