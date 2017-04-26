var $lista = document.querySelector('.pokes')

fetch('http://pokeapi.co/api/v1/pokedex/1')
  .then(function (res) {
    return res.json()
  })
  .then(function (data) {
    var promiseArray = []
    for (var i = 0; i < 10; i++) {
      var pokePrmise = fetch('http://pokeapi.co/' + data.pokemon[i].resource_uri)
        .then(function (res) {
          return res.json()
        })
      promiseArray.push(pokePrmise)
    }

     return Promise.all(promiseArray)
   })
   .then(function (pokes) {
     var promiseSprites = pokes.map(function (poke) {
       var uri = poke.sprites[0].resource_uri
       return fetch('http://pokeapi.co/' + uri).then((res) => res.json())
     })

     return Promise.all(promiseSprites)
   })
   .then(function (sprites) {
     for (var i = 0; i < sprites.length; i++) {
       var item = document.createElement('li')
       var imagen = document.createElement('img')

       var name = sprites[i].name
       var sourse = sprites[i].image

       item.innerText = name
       imagen.setAttribute('src', 'http://pokeapi.co' + sourse);

       item.appendChild(imagen)
       $lista.appendChild(item)
     }
   })




   function a (x) {
     var e = x * 2

     setTimeout(function () {
       e = e + 2
     }, 300)

     console.log(e)
   }
