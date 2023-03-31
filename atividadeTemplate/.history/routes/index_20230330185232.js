
var express = require('express'); 
var router = express.Router();
const passport = require('passport')

// json - disciplinas matriculadas 
const disciplinas = require('../model/materias')


router.get('/', (req, res) => { 
  res.render('principal'); 
})

// Pagina curriculo Profissional 
router.get('/cv', (req, res) => {
    res.render('cv'); 
})

router.get('/disciplinas', (req, res) => {
    res.render('disciplinas', {disciplinas: disciplinas});
})


//Pagina midias sociais 
router.get('/midia', (req, res) => {
    res.render('midia')
})
 
router.get('/disciplinas/:nome', (req, res) => {
    const nome = req.params.nome
    const item = disciplinas.find(item => item.name === nome) 
    if(item) {
        res.render('ementa', {item:item})
    } else {
        res.send(`Nao foi encontrar a disciplina <strong> ${nome}</strong> no sistema `)
    }

})

// passport - estudos 

router.get('/login', (req, res, next) => {
     
    if(req.query.fail){
        res.render('login', {auth: 'Usuario e ou senha invalidos '})
    } else { 
        res.render('login', {auth: null}); 
    }
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',  
}))







module.exports = router;


