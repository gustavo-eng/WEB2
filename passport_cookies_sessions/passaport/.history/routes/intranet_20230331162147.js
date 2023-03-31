const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
   console.log('dentro de intranet para capturar o valor de username')
    res.send('------------------------------------------- VOCE ESTA DENTRO DE INTRANET -------------------------------------------')
  //res.render('intranet') 
})



module.exports = router;

