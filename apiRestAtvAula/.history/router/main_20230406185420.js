const express = require('express'); 
const router  = express.Router()
var  Schema   = require('../schemas/dados')
//Data
let dados = require('../model/data')


//Functions 
let retornaIndex = require('../utils/retornaIndex')

/*
Escreva uma API Rest com implementação das operações de Listar, Inserir, Buscar pelo ID, Alterar e Excluir (em memória).

A escolha do domínio da aplicação é livre, todavia, é necessário criar uma camada de Modelo com as funções das operações.

Também é necessário realizar a validação dos parâmetros recebidos.

Por fim, realize os testes da API utilizando uma ferramenta de validação
*/

//Rota para Listar os dados 
router.get("/", (req, res) => {
    // res.send('data.js formatada')
    res.send(dados)
})
// pega o maior indice de um array e soma 1 


//Rota inserir 
router.post("/inserir", (req, res) => {
    const name = req.body.nome 
    const curso = req.body.curso
       
    dados.push({id: retornaIndex(dados), nome: name, curso: curso})
    res.send(dados)
})



module.exports = router