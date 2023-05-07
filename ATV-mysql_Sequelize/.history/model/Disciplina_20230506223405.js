const {DataTypes} = require("sequelize");
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

export default DisciplinaModel.sync();


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

    update: async function(codigo, obj) {
        
        let disciplina = await DisciplinaModel.findOne({ where: { codigo: codigo } });
        if (!disciplina) {
            return false
        }
        
        Object.keys(obj).forEach(key => disciplina[key] = obj[key]) // entender 
        await disciplina.save()
        return disciplina
    }, 
    delete: async (codigo) => {
        const disciplina = await DisciplinaModel.findOne({ where: { codigo: codigo } });
        return disciplina.destroy()
    }
 
   
}


module.exports = {CRUD, DisciplinaModel};

