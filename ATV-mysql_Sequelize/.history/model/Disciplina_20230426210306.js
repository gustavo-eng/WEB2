const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require('../helpers/mysql'); 


const DisciplinaModel = sequelize.define('Disciplina', 

    {
        
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
        },  
        
        //freezeTableName: true // pode ser retirado 
    }

    
);

DisciplinaModel.sync();


const CRUD = {
    // save: async (codigo, nome, professor, dependencia) => {
    //     const disciplina = await DisciplinaModel.create({
    //         codigo: codigo, 
    //         nome: nome, 
    //         professor: professor, 
    //         dependencia: dependencia
    //     })
    //     return disciplina
    // }, 
    // list: async function() {
    //     const disciplinas = await DisciplinaModel.findAll() // retorna todos os produtos cadastrados 
    //     return disciplinas;
    // },

    list: async function() {
        const disciplinas = await DisciplinaModel.findAll() // retorna todos os produtos cadastrados 
        return disciplinas
    },
    
    save: async function(nome, autor, editora, ano) { 
        const book = await DisciplinaModel.create({ // insert de um novo produto 
            nome: nome,
            autor: autor,
            editora: editora,
            ano: ano
        })
        
        return disciplina
    },
}


module.exports = CRUD;


/* 
save: async (codigo, nome, professor, dependencia) => {
        const disciplina = await Disciplina.create({
            codigo: codigo, 
            nome: nome, 
            professor: professor, 
            dependencia: dependencia
        })
        return disciplina
    }
*/




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