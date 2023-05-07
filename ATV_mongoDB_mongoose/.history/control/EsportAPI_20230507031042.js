const express = require('express')
const router = express.Router() 





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
        res.status(400).send('Erro ao salvar o sport.')
    })
})

router.put("/:id", (req, res) => {
    // {nome: nome, estilo: estilo, coletivo: coletivo}
    const id = req.params.id
    const {nome, estilo, coletivo} = req.body

    EsportDAO.update(id, nome, estilo, coletivo)
        .then(sport => {
            res.status(200).json(sport)
        }).catch(err => {
            res.status(400).send('Erro ao atualizar o sport.')
        })

})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    EsportDAO.delete(id).then(sport => {
        res.status(200).json(sport)
    }).catch(err => {
        res.status(400).send('Erro ao deletar o sport.')
    })
})


module.exports = router

