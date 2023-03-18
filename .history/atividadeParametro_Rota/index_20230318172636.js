const express = require('express')
const app = express() 
const port = 5555;

const funcoes = require('./utils/funcoes')

// configs
/*
O seguinte middleware serve para que o express
posso interpretar os dados sao enviados atravez
do corpo da requisicao  
*/
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()) // indica para o express ler body com json 

app.get('/', (req, res) => { 
    res.send(`
        <div>
            <h2> Rota principal </h2>
            <form method="POST" action="/">
                <label for="usuario">Usuário:</label>
                <input type="text" id="usuario" name="usuario"><br>
        
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha"><br>
            <button type="submit">Enviar</button>
        </form>
           
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



app.post('/', (req, res) => {
    const usuario = req.body.usuario;
    const senha = req.body.senha;
  
    if (usuario.includes(senha)) {
      res.send('Usuário possui permissão de acesso');
    } else {
      res.send('Usuário não possui permissão de acesso');
    }
  });

app.listen(port, () => console.log('Server running in ' + port + ' port'))