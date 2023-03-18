const express = require('express')
const app = express() 
const port = 5555;
import './utils/inversorDeData'

app.get('/', (req, res) => {
    res.send(`
        <div>
            <h2> Rota principal </h2>
        </div>
    `)
})

//atividade 1  
app.get('/:palavra', (req, res) => {   // passar logica para uma funcao externa 
    
    let palavra = req.params.palavra 
    let palavraInvertida = 'ok'
    console.log(inverteResultado('ok')) 
     

    res.send(`
        <div> 
            <h1> Palavra invertida == ${palavraInvertida}</h1>
        </div>
    `)
})


app.listen(port, () => console.log('Server running in ' + port + ' port'))