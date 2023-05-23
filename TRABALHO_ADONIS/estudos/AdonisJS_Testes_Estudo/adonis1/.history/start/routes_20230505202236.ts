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

// import moduloA from './moduloA'
// import { AsyncLocalStorage } from 'async_hooks'

// const storage = new AsyncLocalStorage()

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

// async function run(id) {
//   const state = {id}

//   return storage.run(state, async () => {
//     await (new moduloA()).run()
//   }) 
// }

Route.get('/', async () => {
  // run(1)
  consoles()
  return { hello: 'Gustavo Alexandre  ok  ' }
}) 

Route.get('/view', () => {
  
  return (
    `<h1> Tags HTML </h1>`
    
  )
})

Route.post('/', async ({request}) => {
  console.log('Imprime as requisições vindas do body')
  console.log('request.body() ----- >>>')
  console.log(request.body().nome)
  console.log(request.body().sla) 
  console.log(request.body())
  console.log('request.all()')
  console.log(request.all())
  return   {  nome: "Testando rota post"  }
})

//contexto Http 
/* 
contem informacoes como  request body. cookies, headers, o usuario conectado no momento e muito mais
*/
// Route.get('/http', ({ request, auth, response }) 
Route.get('/http', ({ request,  response }) => {
  /**
   * Request URL
   */
  console.log('request.url() -> ')
  console.log(request.url())
  console.log('_______________________')
  /**
   * Request body + query params
   */
  console.log("request.all() -> ")
  console.log(request.body())
  console.log('_______________________')
  /**
   * Send response
   */
  response.send('hello world')
  response.send({ hello: 'world!!!!' })

  /**
   * Available when auth is configured
   */
  // console.log(auth.user)
}) 

// Contexto 
import HttpContext  from '@ioc:Adonis/Core/HttpContext'
// TOPICO  -----------------  (((COMPARACOES))) -----------------------

// solicitar  
Route.get('/contexto/:id', async ({request}) => {
    console.log('request.params().id')
    console.log(request.params().id)
    console.log(' HttpContext.get() --> ')
    console.log(HttpContext.get())
})

Route.get('/contexto/:nome', async ({params}) => {
  console.log(params.nome)
})

Route.get('/logger', async ({logger}) => {
  console.log('logger.info()')
  console.log(logger.info('A info messagem'))
  logger.warn('Aviso!!')
  console.log('logger _________')
  // console.log(logger)
})


// Route 
Route.get('/route', async ({route}) => {
  console.log('route?.name')
  console.log(route?.name)
  console.log(route?.pattern)
  console.log('___________')
  console.log(route?.middleware)
})







 
