const bcrypt = require('bcryptjs')

const texto = '123'

let hash = bcrypt.hashSync(texto)



