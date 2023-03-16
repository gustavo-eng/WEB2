const express = require('express')
const app = express() 
const port = 3001;

app.get('/', (req, res) => {
    res.send(`
        <div>
            <h1> Voce esta na Tela 2 </h1>'
            <h2><a href="/tela2"> vai para Tela 2</a></h2>
        </div>
    `)
    
})

app.get('/tela2', (req, res) => {
    res.send(`
        <div>
            <h1>Voce esta na Tela 2 </h1>'
            <h2><a href="/"> vai para Tela 1</a></h2>
        </div>
    `)
})
