const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require('../helpers/mysql'); 


const Disciplina = sequelize.define('Disciplina', {

})


/* 
const BookModel = sequelize.define('Book', 
 // aqui no esquema q a gnt faz o mapeamento  das colunas que vai ter no banco
 // para com as propriedades que vai ter no objeto local
    {
        nome: DataTypes.STRING,  
        autor: DataTypes.STRING,
        editora: DataTypes.STRING,
        ano: DataTypes.INTEGER
    }
)

*/