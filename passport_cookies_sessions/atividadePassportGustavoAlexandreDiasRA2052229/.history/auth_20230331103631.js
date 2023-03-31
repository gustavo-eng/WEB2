const bcrypt = require('bcryptjs')

const texto = '123'

let hash = bcrypt.hashSync(texto)

const users =  [
    {
        _id: 1, 
        username: 'adm',
        password: hash
    } 
]


