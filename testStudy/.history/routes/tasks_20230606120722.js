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
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


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

module.exports = router;
