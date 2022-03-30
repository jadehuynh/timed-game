//global variables for the prompt with rules, title of game, and the start button
var welcomeTxt= document.querySelector('.lrgTitle')
var rules= document.querySelector('.intro-Rules')
var beginGame= document.querySelector('.start-btn'); beginGame.style.position = "sticky";
beginGame.style.left = "50%";
beginGame.style.transform = "translateX(-50%)";
//global variables for the timer counting down, and for the questions and answers
var timeLeft= 60
var timeDisplay= document.querySelector('.timerStart')
var quest= document.querySelector('#questions')
var container= document.querySelector('#content')
var userChoice= document.querySelector('.answers')
var questionContainer= document.querySelector('#questionContainer')
var nextBtn= document.querySelector('.nextBtn'); nextBtn.style.position = "sticky";
nextBtn.style.left = "49%";
nextBtn.style.transform = "translateX(-49%)";

//section and container holding the trivia section
questionContainer.style.display= "none"
//question and answer object
var questions= [
    {
        question: "What is the correct abbreviation for JavaScript?",
        answers: ["JS", "JV", "JVS", "JA"],
        cAnswer: "JS"
    },
    {
        question: "What does 'var' stand for in JavaScript Language?",
        answers: ["Variety", "Variable", "Varietal", "Varying"],
        cAnswer: "Variable"
    },
    {
        question: "What kind of punctuation follows the word 'function'?",
        answers: ["( ) and ' '", "{ } & //", "( ) & { }", "# & [ ]"],
        cAnswer: "( ) & { }"
    },
    {
        question: "What kind of Primitive Data Type involves 'true' or 'false' conditions?",
        answers: ["Null", "Undefined", "String", "Boolean"],
        cAnswer: "Boolean"
    },
    {
        question: "What does the 'concat( )' method do?",
        answers: ["Multiply", "Join", "Subtract", "Discard"],
        cAnswer: "Join"
    },
]

var questionIndex= 0

function showQuestion(index) {
    quest.textContent= ""
    userChoice.textContent= ""
    for (var i = 0; i < questions.length; i++) {
        var Q= (questions[index].question)
        var answerList= (questions[index].answers)
        quest.textContent= Q
    }
    answerList.forEach(function(ans) {
        var answerButton= document.createElement("button"); 
        answerButton.style.position = "inline";
        answerButton.style.left = "49%";
        answerButton.style.transform = "translateX(-49%)";
            answerButton.classList.add("answer-btn")
            answerButton.textContent= ans
            userChoice.appendChild(answerButton)
            answerButton.addEventListener('click', function () {
                //console.log(answerButton.textContent)
                ansCheck(answerButton.textContent)
            })

    })
}

let answer;
var scoreKeeper= [];
var anAnswer = anAnswer || 0;
//function to check for correct/incorrect answers in the object and to deduct time for incorrect selections
//function also displays messages on correct/incorrect 
var checker= document.createElement("h2")
function ansCheck(answer) {
    var scoreBoard= document.getElementById('scoreInfo')
        if (answer === questions[questionIndex].cAnswer) {
            anAnswer++;
            scoreBoard.textContent= anAnswer + " out of 5 correct answers";
            checker.textContent= "Great work! Your selection is correct."
        }
            else {
                console.log("wrong")
                checker.textContent= "Sorry! Your selection is incorrect. Please refresh the browser to try again."
                timeLeft= timeLeft-5;
            }
            questionContainer.appendChild(checker)
            questionIndex++;
            next(questionIndex)
            console.log(questionIndex)
}
//variables to hide and show containers during appropiate time
var mainContainer = document.getElementById('content')
var scoreScore = document.getElementById('scoreScore')
scoreScore.style.display="none";
var infoInput = document.getElementById('infoInput')
infoInput.style.display="none";
function next(index) {
    nextBtn.addEventListener('click', function() {
       if (index >= questions.length) {
           alert("You're Done!")
           clearInterval(timer)
           mainContainer.style.display="none";
           scoreScore.style.display="block";
           infoInput.style.display="block";
       }
       else {
        checker.textContent= " "
        showQuestion(index)
       }
    })
}


//made prompt with rules for creating an element to hold the text
const procedures = document.createElement("p");
rules.appendChild(procedures).textContent= alert('Welcome to the TIMED QUIZ GAME! This is a multiple choice game. Please read the question(s) carefully before selecting ONE of the FOUR answers provided to proceed. You are given 60 seconds to answer all five questions. For every incorrect answer the user selects, five seconds will be deducted from the timer. Should the player finish answering all given questions before the timer reaches ZERO, you win! Although, if the user does NOT finish within the 60 seconds alloted- YOU LOSE! Please refresh the browser to try again.')


var timer;
//start button function to also begin timer
beginGame.addEventListener('click', function () {
    questionContainer.style.display= "block"
    showQuestion(questionIndex)
     timer = setInterval(function () { 
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


//variables for functions to store user input
var userInitialInput= document.getElementById('intial')
var userScoreInput= document.querySelector('#score')
var saveButtonInput= document.querySelector('#saveButton')
var playerRecords= [];

let userRecord;

//for the block below, I had trouble making a function to log the user input of initals and high score and ended up not needing this block of code!

// playerRecords.forEach(function(playerRecords) {
//     var saveButtonInput= document.createElement("button"); 
//         saveButtonInput.classList.add("saveButton")
//         saveButtonInput.textContent= userRecord.push(playerRecords)
//         saveButtonInput.appendChild(saveButtonInput)
//         userRecord.appendChild(saveButtonInput)
//         saveButtonInput.addEventListener('click', function () {
            
//             renderMessage(saveButtonInput)
//         })
//     })


//function to push user information and score to local storage
saveButtonInput.addEventListener("click", function (event) {
    event.preventDefault();
     userRecord= {
        Intials: userInitialInput.value,
        Score: userScoreInput.value,
    };
    playerRecords.push(userRecord);
  
    localStorage.setItem("userRecord", JSON.stringify(playerRecords));
    renderMessage();
    console.log(userRecord)
});

//function to publish information and to alertd the user they are finished
function renderMessage(playerRecords) {
    var playerListFromStorage = JSON.parse(localStorage.getItem("userRecord"));  
   
   
    for (var i = 0; i < playerListFromStorage.length; i++) {
        console.log(playerListFromStorage[userRecord]);
        allData += playerListFromStorage[userRecord];
    }
    var allData = "";
    
    document.querySelector("#scoreInfo").innerHTML = allData;
       }

//created h3 element to display questions
const questTitle= document.createElement("h3");
quest.appendChild(questTitle).textContent= ('QUESTIONS')
