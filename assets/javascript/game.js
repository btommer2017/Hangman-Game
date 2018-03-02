let erase = ["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ ", ];
let cureSong = ["P ", "R ", "I ", "M ", "A ", "R ", "Y ", ];
let joyDivisionSong = ["I ", "N ", "S ", "I ", "G ", "H ", "T ", ];
let pixiesSong = ["D ", "E ", "B ", "A ", "S ", "E ", "R ", ];
let songList = ["cureSong", "joyDivisionSong", "pixiesSong"];
let wins = 0;
//This function will begin the game by calling the playGame() function!!!!
// document.onkeyup = function (event) {
    console.log("Let's Play the Game");
    playGame();
    // }
    
    
    
    
    function playGame() {
        let songPicked = (songList[Math.floor(Math.random() * songList.length)]);
        console.log(songPicked);
        

    if (songPicked === "joyDivisionSong") {
        alert("Joy Division has been picked!");
        eraseAnswer();
        for (var i = 0; i < 10; i++) {
           
        document.onkeyup = function (event) {
            var letter = String.fromCharCode(event.which).toUpperCase();

            if (letter === "I") {
                document.getElementById("guess1").innerHTML = joyDivisionSong[0];
                          }
            if (letter === "N") {
                document.getElementById("guess2").innerHTML = joyDivisionSong[1];
                           }
            if (letter === "S") {
                document.getElementById("guess3").innerHTML = joyDivisionSong[2];
                            }
            if (letter === "I") {
                document.getElementById("guess4").innerHTML = joyDivisionSong[3];
                            }
            if (letter === "G") {
                document.getElementById("guess5").innerHTML = joyDivisionSong[4];
                          }
            if (letter === "H") {
                document.getElementById("guess6").innerHTML = joyDivisionSong[5];
                         }
            if (letter === "T") {
                document.getElementById("guess7").innerHTML = joyDivisionSong[6];
                           }

            if (document.getElementById("guess1").innerHTML = joyDivisionSong[0])
             
                alert("HMM??");
                // wins=(wins+1);
                // document.getElementById("wins").innerHTML = wins
                // playGame();
             }
           
            // else loseTurn()
        }
    }
}
 else if (songPicked === "cureSong") {
    alert("The Cure has been picked!");
    eraseAnswer();
    for (var i = 0; i < 10; i++) {
        var total = 7
        document.onkeyup = function (event) {
            var letter = String.fromCharCode(event.which).toUpperCase();

            if (letter === "P") {
                document.getElementById("guess1").innerHTML = cureSong[0];
                if (document.getElementById("guess1").innerHTML = cureSong[0]) {total = (total -1);}
                console.log(total);
                           }
            if (letter === "R") {
                document.getElementById("guess2").innerHTML = cureSong[1];
                if (document.getElementById("guess2").innerHTML = cureSong[1]) {total = (total -1);}
                console.log(total);
                           }
            if (letter === "I") {
                document.getElementById("guess3").innerHTML = cureSong[2];
                if (document.getElementById("guess3").innerHTML = cureSong[2]) {total = (total -1);}
                console.log(total);
                           }
            if (letter === "M") {
                document.getElementById("guess4").innerHTML = cureSong[3];
                if (document.getElementById("guess4").innerHTML = cureSong[3]) {total = (total -1);}
                console.log(total);
                           }
            if (letter === "A") {
                document.getElementById("guess5").innerHTML = cureSong[4];
                if (document.getElementById("guess5").innerHTML = cureSong[4]) {total = (total -1);}
                console.log(total);
                           }
            if (letter === "R") {
                document.getElementById("guess6").innerHTML = cureSong[5];
                if (document.getElementById("guess6").innerHTML = cureSong[5]) {total = (total -1);}
                console.log(total);
                           }
            if (letter === "Y") {
                document.getElementById("guess7").innerHTML = cureSong[6];
                if (document.getElementById("guess7").innerHTML = cureSong[6]) {total = (total -1);}
                console.log(total);
                           }
                           if (total === 0) {
                            alert("You Win!!!");
                            wins=(wins+1);
                            document.getElementById("wins").innerHTML = wins
                            playGame();
                           }
            
            // else loseTurn()
        }
    }
} 
else if (songPicked === "pixiesSong") {
    alert("The Pixies has been picked!");
    eraseAnswer();
    for (var i = 0; i < 10; i++) {
        var total = 7

        document.onkeyup = function (event) {
            var letter = String.fromCharCode(event.which).toUpperCase();

            if (letter === "D") {
                document.getElementById("guess1").innerHTML = pixiesSong[0];
               if (document.getElementById("guess1").innerHTML = pixiesSong[0]) {total = (total -1);}
                console.log(total);
                           }

            if (letter === "E") {
                document.getElementById("guess2").innerHTML = pixiesSong[1];
                if (document.getElementById("guess2").innerHTML = pixiesSong[1]) {total = (total -1);}
                console.log(total);
                           }
            if (letter === "B") {
                document.getElementById("guess3").innerHTML = pixiesSong[2];
                if (document.getElementById("guess3").innerHTML = pixiesSong[2]) {total = (total -1);}
                console.log(total);
                           }
            if (letter === "A") {
                document.getElementById("guess4").innerHTML = pixiesSong[3];
                if (document.getElementById("guess4").innerHTML = pixiesSong[3]) {total = (total -1);}
                console.log(total);
                           }
            if (letter === "S") {
                document.getElementById("guess5").innerHTML = pixiesSong[4];
                if (document.getElementById("guess5").innerHTML = pixiesSong[4]) {total = (total -1);}
                console.log(total);
                           }
            if (letter === "E") {
                document.getElementById("guess6").innerHTML = pixiesSong[5];
                if (document.getElementById("guess6").innerHTML = pixiesSong[5]) {total = (total -1);}
                console.log(total);
                           }
            if (letter === "R") {
                document.getElementById("guess7").innerHTML = pixiesSong[6];
                if (document.getElementById("guess7").innerHTML = pixiesSong[6]) {total = (total -1);}
                console.log(total);
                           }
            if (total === 0) {
                alert("You Win!!!");
                wins=(wins+1);
                document.getElementById("wins").innerHTML = wins
                playGame();
            }
            // <h6 id="wins" style="margin-top:5px">____</h6>
            
            // else loseTurn()
        }
}
}

function eraseAnswer() {


    // cureSong[0] = "P";
    // cureSong[1] = "R";
    // cureSong[2] = "I";
    // cureSong[3] = "M";
    // cureSong[4] = "A";
    // cureSong[5] = "R";
    // cureSong[6] = "Y";
    document.getElementById("guess1").innerHTML = erase[0];
    document.getElementById("guess2").innerHTML = erase[1];
    document.getElementById("guess3").innerHTML = erase[2];
    document.getElementById("guess4").innerHTML = erase[3];
    document.getElementById("guess5").innerHTML = erase[4];
    document.getElementById("guess6").innerHTML = erase[5];
    document.getElementById("guess7").innerHTML = erase[6];

}
}