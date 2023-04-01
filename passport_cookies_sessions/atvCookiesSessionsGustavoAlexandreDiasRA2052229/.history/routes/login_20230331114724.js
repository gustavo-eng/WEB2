const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    if(req.query.fail) {
        res.render('login', {message: 'Usuário e/ou senha inválidos'})
    }

    res.render('login', {message: null})
})

module.exports = router;