

const consultaById = require('./consultaById')

function alterar(data, id, nome = 'default', curso = 'default') {
    if(consultaById(data, id) !== null) {
        consultaById(data, id).nome = nome
        consultaById(data, id).curso = curso
        return consultaById(data, id)
    } else {
        return null // analisar 
    }
}

module.exports = alterar;


/*
if(consultaById(dados, id) !== null) {
        consultaById(dados, id).nome = req.body.nome
        consultaById(dados, id).curso = req.body.curso     
        res.send(consultaById(dados, id))
    } else {
        res.status(404).send('Usuario com esse ID existe')
    }
*/