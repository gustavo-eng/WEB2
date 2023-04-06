const express = require('express'); 
const router  = express.Router()


router.get("/", (req, res) => {
    res.json({
        id: 1,
        "nome": "gustavo",
        "curso": "engenharia de computacao"
    })
})




module.exports = router