var rootEl = $('#root');

var welcomeTxt= document.querySelector('.lrgTitle')
var rules= document.querySelector('.intro-Rules')
var beginGame= document.querySelector('.start-btn')
var timeLeft= 30
var timeDisplay= document.querySelector('.timerStart')
var quest= document.querySelector('#questions')
var container= document.querySelector('#content')
var userChoice= document.querySelector('.answers')
var questionContainer= document.querySelector('#questionContainer')
var nextBtn= document.querySelector('nextBtn')
questionContainer.style.display= "none"

var questions= [
    {
        question: "7 x 7",
        answers: ["49", "59", "69", "79"],
        cAnswer: "49"
    },
    {
        question: "8 x 8",
        answers: ["49", "59", "69", "64"],
        cAnswer: "64"
    },
    {
        question: "9 x 9",
        answers: ["49", "59", "81", "79"],
        cAnswer: "81"
    },
]
var questionIndex= 0

function showQuestion(index) {
    for (var i = 0; i < questions.length; i++) {
        var Q= (questions[index].question)
        var answerList= (questions[index].answers)
        quest.textContent= Q
    }
    answerList.forEach(function(ans) {
        var answerButton= document.createElement("button")
            answerButton.classList.add("answer-btn")
            answerButton.textContent= ans
            userChoice.appendChild(answerButton)
            answerButton.addEventListener('click', function () {
                //console.log(answerButton.textContent)
                ansCheck(answerButton.textContent)
            })
            
    })
}
    
var checker= document.createElement("h2")
function ansCheck(answer) {
    
        if (answer === questions[questionIndex].cAnswer) {
            console.log("correct")
            checker.textContent= "Correct!"
        }
            else {
                console.log("wrong")
                checker.textContent= "Incorrect."
            }
            questionContainer.appendChild(checker)
            questionIndex++;
            next(questionIndex)
}

function next(index) {
    nextBtn.addEventListener('click', function() {
       if (index >= questions.length) {
           console.log()
       }
       else {
        checker.textContent= " "
        showQuestion(index)
       }
    })
}




//made prompt with rules for creating an element to hold the text
const procedures = document.createElement("p");
rules.appendChild(procedures).textContent= alert('Welcome to the TIMED QUIZ GAME! This is a multiple choice game. Please read the question(s) carefully before selecting ONE of the FOUR answers provided to proceed. If you finish answering all the given questions before the timer reaches ZERO, you win! Although, if you DO NOT finish within the alotted time- YOU LOSE!')



//start button function to also begin timer
beginGame.addEventListener('click', function () {
    questionContainer.style.display= "block"
    showQuestion(questionIndex)
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

// function showQuestion() {
// //I need to figure out how to interchange the array of questions in and out
//     var questionIndex = Math.floor(Math.random() * quizQuests.length);

// beginGame.addEventListener('click', questionIndex)
// quest.appendChild(quest).textContent= (quizQuests[i])



// //I need to figure out how to all boolean conditions to all answer selections and how to interchange them with the array
// if (userChoice === true) {
//     window.alert("Correct answer!");
  
// } else if (
//     (userChoice === false)

//   ) {
//     window.alert("Incorrect. Please try again.");
//   }
// console.log(showQuestion)
// }

//created h3 element to display questions
const questTitle= document.createElement("h3");
quest.appendChild(questTitle).textContent= ('QUESTIONS')
