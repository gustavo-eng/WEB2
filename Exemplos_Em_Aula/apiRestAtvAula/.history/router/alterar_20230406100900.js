const express = require('express'); 
const router  = express.Router()

//Data
let dados = require('../model/data')

const consultaById = require('../utils/consultaById');


// Rota consultar pelo ID 
router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log('dados dentro de consulta 333')
    console.log(dados)
   
    res.send(consultaById(dados, Number(id))); // fazer validacao de id 
    //res.send('vc esta na rota consulta e passou id como parametro , id  ==' + id)
})


module.exports = router ;
