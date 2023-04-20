const bcrypt = require('bcryptjs')

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

    

    //configura o passport 
}


