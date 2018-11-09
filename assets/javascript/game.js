// Global Variable
//=================================================================================

//Declare an array of words for word guess
const listOfWords = ["nuer", "oezil", "mueller", "kroos", "boateng"];


var userGuessElem = document.getElementById("user-guess");
var guessCounter = document.getElementById("guess-counter");
var winsCounter = document.getElementById("wins");
var lossCounter = document.getElementById("loses");
var underscoreArrElem = document.getElementById("underscore");

var underscoreArr = [];
var userGuessElemArr = [];
var theWrongArr = [];

var numOfGuesses = 13;
var wins = 0;
var loses = 0;

//Choose word randomly
var random = Math.floor(Math.random() * listOfWords.length);
var randomWord = listOfWords[random];
console.log(randomWord);

//Main
//=====================================================================

//function to create underscores based on length of words  
var generateUnderscores = function () {
    for (var i = 0; i < randomWord.length; i++) {
        underscoreArr.push("_");
    }
    return underscoreArr;
}
//function to handle duplicate elements of random word
function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
        indexes.push(i);
    }
    return indexes;
}

// reset game
var resetGame = function () {

    random = Math.floor(Math.random() * listOfWords.length);
    console.log(random);
    randomWord = listOfWords[random];
    console.log(randomWord);

    numOfGuesses = 13;
    guessCounter.textContent = null;
    userGuessElem.textContent = null;
    underscoreArrElem.textContent = null;

    underscoreArr = [];
    userGuessElemArr = [];
    theWrongArr = [];

}

//Get user guess

// onkey up function for user guess
document.onkeyup = function (event) {
    var userGuess = event.key;

    // number of user guesses left.
    numOfGuesses--;

    // Array to hold all the user guesses
    var index = 13 - numOfGuesses;
    userGuessElemArr[index] = userGuess;
    // Displays the user guessses in "Letters already section."
    userGuessElem.textContent = userGuessElemArr.join(" ");

    // Get all the indexes including duplicate elements of random word.  
    var indicies = getAllIndexes(randomWord.split(""), userGuess);

    // if else statement to check the user guess is included in randomWord or not
    if (indicies.length > 0) {
        //puts the right user guesses in the underscoreArr[]. 
        for (var i = 0; i < indicies.length; i++) {
            underscoreArr[indicies[i]] = userGuess;
        }
        // displays the right user guesses in the underscore section.
        underscoreArrElem.textContent = underscoreArr.join("");

        // if statement to count and alert win.
        if ((underscoreArr.join("") == randomWord)) {
           
            wins++;
            alert("You win!!!");
            // after win calls the reset function.
            resetGame();
          
        }
        
       
    }
    else {
        // all the wrong guesses are pushed to theWrongArr.
        theWrongArr.push(userGuess);
        //  // if statement to count and alert loose.           
        if ((theWrongArr.join("") != randomWord) && numOfGuesses == 1) {
            loses++;
            alert("You loose!!!");
             // after loss calls the reset function.
            resetGame();
        }
       
        
    }
    guessCounter.textContent = numOfGuesses;
    winsCounter.textContent = wins;
    lossCounter.textContent = loses;
}



