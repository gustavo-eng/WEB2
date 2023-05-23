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
// 06 fim 

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

router.get('simple/olaMundo', (req, resposta) => {
    resposta.send('Ola mundo')
})

list = []

router.post('simple/list/:nome/:idade', (req, res) => {
    let nome  = req.params.nome
    let idade = req.params.idade 
    list.push({nome: nome, idade: idade})
    res.status(200).send(list)
    console.log(list)
})

router.put('simple/alteraLista/:nome/:nomeAltera', (req, res) => {
    const nome  = req.params.nome
    const nomeAltera = req.params.nomeAltera 
    for(let i = 0; i < list.length; i++) {
        if(list[i].nome == nome) {
            list[i] = {nome: nomeAltera, idade: list[i].idade}

        }
    }

    res.status(200).send(list)
})

router.delete('/simple/deletaLista', (req, res) => {
    list.pop()
    res.status(200).send(list)
})



