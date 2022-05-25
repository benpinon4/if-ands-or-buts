const prompt = require('prompt-sync')({sigint: true});

let player1 = (prompt("Player 1 please enter rock, paper, or scissors: "))
let player2 = (prompt("Player 2 please enter rock, paper, or scissors: "))

let var1 = "scissors"
let var2 = "rock"
let var3 = "paper"

if (player1 === var1 && player2 === var3){
    console.log("Player 1 Wins!")
} else if (player1 === var1 && player2 === var2){
    console.log("Player 2 wins!")
} else if (player1 === var2 && player2 === var3){
    console.log("Player 2 wins!")
} else if (player1 === var2 && player2 === var1){
    console.log("Player 1 Wins!")
} else if (player1 === var3 && player2 === var1){
    console.log("Player 2 Wins!")
} else if (player1 === var3 && player2 === var2){
    console.log("Player 1 wins!")
} else if (player1 === var1 && player2 === var1 || player1 === var2 && player2 === var2 || player1 === var3 && player2 === var3){
    console.log ("Tie")
}      
// } else if (player1 || player2 === var1 && player1 || player2 === var1){
//     console.log("Tie")
// } else if (player1 || player2 === var2 && player1 || player2 === var2){
//      console.log("Tie")
//rock beats scissors  paper beats rock scissors beat paper
//player 1 and 








//player 2

