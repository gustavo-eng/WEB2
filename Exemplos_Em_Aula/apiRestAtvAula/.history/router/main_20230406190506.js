const express = require('express'); 
const router  = express.Router()
var  Schema   = require('../schemas/ValidadorDados')
//Data
let dados = require('../model/data')


//Functions 
let retornaIndex = require('../utils/retornaIndex')



//Rota para Listar os dados 
router.get("/", (req, res) => {
    // res.send('data.js formatada')
    res.send(dados)
})
// pega o maior indice de um array e soma 1 


//Rota inserir 
router.post("/inserir", (req, res) => {
    const {error, value} = Schema.validate(req.body)
    const nome = req.body.nome 
    const curso = req.body.curso
    if (error) {
        res.status(400).send(error.message)
    }
    
    dados.push({id: retornaIndex(dados), nome: nome, curso: curso})
    res.send(dados)
})



module.exports = router