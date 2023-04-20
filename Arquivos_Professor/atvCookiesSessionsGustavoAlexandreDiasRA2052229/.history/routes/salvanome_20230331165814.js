const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    const newName = req.body.name; // aqui se usa req.body pq la no /intranet tem um forms com action="/salvanome" 
    //  um input com o atributo 'name'  
    req.user.name = newName;
    console.log('DENTRO DE SALVANOME')
    console.log('Impressao de req.user.name --> ')
    console.log(req.user.name)
    res.redirect('/intranet');
})



module.exports = router;
