// console.log('Teste !!')

const http = require('http')

const server = http.createServer((req, res) => {
    res.end("<p>ok</p>")
})

server.listen(() => {
    console.log('server executando')
})
