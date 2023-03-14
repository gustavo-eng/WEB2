// console.log('Teste !!')

const http = require('http')

const server = http.createServer((req, res) => {
    res.end("<h2>ok -- Listening </h2>")
})

/* 
    O end fecha a requisicao e envia apenas no final da requisicao 
    
*/

server.listen(80 , () => {
    console.log('server executando')
})



