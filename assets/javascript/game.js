
var computerGuess;

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var congrats = "You Win!";
var tooBad = "You lose";
var guessedLetters = [];

reset();

document.onkeyup = function (event) {
    var userGuess = event.key;
    guessedLetters.push(userGuess);

    if (userGuess === computerGuess) {
        wins++;
        alert(congrats + " The letter was: " + computerGuess);
        reset();
    }

    else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        alert(tooBad + " The letter was: " + computerGuess);
        reset();
    }



    var html =
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins +
        "</p>" + "<p>Loses: " + losses +
        "<p>Guesses Remaining: " + guessesLeft +
        "<p>Guessed Letters: " + guessedLetters.join(', ');
    document.querySelector("#guessingGame").innerHTML = html;


}
function reset() {
    var computerChoices =
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    guessesLeft = 9;
    guessedLetters.length = 0;
}