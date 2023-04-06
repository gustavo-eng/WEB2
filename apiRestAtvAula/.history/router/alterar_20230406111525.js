const express = require('express'); 
const router  = express.Router()

//Functions 
const alterarById = require('../utils/alterarById')
const consultaById = require('../utils/consultaById')

//Data
let dados = require('../model/data')

/*
Escreva uma API Rest com implementação das operações de Listar, Inserir, Buscar pelo ID, Alterar e Excluir (em memória).

A escolha do domínio da aplicação é livre, todavia, é necessário criar uma camada de Modelo com as funções das operações.

Também é necessário realizar a validação dos parâmetros recebidos.

Por fim, realize os testes da API utilizando uma ferramenta de validação
*/

// Rota consultar pelo ID 
router.put('/:id', (req, res) => {
    //utilizar o consultar by Id primeiro 
    const id = parseInt(req.params.id)
    consultaById(dados, id).nome = req.body.nome
    consultaById(dados, id).curso = req.body.curso     
    res.send(consultaById(dados, id))
})

router.get("/teste", (req, res) => {
    res.send('<h1> Dentro de /alterar/teste </h1>')
})


module.exports = router ;
