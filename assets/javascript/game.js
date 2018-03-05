let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', " "];
const songList = ['primary', 'shadowplay', 'lullaby', 'debaser', 'insight', 'caribou',];
let songPicked = "";
let lettersInWord = []
let numBlanks = 0;
let correctLetters = [];
let wrongLetters = [];
let guessesLeft = 10;
let rightGuessCounter = 0;
let wins = 0;

playGame();

function eraseAnswer() {
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', " "];
    correctLetters = [];
    wrongLetters = [];
    guessesLeft = 10;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;
    document.getElementById('lettersGuessed').innerHTML = wrongLetters;
    rightGuessCounter = 0;
    test = false;
}

function playGame() {
    document.getElementById('wins').innerHTML = wins;
    
    songPicked = (songList[Math.floor(Math.random() * songList.length)]);
    console.log(songPicked);
    //split songPicked into individual letters
    lettersInWord = songPicked.split('');
    document.getElementById("currentWord").innerHTML = '';
    console.log(lettersInWord);
    //get number of blanks
    numBlanks = lettersInWord.length;
    console.log(numBlanks);

    for (var i = 0; i < numBlanks; i++) {
        correctLetters.push('_');
        document.getElementById('currentWord').innerHTML = correctLetters;
    }

    //add changes to the HTML
    document.getElementById('currentWord').innerhtml = correctLetters.join(' ');
    document.getElementById('guessesLeft').innerhtml = guessesLeft;
    console.log("Guesses remaining " + guessesLeft);
    document.getElementById('wins').innerhtml = wins;
    document.getElementById('lettersGuessed').innerhtml = wrongLetters;
    // console.log("Wrong Letters " + wrongLetters);
}

function checkLetters(userKey) {
    console.log("(function check letters)");

    //If userKey = part of songPicked 
    if (songPicked.indexOf(userKey) > -1) {
        //Loops depending on the amount of blanks 
        for (var i = 0; i < numBlanks; i++) {
            //Fills index with userKey
            if (lettersInWord[i] == userKey) {
                rightGuessCounter++;
                correctLetters[i] = userKey;
                document.getElementById('currentWord').innerHTML = correctLetters.join(' ');
                console.log(correctLetters);
                console.log('Guesses left are ' + guessesLeft);
            }
        }
    }

    //Wrong Keys
    else {
        wrongLetters.push(userKey);
        //subtract from guessesLeft
        guessesLeft = guessesLeft - 1;
        //add changes to the HTML
        document.getElementById('guessesLeft').innerHTML = guessesLeft;
        document.getElementById('lettersGuessed').innerHTML = wrongLetters;
        //Test / Debug
        console.log('Wrong Letters = ' + wrongLetters);
        console.log('Guesses left are ' + guessesLeft);
    }
}

function winLose() {
    // When number blanks if filled with right words then you win
    if (rightGuessCounter === numBlanks) {
        wins = wins + 1;
        document.getElementById('wins').innerHTML = wins;
        //add pause so the last winning letter appears
        function winner() {
            setTimeout(function () {
                alert("You Win!");
            }, 500);
            setTimeout(function () {
                eraseAnswer();
            }, 2000);
            setTimeout(function () {
                playGame();
            }, 2300);
        }
        winner();

    }
    // if guessesLeft = 0, alert "You Lose"
    else if (guessesLeft === 0) {

        function loser() {
            setTimeout(function () {
                alert("You Lose, Try Again!");
            }, 500);
            setTimeout(function () {
                eraseAnswer();
            }, 2000);
            setTimeout(function () {
                playGame();
            }, 2300);
        }
        loser();
    }
}

document.onkeyup = function (event) {
    test = true;
    var letterGuessed = event.key;
    for (var i = 0; i < alphabet.length; i++) {
        if (letterGuessed === alphabet[i] && test === true) {
            var spliceDword = alphabet.splice(i, 1);
            //Test / Debug
            console.log('Double word is = ' + alphabet[i])
            console.log('Spliced Word is = ' + spliceDword);
            checkLetters(letterGuessed);
            winLose();
        }
    }

}