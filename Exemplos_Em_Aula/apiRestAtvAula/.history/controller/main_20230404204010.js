const express = require('express'); 
const router  = express.Router()

let data = require('../model/data.json')

router.get("/", (req, res) => {
    res.send(data)
})




module.exports = router