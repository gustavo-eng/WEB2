const bcrypt = require('bcryptjs')

const texto = '123'

let hash = bcrypt.hashSync(texto)

console.log(' ---- VALOR DO HASH ---- ')
console.log(hash)

const users =  [
    {
        _id: 1, 
        username: 'adm',
        password: hash,
        email: 'gustavo@hotmail.com'
    } 
]


