var randomResult;
var win = 0;
var lose = 0;
var previous = 0;

var startGame = function () {
    $(".crystals").empty();
    var images = [
        "assets/images/blue.png",
         "assets/images/green.png", 
         "assets/images/red.png", 
         "assets/images/yellow.png",
    ]
    randomResult = Math.floor(Math.random() * 69) + 30;
    console.log(randomResult);
    
    $("#result").html("Number to get " + randomResult);
    for (var i = 0; i < 4; i++) {
        console.log(random);
        
        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $('<div><img src="'+images[i]+'"></div>');
        crystal.attr({
            "class": "crystal", "data-random": random
        });

        $(".crystals").append(crystal);
    }
}

startGame();

$(document).on("click", ".crystal", function () {
    var num = parseInt($(this).attr("data-random"));
    previous += num;

    if (previous > randomResult) {
        alert("you lose");
        lose++;
        previous = 0;
        startGame();
    }
    else if (previous === randomResult) {
        alert("you win");
        win++;
        previous = 0;
        startGame();
    }
    $("#currentScore").html("Your total score : " + previous);
    $("#won").html("You have won: " + win);
    $("#lost").html("You have lost: " + lose);
    console.log(previous);
});