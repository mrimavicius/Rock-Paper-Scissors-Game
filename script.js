"use strict"

// v.2.0
var buttons = document.getElementsByTagName("button")
var roll = document.querySelector(".roll")
var answerWas = document.querySelector(".answerWas")
var result = document.querySelector(".result")
var won = document.querySelectorAll("span")[0]
var tied = document.querySelectorAll("span")[1]
var lost = document.querySelectorAll("span")[2]

// Add click to all options
for(var x of buttons){
    x.addEventListener("click", function(){
        // Clear results
        result.innerText = ""

        // Generate random option for opponent
        var random = Math.floor(Math.random() * 3)        
        var options = [
            `ROCK <i class="fa-solid fa-hand-back-fist"></i>`,
            `PAPER <i class="fa-solid fa-hand"></i>`,
            `SCISSORS <i class="fa-solid fa-hand-scissors"></i>`]
        var answer = options[random]
        
        // Start animation on button click
        roll.classList.add("animation")
        roll.innerHTML = `
        <p><i class="fa-regular fa-hand-point-down"></i></p>
        <p></p>
        <p><i class="fa-regular fa-hand-point-down"></i></p>
        `

        // Disable buttons for animation duration
        for(var x of buttons){
            x.disabled = true
        }

        setTimeout(() => {
            for(var x of buttons){
                x.disabled = false
            }  
        }, 1000);

        // Show results after animation ends
        setTimeout(() => {
            roll.innerHTML = `
            <p>${this.innerHTML}</p>
            <p>VS</p>
            <p>${answer}</p>
            `

            if(
                (answer == options[0] && this.innerText == 'ROCK ') ||
                (answer == options[1] && this.innerText == 'PAPER ') ||
                (answer == options[2] && this.innerText == 'SCISSORS ')){
                    tieTie()
            }
            if(
                (answer == options[1] && this.innerText == 'ROCK ') ||
                (answer == options[2] && this.innerText == 'PAPER ') ||
                (answer == options[0] && this.innerText == 'SCISSORS ')){
                    loseLose()
            }
            if(
                (answer == options[2] && this.innerText == 'ROCK ') ||
                (answer == options[0] && this.innerText == 'PAPER ') ||
                (answer == options[1] && this.innerText == 'SCISSORS ')){
                    winWin()
            }

            // Remove animation when results are shown
            roll.classList.remove("animation")
        }, 1000)  
    })
}

function winWin() {
    result.innerText = (`You Won!`)
    result.style.color = "green"
    won.textContent++
}

function loseLose() {
    result.innerText = (`You Lost!`)
    result.style.color = "red"
    lost.textContent++
}

function tieTie() {
    result.innerText = (`It's a Tie!`)
    result.style.color = "grey"
    tied.textContent++
}