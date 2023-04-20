var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource /routes/users.js REDIRECIONADO PELO LOGIN');
});

router.get('/usuario2', (req, res) => {
  res.send('Dentro de usuario 2')
})

module.exports = router; 




