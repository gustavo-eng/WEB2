const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const texto = '123'

let hash = bcrypt.hashSync(texto)

console.log(' ---- VALOR DO HASH ---- ')
console.log(hash)

const users =  [
    {
        _id: 1, 
        username: 'adm',
        password: hash.toString(), // .username
        email: 'gustavo@hotmail.com'
    } 
]


function auth(passport)  {

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
            console.log(err);
            return done(err, null);
        }
    }) 

    // new LocalStrategy  - espera um objeto e um funcao 
    passport.use(new LocalStrategy({ // basiscamente essa funcao faaz consultas para verificar user no banco e passar a callback se autenticou ou n 
        /* Esto objeto eh basicamente dizer para o passport  quais sao os campos que vao vir do login que  ele vai usar 
        para  fazer  a autenticacao */
        usernameField: 'username',
        passwordField: 'password'
    }, (username, password, done) => {
        try {

            const user = findUser(username); 
            if(!user) {
                return done(null, false);
            } 

            // encontrou o user, o proximo passo eh verificar a senha 
            const isValid =  bcrypt.compareSync(password, user.password); // retorna true ou false 

            if(!isValid) {
                return done(null, false); 
            } else {
                return done(null, user); 
            }

        } catch(err) {
            console.log(err)
            done(err, false); // segundo param == booleano informando se autenticou ou nao 
        }
    }))
    //configura o passport 
}


module.exports = auth;

/* 

A tela de login funciona, mas ainda n esta bloqueando os usuarios a acessarem as areas privadas. Pela url ainda esta 
sendo possivel acessar. 

*/






