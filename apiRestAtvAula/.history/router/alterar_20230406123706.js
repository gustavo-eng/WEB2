const express = require('express'); 
const router  = express.Router()

//Functions 

const consultaById = require('../utils/consultaById')

//Data
let dados = require('../model/data')



// Rota consultar pelo ID 
router.put('/:id', (req, res) => {
    //utilizar o consultar by Id primeiro 
    const id = parseInt(req.params.id)
    if(consultaById(dados, id) !== null) {
        consultaById(dados, id).nome = req.body.nome
        consultaById(dados, id).curso = req.body.curso     
        res.send(consultaById(dados, id))
    } else {
        res.status(404).send('Usuario com esse ID existe')
    }

})

router.get("/teste", (req, res) => {
    res.send('<h1> Dentro de /alterar/teste </h1>')
})


module.exports = router ;
