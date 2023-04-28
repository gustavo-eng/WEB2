const express = require('express'); 
const router  = express.Router()

let dados = require('../model/data')


router.get("/", (req, res) => {
    // res.send('data.js formatada')
    console.log('Requisito de listar satisfeito')
    console.log(dados)
    res.send(dados)
})


module.exports = router