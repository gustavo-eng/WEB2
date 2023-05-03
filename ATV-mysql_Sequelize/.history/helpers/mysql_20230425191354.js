
//db.js 

const Sequelize = require("sequelize")

const sequelize = new Sequelize("teste", "site","password",  

{host:  "localhost", dialect:  "mysql"})

sequelize.authenticate()
    .then(() => console.log("Conectado no Mysql!"))
    .catch(error => console.log(error))

module.exports = sequelize


/* 

const sequelize = new Sequelize(NOME_BANCO, USUARIO_ACESSA_BANCO,SENHA_USER,  

{host:  LOCAL_DO_BANCO, dialect:  BANCO_UTILIZADO, port: 3306 ("default port - mysql") })
*/