var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");


easyButton.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
	 	if(colors[i]){
	 		squares[i].style.backgroundColor = colors[i];
	 	} else {
	 		squares[i].style.display = "none"
	 	}
	 } 
});

hardButton.addEventListener("click", function(){
	
	h1.style.backgroundColor = "steelblue";
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
	 		squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block"
	
	 } 

});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
})


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
			resetButton.textContent = "Play Again?"
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
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