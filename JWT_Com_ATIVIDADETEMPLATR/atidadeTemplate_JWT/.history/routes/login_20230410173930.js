const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req, res) => {
    if(req.body.usuario === 'gustavo' && req.body.senha === '123456') {
        return res.redirect('/index')   
    }
})


module.exports = router;