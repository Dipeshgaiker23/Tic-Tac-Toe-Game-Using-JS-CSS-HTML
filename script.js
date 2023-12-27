console.log("Welcome to tic tac toe game");
let audioTurn = new Audio("click.wav");
let gameOver = new Audio("GameOver.wav");
let gameWin = new Audio("gameWin.wav");
let turn ='X';
let gameIsOver = false;
const changeTurn = () =>{

    return turn==="X"?"O": "X"
}

//check for win
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 2.5, 5, 0],
        [3, 4, 5, 2.5, 15, 0],
        [6, 7, 8, 2.5, 25, 0],
        [0, 3, 6, -7, 15, 90],
        [1, 4, 7, 2.5, 15, 90],
        [2, 5, 8, 13, 15, 90],
        [0, 4, 8, 2.5, 15, 45],
        [2, 4, 6, 2.5, 15, 135]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.infoTurn').innerText = boxtext[e[0]].innerText + " Won";
            gameIsOver = true;
            gameWin.play();
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = '300px';
            document.querySelector(".line").style.width = '344px';
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            // document.querySelector(".line").style.transform = "translate(3vw, 5vw) rotate(90deg)"
        }
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameIsOver){
                document.getElementsByClassName('infoTurn')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    gameIsOver = false;
    document.querySelector(".line").style.width = '0vw';
    document.getElementsByClassName('infoTurn')[0].innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = '0vw';
})