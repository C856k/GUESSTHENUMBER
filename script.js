"use strict";

window.addEventListener("load", start);

let num;

function start(){
    console.log("JavaScript is running!")
    num = generateRandomNumber();
    document.querySelector("#guess-form").
    addEventListener("submit", recieveGuess)
}

function generateRandomNumber(){
    return 42;
}

function recieveGuess(event){
    event.preventDefault();

    const form = event.target;
    const value = form.guess.value;
    console.log("Recieved guess")
    console.log(value)
    checkGuess(value)
}

function checkGuess(guess){
    if(guess === num){
        guessIsCorrect(guess)
    } else if(guess < num) {
        guessIsTooLow(guess)
    } else {
        guessIsTooHigh(guess)
    }
}

function guessIsCorrect(){
    console.log("No fooling you :)")
}

function guessIsTooLow(){
    console.log("low")
}

function guessIsTooHigh(guess){
    console.log("high")
    const list = document.querySelector("#guess-list");
    const html = `<li>You guessed ${guess} - that was too high! try again</li>`
    list.insertAdjacentHTML("beforeend", html);
}