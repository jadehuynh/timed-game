var winScore = 0;
var lossScore = 0;
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var scoreBoard = document.querySelector('scoreContainer');
var intiialsEl = document.getElementById('initials')
var scoreEl = document.getElementById('score')



function init() {
    getWins();
    getlosses();
  }


function saveScore() {
    var intiials = intiialsEl.value.trim()
    var score = scoreEl.value.trim()
    var highScores = JSON.parse.window.localStorage.getItem(highScores) || [];
    var userRecord = {
        score: highScores,
        initials: initials,
    }
    highScores.push(userRecord)
    window.localStorage.setItem("highScores",JSON.stringify.highScores)
}

// function winGame() {
//     scoreBoard.textContent = "Javascript Master!";
//     winScore++
//     setWins()
//   }
// function loseGame() {
//     scoreBoard.textContent = "Nice Try!";
//     lossScore++
//     setLosses()
//   }
// function setWins() {
//     if (timerLeft >= 0) {
//         if (timer && timerLeft > 0) {
//             winScore.push(scoreBoard);
//           clearInterval(timer);
//           winGame();
//         }
//         else {
//             (timerLeft === 0);
//             lossScore.push(scoreBoard);
//         }
//       }
//     win.textContent = winScore;
//     localStorage.setItem("winCount", winScore);
//   }
// function setLosses() {
//     lose.textContent = lossScore;
//     localStorage.setItem("loseCount", lossScore);
//   }

// function getWins() {
//     var savedWins = localStorage.getItem("winScore");
    
//         if (savedWins === null) {
//         winScore = 0;
//         } else {
//         winScore = savedWins;
//         }   
//         win.textContent = winScore;
//   }
  
// function getlosses() {
//     var storedLoss = localStorage.getItem("loseCount");
//          if (storedLoss === null) {
//          lossScore = 0;
//         } else {
//         lossScore = storedLoss;
//          }
//         lose.textContent = lossScore;
//   }

// init()
// console.log(init)

