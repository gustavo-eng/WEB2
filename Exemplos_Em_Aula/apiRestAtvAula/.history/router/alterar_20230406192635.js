const express = require('express'); 
const router  = express.Router()

//Functions 
const alterar = require('../utils/alterar')

//Data
let dados = require('../model/data')

//Validador 
var Schema = require('../schemas/ValidadorDados') 

// Rota consultar pelo ID 
router.put('/:id', (req, res) => {

    const {error, value} = Schema.validate(req.body)
    
    //utilizar o consultar by Id primeiro 
    const id      = parseInt(req.params.id)
    //const nome    = req.body.nome
    //const curso   = req.body.curso 
    const {nome, curso} = value
    
    const newData = alterar(dados,id,nome,curso) 
    if (error || erro) {
        res.status(400).send(error.message);
        return ; 
    }
    if(newData !== null) {
        res.send(alterar(dados,id,nome,curso))

    } else {
        res.status(404).send(" User not Found ")
    }   

})


//alterar(data, id, nome = 'default', curso = 'default')

router.get("/teste", (req, res) => {
    res.send('<h1> Dentro de /alterar/teste </h1>')
})


module.exports = router ;
