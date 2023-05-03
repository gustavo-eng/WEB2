
//db.js 

const Sequelize = require("sequelize")
//const sequelize = new Sequelize("teste", "site","password"
const sequelize = new Sequelize("teste", "root","password",  

{host:  "127.0.0.1", dialect:  "mysql"})

sequelize.authenticate()  // to test if the connection is OK. 
    .then(() => console.log("Conectado no Mysql!")) // teste se a conexao esta OK. 
    .catch(error => console.log(error))


module.exports = sequelize


/* 

const sequelize = new Sequelize(NOME_BANCO, USUARIO_ACESSA_BANCO,SENHA_USER,  

{host:  LOCAL_DO_BANCO, dialect:  BANCO_UTILIZADO, port: 3306 ("default port - mysql") })
*/

/* 
modelo de dados, objeto que faz o mapeamento de linhas e colunas 
em uma tabela do banco de dados. 

*/

