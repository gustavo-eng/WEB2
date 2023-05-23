import Route from '@ioc:Adonis/Core/Route'

let Rota = Route


Rota.get('/jogo', ({response}) => { 
         console.log(response.send('VC esta na rota jogo'))
})


module.exports Rota 