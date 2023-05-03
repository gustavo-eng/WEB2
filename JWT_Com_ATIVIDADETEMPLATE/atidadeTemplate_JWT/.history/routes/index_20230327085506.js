
var express = require('express'); 
var router = express.Router();

router.get('/', (req, res) => {
    res.render('principal'); 
})

router.get('/cv', (req, res) => {
    res.render('cv'); 
})


module.exports = router;