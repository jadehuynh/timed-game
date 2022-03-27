var rootEl = $('#root');

var welcomeTxt= document.querySelector('.lrgTitle')
var rules= document.querySelector('.intro-Rules')
var beginGame= document.querySelector('.start-btn')
var timeLeft= 5
var timeDisplay= document.querySelector('.timerStart')
var quest= document.querySelector('#questions')
var container= document.querySelector('#content')
var userChoice= document.querySelector('.answers')

var quizQuests = [
    "What is the correct abbreviation for JavaScript? ", 
    "What does 'var' stand for in JavaScript Language?", 
    "What kind of special characters follow the word 'function'?", 
    "What kind of data type involves true or false conditions?", 
    "What is the purpose of the 'concat()' method?"];

var quizAns = [
    "JS", 
    "'Variable", 
    "Parenthesis & Curly Brackets", 
    "Boolean", 
    "To join"];




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

function showQuestion() {
//I need to figure out how to interchange the array of questions in and out
    var questionIndex = Math.floor(Math.random() * quizQuests.length);

beginGame.addEventListener('click', questionIndex)
quest.appendChild(quest).textContent= (quizQuests[i])



//I need to figure out how to all boolean conditions to all answer selections and how to interchange them with the array
if (userChoice === true) {
    window.alert("Correct answer!");
  
} else if (
    (userChoice === false)

  ) {
    window.alert("Incorrect. Please try again.");
  }
console.log(showQuestion)
}

//created h3 element to display questions
const questTitle= document.createElement("h3");
quest.appendChild(questTitle).textContent= ('QUESTIONS')
