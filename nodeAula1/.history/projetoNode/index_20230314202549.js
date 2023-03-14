const http = require('http')
const port = 3001 

const  server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write('<h4>Teste aula1  sobre node </h4>')
    res.end()
})

server.listen(port, () => console.log(`Servidor iniciado na porta ${port}`))