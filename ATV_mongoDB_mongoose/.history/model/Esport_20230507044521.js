const mongoose = require('mongoose')

const AutoIncremnt = require('mongoose-sequence')


const EsportSchema = new mongoose.Schema({
    // codigo: {type: Number, unique: true},
    nome: String,
    estilo: String,
    coletivo: Boolean
})


// EsportSchema.plugin(AutoIncremnt, {inc_field: 'codigo'})

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
        let sport = await EsportModel.findByIdAndUpdate(id, {nome: nome, estilo: estilo, coletivo: coletivo})
            .then(updatedSport => {return updatedSport})
            .catch(err => {
                console.log('Erro ao alterar sport. ERRO: '+ err)
                return
            })
        
        return sport
    },  

    delete: async (id) => {
        return await EsportModel.findByIdAndDelete(id)
    }, 

    getById: async () => {
        return await EsportModel.findById(id).lean()
    }

}

module.exports = CRUD








