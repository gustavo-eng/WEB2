const bcrypt = require('bcryptjs')
const LocalStrategy = require('passport-local').Strategy;


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
    // e vai salvar uma sessao no servidor (backend), pode ser no banco de dados ou na memoria do servidor  
    // done == funcao de callback
    passport.serializeUser((user, done) =>{
        // primeiro parametro  é o erro se tiver, ai pode fazer algum tipo de validacao aqui, se quiser. 
        // segundo paramatro esta relacionado a qual informacao do usuario eu irei salvar. de preferencia q seja apenas um   
        done(null, user._id);  

        
    }) 

    // caminho inverso
    /* 
        Imagine que eu estou em uma rota, o passport tem que deserializar, ou seja, ele  precisa ler o cookie 
        e transformar em byte (em objeto novamento) de quando veio na request, para transformar isso na informacao do user novamnte 

    */
    passport.deserializeUser((id, done) => {
        try {
            const user   = findUserById(id)
            done(null, user);

        } catch(err) {
            console.log(err)
            return done(err, null)
        }
    }) 

    //configura o passport 
}


