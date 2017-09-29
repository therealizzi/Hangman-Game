
//Global variables

//this is the win counter
	var wins = 0;
	document.getElementById("wins").innerHTML = wins;

//this is the tries counter
	var tries = 12;
	document.getElementById("tries").innerHTML = tries;	

//this array holds the random words
	var randWordArray = ["ASTROIDS", "FROGGER", "PONG", "CASTLEVANIA", "ZELDA", "TRON", "DOOM", "CENTIPEDE", "PAPERBOY", "EXCITEBIKE", "PACMAN","SONIC","CONTRA","TETRIS"]

//this generates a random word 
	var randWord = randWordArray[Math.floor(Math.random()*randWordArray.length)];

//this turns the random word into a character string "letters"
	var letters = randWord.split("");

//this variable holds the incorrect guesses
	var wrongLetters = [];

//this variable tracks each letter in the string
	var progress = [];
	
	for (i = 0; i < randWord.length; i++){	
		progress.push("_");
	}
	document.getElementById("progress").innerHTML = progress.join('');

console.log(randWord)
console.log(letters)
console.log(progress)

//this function creates a 'guess' variable every time an event key is pressed

document.onkeydown = function(event){
var guess = String.fromCharCode(event.keyCode);

var flag = false;

//this identifies and processes correct guess

	for (var i=0; i<letters.length; i++){
		if (letters[i] == guess){
			flag = true;
			progress.splice(i,1,guess);
		console.log(letters[i]);
		console.log(progress);
		document.getElementById("progress").innerHTML = progress.join(' ');	
			}
		}

//this identifies and processes incorrect guesses		

	if (flag === false){
		wrongLetters.push(guess);
		document.getElementById("wrongletters").innerHTML = wrongLetters.join('');
		tries --;
		document.getElementById("tries").innerHTML = tries;	
	if (tries < 1){
		document.getElementById("tries").innerHTML = "You lose!";
		document.getElementById("wrongletters").innerHTML = "You lose!";
		}
    }

//this identifies and processes the 'wins' 
var losing = true;

	for (var i=0; i<progress.length; i++){	
		if (progress[i] === "_"){
			losing = false;
			console.log(losing)
		} 
	}

	if (losing === true){
		console.log("You won!")
		wins ++;
		document.getElementById("tries").innerHTML = "You won!";
		document.getElementById("wrongletters").innerHTML = "You won!";
		document.getElementById("wins").innerHTML = wins;4
	}
}

