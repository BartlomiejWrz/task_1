let square = document.createElement('div')
document.body.appendChild(square)
var squareMarginLeft = 10;
let move = true;

square.style.marginLeft = squareMarginLeft + "px";
square.style.height = "50px";
square.style.width = "50px";
// square.style.marginRight = "0px";
square.style.backgroundColor = "green";



const movingSquare = () => {
	setInterval(() => {
		console.log('dupa');
		square.style.marginLeft
		if (move) {
			squareMarginLeft += 10;
		}
		square.style.marginLeft = squareMarginLeft + "px";
	}, 1000)

}

movingSquare();



