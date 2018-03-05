// Create an array of words
const wordBank =['INSIGHT', 'DEBASER', 'SHADOWPLAY', 'FALL', 'LULLABY', 'PRAYER FOR RAIN'];
// Choose word randomly
let randNum= Math.floor(Math.random() * word.length);
let chosenWord = word[randNum];
let rightLetter = [];
let wrongLetter = [];
let underScore = [];
console.log((chosenWord));
// dom manipulation
let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightLetter');

// Create underscores based on length of word
createUnderscore()
function createUnderscore()  {
   for (var i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
        docUnderScore[0].innerHTML = underScore.join('')
          }
    return underScore;
}
console.log(underScore)
// Get users guess

document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toUpperCase();
    if(chosenWord.indexOf(letter) > -1) {
        rightLetter.push(letter);
    }
       else {
           wrongLetter.push(letter) 
    }
    console.log(rightLetter);
    console.log(wrongLetter);
}

// Check if guess is right
//  if right push to right array
// if wrong push to wrong array
