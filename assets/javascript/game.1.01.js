

//this sets global variables
	var wins = 0;
	document.getElementById("wins").innerHTML = wins;

	var tries = 12;
	document.getElementById("tries").innerHTML = tries;	

	var randWordArray = ["ASTROIDS", "FROGGER", "PONG", "CASTLEVANIA", "ZELDA", "TRON", "DOOM", "CENTIPEDE", "PAPERBOY", "EXCITEBIKE", "PACMAN","SONIC","CONTRA","TETRIS"]

//this generates a random word 
	var randWord = randWordArray[Math.floor(Math.random()*randWordArray.length)];

//this turns the random word into a string in variable "letters"
	var letters = randWord.split("");

//this variable holds the wrong letters
	var wrongLetters = [];

//this creates a new variable "progress" that has blanks for each letter in the string
	var progress = [];
	
	for (i = 0; i < randWord.length; i++){	
		progress.push("_");
	}

console.log(randWord)
console.log(letters)
console.log(progress)

//this creates a 'guess' variable every time a key is pressed

document.onkeydown = function(event){
var guess = String.fromCharCode(event.keyCode);

var flag = false;


//this splices the progress array and adds in the correct guess

	for (var i=0; i<letters.length; i++){

		if (letters[i] == guess){
			flag = true;
			progress.splice(i,1,guess);
		console.log(letters[i]);
		console.log(progress);
		document.getElementById("progress").innerHTML = progress.join(' ');	
			}
		}
			
	if(flag === false){
		console.log(guess)
		wrongLetters.push(guess);
		document.getElementById("wrongletters").innerHTML = wrongLetters.join('');
		tries --;
		document.getElementById("tries").innerHTML = tries;	
	if (tries < 1){
		document.getElementById("tries").innerHTML = "You lose!";
		document.getElementById("wrongletters").innerHTML = "You lose!";
		}
    }
}

//this ends the wrongLetters variable at 12

// 	if (wrongLetters.length > 12){
		
// 		document.getElementById("wrongletters").innerHTML = "You LOSE!"
// 	}

// 	if(letters.includes(wrongLetters)){

// 		tries +=1;	

// //this reduces the count of guesses remaining 
// 	if (tries >= 1) {

// 			tries -= 1
// 	}
	
// 	else {
// 		tries = "You Lose!"
// 	};
	
// 	document.getElementById("tries").innerHTML = tries;
// 	}

// //this is the alphabet (delete if don't use)
// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

