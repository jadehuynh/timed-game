var secondsLeft = 5
var timeDisplay = document.querySelector('.timer-count')
var secRemaining = document.querySelector('h3')
var startButton = document.querySelector('.start-button')
var wordPool = ['more', 'than', 'one', 'word']
var wordDisplay = document.querySelector('.word-blanks')

var wins = 0
var losses = 0

var letters;
var hidden;

startButton.addEventListener('click', function() {
    var timer = setInterval(function () {
        secondsLeft--
        if(secondsLeft < 0){
            clearInterval(timer)
        }else if (secondsLeft === 0){
            timeDisplay.textContent = 'Game Over!'
            secRemaining.textContent = ""
        }else {
            timeDisplay.textContent = secondsLeft
        }
    }, 1000)
    var selectedWord = wordPool[Math.floor(Math.random() * wordPool.length)]
    letters = selectedWord.split('')
    hidden = []
    for (let i = 0; i < letters.length; i++) {
        hidden.push('_')
    }
    wordDisplay.textContent = hidden.join(" ")
    secondsLeft = 5
})





document.addEventListener('keyup', function(e) {
    var key = e.key
    if (letters.includes(key)){
        var index = letters.indexOf(key)
        console.log(index)
        hidden[index] = key
        console.log(hidden)
        wordDisplay.textContent = hidden.join(" ")

    }
   
})











Send a message to 01-live








Shift + Return to add a new line