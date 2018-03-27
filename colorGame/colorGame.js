var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = (this.style.backgroundColor);
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}


function changeColors(color) {
	// loop through all squares 
	for (var i = 0; i < colors.length; i++) {
	//change each color to match given color
		squares[i].style.backgroundColor = color;
	}};

	function pickColor() {
		// pick a color square
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}



function generateRandomColors(num) {
// make an array
	var arr = []
for (var i = 0; i < num; i++) {	
	//generate color and push into array
	arr.push(randomColor());
	}
	return arr
}


	function randomColor() {
		// generate a random color
	red = Math.floor(Math.random() * 256);
	green = Math.floor(Math.random() * 256);
	blue = Math.floor(Math.random() * 256);
	return "rgb("+ red + ", " + green + ", " + blue + ")";
	}