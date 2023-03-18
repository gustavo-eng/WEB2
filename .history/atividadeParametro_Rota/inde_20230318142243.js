const express = require('express')
const app = express() 
const port = 5555;

const inversorDeData = require('./utils/inversorDeData')

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
    let palavraInvertida = ''
    console.log('testando exports da pasta utils')
    console.log(inversorDeData(palavra)) 
     

    res.send(`
        <div> 
            <h1> Palavra invertida == ${palavraInvertida}</h1>
        </div>
    `)
})


app.listen(port, () => console.log('Server running in ' + port + ' port'))