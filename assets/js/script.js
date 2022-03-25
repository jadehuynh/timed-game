var welcomeTxt= document.querySelector('.lrgTitle')
var rules= document.querySelector('.intro-Rules')
var beginGame= document.querySelector('.start-btn')
var completeTime= 5
var blank= document.querySelector('#blankSpace')
var timeDisplay= document.querySelector('timerStart')













beginGame.addEventListener('click', function() {
    var timer = setInterval(function() {
        completeTime--;
        timeDisplay.textContent = completeTime;
        console.log(totalTime)
        if(completeTime <= 0){
            console.log('game over')
            clearInterval(timer)
    }}, 1000)
})