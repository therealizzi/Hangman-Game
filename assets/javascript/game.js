
//this ensures the whole page loads
	window.onload=function(){

//this sets global variables
	var wins = 0;
	document.getElementById("wins").innerHTML = wins;

	var tries = 12;
	document.getElementById("tries").innerHTML = tries;

//this generates a random word 
	var randWordArray = ["ASTROIDS", "FROGGER", "PONG", "CASTLEVANIA", "ZELDA", "TRON", "DOOM", "CENTIPEDE", "PAPERBOY", "EXCITEBIKE", "PACMAN","SONIC","CONTRA","TETRIS"]

	var randWord = randWordArray[Math.floor(Math.random()*randWordArray.length)];

//this turns the random word into a string of letters
	var letters = randWord.split("");

//this creates a new variable that has blanks for each letter in the string
	var progress = "";
	
	for (u = 0; u < randWord.length; u++){	
		progress += "_ "}
	
	document.getElementById("progress").innerHTML = progress;

//this creates a variable of blank letters
	var blanks = progress.split()

//this is the keydown event function when a user chooses a letter
	document.onkeydown = function(event){
	
//this creates the guess variable
	var guess = String.fromCharCode(event.keyCode);

//this checks the guess against letters in the random word
	if(letters.includes(guess)){

		tries +=1;
	
	//this splices the progress array and adds in the correct guess
		var indexGuess = randWord.indexOf(guess);
	
		blanks.splice(indexGuess,1,guess);

		document.getElementById("progress").innerHTML = blanks.join(" ");

		} else {
		document.getElementById("guess").innerHTML += guess;	
		}

//this ends the guess variable at 12 
	if (guess.length > 12){
		document.getElementById("guess").innerHTML = "You LOSE!"
	}

//this reduces the count of guesses remaining 
	if (tries >= 1) {tries -= 1}
		else {tries = "You Lose!"};
	document.getElementById("tries").innerHTML = tries;
	}

//these are console logs
	console.log(blanks);
	console.log(randWord);
	console.log(letters);

//this is the alphabet (delete if don't use)
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	}
