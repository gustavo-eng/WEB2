var express = require('express');
var Task = require("../model/Tasks")
var TaskSchema = require("../validators/TaskValidator")
const Joi = require("joi")
var router = express.Router();
const jwt = require('jsonwebtoken')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});



router.post('/', (req, res) => {
    const {usuario, senha} = req.body
    if (usuario != "" && senha == "teste") {
        //Permissao = Criar token
        const token = jwt.sign({user: usuario}, 'A1B2C3D4', {
            expiresIn: '1 hr'});
        res.json({status: true, token: token, usuario: usuario})
    } else {
        //Sem permissao = sem token
        res.status(403).json({status:false})
    }
})

module.exports = router;
