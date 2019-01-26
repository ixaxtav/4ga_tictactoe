/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

let currentPlayer = '';

window.onload = function(){
    let xsymbol = document.querySelector('#x-button');
    let osymbol = document.querySelector('#o-button');
    let div1 = document.querySelector("#firstDiv");
    let div2 = document.querySelector("#secondDiv");
    let gameBoard = document.querySelector("#board");
   
   
    xsymbol.addEventListener("click", choosePlayer);
    osymbol.addEventListener("click", choosePlayer);
    div2.style.display = "none";
    gameBoard.addEventListener("click", playerMovement);
};

function choosePlayer(evt){
    let inputP1 = document.querySelector("#player1");
    let playerOne = inputP1.value;
    let inputP2 = document.querySelector("#player2");
    let playerTwo = inputP2.value;
    let div1 = document.querySelector("#firstDiv");
    let div2 = document.querySelector("#secondDiv");
    
    if(playerOne == "" && playerTwo == ""){
        alert("please type something");
    } 
    else{
        alert("Player 1 is : " + playerOne  + "   Player 2 : " + playerTwo);
        div1.style.display = "none";
        div2.style.display = "block";
    }
    
    if(evt.target.id == 'x-button') currentPlayer = 'X';
    if(evt.target.id =='o-button') currentPlayer = 'O';
}

function playerMovement(evt){
   
    //if(evt.target.tagName == 'TD'){
     if(currentPlayer == "X"){
         evt.target.innerHTML = "X";
     } else{
         evt.target.innerHTML = "O";
     }
    //}
}