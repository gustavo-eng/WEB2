const express = require('express'); 
const router  = express.Router()

//Functions 

const deletar = require('../utils/deletar')

//Data
let dados = require('../model/data')



// Rota consultar pelo ID 
router.delete('/:id', (req, res) => {
    //utilizar o consultar by Id primeiro
    const id = parseInt(req.params.id)
    if(deletar(dados, id) !== null) {
        res.send(deletar(dados, id))
    } else  {
        res.status(404).send('User not Fount')
    }
})



module.exports = router ;

