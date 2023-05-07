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
    const {nome, estilo, coletivo} = req.body

    EsportDAO.save(nome, estilo, coletivo).then(sport => {
        res.status(201).json(sport)
    }).catch(err => {
        console.log('ERRO ao salvar novo sport. ERRO =   ' + err )
    })
})





// const EsportSchema = new mongoose.Schema({
//     nome: String,
//     estilo: String,
//     coletivo: Boolean
// })