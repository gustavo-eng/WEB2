
const express = require("express");
const router = express.Router();

const {sucess, fail} = require("../helpers/resposta");
const DisciplinaDAO = require("../model/Disciplina");


router.get("/",  (req, res) => {
    DisciplinaDAO.list().then((disciplinas) => {
        res.json(sucess(disciplinas, "list"))
        console.log('dentro da rota get de disciplinas')
        console.log(disciplinas)
    })
    
})


router.post("/:id", (req, res) => {
   const {codigo, nome, professor, dependencia} = req.body
   
   DisciplinaDAO.save(codigo, nome, professor, dependencia)
})


//codigo, nome, professor, dependencia

module.exports = router;