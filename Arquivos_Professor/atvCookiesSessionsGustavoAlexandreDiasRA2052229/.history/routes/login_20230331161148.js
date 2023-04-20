const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/', (req, res, next) => {
    if(req.query.fail) { // '/login?fail=true'  aqui faz a verificacao passada em failureRedirect 
        res.render('login', {message: 'Usuário e/ou senha inválidos'})
    } else {
        res.render('login', {message: null})
    }

})


router.post('/', passport.authenticate('local', {
    successRedirect: '/intranet', // colocar o path adequado para minha aplicacao 
    failureRedirect: '/login?fail=true'
}))


module.exports = router;