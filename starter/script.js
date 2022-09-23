'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ("Correct Number!");

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/ 

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let message = document.querySelector('.message').textContent;
let guess = document.querySelector('.guess').textContent;
let number = document.querySelector('.number').textContent;

document.querySelector('.again').addEventListener('click', function (){
    //challenge correction
    //score = 20;
    document.querySelector('.guess').value = ''
    secretNumber = Math.trunc(Math.random() * 20) + 1;
     // MY ATTEMPT
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = message;
    //document.querySelector('.guess').textContent = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('number').style.width = '15rem';
    
})
document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //When there is no input
    if(guess == '') {
        document.querySelector('.message').textContent = '⛔ No number!';
        // When player wins
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        // When guess is too high
    } else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈Too High!';
        score--;
        document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = '💥You lost the game';
            document.querySelector('.score').textContent = 0;
        }
        // When guess is too low
    } else if(guess < secretNumber){
       if(score > 1){
        document.querySelector('.message').textContent = '📉Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
       } else{
        document.querySelector('.message').textContent = '💥You lost the game';
        document.querySelector('.score').textContent = 0;
    }
    }
})