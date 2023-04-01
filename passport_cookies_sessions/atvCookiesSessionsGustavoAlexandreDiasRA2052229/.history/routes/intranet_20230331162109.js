const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
   // res.send('------------------------------------------- VOCE ESTA DENTRO DE INTRANET -------------------------------------------')
  res.render('intranet') 
})



module.exports = router;

