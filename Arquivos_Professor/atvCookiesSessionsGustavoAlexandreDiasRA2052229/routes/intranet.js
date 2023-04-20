const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
   console.log('dentro de intranet para capturar o valor de req.user.username --> ')
   console.log(req.user.username)
   console.log(typeof(req.user.username)) // este user eh o que esta no banco de dados. Neste caso eh o que esta na lista 
    //res.send('------------------------------------------- VOCE ESTA DENTRO DE INTRANET -------------------------------------------')
  res.render('intranet', {username: req.user.username}) 
})

// user é sempre aquela que sao retornados pela funcao do passport. 
// nest caso o "user" eh o que esta sendo criado no arquivo auth.js

module.exports = router;

