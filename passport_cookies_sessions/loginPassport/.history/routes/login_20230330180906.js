const express = require('express');
const router = express.Router()

router.get('/', (req, res, next) => {

    res.render('login', {auth: null})
})


module.exports = router;