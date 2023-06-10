var express = require('express');
var router = express.Router();

const jwt  = require('jsonwebtoken')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});


router.post('/', (req, res) => {
    const  { usuario, senha } = req.body
    if(){

    }
})


module.exports = router;
