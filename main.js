let square = document.createElement('div')
document.body.appendChild(square)

let squareMarginLeft = 0;
let move = true;
let screenWidth = window.innerWidth;
let squareHeight = 0;
let squareWidth = 0;

square.style.marginLeft = squareMarginLeft + "px";
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
			squareHeight = (squareMarginLeft / screenWidth) * 100;
			squareWidth = (squareMarginLeft / screenWidth) * 100;
		} else {
			squareMarginLeft--;
			squareHeight = (squareMarginLeft / screenWidth) * 100;
			squareWidth = (squareMarginLeft / screenWidth) * 100;
		}

		square.style.height = squareHeight + "px";
		square.style.width = squareWidth + "px";
		square.style.marginLeft = squareMarginLeft + "px";
	}, 1)
}


movingSquare();


