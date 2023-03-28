
var express = require('express'); 
var router = express.Router();

// json - disciplinas matriculadas 
const disciplinas = require('../model/materias')
let matricula = disciplinas


router.get('/', (req, res) => { 
    console.log('ROTA PRINCIPAL ')
    for(let i = 0; i < matricula.length - 1; i++){
        if(matricula[i].name == 'web') {
            console.log('Matricula selecionada na rota /disciplinas/:nome')
            console.log(matricula[i])
            //res.render('ementa', {ementa: ementa}) 
        } 
    }
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
        if(matricula[i].name === nome) {
            let ementa = matricula[i].description 
            console.log('Matricula selecionada na rota /disciplinas/:nome')
            console.log(ementa)
            //res.render('ementa', {ementa: ementa}) 
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