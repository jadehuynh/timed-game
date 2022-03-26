var welcomeTxt= document.querySelector('.lrgTitle')
var rules= document.querySelector('.intro-Rules')
var beginGame= document.querySelector('.start-btn')
var timeLeft= 5
var blank= document.querySelector('#blankSpace')
var timeDisplay= document.querySelector('timerStart')
var quest= document.querySelector('questions')






beginGame.addEventListener('click', function() {
    var timer = setInterval(function () {
        timeLeft--; 
            if(timeLeft < 0){
            clearInterval(timer)
         }else if (timeLeft === 0){
            alert('Game Over!')
            timeDisplay.textContent= timeLeft
            timeLeft.textContent = ""
         }else {
            timeDisplay.textContent = blank
        
    )},1000)
}
