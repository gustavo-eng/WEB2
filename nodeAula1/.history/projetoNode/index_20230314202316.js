const http = require('http')
const port = 3001 

const  server = http.createServer((req, res) => {
    res.send('<h1></h1>')
    res.end()
})

server.listen(port, () => console.log(`Servidor iniciado na porta ${port}`))