const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require('../helpers/mysql'); 


const DisciplinaModel = sequelize.define('Disciplina', 

    // {
        
    //     codigo: {
    //         type: DataTypes.STRING, // pode ser INTEGER.UNSIGNED
    //         autoIncrement: true,
    //         allowNull: false,
    //     },
    //     nome: { 
    //         type: DataTypes.STRING, 
    //         allowNull: false, 
    //     }, 
    //     professor: {
    //         type: DataTypes.STRING,
    //         allowNull: true,
    //     }, 
    //     dependencia: {
    //         type: DataTypes.STRING,
    //         allowNull: true,
    //     },  
        
    //     //freezeTableName: true // pode ser retirado 
    // }

    {
        nome: DataTypes.STRING,  
        autor: DataTypes.STRING,
        editora: DataTypes.STRING,
        ano: DataTypes.INTEGER
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