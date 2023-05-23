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
import { appKey } from 'Config/app' 

import Env from '@ioc:Adonis/Core/Env'

import moduloA from './moduloA'
import { AsyncLocalStorage } from 'async_hooks'

const storage = new AsyncLocalStorage()

function consoles() {
    console.log('funcao consoles')
    console.log(Application.appName) 
    console.log('Versao do aplicativo')
    console.log(Application.version!.toString())
    console.log('Node environment -->  ')
    console.log(Application.nodeEnvironment) // apresenta se esta no ambiente de producao , dev e ou test
    console.log('Referencia path de arquivos')
    console.log(Application.configPath('arquivo_NAO_EXISTENTE_TESTE.ts'))
    console.log(Application.configPath('app.ts')),
    console.log(Application.startPath('routes.ts'))
    console.log(' -- topico configuracao  -- ')
    console.log('appKey ==> ')
    console.log(appKey)
    console.log('appKey diretamente pelo arquivo')
    console.log('Variaveis de ambiente')
    console.log(Env.get('APP_NAME'))
} 

async function run(id) {
  const state = {id}

  return storage.run(state, async () => {
    await (new moduloA()).run()
  }) 
}

Route.get('/', async () => {
  run(1)
  consoles()
  return { hello: 'Gustavo Alexandre  ok  ' }
}) 

Route.get('/view', () => {
  
  return (
    `<h1> Tags HTML </h1>`
    
  )
})

Route.post('/', async () => {
  return   {  nome: "Testando rota post"  }
})


 
