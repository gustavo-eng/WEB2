import Route from '@ioc:Adonis/Core/Route'


Route.get('/jogo', ({response}) => { 
         console.log(response.send('VC esta na rota jogo'))
})