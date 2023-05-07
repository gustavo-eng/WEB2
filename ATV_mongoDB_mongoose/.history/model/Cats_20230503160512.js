const mongoose = require("mongoose")

// teste 
const kittySchema = new mongoose.Schema({
    nome: String,
    idade: {type: Number, min: 15, max: 30, default: 22}
})


