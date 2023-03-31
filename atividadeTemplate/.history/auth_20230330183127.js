const bcrypt = require('bcrypt')
bcrypt.hashSync(/* passa o texto q quer sifrar */)
const users = [{
    _id: 1,
    username: 'gustavo',
    password: 'gustavo123',
    email: 'gustavo@hotmail.com'
}]

module.exports = function(passport) {

    function findUser(username) {
        return users.find(item => item.username = username)
    }

    function findUserById(id) {
        return users.find(item => item._id = id)
    }

    //configura o passport 
}