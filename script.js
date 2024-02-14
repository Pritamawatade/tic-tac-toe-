console.log("welcome to tic tac toe");
audioturn = new Audio("ting.mp3")
let turn  = "X"
let gameover =  false;

//funxtion to change the turn


const changeTurn = () =>{
    return turn === "X"?"0": "X"

}
//function to chack win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,8],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="") )
        { 
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
        gameover = true
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })

}
//game logic
let boxes  = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {  
    let  boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
           turn =  changeTurn();
            audioturn.play();
            checkWin();
            if(!gameover){

                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
    })

})     

// add onclick listner to reset the game
reset.addEventListener('click' , () =>{
    let boxtexts = document.getElementsByClassName('boxtext');
Array.from(boxes).forEach(element => {  
    element.innerText = ""
});
turn = "x";
gameover=false;
document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"





})