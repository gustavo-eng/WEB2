const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    const newName = req.body.name;
    req.user.name = newName;
    console.log('Impressao de req.user.name --> ')
    console.log(req.user.name)
    res.redirect('/intranet');
})



module.exports = router;
