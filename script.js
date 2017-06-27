var score = 0
var color = ['red', 'blue', 'green', 'yellow']

var colorText = document.querySelector('.colorText')
var startButton = document.querySelector('.startButton')
var scoreboard = document.querySelector('.scoreboard')
var randomBackgroundColorInterval
var randomTextInterval
var randomTextBackgroundInterval
scoreboard.textContent = score

startButton = document.createElement('button')
startButton.textContent = 'Start'
document.body.appendChild(startButton)
startButton.addEventListener('click', removeStartButton)

function randomColor () {
  return color[Math.floor(Math.random() * color.length)]
}

function randomBackgroundColor () {
  document.body.style.background = randomColor()
  // console.log('My background color is '+ document.body.style.background)
}

function randomText () {
  colorText.textContent = randomColor()
  // console.log('My colorText is '+ colorText.textContent)
}

// function randomTextColor () {
//   colorText.style.color = randomColor()
// }

function randomTextBackground () {
  colorText.style.background = randomColor()
}

function removeStartButton () {
  startButton.parentNode.removeChild(startButton)
}

startButton.addEventListener('click', function () {
  randomBackgroundColorInterval = setInterval(randomBackgroundColor, 1000)
})

startButton.addEventListener('click', function () {
  randomTextInterval = setInterval(randomText, 1000)
})

// startButton.addEventListener('click', function () {
//   setInterval(randomTextColor, 3000)
// })

startButton.addEventListener('click', function () {
  randomTextBackgroundInterval = setInterval(randomTextBackground, 1000)
})

colorText.addEventListener('click', checkAnswer)

function checkAnswer () {
  if (colorText.textContent === document.body.style.background) {
    score++
    scoreboard.textContent = score
  }
  if (colorText.textContent !== document.body.style.background) {
    score--
    scoreboard.textContent = score
  }
  if (score === 5) {
    gameOver()
  }
}

function gameOver () {
  clearInterval(randomBackgroundColorInterval)
  clearInterval(randomTextInterval)
  clearInterval(randomTextBackgroundInterval)
  restartButton = document.createElement('button')
  restartButton.textContent = 'Start New Game'
  document.body.appendChild(restartButton)
  restartButton.addEventListener('click', newGame)

}

function newGame () {
  restartButton.parentNode.removeChild(restartButton)
  randomBackgroundColorInterval = setInterval(randomBackgroundColor, 1000)
  randomTextInterval = setInterval(randomText, 1000)
  randomTextBackgroundInterval = setInterval(randomTextBackground, 1000)
  score = 0
  scoreboard.textContent = score
}
