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
    },
    {
        tableName: 'Disciplinas'
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

    getByCodigo: async (codigo) => {
        return await DisciplinaModel.findOne({ where: { codigo: codigo } });
    }, 

    update: async function(id, obj) {
        
        let disciplina = await DisciplinaModel.findByPk(id)
        if (!disciplina) {
            return false
        }
        
        Object.keys(obj).forEach(key => book[key] = obj[key]) // entender 
        await disciplina.save()
        return disciplina
    },

   
}


module.exports = CRUD;

 /* 
const project = await Project.findOne({ where: { title: 'My Title' } });
if (project === null) {
  console.log('Not found!');
} else {
  console.log(project instanceof Project); // true
  console.log(project.title); // 'My Title'
}

 */
