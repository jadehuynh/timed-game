var rootEl = $('#root');

var welcomeTxt= document.querySelector('.lrgTitle')
var rules= document.querySelector('.intro-Rules')
var beginGame= document.querySelector('.start-btn')
var timeLeft= 5
var timeDisplay= document.querySelector('.timerStart')
var quest= document.querySelector('.questions')


//made prompt with rules for creating an element to hold the text
const procedures = document.createElement("p");
rules.appendChild(procedures).textContent= alert('Welcome to the TIMED QUIZ GAME! This is a multiple choice game. Please read the question(s) carefully before selecting ONE of the FOUR answers provided to proceed. If you finish answering all the given questions before the timer reaches ZERO, you win! Although, if you DO NOT finish within the alotted time- YOU LOSE!')



//start button function to also begin timer
beginGame.addEventListener('click', function () {

    var timer = setInterval(function () {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer)
        }
        //if time runs out and user did not finish all the questions the alert shows
        else if (timeLeft === 0) {
            alert('Game Over!')
            timeDisplay.textContent= timeLeft
            timeLeft.textContent = ""
        }
        else (
            timeDisplay.textContent = timeLeft
        
     )} , 1000)
         
})

//created h3 element to display time remaining
const secondsLeft = document.createElement("h3");
timeDisplay.appendChild(secondsLeft).textContent= ('time remaining!!!')
//created h3 element to display questions
const questTitle= document.createElement("h3");
quest.appendChild(questTitle).textContent= ('QUESTIONS')
//created h3 element to display text content
const hoiNgu = document.createElement("p");
quest.appendChild(hoiNgu).textContent= ('Test.')