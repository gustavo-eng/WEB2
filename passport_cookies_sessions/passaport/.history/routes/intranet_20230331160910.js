const express = require('express');
const router = express.Router();
const passport = require('passport'); 

router.get('/', (req, res) => {
    res.send('VOCE ESTA DENTRO DE INTRANET')
})


module.exports = router;