const mongoose = require('mongoose')

const EsportSchema = new mongoose.Schema({
    nome: String,
    estilo: String,
    coletivo: Boolean
})

const EsportModel = mongoose.model("Esport" , EsportSchema)


