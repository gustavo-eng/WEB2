const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    res.send('Vc esta na rota login ')
    res.render('login')
})


module.exports = router;