var game = document.getElementById('game')
var mensaje = document.getElementById('mensaje')
var match = 0
var carta1 = null
var carta2 = null
var parejas = 0

function play () {
  game.innerHTML = ''
  mensaje.innerText = ''
  match = 0
  carta1 = null
  carta2 = null

  var mazo = [1, 2, 3, 4, 5, 6]
  parejas = mazo.length

  // Duplico y revuelvo la lista para preparar el juego.
  mazo = mazo.concat(mazo)
  mazo = mazo.sort(function () { return Math.random() - 0.5 })

  // Creo los contenedores para cada una de las cartas.
  for (var i = 0; i < mazo.length; i++) {
    var carta = document.createElement('div')
    game.appendChild(carta)
  }

  var cartas = game.getElementsByTagName('div')

  for (var i = 0; i < mazo.length; i++) {
    var image = document.createElement('img')
    image.setAttribute('src', 'assets/' + mazo[i] + '.png')
    cartas[i].appendChild(image)
    image.addEventListener('click', onAction, false)
  }
}

function onAction (evento) {
  var carta = evento.target
  if (carta1 !== null && carta2 !== null) {
    if (carta1.src !== carta2.src) {
      carta1.classList.remove('visible')
      carta2.classList.remove('visible')
      carta1.addEventListener('click', onAction, false)
      carta2.addEventListener('click', onAction, false)
    }
    carta1 = null
    carta2 = null
  }

  if (carta1 === null) {
    carta.classList.add('visible')
    carta.removeEventListener('click', onAction, false)
    carta1 = carta
  } else {
    carta.classList.add('visible')
    carta.removeEventListener('click', onAction, false)
    carta2 = carta

    if (carta1.src === carta2.src) {
      match = match + 1
    }

    if (match === parejas) {
      mensaje.innerText = '¡felicidades ganaste!'
    }
  }
}

play()
