// '//' is how you comment
// Idk what to put here

//make variables for the buttons bro
let joverButton = document.getElementById("jover");
let joverTextReference = document.getElementById("jover-text")

//query selector to search multiple elements
let ticButton = document.querySelectorAll(".tic-tac-button")

//make lists to go4dawin
let threeToWin = [
    //horizontal wins
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],  

    //vertical wins
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //diagonal wins
    [0, 4, 8],
    [2, 4, 6]
]

//pvp: whos turn is it? Player1 goes first
let firstTurn = true;
let turnCount = 0; // counter to count the turns that have passed


//what happens when a tic-tac-toe button gets clicked !!!11
ticButton.forEach(clickyTic);

//

function clickyTic(element) {
    element.addEventListener("click", () => {
        if (firstTurn == true) { //Player 1's turn
            firstTurn = false; //switch turns
            element.innerText = "X"; //draw X
            element.disabled = true; //make button not able to be clicked anymore
        }
        else { //Player 2's turn
            firstTurn = true; //switch turns
            element.innerText = "O"; //draw da O
            element.disabled = true; //make button not able to be clicked anymore
        }
        turnCount += 1; //increase counter on every click
        //checkDraw(); //check for draws on every click
        //checkWin(); //check for wins on every click

    }
    )
}
/*
function checkDraw { //what happens in a draw?*/