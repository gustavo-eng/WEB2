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
    } 
}