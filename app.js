/* global _ */

var timeout = 15 // 30 seconds

// players element
var $playerOne = document.querySelector('.player_one')
var $playerTwo = document.querySelector('.player_two')

var $scoreOne = document.querySelector('.one')
var $scoreTwo = document.querySelector('.two')

var $time = document.querySelector('.time')
var $startBt = document.querySelector('#start')
var $winBoard = document.querySelector('.win')

var playerOneCount = 0
var playerTwoCount = 0

var time = 0
var startTime = new Date()
var animationId = null

function onClick (event) {
  var player = event.target.dataset.player

  if (player === 'one') {
    playerOneCount = playerOneCount + 1
  } else if (player === 'two') {
    playerTwoCount = playerTwoCount + 1
  }

  renderBar()
}

function renderBar () {
  var totalClicks = playerOneCount + playerTwoCount

  var widthOne = (playerOneCount * 100) / totalClicks

  // $playerOne.innerText = playerOneCount
  // $playerTwo.innerText = playerTwoCount

  $scoreOne.style.flex = widthOne / 100
  $scoreTwo.style.flex = 1 - (widthOne / 100)
}

function stop () {
  $playerOne.removeEventListener('touchend', onClick)
  $playerTwo.removeEventListener('touchend', onClick)
}

$startBt.addEventListener('click', init)

function game () {
  time = Math.floor((new Date() - startTime) / 1000)

  if (time <= timeout) {
    $time.innerText = `00:${_.padStart(time, 2, 0)}`
    animationId = window.requestAnimationFrame(game)
  } else {
    stop()
    $winBoard.innerText = playerOneCount > playerTwoCount ? 'Rojo gano' : 'Azul gano'
    window.cancelAnimationFrame(animationId)
    console.warn('end')
  }
}

function init () {
  playerOneCount = 0
  playerTwoCount = 0

  time = 0
  startTime = new Date()
  animationId = null

  $playerOne.addEventListener('touchend', onClick)
  $playerTwo.addEventListener('touchend', onClick)

  $winBoard.innerText = ''

  animationId = window.requestAnimationFrame(game)
}
