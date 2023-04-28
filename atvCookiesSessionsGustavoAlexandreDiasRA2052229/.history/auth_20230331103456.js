const bcrypt = require('bcryptjs')

const texto = 'gustavo123'

let hash = bcrypt.hashSync(texto)

