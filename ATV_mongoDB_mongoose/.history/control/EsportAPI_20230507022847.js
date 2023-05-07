const express = require('express')
const router = express.Router() 



const {sucess, fail} = require("../helpers/resposta")

const EsportDAO = require('../model/Esport')



router.get("/", (req, res) => {
    EsportDAO.list().then(sports => {
        res.status(200).json(sports)
    })
})

router.post("/", (req, res) => {
    const {} = req.body
})


