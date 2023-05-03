
var express = require('express'); 
var router = express.Router();

router.get('/', (req, res) => {
    res.render('principal'); 
})

// Pagina curriculo Profissional 
router.get('/cv', (req, res) => {
    res.render('cv'); 
})

// Pagina que lista as disciplinas que estou cursando 
// Passar parametros para ser analisado 
router.get('/disciplinas', (req, res) => {
    res.render('disciplinas')
})



module.exports = router;