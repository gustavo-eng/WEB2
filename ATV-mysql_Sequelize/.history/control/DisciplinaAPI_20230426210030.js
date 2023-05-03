
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


module.exports = router;