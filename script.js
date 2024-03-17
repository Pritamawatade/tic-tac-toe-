console.log("Welcome to tic tac toe");

const audioturn = new Audio("ting.mp3");
let turn = "X";
let gameover =  false;
let boxes = document.getElementsByClassName("box");

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let win of wins) {
        let [a, b, c] = win;
        if (boxtext[a].innerText !== "" && boxtext[a].innerText === boxtext[b].innerText && boxtext[a].innerText === boxtext[c].innerText) { 
            document.querySelector('.info').innerText = turn + " Won";
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            break;
        }
    }
};

// Game logic
for (let box of boxes) {  
    let boxtext = box.querySelector('.boxtext');
    box.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameover) {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!gameover) {
                document.querySelector('.info').innerText = "Turn for " + turn;
            }
        }
    });
}

// Reset button click listener
document.getElementById('reset').addEventListener('click', () => {
    for (let box of boxes) {
        box.querySelector('.boxtext').innerText = "";
    }
    turn = "X";
    gameover = false;
    document.querySelector('.info').innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
});
