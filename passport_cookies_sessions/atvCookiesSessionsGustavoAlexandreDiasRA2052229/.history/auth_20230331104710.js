const bcrypt = require('bcryptjs')
const { Passport } = require('passport')

const texto = '123'

let hash = bcrypt.hashSync(texto)

console.log(' ---- VALOR DO HASH ---- ')
console.log(hash)

const users =  [
    {
        _id: 1, 
        username: 'adm',
        password: hash.toString(),
        email: 'gustavo@hotmail.com'
    } 
]

module.exports = function(passport) {

    function findUser(username) { // aqui vai ser feito a consulta na memoria, mas aqui vai a consulta no banco de dados 
        return users.find(item => item.username === username)
    }

    function findUserById(id) {
        return users.find(item => item._id === id)
    }

    // uma vez q eu me autentique, o passport vai salvar um cookie no frontend, no cliente do usuario 
    // e vai salvar um sessao no servidor (backend), pode ser no banco de dados ou na memoria do servidor  
    // done == callback
    passport.serializeUser((user, done) =>{
        // primeiro parametro  é o erro se tiver, ai pode fazer algum tipo de validacao aqui 
        // segundo paramatro esta relacionado a qual informacao do usuario eu irei salvar 
        done(null, user._id);  

        

    }) 

    //configura o passport 
}


