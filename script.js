"use strict"

// v.1.0
var buttons = document.getElementsByTagName("button")
var answerWas = document.querySelectorAll("p")[0]
var result = document.querySelectorAll("p")[1]
var won = document.querySelectorAll("span")[0]
var tied = document.querySelectorAll("span")[1]
var lost = document.querySelectorAll("span")[2]
var winCount = 0
var tieCount = 0
var loseCount = 0

for(var x of buttons){
    x.addEventListener("click", function(){
        var random = Math.floor(Math.random() * 3)        
        var options = ["Rock", "Paper", "Scissors"]
        var answer = options[random]

        // console.log(answer)
        // console.log(this.innerHTML)
        
        if(answer == "Rock" && this.innerHTML == 'Rock <i class="fa-solid fa-hand-back-fist"></i>'){
            var answerRock = answerWas.innerHTML = (`Answer was ROCK <i class="fa-solid fa-hand-back-fist"></i>`)
            var youTied = result.innerText = (`It's a Tie!`)
            youTied = result.style.color = "grey"
            tieCount++
            tied.innerText = (`${tieCount}`)  
        }
        if(answer == "Paper" && this.innerHTML == 'Rock <i class="fa-solid fa-hand-back-fist"></i>'){
            var answerPaper = answerWas.innerHTML = (`Answer was PAPER <i class="fa-solid fa-hand-back-fist"></i>`)
            var youLost = result.innerText = (`You Lost!`)
            youLost = result.style.color = "red"
            loseCount++
            lost.innerText = (`${loseCount}`)
        }
        if(answer == "Scissors" && this.innerHTML == 'Rock <i class="fa-solid fa-hand-back-fist"></i>'){
            var answerScissors = answerWas.innerHTML = (`Answer was SCISSORS <i class="fa-solid fa-hand-back-fist"></i>`)
            var youWon = result.innerText = (`You Won!`)
            youWon = result.style.color = "green"
            winCount++,
            won.innerText = (`${winCount}`)
        }

        if(answer == "Rock" && this.innerHTML == 'Paper <i class="fa-solid fa-hand"></i>'){
            var answerRock = answerWas.innerHTML = (`Answer was ROCK <i class="fa-solid fa-hand-back-fist"></i>`)
            var youWon = result.innerText = (`You Won!`)
            youWon = result.style.color = "green"
            winCount++,
            won.innerText = (`${winCount}`)
        }
        if(answer == "Paper" && this.innerHTML == 'Paper <i class="fa-solid fa-hand"></i>'){
            var answerPaper = answerWas.innerHTML = (`Answer was PAPER <i class="fa-solid fa-hand-back-fist"></i>`)
            var youTied = result.innerText = (`It's a Tie!`)
            youTied = result.style.color = "grey"
            tieCount++
            tied.innerText = (`${tieCount}`)  
        }
        if(answer == "Scissors" && this.innerHTML == 'Paper <i class="fa-solid fa-hand"></i>'){
            var answerScissors = answerWas.innerHTML = (`Answer was SCISSORS <i class="fa-solid fa-hand-back-fist"></i>`)
            var youLost = result.innerText = (`You Lost!`)
            youLost = result.style.color = "red"
            loseCount++
            lost.innerText = (`${loseCount}`)
        }

        if(answer == "Rock" && this.innerHTML == 'Scissors <i class="fa-solid fa-hand-scissors"></i>'){
            var answerRock = answerWas.innerHTML = (`Answer was ROCK <i class="fa-solid fa-hand-back-fist"></i>`)
            var youLost = result.innerText = (`You Lost!`)
            youLost = result.style.color = "red"
            loseCount++
            lost.innerText = (`${loseCount}`)
        }
        if(answer == "Paper" && this.innerHTML == 'Scissors <i class="fa-solid fa-hand-scissors"></i>'){
            var answerPaper = answerWas.innerHTML = (`Answer was PAPER <i class="fa-solid fa-hand-back-fist"></i>`)
            var youWon = result.innerText = (`You Won!`)
            youWon = result.style.color = "green"
            winCount++,
            won.innerText = (`${winCount}`)
        }
        if(answer == "Scissors" && this.innerHTML == 'Scissors <i class="fa-solid fa-hand-scissors"></i>'){
            var answerScissors = answerWas.innerHTML = (`Answer was SCISSORS <i class="fa-solid fa-hand-back-fist"></i>`)
            var youTied = result.innerText = (`It's a Tie!`)
            youTied = result.style.color = "grey"
            tieCount++
            tied.innerText = (`${tieCount}`)  
        }
    })
}