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
        console.log("Entrou dentro do posto route/login")
        const token = jwt.sign({usuario: usuario}, SECRET , { expiresIn: 10 * 60 });

        res.json({status: true, token: token, usuario: usuario}).redirect("/task")
    } else {
        res.status(403).json({status: false})
    }
})


module.exports = router;
