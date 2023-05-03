
var express = require('express'); 
var router = express.Router();

// json - disciplinas matriculadas 
const disciplinas = require('../model/materias')
let matricula = disciplinas
matricula = disciplinas.forEach(el => {
    if(el.name == 'web'){
        return el
    }
})

router.get('/', (req, res) => {
    console.log('MATRICULAA --- ')
    //console.log(disciplinas)
    console.log(matricula[0])
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
    // let matriz = [] 
    // for(let i = 0; i < disciplinas.length - 1; i++){
    //     console.log('Entrou no for')
    //     //const teste = disciplinas.find(elemento => elemento.name == nome)
    //     if (disciplinas[i].name == nome.toString()) {
    //         console.log('prog')
    //         console.log(disciplinas[i].name)
    //         console.log('entrou no if')
    //         console.log(disciplinas[i].name)
    //         matriz = disciplinas[i]
    //     } 
    //     res.render('ementa', {ementa: disciplinas}) 
      
    // }
    // let itemCorrespondente = disciplinas.find(elemento => elemento.name === nome);
    //console.log('ok!!!' + matriz )
   // console.log(` ==== /disciplinas/${matriz} ====`)
   console.log('typeOf --> ' + typeof(nome) )
   res.render('ementa', {ementa: disciplinas}) 

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