
window.onload=function(){



var wins = "0";
document.getElementById("wins").innerHTML = wins;

var tries = 12;
document.getElementById("tries").innerHTML = tries;

//this shows which key was pressed

document.onkeydown = function(event){
var guessed = String.fromCharCode(event.keyCode);
document.getElementById("guessed").innerHTML += guessed;

//this reduces the count of "tries" with each click

	if (tries > 0) {tries -= 1}
		else {tries = "You Lose!"};
document.getElementById("tries").innerHTML = tries;
}
//this generates a random word 

var randWordArray = ["ASTROIDS", "FROGGER", "PONG", "DOOM", "CENTIPEDE", "PAPERBOY", "EXCITEBIKE", "PACMAN","SONIC","CONTRA","TETRIS"]

	var randWord = randWordArray[Math.floor(Math.random()*randWordArray.length)];

var letters = randWord.split("");

console.log(randWord);
console.log(letters);
//this checks guess against randWord


//this turns the random word into a string of unknowns

	var progress = "";

	for (u = 0; u < randWord.length; u++){
		progress += "_ "
	}

document.getElementById("progress").innerHTML = progress;


var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


}
