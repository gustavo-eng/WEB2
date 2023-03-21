const { text } = require('express');
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
    const {x, y} = req.query // pego pelo query passado pelo parametro. Apenas 
    // a req.quey apenas captura os valores se for passado x e ou y 
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
    /* 
    Nao precisa da interface, apenas usar o express.json e mandar as 
    requisicoes no insomnia para verificar 
    */
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    if(senha != null && usuario != null) {
        if (usuario === senha) {
            res.send('Usuário possui permissão de acesso');
            } else {
            res.send('Usuário não possui permissão de acesso');
        }
    }else {
        res.status(500).send('Erro nos dados')
    }    
        
});


/*
Crie  uma rota para gerar textos aleatórios. O usuário informa por parâmetro (livre
    escolha) o número de caracteres ou o número de palavras e o sistema gera a partir de
    um conjunto de palavras pré-definidas um texto aleatório atendendo ao que foi
    solicitado.
    
*/ 


 
  
  app.get('/random/random-text', (req, res) => {
    const length = parseInt(req.query.length);
    const isWords = req.query.isWords === true;
    const text = funcoes.generateRandomText(length, isWords)
    console.log('Dentro de rotas usando funcao externa  --> '+ text)
    res.send(text);
  });
/*
  Crie  uma rota para gerar textos aleatórios. O usuário informa por parâmetro (livre
    escolha) o número de caracteres ou o número de palavras e o sistema gera a partir de
    um conjunto de palavras pré-definidas um texto aleatório atendendo ao que foi
    solicitado.
    
*/ 

const listaWord = ['gustavo', 'alexandre', 'Dias', 'ipsumm', 'teste', 'desenvolvedor', 'web2', 'correr']
app.get('/aleatorio/texto', (req, res) => {
    function generate(tamanho, isWord) {
      let texto = '';
      let count = 0;
      if (isWord) {
        while(count < tamanho) {
          let indiceRandomico = Math.floor(Math.random() * listaWord.length);
          texto += listaWord[indiceRandomico];
          console.log('Texto dentro de if(isWord) --> '+ texto)
          count++;
        }
       } 
       //else if(!isWord) {
          // while(count < tamanho) {
          //   let index = Math.floor(Math.random() * listaWord.length);
          //   let vetTexto = []
          //   vetTexto = listaWord[index].split('');
          //   texto += vetTexto[index]
          //   count++;
          // }
       //}

    }
    let tamanho = parseInt(req.query.tamanho);
    let isWords = req.query.isWords === true;
    let text2 = generate(tamanho, isWords);
    console.log(text2)

   res.send(`Exemplo ${text2} !!!`)
})

/*
function generateRandomText(length, isWords) {
    let text = '';
    let count = 0;
    const max = isWords ? length : length / 5; // assume 5 characters per word
    while (count < max) { 
      const randomIndex = Math.floor(Math.random() * wordList.length);
      const word = wordList[randomIndex];
      text += word + ' ';
      count++;
    }
*/
app.listen(port, () => console.log('Server running in ' + port + ' port'))

