const express = require('express'); 
const router  = express.Router()

//Data
let dados = require('../model/data')


router.get('/', (req, res) => {
    res.send('vc esta na rota consulta')
})

module.exports = router;