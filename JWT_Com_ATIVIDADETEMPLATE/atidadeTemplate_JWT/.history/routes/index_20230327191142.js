
var express = require('express'); 
var router = express.Router();

// json - disciplinas matriculadas 
const disciplinas = require('../model/materias')

router.get('/', (req, res) => {
    console.log('Disciplinas -->' )
    console.log(disciplinas)
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
    console.log(nome)
    console.log('------------- Mario --------')
    console.log(disciplinas[0])
    let itemCorrespondente = []
    let matriz = [] 
    disciplinas.forEach(elemento => {
        if (elemento.name === nome) {
            itemCorrespondente = elemento
            console.log('dentro do forEach' + elemento.name)
        }
    })
    ///----------------------------------------
    console.log('--- vou usar o for ---')
    for(let i = 0; i < disciplinas.length - 1; i++){
        
        console.log(disciplinas[i].cod)
        console.log('Entrou no for')
        if (disciplinas[i].cod === nome) {
            console.log('entrou no if')
            console.log(disciplinas[i].name)
            matriz = disciplinas[i]
        }
        console.log('matriz ===> ')
        console.log(matriz)
    }
    // let itemCorrespondente = disciplinas.find(elemento => elemento.name === nome);
    console.log('ok!!!' + itemCorrespondente )
    console.log(` ==== /disciplinas/${itemCorrespondente} ====`)
    res.render('ementa', {ementa: itemCorrespondente}) 
    

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