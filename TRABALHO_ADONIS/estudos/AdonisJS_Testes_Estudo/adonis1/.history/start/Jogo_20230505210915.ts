import Route from '@ioc:Adonis/Core/Route'

let Rota = Route


Rota.get('/jogo',  ({response}) => { 
         console.log(response.send('VC esta na rota jogo'))
})

export const a = () => {
    console.log('ola AAA')
}
console.log(a)

module.exports = {Rota}   