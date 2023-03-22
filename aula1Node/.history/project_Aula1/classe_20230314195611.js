// console.log('Teste !!')

const http = require('http')

let cont;
const server = http.createServer((req, res) => {
    res.end(`<h2>ok -- Listening contador ${cont}</h2>`)
    cont++; 
})

/* 
    O end fecha a requisicao e envia apenas no final da requisicao 

*/

server.listen(80 , () => {
    cont = 1;  
    console.log('server executando')
})



