const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    req.logOut();
    res.redirect('/');
    
})

router.get('/sair', (req, res) => {
    res.send('Voce esta em /logout/sair ')
})


module.exports = router;
