const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require("../helpers/mysql")
// produto.js 

//const Produto == const BookModel

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

BookModel.sync() // Verifica os modelos do projeto para com as tabelas
// que tem la no banco e garante que os dois estao iguais 



module.exports = {
    list: async function() {
        const books = await BookModel.findAll()
        return books
    },
    
    save: async function(nome, autor, editora, ano) { 
        const book = await BookModel.create({ // insert de um novo produto 
            nome: nome,
            autor: autor,
            editora: editora,
            ano: ano
        })
        return book
    },

    update: async function(id, obj) {
        
        let book = await BookModel.findByPk(id)
        if (!book) {
            return false
        }
        
        Object.keys(obj).forEach(key => book[key] = obj[key])
        await book.save()
        return book
    },

    delete: async function(id) {
        const book = await BookModel.findByPk(id)
        return book.destroy()
    },

    getById: async function(id) {
        return await BookModel.findByPk(id)
    }
}


// save: async function(nome, autor, editora, ano) { 
//     const book = await BookModel.create({ // insert de um novo produto 
//         nome: nome,
//         autor: autor,
//         editora: editora,
//         ano: ano
//     })
//     return book
// },


