$(document).ready(function() {

var targetNumber = 20
//Math.floor(Math.random()*101 + 19);
var counter = 0;
var wins = 0;
var losses = 0;
var numberOptions = Math.round(Math.random()*11 + 1);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//Math.round(Math.random()*11 + 1);
//var increment = numberOptions[Math.round(Math.random())];


var reset = function() {
    counter = 0;
    Crystal1 = numberOptions;
    // repeat for all crystals, same as var. new generated number
    // reset - targetNumber = 

//new generated number
//new numbers for each crystal
}


$("#generatednumber").text(targetNumber);

var Crystal1 = numberOptions;
var Crystal2 = numberOptions;
//var Crystal3 = increment;
//var Crystal4 = increment;
// how to get all crystals a diff random number?


//create var for images so they all go through this function
// give all images a random number

$("#crystal-image-1").on("click", function (){
    counter+= Crystal1;
    $("#guessesnumber").text(counter);
    winslosses();
    // alert("test complete" + counter);
    //console.log(targetNumber);
})

$("#crystal-image-2").on("click", function(){
    counter +=Crystal2;
    $("#guessesnumber").text(counter);
    winslosses();
})

console.log(numberOptions);

function winslosses (){

    if (counter === targetNumber) {
        wins++;
        $("#wins").text("wins: " + wins);
        //  alert("winnning");
        reset()
        
    }
    
    else if (counter >= targetNumber) {
        //alert("you lose");
        losses++;
        $("#losses").text("losses: " + losses);
        reset()
    }
    //else {
        //   alert("looseee");
        // }
        
        $("#image1").on("click", )
        
    }
    
    
})

//* The random number shown at the start of the game should be between 19 - 120.
//* Each crystal should have a random hidden value between 1 - 12.