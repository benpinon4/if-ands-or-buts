const prompt = require('prompt-sync')({sigint: true});

let pin = Number(prompt("Please enter your correct pin: "))

let pinCode = 1234

if (pin === pinCode){
    console.log("Sucess")
} else (console.log("Failure"))