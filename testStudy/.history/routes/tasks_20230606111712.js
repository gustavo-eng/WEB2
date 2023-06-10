var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')


const controlaAcesso = (req, res, next) => {
  const token = req.header('Custom-Header');

  console.log('Dentro de controlaAcesso, variavel token --> ')
  console.log(token)


}



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
