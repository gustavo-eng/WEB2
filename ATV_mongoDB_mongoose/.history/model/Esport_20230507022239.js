const mongoose = require('mongoose')

const EsportSchema = new mongoose.Schema({
    nome: String,
    estilo: String,
    coletivo: Boolean
})

const EsportModel = mongoose.model("Esport" , EsportSchema)



const CRUD = {
    list: async () => {
        const sports = await EsportModel.find({}).lean()
        return sports
    },
    save: async (nome, estilo, coletivo) => {
        const sport = new EsportModel({
            nome: nome,
            estilo: estilo,
            coletivo: coletivo 
        })
        await sport.save()
        return sport
    }, 

    update: async (id, nome, estilo, coletivo) => {

        // let sport = await EsportModel.findById(id)
        // if(!sport) {
        //     return  false
        // }  

        // Object.keys(obj).forEach(key => sport[key] = obj[key]) // understand 
        // await sport.save()
        // return sport
        
        let sport = await EsportModel.findByIdAndUpdate(id, {nome: nome, estilo: estilo, coletivo: coletivo})
            .then(updatedSport => {return updatedSport})
            .catch(err => {
                console.log('Erro ao alterar sport. ERRO: '+ err)
            })


    },

    delete: async (id) => {
        return await EsportModel.findByIdAndUpdate()
    }

}

module.exports = CRUD


// update: async function(id, obj) {
//     //Devolve o objeto antigo
//     //return await BookModel.findByIdAndUpdate(id, {$set: obj}) 

//     let book = await BookModel.findById(id)
//     if (!book) {
//         return false
//     }
    
//     Object.keys(obj).forEach(key => book[key] = obj[key])
//     await book.save()
//     return book
// },