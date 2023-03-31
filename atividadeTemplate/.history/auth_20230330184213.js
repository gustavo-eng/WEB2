const bcrypt = require('bcrypt')
let text = '123'
bcrypt.hashSync(text)
const localStrategy = require('passport-local').Strategy;

const users = [{
    _id: 1,
    username: 'gustavo',
    password: text,
    email: 'gustavo@hotmail.com'
}]

module.exports = function(passport) {

    function findUser(username) {
        return users.find(item => item.username = username)
    }

    function findUserById(id) {
        return users.find(item => item._id = id)
    }

    passport.serializeUser((user, done) => {
        //slava o cookie e salva a sessao
        done(null, user._id) // (erro(da pra fazer algum tratamento), informacao do user q via salvar)
        
    }) 

    passport.deserializeUser((id, done) => {
        // transforma o cookies em bytes pra transforma na informacao do user  
        try {

            const user = findUserById(id)
            done(null, user)
            
        } catch(err) {
            console.log(err)
            return done(err, null)
        }
    }) 
 
    passport.use(new localStrategy({

        usernameField: 'username',
        passwordField: 'password',

    }, (username, password, done) => {
        try {

            const user = findUser(username); 
            if(!user) {
                return done(null, false)
            }
            
        } catch(err) {
            console.log(err)
            return done(err, false)
        }

    }))
       //configura o passport 
}