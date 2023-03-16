const express = require('express')
const app = express() 
const port = 3001;
let a = 0 

app.get('/', (req, res) => {
    res.send(`
        <div>
            <h1> Voce esta na Tela 1 </h1>'
                <h2><a href="/tela2"> vai para Tela 2</a></h2>
                <h2><a href="/tela3"> vai para Tela 3</a></h2>
            </div>
    `)
    
})
app.get('/tela2', (req, res) => {
    a += 1
    console.log('valor da variavel a :' + a)
    if (a == 3 ){
        res.redirect('/repetida')
    }
    res.send(`
        
        <div>
            <h1>Variavel a == ${a} </h1>
            <h1>Voce esta na Tela 2 </h1>'
            <h2><a href="/"> vai para Tela 1</a></h2>
            <h2><a href="/tela3"> vai para Tela 3</a></h2>
        </div>
    `)
})

app.get('/tela3', (req, res) => {
    res.send(`
        <div>
            <h1>Voce esta na Tela 3! </h1>'
            <h2><a href="/"> vai para Tela 1</a></h2>
            <h2><a href="/tela2"> vai para Tela 2</a></h2>
        </div>
    `)

})

app.get('/repetida', (req, res) => {
    res.send(`
        <div>
            <h1> A tela 2 renderizou 3 vezes </h1>
            <a href="/"> Va para a tela 1 </a>
        </div>    
    `) 
})


app.listen(port, () => console.log(`Server running in ${port} port`)) 