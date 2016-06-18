/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.
//$(document).ready(function(){
var playersGuess; 
var winningNumber = generateWinningNumber();
var arr = [];
var tries = 0;
var same = false;

	//$('#guess').on('click','button',function(){
//	playersGuess = parseInt($(this).find('.guess').text(), 10);	
	
//})



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor((Math.random() * 100) + 1); 
}

// Fetch the Players Guess

function playersGuessSubmission(event){
  playersGuess = +document.getElementById('guess').value;
  document.getElementById('guess').value = "";
  checkGuess();
}
// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
	if (playersGuess > winningNumber)
	{return "higher";}
	else { return "lower";}
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	//var win = $('<p>you won!</p>')
	//var ag = $('<p>try again!</p>')
	if (playersGuess ==winningNumber)
	{
		//$(this).after(win);
		document.getElementById("result").innerHTML = "you won!";
		document.getElementById("result").style.color = "red";
		document.getElementById("result").style.fontFamily = "Arial";
		document.getElementById("result").style.fontSize = 80;
		document.body.style.backgroundImage = "url('winbg.jpg')";
		document.getElementById("hint").innerHTML = "";
	}
	else if (tries + 1 == 10)
	{	document.getElementById("result").innerHTML = "you lost!";
		document.getElementById("result").style.color = "blue";
		document.getElementById("result").style.fontFamily = "Times New Roman";
		document.body.style.backgroundImage = "url('lost.jpg')";
		document.getElementById("result").style.fontSize = 5;}
	else
	
	{
			for (var i=0; i<arr.length; i++)
			{	
				if (playersGuess == arr[i])
				{
					same = true;
				}
			}
			if (!same)
			{
			arr.push(playersGuess);
			tries++;
			}
			
			same = false;
			
			document.getElementById("result").innerHTML = "try again!";
			document.getElementById("hint").innerHTML = provideHint();
			
		}
	
	// add code here
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
	var hol = lowerOrHigher();
	var dis = Math.abs(playersGuess - winningNumber);
	if (dis > 5)
	{return "your guess is more than 5 " + hol + " than the target!";}
	else {return "your guess is close! but " + hol + " than the target!";}
}

// Allow the "Player" to Play Again

function playAgain(){
	winningNumber = generateWinningNumber();
	document.getElementById("result").innerHTML = "";
	document.getElementById("hint").innerHTML = "";
	document.getElementById("final").innerHTML = "";
	tries = 0;
	arr = [];
	document.body.style.backgroundImage = "url('white.jpg')";
	
	// add code here
}

function finalHint(){
	var a = Math.floor((Math.random() * 10) + 1) + winningNumber;
	var b = Math.floor((Math.random() * 20) + 1) + winningNumber;
	document.getElementById("final").innerHTML = "it's one of these!  " + a+"    " +b+"    "+winningNumber;
	

}


function keyCode(event)
{
	if (event.keyCode == 13){playersGuessSubmission()};	
}

/* **** Event Listeners/Handlers ****  */

//})