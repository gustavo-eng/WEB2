const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    let newName = req.body.name; // aqui se usa req.body pq la no /intranet tem um forms com action="/salvanome" 
    //  um input com o atributo 'name'  
    req.user.username = newName;
    console.log('DENTRO DE SALVANOME')
    console.log('Impressao de req.user.name --> ')
    console.log(req.user.username)
    res.redirect('/intranet');
})



module.exports = router;
