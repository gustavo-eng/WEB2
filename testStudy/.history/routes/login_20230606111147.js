var express = require('express');
var router = express.Router();
const SECRET = "A1B2"
const jwt  = require('jsonwebtoken')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});


router.post('/', (req, res) => {
    const  { usuario, senha } = req.body
    if(usuario !=  "" && senha == "123"){
        const token = jwt.sign({usuario: usuario}, SECRET , { expiresIn: 800 });


    }
})


module.exports = router;
