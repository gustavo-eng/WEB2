var express = require('express');
var Task = require("../model/Tasks")
var TaskSchema = require("../validators/TaskValidator")
const Joi = require("joi")
var router = express.Router();
const jwt = require('jsonwebtoken');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});




// router.post('/api/login', (req, res) => {
//   const {usuario, senha} = req.body

//   if (usuario != "" && senha == "123") {
//       const token = jwt.sign({user: usuario}, 'abcdefg', { expiresIn: '1hr' });
      
//   } else { 
//     res.status(403).json({status: false, msg: "User not found !!"})
//   }

// })

module.exports = router;
