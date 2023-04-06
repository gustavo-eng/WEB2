const express = require('express'); 
const router  = express.Router()

//Functions 
const alterar = require('../utils/alterar')

//Data
let dados = require('../model/data')



// Rota consultar pelo ID 
router.put('/:id', (req, res) => {
    //utilizar o consultar by Id primeiro 
    const id    = parseInt(req.params.id)
    const nome  = req.body.nome
    const curso = req.body.curso 
    if(alterar(dados,id,nome,curso) !== null) {
       
        res.send(alterar(dados,id,nome,curso))
        
    } else {

    }

})


//alterar(data, id, nome = 'default', curso = 'default')

router.get("/teste", (req, res) => {
    res.send('<h1> Dentro de /alterar/teste </h1>')
})


module.exports = router ;
