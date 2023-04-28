const express = require('express'); 
const router  = express.Router()

let dados = require('../model/data')


/*
Escreva uma API Rest com implementação das operações de Listar, Inserir, Buscar pelo ID, Alterar e Excluir (em memória).

A escolha do domínio da aplicação é livre, todavia, é necessário criar uma camada de Modelo com as funções das operações.

Também é necessário realizar a validação dos parâmetros recebidos.

Por fim, realize os testes da API utilizando uma ferramenta de validação
*/

//Rota para Listar os dados 
router.get("/", (req, res) => {
    // res.send('data.js formatada')
    console.log('Requisito de listar satisfeito')
    console.log(dados)
    res.send(dados)
})

router.post("/inserir", (req, res) => {
    const name = req.body.nome 
    const curso = req.body.curso 
    dados.push({id: 20, nome: name, curso: curso})

})

/*
{
        "id": 3,
        "nome": "Ciclano", 
        "curso": "Engenharia Eletrica"
    },
*/


module.exports = router