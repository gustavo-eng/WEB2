
const express = require("express");
const router = express.Router();

const {sucess, fail} = require("../helpers/resposta");

const DisciplinaDAO = require("../model/Disciplina");



// -------------------------------------------------------
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


router.put("/:codigo", (req, res) => {
    const { codigo } = req.params
    const { nome, professor, dependencia} = req.body
    
    let obj = {} 

    //TODO valida os campos
    if (codigo) obj.codigo = codigo
    if (nome) obj.nome = nome
    if (professor) obj.professor = professor 
    if (dependencia) obj.dependencia = dependencia
    
    if(obj == {}) {
        return res.status(500).json(fail("Não foi possível alterar o documento"))
    }

    DisciplinaDAO.update(codigo, obj).then(disciplina => {
        if(disciplina) {
            res.json(sucess(disciplina))
        } else { 
            res.sendStatus(500).json(fail("Falha ao alterar a disciplina"))
        }
    })
    
})
//codigo, nome, professor, dependencia


// deletar 
router.delete("/:codigo", (req, res) => { 
    DisciplinaDAO.delete(req.params.codigo).then(disciplina => {
        if (disciplina)
            res.json(sucess(disciplina))
        else
            res.status(500).json(fail("Disciplina não encontrado"))
    }).catch(err => {
        console.log(err)
        res.status(500).json(fail("Falha ao excluir a disciplina"))
    })
})


module.exports = router;