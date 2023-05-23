/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'



Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'world' }
  })

  // Route.post('/disciplinas', "DisciplinasController.store")

  Route.resource('/disciplinas', "DisciplinasController").apiOnly() // cria automaticamente as principais rotas que a entidade vai precisar 
  // .apyOnly -> traz apenas rotas de api para o controller 

}).prefix('/api')

// import Disciplina from 'App/Models/Disciplina'
Route.group(() => {
  Route.get('/', async ({response}) => {
    response.status(200).send('Voce esta na rota em routes.ts')
    // const disciplinas = await Disciplina.all()
  })
}).prefix('/rotas') 






