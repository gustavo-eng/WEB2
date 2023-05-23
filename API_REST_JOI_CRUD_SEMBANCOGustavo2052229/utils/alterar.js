

const consultaById = require('./consultaById')

function alterar(data, id, nome = 'default', curso = 'default') {
    if(consultaById(data, id) !== null) {
        consultaById(data, id).nome = nome
        consultaById(data, id).curso = curso
        return consultaById(data, id)
    } else {
        return null 
    }
}

module.exports = alterar;
