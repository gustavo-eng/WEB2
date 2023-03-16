// const http = require('http')
// const port = 3001 

// const  server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<h4>Teste aula1  sobre node </h4>')
//     res.end()
// })

// server.listen(port, () => console.log(`Servidor iniciado na porta ${port}`))

const express = require('express')
const app = express() 
const port = 5555;

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end(`<h2> Pagina na porta ${port} e rota / </h2>`)

})

app.get('/user', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end(`<h4> Pagina na porta ${port} e rota /user </h4>`)
})

// app.get("/api", (req, res) => {
//     let dado = {
//         'name': 
//     }
// })

app.get('/users', function (req, res) {
    const users = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 40 }
    ];
    console.log(users[0])
    res.send(users[0].name);
  });
  

app.listen(port, () => console.log(`App is running in ${port} port`))





/* 
    res.end  -- pode acontecer de  retornar dados incompletos, ou seja, apenas os "pedacos"  
    res.send -- n precisa ser chamada novamente, uma vez q retorna apenas o dado COMPLETO 
*/



