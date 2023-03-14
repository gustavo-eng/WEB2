// console.log('Teste !!')

const http = require('http')

const server = http.createServer((req, res) => {
    res.end("<h2>ok</h2>")
})

server.listen(80 , () => {
    console.log('server executando')
})



