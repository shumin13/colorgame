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

instruction = document.createElement('div')
instruction.textContent = 'Instruction: Click the oval shape when the word in the oval matches the page background colour. 1 point for each correct answer and -1 point for each incorrect answer. Maximum score is 5. Press start to begin.'
document.body.appendChild(instruction)

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
  instruction.parentNode.removeChild(instruction)
}

startButton.addEventListener('click', function () {
  randomBackgroundColorInterval = setInterval(randomBackgroundColor, 1200)
})

startButton.addEventListener('click', function () {
  randomTextInterval = setInterval(randomText, 1200)
})

// startButton.addEventListener('click', function () {
//   setInterval(randomTextColor, 3000)
// })

startButton.addEventListener('click', function () {
  randomTextBackgroundInterval = setInterval(randomTextBackground, 1200)
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
  randomBackgroundColorInterval = setInterval(randomBackgroundColor, 1200)
  randomTextInterval = setInterval(randomText, 1200)
  randomTextBackgroundInterval = setInterval(randomTextBackground, 1200)
  score = 0
  scoreboard.textContent = score
}
