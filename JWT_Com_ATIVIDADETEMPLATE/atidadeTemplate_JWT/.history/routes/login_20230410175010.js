const express = require('express');
const router  = express.Router();
const SECRET  = 'gustavo' // passar para uma variavel de ambiente

//JWT 
const jwt = require('jsonwebtoken'); //gera e verifica token 

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req, res) => {
    if(req.body.usuario === 'gustavo' && req.body.senha === '123456') {
        //assina, contem 3 partes.
        //contem 1. metadados
        // 2. payload (algumas informacoes que permita identificar melhor o user )
        // 3. Contem assinatura digital  (unico, e somente o servidor vai ter, pois ele vai ter um secret utilizado para fazer  essa assinatura digital )
        // passa  o payload e o secret utiliza para a assinatura digial
        const token =  jwt.sign({userId: 1}, SECRET, {expiresIn: 150})
        return res.json({auth: true, token}).redirect('/index')   
    } 
})
 

module.exports = router;