const express = require('express'); 
const router  = express.Router()

//Data
let dados = require('../model/data')

const consultaById = require('../utils/consultaById');
/*
Escreva uma API Rest com implementação das operações de Listar, Inserir, Buscar pelo ID, Alterar e Excluir (em memória).

A escolha do domínio da aplicação é livre, todavia, é necessário criar uma camada de Modelo com as funções das operações.

Também é necessário realizar a validação dos parâmetros recebidos.

Por fim, realize os testes da API utilizando uma ferramenta de validação
*/

// Rota consultar pelo ID 
router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log('dados dentro de consulta 333')
    console.log(dados)
   
    res.send(consultaById(dados, Number(id))); // fazer validacao de id 
    //res.send('vc esta na rota consulta e passou id como parametro , id  ==' + id)
})




module.exports = router;