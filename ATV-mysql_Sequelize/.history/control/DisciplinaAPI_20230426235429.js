
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


router.post("/", (req, res) => { // create 
   const {codigo, nome, professor, dependencia} = req.body
   
   DisciplinaDAO.save(codigo, nome, professor, dependencia).then((disciplina) => {
        res.json(sucess(disciplina))      
   }).catch( erro => {
        console.log('Erro gerado dentro de router.post(/disciplinas)')
        console.log(erro)
        res.sendStatus(500).json(fail('Falha ao salvar uma nova disciplina '))
   })
})


// consultar 
router.get("/:codigo", (req, res) => {
    DisciplinaDAO.getByCodigo(req.params.codigo)
        .then((disciplina) => {
            res.json(sucess(disciplina))

        }).catch(erro => {
            console.log('erro em router.get( :id )')
            res.status(500).json(fail('Falha ao localizar a disciplina de codigo ' + req.params.codigo))
        })
          
})

// atualizar 





module.exports = router;