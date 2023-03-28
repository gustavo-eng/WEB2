
var express = require('express'); 
var router = express.Router();

// json - disciplinas matriculadas 
const disciplinas = require('../model/materias')
let matricula = disciplinas


router.get('/', (req, res) => { 
    res.render('principal'); 
})

// Pagina curriculo Profissional 
router.get('/cv', (req, res) => {
    res.render('cv'); 
})

// Pagina que lista as disciplinas que estou cursando 
// Passar parametros para ser analisado 
// PASSAR APENAS O ATRIBUTO DESCRIPTION como parametro 

router.get('/disciplinas', (req, res) => {
    res.render('disciplinas', {disciplinas: disciplinas});
})



router.get('/midia', (req, res) => {
    res.render('midia')
})

router.get('/disciplinas/:nome', (req, res) => {
    const nome = req.params.nome
 
   for(let i = 0; i < matricula.length - 1; i++){
        if(matricula[i].name == nome) {
            console.log('Matricula selecionada na rota /disciplinas/:nome')
            res.render('ementa', {ementa: matricula[i].description}) 
        } else {
            res.send(`Nao foi possivel encontrar a disciplina ${nome} na disciplinas matriculadas`)
        }
    }

})




module.exports = router;


/* 
Desenvolva uma página Web pessoal utilizando Node e Express.js com as seguintes rotas:

/ - Página inicial (contém links para as demais páginas)
/cv - Página com seu currículo profissional
/disciplinas - Página que lista as disciplinas que você está cursando neste semestre
/disciplinas/nome - Mostra um resumo da disciplina selecionada
/midia - Página com links das suas redes sociais, fotos e trabalhos artisticos que eventualmente você produz
Observação: é necesário utilizar um mecanismo de template.

*/