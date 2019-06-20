let square = document.createElement('div')
document.body.appendChild(square)

let squareMarginLeft = 0;
let move = true;
let screenWidth = window.innerWidth;
let squareHeight = 0;
let squareWidth = 0;
let squareColor = "";
let colors = ["red", "green", "orange", "black", "blue", "yellow"];

square.style.marginLeft = squareMarginLeft + "px";
square.style.backgroundColor = squareColor;

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

		if (squareMarginLeft % 50 === 0) {
			squareColor = colors[Math.floor(Math.random() * colors.length)];
		}

		square.style.height = squareHeight + "px";
		square.style.width = squareWidth + "px";
		square.style.marginLeft = squareMarginLeft + "px";
		square.style.backgroundColor = squareColor;
	}, 1)
}


movingSquare();


