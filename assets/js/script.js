var rootEl = $('#root');

var welcomeTxt= document.querySelector('.lrgTitle')
var rules= document.querySelector('.intro-Rules')
var beginGame= document.querySelector('.start-btn')
var timeLeft= 5
var timeDisplay= document.querySelector('.timerStart')
var quest= document.querySelector('.questions')




const procedures = document.createElement("p");
rules.appendChild(procedures).textContent= alert('This is a multiple choice game! Please read the question carefuly before selecting ONE of the FOUR answers provided to proceed. If you finish answering all the given questions before the timer reaches ZERO, you win! Although, if you DO NOT finish within the alotted time- YOU LOSE!')




beginGame.addEventListener('click', function () {

    var timer = setInterval(function () {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer)
        }
        else if (timeLeft === 0) {
            alert('Game Over!')
            timeDisplay.textContent= timeLeft
            timeLeft.textContent = ""
        }
        else (
            timeDisplay.textContent = timeLeft
        
     )} , 1000)
         
})


const hoiNgu = document.createElement("p");
quest.appendChild(hoiNgu).textContent= ('Test.')