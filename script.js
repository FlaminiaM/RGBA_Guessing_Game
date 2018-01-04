var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.getElementsByClassName("mode");

init();

function init(){
	setupModeButton();
	setupSquares();
	reset();
}

function setupModeButton(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//figure out how many squares to show
			if(this.textContent ==="Easy"){
				numSquares = 3;
			} else{
				numSquares = 6;
			}
		reset();
	})
	}
}

function setupSquares(){
	for(var i = 0; i<squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if (clickedColor === pickedColor){
				message.textContent = "Correct!"
				changeColors(clickedColor);
				h1.style.backgroundColor= clickedColor;
				resetButton.textContent = "Play Again!"
			} else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again!";
			}
		})	
	}	
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick new random color from arr
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";
	//change colors of squares
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";	
}

resetButton.addEventListener("click", function(){
	reset();
});

for(var i = 0; i<squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor){
			message.textContent = "Correct!"
			changeColors(clickedColor);
			h1.style.backgroundColor= clickedColor;
			resetButton.textContent = "Play Again!"
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!";
		}
	})	
}	

function changeColors(color){
	//loop through all sqaures
	for(var i = 0; i<colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
	//change all colors to given color
}

function pickColor(){
	//pick a random number;
	var random = Math.floor(Math.random() * colors.length);
	//use number to access the color out of the array and return color
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i<num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);//non considera 1
	//pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}