"use strict"

// v.1.0
var buttons = document.getElementsByTagName("button")
var answerWas = document.querySelectorAll("p")[0]
var result = document.querySelectorAll("p")[1]
var won = document.querySelectorAll("span")[0]
var tied = document.querySelectorAll("span")[1]
var lost = document.querySelectorAll("span")[2]

for(var x of buttons){
    x.addEventListener("click", function(){
        var random = Math.floor(Math.random() * 3)        
        var options = [
            `ROCK <i class="fa-solid fa-hand-back-fist"></i>`,
            `PAPER <i class="fa-solid fa-hand"></i>`,
            `SCISSORS <i class="fa-solid fa-hand-scissors"></i>`]
        var answer = options[random]
        
        if(
            (answer == options[0] && this.textContent == 'Rock ') ||
            (answer == options[1] && this.textContent == 'Paper ') ||
            (answer == options[2] && this.textContent == 'Scissors ')){
                tieTie(answer)
        }
        if(
            (answer == options[1] && this.textContent == 'Rock ') ||
            (answer == options[2] && this.textContent == 'Paper ') ||
            (answer == options[0] && this.textContent == 'Scissors ')){
                loseLose(answer)
        }
        if(
            (answer == options[2] && this.textContent == 'Rock ') ||
            (answer == options[0] && this.textContent == 'Paper ') ||
            (answer == options[1] && this.textContent == 'Scissors ')){
                winWin(answer)
        }
    })
}

function winWin(answer) {
    answerWas.innerHTML = (`Opponent chose ${answer}`)
    result.innerText = (`You Won!`)
    result.style.color = "green"
    won.textContent++
}

function loseLose(answer) {
    answerWas.innerHTML = (`Opponent chose ${answer}`)
    result.innerText = (`You Lost!`)
    result.style.color = "red"
    lost.textContent++
}

function tieTie(answer) {
    answerWas.innerHTML = (`Opponent chose ${answer}`)
    result.innerText = (`It's a Tie!`)
    result.style.color = "grey"
    tied.textContent++
}