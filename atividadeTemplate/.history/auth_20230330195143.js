const bcrypt = require('bcrypt')
let text = '123'
const hash  = bcrypt.hashSync(text, 10)
const localStrategy = require('passport-local').Strategy;
var passport = require('passport')

const users = [{
    _id: 1,
    username: 'gustavo',
    password: hash,
    email: 'gustavo@hotmail.com'
}]

module.exports = function(passport) {

    function findUser(username) {
        return users.find(item => item.username = username)
    }

    function findUserById(id) {
        return users.find(item => item._id = id)
    }

    // passport.serializeUser((user, done) => {
    //     done(null, user._id);
    // });

    // passport.deserializeUser((id, done) => {
    //     try {
    //         const user = findUserById(id);
    //         done(null, user);
    //     } catch (err) {
    //         done(err, null);
    //     }
    // });
    
    var passport = require('passport');
    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
    passport.deserializeUser((id, done) => {
        
        const user = findUserById(id);
        done(null, user);

      });
    passport.use(new localStrategy({

        usernameField: 'username',
        passwordField: 'password',

    }, (username, password, done) => {
        try {

            const user = findUser(username); 
            if(!user) {
                return done(null, false)
            }
            const isValid =  bcrypt.compareSync(password, user.password);

            if(!isValid) {
                return done(null, false)
            } else {
                return done(null, user)
            }

        } catch(err) {
            console.log(err)
            return done(err, false)
        }

    }))
       //configura o passport 
}