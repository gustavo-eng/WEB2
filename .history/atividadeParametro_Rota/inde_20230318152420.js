const express = require('express')
const app = express() 
const port = 5555;

const funcoes = require('./utils/inversorDeData')

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
    let palavraInvertida = funcoes.inversorDeData(palavra)
    res.send(`
        <div> 
            <h1> Palavra invertida == ${palavraInvertida}</h1>
        </div>
    `)
})

//Atividade 2 
app.get('/:operacao', (req, res) => {
    const operacao = req.params.operacao
    const {x, y} = req.query
    let resultado = funcoes.operacaoBasica(operacao, x, y);
    res.send(`
        <div>
            Os dados passados foram x=${x} e y=${y}
            A operacao foi de ${operacao}
            entao 

            <h1> ${x} ${operacao} ${y} = ${resultado}</h1>
        </div>
    `)
    
})






app.listen(port, () => console.log('Server running in ' + port + ' port'))