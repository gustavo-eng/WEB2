const express = require('express');
const router  = express.Router();
const SECRET  = 'gustavo' // passar para uma variavel de ambiente

//JWT 
const jwt = require('jsonwebtoken'); //gera e verifica token 

router.get('/', (req, res) => {
    res.render('login')
})

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token']
    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) { // token ausente ou token invalido 
            return res.status(401).end();
        } 
        // caso contrario 
        // obj deconded vem preenchido como no payload 
        req.userId = decoded.userId;
        next();
    })
}

router.get('/acesso', verifyJWT ,(req, res) => {
    console.log(req.userId + 'fez a chamada')
    res.json({id: 1, nome: 'Gustavo'})
    //res.send('Usuario autorizado')
})

// alem de verifyJWT 
/* 
Pode ter outro middleware referente a autorizacao para verificar,
OK, aquele cliente esta autenticado, mas ele possui permissao para
acessar essa rota ?? 
Pode pegar o ID do usuario e bater com uma tabela de IDs que tem 
permissoes para acessar tal rota. 
*/

/* 
o logout acontece do lado do cliente e tbm do lado do servidor 
*/


//PAREI EM 15:30
 
router.post('/',(req, res) => {
    if(req.body.usuario === 'gustavo' && req.body.senha === '123456') {
        //assina, contem 3 partes.
        //contem 1. metadados
        // 2. payload (algumas informacoes que permita identificar melhor o user )
        // 3. Contem assinatura digital  (unico, e somente o servidor vai ter, pois ele vai ter um secret utilizado para fazer  essa assinatura digital )
        // passa  o payload e o secret utiliza para a assinatura digial
        const token =  jwt.sign({userId: 1}, SECRET, {expiresIn: 150})
        //return res.json({ auth: true, token})   
        console.log(JSON.stringify({ auth: true, token}))
        return res.redirect('/index') 
    } else {
        res.status(401).send('Unauthorized user')
    }
})


module.exports = router;