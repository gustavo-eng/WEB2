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

// Alterado 
// import { Application } from '@adonisjs/core/build/standalone'
import Route from '@ioc:Adonis/Core/Route'

import Application from '@ioc:Adonis/Core/Application'
 
function consoles() {
    console.log('funcao consoles')
    console.log(Application.appName) 
    console.log('Versao do aplicativo')
    console.log(Application.version!.toString())
    console.log('Node environment -->  ')
    console.log(Application.nodeEnvironment) // apresenta se esta no ambiente de producao , dev e ou test
    console.log('Referencia path de arquivos')
    console.log(Application.configPath('arquivo_NAO_EXISTENTE_TESTE.ts'))
    console.log(Application.configPath('app.ts'))   
}
Route.get('/', async () => {
  
  consoles()
  return { hello: 'Gustavo Alexandre  ok  ' }
}) 

Route.post('/', async () => {
  return   {  nome: "Testando rota post"  }
})
 
