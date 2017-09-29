
//this ensures the whole page loads
	window.onload=function(){

//this sets global variables
	var wins = "0";
	document.getElementById("wins").innerHTML = wins;

	var tries = 12;
	document.getElementById("tries").innerHTML = tries;

//this shows which key was pressed

	document.onkeydown = function(event){
	var guessed = String.fromCharCode(event.keyCode);

	console.log(guessed)
	var indexGuess = randWord.indexOf(guessed);

	console.log(indexGuess)

//this checks guess against randWord

	if(letters.includes(guessed)){
		console.log("You guessed right!");
	} else {
	document.getElementById("guessed").innerHTML += guessed;	
	}

//this splices the progress array and adds in the correct guess
	var progress

	var guessed 
	
	blanks.splice(indexGuess,1,guessed);

	console.log(blanks)

	document.getElementById("progress").innerHTML = blanks.join(" ");

//this reduces the count of "tries" with each click

	if (tries > 0) {tries -= 1}
		else {tries = "You Lose!"};
	document.getElementById("tries").innerHTML = tries;
	}

//this generates a random word 

	var randWordArray = ["ASTROIDS", "FROGGER", "PONG", "DOOM", "CENTIPEDE", "PAPERBOY", "EXCITEBIKE", "PACMAN","SONIC","CONTRA","TETRIS"]

	var randWord = randWordArray[Math.floor(Math.random()*randWordArray.length)];

//this turns the random word into a string of unknowns

	var letters = randWord.split("");
	var progress = "";

	for (u = 0; u < randWord.length; u++){
		progress += "_ "
	}
	
	var blanks = progress.split()

//this swaps blanks for letters

	document.getElementById("progress").innerHTML = progress;

//these are console logs
	console.log(blanks);
	console.log(randWord);
	console.log(letters);

//this is the alphabet (delete if don't use)
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

}
