var express = require('express');
var Task = require("../model/Tasks")
var TaskValidator = require("../validators/TaskValidator")
var router = express.Router();
const jwt = require('jsonwebtoken')

let controlaAcesso = function (req, res, next) { // alterar aqui dentro 
  //let token = req.query.token; // pegar via localStorage 
  //const token = req.headers['x-access-token']
  

  const token = localStorage.getItem('token')
  fetch.get('/login', {
  headers: {
    Authorization: `Bearer ${token}` // adiciona o token como um cabeçalho de autorização
   }
  })
  .then(response => {
    console.log(response.data); // manipula a resposta do servidor
  })
  .catch(error => {
    console.error(error);
  });

  jwt.verify(token, "A1B2C3D4", (err, decoded) => {
    console.log('entrou dentro do verify !!!!!!!! 7777777')
    if (!err) {
      console.log('verify VERIFICADO!!')
      req.usuario = decoded.user
      return next()
    } else {
      console.log('Ocorreu um erro DENTRO DO VERIFY ')
      res.status(403).json({status:false, msg:'Sem permissão'});
    }
  })
}


router.get('/', function(req, res, next) {
  if (Task.list().length == 0) {
    Task.new("Tarefa 1")
    Task.new("Tarefa 2")
  }

  res.json({status: true, list: Task.list()})
});

router.get("/:id", TaskValidator.validateId, function(req, res) {
    let obj = Task.getElementById(req.params.id);
    if (!obj) {
        return res.json({status:false, msg:"Tarefa não encontrada"})
    }

    return res.json({status:true, task:obj})
})

router.post("/",  TaskValidator.validateNome, function (req, res){
    res.json({status: true, task:Task.new(req.body.nome)});
})

router.put("/:id", controlaAcesso, TaskValidator.validateId, TaskValidator.validateNome, function(req, res){ 
  let obj = Task.update(req.params.id, req.body.nome);
  if (!obj) {
    return res.json({status: false, msg: "Falha ao alterar a tarefa"})
  }
  
  res.json({status: true, task:obj});
})

router.delete("/:id", controlaAcesso, TaskValidator.validateId, function(req, res){
  if (!Task.delete(req.params.id)) {
    return res.json({status: false, msg: "Falha ao excluir a tarefa"});
  }
  
  res.json({status:true})
})

module.exports = router;
