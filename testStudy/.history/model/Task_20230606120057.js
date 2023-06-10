const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
   nome: String,
   prioridade: String
})


const TaskSModel = mongoose.model("Task", TaskSchema)


module.exports = {
    list: async () => {
        const tasks = await TaskSModel.find({}).lean()
        return tasks
    },

    save: async (nome, prioridade) => {
        const task = new TaskSModel({
            nome: nome,
            prioridade: prioridade
        })
    }
}



// const kittySchema = new mongoose.Schema({
//     nome: String,
//     idade: {type: Number, min: 15, max: 30, default: 22}
// })