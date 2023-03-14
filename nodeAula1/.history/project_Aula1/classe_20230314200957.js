// console.log('Teste !!')

const http = require('http')
const port = 80
let cont;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.write('<h1>WEB2</h1> ');
    res.end(`<h2>ok -- Listening contador ${cont} na url ${req.url}</h2>`); 
    cont++;  
})


/* 
    O end fecha a requisicao e envia apenas no final da requisicao 
*/


server.listen(port , () => {
    cont = 1;  
    console.log(`server executando ${port}`)
})



