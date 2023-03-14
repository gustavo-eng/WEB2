// console.log('Teste !!')

const http = require('http')

const server = http.createServer((req, res) => {
    res.end("<p>ok</p>")
})

server.listen(80, () => {
    console.log('server executando')
})
