const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
   nome: String,
   prioridade: String
})



// const kittySchema = new mongoose.Schema({
//     nome: String,
//     idade: {type: Number, min: 15, max: 30, default: 22}
// })