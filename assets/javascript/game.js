$(document).ready(function() {

var targetNumber = Math.floor(Math.random()*101 + 19);
var counter = 0;
var wins = 0;
var losses = 0;

function setupCats (){
    var numberOptions = Math.round(Math.random()*11 + 1);
    return numberOptions;
}

$("#generatednumber").text(targetNumber);

var Crystal1 = setupCats();
var Crystal2 = setupCats();
var Crystal3 = setupCats();
var Crystal4 = setupCats();
console.log(Crystal1);
console.log(Crystal2);
console.log(Crystal3);
console.log(Crystal4);

$("#crystal-image-1").on("click", function (){
    counter+= Crystal1;
    $("#guessesnumber").text(counter);
    winslosses();

})

$("#crystal-image-2").on("click", function(){
    counter += Crystal2;
    $("#guessesnumber").text(counter);
    winslosses();
})

$("#crystal-image-3").on("click", function(){
    counter += Crystal3;
    $("#guessesnumber").text(counter);
    winslosses();
})

$("#crystal-image-4").on("click", function(){
    counter += Crystal4;
    $("#guessesnumber").text(counter);
    winslosses();
})

function winslosses (){
    
    if (counter === targetNumber) {
        wins++;
        $("#wins").text("wins: " + wins);
        alert("you win!");
        reset();
    }
    
    else if (counter > targetNumber) {
        losses++;
        $("#losses").text("losses: " + losses);
        alert("you lose");
        reset();
    }
    
    }
    
   function reset() {
        counter = 0;
        $("#guessesnumber").text(0); 
        targetNumber = Math.floor(Math.random()*101 + 19);
        $("#generatednumber").text(targetNumber);
        Crystal1 = setupCats();
        Crystal2 = setupCats();
        Crystal3 = setupCats();
        Crystal4 = setupCats();

    }
    
});