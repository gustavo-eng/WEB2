const express = require('express')
const app = express() 
const port = 5555;

const funcoes = require('./utils/funcoes')

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
app.get('/contas/:operacao', (req, res) => {
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

//Atividade 3 

/*

3. Crie uma rota que receba 2 valores por POST (usuário e senha) e faça a validação da
mesma. Se a senha estiver contida no nome do usuário exiba uma mensagem de que o
usuário possui permissão de acesso, caso contrário informe que não possui.

*/
app.get('/forms/forumalario', (req, res) => {

    res.send(`
        <form action="/" method="post">
            <input type="text" name="usuario" /><br />
            <input type="password" name="senha" /><br />
        </form>
    `)
})

app.post('/forms/forumalario', (req, res) => {

})


app.listen(port, () => console.log('Server running in ' + port + ' port'))