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
    $("#result").html("Random result " + randomResult);
    for (var i = 0; i < 4; i++) {
        console.log(random);
        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": "crystal", "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] +"')",
            "background-size":"cover"
        })
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
    $("#currentScore").html(previous);
    $("#won").html(win);
    $("#lost").html(lose);
    console.log(previous);
});