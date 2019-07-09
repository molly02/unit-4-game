$(document).ready(function() {

var targetNumber = 20
//Math.floor(Math.random()*101 + 19);
var counter = 0;
var wins = 0;
var losses = 0;
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//Math.round(Math.random()*11 + 1);
//var increment = numberOptions[Math.round(Math.random())];

function setupCats (){
    var numberOptions = Math.round(Math.random()*11 + 1);
    return numberOptions;
    //return 
    
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
        //  alert("winnning");
        reset();
    }
    
    else if (counter > targetNumber) {
        //alert("you lose");
        losses++;
        $("#losses").text("losses: " + losses);
        reset();
    }
    //else {
        //   alert("looseee");
        // }
        
        $("#image1").on("click", )
        
    }
    
   function reset() {
        counter = 0;
        $("#guessesnumber").text(0); 
        Crystal1 = setupCats();
        Crystal2 = setupCats();
        Crystal3 = setupCats();
        Crystal4 = setupCats();
        // repeat for all crystals, same as var. new generated number
        // reset - targetNumber = 
        //reset to zero??? not just start next number
    
    //new generated number
    //new numbers for each crystal
    }
    
})

//* The random number shown at the start of the game should be between 19 - 120.
//* Each crystal should have a random hidden value between 1 - 12.