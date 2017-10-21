function getData () {
  fetch('http://localhost:3000/api/user')
    .then(function (res) {
      return res.json()
    })
    .then(function (lista) {
      console.log(lista)
      let $lista = document.getElementById('lista')
      $lista.innerHTML = ''
      lista.map(function (elmento) {
        let $el = document.createElement('li')
        $el.innerText = elmento.name

        $lista.appendChild($el)
      })
    })
}

function postData (texto) {
  let usuario = {
    name: texto
  }
  let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  }
  return fetch('http://localhost:3000/api/user', config)
    .then(function (res) {
      return res.json()
    })
}

// postData().then(function (result) {
//   console.log(result)
//   getData()
// })

getData()

let form = document.getElementById('registro')

form.addEventListener('submit', sendData, false)

function sendData (event) {
  event.preventDefault()
  let txt = document.getElementById('caja_name')
  console.log()
  postData(txt.value).then(getData)
}




















var tablero = document.getElementById('game')
function play () {
  console.log('👾 start')
  tablero.innerHTML = ''

  var lista = [1, 2, 3, 4]
  var mazo = lista.concat(lista)

  mazo = mazo.sort(function () { return Math.random() - 0.5 })

  for (var i = 0; i < mazo.length; i++) {
    // mazo[i]
    // document.getElementsByTagName('img')

    var caja = document.createElement('div')
    var img = document.createElement('img')

    var numeroImagen = mazo[i]

    img.setAttribute('src', 'assets/' + numeroImagen + '.png')

    caja.appendChild(img)
    tablero.appendChild(caja)

    // img.classList.add('visible')
    // img.classList.remove('visible')

    img.addEventListener('click', funcionClick, false)
  }
}

var carta1 = null
var carta2 = null
var flag = false

function funcionClick (event) {
  if (flag === true) {
    if (carta1.src === carta2.src) {
      // se quedan volteadas
    } else {
      carta1.classList.remove('visible')
      carta2.classList.remove('visible')
    }

    carta1 = null
    carta2 = null
    flag = false
  }

  if (carta1 === null) {
    console.log('turno 1')
    carta1 = event.target
    event.target.classList.add('visible')
  } else {
    console.log('turno 2')
    carta2 = event.target
    event.target.classList.add('visible')
    flag = true
  }
}








































// var game = document.getElementById('game')
// var mensaje = document.getElementById('mensaje')
// var match = 0
// var carta1 = null
// var carta2 = null
// var parejas = 0
//
// function play () {
//   game.innerHTML = ''
//   mensaje.innerText = ''
//   match = 0
//   carta1 = null
//   carta2 = null
//
//   var mazo = [1, 2, 3, 4, 5, 6]
//   parejas = mazo.length
//
//   // Duplico y revuelvo la lista para preparar el juego.
//   mazo = mazo.concat(mazo)
//   mazo = mazo.sort(function () { return Math.random() - 0.5 })
//
//   // Creo los contenedores para cada una de las cartas.
//   for (let i = 0; i < mazo.length; i++) {
//     var carta = document.createElement('div')
//     game.appendChild(carta)
//   }
//
//   var cartas = game.getElementsByTagName('div')
//
//   for (let i = 0; i < mazo.length; i++) {
//     var image = document.createElement('img')
//     image.setAttribute('src', 'assets/' + mazo[i] + '.png')
//     cartas[i].appendChild(image)
//     image.addEventListener('click', onAction, false)
//   }
// }
//
// function onAction (evento) {
//   var carta = evento.target
//   if (carta1 !== null && carta2 !== null) {
//     if (carta1.src !== carta2.src) {
//       carta1.classList.remove('visible')
//       carta2.classList.remove('visible')
//       carta1.addEventListener('click', onAction, false)
//       carta2.addEventListener('click', onAction, false)
//     }
//     carta1 = null
//     carta2 = null
//   }
//
//   if (carta1 === null) {
//     carta.classList.add('visible')
//     carta.removeEventListener('click', onAction, false)
//     carta1 = carta
//   } else {
//     carta.classList.add('visible')
//     carta.removeEventListener('click', onAction, false)
//     carta2 = carta
//
//     if (carta1.src === carta2.src) {
//       match = match + 1
//     }
//
//     if (match === parejas) {
//       mensaje.innerText = '¡felicidades ganaste!'
//     }
//   }
// }
//
// play()
