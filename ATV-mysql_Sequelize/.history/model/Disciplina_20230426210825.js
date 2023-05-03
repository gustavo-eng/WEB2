const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require('../helpers/mysql'); 


const DisciplinaModel = sequelize.define('Disciplina', 

    {
        
        codigo: {
            type: DataTypes.STRING, // pode ser INTEGER.UNSIGNED
            //autoIncrement: true,
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
        },  
        //freezeTableName: true // pode ser retirado 
    }
    
    
    
);

DisciplinaModel.sync();


const CRUD = {
    save: async (codigo, nome, professor, dependencia) => {
        const disciplina = await DisciplinaModel.create({
            codigo: codigo, 
            nome: nome, 
            professor: professor, 
            dependencia: dependencia
        })
        return disciplina
    }, 
    list: async function() {
        const disciplinas = await DisciplinaModel.findAll() // retorna todos os produtos cadastrados 
        return disciplinas;
    },

   
}


module.exports = CRUD;


 // list: async function() {
    //     const disciplinas = await DisciplinaModel.findAll() // retorna todos os produtos cadastrados 
    //     return disciplinas
    // },
    
    // save: async function(nome, autor, editora, ano) { 
    //     const book = await DisciplinaModel.create({ // insert de um novo produto 
    //         nome: nome,
    //         autor: autor,
    //         editora: editora,
    //         ano: ano
    //     })
        
    //     return disciplina
    // },

