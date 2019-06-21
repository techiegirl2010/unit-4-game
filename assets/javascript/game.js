

// You will need to have variables for wins, losses and a score.
var wins = 0;
var losses = 0;
var score = 0;

// You will be given a random number at start of game between 1 and 120.
//The random generated number is in a box and you see it.
var randomNum = Math.floor((Math.random() * 120) + 1);

console.log(randomNum);

// There are four crystals that you can click on. 
// Crystal values are between 1 and 12.
var blue = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);
var purple = Math.floor((Math.random() * 12) + 1);
var red = Math.floor((Math.random() * 12) + 1);

console.log("1 is" + blue);
console.log("2 is" + green);
console.log("3 is" + purple);
console.log("4 is" + red);


// When you click on a crystal, you will add a specific amount of points to your total score.
var updatedScore = function () {
    $('#wins').empty();
    $('#wins').append(wins);

    $('#losses').empty();
    $('#losses').append(losses);

    $('.score').empty();
    $('.score').append(score);

}

// Goal of game (WIN) by matching your total score to the random number.
// When win, you see a "You won!" and your win score increases by one.
// You lose the game if your total score goes above the random number.
// When lose, you see a "You lost!" and your loss score increases by one.
var gameProcess = function () {
    if (score === randomNum) {
        wins++;
        alert("You won!");
        restartGame();
    }
    else if (score > randomNum) {
        losses++;
        alert("You lost!");
        reStartGame();
    }
    else {
        updatedScore()
    }
}

//The value of each crystal is hidden from you until you click on it.
// Each time you click a crystal, it adds to your score until you match or go over the computer's random number. Values are betwwen 1 and 12.
$(document).ready(function () {
    $('#wins').append(wins);
    $('#losses').append(losses);
    $('#score').append(score);
    $('#randomNumber').append(randomNum);
    $('#blue').click(function () {
        score = score + blue;
        $('#score').html('Score: ' + score)
        console.log("you've clicked blue")
    })

    $("#green").click(function () {
        $('#wins').append(wins);
        score = score + green;
        $('#score').html('Score: ' + score)
        console.log("you've clicked green")
    })

    $("#purple").click(function () {
        $('#wins').append(wins);
        score = score + purple;
        $('#score').html('Score: ' + score)
        console.log("you've clicked purple")
    })

    $("#red").click(function () {
        $("#wins").append(wins);
        score = score + red;
        $('#score').html('Score: ' + score)
        console.log("you've clicked red")
    })  
});


// Game restarts when there is a win or a loss.
// Each time game restarts, the computer generates a new random number that you see.
// Each time the game restarts, your score will reset to 0.
// Each time the game restarts, the game will change the value for each crystal.


var gameRestart = function () {
    score = 0;

    $('.random').empty();
    $('.random').append(random);


     blue = Math.floor((Math.random() * 12) + 1);
     green = Math.floor((Math.random() * 12) + 1);
     purple = Math.floor((Math.random() * 12) + 1);
     red = Math.floor((Math.random() * 12) + 1);

    updatedScore();
    return Math.floor((Math.random() * 120) + 1);
}


