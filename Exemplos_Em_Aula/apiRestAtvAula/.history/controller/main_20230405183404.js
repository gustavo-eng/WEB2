const express = require('express'); 
const router  = express.Router()

let data = require('../model/data')

router.get("/", (req, res) => {
    // res.send('data.js formatada')
    res.send(data[0])
})




module.exports = router