const express = require('express'); 
const router  = express.Router()
var  Schema   = require('../schemas/ValidadorDados')

const jwt = require('jsonwebtoken');

//Data
let dados = require('../model/data')


//Functions 
let retornaIndex = require('../utils/retornaIndex')


// 06/04  Luiz tools  https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-nodejs/#1
router.post('/login', (req, res) => {
    if(req.body.user === 'gustavo' && req.body.password === '123') {
        const id = 1; 
        const token = jwt.sign({id}, '12345', {
            expiresIn: 125,

        }); 
        return res.json({auth: true, token: token});
    }

    res.status(500).send('Login Inválido');
})


//Rota para Listar os dados 
router.get("/", (req, res) => {
    // res.send('data.js formatada')
    res.send(dados)
})
// pega o maior indice de um array e soma 1 


//Rota inserir 
router.post("/inserir", (req, res) => {
    const {error, value} = Schema.validate(req.body)
    const {nome, curso} = value
    




    if (error) {
        res.status(400).send(error.message) 
    } else {
        dados.push({id: retornaIndex(dados), nome: nome, curso: curso})
        res.send(dados)
    }  
    
})



module.exports = router