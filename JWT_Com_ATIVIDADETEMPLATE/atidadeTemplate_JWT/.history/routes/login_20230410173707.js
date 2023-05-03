const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req, res) => {
    res.send('Vc enviou um post ')
})


module.exports = router;