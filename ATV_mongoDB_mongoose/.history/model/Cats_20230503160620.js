const mongoose = require("mongoose")

// tutorial documentacao 

const kittySchema = new mongoose.Schema({
    nome: String,
    idade: {type: Number, min: 15, max: 30, default: 22}
})


const Kitten = mongoose.model("Kitten", kittySchema)
// A model is class in which we build documents 
 

const silence = new Kitten({nome: "Gustavo"})


