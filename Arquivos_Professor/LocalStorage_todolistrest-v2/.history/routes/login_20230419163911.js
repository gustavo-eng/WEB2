var express = require('express');
var Task = require("../model/Tasks")
var TaskSchema = require("../validators/TaskValidator")
const Joi = require("joi")
var router = express.Router();

const jwt = require('jsonwebtoken')

/* GET home page. */
router.get('/login', function(req, res, next) {
    
  res.render('login');
}); 


router.post('/', (req, res) => {
    const {usuario, senha} = req.body
    if (usuario != "" && senha == "123") {
        //Permissao = Criar token
        const token = jwt.sign({user: usuario}, 'A1B2C3D4', {
            expiresIn: 300});
        
        //console.log(res.json({status: true, token: token, usuario: usuario}))
        console.log(JSON.stringify({status: true, token: token, usuario: usuario}))
        console.log('router.post -> entrou no post do LOGIN ')
        res.json({token})
        //res.redirect('/task')
    } else {
        //Sem permissao = sem token
        res.status(403).json({status:false})
    }
})
  




module.exports = router;