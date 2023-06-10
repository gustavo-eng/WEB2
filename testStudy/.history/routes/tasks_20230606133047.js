var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')


const taskDAO = require('../model/Task')

const controlaAcesso = (req, res, next) => {
  const token = req.header('Custom-Header');

  console.log('Dentro de controlaAcesso, variavel token --> ')
  console.log(token)

  jwt.verify(token, "A1B2", (err, decoded) => {
    if (!err) {

        req.usuario = decoded.user

        console.log('decoded.user ---> ')
        console.log(decoded.user)

        return next()

    } else {
        res.status(403).json({status:false, msg:' Sem permissão de acesso '})
    }

  })

}


/* GET users listing. */
// LISTA TODAS
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  taskDAO.list().then(tasks => {
    res.json(tasks)
  })
  .catch(err => {
    console.log('Erro ao listar tarefas cadastradas no banco. Erro -->  ')
    console.log(err)
    res.status(500).json({msg: "Falha ao listar as tarefas "})
  })

});



//POST NEW TASK
router.post('/', (req, res) => {

    const { nome, prioridade } = req.body

    taskDAO.save(nome, prioridade)
    .then(task => {
      res.status(201).json(task)

    }).catch(err => {
      console.log('erro ao salvar tarefa, erro -->  ')
      console.log(err)
      res.status(500).send("Falha ao salvar ")

    })

})


router.put("/:id", (req, res) => {
  const { id } = req.params

  const  { nome, prioridade } = req.body

  taskDAO.update(id, nome, prioridade)
    .then(task => {
      res.status(200).json(task)

    }).catch(err => {
      res.status(400).send("Erro ao atulizar tarefa ")
    } )

})


router.get("/:id", (req, res) => {
  const { id } = req.params
  taskDAO.getById(id)
    .then(task => {
      res.status(200).json(task)

    }).catch( err => {
      console.log("Erro de buscar tarefa por ID  ---> ")
      console.log(err)
      res.status(400).send("Erro ao buscar tarefa ")
    })
})

module.exports = router;





