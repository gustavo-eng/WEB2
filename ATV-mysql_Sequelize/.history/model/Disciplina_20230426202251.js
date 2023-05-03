const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require('../helpers/mysql'); 


const Disciplina = sequelize.define('Disciplina', {
        codigo: {
            type: DataTypes.STRING, // pode ser INTEGER.UNSIGNED
            autoIncrement: true,
            allowNull: false,
        },
        nome: { 
            type: DataTypes.STRING, 
            allowNull: false, 
        }, 
        professor: {
            type: DataTypes.STRING,
            allowNull: true,
        }, 
        dependencia: {
            type: DataTypes.STRING,
            allowNull: true,
        } 
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